// lib/services/brevoService.ts
import * as brevo from '@getbrevo/brevo';

// Initialize Brevo API client
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || '');

interface SendEmailParams {
    to: string;
    subject: string;
    html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
    try {
        const sendSmtpEmail = new brevo.SendSmtpEmail();

        // Set sender
        sendSmtpEmail.sender = {
            email: process.env.BREVO_SENDER_EMAIL || 'noreply@yourdomain.com',
            name: process.env.BREVO_SENDER_NAME || 'Your Company'
        };

        // Set recipient
        sendSmtpEmail.to = [{ email: to }];

        // Set email content
        sendSmtpEmail.subject = subject;
        sendSmtpEmail.htmlContent = html;

        // Send email
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

        console.log('Email sent successfully:', data);
        return { success: true, data };

    } catch (error) {
        console.error('Brevo email error:', error);
        throw error;
    }
}

// Optional: Send template email if you have templates in Brevo
export async function sendTemplateEmail({
    to,
    templateId,
    params
}: {
    to: string;
    templateId: number;
    params: Record<string, any>;
}) {
    try {
        const sendSmtpEmail = new brevo.SendSmtpEmail();

        sendSmtpEmail.to = [{ email: to }];
        sendSmtpEmail.templateId = templateId;
        sendSmtpEmail.params = params;

        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        return { success: true, data };

    } catch (error) {
        console.error('Brevo template email error:', error);
        throw error;
    }
}