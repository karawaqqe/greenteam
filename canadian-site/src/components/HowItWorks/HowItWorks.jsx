import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './HowItWorks.module.scss'

function StepIcon({ type }) {
  if (type === 'calendar') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="13" y="16" width="38" height="36" rx="5" />
        <path d="M21 11v10M43 11v10M13 26h38M23 36h6M35 36h6M23 44h6" />
        <path d="m37 47 5 5 10-12" />
      </svg>
    )
  }

  if (type === 'machine') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="14" y="20" width="34" height="30" rx="4" />
        <path d="M48 29h7v21h-7M20 50v4M43 50v4" />
        <circle cx="29" cy="35" r="10" />
        <path d="M29 25v20M19 35h20M22 28l14 14M36 28 22 42M42 34h.1M42 42h.1" />
      </svg>
    )
  }

  if (type === 'air') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M9 25h30c8 0 8-12 0-12-4 0-7 2-8 6M9 36h42c8 0 8 12 0 12-4 0-7-2-8-6M13 47h18" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M13 18h38v25H31L19 53V43h-6z" />
      <path d="M24 31h.1M32 31h.1M40 31h.1" />
    </svg>
  )
}

function HowItWorks() {
  const { t } = useLanguage()
  const steps = t('how.steps')

  return (
    <section className={`section ${styles.section}`} id="how-it-works">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-kicker">{t('how.kicker')}</span>
            <h2 className="section-title">{t('how.title')}</h2>
            <p className={styles.subtitle}>{t('how.subtitle')}</p>
          </div>
        </div>

        <div className={styles.process}>
          <div className={styles.processHeader}>
            <span>{t('how.flow')}</span>
          </div>
          <div className={styles.airLines} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.icon}>
                  <StepIcon type={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.notice}>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 8 52 16v14c0 13-8 22-20 27-12-5-20-14-20-27V16z" />
              <path d="m23 32 6 6 13-15" />
            </svg>
            <p>
              <strong>{t('how.noticeStrong')}</strong> {t('how.notice')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
