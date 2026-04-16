// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import AOVStrategyClient from './client';

export const metadata: Metadata = {
  title: 'Shopify AOV Strategy & Upsell Services | ExecuMarketing',
  description: 'Increase average order value with bundles, cross-sells, volume discounts, and post-purchase upsells. 15-25% AOV increase guaranteed.',
  keywords: 'AOV strategy, average order value, Shopify bundles, cross-sells, volume discounts, post-purchase upsells'
};

export default function AOVStrategyPage() {
  return <AOVStrategyClient />;
}