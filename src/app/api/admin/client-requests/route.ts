// app/api/admin/client-requests/route.ts
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../lib/supabase-admin'
import { ClientRequest, HiringRequest, Client, CombinedClientRequest } from '../../../../types/client'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'all', 'client_requests', 'hiring_requests'
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    let clientRequests: ClientRequest[] = []
    let hiringRequests: (HiringRequest & { client?: Client })[] = []
    let combinedRequests: CombinedClientRequest[] = []

    // Fetch client_requests
    if (type === 'all' || type === 'client_requests') {
      let query = supabaseAdmin
        .from('client_requests')
        .select('*')
        .order('created_at', { ascending: false })

      if (status && status !== 'all') {
        query = query.eq('status', status)
      }

      if (search) {
        query = query.or(
          `full_name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%,requirement.ilike.%${search}%`
        )
      }

      const { data, error } = await query

      if (error) {
        console.error('Error fetching client requests:', error)
      } else {
        clientRequests = data || []
      }
    }

    // Fetch hiring_requests with client details
    if (type === 'all' || type === 'hiring_requests') {
      let query = supabaseAdmin
        .from('hiring_requests')
        .select(`
          *,
          client:client_table (
            id,
            email,
            name,
            company_name,
            phone,
            verified
          )
        `)
        .order('created_at', { ascending: false })

      if (status && status !== 'all') {
        query = query.eq('status', status)
      }

      if (search) {
        query = query.or(
          `job_title.ilike.%${search}%,description.ilike.%${search}%`
        )
      }

      const { data, error } = await query

      if (error) {
        console.error('Error fetching hiring requests:', error)
      } else {
        hiringRequests = data || []
      }
    }

    // Combine and transform data
    if (type === 'all') {
      // Transform client_requests
      clientRequests.forEach(req => {
        combinedRequests.push({
          id: req.id,
          type: 'client_request',
          client_name: req.full_name,
          client_email: req.email,
          client_phone: req.phone || undefined,
          company: req.company,
          title: req.requirement,
          description: req.requirement,
          category: req.service_category,
          subcategory: req.sub_category,
          budget: req.budget,
          timeline: req.timeline,
          status: req.status || 'pending',
          created_at: req.created_at,
          jd_content: req.jd_content,
          original_data: req
        })
      })

      // Transform hiring_requests
      hiringRequests.forEach(req => {
        combinedRequests.push({
          id: req.id,
          type: 'hiring_request',
          client_name: req.client?.name || 'Unknown',
          client_email: req.client?.email || 'No email',
          client_phone: req.client?.phone || undefined,
          company: req.client?.company_name,
          title: req.job_title || 'Untitled',
          description: req.description || '',
          category: req.category?.[0] || null,
          subcategory: req.subcategory,
          budget: req.budget_range,
          timeline: null,
          status: req.status || 'pending',
          created_at: req.created_at,
          jd_content: req.jd_content,
          original_data: req
        })
      })

      // Sort by created_at desc
      combinedRequests.sort((a, b) => {
        if (!a.created_at) return 1
        if (!b.created_at) return -1
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      })

      return NextResponse.json({
        success: true,
        data: combinedRequests,
        counts: {
          total: combinedRequests.length,
          client_requests: clientRequests.length,
          hiring_requests: hiringRequests.length
        }
      })
    } else if (type === 'client_requests') {
      return NextResponse.json({
        success: true,
        data: clientRequests,
        count: clientRequests.length
      })
    } else if (type === 'hiring_requests') {
      return NextResponse.json({
        success: true,
        data: hiringRequests,
        count: hiringRequests.length
      })
    }

    return NextResponse.json({
      success: true,
      data: combinedRequests
    })

  } catch (error: any) {
    console.error('Error in admin/client-requests API:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}