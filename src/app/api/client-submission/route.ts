import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/SupabaseAuthClient';
import { syncToGoogleSheets } from '../../../lib/googleSheetSync';
// app/api/client-requests/route.ts

import { sendEmail } from '../../../lib/client-request/brevoService';
import { generateAIPost } from '../../../lib/client-request/aiPostSevice';

import { sendClientEmail, sendAdminEmail } from '../../../lib/mailer';

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
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique request ID
    const requestId = `REQ_${Date.now()}_${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

    // Generate AI community post
    const aiPost = await generateAIPost({
      fullName,
      serviceCategory,
      subCategory,
      requirement,
      requestId
    });

    // 1. Save to Supabase
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
      console.error('Supabase insertion failed:', insertError);
      throw insertError;
    }

    // Track email statuses
    let clientEmailSent = false;
    let adminEmailSent = false;

    // 2. Send thank you email to client
    try {
      const clientEmailResult = await sendClientEmail(
        email,
        fullName,
        requestId,
        serviceCategory,
        subCategory
      );

      clientEmailSent = clientEmailResult.success;

      // Update email status in database
      await supabase
        .from('client_requests')
        .update({
          instant_email_sent: true,
          instant_email_sent_at: new Date().toISOString()
        })
        .eq('id', inserted.id);

    } catch (emailError) {
      console.error('Client email failed:', emailError);
      // Continue - don't throw
    }

    // 3. Send admin email with client details AND AI post
    try {
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

    } catch (adminEmailError) {
      console.error('Admin email failed:', adminEmailError);
      // Continue - don't throw
    }

    // 4. Sync to Google Sheets (optional)
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
      console.error('Google Sheets sync failed:', sheetsError);
      // Non-critical - continue
    }

    // Return success response
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
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}