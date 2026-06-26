import { Link, Navigate, useParams } from 'react-router-dom'
import { getServiceBySlug } from '../../data/services.js'
import styles from './ServiceDetail.module.scss'

function ServiceDetail({ onContactClick }) {
  const { serviceSlug } = useParams()
  const service = getServiceBySlug(serviceSlug)

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
              Back to services
            </Link>
            <div className={styles.heroCopy}>
              <span className="section-kicker">Ozone cleaning</span>
              <h1>{service.title}</h1>
              <p>{service.heroText}</p>
              <div className={styles.heroFacts} aria-label="Service summary">
                <span>From {service.startingFrom}</span>
                <span>{service.timeline}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.details}`}>
          <div className={`container ${styles.detailsGrid}`}>
            <div className={styles.mainCopy}>
              <span className="section-kicker">What we will do</span>
              <h2 className="section-title">Cleaning plan for {service.title}</h2>
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
                <h2>Prices</h2>
                <p>Starting prices in Canadian dollars. Final quotes depend on size, odor level and access.</p>
                <ul>
                  {service.pricing.map((price) => (
                    <li key={price}>{price}</li>
                  ))}
                </ul>
              </aside>

              <div className={styles.contactCta}>
                <button className="btn btn-primary" type="button" onClick={() => onContactClick(service.title)}>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default ServiceDetail
