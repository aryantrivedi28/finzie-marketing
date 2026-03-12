'use client'

import React from 'react'
import {
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from '../ui/Section'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

const ForFreelancersPage = () => {
  return (
    <main className="flex-1">
      <Section columns={2} className="min-h-[78vh] items-center gap-20">
        <div>
          <SectionEyebrow>For Freelancers</SectionEyebrow>
          <SectionTitle className="text-5xl mb-8">
            Work that <span className="italic text-coral">matches</span> your expertise.
          </SectionTitle>
          <SectionDescription className="mb-8">
            We match verified specialists like you with clients who specifically need your skills. No more scrolling through hundreds of projects that don't fit.
          </SectionDescription>
          <Button size="lg">
            Apply as a Specialist
          </Button>
        </div>

        {/* Benefits */}
        <div className="space-y-6">
          {[
            {
              title: 'AI-Matched Projects',
              desc: 'Only see opportunities that align with your skillset and experience'
            },
            {
              title: 'Higher Rates',
              desc: 'Clients know exactly what theyre getting.No more competing on price.'
            },
            {
              title: 'Verified Clients',
              desc: 'All clients are vetted. Payment guaranteed. No time wasted on tire-kickers.'
            },
            {
              title: 'Quick Onboarding',
              desc: 'Approved and matched within 24 hours. Start earning immediately.'
            }
          ].map((benefit, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all">
              <CardContent>
                <h3 className="font-display text-xl font-300 text-night mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-carbon leading-relaxed">
                  {benefit.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Requirements Section */}
      <Section className="bg-cream-dark">
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow>Requirements</SectionEyebrow>
          <SectionTitle className="mb-12">
            What we look for
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Minimum 5 years industry experience',
              'Portfolio with 15+ case studies',
              'Transparent pricing structure',
              'Availability for immediate projects',
              'Proficiency with modern tools & platforms',
              'Strong communication skills'
            ].map((req, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <p className="text-carbon leading-relaxed">
                  {req}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Earnings Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow>Earnings</SectionEyebrow>
          <SectionTitle className="mb-8">
            Competitive rates. Your terms.
          </SectionTitle>
          <SectionDescription className="mb-12">
            Specialists on our platform earn 2-3x more than on generalist marketplaces. You set your rates. Clients pay what specialists are worth.
          </SectionDescription>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((earning, idx) => (
              <Card key={idx}>
                <CardContent className="text-center">
                  <div className="font-display text-3xl font-300 text-teal mb-2">
                    {earning.rate}
                  </div>
                  <p className="text-sm text-carbon">
                    {earning.service}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center bg-night text-white">
        <div className="max-w-2xl mx-auto">
          <SectionTitle className="text-white mb-6">
            Ready to work with clients who value your expertise?
          </SectionTitle>
          <SectionDescription className="text-stone mb-8">
            Apply now. Get verified in 24 hours. Start receiving AI-matched projects immediately.
          </SectionDescription>
          <Button
            size="lg"
            variant="primary"
          >
            Apply Now
          </Button>
        </div>
      </Section>
    </main>
  )
}

export { ForFreelancersPage }
