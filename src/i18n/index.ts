/**
 * i18n — IT (default, root) / EN (/en).
 * I contenuti sono in italiano; l'inglese ha shell, navigazione e meta tradotti,
 * il corpo delle pagine EN verrà tradotto in una fase successiva (marcato TODO).
 */
export const locales = ['it', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'it';

/**
 * Lingue attualmente PUBBLICATE. L'inglese è in pausa finché il cliente non approva il progetto:
 * l'impianto (rotte, stringhe, contenuti EN nelle viste) resta pronto, ma non si costruiscono
 * pagine EN, né bottone lingua, né hreflang. Per riattivare: aggiungere 'en' qui, ricreare
 * src/pages/en/* (vedi git history del commit "feat(pages)") e riabilitare 'en' in astro.config.mjs.
 */
export const enabledLocales: readonly Lang[] = ['it'];
export const isMultilingual = enabledLocales.length > 1;

export type PageKey = 'home' | 'menu' | 'events' | 'story' | 'visit';
export const pageKeys: PageKey[] = ['home', 'menu', 'events', 'story', 'visit'];
/** Voci di navigazione principale (la home è il wordmark). */
export const navKeys: PageKey[] = ['menu', 'events', 'story', 'visit'];

/** Slug localizzati: per lingua e pagina. Le pagine reali vivono in src/pages (it) e src/pages/en. */
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { it: '', en: '' },
  menu: { it: 'menu', en: 'menu' },
  events: { it: 'eventi', en: 'events' },
  story: { it: 'storia', en: 'story' },
  visit: { it: 'visita-prenota', en: 'visit-book' },
};

/**
 * Percorso assoluto (senza dominio) di una pagina nella lingua data, sempre con slash finale:
 * Netlify serve /menu/index.html a /menu/ e reindirizza /menu → /menu/, quindi canonical,
 * hreflang, sitemap e link interni devono usare la stessa forma (vedi trailingSlash in astro.config.mjs).
 */
export function pathFor(key: PageKey, lang: Lang): string {
  const slug = routes[key][lang];
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  if (!slug) return `${prefix}/`;
  return `${prefix}/${slug}/`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'it' ? 'en' : 'it');

export const ui = {
  it: {
    htmlLang: 'it',
    ogLocale: 'it_IT',
    skip: 'Vai al contenuto',
    nav: {
      home: 'Home',
      menu: 'Menu',
      events: 'Eventi & Esperienze',
      story: 'Storia',
      visit: 'Visita & Prenota',
    },
    navLabel: 'Navigazione principale',
    menuOpen: 'Menu',
    menuClose: 'Chiudi',
    menuOpenLabel: 'Apri il menu di navigazione',
    menuCloseLabel: 'Chiudi il menu di navigazione',
    langSwitch: { label: 'EN', aria: 'English (EN)' },
    cta: { book: 'Prenota un tavolo', bookShort: 'Prenota', menu: 'Scopri il menu', events: 'Vedi gli eventi' },
    demo: { badge: 'Demo / Concept', text: 'Sito dimostrativo, non ufficiale · Punto Due Studio' },
    tripadvisor: {
      rating: '4,7/5',
      text: 'su Tripadvisor · oltre 150 recensioni',
      cta: 'Leggi le recensioni reali',
      newTab: '(si apre in una nuova scheda)',
    },
    footer: {
      where: 'Dove siamo',
      contacts: 'Contatti',
      hours: 'Orari',
      follow: 'Seguici',
      explore: 'Esplora',
      openMap: 'Apri la mappa',
      whatsapp: 'Scrivici su WhatsApp',
      legal: 'Sito dimostrativo (concept) realizzato da Punto Due Studio. Non è il sito ufficiale di Fairuz.',
    },
    meta: {
      home: {
        title: 'Fairuz Parma — Ristorante libanese in Via Vigotti',
        description:
          'Fairuz, cucina libanese a Parma: mezze, grigliate, falafel e baklawa. Scopri il menu, gli eventi e prenota il tuo tavolo in Via Luigi Vigotti 5.',
      },
      menu: {
        title: 'Menu — Fairuz Parma',
        description: 'Il menu di Fairuz a Parma: cucina libanese tra mezze, grigliate, falafel e dolci.',
      },
      events: {
        title: 'Eventi & Esperienze — Fairuz Parma',
        description: 'Serate, esperienze e occasioni speciali da Fairuz, ristorante libanese a Parma.',
      },
      story: {
        title: 'La nostra storia — Fairuz Parma',
        description: 'La storia di Fairuz: il Libano a Parma, raccontato a tavola.',
      },
      visit: {
        title: 'Visita & Prenota — Fairuz Parma',
        description: 'Come raggiungerci e prenotare un tavolo da Fairuz, in Via Luigi Vigotti 5 a Parma.',
      },
    },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    skip: 'Skip to content',
    nav: {
      home: 'Home',
      menu: 'Menu',
      events: 'Events & Experiences',
      story: 'Story',
      visit: 'Visit & Book',
    },
    navLabel: 'Main navigation',
    menuOpen: 'Menu',
    menuClose: 'Close',
    menuOpenLabel: 'Open navigation menu',
    menuCloseLabel: 'Close navigation menu',
    langSwitch: { label: 'IT', aria: 'Italiano (IT)' },
    cta: { book: 'Book a table', bookShort: 'Book', menu: 'See the menu', events: 'See events' },
    demo: { badge: 'Demo / Concept', text: 'Demonstration site, not official · Punto Due Studio' },
    tripadvisor: {
      rating: '4.7/5',
      text: 'on Tripadvisor · 150+ reviews',
      cta: 'Read the real reviews',
      newTab: '(opens in a new tab)',
    },
    footer: {
      where: 'Find us',
      contacts: 'Contact',
      hours: 'Opening hours',
      follow: 'Follow us',
      explore: 'Explore',
      openMap: 'Open the map',
      whatsapp: 'Message us on WhatsApp',
      legal: 'Demonstration (concept) site by Punto Due Studio. This is not the official Fairuz website.',
    },
    meta: {
      home: {
        title: 'Fairuz Parma — Lebanese restaurant on Via Vigotti',
        description:
          'Fairuz, Lebanese cuisine in Parma: mezze, grills, falafel and baklawa. Discover the menu, the events and book your table at Via Luigi Vigotti 5.',
      },
      menu: {
        title: 'Menu — Fairuz Parma',
        description: 'The Fairuz menu in Parma: Lebanese cuisine with mezze, grills, falafel and sweets.',
      },
      events: {
        title: 'Events & Experiences — Fairuz Parma',
        description: 'Evenings, experiences and special occasions at Fairuz, Lebanese restaurant in Parma.',
      },
      story: {
        title: 'Our story — Fairuz Parma',
        description: 'The story of Fairuz: Lebanon in Parma, told at the table.',
      },
      visit: {
        title: 'Visit & Book — Fairuz Parma',
        description: 'How to reach us and book a table at Fairuz, Via Luigi Vigotti 5, Parma.',
      },
    },
  },
} as const;

export const t = (lang: Lang) => ui[lang];
