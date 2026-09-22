# Contenuti da ottenere dal cliente (Fairuz)

Tutto ciò che in questa demo compare come **TODO** (riquadro tratteggiato) va confermato o fornito dal cliente. Nulla di questo è stato inventato.

## Dati operativi
- [ ] **Fasce orarie** di pranzo e cena per gli altri giorni — il giorno di chiusura (martedì) è già verificato dalla bio Instagram e mostrato in Visita.
- [x] ~~Handle Instagram~~ → `@fairuz.ristorante.parma` (verificato).
- [x] ~~Numero WhatsApp~~ → confermato da una locandina ufficiale ("TEL WA +39 371 588 1368").
- [ ] **Coordinate / mappa** (per schema e mappa incorporata: oggi Visita mostra una scheda indirizzo con link a Google Maps e indicazioni).
- [ ] **Dominio di produzione** (canonical, sitemap, robots).
- [ ] **Logo** in formato vettoriale e i colori ufficiali del marchio (il logo su Instagram è azzurro/blu).

## Prenotazione
- [ ] **Sistema di prenotazione reale**: oggi il modulo è dimostrativo (nessun invio). Da decidere con il cliente: strumento (es. TheFork, Eatbu, modulo con email/WhatsApp Business), conferma al cliente e informativa privacy.
- [ ] **Fasce orarie di servizio e posti**: l'ora è un campo libero finché non si conoscono. Da chiarire anche capienza massima per prenotazione online e regole per i gruppi.
- [ ] **Giorni di chiusura extra** (festività, ferie): oggi il modulo rifiuta solo il martedì, l'unico giorno verificato.

## Recensioni
- [ ] Citazioni da mostrare: scegliere 2-3 recensioni reali e chiedere il consenso agli autori (oggi il blocco mostra solo 4,7/5 e il link alle recensioni reali).

## Menu
- [ ] Piatti, descrizioni, prezzi, categorie dal **menu reale** (oggi su fairuz.eatbu.com). Struttura pronta in `src/data/menu.ts` (categorie provvisorie: mezze, grigliate, falafel, dolci): basta compilare `items`.
- [ ] **Allergeni e diete**: il sito attuale dichiara senza glutine, halal, vegane, vegetariane. Da verificare col cliente prima di mostrarle (responsabilità legale sugli allergeni).

## Eventi & Esperienze (pagina di punta)
- [ ] Calendario reale: date, orari, prezzi, posti, modalità di prenotazione (si inserisce in `src/data/events.ts`, oggi vuoto). Indizio: su Instagram compare una locandina "appuntamenti del weekend" (vedi `docs/RESEARCH.md`, §4).
- [ ] **Formula pranzo**: una locandina di luglio parla di un menu a prezzo fisso; confermare formula e prezzo prima di pubblicarli.
- [ ] Esperienze ricorrenti (se esistono).

## Storia
- [ ] Storia reale: famiglia, origini del locale e dei piatti.
- [ ] **Origine del nome "Fairuz"** (non dedurla).
- [ ] Foto reali di locale, cucina, persone, piatti (nucleo visivo del sito). Sostituire `public/og-default.png`.
- [ ] Testi dei 3 capitoli di Storia (origini, cucina, persone) e **consenso a pubblicare i nomi** delle persone.
- [ ] Foto per le cornici di Storia (locale, cucina, team) ed Eventi (una serata).

## Home cinematica (Fase 2)
- [ ] **Foto per i 5 capitoli** (oggi cornici TODO con proporzioni fisse 4:5 desktop / 4:3 mobile): griglia accesa (BRACE), cucina al lavoro (FUMO), pane e mezze (PANE), tavola imbandita (TAVOLA), la sala (PRENOTA).
- [ ] **Testi dei capitoli** da far approvare: sono evocativi e non contengono fatti nuovi, ma il cliente deve riconoscersi nel tono (`src/views/Home.astro`, oggetto `ch`).
- [ ] Illustrazioni a china: quelle attuali sono SVG disegnati per la demo; valutare se commissionarne di definitive.

## Proposte NON confermate (approvate come sezioni dimostrative, marcate TODO)
- [ ] Gift card / buoni regalo
- [ ] Catering & eventi privati
- [ ] Newsletter / lista eventi
- [ ] **Sconto 10% alla prima prenotazione** (mostrato nel modulo di prenotazione demo, codice "BENVENUTO10", marcato "Esempio"): da confermare con il cliente se attivarlo davvero, con quali termini (validità, verifica in sala, esclusioni) e come tracciare "la prima volta" senza un vero sistema di prenotazioni/account.
- ✗ Ordini d'asporto online: esclusi su indicazione di Punto Due Studio.
