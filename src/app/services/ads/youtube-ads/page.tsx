// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import YouTubeAdsClient from './client';

export const metadata: Metadata = {
  title: 'YouTube Ads Management Services | Video Advertising | ExecuMarketing',
  description: 'Professional YouTube Ads management for brand awareness, lead generation, and sales. In-stream, discovery, and bumper ads. Reach 2B+ monthly users.',
  keywords: 'YouTube Ads, video advertising, YouTube marketing, in-stream ads, video campaigns'
};

export default function YouTubeAdsPage() {
  return <YouTubeAdsClient />;
}