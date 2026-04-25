// app/api/service-form/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { supabase } from '@/src/lib/SupabaseAuthClient';

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

    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully! We will contact you within 24 hours.',
      request_id: request_id,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}