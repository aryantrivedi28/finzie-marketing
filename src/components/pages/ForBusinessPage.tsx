'use client'

import React from 'react'
import {
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from '../ui/Section'
import { Button } from '../ui/button'

const ForBusinessPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <main className="flex-1">
      <Section columns={2} className="min-h-[78vh] items-center gap-20">
        <div>
          <SectionEyebrow>For Business</SectionEyebrow>
          <SectionTitle className="text-5xl mb-8">
            Built to <span className="italic text-teal">deliver</span>. Designed to scale.
          </SectionTitle>
          <SectionDescription className="mb-8">
            We match you to clients who need exactly what you do. No guessing. No shortcuts. Just the right fit, verified and ready to start.
          </SectionDescription>
          <div className="flex gap-4">
            <Button
              size="lg"
              onClick={() => onNavigate('home')}
            >
              Post a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="space-y-8">
          {[
            {
              num: '01',
              title: 'Brief',
              desc: 'Tell us what you need'
            },
            {
              num: '02',
              title: 'Match',
              desc: 'AI finds the right specialist'
            },
            {
              num: '03',
              title: 'Execute',
              desc: 'Start within 24 hours'
            }
          ].map((step, idx) => (
            <div key={idx}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="text-xl font-display font-300 text-teal w-16">
                    {step.num} —
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-300 text-night mb-2">
                    {step.title}
                  </h3>
                  <p className="text-carbon leading-relaxed">
                    {step.desc}
                  </p>
                  {step.num === '01' && (
                    <p className="text-sm text-stone mt-3">
                      Paid ads, social media, SEO, CRM setup — describe your project in plain language. Our AI takes it from there.
                    </p>
                  )}
                  {step.num === '02' && (
                    <p className="text-sm text-stone mt-3">
                      Portfolios and past performance scored against your exact requirements. One match — the right one. Not a shortlist of 40.
                    </p>
                  )}
                  {step.num === '03' && (
                    <p className="text-sm text-stone mt-3">
                      Verified. Briefed. Ready. Your freelancer is introduced and working before the week is out.
                    </p>
                  )}
                </div>
              </div>
              {idx < 2 && (
                <div className="ml-8 h-12 border-l-2 border-teal/30 my-4" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-night text-white py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {[
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
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl font-300 text-teal mb-2">
                  {stat.num}
                </div>
                <div className="text-sm font-body text-stone letter-spacing-16 text-uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <SectionTitle className="mb-6">
            Stop wasting time and budget on the wrong hires.
          </SectionTitle>
          <SectionDescription className="mb-8">
            Post your project in under 2 minutes. Get AI-matched to verified talent. Start working within 24 hours.
          </SectionDescription>
          <Button
            size="lg"
            onClick={() => onNavigate('home')}
          >
            Post a Project Now
          </Button>
        </div>
      </Section>
    </main>
  )
}

export { ForBusinessPage }
