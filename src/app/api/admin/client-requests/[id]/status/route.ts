// app/api/admin/client-requests/[id]/status/route.ts
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../../../lib/supabase-admin'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { type, status } = body

    if (!type || !status) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (type === 'client_request') {
      const { data, error } = await supabaseAdmin
        .from('client_requests')
        .update({ status })
        .eq('id', params.id)
        .select()
        .single()

      if (error) {
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        data,
        message: `Status updated to ${status}`
      })
    } else if (type === 'hiring_request') {
      const { data, error } = await supabaseAdmin
        .from('hiring_requests')
        .update({ status })
        .eq('id', params.id)
        .select()
        .single()

      if (error) {
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        data,
        message: `Status updated to ${status}`
      })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid request type' },
      { status: 400 }
    )

  } catch (error: any) {
    console.error('Error updating status:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}