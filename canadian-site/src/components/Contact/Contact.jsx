import { useEffect, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Contact.module.scss'

function Contact({ selectedService = '', isModal = false, onClose }) {
  const hasSelectedService = Boolean(selectedService)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const { serviceItems, t } = useLanguage()
  const serviceTypes = [...serviceItems.map((service) => service.title), t('contact.other')]

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (submitStatus === 'sending') {
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const requestData = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      serviceType: String(formData.get('serviceType') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    }

    setSubmitStatus('sending')
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
      const responseData = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(responseData.error || 'Contact request failed')
      }

      form.reset()
      setSubmitStatus('success')
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Contact request failed')
      setSubmitStatus('error')
    }
  }

  const content = (
    <>
      <div className={`container ${styles.layout}`}>
        <div className={styles.info}>
          <span className="section-kicker">{t('contact.kicker')}</span>
          <h2 className="section-title" id={isModal ? 'contact-modal-title' : undefined}>
            {t('contact.title')}
          </h2>
          <p className="section-copy">{t('contact.copy')}</p>

          <p className={styles.contactLine}>gt.chilliwack@gmail.com</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            {t('contact.name')}
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            {t('contact.email')}
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            {t('contact.phone')}
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          {hasSelectedService ? (
            <div className={styles.selectedService}>
              <span>{t('contact.serviceType')}</span>
              <strong>{selectedService}</strong>
              <input name="serviceType" type="hidden" value={selectedService} />
            </div>
          ) : (
            <label>
              {t('contact.serviceType')}
              <select name="serviceType" defaultValue="" required>
                <option value="" disabled>
                  {t('contact.selectService')}
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
            {t('contact.message')}
            <textarea name="message" rows="5" required />
          </label>

          <button className="btn btn-primary" type="submit" disabled={submitStatus === 'sending'}>
            {submitStatus === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>

          {submitStatus === 'success' && (
            <p className={`${styles.statusMessage} ${styles.success}`}>
              {t('contact.success')}
            </p>
          )}

          {submitStatus === 'error' && (
            <p className={`${styles.statusMessage} ${styles.error}`}>
              {submitError || t('contact.fallbackError')}
            </p>
          )}
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
          <button className={styles.closeButton} type="button" aria-label={t('contact.close')} onClick={onClose}>
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
