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
                <div className={styles.priceGroups}>
                  {service.pricing.map((group) => (
                    <section className={styles.priceGroup} key={group.group} aria-label={group.group}>
                      <h3>{group.group}</h3>
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
                <button className="btn btn-primary" type="button" onClick={() => onContactClick(service.title)}>
                  Contact
                </button>
              </div>
            </div>
          </div>

          <section className={`container ${styles.safetyMetering}`} aria-label="Ozone monitoring and insurance">
            <div className={styles.monitoringCopy}>
              <p>
                We use professional ozone sensors and electronic ozone meters at every stage of
                the service to monitor ozone levels in real time.
              </p>
              <p>
                This helps us control the ozone concentration throughout the process and ensure
                the treated area is safe to enter after the service is completed.
              </p>
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
              <p>Our company is fully insured for your peace of mind.</p>
            </div>
          </section>
        </section>
      </article>
    </>
  )
}

export default ServiceDetail
