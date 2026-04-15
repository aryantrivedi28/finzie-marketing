// app/api/admin/dashboard/stats/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "../../../../../lib/SupabaseAuthClient"
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    // Get all deals
    const { data: deals } = await supabase
        .from('deals')
        .select('*');
    
    // Get all freelancers count
    const { count: totalFreelancers } = await supabase
        .from('freelancer_profiles')
        .select('*', { count: 'exact', head: true });
    
    // Calculate stats
    const stats = {
        totalFreelancers: totalFreelancers || 0,
        totalDeals: deals?.length || 0,
        activeDeals: deals?.filter(d => d.payment_status === 'paid' && d.payout_status === 'pending').length || 0,
        pendingPayments: deals?.filter(d => d.payment_status === 'pending' && d.final_amount).length || 0,
        totalRevenue: deals?.reduce((sum, d) => sum + (d.total_with_gst || 0), 0) || 0,
        pendingPayouts: deals?.reduce((sum, d) => 
            d.payment_status === 'paid' && d.payout_status === 'pending' 
                ? sum + (d.freelancer_amount || 0) 
                : sum, 0
        ) || 0,
        completedDeals: deals?.filter(d => d.payout_status === 'completed').length || 0
    };
    
    // Get recent deals
    const { data: recentDeals } = await supabase
        .from('deals')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
    
    return NextResponse.json({ 
        stats,
        recentDeals
    });
}