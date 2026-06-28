import styles from './Cookies.module.scss'

function Cookies() {
  return (
    <section className={`legal-page ${styles.page}`}>
      <div className="container">
        <article className="legal-card">
          <h1>Cookies Policy</h1>
          <p className="template-notice">Last updated: June 2026</p>

          <p>
            This cookies policy explains how the Green Team website may use cookies, local
            storage or similar technologies to support basic website functionality and remember
            your preferences.
          </p>

          <h2>What Cookies Are</h2>
          <p>
            Cookies are small files stored on your device by a website. They can help a
            website remember preferences or collect basic usage information. Local storage is
            a similar browser feature that can save a small preference directly on your device.
          </p>

          <h2>How We May Use Cookies</h2>
          <ul>
            <li>To remember whether you accepted or limited cookies.</li>
            <li>To support core website functionality such as forms and navigation.</li>
            <li>To understand general website traffic and performance if analytics are enabled.</li>
            <li>To improve page content and user experience.</li>
          </ul>

          <h2>Your Choices</h2>
          <p>
            You can accept cookies from the website notice or continue with necessary cookies
            only. You can also manage or disable cookies through your browser settings. Some
            website features may not work as expected if cookies are disabled.
          </p>

          <h2>Necessary Cookies</h2>
          <p>
            Necessary cookies and local storage help the site remember your cookie choice and
            keep basic features working. These do not require optional analytics or advertising
            cookies.
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
