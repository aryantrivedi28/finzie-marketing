// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import StoreSetupClient from './client';

export const metadata: Metadata = {
  title: 'Shopify Store Setup & Migration Services | GHL Scale Up',
  description: 'Professional Shopify store setup and migration from WooCommerce, Magento, BigCommerce. Launch in 3-5 days with zero downtime. 45+ projects delivered.',
  keywords: 'Shopify store setup, Shopify migration, WooCommerce to Shopify, ecommerce setup'
};

export default function StoreSetupPage() {
  return <StoreSetupClient />;
}