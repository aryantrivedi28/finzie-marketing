// app/api/admin/client-requests/[id]/route.ts
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../../lib/supabase-admin'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'client_request'

    if (type === 'client_request') {
      const { data, error } = await supabaseAdmin
        .from('client_requests')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) {
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data,
        type: 'client_request'
      })
    } else if (type === 'hiring_request') {
      const { data, error } = await supabaseAdmin
        .from('hiring_requests')
        .select(`
          *,
          client:client_table (
            id,
            email,
            name,
            company_name,
            phone,
            website,
            industry,
            country,
            verified
          )
        `)
        .eq('id', params.id)
        .single()

      if (error) {
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data,
        type: 'hiring_request'
      })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid request type' },
      { status: 400 }
    )

  } catch (error: any) {
    console.error('Error fetching client request:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}