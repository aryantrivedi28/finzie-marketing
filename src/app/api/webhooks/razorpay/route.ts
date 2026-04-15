// app/api/webhooks/razorpay/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/SupabaseAuthClient';
import { cookies } from 'next/headers';
import crypto from 'crypto';

export async function POST(request: Request) {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');
    
    // Verify webhook signature
    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
        .update(body)
        .digest('hex');
    
    if (signature !== expectedSignature) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
    
    const event = JSON.parse(body);
    
    if (event.event === 'payment.captured') {
        const payment = event.payload.payment.entity;
        
        // Find deal by order ID
        const { data: deal } = await supabase
            .from('deals')
            .select('*')
            .eq('razorpay_order_id', payment.order_id)
            .single();
        
        if (deal) {
            // Update deal with payment info
            await supabase
                .from('deals')
                .update({
                    payment_status: 'paid',
                    razorpay_payment_id: payment.id,
                    paid_at: new Date().toISOString()
                })
                .eq('id', deal.id);
            
            // Update client invoice
            await supabase
                .from('invoices')
                .update({
                    status: 'paid',
                    sent_at: new Date().toISOString()
                })
                .eq('deal_id', deal.id)
                .eq('type', 'client');
            
            // Log payment
            await supabase
                .from('payment_logs')
                .insert({
                    deal_id: deal.id,
                    action: 'payment_received',
                    details: { payment_id: payment.id, amount: payment.amount / 100 }
                });
            
            // TODO: Notify admin that payment is received
            await notifyAdminPaymentReceived(deal.id);
            
            // TODO: Notify freelancer that payment is received (will be paid after commission)
            await notifyFreelancerPaymentReceived(deal.freelancer_email, deal.id);
        }
    }
    
    return NextResponse.json({ received: true });
}

async function notifyAdminPaymentReceived(dealId: string) {
    console.log(`Payment received for deal ${dealId}`);
    // Could send email or WhatsApp to admin
}

async function notifyFreelancerPaymentReceived(email: string, dealId: string) {
    console.log(`Notify freelancer ${email} that payment received for deal ${dealId}`);
    // Send email to freelancer
}