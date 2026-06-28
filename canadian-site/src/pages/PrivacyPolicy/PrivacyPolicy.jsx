import styles from './PrivacyPolicy.module.scss'

function PrivacyPolicy() {
  return (
    <section className={`legal-page ${styles.page}`}>
      <div className="container">
        <article className="legal-card">
          <h1>Privacy Policy</h1>
          <p className="template-notice">Last updated: June 2026</p>

          <p>
            Green Team respects your privacy. This policy explains what information we may
            collect when you use this website, request a quote or contact us about ozone
            odor removal services.
          </p>

          <h2>Information We May Collect</h2>
          <p>
            We may collect contact details such as your name, email address, service
            location, preferred appointment details and information about the service you
            request. We may also receive technical information such as browser type, pages
            visited and cookie preference if those tools are enabled on the website.
          </p>

          <h2>How Information May Be Used</h2>
          <ul>
            <li>To respond to quote requests and service questions.</li>
            <li>To schedule appointments and provide service information.</li>
            <li>To improve website content and customer communication.</li>
            <li>To remember your cookie choice and support basic website functionality.</li>
          </ul>

          <h2>Sharing Information</h2>
          <p>
            We do not sell personal information. Information may be shared only when needed
            to provide service, comply with legal obligations or protect business operations.
          </p>

          <h2>Retention</h2>
          <p>
            We keep contact and service request information only as long as reasonably needed
            for customer communication, booking, business records or legal requirements.
          </p>

          <h2>Your Choices</h2>
          <p>
            You can choose not to submit a contact form, manage cookies through your browser
            and contact us to ask about information you previously provided.
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
