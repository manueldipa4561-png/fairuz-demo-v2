# Fairuz — Design System

Direzione **"Turchese & Carta"** del sito Fairuz (ristorante libanese a Parma). Questo documento spiega le decisioni; la fonte di verità del codice è [`src/styles/tokens.css`](src/styles/tokens.css), l'export portabile è [`design-tokens.json`](design-tokens.json) e l'anteprima interattiva è [`design-preview.html`](design-preview.html) (aprila nel browser, ha il toggle Carta/Notte).

## Perché queste scelte

Il sito deve trasformare il racconto del Libano — fuoco, fumo, pane condiviso, tavola — in azioni (prenotare, scoprire, tornare). Il linguaggio è **editoriale e caldo**: carta antica come fondo, un turchese come firma del brand (dal nome Fairuz), la brace per il fuoco e le CTA.

## Colore

Due temi: **Carta** (chiaro) e **Notte** (scuro). Cinque ruoli, più le superfici "notte" fisse.

| Token | Ruolo | Regola |
|---|---|---|
| `paper` / `surface` | fondi | pagina e superfici sollevate |
| `ink` / `ink-soft` | testo | principale e secondario |
| `turquoise` | **firma** | solo riempimenti/decoro con testo scuro — **mai** testo su carta, **mai** bianco sopra |
| `link` | turchese profondo | testo, link, bordi e focus su carta (4.8:1) |
| `brace` | fuoco / CTA | bianco su brace, o brace come testo su carta |
| `blush` | decoro | solo rombi e campiture, mai testo |
| `night-*` | superfici scure | footer e capitoli scuri, identiche nei due temi |

Ogni coppia testo/sfondo passa **4.5:1** (3:1 per UI grandi e bordi) in entrambi i temi. La verifica è automatica: `node scripts/contrast.mjs` va rieseguito a ogni modifica di colore.

## Tipografia

- **Playfair Display** (`display`) — titoli e wordmark, con il corsivo per le aperture.
- **Karla** (`body`) — testo, misura di lettura ~62ch.
- **JetBrains Mono** (`mono`) — etichette MAIUSCOLE (date, tag, CTA, biglietti), tracking 0.14em.

La scala è **fluida** (`clamp()` tra 375px e 1440px): niente breakpoint per la dimensione del testo. Font self-hosted via `@fontsource-variable`.

## Spazio e forma

Base **4px** (`space-1`…`space-9`). Impaginato **squadrato**: raggi piccoli (`sm` 2px, `md` 6px) e la pillola (`pill`) solo per pulsanti e tag. Il sistema preferisce i **filetti** (`rule-strong`) alle ombre.

## Movimento

`ease-out` cubic-bezier(0.22,1,0.36,1); durate 160/320/720ms. Tutto rispetta `prefers-reduced-motion`: le animazioni sono un livello in più, mai indispensabili.

## Componenti chiave

- **Button** — `.btn` + `.btn--primary` (brace) / `.btn--ghost` (bordo). Altezza minima 44px.
- **Card** — `.card`: fondo `surface`, bordo `rule-strong`, CTA-etichetta in `link`.
- **Marcatori** — `.todo` (rosso, contenuto **mancante**) vs `.sample` (turchese, contenuto **di esempio**): non intercambiabili.
- **Rombi** — motivo a diamante (dalla segnaletica di Fairuz), turchese + blush, decorativo.

## Accessibilità

Target touch ≥ 44px, focus sempre visibile, contrasti verificati, movimento riducibile, contenuti leggibili senza JavaScript.

## File

- `src/styles/tokens.css` — **fonte di verità** (colori, tipografia, spazi, movimento).
- `src/styles/global.css` — reset, base, `.btn`, `.card`, `.todo`, `.sample`.
- `design-tokens.json` — export portabile (handoff, Figma, altri tool).
- `design-preview.html` — anteprima interattiva (Carta/Notte).
