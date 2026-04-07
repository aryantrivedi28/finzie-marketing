// app/api/freelancer/invoices/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "../../../../lib/SupabaseAuthClient"

export async function POST(request: Request) {
    const body = await request.json();
    
    const { deal_id, amount, description } = body;
    
    // Verify freelancer has access to this deal
    const { data: deal } = await supabase
        .from('deals')
        .select('*')
        .eq('id', deal_id)
        .eq('freelancer_email', body.freelancer_email) // From auth
        .single();
    
    // if (!deal) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    // Update deal with freelancer amount
    await supabase
        .from('deals')
        .update({
            freelancer_amount: amount,
            notes: description
        })
        .eq('id', deal_id);
    
    // Create freelancer invoice record
    const invoiceNumber = `INV-F-${Date.now()}`;
    const { data: invoice } = await supabase
        .from('invoices')
        .insert({
            deal_id,
            type: 'freelancer',
            invoice_number: invoiceNumber,
            amount,
            description,
            status: 'submitted'
        })
        .select()
        .single();
    
    // Log action
    await supabase
        .from('payment_logs')
        .insert({
            deal_id,
            action: 'freelancer_invoice_submitted',
            details: { amount, invoice_number: invoiceNumber }
        });
    
    // TODO: Notify admin that invoice is ready for review
    await notifyAdminInvoiceSubmitted(deal_id);
    
    return NextResponse.json({ 
        success: true, 
        invoice: invoice 
    });
}

async function notifyAdminInvoiceSubmitted(dealId: string) {
    // Send notification to admin (could be email, WhatsApp, or in-app)
    console.log(`Invoice submitted for deal ${dealId}`);
}