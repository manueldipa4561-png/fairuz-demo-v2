/**
 * Bootstrap del movimento (GSAP + ScrollTrigger + SplitText + Lenis).
 *
 * Progressive enhancement: la pagina è completa senza JS. Qui si attivano scroll morbido e animazioni
 * SOLO se l'utente non chiede movimento ridotto; `gsap.matchMedia()` ripulisce tutto (tween, pin, split,
 * Lenis) se la preferenza o il breakpoint cambiano durante la sessione.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export interface MotionContext {
  /** ≥ 60rem: layout a colonne, capitoli pinnati. */
  desktop: boolean;
  /** Altezza dell'header sticky (px): i pin partono sotto di lui. */
  headerH: number;
}
type Setup = (ctx: MotionContext) => void | (() => void);

const root = document.documentElement;

function startLenis() {
  const scrollPadding = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
  const lenis = new Lenis({ autoRaf: false, anchors: { offset: -scrollPadding } });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  // Il menu mobile (Header.astro) blocca lo scroll con html[data-menu-open]: Lenis deve fermarsi con lui.
  const sync = () => (root.hasAttribute('data-menu-open') ? lenis.stop() : lenis.start());
  const observer = new MutationObserver(sync);
  observer.observe(root, { attributes: true, attributeFilter: ['data-menu-open'] });

  return () => {
    observer.disconnect();
    gsap.ticker.remove(tick);
    lenis.destroy();
  };
}

/** Esegue `fn` dopo il load, a browser inattivo: l'hero (CSS) non aspetta GSAP e LCP/TBT restano bassi. */
function whenIdle(fn: () => void) {
  // Safari non ha requestIdleCallback: ripiego su un timeout breve.
  const idle = () => {
    if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(fn, { timeout: 1500 });
    else window.setTimeout(fn, 200);
  };
  if (document.readyState === 'complete') idle();
  else window.addEventListener('load', idle, { once: true });
}

export function initMotion(setup: Setup) {
  whenIdle(() => start(setup));
}

function start(setup: Setup) {
  const mm = gsap.matchMedia();
  mm.add(
    { motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 60rem)' },
    (context) => {
      const { motion, desktop } = context.conditions as { motion: boolean; desktop: boolean };
      if (!motion) return;
      const stopLenis = startLenis();
      const headerH = document.querySelector<HTMLElement>('[data-site-header]')?.offsetHeight ?? 0;
      const cleanup = setup({ desktop, headerH });
      // I font variabili cambiano le misure del testo gigante: ricalcola i trigger quando sono pronti.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => {
        cleanup?.();
        stopLenis();
      };
    },
  );
}
