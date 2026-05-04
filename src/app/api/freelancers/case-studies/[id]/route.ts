import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createServerSupabaseClient()
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
    return NextResponse.json({ error: 'Freelancer not found' }, { status: 404 })
  }

  // Check ownership
  const { data: existing } = await supabase
    .from('em_case_studies')
    .select('status')
    .eq('id', params.id)
    .eq('freelancer_id', freelancer.id)
    .single()

  if (!existing) {
    return NextResponse.json({ error: 'Case study not found' }, { status: 404 })
  }

  const body = await request.json()
  
  // If case study was approved, set back to pending on edit
  const updateData = { ...body }
  if (existing.status === 'approved') {
    updateData.status = 'pending'
  }

  const { data, error } = await supabase
    .from('em_case_studies')
    .update(updateData)
    .eq('id', params.id)
    .eq('freelancer_id', freelancer.id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json(data)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createServerSupabaseClient()
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
    return NextResponse.json({ error: 'Freelancer not found' }, { status: 404 })
  }

  const { error } = await supabase
    .from('em_case_studies')
    .delete()
    .eq('id', params.id)
    .eq('freelancer_id', freelancer.id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true })
}