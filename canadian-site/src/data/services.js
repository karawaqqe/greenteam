import carsImage from '../assets/services/cars.jpg'
import commercialImage from '../assets/services/commercial.jpg'
import gymsSportsImage from '../assets/services/gyms-sports.jpg'
import homesRentalsImage from '../assets/services/homes-rentals.jpg'
import hotelsAirbnbImage from '../assets/services/hotels-airbnb.jpg'
import rvBoatsImage from '../assets/services/rv-boats.jpg'

export const services = [
  {
    slug: 'cars',
    title: 'Cars',
    image: carsImage,
    text: 'Ozone treatment for cars affected by smoke, pet odors, food smells, moisture or stale air.',
    heroText:
      'Targeted ozone odor treatment for daily drivers, family vehicles, rideshare cars and used-car refreshes.',
    startingFrom: '$149 CAD',
    timeline: 'Usually 2-4 hours, plus ventilation time.',
    overview:
      'We inspect the interior, remove loose odor sources where possible, place the ozone unit safely inside the vehicle, then ventilate the cabin before handoff. This service is useful after smoke exposure, pet travel, food spills, musty storage or strong lingering smells.',
    process: [
      'Interior check and preparation guidance before the appointment.',
      'Ozone treatment sized to the vehicle and odor level.',
      'Fresh-air ventilation and a final odor check before pickup.',
    ],
    pricing: [
      'Compact or sedan: from $149 CAD',
      'SUV, truck or van: from $189 CAD',
      'Heavy smoke or repeat treatment: from $249 CAD',
    ],
  },
  {
    slug: 'rv-boats',
    title: 'RV & Boats',
    image: rvBoatsImage,
    text: 'Odor treatment for RVs, campers and boats, especially after storage, travel, moisture or long-term use.',
    heroText:
      'Seasonal odor removal support for campers, trailers, motorhomes, cabins and boat interiors.',
    startingFrom: '$299 CAD',
    timeline: 'Usually 4-8 hours depending on size.',
    overview:
      'We help prepare the space by opening cabinets and compartments, then run ozone treatment through the enclosed interior. After the cycle, the unit is ventilated thoroughly so the space is ready for your next trip or guest handoff.',
    process: [
      'Size and layout review for the correct ozone cycle.',
      'Treatment of sleeping areas, galley spaces, storage zones and cabins.',
      'Ventilation plan for safe re-entry after the appointment.',
    ],
    pricing: [
      'Small boat cabin or camper: from $299 CAD',
      'Travel trailer or mid-size RV: from $399 CAD',
      'Large motorhome or marine cabin: from $549 CAD',
    ],
  },
  {
    slug: 'homes-rentals',
    title: 'Homes & Rentals',
    image: homesRentalsImage,
    text: 'Ozone treatment for homes, apartments, rental units and move-out / move-in situations.',
    heroText:
      'Odor treatment for homes, apartments and rental turnovers after smoke, pets, cooking or stale air.',
    startingFrom: '$249 CAD',
    timeline: 'Usually 3-8 hours based on room count.',
    overview:
      'We review the rooms and odor source, prepare the area for treatment, run ozone in controlled cycles, then provide ventilation guidance before anyone returns to the space. It works well for move-in and move-out situations, basement odors, pet smells and stubborn cooking odors.',
    process: [
      'Room-by-room odor review and preparation checklist.',
      'Ozone placement based on square footage and airflow.',
      'Post-treatment airing instructions and follow-up recommendations.',
    ],
    pricing: [
      'Single room or studio: from $249 CAD',
      'Apartment or small home: from $349 CAD',
      'Full home or heavy odor treatment: from $549 CAD',
    ],
  },
  {
    slug: 'gyms-sports',
    title: 'Gyms & Sports',
    image: gymsSportsImage,
    text: 'Helps reduce strong odors in gyms, sports rooms, locker areas and equipment spaces.',
    heroText:
      'Ozone treatment for training rooms, locker areas, equipment storage and sports facilities.',
    startingFrom: '$349 CAD',
    timeline: 'Usually scheduled after hours.',
    overview:
      'We plan the treatment around your closing hours, target high-odor zones and support ventilation before reopening. This option is designed for gym floors, locker rooms, yoga studios, team equipment rooms and small sports facilities.',
    process: [
      'After-hours scheduling to avoid interrupting members or staff.',
      'Focused ozone cycle for locker rooms, mats, equipment areas and storage.',
      'Ventilation and reopening timing based on the treated space.',
    ],
    pricing: [
      'Small studio or equipment room: from $349 CAD',
      'Gym zone or locker area: from $499 CAD',
      'Multi-room facility treatment: from $799 CAD',
    ],
  },
  {
    slug: 'commercial-property-managers',
    title: 'Commercial & Property Managers',
    image: commercialImage,
    text: 'Odor treatment options for offices, managed properties, rental units and commercial spaces.',
    heroText:
      'Reliable odor treatment for offices, managed units, common areas and turnover work.',
    startingFrom: '$399 CAD',
    timeline: 'Usually 4-10 hours depending on access and size.',
    overview:
      'We coordinate with owners, property managers or site contacts, confirm access requirements and treat the space during a planned vacancy window. This is useful for offices, managed rental units, common rooms and units affected by smoke, pets, moisture or long-term vacancy.',
    process: [
      'Scope confirmation with the manager or site contact.',
      'Treatment plan for suites, offices, corridors or common rooms.',
      'Completion notes with ventilation timing and next-step guidance.',
    ],
    pricing: [
      'Small office or managed suite: from $399 CAD',
      'Medium commercial space: from $699 CAD',
      'Large or multi-unit project: custom quote',
    ],
  },
  {
    slug: 'hotels-airbnb',
    title: 'Hotels / Airbnb',
    image: hotelsAirbnbImage,
    text: 'Ozone treatment for short-term rentals, hotel rooms and guest spaces between bookings.',
    heroText:
      'Fast guest-space odor refreshes for short-term rentals, hotels and Airbnb turnovers.',
    startingFrom: '$199 CAD',
    timeline: 'Usually 2-5 hours between guests.',
    overview:
      'We schedule around check-out and check-in windows, treat the guest space, and ventilate before the next arrival. This service is helpful for smoke complaints, cooking odors, pet smells, stale rooms and urgent turnover situations.',
    process: [
      'Turnover-friendly scheduling around guest access times.',
      'Ozone treatment for bedrooms, living areas and compact suites.',
      'Fresh-air airing guidance before the next guest arrives.',
    ],
    pricing: [
      'Single room or compact suite: from $199 CAD',
      'One-bedroom Airbnb or hotel unit: from $279 CAD',
      'Larger short-term rental: from $449 CAD',
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug)
