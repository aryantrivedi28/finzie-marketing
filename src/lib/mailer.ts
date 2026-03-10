// lib/services/emailService.ts
import nodemailer from "nodemailer";

// Create transporter (reusable)
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send email to client (thank you)
export const sendClientEmail = async (
  to: string,
  fullName: string,
  requestId: string,
  serviceCategory: string,
  subCategory: string
) => {
  try {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header with brand color -->
          <div style="background: #f7af00; padding: 32px 24px; text-align: center;">
            <h1 style="color: #050504; margin: 0; font-size: 32px; font-weight: 600;">Thank You!</h1>
            <p style="color: #050504; margin: 8px 0 0 0; opacity: 0.9;">We've received your request</p>
          </div>
          
          <!-- Main content -->
          <div style="padding: 32px 24px;">
            <p style="font-size: 16px; margin-bottom: 24px;">Dear <strong>${fullName}</strong>,</p>
            
            <p style="font-size: 16px; margin-bottom: 24px;">Thank you for submitting your request for <strong style="color: #f7af00;">${serviceCategory} - ${subCategory}</strong> services. Our team is already reviewing your requirements and will match you with the perfect expert.</p>
            
            <!-- Request details card -->
            <div style="background: #f8f9fa; padding: 24px; border-radius: 12px; margin-bottom: 28px; border-left: 4px solid #f7af00;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #666;">
                <span style="font-weight: 600; color: #333;">Request ID:</span> 
                <span style="font-family: monospace; background: #fff; padding: 4px 8px; border-radius: 4px; border: 1px solid #e0e0e0;">${requestId}</span>
              </p>
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
                <span style="font-weight: 600; color: #333;">Service:</span> ${serviceCategory}
              </p>
              <p style="margin: 0; font-size: 14px; color: #666;">
                <span style="font-weight: 600; color: #333;">Specialization:</span> ${subCategory}
              </p>
            </div>
            
            <!-- What happens next -->
            <h3 style="font-size: 18px; margin-bottom: 20px; color: #333;">What happens next?</h3>
            
            <table style="width: 100%; margin-bottom: 32px;">
              <tr>
                <td style="padding-bottom: 16px; vertical-align: top; width: 30px;">
                  <span style="display: inline-block; width: 24px; height: 24px; background: #f7af00; color: #050504; border-radius: 50%; text-align: center; line-height: 24px; font-weight: bold;">1</span>
                </td>
                <td style="padding-bottom: 16px;">
                  <p style="margin: 0; font-weight: 600;">AI Analysis</p>
                  <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">Our AI system analyzes your requirements in detail</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 16px; vertical-align: top;">
                  <span style="display: inline-block; width: 24px; height: 24px; background: #f7af00; color: #050504; border-radius: 50%; text-align: center; line-height: 24px; font-weight: bold;">2</span>
                </td>
                <td style="padding-bottom: 16px;">
                  <p style="margin: 0; font-weight: 600;">Expert Matching</p>
                  <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">We match you with top specialists in ${subCategory}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 0; vertical-align: top;">
                  <span style="display: inline-block; width: 24px; height: 24px; background: #f7af00; color: #050504; border-radius: 50%; text-align: center; line-height: 24px; font-weight: bold;">3</span>
                </td>
                <td style="padding-bottom: 0;">
                  <p style="margin: 0; font-weight: 600;">Specialist Recommendations</p>
                  <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">You'll receive specialist profiles within 24 hours</p>
                </td>
              </tr>
            </table>
            
            <!-- CTA Button -->
            <div style="text-align: center; margin: 32px 0 24px;">
              <a href="https://yourdomain.com/status/${requestId}" style="background: #f7af00; color: #050504; padding: 14px 36px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; border: none; box-shadow: 0 2px 8px rgba(247, 175, 0, 0.3);">Track Your Request</a>
            </div>
            
            <!-- Note -->
            <p style="font-size: 14px; color: #888; text-align: center; margin-top: 24px; padding-top: 24px; border-top: 1px solid #e0e0e0;">
              We typically respond within 24 hours. You'll receive another email when specialists are matched.
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #f0eadd; padding: 24px; text-align: center; font-size: 13px; color: #666;">
            <p style="margin: 0 0 8px 0;">© 2024 Finzie. All rights reserved.</p>
            <p style="margin: 0;">
              <a href="#" style="color: #666; text-decoration: none; margin: 0 8px;">Privacy Policy</a> | 
              <a href="#" style="color: #666; text-decoration: none; margin: 0 8px;">Terms of Service</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Finzie" <${process.env.SMTP_USER}>`,
      to,
      subject: `✅ Request Received: ${serviceCategory} - ${subCategory}`,
      html: htmlContent,
    });

    console.log("✅ Client email sent to", to);
    return { success: true };

  } catch (err) {
    console.error("❌ Client email send error:", err);
    return { success: false, error: err };
  }
};

