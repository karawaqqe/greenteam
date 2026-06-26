import { useEffect, useState } from 'react'
import styles from './Contact.module.scss'

const serviceTypes = [
  'Homes & Rentals',
  'Commercial & Property Managers',
  'Cars',
  'Gyms & Sports',
  'RV & Boats',
  'Hotels / Airbnb',
  'Other',
]

function Contact({ selectedService = '', isModal = false, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const hasSelectedService = Boolean(selectedService)

  useEffect(() => {
    if (!isModal) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModal, onClose])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const content = (
    <>
      <div className={`container ${styles.layout}`}>
        <div className={styles.info}>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title" id={isModal ? 'contact-modal-title' : undefined}>
            Tell us about the odor issue and the space.
          </h2>
          <p className="section-copy">
            Share the service type, location and any useful details. We will follow up with
            next steps and scheduling information.
          </p>

          <div className={styles.quickActions}>
            <a className="btn btn-secondary" href="mailto:contact@example.com">
              Email us
            </a>
          </div>

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
          {hasSelectedService ? (
            <div className={styles.selectedService}>
              <span>Service Type</span>
              <strong>{selectedService}</strong>
              <input name="serviceType" type="hidden" value={selectedService} />
            </div>
          ) : (
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
          )}
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
    </>
  )

  if (isModal) {
    return (
      <div className={styles.modalBackdrop} onMouseDown={onClose}>
        <section
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <button className={styles.closeButton} type="button" aria-label="Close contact form" onClick={onClose}>
            x
          </button>
          <div className={styles.modalContainer}>{content}</div>
        </section>
      </div>
    )
  }

  return (
    <section className={`section ${styles.section}`} id="contact">
      {content}
    </section>
  )
}

export default Contact
