/**
 * Eventi — CONTENUTO DI ESEMPIO (regola 1: date, orari e prezzi NON confermati dal cliente).
 * Servono a mostrare l'impaginato finito; le locandine social di Fairuz (serate weekend, formula pranzo)
 * suggeriscono che una programmazione esista, ma vanno confermati calendario e prezzi reali.
 * Le pagine marcano questi eventi col badge <Sample>.
 *
 * Per il calendario reale: sostituire gli oggetti qui sotto, es.
 *   { title: '…', date: '2026-10-03', time: '20:00', description: '…', price: '25 €' }
 * `date` è ISO (AAAA-MM-GG); `time` e `price` sono stringhe già formattate; tutti i campi tranne titolo e data sono opzionali.
 */
export interface EventItem {
  title: string;
  date: string;
  time?: string;
  description?: string;
  price?: string;
}

/** true = gli eventi qui sotto sono di esempio (le pagine mostrano il badge "Esempio"). */
export const eventsAreSample = true;

export const events: EventItem[] = [
  {
    title: 'Serata mezze & musica dal vivo',
    date: '2026-10-03',
    time: '20:00',
    description: 'Un percorso di mezze da condividere, accompagnato dalla musica libanese dal vivo.',
    price: '30 €',
  },
  {
    title: 'Cena degustazione libanese',
    date: '2026-10-17',
    time: '20:00',
    description: 'Menu guidato dalla brace ai dolci, per scoprire i sapori del Libano in un’unica sera.',
    price: '35 €',
  },
  {
    title: 'Brunch della domenica',
    date: '2026-11-08',
    time: '12:00',
    description: 'Un brunch tra mezze, pane caldo e dolci, con calma e in compagnia.',
    price: '22 €',
  },
];
