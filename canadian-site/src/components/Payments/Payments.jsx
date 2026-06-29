import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Payments.module.scss'

const icons = {
  smartphone: (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </>
  ),
  'credit-card': (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>
  ),
  wallet: (
    <>
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </>
  ),
  banknote: (
    <>
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  landmark: (
    <>
      <path d="M10 18v-7" />
      <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
    </>
  ),
}

function PaymentIcon({ name }) {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

function Payments() {
  const { paymentItems, t } = useLanguage()

  return (
    <section className={`section ${styles.section}`} id="payments">
      <div className="container">
        <div className={styles.header}>
          <span className="section-kicker">{t('payments.kicker')}</span>
          <h2 className="section-title">{t('payments.title')}</h2>
          <p className="section-copy">{t('payments.copy')}</p>
        </div>

        <div className={styles.grid}>
          {paymentItems.map((payment, index) => (
            <article className={styles.card} key={payment.title}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.iconWrap}>
                <PaymentIcon name={payment.icon} />
              </span>
              <div>
                <h3>{payment.title}</h3>
                <p>{payment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Payments
