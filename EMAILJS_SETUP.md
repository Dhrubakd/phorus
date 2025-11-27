# EmailJS Setup Guide for Contact Form

This guide will help you configure the contact form to send emails to **dhrubakd53@gmail.com**

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or any other email provider you prefer)
4. Click **Connect Account** and authorize with your Gmail (dhrubakd53@gmail.com)
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Give it a name like "Contact Form Submission"
4. Configure the template:

### Template Content:
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Phorus Advisory contact form.
```

### Template Settings:
- **To Email**: dhrubakd53@gmail.com
- **From Name**: {{from_name}}
- **Reply To**: {{from_email}}

5. Click **Save**
6. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** (in sidebar)
2. Find **API Keys** section
3. **Copy your Public Key**

## Step 5: Update Contact.jsx

Open `src/pages/Contact.jsx` and replace these lines (around line 26-28):

```javascript
const serviceId = 'YOUR_SERVICE_ID';  // Replace with your EmailJS service ID
const templateId = 'YOUR_TEMPLATE_ID';  // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY';  // Replace with your EmailJS public key
```

With your actual values:

```javascript
const serviceId = 'service_xxxxxxx';  // Paste your Service ID
const templateId = 'template_xxxxxxx';  // Paste your Template ID
const publicKey = 'xxxxxxxxxxxxxxx';  // Paste your Public Key
```

## Step 6: Test the Form

1. Run `npm run dev` to start your development server
2. Go to the Contact page
3. Fill out the form and click "Send Message"
4. Check your inbox at dhrubakd53@gmail.com

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all IDs and keys are correct
- Make sure EmailJS service is connected to your Gmail
- Check EmailJS dashboard for delivery logs

### Getting "Failed to send" error?
- Verify your Public Key is correct
- Make sure the template variable names match ({{from_name}}, {{from_email}}, etc.)
- Check your EmailJS monthly quota (free plan: 200 emails/month)

### Want to customize the email format?
- Go to Email Templates in EmailJS dashboard
- Edit the template content and styling
- Save and test again

## Free Plan Limits
- 200 emails per month
- 2 email services
- Unlimited templates

If you need more emails, upgrade to a paid plan.

## Security Note
The Public Key is safe to expose in frontend code - it's designed for client-side use. However, keep your Private Key (if generated) secure and never commit it to Git.
