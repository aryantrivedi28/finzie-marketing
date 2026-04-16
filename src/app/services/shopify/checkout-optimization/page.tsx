// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import CheckoutOptimizationClient from './client';

export const metadata: Metadata = {
  title: 'Shopify Checkout Optimization & Upsell Services | ExecuMarketing',
  description: 'Optimize your Shopify checkout to reduce abandonment and increase AOV. Custom checkout, post-purchase upsells, and one-click upsells. 35% abandonment reduction.',
  keywords: 'Shopify checkout optimization, checkout abandonment, post-purchase upsells, checkout customization, Shopify checkout'
};

export default function CheckoutOptimizationPage() {
  return <CheckoutOptimizationClient />;
}