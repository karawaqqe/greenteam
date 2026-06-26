import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Footer.module.scss'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'service-options' },
  { label: 'About', id: 'about' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Payments', id: 'payments' },
]

function Footer({ onContactClick }) {
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

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
          <Link to="/">OzonePro</Link>
          <p>Professional ozone odor removal services in Chilliwack and the Fraser Valley.</p>
        </div>

        <nav aria-label="Quick links">
          <h2>Quick Links</h2>
          {quickLinks.map((link) => (
            <button key={link.id} type="button" onClick={() => handleSectionClick(link.id)}>
              {link.label}
            </button>
          ))}
          <button type="button" onClick={onContactClick}>
            Contact
          </button>
        </nav>

        <nav aria-label="Legal links">
          <h2>Legal</h2>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/cookies">Cookies Policy</Link>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} OzonePro. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
