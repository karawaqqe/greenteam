import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo/green_team_logo_transparent.png'
import styles from './Header.module.scss'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Payments', id: 'payments' },
  { label: 'Contact', id: 'contact' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    setIsOpen(false)

    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(scroll, 80)
      return
    }

    scroll()
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.logo} to="/" aria-label="Green Team home" onClick={() => setIsOpen(false)}>
          <img className={styles.logoImage} src={logo} alt="Green Team Deep Cleaning & Odor Removal" />
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
