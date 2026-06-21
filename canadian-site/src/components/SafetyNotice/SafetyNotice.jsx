import styles from './SafetyNotice.module.scss'

function SafetyNotice() {
  return (
    <section className="section" id="safety">
      <div className="container">
        <article className={styles.notice}>
          <span className={styles.icon} aria-hidden="true">
            !
          </span>
          <div>
            <h2>Important Ozone Safety Notice</h2>
            <p>
              Ozone treatment is performed only in unoccupied spaces. People, pets and plants
              must not remain inside during treatment. After the treatment, the area must be
              properly ventilated before re-entry. We will provide clear instructions before
              and after each service.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SafetyNotice
