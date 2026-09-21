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

Ibrida: **home cinematica scroll-driven** (GSAP + Lenis, Fase 2) + **pagine funzionali** indicizzabili: Menu, Eventi & Esperienze, Storia, Visita & Prenota. Italiano alla radice, inglese sotto `/en`.

| Pagina IT | Pagina EN |
|---|---|
| `/` | `/en/` |
| `/menu/` | `/en/menu/` |
| `/eventi/` | `/en/events/` |
| `/storia/` | `/en/story/` |
| `/visita-prenota/` | `/en/visit-book/` |

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
