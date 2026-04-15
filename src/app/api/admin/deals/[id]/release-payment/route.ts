// // app/api/admin/deals/[id]/release-payment/route.ts
// import { NextResponse } from 'next/server';
// import { supabase } from "../../../../../../lib/SupabaseAuthClient"
// import { cookies } from 'next/headers';
// import Razorpay from 'razorpay';

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST(request: Request, { params }: { params: { id: string } }) {
    
//     // Get deal with freelancer details
//     const { data: deal } = await supabase
//         .from('deals')
//         .select('*')
//         .eq('id', params.id)
//         .single();
    
//     if (!deal || deal.payment_status !== 'paid') {
//         return NextResponse.json({ error: 'Payment not received yet' }, { status: 400 });
//     }
    
//     try {
//         // Create Razorpay payout to freelancer
//         // Note: Freelancer needs to have a Razorpay account linked
//         const transfer = await razorpay.transfers.create({
//             amount: Math.round(deal.freelancer_amount * 100), // Convert to paise
//             currency: 'INR',
//             account: deal.freelancer_razorpay_account_id, // You'll need to collect this during onboarding
//             notes: {
//                 deal_id: deal.id,
//                 purpose: 'Freelancer payment'
//             }
//         });
        
//         // Update deal with payout info
//         await supabase
//             .from('deals')
//             .update({
//                 payout_status: 'processing',
//                 payout_amount: deal.freelancer_amount,
//                 razorpay_transfer_id: transfer.id,
//                 paid_to_freelancer_at: new Date().toISOString()
//             })
//             .eq('id', deal.id);
        
//         // Log payout
//         await supabase
//             .from('payment_logs')
//             .insert({
//                 deal_id: deal.id,
//                 action: 'payout_initiated',
//                 details: { 
//                     transfer_id: transfer.id, 
//                     amount: deal.freelancer_amount 
//                 }
//             });
        
//         // TODO: Notify freelancer that payment is being processed
//         await notifyFreelancerPayoutInitiated(deal.freelancer_email, deal.freelancer_amount);
        
//         return NextResponse.json({ 
//             success: true,
//             transfer_id: transfer.id,
//             amount: deal.freelancer_amount
//         });
        
//     } catch (error) {
//         console.error('Razorpay transfer error:', error);
//         return NextResponse.json({ error: 'Failed to release payment' }, { status: 500 });
//     }
// }

// async function notifyFreelancerPayoutInitiated(email: string, amount: number) {
//     console.log(`Notify freelancer ${email}: Payout of ₹${amount} initiated`);
//     // Send email notification
// }