import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import styles from './Footer.module.scss'

const quickLinks = [
  { labelKey: 'nav.home', id: 'home' },
  { labelKey: 'nav.services', id: 'service-options' },
  { labelKey: 'nav.about', id: 'about' },
  { labelKey: 'nav.howItWorks', id: 'how-it-works' },
  { labelKey: 'nav.payments', id: 'payments' },
]

function Footer({ onContactClick }) {
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleSectionClick = (id) => {
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(scroll, 80)
      return
    }

    scroll()
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.brand}>
          <Link to="/">Green Team</Link>
          <p>{t('footer.brandCopy')}</p>
        </div>

        <nav aria-label="Quick links">
          <h2>{t('footer.quickLinks')}</h2>
          {quickLinks.map((link) => (
            <button key={link.id} type="button" onClick={() => handleSectionClick(link.id)}>
              {t(link.labelKey)}
            </button>
          ))}
          <button className={styles.footerCta} type="button" onClick={onContactClick}>
            {t('nav.bookService')}
          </button>
        </nav>

        <nav aria-label="Legal links">
          <h2>{t('footer.legal')}</h2>
          <Link to="/privacy-policy">{t('footer.privacy')}</Link>
          <Link to="/terms">{t('footer.terms')}</Link>
          <Link to="/cookies">{t('footer.cookies')}</Link>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} Green Team. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer
