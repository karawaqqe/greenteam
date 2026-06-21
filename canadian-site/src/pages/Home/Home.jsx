import About from '../../components/About/About.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx'
import Payments from '../../components/Payments/Payments.jsx'
import SafetyNotice from '../../components/SafetyNotice/SafetyNotice.jsx'
import Services from '../../components/Services/Services.jsx'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs.jsx'
import styles from './Home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <WhyChooseUs />
      <Payments />
      <SafetyNotice />
      <Contact />
    </div>
  )
}

export default Home
