// app/api/webhooks/zoho/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/SupabaseAuthClient';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const body = await request.json();
    
    const { request_id, action, signer_email } = body;
    
    if (action === 'signer_completed') {
        // Find deal by zoho_request_id
        const { data: deal } = await supabase
            .from('deals')
            .select('*')
            .eq('zoho_request_id', request_id)
            .single();
        
        if (deal) {
            // Update agreement status
            const isClient = signer_email === deal.client_email;
            const newStatus = deal.agreement_status === 'sent' 
                ? (isClient ? 'client_signed' : 'freelancer_signed')
                : 'signed';
            
            await supabase
                .from('deals')
                .update({ agreement_status: newStatus })
                .eq('id', deal.id);
            
            // If both signed, notify admin
            if (newStatus === 'signed') {
                await supabase
                    .from('payment_logs')
                    .insert({
                        deal_id: deal.id,
                        action: 'agreement_signed',
                        details: { both_signed: true }
                    });
                
                // TODO: Notify admin that agreement is signed
                console.log(`Agreement signed for deal ${deal.id}`);
            }
        }
    }
    
    return NextResponse.json({ received: true });
}