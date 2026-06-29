import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './ServiceDetail.module.scss'

function BriefcaseBusinessIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}

function ServiceDetail({ onContactClick }) {
  const { serviceSlug } = useParams()
  const { serviceItems, t } = useLanguage()
  const service = serviceItems.find((item) => item.slug === serviceSlug)

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <article className={styles.page}>
        <section className={styles.hero}>
          <img className={styles.heroImage} src={service.image} alt="" aria-hidden="true" />
          <div className={`container ${styles.heroInner}`}>
            <Link className={styles.backLink} to="/#service-options">
              {t('detail.back')}
            </Link>
            <div className={styles.heroCopy}>
              <span className="section-kicker">{t('detail.kicker')}</span>
              <h1>{service.title}</h1>
              <p>{service.heroText}</p>
              <div className={styles.heroFacts} aria-label="Service summary">
                <span>{t('detail.from')} {service.startingFrom}</span>
                <span>{service.timeline}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.details}`}>
          <div className={`container ${styles.detailsGrid}`}>
            <div className={styles.mainCopy}>
              <span className="section-kicker">{t('detail.planKicker')}</span>
              <h2 className="section-title">{t('detail.planTitlePrefix')} {service.title}</h2>
              <p className="section-copy">{service.overview}</p>

              <div className={styles.process}>
                {service.process.map((step, index) => (
                  <div className={styles.processStep} key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.priceColumn}>
              <aside className={styles.pricePanel} aria-label={`${service.title} pricing`}>
                <h2>{t('detail.prices')}</h2>
                <p>{t('detail.pricesCopy')}</p>
                <div className={styles.priceGroups}>
                  {service.pricing.map((group) => (
                    <section className={styles.priceGroup} key={group.group} aria-label={group.group}>
                      <h3>
                        <BriefcaseBusinessIcon className={styles.priceGroupIcon} />
                        {group.group}
                      </h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={`${group.group}-${item.name}`}>
                            <span>{item.name}</span>
                            <strong>{item.price}</strong>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </aside>

              <div className={styles.contactCta}>
                <button className="btn btn-brand" type="button" onClick={() => onContactClick(service.title)}>
                  {t('nav.bookService')}
                </button>
              </div>
            </div>
          </div>

          <section className={`container ${styles.safetyMetering}`} aria-label={t('detail.monitoringAria')}>
            <div className={styles.monitoringCopy}>
              <p>{t('detail.monitoring1')}</p>
              <p>{t('detail.monitoring2')}</p>
            </div>

            <div className={styles.insuranceNote}>
              <span className={styles.shieldIcon} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <p>{t('detail.insured')}</p>
            </div>
          </section>
        </section>
      </article>
    </>
  )
}

export default ServiceDetail
