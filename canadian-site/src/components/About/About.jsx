import styles from './About.module.scss'

function About() {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className={`container ${styles.layout}`}>
        <div>
          <span className="section-kicker">About OzonePro</span>
          <h2 className="section-title">Local ozone odor removal service with a careful, practical approach.</h2>
        </div>
        <div className={styles.copy}>
          <p>
            We are a local ozone odor removal service focused on helping homeowners,
            vehicle owners, rental hosts and businesses deal with tough unwanted smells.
          </p>
          <p>
            Our goal is simple: clear communication, reliable scheduling and careful
            ozone treatment for the right spaces across Chilliwack and the Fraser Valley.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
