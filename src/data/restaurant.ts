/**
 * Dati del ristorante — SOLO informazioni verificate.
 * Tutto ciò che manca è `null` (e mostrato come segnaposto TODO nelle pagine): mai inventare.
 *
 * Fonti verificate (21/09/2026): sito attuale fairuz.eatbu.com (contatti, indirizzo, servizi dichiarati),
 * scheda Tripadvisor (4,7/5, ~150 recensioni), pagina Facebook ufficiale.
 */
export const restaurant = {
  name: 'Fairuz',
  address: {
    street: 'Via Luigi Vigotti 5',
    postalCode: '43126',
    city: 'Parma',
    region: 'Emilia-Romagna',
    country: 'IT',
  },
  phone: '+39 371 588 1368',
  phoneHref: 'tel:+393715881368',
  email: 'fairuzparmasrl@gmail.com',
  // Verificato: una locandina dell'account Instagram ufficiale (10/09/2026) riporta "TEL WA +39 371 588 1368".
  whatsappHref: 'https://wa.me/393715881368',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Fairuz+Via+Luigi+Vigotti+5+43126+Parma',
  directionsHref: 'https://www.google.com/maps/dir/?api=1&destination=Fairuz+Via+Luigi+Vigotti+5+43126+Parma',
  /** Sito attuale (fairuz.eatbu.com): oggi ospita il menu reale. Link di rimando finché il menu non è nel sito. */
  legacySiteUrl: 'https://fairuz.eatbu.com/',
  social: {
    facebook: 'https://www.facebook.com/fairuz.ristorante.parma/',
    // Verificato: profilo ufficiale "Fairuz 🇱🇧 Ristorante Libanese a Parma" (21/09/2026: 66 post, ~3.700 follower).
    instagram: 'https://www.instagram.com/fairuz.ristorante.parma/' as string | null,
  },
  tripadvisor: {
    url: 'https://www.tripadvisor.com/Restaurant_Review-g187804-d23611904-Reviews-Fairuz_Parma-Parma_Province_of_Parma_Emilia_Romagna.html',
    rating: 4.7,
    reviewsAtLeast: 150,
  },
  /** Verificato: la bio Instagram ufficiale dice "Giorno di chiusura: martedì". */
  closedDay: 'martedì',
  /** TODO: fasce orarie reali di pranzo/cena (il sito attuale mostra solo "Siamo chiusi / Cucina aperta"). */
  hours: null as null | string,
  /** TODO: coordinate per lo schema e la mappa incorporata. */
  geo: null as null | { lat: number; lng: number },
  /**
   * Dichiarato sul sito attuale (Eatbu) ma NON usato nei testi/meta finché il cliente non conferma:
   * senza glutine, halal, vegane, vegetariane. (I claim su allergeni/diete richiedono verifica.)
   */
  dietaryClaimsToConfirm: ['senza glutine', 'halal', 'vegane', 'vegetariane'],
} as const;
