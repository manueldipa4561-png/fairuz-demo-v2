/**
 * Menu — struttura pronta, CONTENUTO ASSENTE di proposito (regola 1: mai inventare piatti o prezzi).
 * Le categorie sono provvisorie: dedotte dai testi già usati sul sito (mezze, grigliate, falafel, dolci)
 * e da allineare al menu reale, oggi su fairuz.eatbu.com.
 *
 * Nessun campo per allergeni/diete di proposito: i claim (senza glutine, halal, vegano…) non si
 * mostrano finché il cliente non li conferma (vedi restaurant.dietaryClaimsToConfirm).
 *
 * Per inserire un piatto: aggiungerlo a `items` della sua categoria, es.
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

export const menuCategories: MenuCategory[] = [
  { id: 'mezze', label: 'Mezze', items: [] },
  { id: 'grigliate', label: 'Grigliate', items: [] },
  { id: 'falafel', label: 'Falafel', items: [] },
  { id: 'dolci', label: 'Dolci', items: [] },
];
