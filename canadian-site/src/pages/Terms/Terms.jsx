import styles from './Terms.module.scss'

function Terms() {
  return (
    <section className={`legal-page ${styles.page}`}>
      <div className="container">
        <article className="legal-card">
          <h1>Terms of Use</h1>
          <p className="template-notice">Last updated: June 2026</p>

          <p>
            By using this website, you agree to use it for lawful purposes and understand
            that the information provided is general service information for Green Team.
          </p>

          <h2>Service Information</h2>
          <p>
            Website content may describe ozone odor treatment options, safety considerations
            and booking information. It does not create a guarantee of specific results.
          </p>

          <h2>Quotes and Booking</h2>
          <p>
            Quotes, availability and appointment details may vary based on location, space
            size, access, odor issue and required treatment conditions.
          </p>

          <h2>Customer Responsibilities</h2>
          <p>
            Customers are responsible for providing accurate service details, confirming
            access instructions and following preparation and re-entry guidance provided for
            the appointment.
          </p>

          <h2>Safety Requirements</h2>
          <p>
            Ozone treatment must be performed only in unoccupied spaces. People, pets and
            plants must not remain inside during treatment, and ventilation is required
            before re-entry.
          </p>

          <h2>Website Changes</h2>
          <p>
            We may update website content, service details and these terms from time to time.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to gt.chilliwack@gmail.com.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Terms
