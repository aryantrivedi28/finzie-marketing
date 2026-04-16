// app/services/ads/google-ads/page.tsx (Server Component)
import { Metadata } from 'next';
import RetargetingCliet from './client';

export const metadata: Metadata = {
  title: 'Retargeting Ads Management Services | Audience Retargeting | ExecuMarketing',
  description: 'Professional retargeting campaigns across Meta, Google, and TikTok. Re-engage website visitors, cart abandoners, and past customers. Recover lost sales.',
  keywords: 'Retargeting ads, audience retargeting, remarketing campaigns, cart abandonment, website retargeting'
};

export default function RetargetingPage() {
  return <RetargetingCliet />;
}