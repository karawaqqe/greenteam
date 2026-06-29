import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Services.module.scss'

function Services() {
  const { serviceItems, t } = useLanguage()

  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="container">
        <span className="section-kicker">{t('servicesSection.kicker')}</span>
        <h2 className="section-title">{t('servicesSection.title')}</h2>
        <p className="section-copy">{t('servicesSection.copy')}</p>

        <div className={styles.accordion} aria-label={t('servicesSection.aria')}>
          <div className={styles.row}>
            {serviceItems.map((service) => (
              <article className={styles.card} key={service.title} tabIndex="0">
                <img
                  className={styles.image}
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
