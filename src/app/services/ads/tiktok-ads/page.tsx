// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import TikTokAdsClient from './client';

export const metadata: Metadata = {
  title: 'TikTok Ads Management Services | Social Media Advertising | ExecuMarketing',
  description: 'Professional TikTok Ads management for brands targeting Gen Z & Millennials. Creative strategy, audience targeting, and performance optimization.',
  keywords: 'TikTok Ads, TikTok advertising, social media ads, TikTok marketing, viral video ads'
};

export default function TikTokAdsPage() {
  return <TikTokAdsClient />;
}