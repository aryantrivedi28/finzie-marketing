// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import TwitterAdsClient from './client';

export const metadata: Metadata = {
  title: 'Twitter/X Ads Management Services | Social Media Advertising | ExecuMarketing',
  description: 'Professional Twitter/X Ads management for brand awareness, engagement, and lead generation. Target by interests, keywords, and followers.',
  keywords: 'Twitter Ads, X advertising, social media ads, Twitter promotion, tweet engagement'
};

export default function TwitterAdsPage() {
  return <TwitterAdsClient />;
}