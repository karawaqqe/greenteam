import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './SafetyNotice.module.scss'

function SafetyNotice() {
  const { t } = useLanguage()

  return (
    <section className={`${styles.section} section`} id="safety">
      <div className="container">
        <article className={styles.notice}>
          <span className={styles.icon} aria-hidden="true">
            !
          </span>
          <div>
            <h2>{t('safety.title')}</h2>
            <p>{t('safety.text')}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SafetyNotice
