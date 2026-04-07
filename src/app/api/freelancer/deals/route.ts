// app/api/freelancer/deals/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "../../../../lib/SupabaseAuthClient"
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    
    // Get current user
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get all deals for this freelancer
    const { data: deals, error } = await supabase
        .from('deals')
        .select('*')
        .eq('freelancer_email', user.email)
        .order('created_at', { ascending: false });
    
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    // Get counts for dashboard stats
    const activeProjects = deals?.filter(d => 
        d.agreement_status === 'signed' && !d.freelancer_amount
    ).length || 0;
    
    const pendingPayments = deals?.filter(d => 
        d.payment_status === 'paid' && d.payout_status === 'pending'
    ).length || 0;
    
    const completedProjects = deals?.filter(d => 
        d.payout_status === 'completed'
    ).length || 0;
    
    return NextResponse.json({ 
        deals,
        stats: {
            activeProjects,
            pendingPayments,
            completedProjects,
            totalEarnings: deals?.reduce((sum, d) => sum + (d.payout_amount || 0), 0) || 0
        }
    });
}