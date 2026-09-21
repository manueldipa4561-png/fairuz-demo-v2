# fairuz-demo-v2

Demo website concept for **Fairuz**, ristorante libanese a Parma — designed and developed by **Punto Due Studio**.

> Sito dimostrativo (concept) per presentazione commerciale. Non è il sito ufficiale di Fairuz.

## Avvio

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output statico in dist/
npm run check    # type-check Astro
node scripts/contrast.mjs   # verifica contrasti WCAG dei token
```

Richiede Node ≥ 22.12.

## Architettura

Ibrida: **home cinematica scroll-driven** (GSAP + Lenis, Fase 2) + **pagine funzionali** indicizzabili: Menu, Eventi & Esperienze, Storia, Visita & Prenota.

Solo italiano per ora: l'inglese (`/en`) è in pausa finché il cliente non approva il progetto, ma l'impianto i18n è pronto (vedi `enabledLocales` in `src/i18n/index.ts`).

`/` · `/menu/` · `/eventi/` · `/storia/` · `/visita-prenota/`

Design "Turchese & Carta": carta calda, antracite, turchese (firma), brace (CTA), blush (decoro). Playfair Display + Karla + JetBrains Mono. Token in `src/styles/tokens.css`.

## Deploy (Netlify)

`netlify.toml` è già configurato (build `npm run build`, publish `dist`, cache e header di sicurezza).

| Variabile | Effetto |
|---|---|
| `PUBLIC_ALLOW_INDEXING` | `true` per consentire l'indicizzazione. **Default: `noindex`** (è una demo). |
| `SITE_URL` | Dominio di produzione per canonical/sitemap (Netlify fornisce `URL` di default). |

TODO: aggiornare l'URL del `Sitemap:` in `public/robots.txt` col dominio definitivo.

## Contenuti

Usa solo informazioni verificate. Ciò che manca è segnato **TODO** nel sito e raccolto in [`docs/CONTENT-TODO.md`](docs/CONTENT-TODO.md).

## Stato

Vedi `CLAUDE.md` per le fasi e le regole del progetto.

## QA (Fase 5)

Verifiche eseguite sulla build di produzione (`npm run build` + `npm run preview`):

- **Accessibilità**: 0 violazioni axe-core su tutte le pagine (home, menu, eventi, storia, visita, 404) in tema chiaro e scuro, a 375 e 1280 px. Lighthouse accessibilità 100.
- **Lighthouse (mobile)**: performance 98-100 sulle pagine interne, ~76 sulla home (scroll cinematica GSAP: accettabile per una demo). Best practices 100, CLS ~0.
- **Cross-device**: nessun overflow orizzontale da 320 a 1920 px; navigazione da tastiera con focus visibile; `prefers-reduced-motion` disattiva Lenis, pin, transizioni e reveal; senza JS il modulo di prenotazione lascia WhatsApp/telefono.
- **SEO**: la demo resta `noindex` (Lighthouse "is-crawlable" fallisce di proposito finché `PUBLIC_ALLOW_INDEXING` non è `true`).

### Deploy (a cura del cliente/agenzia)

1. Collega il repo a Netlify: build `npm run build`, publish `dist` (già in `netlify.toml`).
2. Variabili d'ambiente: `SITE_URL` col dominio reale; `PUBLIC_ALLOW_INDEXING=true` solo quando la demo va indicizzata.
3. Dopo il primo deploy, aggiorna l'URL in `public/robots.txt` (riga `Sitemap:`) col dominio definitivo.
