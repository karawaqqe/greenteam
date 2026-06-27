import styles from './Cookies.module.scss'

function Cookies() {
  return (
    <section className={`legal-page ${styles.page}`}>
      <div className="container">
        <article className="legal-card">
          <h1>Cookies Policy</h1>
          <p className="template-notice">
            This page is a general template and should be reviewed by the business owner
            and a qualified legal professional before publication.
          </p>

          <p>
            This cookies policy explains how this website may use cookies or similar
            technologies to support basic website functionality and understand site usage.
          </p>

          <h2>What Cookies Are</h2>
          <p>
            Cookies are small files stored on your device by a website. They can help a
            website remember preferences or collect basic usage information.
          </p>

          <h2>How We May Use Cookies</h2>
          <ul>
            <li>To support core website functionality.</li>
            <li>To understand general website traffic and performance.</li>
            <li>To improve page content and user experience.</li>
          </ul>

          <h2>Your Choices</h2>
          <p>
            You can usually manage or disable cookies through your browser settings. Some
            website features may not work as expected if cookies are disabled.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this cookies policy can be sent to gt.chilliwack@gmail.com.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Cookies
