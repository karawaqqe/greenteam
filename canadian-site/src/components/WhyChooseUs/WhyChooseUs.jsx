import styles from './WhyChooseUs.module.scss'

const benefits = [
  {
    title: 'Mobile ozone service',
    text: 'Service can be arranged for eligible vehicles, homes, rentals and commercial spaces.',
  },
  {
    title: 'Residential & commercial',
    text: 'Practical odor treatment support for private clients, hosts, offices and property managers.',
  },
  {
    title: 'Clear communication',
    text: 'You will know what to expect before, during and after the treatment appointment.',
  },
  {
    title: 'Flexible booking',
    text: 'Scheduling is based on the space, location, treatment time and required ventilation.',
  },
]

function WhyChooseUs() {
  return (
    <section className="section" id="why-choose-us">
      <div className="container">
        <span className="section-kicker">Why choose us</span>
        <h2 className="section-title">Professional, straightforward service without inflated promises.</h2>

        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <article className={styles.item} key={benefit.title}>
              <span aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
