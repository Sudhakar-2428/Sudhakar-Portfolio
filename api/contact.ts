import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using Resend
    // We use onboarding@resend.dev which works for testing/unverified domains.
    // The recipient MUST match the verified email in Resend dashboard.
    const { data, error } = await resend.emails.send({
      from: 'Sudhakar Portfolio <onboarding@resend.dev>',
      to: 'sudhakarshanmugasundar@gmail.com',
      replyTo: email,
      subject: `[Portfolio Contact] ${subject || 'New Message'}`,
      text: `New message received from Sudhakar's Portfolio\n\nName:\n${name}\n\nEmail:\n${email}\n\nSubject:\n${subject}\n\nMessage:\n${message}\n\nReceived from:\nSudhakar Portfolio`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
