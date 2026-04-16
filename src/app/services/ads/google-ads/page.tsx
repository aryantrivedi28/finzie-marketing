// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import GoogleAdsClient from './client';

export const metadata: Metadata = {
  title: 'Google Ads Management Services | Search & Shopping Advertising | ExecuMarketing',
  description: 'Professional Google Ads management for Search, Shopping, Display & YouTube. Capture high-intent traffic and maximize ROI. 100+ campaigns managed.',
  keywords: 'Google Ads, PPC management, Google Search Ads, Google Shopping, YouTube Ads'
};

export default function GoogleAdsPage() {
  return <GoogleAdsClient />;
}