import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './CookieConsent.module.scss'

const consentStorageKey = 'green-team-cookie-consent'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== 'undefined' && !window.localStorage.getItem(consentStorageKey),
  )
  const { t } = useLanguage()

  const saveConsent = (value) => {
    window.localStorage.setItem(consentStorageKey, value)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className={styles.backdrop}>
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
      >
        <div className={styles.icon} aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
        </div>
        <div className={styles.copy}>
          <h2 id="cookie-consent-title">{t('cookie.title')}</h2>
          <p>{t('cookie.copy')}</p>
          <div className={styles.links}>
            <Link to="/cookies">{t('footer.cookies')}</Link>
            <Link to="/privacy-policy">{t('footer.privacy')}</Link>
          </div>
        </div>
        <div className={styles.actions}>
          <button className="btn btn-primary" type="button" onClick={() => saveConsent('accepted')}>
            {t('cookie.accept')}
          </button>
          <button className={styles.secondaryButton} type="button" onClick={() => saveConsent('necessary')}>
            {t('cookie.necessary')}
          </button>
        </div>
      </section>
    </div>
  )
}

export default CookieConsent
