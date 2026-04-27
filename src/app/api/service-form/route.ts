// app/api/service-form/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { supabase } from '@/src/lib/SupabaseAuthClient';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'aryan@execumarketing.com';
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'ExecuMarketing Team';
const BREVO_TEMPLATE_ID = parseInt(process.env.BREVO_TEMPLATE_ID || '21');

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

    // Send thank you email via Brevo API directly
    let emailSent = false;
    try {
      if (BREVO_API_KEY && BREVO_TEMPLATE_ID) {
        emailSent = await sendThankYouEmailViaFetch(email, full_name);
        
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

// Function to send email using fetch API directly (No SDK required)
async function sendThankYouEmailViaFetch(toEmail: string, toName: string): Promise<boolean> {
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
        subject: 'Thank you for reaching out to ExecuMarketing',
        templateId: BREVO_TEMPLATE_ID,
        params: {
          full_name: toName,
          website_url: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://execumarketing.com',
        },
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('Email sent successfully:', result);
      return true;
    } else {
      console.error('Brevo API error:', result);
      return false;
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return false;
  }
}