/**
 * Eventi — calendario vuoto di proposito (regola 1: mai inventare date, orari, prezzi).
 * Le locandine social sono solo indizi non verificati (docs/RESEARCH.md §4): non usarle come fonte.
 *
 * Per pubblicare un evento: aggiungerlo qui, es.
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

export const events: EventItem[] = [];
