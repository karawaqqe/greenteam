import { Link } from 'react-router-dom'
import boatIcon from '../../assets/icons/boat-transparent.png'
import carIcon from '../../assets/icons/car-transparent.png'
import commercialIcon from '../../assets/icons/Commercial & Property Managers-transparent.png'
import gymIcon from '../../assets/icons/gym-transparent.png'
import homeIcon from '../../assets/icons/home-transparent.png'
import hotelIcon from '../../assets/icons/hotel-transparent.png'
import leafDecorImage from '../../assets/images/lists/list-transparent.png'
import styles from './ServiceTiles.module.scss'

const serviceTiles = [
  {
    title: 'Homes & Rentals',
    slug: 'homes-rentals',
    icon: homeIcon,
  },
  {
    title: 'Commercial & Property Managers',
    slug: 'commercial-property-managers',
    icon: commercialIcon,
  },
  {
    title: 'Cars',
    slug: 'cars',
    icon: carIcon,
  },
  {
    title: 'Gyms & Sports',
    slug: 'gyms-sports',
    icon: gymIcon,
  },
  {
    title: 'RV & Boats',
    slug: 'rv-boats',
    icon: boatIcon,
  },
  {
    title: 'Hotels / Airbnb',
    slug: 'hotels-airbnb',
    icon: hotelIcon,
  },
]

function ServiceTiles() {
  return (
    <section className={styles.section} id="service-options" aria-label="Choose a service">
      <span
        className={styles.leafDecor}
        style={{ '--leaf-decor-image': `url(${leafDecorImage})` }}
        aria-hidden="true"
      />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.kicker}>Our services</span>
          <h2>Services</h2>
          <p>
            Green Team uses ozone treatment to help remove stubborn odors from homes,
            vehicles, rentals, gyms, hotels and commercial spaces.
          </p>
          <p>
            Pick the space that fits your situation. We will use it later to guide the quote
            and scheduling details.
          </p>
          <div className={styles.serviceNotes} aria-label="Service notes">
            <span>Flexible scheduling</span>
            <span>Evening options available</span>
            <span>Fresh-air ventilation guidance</span>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.grid}>
            {serviceTiles.map((service) => (
              <Link className={styles.tile} to={`/services/${service.slug}`} key={service.title}>
                <span className={styles.title}>{service.title}</span>
                <span className={styles.iconWrap}>
                  <img src={service.icon} alt="" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceTiles
