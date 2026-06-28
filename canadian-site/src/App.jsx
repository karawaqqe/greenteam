import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import CookieConsent from './components/CookieConsent/CookieConsent.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail.jsx'
import Terms from './pages/Terms/Terms.jsx'
import Cookies from './pages/Cookies/Cookies.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

function App() {
  const location = useLocation()
  const [contactService, setContactService] = useState(null)

  const openContact = (service = '') => {
    setContactService(service)
  }

  const closeContact = () => {
    setContactService(null)
  }

  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header onContactClick={() => openContact()} />
      <main>
        <div className="page-transition" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home onContactClick={() => openContact()} />} />
            <Route
              path="/services/:serviceSlug"
              element={<ServiceDetail onContactClick={openContact} />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </div>
      </main>
      <Footer onContactClick={() => openContact()} />
      {contactService !== null && (
        <Contact selectedService={contactService} isModal onClose={closeContact} />
      )}
      <CookieConsent />
    </div>
  )
}

export default App
