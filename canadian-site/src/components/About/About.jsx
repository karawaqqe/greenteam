import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './About.module.scss'

function About() {
  const { t } = useLanguage()

  return (
    <section className={`section ${styles.section}`} id="about">
      <div className={`container ${styles.layout}`}>
        <div>
          <span className="section-kicker">{t('about.kicker')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
        </div>
        <div className={styles.copy}>
          <p>{t('about.text1')}</p>
          <p>{t('about.text2')}</p>
        </div>
      </div>
    </section>
  )
}

export default About
