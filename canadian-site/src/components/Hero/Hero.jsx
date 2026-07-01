import heroImage from '../../assets/images/ozone-service-hero.png'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Hero.module.scss'

function Hero({ onContactClick }) {
  const { t } = useLanguage()

  return (
    <section className={styles.hero} id="home">
      <img
        className={styles.heroImage}
        src={heroImage}
        alt="Professional ozone generator set up in a clean room for odor treatment"
      />
      <span className={styles.topCut} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>{t('hero.kicker')}</p>
          <h1>{t('hero.title')}</h1>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>
          <p className={styles.description}>{t('hero.description')}</p>
          <p className={styles.description}>{t('hero.extraDescription')}</p>
          <div className={styles.actions}>
            <button className="btn btn-brand" type="button" onClick={onContactClick}>
              {t('nav.bookService')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
