'use client'

import React from 'react'
import {
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from '../ui/Section'
import { Card, CardContent } from '../ui/card'

const AboutPage = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section className="text-center py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow>About Us</SectionEyebrow>
          <SectionTitle className="mb-8 text-5xl md:text-6xl">
            We're solving the <span className="text-teal italic">wrong-hire problem</span>.
          </SectionTitle>
          <SectionDescription className="text-lg md:text-xl">
            Founded in 2020, ExecuMarketing exists because we saw talented freelancers wasting time on bad projects, and businesses wasting money hiring the wrong people.
          </SectionDescription>
        </div>
      </Section>

      {/* Mission Section */}
      <Section columns={2} className="gap-20 items-center">
        <div>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionDescription className="mb-6">
            To build the most trusted AI-powered matching platform for marketing talent. We believe great work happens when skills meet opportunity, and AI is the only way to make that connection truly reliable.
          </SectionDescription>
          <SectionDescription>
            Every day, we process portfolios, performance data, and project requirements through our proprietary matching algorithm. The result: higher quality matches, better outcomes, and less time wasted.
          </SectionDescription>
        </div>
        <div className="bg-gradient-to-br from-teal/10 to-coral/10 rounded-lg p-8 min-h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="font-display text-5xl font-300 text-teal mb-2">
              10K+
            </div>
            <p className="text-stone">Specialists verified and matched</p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionEyebrow>Our Values</SectionEyebrow>
            <SectionTitle>Built on trust, powered by AI</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((value, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent>
                  <h3 className="font-display text-2xl font-300 text-teal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-carbon leading-relaxed">
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionEyebrow>Our Journey</SectionEyebrow>
            <SectionTitle>Growing fast, staying focused</SectionTitle>
          </div>
          <div className="space-y-12">
            {[
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
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center">
                    <span className="font-display text-2xl font-300 text-teal">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-xl font-300 text-night mb-2">
                    {item.title}
                  </h3>
                  <p className="text-carbon leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionEyebrow>The Team</SectionEyebrow>
            <SectionTitle>Experts in matching and marketing</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((member, idx) => (
              <Card key={idx}>
                <CardContent className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-teal">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-300 text-night mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-body letter-spacing-16 text-uppercase text-teal mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-carbon">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <SectionTitle className="mb-6">
            Get in touch
          </SectionTitle>
          <SectionDescription className="mb-8">
            Have questions? We'd love to hear from you.
          </SectionDescription>
          <p className="text-lg font-body text-teal hover:text-teal-dark transition-colors cursor-pointer">
            hello@execumarketing.com
          </p>
        </div>
      </Section>
    </main>
  )
}

export { AboutPage }
