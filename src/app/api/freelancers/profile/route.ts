import { supabase } from '@/src/lib/SupabaseAuthClient'
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  
  const { data, error } = await supabase
    .from('em_freelancers')
    .update(body)
    .eq('auth_user_id', user.id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json(data)
}