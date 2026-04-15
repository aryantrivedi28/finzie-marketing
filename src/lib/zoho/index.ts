// lib/zoho/index.ts
export class ZohoSign {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://sign.zoho.com/api/v1';
    }

    async createAgreement({ template_id, data, signers }: {
        template_id: string;
        data: Record<string, any>;
        signers: Array<{ email: string; name: string; role: string }>;
    }) {
        try {
            // Convert template fields to merge data
            const mergeFields = Object.entries(data).map(([fieldName, fieldValue]) => ({
                field_name: fieldName,
                field_value: String(fieldValue)
            }));

            const payload = {
                requests: {
                    request_name: `Agreement for ${data.project_id}`,
                    templates: [{ template_id }],
                    merge_fields: mergeFields,
                    actions: signers.map(signer => ({
                        action_type: 'SIGN',
                        recipient_name: signer.name,
                        recipient_email: signer.email,
                        recipient_phonenumber: '',
                        signing_order: signer.role === 'Client' ? 1 : 2,
                        verify_recipient: true,
                        verify_recipient_type: 'EMAIL'
                    }))
                }
            };

            const response = await fetch(`${this.baseUrl}/requests`, {
                method: 'POST',
                headers: {
                    'Authorization': `Zoho-oauthtoken ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to create agreement');
            }

            const result = await response.json();
            
            return {
                request_id: result.requests.request_id,
                signing_url: result.requests.actions[0].signing_url,
                status: result.requests.request_status
            };
        } catch (error) {
            console.error('Zoho Sign API error:', error);
            throw error;
        }
    }

    async getAgreementStatus(requestId: string) {
        const response = await fetch(`${this.baseUrl}/requests/${requestId}`, {
            headers: {
                'Authorization': `Zoho-oauthtoken ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to get agreement status');
        }

        const result = await response.json();
        return {
            status: result.requests.request_status,
            signed_pdf_url: result.requests.signed_pdf?.url,
            signers: result.requests.actions?.map((action: any) => ({
                email: action.recipient_email,
                name: action.recipient_name,
                signed: action.action_status === 'SIGNED'
            }))
        };
    }
}