// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import MetaAdsClient from './client';

export const metadata: Metadata = {
  title: 'Meta Ads Management Services | Facebook & Instagram Advertising | ExecuMarketing',
  description: 'Professional Meta Ads management for Facebook & Instagram. Drive qualified traffic, generate leads, and scale revenue with data-driven campaigns. 50+ active campaigns.',
  keywords: 'Meta Ads, Facebook Ads, Instagram Advertising, social media advertising, Meta campaign management'
};

export default function MetaAdsPage() {
  return <MetaAdsClient />;
}