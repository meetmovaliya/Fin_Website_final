import emailjs from '@emailjs/browser';

// CONFIGURATION: User will replace these with values from SETUP_FORMS.md
export const CONFIG = {
    // Replace these with your actual IDs from EmailJS
    EMAILJS_SERVICE_ID: 'service_xvcgkp4',
    EMAILJS_TEMPLATE_ID: 'template_73carsk',
    EMAILJS_PUBLIC_KEY: 'f6n4vHeJbtJT84veI',

    // Replace this with your Web App URL from Google Apps Script
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzBKNL25kFdQhycbtZppdjFiw3u2SaDxVzpyrdK1vGXBLgugq9NF6_NfDyh1kqyKQKLlA/exec'
};

export interface FormData {
    name: string;
    email?: string; // Optional because some forms might not have it, but Contact/Popup do
    city: string;
    phone: string;
    service: string;
    message: string;
}

export const submitForm = async (data: FormData): Promise<{ success: boolean; message: string }> => {
    let emailSuccess = false;
    let sheetSuccess = false;
    const errors: string[] = [];

    // 1. Send Email via EmailJS
    try {
        if (CONFIG.EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
            console.warn('EmailJS not configured. Skipping email send.');
        } else {
            await emailjs.send(
                CONFIG.EMAILJS_SERVICE_ID,
                CONFIG.EMAILJS_TEMPLATE_ID,
                {
                    to_name: 'ProCashu Team',
                    from_name: data.name,
                    from_email: data.email || 'Not provided',
                    message: data.message,
                    phone: data.phone,
                    city: data.city,
                    service: data.service,
                    reply_to: data.email || 'no-reply@procashu.com',
                    admin_notifier: 'hr@procashu.com' // Passing this to the template
                },
                CONFIG.EMAILJS_PUBLIC_KEY
            );
            emailSuccess = true;
        }
    } catch (error) {
        console.error('EmailJS Error:', error);
        errors.push('Failed to send email notification.');
    }

    // 2. Save to Google Sheets
    try {
        if (CONFIG.GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
            console.warn('Google Script URL not configured. Skipping sheet save.');
        } else {
            // We use 'no-cors' mode which allows sending data but might not give a readable response.
            // Ideally, the script handles it.
            await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: 'POST',
                // mode: 'no-cors', // Uncomment if causing CORS errors, but 'cors' is better if script handles OPTIONs
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8', // Plain text to avoid CORS preflight issues sometimes
                },
                body: JSON.stringify(data)
            });
            sheetSuccess = true;
        }
    } catch (error) {
        console.error('Google Sheet Error:', error);
        errors.push('Failed to save to Google Sheet.');
    }

    // Result handling
    if (CONFIG.EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' && CONFIG.GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
        // If nothing configured, simulate success for demo
        console.log('Simulating success (No config provided)');
        return { success: true, message: 'Form submitted successfully (Demo Mode)!' };
    }

    if (emailSuccess || sheetSuccess) {
        return { success: true, message: 'Form submitted successfully!' };
    } else {
        return { success: false, message: 'Submission failed. Please try again later.' };
    }
};
