/**
 * Inclinazione 3D col puntatore su schede e biglietti (desktop). Progressive enhancement:
 * marca `.card/.dish/.ticket` con [data-tilt] a runtime, così senza JS restano piatte.
 * Solo con puntatore fine (no touch/mobile) e senza `prefers-reduced-motion`.
 * Imposta le custom property --rx/--ry lette dal CSS (transform perspective rotateX/rotateY).
 */
const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

if (fine.matches && !reduce.matches) {
  const MAX = 6; // gradi massimi: elegante, non vertiginoso.
  const cards = document.querySelectorAll<HTMLElement>('.card, .dish, .ticket');

  for (const card of cards) {
    card.setAttribute('data-tilt', '');

    card.addEventListener('pointerenter', () => card.classList.add('is-tilting'));

    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--ry', `${(px * MAX * 2).toFixed(2)}deg`);
      card.style.setProperty('--rx', `${(-py * MAX * 2).toFixed(2)}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  }
}
