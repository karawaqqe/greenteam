import { Resend } from 'resend'

const requiredFields = ['name', 'email', 'phone', 'serviceType', 'message']
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const defaultFromEmail = 'Green Team Website <onboarding@resend.dev>'

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const normalizeValue = (value) => String(value ?? '').trim()

const getEnvValue = (name) => normalizeValue(process.env[name])

const getEmailAddress = (value) => {
  const normalizedValue = normalizeValue(value)
  const match = normalizedValue.match(/<([^>]+)>/)

  return match ? match[1] : normalizedValue
}

const getEmailDomain = (value) => {
  const email = getEmailAddress(value)
  const domain = email.includes('@') ? email.split('@').pop() : ''

  return domain || 'unknown'
}

const getSafeResendError = (error) => ({
  name: error?.name || 'unknown_error',
  message: error?.message || 'Unknown Resend error',
  statusCode: error?.statusCode ?? error?.status ?? null,
})

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

  const resendApiKey = getEnvValue('RESEND_API_KEY')
  const contactToEmail = getEnvValue('CONTACT_TO_EMAIL')
  const contactFromEmail = getEnvValue('CONTACT_FROM_EMAIL') || defaultFromEmail

  if (!resendApiKey) {
    console.error('Contact email configuration error:', {
      missing: 'RESEND_API_KEY',
      contactToEmailConfigured: Boolean(contactToEmail),
      fromDomain: getEmailDomain(contactFromEmail),
    })
    res.status(500).json({ error: 'Email service is not configured' })
    return
  }

  if (!contactToEmail) {
    console.error('Contact email configuration error:', {
      missing: 'CONTACT_TO_EMAIL',
      resendApiKeyConfigured: Boolean(resendApiKey),
      fromDomain: getEmailDomain(contactFromEmail),
    })
    res.status(500).json({ error: 'Email recipient is not configured' })
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
  const resend = new Resend(resendApiKey)

  try {
    const sendResult = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: data.email,
      subject: 'New Service Request - Green Team',
      html: buildHtmlEmail(emailData),
      text: buildTextEmail(emailData),
    })

    if (sendResult.error) {
      const resendError = getSafeResendError(sendResult.error)

      console.error('Resend returned an error for contact email:', {
        ...resendError,
        fromDomain: getEmailDomain(contactFromEmail),
        toDomain: getEmailDomain(contactToEmail),
        toConfigured: Boolean(contactToEmail),
      })

      res.status(resendError.statusCode >= 400 ? resendError.statusCode : 502).json({
        error: 'Failed to send contact request',
        providerError: resendError.name,
      })
      return
    }

    console.info('Contact email sent:', {
      id: sendResult.data?.id,
      fromDomain: getEmailDomain(contactFromEmail),
      toDomain: getEmailDomain(contactToEmail),
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    const resendError = getSafeResendError(error)

    console.error('Failed to send contact email:', {
      ...resendError,
      fromDomain: getEmailDomain(contactFromEmail),
      toDomain: getEmailDomain(contactToEmail),
      toConfigured: Boolean(contactToEmail),
    })

    res.status(500).json({
      error: 'Failed to send contact request',
      providerError: resendError.name,
    })
  }
}
