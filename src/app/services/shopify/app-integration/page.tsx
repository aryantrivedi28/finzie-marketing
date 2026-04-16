// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import AppIntegrationClient from './client';

export const metadata: Metadata = {
  title: 'Shopify App Integration & Automation Services | ExecuMarketing',
  description: 'Professional Shopify app integration, automation workflows, and API connections. Connect email, reviews, loyalty, and custom apps. 100+ integrations completed.',
  keywords: 'Shopify app integration, Shopify automation, API integration, workflow automation, Shopify apps setup'
};

export default function AppIntegrationPage() {
  return <AppIntegrationClient />;
}