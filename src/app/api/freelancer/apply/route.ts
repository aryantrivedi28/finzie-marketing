// app/api/freelancer/apply/route.ts

import { supabase } from '@/src/lib/SupabaseAuthClient'
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
      why_join,
      terms_accepted,
    } = body

    // Validate required fields
    const requiredFields = ['full_name', 'email', 'phone', 'portfolio_url', 'category', 'subcategories', 'experience_years', 'why_join']
    
    for (const field of requiredFields) {
      if (!body[field]) {
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
      subcategories_array: subcategories, // Store as array
      subcategory: subcategories[0] || null, // First one for backward compatibility
      subcategory_other: subcategory_other || null,
      experience_years,
      why_join,
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

  // LinkedIn presence (15 points)
  if (data.linkedin_url && data.linkedin_url.includes('linkedin.com')) {
    score += 15
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

  // Experience level (25 points)
  const experienceMap: Record<string, number> = {
    '7+ years': 25,
    '5-7 years': 22,
    '3-5 years': 18,
    '1-3 years': 12,
    'Less than 1 year': 6,
  }
  score += experienceMap[data.experience_years] || 0

  // Why join quality (15 points)
  if (data.why_join) {
    const whyJoinLength = data.why_join.length
    if (whyJoinLength > 100) {
      score += 15
    } else if (whyJoinLength > 50) {
      score += 10
    } else if (whyJoinLength > 20) {
      score += 5
    }
    
    // Bonus for specific keywords
    const keywords = ['experience', 'portfolio', 'clients', 'results', 'growth', 'conversion', 'roi', 'strategy']
    const keywordCount = keywords.filter(kw => data.why_join.toLowerCase().includes(kw)).length
    score += Math.min(keywordCount * 1.5, 10)
  }

  // Resume presence (10 points)
  if (data.resume_url) {
    score += 10
  }

  return Math.min(Math.round(score), 100)
}