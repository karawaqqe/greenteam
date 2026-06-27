import styles from './PrivacyPolicy.module.scss'

function PrivacyPolicy() {
  return (
    <section className={`legal-page ${styles.page}`}>
      <div className="container">
        <article className="legal-card">
          <h1>Privacy Policy</h1>
          <p className="template-notice">
            This page is a general template and should be reviewed by the business owner
            and a qualified legal professional before publication.
          </p>

          <p>
            OzonePro respects your privacy. This policy explains the types of information
            that may be collected when you contact us, request a quote or use this website.
          </p>

          <h2>Information We May Collect</h2>
          <p>
            We may collect contact details such as your name, email address, service
            location and information about the service you request.
          </p>

          <h2>How Information May Be Used</h2>
          <ul>
            <li>To respond to quote requests and service questions.</li>
            <li>To schedule appointments and provide service information.</li>
            <li>To improve website content and customer communication.</li>
          </ul>

          <h2>Sharing Information</h2>
          <p>
            We do not sell personal information. Information may be shared only when needed
            to provide service, comply with legal obligations or protect business operations.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this privacy policy can be sent to gt.chilliwack@gmail.com.
          </p>
        </article>
      </div>
    </section>
  )
}

export default PrivacyPolicy
