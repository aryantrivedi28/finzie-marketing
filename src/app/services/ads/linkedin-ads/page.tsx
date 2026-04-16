// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import LinkedInAdsClient from './client';

export const metadata: Metadata = {
title: 'LinkedIn Ads Management Services | B2B Advertising | ExecuMarketing',
  description: 'Professional LinkedIn Ads management for B2B lead generation. Target by job title, company, industry, and seniority. Generate qualified B2B leads.',
  keywords: 'LinkedIn Ads, B2B advertising, LinkedIn lead generation, professional targeting, B2B marketing'
};

export default function LinkedInAdsPage() {
  return <LinkedInAdsClient />;
}