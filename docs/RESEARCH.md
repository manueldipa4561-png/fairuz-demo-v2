# Ricerca: riferimento Da Maria + fonti foto di Fairuz (21/09/2026)

## 1. Riferimento: Da Maria (damaria-roma.webflow.io)
Template Webflow per un ristorante romano. **Solo riferimento visivo**: le sue immagini e i suoi testi non si riusano.

**Motore di animazione (letto dal DOM):** GSAP 3.15 + ScrollTrigger + SplitText + CustomEase, Lenis 1.2, Barba.js (transizioni tra pagine), page loader. Il nostro stack è lo stesso (GSAP 3.15 e Lenis già installati; SplitText e CustomEase ora sono inclusi in `gsap`).

**Tipografia/colore:** titoli Playfair Display 700 (fino a ~245px, `--step-wordmark`-like) in un unico rosso (#DA4143), corpo in Bitter, fondo carta con texture leggera e un motivo damascato sul margine esterno.

**Struttura (una pagina = un foglio stampato):**
1. Cornice filettata permanente attorno a tutta la pagina; il "foglio" poggia su un fondo con pattern.
2. Hero: wordmark gigante che sfonda i bordi del frame + fotografia full-width + didascalia scura sovrapposta; timbro/sigillo in alto a destra.
3. Navigazione: pulsante tondo "MENU" con puntino, bollo ovale "RESERVE", etichetta in box con doppia filettatura.
4. Capitoli annunciati da **una parola gigante** (MENU → BELLINI TIME → ORDER → BOOK NOW), separati da filetti sottili.
5. Testo in colonna stretta con **capolettera** in quadrato nero; immagini in cornice sottile.
6. **Illustrazioni a china** sovrapposte alle lettere (il cocktail su "BELLINI TIME").
7. Divisore a **scacchiera** (tovaglia); form con etichette-chip italiche che scavalcano il bordo del campo.

**Traduzione per Fairuz (non copiare, reinterpretare):**
| Da Maria | Fairuz |
|---|---|
| Rosso unico | Turchese (firma) + brace (CTA), vedi `tokens.css` |
| Scacchiera-tovaglia | **Motivo a rombi** (già presente sul sito attuale di Fairuz) in turchese/blush |
| Timbro tondo | Sigillo "FAIRUZ · PARMA · CUCINA LIBANESE" con testo su tracciato, rotazione lenta |
| Illustrazioni a china | Linee a china di falafel, brace, pane, caffè: TODO, da commissionare o generare |
| Capitoli a parola gigante | **BRACE → FUMO → PANE → TAVOLA → PRENOTA** (coincide con la narrazione del brief) |
| Barba/loader | Loader breve con il wordmark; transizione tra pagine solo se non pesa su mobile |

## 2. Fonti foto: cosa esiste davvero
| Fonte | Esito |
|---|---|
| Sito attuale (fairuz.eatbu.com) | Template DISH: **nessuna foto** (hero grigio). |
| Vecchio sito `ristorantefairuzparma.it` | **Dominio non più esistente** (DNS: non-existent). Snapshot Wayback del 15/10/2024 ok per i testi, ma **zero immagini archiviate** (verificato con indice CDX): logo e 64 foto di galleria perse. |
| Instagram `@fairuz.ristorante.parma` | Pubblico, ~3.700 follower, 66 post. Fonte migliore. Miniature 480-512×640: **troppo basse per un hero full-bleed**. |
| Facebook `fairuz.ristorante.parma` | Non ispezionato (login wall probabile). |
| Tripadvisor / Google / aggregatori | Foto di utenti terzi: **esclusi** (diritti e ToS). Tripadvisor blocca i bot (403). |

**Diritti:** le foto pubblicate dall'account di Fairuz sono del ristorante. Quelle di terzi taggate sul profilo (es. il fotografo *Giorgio Militano*, il video di *12 TV Parma*) appartengono a loro e vanno escluse senza licenza. Per il sito vero servono gli **originali dal cliente**.

## 3. Fatti nuovi verificati (profilo Instagram ufficiale)
- Bio: "Autentica cucina libanese | Sapori tradizionali | Parma | Vieni a gustare il Libano da noi! | **Giorno di chiusura: martedì**".
- Locandina del 10/09/2026: "TEL WA +39 371 588 1368" → il numero è anche WhatsApp.

## 4. Indizi da NON usare finché il cliente non conferma
(Letti da testi alternativi auto-generati e da un'immagine: non affidabili.)
- Locandina "Gli appuntamenti del weekend con Fairuz" (10/09/2026): sembra esistere una programmazione weekend.
- Locandina di luglio con una **formula pranzo a 15 € bevande incluse**: prezzo da NON pubblicare senza conferma.
- Post del 02/09/2026 sul Salsomaggiore Street Food Festival (4-5-6 settembre): la partecipazione non è certa.
- Post "we're hiring" (personale di cucina e sala).

## 5. Logo e colori del marchio (da chiarire)
Il profilo Instagram mostra un **logo circolare azzurro/blu** con la scritta "Fairuz" in corsivo e "CUCINA LIBANESE". Colore stimato a occhio (non misurato): blu acciaio. È coerente con le palette A/B scelte dal committente. Serve il file del logo (meglio vettoriale) dal cliente.
