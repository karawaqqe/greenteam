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

function CircleDotIcon({ className }) {
  return (
    <svg
      className={className}
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  )
}

function BriefcaseBusinessIcon({ className }) {
  return (
    <svg
      className={className}
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
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}

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
          <span className={styles.kicker}>
            <BriefcaseBusinessIcon className={styles.kickerIcon} />
            Our services
          </span>
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
            <span>
              <CircleDotIcon className={styles.noteIcon} />
              Flexible scheduling
            </span>
            <span>
              <CircleDotIcon className={styles.noteIcon} />
              Evening options available
            </span>
            <span>
              <CircleDotIcon className={styles.noteIcon} />
              Fresh-air ventilation guidance
            </span>
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
