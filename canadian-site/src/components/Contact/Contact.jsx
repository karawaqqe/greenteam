import { useState } from 'react'
import styles from './Contact.module.scss'

const serviceTypes = [
  'Cars',
  'RV & Boats',
  'Homes & Rentals',
  'Gyms & Sports',
  'Commercial & Property Managers',
  'Hotels / Airbnb',
  'Other',
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={`container ${styles.layout}`}>
        <div className={styles.info}>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Tell us about the odor issue and the space.</h2>
          <p className="section-copy">
            Share the service type, location and any useful details. We will follow up with
            next steps and scheduling information.
          </p>

          <div className={styles.quickActions}>
            <a className="btn btn-primary" href="tel:+10000000000">
              Call us
            </a>
            <a className="btn btn-secondary" href="mailto:contact@example.com">
              Email us
            </a>
          </div>

          <p className={styles.contactLine}>+1 (000) 000-0000</p>
          <p className={styles.contactLine}>contact@example.com</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Service Type
            <select name="serviceType" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.fullWidth}>
            Message
            <textarea name="message" rows="5" required />
          </label>

          <button className="btn btn-primary" type="submit">
            Send Request
          </button>

          {submitted && <p className={styles.success}>Thank you! We will contact you soon.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
