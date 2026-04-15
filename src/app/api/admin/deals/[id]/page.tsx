// app/api/admin/deals/[id]/route.ts
import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const supabase = createRouteHandlerClient({ cookies });
    
    const { data: deal, error } = await supabase
        .from('deals')
        .select(`
            *,
            invoices (*),
            payment_logs (*)
        `)
        .eq('id', params.id)
        .single();
    
    if (error) {
        return NextResponse.json({ error: 'Deal not found' }, { status: 404 });
    }
    
    return NextResponse.json({ deal });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const supabase = createRouteHandlerClient({ cookies });
    const body = await request.json();
    
    const { data: deal, error } = await supabase
        .from('deals')
        .update(body)
        .eq('id', params.id)
        .select()
        .single();
    
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ deal });
}