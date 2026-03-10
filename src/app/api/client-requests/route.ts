import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/SupabaseAuthClient';
import { syncToGoogleSheets } from '../../../lib/googleSheetSync';
import { generateAIPost } from '../../../lib/client-request/aiPostSevice';
import { sendClientEmail, sendAdminEmail } from '../../../lib/mailer';

export async function POST(request: NextRequest) {
  try {

    console.log("🚀 API /client-requests triggered");

    // Parse request body
    const body = await request.json();
    console.log("📥 Request body:", body);

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

    console.log("✅ Validation passed");

    // Generate unique request ID
    const requestId = `REQ_${Date.now()}_${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

    console.log("🆔 Generated request ID:", requestId);

    // Generate AI community post
    console.log("🤖 Generating AI community post...");
    const aiPost = await generateAIPost({
      fullName,
      serviceCategory,
      subCategory,
      requirement,
      requestId
    });

    console.log("✅ AI post generated");

    // 1. Save to Supabase
    console.log("💾 Inserting request into Supabase...");

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
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (insertError) {
      console.error("❌ Supabase insertion failed:", insertError);
      throw insertError;
    }

    console.log("✅ Data inserted into Supabase:", inserted);

    let clientEmailSent = false;
    let adminEmailSent = false;

    // 2. Send client email
    try {
      console.log("📧 Sending client email...");

      const clientEmailResult = await sendClientEmail(
        email,
        fullName,
        requestId,
        serviceCategory,
        subCategory
      );

      clientEmailSent = clientEmailResult.success;

      console.log("✅ Client email sent:", clientEmailResult);

      await supabase
        .from('client_requests')
        .update({
          instant_email_sent: true,
          instant_email_sent_at: new Date().toISOString()
        })
        .eq('id', inserted.id);

      console.log("📊 Updated email status in DB");

    } catch (emailError) {
      console.error("❌ Client email failed:", emailError);
    }

    // 3. Send admin email
    try {
      console.log("📧 Sending admin email...");

      const adminEmailResult = await sendAdminEmail({
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

      adminEmailSent = adminEmailResult.success;

      console.log("✅ Admin email sent:", adminEmailResult);

    } catch (adminEmailError) {
      console.error("❌ Admin email failed:", adminEmailError);
    }

    // 4. Sync Google Sheets
    try {
      console.log("📊 Syncing with Google Sheets...");

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

      console.log("✅ Google Sheets synced");

    } catch (sheetsError) {
      console.error("❌ Google Sheets sync failed:", sheetsError);
    }

    console.log("🎉 Request processing completed");

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

export async function GET() {

  console.log("⚠️ GET method not allowed for /api/client-requests");

  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}