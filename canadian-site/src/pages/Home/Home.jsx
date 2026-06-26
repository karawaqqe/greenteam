import About from '../../components/About/About.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx'
import Payments from '../../components/Payments/Payments.jsx'
import SafetyNotice from '../../components/SafetyNotice/SafetyNotice.jsx'
import Services from '../../components/Services/Services.jsx'
import ServiceTiles from '../../components/ServiceTiles/ServiceTiles.jsx'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs.jsx'
import styles from './Home.module.scss'

function Home({ onContactClick }) {
  return (
    <div className={styles.home}>
      <Hero onContactClick={onContactClick} />
      <ServiceTiles />
      <Services />
      <HowItWorks />
      <About />
      <WhyChooseUs />
      <Payments />
      <SafetyNotice />
    </div>
  )
}

export default Home
