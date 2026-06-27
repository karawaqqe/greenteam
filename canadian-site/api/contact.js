import { Resend } from 'resend'

const requiredFields = ['name', 'email', 'phone', 'serviceType', 'message']
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const normalizeValue = (value) => String(value ?? '').trim()

const buildHtmlEmail = ({ name, email, phone, serviceType, message, submittedAt }) => {
  const fieldStyle = 'margin:0 0 6px;color:#64778a;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;'
  const valueStyle = 'margin:0;color:#071a2d;font-size:16px;line-height:1.55;'
  const sectionStyle = 'padding:22px 0;border-top:1px solid #dbe8f2;'

  return `
    <div style="margin:0;padding:0;background:#f7fbfe;font-family:Arial,Helvetica,sans-serif;color:#071a2d;">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
        <div style="overflow:hidden;border:1px solid #dbe8f2;border-radius:14px;background:#ffffff;box-shadow:0 16px 36px rgba(7,26,45,.08);">
          <div style="padding:28px 30px;background:#071a2d;color:#ffffff;">
            <p style="margin:0 0 8px;color:#9ee7f5;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">Green Team Website</p>
            <h1 style="margin:0;font-size:28px;line-height:1.15;">New Service Request</h1>
          </div>

          <div style="padding:8px 30px 28px;">
            <div style="${sectionStyle}">
              <h2 style="margin:0 0 16px;color:#071a2d;font-size:18px;">Contact Details</h2>
              <p style="${fieldStyle}">Full Name</p>
              <p style="${valueStyle}">${escapeHtml(name)}</p>
              <div style="height:16px;"></div>
              <p style="${fieldStyle}">Email</p>
              <p style="${valueStyle}">${escapeHtml(email)}</p>
              <div style="height:16px;"></div>
              <p style="${fieldStyle}">Phone</p>
              <p style="${valueStyle}">${escapeHtml(phone)}</p>
            </div>

            <div style="${sectionStyle}">
              <h2 style="margin:0 0 16px;color:#071a2d;font-size:18px;">Requested Service</h2>
              <p style="${fieldStyle}">Service Type</p>
              <p style="${valueStyle}">${escapeHtml(serviceType)}</p>
            </div>

            <div style="${sectionStyle}">
              <h2 style="margin:0 0 16px;color:#071a2d;font-size:18px;">Message</h2>
              <p style="${valueStyle};white-space:pre-line;">${escapeHtml(message)}</p>
            </div>

            <div style="${sectionStyle}">
              <p style="${fieldStyle}">Submitted At</p>
              <p style="${valueStyle}">${escapeHtml(submittedAt)}</p>
            </div>

            <p style="margin:18px 0 0;color:#64778a;font-size:13px;">Sent from Green Team website</p>
          </div>
        </div>
      </div>
    </div>
  `
}

const buildTextEmail = ({ name, email, phone, serviceType, message, submittedAt }) => `
New Service Request

Contact Details:
Full Name: ${name}
Email: ${email}
Phone: ${phone}

Requested Service:
Service Type: ${serviceType}

Message:
${message}

Submitted At:
${submittedAt}

Sent from Green Team website
`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: 'RESEND_API_KEY is missing' })
    return
  }

  if (!process.env.CONTACT_TO_EMAIL) {
    res.status(500).json({ error: 'CONTACT_TO_EMAIL is missing' })
    return
  }

  let body = req.body || {}

  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}')
    } catch {
      res.status(400).json({ error: 'Invalid JSON body' })
      return
    }
  }

  const data = requiredFields.reduce((values, field) => {
    values[field] = normalizeValue(body[field])
    return values
  }, {})

  const missingField = requiredFields.find((field) => !data[field])
  if (missingField) {
    res.status(400).json({ error: `${missingField} is required` })
    return
  }

  if (!emailPattern.test(data.email)) {
    res.status(400).json({ error: 'Please provide a valid email address' })
    return
  }

  const submittedAt = new Date().toISOString()
  const emailData = { ...data, submittedAt }
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Green Team Website <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: 'New Service Request — Green Team',
      html: buildHtmlEmail(emailData),
      text: buildTextEmail(emailData),
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    res.status(500).json({ error: 'Failed to send contact request' })
  }
}
