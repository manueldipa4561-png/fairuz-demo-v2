/**
 * Foto di Fairuz in `public/photos/<nome>.(png|jpg|jpeg|webp)` (regola 9: solo immagini di Fairuz).
 * Il controllo avviene in fase di build: se il file c'è, la pagina mostra la foto; se non c'è, la
 * cornice sparisce e l'impaginato si richiude (nessun segnaposto visibile).
 */
import fs from 'node:fs';
import path from 'node:path';

const exts = ['png', 'jpg', 'jpeg', 'webp'];
const dir = path.join(process.cwd(), 'public', 'photos');

export function findPhoto(name?: string): string | undefined {
  if (!name) return undefined;
  const file = exts.map((e) => `${name}.${e}`).find((f) => fs.existsSync(path.join(dir, f)));
  return file ? `/photos/${file}` : undefined;
}
