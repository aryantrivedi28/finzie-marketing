// app/api/payments/verify/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from "../../../../lib/SupabaseAuthClient"


export async function POST(request: Request) {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
    
    const secret = process.env.RAZORPAY_KEY_SECRET!;
    
    const generatedSignature = crypto
        .createHmac('sha256', secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');
    
    if (generatedSignature !== razorpay_signature) {
        return NextResponse.json({ 
            success: false, 
            error: 'Invalid payment signature' 
        }, { status: 400 });
    }
    
    // Update payment status in database
    
    await supabase
        .from('deals')
        .update({
            payment_status: 'paid',
            razorpay_payment_id,
            paid_at: new Date().toISOString()
        })
        .eq('razorpay_order_id', razorpay_order_id);
    
    return NextResponse.json({ 
        success: true,
        message: 'Payment verified successfully'
    });
}