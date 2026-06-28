import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieConsent.module.scss'

const consentStorageKey = 'green-team-cookie-consent'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentStorageKey)

    if (!savedConsent) {
      setIsVisible(true)
    }
  }, [])

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
          <h2 id="cookie-consent-title">Cookie preferences</h2>
          <p>
            We use necessary cookies and local storage to keep the site working and remember
            your choice. Optional cookies may help us understand site performance.
          </p>
          <div className={styles.links}>
            <Link to="/cookies">Cookies Policy</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className={styles.actions}>
          <button className="btn btn-primary" type="button" onClick={() => saveConsent('accepted')}>
            Accept all
          </button>
          <button className={styles.secondaryButton} type="button" onClick={() => saveConsent('necessary')}>
            Necessary only
          </button>
        </div>
      </section>
    </div>
  )
}

export default CookieConsent
