// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import ThemeDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Shopify Theme Development & Customization Services | ExecuMarketing',
  description: 'Custom Shopify theme development with Liquid coding. Create unique, high-converting, mobile-responsive Shopify stores. 45+ themes delivered.',
  keywords: 'Shopify theme development, custom Shopify theme, Liquid development, Shopify theme customization, responsive Shopify design'
};

export default function ThemeDevelopmentPage() {
  return <ThemeDevelopmentClient />;
}