import { restaurant } from '../data/restaurant';
import { pathFor, type Lang } from '../i18n';

/**
 * JSON-LD schema.org/Restaurant — solo dati verificati.
 * Omessi di proposito (TODO): openingHoursSpecification, geo, priceRange.
 * `aggregateRating` NON è incluso: Google non ammette rating di terze parti autopubblicati
 * per attività locali; il 4,7/5 Tripadvisor resta un badge visibile con link alle recensioni reali.
 */
export function restaurantSchema(lang: Lang, site: URL, ogImage: string) {
  const abs = (path: string) => new URL(path, site).toString();
  const a = restaurant.address;

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${abs('/')}#restaurant`,
    name: restaurant.name,
    url: abs(pathFor('home', lang)),
    image: abs(ogImage),
    telephone: restaurant.phone,
    email: restaurant.email,
    servesCuisine: 'Lebanese',
    acceptsReservations: true,
    hasMenu: abs(pathFor('menu', lang)),
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      postalCode: a.postalCode,
      addressLocality: a.city,
      addressRegion: a.region,
      addressCountry: a.country,
    },
    sameAs: [restaurant.social.facebook, restaurant.tripadvisor.url],
  };
}