// Send email to admin with client details AND AI community post
export const sendAdminEmail = async (data: {
  fullName: string;
  email: string;
  whatsappNumber: string;
  serviceCategory: string;
  subCategory: string;
  requirement: string;
  requestId: string;
  aiPost: string;
  timestamp: string;
}) => {
  try {
    // Check if email is configured
    if (!process.env.SMTP_HOST || !process.env.ADMIN_EMAILS) {
      console.log('Email not configured, skipping admin notification');
      return { success: false, skipped: true };
    }

    const adminEmails = process.env.ADMIN_EMAILS.split(',').map(email => email.trim());

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5; }
          .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: #f7af00; padding: 30px 24px; text-align: center; }
          .header h1 { color: #050504; margin: 0; font-size: 28px; }
          .header p { color: #050504; margin: 8px 0 0 0; opacity: 0.9; }
          .content { padding: 32px 24px; }
          .section-title { font-size: 18px; font-weight: 600; margin: 24px 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f7af00; }
          .info-grid { background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 24px; }
          .info-row { display: flex; margin-bottom: 12px; }
          .info-label { width: 120px; font-weight: 600; color: #555; }
          .info-value { flex: 1; color: #333; }
          .requirement-box { background: #fff8e1; padding: 20px; border-radius: 12px; margin-bottom: 24px; border-left: 4px solid #f7af00; }
          .ai-post-box { background: #e8f5e9; padding: 20px; border-radius: 12px; margin-bottom: 24px; border-left: 4px solid #4caf50; }
          .ai-post-content { font-family: 'Courier New', monospace; white-space: pre-wrap; background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #c8e6c9; }
          .badge { display: inline-block; background: #f7af00; color: #050504; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
          .footer { background: #f0eadd; padding: 24px; text-align: center; font-size: 12px; color: #666; }
          .button { background: #f7af00; color: #050504; padding: 10px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; }
        </style>
      </head>
      <body>
        <div class="container">
          
          <!-- Header -->
          <div class="header">
            <h1>📋 New Client Request</h1>
            <p>AI Community Post Generated</p>
          </div>
          
          <!-- Content -->
          <div class="content">
            
            <!-- Request ID Badge -->
            <div style="text-align: center; margin-bottom: 24px;">
              <span class="badge">Request ID: ${data.requestId}</span>
            </div>
            
            <!-- Client Information -->
            <h2 class="section-title">👤 Client Information</h2>
            <div class="info-grid">
              <div class="info-row">
                <span class="info-label">Full Name:</span>
                <span class="info-value"><strong>${data.fullName}</strong></span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value"><a href="mailto:${data.email}">${data.email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">WhatsApp:</span>
                <span class="info-value">${data.whatsappNumber}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Service:</span>
                <span class="info-value"><strong>${data.serviceCategory}</strong> → ${data.subCategory}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Submitted:</span>
                <span class="info-value">${new Date(data.timestamp).toLocaleString()}</span>
              </div>
            </div>
            
            <!-- Client Requirements -->
            <h2 class="section-title">📝 Client Requirements</h2>
            <div class="requirement-box">
              <p style="margin: 0; white-space: pre-wrap;">${data.requirement.replace(/\n/g, '<br>')}</p>
            </div>
            
            <!-- AI Generated Community Post -->
            <h2 class="section-title">🤖 AI Generated Community Post</h2>
            <div class="ai-post-box">
              <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; color: #2e7d32;">✨ Ready to share in communities</span>
                <span style="font-size: 12px; background: #4caf50; color: white; padding: 4px 8px; border-radius: 4px;">AI Generated</span>
              </div>
              <div class="ai-post-content">
                ${data.aiPost.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="display: flex; gap: 12px; justify-content: center; margin: 32px 0;">
              <a href="https://yourdomain.com/admin/requests/${data.requestId}" class="button">View in Dashboard</a>
              <a href="mailto:${data.email}" class="button" style="background: #4caf50;">Reply to Client</a>
            </div>
            
            <!-- System Status -->
            <div style="background: #e3f2fd; padding: 16px; border-radius: 8px; margin-top: 24px; font-size: 13px;">
              <p style="margin: 0 0 8px 0; font-weight: 600;">✅ System Actions Completed:</p>
              <ul style="margin: 0; padding-left: 20px;">
                <li>✓ Client request saved to Supabase</li>
                <li>✓ AI community post generated and saved</li>
                <li>✓ Thank you email sent to client</li>
                <li>✓ Data synced to Google Sheets (if configured)</li>
              </ul>
            </div>
            
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <p style="margin: 0 0 8px 0;">© 2024 Finzie. All rights reserved.</p>
            <p style="margin: 0;">
              <a href="#" style="color: #666; text-decoration: none;">Dashboard</a> | 
              <a href="#" style="color: #666; text-decoration: none;">Settings</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
      NEW CLIENT REQUEST - ${data.fullName}
      
      Request ID: ${data.requestId}
      
      CLIENT INFORMATION:
      Name: ${data.fullName}
      Email: ${data.email}
      WhatsApp: ${data.whatsappNumber}
      Service: ${data.serviceCategory} - ${data.subCategory}
      Submitted: ${new Date(data.timestamp).toLocaleString()}
      
      REQUIREMENTS:
      ${data.requirement}
      
      AI GENERATED COMMUNITY POST:
      ${data.aiPost}
      
      System Actions:
      - Saved to Supabase
      - AI post generated
      - Thank you email sent to client
      
      View in dashboard: https://yourdomain.com/admin/requests/${data.requestId}
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Finzie System" <${process.env.SMTP_USER}>`,
      to: adminEmails,
      subject: `🚀 New Client Request: ${data.fullName} - ${data.serviceCategory}`,
      html: htmlContent,
      text: textContent,
    });

    console.log("✅ Admin email sent to", adminEmails.join(', '));
    return { success: true };

  } catch (error) {
    console.error('❌ Admin email error:', error);
    return { success: false, error };
  }
};

// Generic email sender (if needed for other purposes)
export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  replyTo?: string
) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Finzie" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      ...(replyTo && { replyTo }),
    });
    console.log("✅ Email sent to", to);
    return { success: true };
  } catch (err) {
    console.error("❌ Email send error:", err);
    return { success: false, error: err };
  }
};