import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import boatIcon from '../../assets/icons/boat-transparent.png'
import carIcon from '../../assets/icons/car-transparent.png'
import commercialIcon from '../../assets/icons/Commercial & Property Managers-transparent.png'
import gymIcon from '../../assets/icons/gym-transparent.png'
import homeIcon from '../../assets/icons/home-transparent.png'
import hotelIcon from '../../assets/icons/hotel-transparent.png'
import logo from '../../assets/logo/logo_no_background_true_transparent.png'
import styles from './Header.module.scss'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'About', id: 'about' },
  { label: 'Payments', id: 'payments' },
]

const serviceLinks = [
  { title: 'Homes & Rentals', slug: 'homes-rentals', icon: homeIcon },
  { title: 'Commercial & Property Managers', slug: 'commercial-property-managers', icon: commercialIcon },
  { title: 'Cars', slug: 'cars', icon: carIcon },
  { title: 'Gyms & Sports', slug: 'gyms-sports', icon: gymIcon },
  { title: 'RV & Boats', slug: 'rv-boats', icon: boatIcon },
  { title: 'Hotels / Airbnb', slug: 'hotels-airbnb', icon: hotelIcon },
]

function Header({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [isOpen])

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
        <Link className={styles.logo} to="/" aria-label="Green Clean Solutions home" onClick={() => setIsOpen(false)}>
          <img className={styles.logoImage} src={logo} alt="" aria-hidden="true" />
          <span className={styles.logoText}>
            <span className={styles.logoTitle}>Green Clean Solutions</span>
            <span className={styles.logoSubtitle}>Professional Cleaning & Odor Removal</span>
          </span>
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
          <button type="button" onClick={() => scrollToSection('home')}>
            Home
          </button>
          <div className={styles.servicesItem}>
            <button
              className={styles.servicesButton}
              type="button"
              onClick={() => scrollToSection('service-options')}
            >
              Services
            </button>
            <div className={styles.servicesMenu} aria-label="Service pages">
              {serviceLinks.map((service) => (
                <Link
                  className={styles.serviceLink}
                  to={`/services/${service.slug}`}
                  key={service.slug}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={styles.serviceIcon}>
                    <img src={service.icon} alt="" aria-hidden="true" />
                  </span>
                  <span>{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
          {navItems.slice(1).map((item) => (
            <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
          <button className={styles.navCta} type="button" onClick={() => { setIsOpen(false); onContactClick?.() }}>
            Book Service
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
