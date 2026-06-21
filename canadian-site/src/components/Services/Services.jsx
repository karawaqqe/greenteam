import { services } from '../../data/services.js'
import styles from './Services.module.scss'

function Services() {
  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="container">
        <span className="section-kicker">Services</span>
        <h2 className="section-title">Odor treatment options for vehicles, homes and businesses.</h2>
        <p className="section-copy">
          Professional ozone treatment is designed for unwanted odors caused by smoke,
          pets, food, moisture, stale air and regular use.
        </p>

        <div className={styles.accordion} aria-label="Ozone odor removal services">
          <div className={styles.row}>
            {services.map((service) => (
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
