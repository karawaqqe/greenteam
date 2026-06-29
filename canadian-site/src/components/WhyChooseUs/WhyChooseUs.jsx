import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './WhyChooseUs.module.scss'

function WhyChooseUs() {
  const { t } = useLanguage()
  const benefits = t('why.benefits')
  const highlights = t('why.highlights')

  return (
    <section className={`section ${styles.section}`} id="why-choose-us">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <span className="section-kicker">{t('why.kicker')}</span>
          <h2 className="section-title">{t('why.title')}</h2>
          <p>{t('why.copy')}</p>

          <div className={styles.highlights} aria-label={t('why.highlightsAria')}>
            {highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <article className={styles.item} key={benefit.title}>
              <span className={styles.marker} aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
