// Chat Flow Configuration
export const CONVERSATION_FLOW = {
  welcome: {
    prompt: "What type of marketing support do you need?",
    options: [
      'Paid Ads',
      'Social Media',
      'SEO',
      'CRM Setup'
    ]
  },
  service: {
    prompt: "What's your budget range?",
    options: [
      'Under $5K',
      '$5K - $25K',
      '$25K - $100K',
      '$100K+'
    ]
  },
  budget: {
    prompt: "When do you need to start?",
    options: [
      'Immediately',
      'This week',
      'This month',
      'Flexible'
    ]
  },
  timeline: {
    prompt: "Tell us more about your project needs.",
    options: null
  },
  details: {
    prompt: "Finding your perfect match...",
    options: null
  }
}

// Mock Matched Specialists
export const MOCK_MATCHES = [
  {
    name: 'Sarah Chen',
    title: 'PPC Specialist',
    specialty: 'Paid Ads',
    match: 98,
    available: true
  },
  {
    name: 'Marcus Johnson',
    title: 'Social Media Manager',
    specialty: 'Social Media',
    match: 96,
    available: true
  },
  {
    name: 'Elena Rodriguez',
    title: 'SEO Expert',
    specialty: 'SEO',
    match: 94,
    available: true
  }
]

// For Business Page - Flow Steps
export const BUSINESS_FLOW_STEPS = [
  {
    num: '01',
    title: 'Brief',
    shortDesc: 'Tell us what you need',
    fullDesc: 'Paid ads, social media, SEO, CRM setup — describe your project in plain language. Our AI takes it from there.'
  },
  {
    num: '02',
    title: 'Match',
    shortDesc: 'AI finds the right specialist',
    fullDesc: 'Portfolios and past performance scored against your exact requirements. One match — the right one. Not a shortlist of 40.'
  },
  {
    num: '03',
    title: 'Execute',
    shortDesc: 'Start within 24 hours',
    fullDesc: 'Verified. Briefed. Ready. Your freelancer is introduced and working before the week is out.'
  }
]

// Statistics
export const STATS = [
  {
    num: '10K+',
    label: 'AI-Vetted Specialists'
  },
  {
    num: '4+ Yrs',
    label: 'Proven Track Record'
  },
  {
    num: '24 Hrs',
    label: 'Average Onboarding'
  }
]

// For Freelancers Benefits
export const FREELANCER_BENEFITS = [
  {
    title: 'AI-Matched Projects',
    desc: 'Only see opportunities that align with your skillset and experience'
  },
  {
    title: 'Higher Rates',
    desc: 'Clients know exactly what they\'re getting. No more competing on price.'
  },
  {
    title: 'Verified Clients',
    desc: 'All clients are vetted. Payment guaranteed. No time wasted on tire-kickers.'
  },
  {
    title: 'Quick Onboarding',
    desc: 'Approved and matched within 24 hours. Start earning immediately.'
  }
]

// Specialist Requirements
export const SPECIALIST_REQUIREMENTS = [
  'Minimum 5 years industry experience',
  'Portfolio with 15+ case studies',
  'Transparent pricing structure',
  'Availability for immediate projects',
  'Proficiency with modern tools & platforms',
  'Strong communication skills'
]

// Earnings by Specialty
export const EARNINGS_BY_SPECIALTY = [
  {
    rate: '$150-300/hr',
    service: 'Paid Ads Management'
  },
  {
    rate: '$100-250/hr',
    service: 'Social Media Strategy'
  },
  {
    rate: '$120-280/hr',
    service: 'SEO Consulting'
  }
]

// Company Values
export const COMPANY_VALUES = [
  {
    title: 'Accuracy',
    desc: 'We obsess over match quality. Good enough doesn\'t exist in our vocabulary.'
  },
  {
    title: 'Transparency',
    desc: 'No hidden fees. No shortlists of mediocre options. You see exactly why we made a match.'
  },
  {
    title: 'Speed',
    desc: 'Time is money. Verified specialists are matched and ready within 24 hours.'
  }
]

// Company Timeline
export const COMPANY_TIMELINE = [
  {
    year: '2020',
    title: 'Founded',
    desc: 'ExecuMarketing launches with AI matching algorithm for marketing specialists.'
  },
  {
    year: '2021',
    title: 'First 1,000 Specialists',
    desc: 'We hit our first major milestone with over 1,000 verified marketing professionals on the platform.'
  },
  {
    year: '2022',
    title: 'Series A Funding',
    desc: 'Raised $5M to expand team and scale platform capabilities across new industries.'
  },
  {
    year: '2023',
    title: 'Now: 10K+ Specialists',
    desc: 'Today, we\'ve matched over 2,000 projects and continue growing with industry-leading accuracy.'
  }
]

// Team Members
export const TEAM_MEMBERS = [
  {
    name: 'Alex Morrison',
    role: 'Founder & CEO',
    bio: 'Former VP of Marketing at Scale. 15 years building marketing teams.'
  },
  {
    name: 'Jamie Chen',
    role: 'CTO',
    bio: 'ML expert from Stanford. Built recommendation algorithms for top tech companies.'
  },
  {
    name: 'Marcus Williams',
    role: 'VP of Talent',
    bio: 'Recruiter and talent strategist. Helped build teams at 10+ startups.'
  }
]

// Footer Links
export const FOOTER_SECTIONS = [
  {
    title: 'For Business',
    links: [
      { label: 'How It Works', href: '#' },
      { label: 'Our Specialists', href: '#' },
      { label: 'Pricing', href: '#' }
    ]
  },
  {
    title: 'For Freelancers',
    links: [
      { label: 'Apply Now', href: '#' },
      { label: 'Requirements', href: '#' },
      { label: 'Earnings', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  }
]
