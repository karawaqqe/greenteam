import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './PrivacyPolicy.module.scss'

function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <section className={`legal-page ${styles.page}`}>
      <div className="container">
        <article className="legal-card">
          <h1>{t('legalPages.privacyTitle')}</h1>
          <p className="template-notice">{t('legalPages.updated')}</p>

          <p>{t('legalPages.privacyIntro')}</p>

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

          <h2>{t('legalPages.contactHeading')}</h2>
          <p>{t('legalPages.contactText')}</p>
        </article>
      </div>
    </section>
  )
}

export default PrivacyPolicy
