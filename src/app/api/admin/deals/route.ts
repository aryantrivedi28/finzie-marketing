// app/api/admin/deals/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "../../../../lib/SupabaseAuthClient"

export async function POST(request: Request) {
    const body = await request.json();
    
    const { 
        project_id,
        client_name, client_email, client_phone,
        freelancer_name, freelancer_email, freelancer_phone
    } = body;
    
    // Create deal
    const { data: deal, error } = await supabase
        .from('deals')
        .insert({
            project_id,
            client_name,
            client_email,
            client_phone,
            freelancer_name,
            freelancer_email,
            freelancer_phone,
            freelancer_dashboard_access: true // Give freelancer access
        })
        .select()
        .single();
    
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    // Log the action
    await supabase
        .from('payment_logs')
        .insert({
            deal_id: deal.id,
            action: 'deal_created',
            details: { freelancer_email, client_email }
        });
    
    // TODO: Send email to freelancer with dashboard access
    await sendFreelancerDashboardAccess(freelancer_email, deal.id);
    
    return NextResponse.json({ deal });
}

async function sendFreelancerDashboardAccess(email: string, dealId: string) {
    // Implement email sending logic
    console.log(`Send dashboard access to ${email} for deal ${dealId}`);
}