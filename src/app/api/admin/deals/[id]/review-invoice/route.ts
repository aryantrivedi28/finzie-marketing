// app/api/admin/deals/[id]/review-invoice/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "../../../../../../lib/SupabaseAuthClient"
import { cookies } from 'next/headers';

export async function POST(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    
    const { margin_type, margin_value } = body; // margin_type: 'percentage' or 'fixed'
    
    // Get deal with freelancer amount
    const { data: deal } = await supabase
        .from('deals')
        .select('*')
        .eq('id', params.id)
        .single();
    
    if (!deal || !deal.freelancer_amount) {
        return NextResponse.json({ error: 'Freelancer amount not set' }, { status: 400 });
    }
    
    // Calculate final amounts
    let adminMargin;
    if (margin_type === 'percentage') {
        adminMargin = deal.freelancer_amount * (margin_value / 100);
    } else {
        adminMargin = margin_value;
    }
    
    const finalAmount = deal.freelancer_amount + adminMargin;
    const gstAmount = finalAmount * 0.18; // 18% GST
    const totalWithGST = finalAmount + gstAmount;
    
    // Update deal with margin info
    await supabase
        .from('deals')
        .update({
            admin_margin: adminMargin,
            final_amount: finalAmount,
            gst_amount: gstAmount,
            total_with_gst: totalWithGST,
            payment_status: 'pending'
        })
        .eq('id', params.id);
    
    // Log action
    await supabase
        .from('payment_logs')
        .insert({
            deal_id: params.id,
            action: 'admin_margin_added',
            details: { margin_type, margin_value, adminMargin, finalAmount }
        });
    
    return NextResponse.json({ 
        success: true,
        freelancer_amount: deal.freelancer_amount,
        admin_margin: adminMargin,
        final_amount: finalAmount,
        gst: gstAmount,
        total_with_gst: totalWithGST
    });
}