// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import CROClient from './client';

export const metadata: Metadata = {
  title: 'Shopify Conversion Rate Optimization Services | GHL Scale Up',
  description: 'Increase your Shopify conversion rate by 30%+. A/B testing, checkout optimization, and data-driven CRO. Free audit available.',
  keywords: 'Shopify CRO, conversion rate optimization, A/B testing, checkout optimization, ecommerce conversions'
};

export default function CROPage() {
  return <CROClient />;
}