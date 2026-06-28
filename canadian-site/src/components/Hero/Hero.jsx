import heroImage from '../../assets/images/ozone-service-hero.png'
import styles from './Hero.module.scss'

function Hero({ onContactClick }) {
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
          <p className={styles.kicker}>Chilliwack & Fraser Valley</p>
          <h1>Professional Ozone Odor Removal Services</h1>
          <p className={styles.subtitle}>
            Ozone treatment for cars, homes, rentals, commercial spaces and more.
          </p>
          <p className={styles.description}>
            Helping reduce tough odors from smoke, pets, food, mustiness and everyday use
            across Chilliwack and the Fraser Valley.
          </p>
          <div className={styles.actions}>
            <button className="btn btn-secondary" type="button" onClick={onContactClick}>
              Book Service
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
