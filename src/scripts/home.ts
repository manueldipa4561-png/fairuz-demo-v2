/**
 * Home cinematica: BRACE → FUMO → PANE → TAVOLA → PRENOTA.
 * Tutto è dentro initMotion(): con prefers-reduced-motion non parte nulla e la pagina resta statica.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { initMotion } from './motion';

const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
  scope.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(sel));

/** Scene specifiche per capitolo, aggiunte in coda alla timeline scrubbata. */
const chapterScenes: Record<string, (chapter: HTMLElement, tl: gsap.core.Timeline) => void> = {
  brace(chapter, tl) {
    tl.to($$('[data-flame]', chapter), { scaleY: 1.12, transformOrigin: '50% 100%', stagger: 0.1, duration: 0.6 }, '<0.4');

    // Scintille: loop infinito, attivo solo mentre il capitolo è visibile (niente CPU sprecata fuori schermo).
    const sparks = gsap.timeline({ paused: true, repeat: -1 });
    for (const spark of $$('[data-spark]', chapter)) {
      sparks.to(
        spark,
        {
          keyframes: {
            y: [0, gsap.utils.random(-260, -140)],
            x: [0, gsap.utils.random(-40, 40)],
            autoAlpha: [0, 1, 1, 0],
          },
          duration: gsap.utils.random(1.6, 3),
          ease: 'power1.out',
        },
        gsap.utils.random(0, 2.4),
      );
    }
    ScrollTrigger.create({
      trigger: chapter,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => (self.isActive ? sparks.play() : sparks.pause()),
    });
  },
  fumo(chapter, tl) {
    tl.to($('[data-smoke]', chapter), { y: -50, duration: 1 }, '<');
  },
  pane(chapter, tl) {
    tl.to($('[data-bread-left]', chapter), { x: -26, rotate: -7, svgOrigin: '200 320', duration: 0.8 }, '>-0.2')
      .to($('[data-bread-right]', chapter), { x: 26, rotate: 7, svgOrigin: '200 320', duration: 0.8 }, '<')
      .from($$('[data-crumb]', chapter), { autoAlpha: 0, y: -12, stagger: 0.05, duration: 0.4 }, '<0.3');
  },
  tavola(chapter, tl) {
    tl.from(
      $$('[data-plate]', chapter),
      { scale: 0, autoAlpha: 0, transformOrigin: '50% 50%', stagger: 0.12, duration: 0.5, ease: 'back.out(2)' },
      '<0.2',
    );
  },
};

initMotion(({ desktop, headerH }) => {
  const splits: SplitText[] = [];
  const split = (el: HTMLElement) => {
    const s = SplitText.create(el, { type: 'chars', mask: 'chars' });
    splits.push(s);
    return s.chars;
  };

  // ── Hero: il wordmark sale lettera per lettera ─────────────────
  const wordmark = $('[data-hero-wordmark]');
  if (wordmark) {
    gsap.from(split(wordmark), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.07, delay: 0.1 });
  }
  gsap.from('[data-hero-reveal]', { y: 24, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.55 });
  gsap.from('.hero [data-seal]', { scale: 0.6, rotate: -40, autoAlpha: 0, duration: 1.2, ease: 'back.out(1.6)', delay: 0.8 });

  // ── Capitoli ───────────────────────────────────────────────────
  for (const chapter of $$('[data-chapter]')) {
    const word = $('[data-chapter-word]', chapter);
    const text = $$('[data-chapter-kicker], [data-chapter-text] > *, [data-chapter-photo]', chapter);
    const strokes = $$('[data-draw]', chapter);

    if (word) {
      gsap.from(split(word), {
        yPercent: 105,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: { trigger: chapter, start: 'top 72%' },
      });
    }
    gsap.from(text, {
      y: 28,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: { trigger: chapter, start: 'top 55%' },
    });

    // Pin solo su desktop e solo se il capitolo sta tutto nello schermo sotto l'header.
    const canPin =
      desktop && chapter.hasAttribute('data-pin') && chapter.offsetHeight + headerH <= window.innerHeight;

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: canPin
        ? { trigger: chapter, start: `top top+=${headerH}`, end: '+=90%', pin: true, scrub: 1, anticipatePin: 1 }
        : { trigger: chapter, start: 'top 80%', end: 'center 45%', scrub: 1 },
    });
    if (strokes.length) {
      tl.fromTo(strokes, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, stagger: 0.12, duration: 1 });
    }
    chapterScenes[chapter.dataset.chapter ?? '']?.(chapter, tl);
  }

  return () => splits.forEach((s) => s.revert());
});
