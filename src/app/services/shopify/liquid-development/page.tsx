// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import LiquidDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Shopify Liquid Development & Custom Coding Services | ExecuMarketing',
  description: 'Expert Shopify Liquid development for custom sections, advanced functionality, and template modifications. 100+ Liquid projects completed.',
  keywords: 'Shopify Liquid development, Liquid coding, custom Shopify sections, Shopify template development, Liquid programmer'
};

export default function LiquidDevelopmentPage() {
  return <LiquidDevelopmentClient />;
}