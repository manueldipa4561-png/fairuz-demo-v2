# Fairuz Parma — demo sito (Punto Due Studio)

Demo/concept per la presentazione commerciale del nuovo sito di **Fairuz**, ristorante libanese a Parma. Obiettivo: trasformare il racconto del Libano in azioni (prenotare, scoprire eventi, tornare). Non è il sito ufficiale.

## Stack
Astro 7 (statico, deploy Netlify) · GSAP + ScrollTrigger + Lenis (solo home cinematica, Fase 2) · CSS puro con design tokens · font self-hosted via `@fontsource-variable` (Playfair Display, Karla, JetBrains Mono).

## Struttura
- `src/styles/tokens.css` — UNICA fonte di verità di colori, tipografia, spazi, movimento (tema chiaro + scuro + superfici `--night`).
- `src/styles/global.css` — reset, base, `.btn`, `.card`, `.todo`, focus, reduced-motion.
- `src/i18n/index.ts` — rotte localizzate (IT alla radice, EN sotto `/en`), stringhe UI e meta per pagina. `pathFor(key, lang)` per TUTTI i link (slash finale sempre).
- `src/data/restaurant.ts` — dati VERIFICATI del ristorante; ciò che manca è `null`.
- `src/layouts/BaseLayout.astro` — head SEO (canonical, hreflang, OG, robots, JSON-LD), skip link, strip demo, header, footer.
- `src/views/*.astro` — contenuto di ogni pagina (prop `lang`); `src/pages/**` sono wrapper sottili IT/EN.
- `scripts/contrast.mjs` — verifica WCAG dei token. Va rieseguito a ogni modifica di colore.

## Regole non negoziabili
1. **Non inventare contenuti**: date evento, orari, prezzi, claim dietetici (glutine/halal/vegano), servizi (gift card, catering, ordini). Mancante → `<Todo>` (componente visibile) + voce in `docs/CONTENT-TODO.md`.
2. Recensioni: mostrare solo **4,7/5 Tripadvisor, oltre 150 recensioni** + link alle recensioni reali. Niente `aggregateRating` nello schema.
3. Origine del nome "Fairuz": NON affermarla (può riferirsi alla cantante libanese). Il turchese è una scelta di design, non un fatto del brand.
4. Badge "Demo / Concept" sempre presente. La demo è `noindex` finché non si imposta `PUBLIC_ALLOW_INDEXING=true` su Netlify.
5. Turchese `--turquoise` solo per riempimenti/decoro con testo scuro; per testo/bordi/focus su carta usare `--link`. Mai testo bianco su turchese.
6. Accessibilità: target touch ≥ 44px, focus visibile, `prefers-reduced-motion` rispettato (le animazioni GSAP devono leggere la stessa media query).
7. Nessun backend: la prenotazione è dimostrativa (form front-end + WhatsApp come via secondaria).
8. **Solo italiano** finché il cliente non paga (decisione del 21/09/2026). Non scrivere né tradurre contenuti EN, non ricreare `src/pages/en`. L'impianto i18n resta pronto (`enabledLocales` in `src/i18n/index.ts`, istruzioni per riattivare nel commento). Le stringhe EN già presenti sono dormienti.
9. **Foto**: usare solo immagini che appartengono a Fairuz (suo sito, sue pagine social) e solo con OK esplicito dell'utente prima di scaricarle. Mai foto di utenti Tripadvisor/Google né immagini del template Da Maria (sono solo riferimento visivo). Registrare origine di ogni foto in `docs/PHOTO-CREDITS.md`.

## Comandi
`npm run dev` · `npm run build` · `npm run check` · `node scripts/contrast.mjs`

## Stato fasi
- [x] Fase 1 — struttura, tokens, shell, i18n, SEO, badge demo
- [ ] Fase 2 — home cinematica scroll-driven (GSAP+Lenis) — **Opus, plan mode**
- [ ] Fase 3 — pagine Menu, Eventi & Esperienze (punta), Storia, Visita
- [ ] Fase 4 — prenotazione demo + recensioni + micro-interazioni
- [ ] Fase 5 — QA (Lighthouse, a11y, cross-device) e deploy

## Gestione modelli
Opus solo per architettura/animazioni complesse; Sonnet per implementazione; Haiku per testi e modifiche minime. A fine fase: commit chiaro + riassunto in 5 righe.
