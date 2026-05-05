import { supabase } from '@/src/lib/SupabaseAuthClient'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get freelancer ID
  const { data: freelancer } = await supabase
    .from('em_freelancers')
    .select('id')
    .eq('auth_user_id', user.id)
    .single()

  if (!freelancer) {
    return NextResponse.json([])
  }

  const { data, error } = await supabase
    .from('em_case_studies')
    .select('*')
    .eq('freelancer_id', freelancer.id)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get freelancer ID
  const { data: freelancer } = await supabase
    .from('em_freelancers')
    .select('id')
    .eq('auth_user_id', user.id)
    .single()

  if (!freelancer) {
    return NextResponse.json({ error: 'Freelancer profile not found' }, { status: 404 })
  }

  const body = await request.json()
  
  const { data, error } = await supabase
    .from('em_case_studies')
    .insert({
      ...body,
      freelancer_id: freelancer.id,
      status: 'pending'
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json(data)
}