// app/api/admin/deals/[id]/send-agreements/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../../../../lib/SupabaseAuthClient';
import { ZohoSign } from '../../../../../../lib/zoho';
// Uncomment when Brevo is set up
// import { sendAgreementToClient, sendAgreementToFreelancer } from '@/lib/brevo';

export async function POST(request: Request, { params }: { params: { id: string } }) {
    // Validate params
    if (!params?.id) {
        return NextResponse.json({ error: 'Deal ID is required' }, { status: 400 });
    }

    try {
        // Get deal details
        const { data: deal, error: dealError } = await supabase
            .from('deals')
            .select('*')
            .eq('id', params.id)
            .single();

        if (dealError || !deal) {
            console.error('Deal not found:', dealError);
            return NextResponse.json({ error: 'Deal not found' }, { status: 404 });
        }

        // Initialize Zoho Sign with API key
        const zohoApiKey = process.env.ZOHO_API_KEY;
        if (!zohoApiKey) {
            return NextResponse.json({ error: 'Zoho API key not configured' }, { status: 500 });
        }

        const zoho = new ZohoSign(zohoApiKey);

        // Get template IDs
        const clientTemplateId = process.env.ZOHO_CLIENT_TEMPLATE_ID;
        const freelancerTemplateId = process.env.ZOHO_FREELANCER_TEMPLATE_ID;

        if (!clientTemplateId || !freelancerTemplateId) {
            return NextResponse.json({ error: 'Zoho template IDs not configured' }, { status: 500 });
        }

        const results: {
            client: any;
            freelancer: any;
        } = {
            client: null,
            freelancer: null
        };

        // 1. Send Client Agreement
        console.log('📄 Sending client agreement to:', deal.client_email);

        const clientAgreement = await zoho.createAgreement({
            template_id: clientTemplateId,
            data: {
                client_name: deal.client_name,
                project_id: deal.project_id || 'N/A',
                total_amount: deal.total_client_amount || 0,
                freelancer_name: deal.freelancer_name,
                payment_structure: JSON.stringify(deal.payment_structure || { type: 'one_time', schedule: [] }),
                // milestones may not be in deal table yet
            },
            signers: [
                { email: deal.client_email, name: deal.client_name, role: 'Client' },
                { email: process.env.ADMIN_EMAIL || 'admin@finzie.com', name: 'Finzie Admin', role: 'Witness' }
            ]
        });

        // Store client agreement
        await supabase
            .from('agreements')
            .insert({
                deal_id: deal.id,
                type: 'client',
                zoho_request_id: clientAgreement.request_id,
                signing_url: clientAgreement.signing_url,
                status: 'sent',
                sent_at: new Date().toISOString()
            });

        // Update deal with client agreement info
        await supabase
            .from('deals')
            .update({
                client_agreement_status: 'sent',
                client_zoho_request_id: clientAgreement.request_id,
                client_agreement_url: clientAgreement.signing_url,
                updated_at: new Date().toISOString()
            })
            .eq('id', deal.id);

        // Send email to client (commented until Brevo is set up)
        // await sendAgreementToClient(deal, clientAgreement.signing_url);

        results.client = clientAgreement;
        console.log('✅ Client agreement sent:', clientAgreement.request_id);

        // 2. Send Freelancer Agreement
        console.log('📄 Sending freelancer agreement to:', deal.freelancer_email);

        const freelancerAgreement = await zoho.createAgreement({
            template_id: freelancerTemplateId,
            data: {
                freelancer_name: deal.freelancer_name,
                project_id: deal.project_id || 'N/A',
                freelancer_amount: deal.freelancer_base_amount || 0,
                payment_schedule: JSON.stringify(deal.payment_structure || { type: 'one_time', schedule: [] }),
                admin_margin: deal.admin_margin || 0,
                client_name: deal.client_name
            },
            signers: [
                { email: deal.freelancer_email, name: deal.freelancer_name, role: 'Freelancer' },
                { email: process.env.ADMIN_EMAIL || 'admin@finzie.com', name: 'Finzie Admin', role: 'Witness' }
            ]
        });

        // Store freelancer agreement
        await supabase
            .from('agreements')
            .insert({
                deal_id: deal.id,
                type: 'freelancer',
                zoho_request_id: freelancerAgreement.request_id,
                signing_url: freelancerAgreement.signing_url,
                status: 'sent',
                sent_at: new Date().toISOString()
            });

        // Update deal with freelancer agreement info
        await supabase
            .from('deals')
            .update({
                freelancer_agreement_status: 'sent',
                freelancer_zoho_request_id: freelancerAgreement.request_id,
                freelancer_agreement_url: freelancerAgreement.signing_url,
                updated_at: new Date().toISOString()
            })
            .eq('id', deal.id);

        // Send email to freelancer (commented until Brevo is set up)
        // await sendAgreementToFreelancer(deal, freelancerAgreement.signing_url);

        results.freelancer = freelancerAgreement;
        console.log('✅ Freelancer agreement sent:', freelancerAgreement.request_id);

        // Log the action
        await supabase
            .from('payment_logs')
            .insert({
                deal_id: deal.id,
                action: 'agreements_sent',
                details: {
                    client_request_id: clientAgreement.request_id,
                    freelancer_request_id: freelancerAgreement.request_id,
                    sent_at: new Date().toISOString()
                }
            });

        return NextResponse.json({
            success: true,
            client_url: clientAgreement.signing_url,
            freelancer_url: freelancerAgreement.signing_url,
            client_request_id: clientAgreement.request_id,
            freelancer_request_id: freelancerAgreement.request_id
        });

    } catch (error: any) {
        console.error('Zoho Sign error:', error);
        return NextResponse.json({
            error: 'Failed to send agreements',
            details: error.message || 'Unknown error'
        }, { status: 500 });
    }
}