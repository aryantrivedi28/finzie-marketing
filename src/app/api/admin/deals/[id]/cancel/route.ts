// // app/api/admin/deals/[id]/cancel/route.ts
// import { NextResponse } from 'next/server';
// import { supabase } from "../../../../../../lib/SupabaseAuthClient"
// import { cookies } from 'next/headers';
// import Razorpay from 'razorpay';

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST(request: Request, { params }: { params: { id: string } }) {
//     const { reason, refund_amount } = await request.json();

//     // Get deal details
//     const { data: deal } = await supabase
//         .from('deals')
//         .select('*')
//         .eq('id', params.id)
//         .single();

//     if (!deal) {
//         return NextResponse.json({ error: 'Deal not found' }, { status: 404 });
//     }

//     // If payment was made, process refund
//     if (deal.payment_status === 'paid' && deal.razorpay_payment_id) {
//         try {
//             const refund = await razorpay.payments.refund(deal.razorpay_payment_id, {
//                 amount: refund_amount ? Math.round(refund_amount * 100) : undefined,
//                 notes: {
//                     deal_id: deal.id,
//                     reason: reason || 'Cancelled by admin'
//                 }
//             });

//             await supabase
//                 .from('payment_logs')
//                 .insert({
//                     deal_id: deal.id,
//                     action: 'refund_processed',
//                     details: {
//                         refund_id: refund.id, details: {
//                             refund_id: refund.id,
//                             amount: (refund.amount ?? 0) / 100
//                         }
//                     }
//                 });
//         } catch (error) {
//             console.error('Refund failed:', error);
//             return NextResponse.json({ error: 'Refund failed' }, { status: 500 });
//         }
//     }

//     // Update deal status
//     await supabase
//         .from('deals')
//         .update({
//             payment_status: 'cancelled',
//             agreement_status: 'cancelled',
//             notes: `Cancelled: ${reason || 'No reason provided'}`
//         })
//         .eq('id', deal.id);

//     // Notify client and freelancer
//     // await sendCancellationNotification(deal, reason);

//     return NextResponse.json({
//         success: true,
//         message: 'Deal cancelled successfully'
//     });
// }