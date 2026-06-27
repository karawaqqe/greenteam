import { useEffect } from 'react'
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
  const hasSelectedService = Boolean(selectedService)

  useEffect(() => {
    if (!isModal) {
      return undefined
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModal, onClose])

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

          <p className={styles.contactLine}>gt.chilliwack@gmail.com</p>
        </div>

        <form
          className={styles.form}
          action="https://formsubmit.co/andr2010mac@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Green Clean Solutions request" />
          <input type="hidden" name="_template" value="table" />
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
