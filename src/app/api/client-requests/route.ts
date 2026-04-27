import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/SupabaseAuthClient';
import { syncToGoogleSheets } from '../../../lib/googleSheetSync';
import { generateAIPost } from '../../../lib/client-request/aiPostSevice';

// Brevo Configuration
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'aryan@execumarketing.com';
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'ExecuMarketing';
const BREVO_TEMPLATE_ID = parseInt(process.env.BREVO_TEMPLATE_ID || '21');

export async function POST(request: NextRequest) {
  try {


    // Parse request body
    const body = await request.json();

    const {
      fullName,
      email,
      whatsappNumber,
      serviceCategory,
      subCategory,
      requirement
    } = body;

    // Validate required fields
    if (!fullName || !email || !whatsappNumber || !serviceCategory || !subCategory || !requirement) {
      console.log("❌ Validation failed: Missing required fields");

      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique request ID
    const requestId = `REQ_${Date.now()}_${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    const aiPost = await generateAIPost({
      fullName,
      serviceCategory,
      subCategory,
      requirement,
      requestId
    });


    const { data: inserted, error: insertError } = await supabase
      .from('client_requests')
      .insert([{
        request_id: requestId,
        full_name: fullName,
        email: email,
        phone: whatsappNumber,
        service_category: serviceCategory,
        sub_category: subCategory,
        requirement: requirement,
        ai_post_generated: true,
        ai_post_content: aiPost,
        ai_post_generated_at: new Date().toISOString(),
        status: 'pending',
        created_at: new Date().toISOString(),
        instant_email_sent: false,
      }])
      .select()
      .single();

    if (insertError) {
      console.error("❌ Supabase insertion failed:", insertError);
      throw insertError;
    }

    let clientEmailSent = false;
    let adminEmailSent = false;

    // 2. Send client email using Brevo
    try {
      const clientEmailResult = await sendBrevoClientEmail(
        email,
        fullName,
        requestId,
        serviceCategory,
        subCategory
      );

      clientEmailSent = clientEmailResult;

      if (clientEmailSent) {
        await supabase
          .from('client_requests')
          .update({
            instant_email_sent: true,
            instant_email_sent_at: new Date().toISOString()
          })
          .eq('id', inserted.id);
      }

    } catch (emailError) {
      console.error("❌ Client email failed:", emailError);
    }

    // 3. Send admin email using Brevo
    try {

      const adminEmailResult = await sendBrevoAdminEmail({
        fullName,
        email,
        whatsappNumber,
        serviceCategory,
        subCategory,
        requirement,
        requestId,
        aiPost,
        timestamp: new Date().toISOString()
      });

      adminEmailSent = adminEmailResult;

    } catch (adminEmailError) {
      console.error("❌ Admin email failed:", adminEmailError);
    }

    // 4. Sync Google Sheets
    try {

      await syncToGoogleSheets({
        requestId,
        timestamp: new Date().toISOString(),
        fullName,
        email,
        whatsappNumber,
        serviceCategory,
        subCategory,
        requirement,
        aiPost,
        status: 'pending'
      });


    } catch (sheetsError) {
      console.error("❌ Google Sheets sync failed:", sheetsError);
    }


    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully',
      requestId,
      data: {
        id: inserted.id,
        requestId,
        clientEmailSent,
        adminEmailSent,
        aiPostGenerated: true
      }
    });

  } catch (error) {

    console.error("🔥 API fatal error:", error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Function to send client email using Brevo
async function sendBrevoClientEmail(
  toEmail: string,
  toName: string,
  requestId: string,
  serviceCategory: string,
  subCategory: string
): Promise<boolean> {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: BREVO_SENDER_NAME,
          email: BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
        subject: `Thank you for your request - ${requestId}`,
        templateId: BREVO_TEMPLATE_ID,
        params: {
          full_name: toName,
          request_id: requestId,
          service_category: serviceCategory,
          sub_category: subCategory,
          website_url: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://execumarketing.com',
        },
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('Client email sent successfully:', result);
      return true;
    } else {
      console.error('Brevo API error for client email:', result);
      return false;
    }
  } catch (error) {
    console.error('Fetch error for client email:', error);
    return false;
  }
}

// Function to send admin email using Brevo
async function sendBrevoAdminEmail(data: {
  fullName: string;
  email: string;
  whatsappNumber: string;
  serviceCategory: string;
  subCategory: string;
  requirement: string;
  requestId: string;
  aiPost: string;
  timestamp: string;
}): Promise<boolean> {
  try {
    // Create admin email content
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Client Request - ${data.requestId}</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background-color: #F4F0E4;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(28, 35, 33, 0.08);
          }
          .header {
            background: linear-gradient(135deg, #1C2321 0%, #0F1513 100%);
            padding: 32px 24px;
            text-align: center;
            border-bottom: 4px solid #44A194;
          }
          .logo-text {
            font-size: 28px;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.02em;
          }
          .logo-text span {
            color: #44A194;
          }
          .content {
            padding: 32px 24px;
          }
          h1 {
            font-size: 24px;
            font-weight: 700;
            color: #1C2321;
            margin-bottom: 24px;
          }
          .info-box {
            background-color: #F4F0E4;
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 24px;
          }
          .info-row {
            display: flex;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
          }
          .info-label {
            width: 140px;
            font-weight: 600;
            color: #1C2321;
            font-size: 13px;
          }
          .info-value {
            flex: 1;
            color: #4B5563;
            font-size: 13px;
          }
          .ai-post-box {
            background-color: #1C2321;
            border-radius: 16px;
            padding: 20px;
            margin-top: 24px;
          }
          .ai-post-box h3 {
            color: #44A194;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
          }
          .ai-post-box p {
            color: #ffffff;
            font-size: 13px;
            line-height: 1.6;
          }
          .badge {
            display: inline-block;
            background-color: #44A194;
            color: #ffffff;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
          }
          .footer {
            background-color: #F4F0E4;
            padding: 20px;
            text-align: center;
            font-size: 11px;
            color: #9CA3AF;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-text">
              Execu<span>Marketing</span>
            </div>
          </div>
          <div class="content">
            <h1>✨ New Client Request Received</h1>
            <div class="badge">${data.serviceCategory} / ${data.subCategory}</div>
            
            <div class="info-box">
              <div class="info-row">
                <div class="info-label">Request ID:</div>
                <div class="info-value">${data.requestId}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Client Name:</div>
                <div class="info-value">${data.fullName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value">${data.email}</div>
              </div>
              <div class="info-row">
                <div class="info-label">WhatsApp:</div>
                <div class="info-value">${data.whatsappNumber}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Service:</div>
                <div class="info-value">${data.serviceCategory} → ${data.subCategory}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Submitted:</div>
                <div class="info-value">${new Date(data.timestamp).toLocaleString('en-IN')}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Requirement:</div>
                <div class="info-value">${data.requirement}</div>
              </div>
            </div>
            
            <div class="ai-post-box">
              <h3>🤖 AI Generated Community Post</h3>
              <p>${data.aiPost}</p>
            </div>
          </div>
          <div class="footer">
            <p>© 2024 ExecuMarketing. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: BREVO_SENDER_NAME,
          email: BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.ADMIN_EMAIL || 'admin@execumarketing.com',
            name: 'Admin',
          },
        ],
        subject: `🔔 New Client Request: ${data.requestId} - ${data.serviceCategory}`,
        htmlContent: adminEmailHtml,
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('Admin email sent successfully:', result);
      return true;
    } else {
      console.error('Brevo API error for admin email:', result);
      return false;
    }
  } catch (error) {
    console.error('Fetch error for admin email:', error);
    return false;
  }
}

export async function GET() {

  console.log("⚠️ GET method not allowed for /api/client-requests");

  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}