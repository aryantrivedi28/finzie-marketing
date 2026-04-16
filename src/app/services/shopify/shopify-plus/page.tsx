// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import ShopifyPlusClient from './client';

export const metadata: Metadata = {
  title: 'Shopify Plus Development & Enterprise Services | ExecuMarketing',
  description: 'Enterprise Shopify Plus development, multi-store management, custom checkout, and advanced automation for scaling brands. 20+ Plus stores launched.',
  keywords: 'Shopify Plus, enterprise Shopify, Shopify Plus development, multi-store management, custom checkout Shopify'
};

export default function ShopifyPlusPage() {
  return <ShopifyPlusClient />;
}