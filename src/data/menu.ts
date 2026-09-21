/**
 * Menu — CONTENUTO DI ESEMPIO (regola 1: non è il menu reale di Fairuz).
 * Piatti tipici della cucina libanese con prezzi plausibili per Parma: servono a mostrare l'impaginato
 * finito. Vanno sostituiti col menu vero (oggi su fairuz.eatbu.com) prima della pubblicazione ufficiale.
 * Le pagine marcano questi contenuti con il badge <Sample>.
 *
 * Nessun campo per allergeni/diete di proposito: i claim (senza glutine, halal, vegano…) non si
 * mostrano finché il cliente non li conferma (vedi restaurant.dietaryClaimsToConfirm).
 *
 * Per il menu reale: sostituire gli `items` di ogni categoria, es.
 *   { name: '…', description: '…', price: '…' }  // price = stringa già formattata, es. "9 €"
 */
export interface Dish {
  name: string;
  description?: string;
  price?: string;
}
export interface MenuCategory {
  id: string;
  label: string;
  items: Dish[];
}

/** true = i piatti qui sotto sono di esempio (le pagine mostrano il badge "Esempio"). */
export const menuIsSample = true;

export const menuCategories: MenuCategory[] = [
  {
    id: 'mezze',
    label: 'Mezze',
    items: [
      { name: 'Hummus', description: 'Crema di ceci con tahina, olio d’oliva e limone.', price: '7 €' },
      { name: 'Moutabbal', description: 'Crema di melanzane arrostite e tahina.', price: '7 €' },
      { name: 'Tabbouleh', description: 'Insalata di prezzemolo, bulgur, pomodoro, menta e limone.', price: '8 €' },
      { name: 'Warak enab', description: 'Foglie di vite ripiene di riso ed erbe aromatiche.', price: '8 €' },
      { name: 'Labneh', description: 'Formaggio fresco di yogurt con olio d’oliva e menta.', price: '6 €' },
      { name: 'Muhammara', description: 'Crema di peperoni, noci e melagrana.', price: '7 €' },
    ],
  },
  {
    id: 'grigliate',
    label: 'Grigliate',
    items: [
      { name: 'Shish taouk', description: 'Spiedini di pollo marinato cotti alla brace.', price: '14 €' },
      { name: 'Kafta', description: 'Spiedini di carne macinata con prezzemolo e spezie.', price: '14 €' },
      { name: 'Lahm meshwi', description: 'Spiedini di agnello alla griglia.', price: '16 €' },
      { name: 'Costolette d’agnello', description: 'Cotte al carbone con spezie libanesi.', price: '18 €' },
      { name: 'Grigliata mista Fairuz', description: 'Selezione di carni alla brace da condividere.', price: '22 €' },
    ],
  },
  {
    id: 'falafel',
    label: 'Falafel',
    items: [
      { name: 'Falafel (6 pezzi)', description: 'Polpette di ceci e fave con erbe e spezie.', price: '7 €' },
      { name: 'Sandwich falafel', description: 'Nel pane con verdure e salsa tahina.', price: '8 €' },
      { name: 'Piatto falafel', description: 'Con hummus, insalata e pane.', price: '11 €' },
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    items: [
      { name: 'Baklawa', description: 'Sfoglia con noci e sciroppo di zucchero.', price: '6 €' },
      { name: 'Knafeh', description: 'Dolce di semolino e formaggio con sciroppo.', price: '7 €' },
      { name: 'Muhallabia', description: 'Budino di latte all’acqua di rose.', price: '5 €' },
      { name: 'Assortimento di dolci libanesi', description: 'Selezione di paste della casa.', price: '9 €' },
    ],
  },
];
