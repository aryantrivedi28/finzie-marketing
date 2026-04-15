// // app/api/admin/deals/[id]/create-payment-link/route.ts
// import { NextResponse } from 'next/server';
// import { supabase } from "../../../../../../lib/SupabaseAuthClient"
// import Razorpay from 'razorpay';

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST(request: Request, { params }: { params: { id: string } }) {
    
//     // Get deal with amounts
//     const { data: deal } = await supabase
//         .from('deals')
//         .select('*')
//         .eq('id', params.id)
//         .single();
    
//     if (!deal || !deal.total_with_gst) {
//         return NextResponse.json({ error: 'Amount not set' }, { status: 400 });
//     }
    
//     try {
//         // Create Razorpay order
//         const order = await razorpay.orders.create({
//             amount: Math.round(deal.total_with_gst * 100), // Convert to paise
//             currency: 'INR',
//             receipt: `deal_${deal.id}`,
//             notes: {
//                 deal_id: deal.id,
//                 client_email: deal.client_email,
//                 freelancer_email: deal.freelancer_email
//             }
//         });
        
//         // Create client invoice record
//         const invoiceNumber = `INV-C-${Date.now()}`;
//         const { data: invoice } = await supabase
//             .from('invoices')
//             .insert({
//                 deal_id: deal.id,
//                 type: 'client',
//                 invoice_number: invoiceNumber,
//                 amount: deal.total_with_gst,
//                 description: `Project: ${deal.project_id}`,
//                 status: 'sent'
//             })
//             .select()
//             .single();
        
//         // Generate payment link
//         const paymentLink = `${process.env.NEXT_PUBLIC_APP_URL}/payment/${order.id}`;
        
//         // Update deal with payment info
//         await supabase
//             .from('deals')
//             .update({
//                 razorpay_order_id: order.id,
//                 payment_link: paymentLink
//             })
//             .eq('id', deal.id);
        
//         // Log action
//         await supabase
//             .from('payment_logs')
//             .insert({
//                 deal_id: deal.id,
//                 action: 'payment_link_created',
//                 details: { order_id: order.id, amount: deal.total_with_gst }
//             });
        
//         // TODO: Send payment link to client via WhatsApp/Email
//         await sendPaymentLinkToClient(deal.client_phone, deal.client_email, paymentLink, deal.total_with_gst);
        
//         return NextResponse.json({ 
//             success: true,
//             payment_link: paymentLink,
//             order_id: order.id
//         });
        
//     } catch (error) {
//         console.error('Razorpay error:', error);
//         return NextResponse.json({ error: 'Failed to create payment link' }, { status: 500 });
//     }
// }

// async function sendPaymentLinkToClient(phone: string, email: string, link: string, amount: number) {
//     // Send WhatsApp message
//     console.log(`Send WhatsApp to ${phone}: Payment link ${link}`);
    
//     // Send email
//     console.log(`Send email to ${email}: Payment link ${link}`);
// }