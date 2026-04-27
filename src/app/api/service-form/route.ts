// app/api/service-form/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { supabase } from '@/src/lib/SupabaseAuthClient';
import * as brevo from '@getbrevo/brevo';

// Brevo Configuration
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = 'aryan@execumarketing.com';
const BREVO_SENDER_NAME = 'ExecuMarketing';
const BREVO_TEMPLATE_ID = parseInt('21'); // Your template ID

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, message, budget } = body;

    // Validation
    const errors: string[] = [];
    if (!full_name || full_name.trim().length < 2) errors.push('Full name is required');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required');
    if (!phone || phone.trim().length < 10) errors.push('Valid phone number is required');
    if (!message || message.trim().length < 10) errors.push('Message is required (minimum 10 characters)');

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Generate unique request_id
    const request_id = `REQ-${Date.now()}-${nanoid(6)}`;

    // Insert into client_requests table
    const { data, error } = await supabase
      .from('client_requests')
      .insert({
        full_name: full_name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        requirement: message.trim(),
        budget: budget || null,
        request_id: request_id,
        status: 'pending',
        source: 'service-quote-form',
        created_at: new Date().toISOString(),
        instant_email_sent: false,
      })
      .select()
      .single();

    if (error) {
      console.error('Database insert error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to submit request. Please try again.' },
        { status: 500 }
      );
    }

    // Send thank you email via Brevo
    let emailSent = false;
    try {
      if (BREVO_API_KEY && BREVO_TEMPLATE_ID) {
        emailSent = await sendThankYouEmail(email, full_name);
        
        // Update email sent status
        if (emailSent) {
          await supabase
            .from('client_requests')
            .update({
              instant_email_sent: true,
              instant_email_sent_at: new Date().toISOString(),
            })
            .eq('id', data.id);
        }
      }
    } catch (emailError) {
      console.error('Email error (non-blocking):', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully! We will contact you within 24 hours.',
      request_id: request_id,
      email_sent: emailSent,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Function to send thank you email using Brevo
async function sendThankYouEmail(toEmail: string, toName: string): Promise<boolean> {
  try {
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY!);

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: toEmail, name: toName }];
    sendSmtpEmail.sender = { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME };
    sendSmtpEmail.subject = `Thank you for reaching out to ExecuMarketing`;
    sendSmtpEmail.templateId = BREVO_TEMPLATE_ID;
    
    // Simple params - just the name if needed in template
    sendSmtpEmail.params = {
      full_name: toName,
    };

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Thank you email sent:', response);
    return true;

  } catch (error) {
    console.error('Brevo error:', error);
    return false;
  }
}