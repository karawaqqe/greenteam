import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './LanguageSwitcher.module.scss'

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const switcherRef = useRef(null)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!switcherRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  const chooseLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <div className={styles.switcher} ref={switcherRef}>
      <button
        className={styles.trigger}
        type="button"
        aria-label={t('language.choose')}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.flag} aria-hidden="true">
          {language.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className={styles.panel}>
          <button
            className={language === 'en' ? styles.active : ''}
            type="button"
            onClick={() => chooseLanguage('en')}
          >
            English
          </button>
          <button
            className={language === 'fr' ? styles.active : ''}
            type="button"
            onClick={() => chooseLanguage('fr')}
          >
            Français
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
