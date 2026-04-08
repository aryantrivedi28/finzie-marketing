// app/api/freelancer/apply/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      full_name,
      email,
      phone,
      linkedin_url,
      resume_url,
      portfolio_url,
      category,
      subcategories,
      subcategory_other,
      experience_years,
      pricing_min,
      pricing_max,
      pricing_type,
      freelancer_description,
      terms_accepted,
    } = body

    // Validate required fields
    const requiredFields = ['full_name', 'email', 'phone', 'portfolio_url', 'category', 'subcategories', 'experience_years', 'pricing_min', 'pricing_max', 'pricing_type']
    
    for (const field of requiredFields) {
      if (!body[field] && body[field] !== 0) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate subcategories is an array and not empty
    if (!Array.isArray(subcategories) || subcategories.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one specialization' },
        { status: 400 }
      )
    }

    // Validate pricing
    if (pricing_min <= 0 || pricing_max <= 0) {
      return NextResponse.json(
        { error: 'Please enter valid pricing range' },
        { status: 400 }
      )
    }

    if (pricing_min > pricing_max) {
      return NextResponse.json(
        { error: 'Minimum price cannot be greater than maximum price' },
        { status: 400 }
      )
    }

    if (!terms_accepted) {
      return NextResponse.json(
        { error: 'You must accept the terms and conditions' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Initialize Supabase client
    const supabase = createRouteHandlerClient({ cookies })
    
    // Check if freelancer already applied
    const { data: existing, error: checkError } = await supabase
      .from('all-freelancer')
      .select('email')
      .eq('email', email)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        { error: 'You have already submitted an application. Please check your email for updates.' },
        { status: 409 }
      )
    }

    // Calculate AI pre-vetting score
    const aiScore = calculateAIScore(body)

    // Prepare insert data
    const insertData = {
      full_name,
      email,
      phone,
      linkedin_url: linkedin_url || null,
      resume_url: resume_url || null,
      portfolio_url,
      category,
      subcategories_array: subcategories,
      subcategory: subcategories[0] || null,
      subcategory_other: subcategory_other || null,
      experience_years,
      pricing_min,
      pricing_max,
      pricing_type,
      freelancer_description: freelancer_description || null,
      terms_accepted,
      status: 'pending_review',
      ai_score: aiScore,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Insert into database
    const { data, error } = await supabase
      .from('all-freelancer')
      .insert([insertData])
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to submit application. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully!',
        application_id: data.id,
        ai_score: aiScore
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// AI Pre-vetting Score Calculator
function calculateAIScore(data: any): number {
  let score = 0

  // LinkedIn presence (10 points)
  if (data.linkedin_url && data.linkedin_url.includes('linkedin.com')) {
    score += 10
  }

  // Portfolio quality (20 points)
  if (data.portfolio_url) {
    const portfolioUrl = data.portfolio_url.toLowerCase()
    if (portfolioUrl.includes('github') || 
        portfolioUrl.includes('behance') || 
        portfolioUrl.includes('dribbble') ||
        portfolioUrl.includes('medium') ||
        portfolioUrl.includes('personal')) {
      score += 20
    } else {
      score += 10
    }
  }

  // Multiple subcategories bonus (15 points)
  if (data.subcategories && Array.isArray(data.subcategories)) {
    const subcategoryCount = data.subcategories.length
    if (subcategoryCount >= 3) {
      score += 15
    } else if (subcategoryCount === 2) {
      score += 10
    } else if (subcategoryCount === 1) {
      score += 5
    }
  }

  // Experience level (20 points)
  const experienceMap: Record<string, number> = {
    '7+ years': 20,
    '5-7 years': 18,
    '3-5 years': 15,
    '1-3 years': 10,
    'Less than 1 year': 5,
  }
  score += experienceMap[data.experience_years] || 0

  // Pricing reasonableness (15 points)
  if (data.pricing_min && data.pricing_max) {
    const avgPrice = (data.pricing_min + data.pricing_max) / 2
    if (avgPrice >= 5000 && avgPrice <= 50000) {
      score += 15 // Reasonable range
    } else if (avgPrice > 50000) {
      score += 10 // Premium range
    } else if (avgPrice > 0) {
      score += 5 // Low range
    }
  }

  // Description presence (10 points - optional but rewarded)
  if (data.freelancer_description && data.freelancer_description.length > 50) {
    score += 10
  } else if (data.freelancer_description && data.freelancer_description.length > 20) {
    score += 5
  }

  // Resume presence (10 points)
  if (data.resume_url) {
    score += 10
  }

  return Math.min(Math.round(score), 100)
}