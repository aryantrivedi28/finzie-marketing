// app/api/admin/client-requests/[id]/jd/route.ts
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../../../lib/supabase-admin'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { type, jd_content, status } = body

    if (!type || !jd_content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    let updateData: any = { jd_content }
    
    // Update status if provided
    if (status) {
      updateData.status = status
    }

    if (type === 'client_request') {
      const { data, error } = await supabaseAdmin
        .from('client_requests')
        .update(updateData)
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
        message: 'JD updated successfully'
      })
    } else if (type === 'hiring_request') {
      const { data, error } = await supabaseAdmin
        .from('hiring_requests')
        .update(updateData)
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
        message: 'JD updated successfully'
      })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid request type' },
      { status: 400 }
    )

  } catch (error: any) {
    console.error('Error updating JD:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}