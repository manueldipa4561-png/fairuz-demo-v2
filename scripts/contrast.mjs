// WCAG 2.x contrast checker for the Fairuz design tokens.
// Usage: node scripts/contrast.mjs
const lum = (hex) => {
  const c = hex.replace('#', '').match(/../g).map((h) => parseInt(h, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const themes = {
  light: {
    paper: '#F4ECDD', surface: '#FBF7EF', ink: '#1E1B18', inkSoft: '#5A5048',
    turquoise: '#1E9E93', turquoiseText: '#14746B', brace: '#B93826', blush: '#D3BDC5', onBrace: '#FFFFFF',
  },
  dark: {
    paper: '#171310', surface: '#221D19', ink: '#F4ECDD', inkSoft: '#B9AC9D',
    turquoise: '#3CC4B7', turquoiseText: '#4FD1C5', brace: '#E5674F', blush: '#D3BDC5', onBrace: '#171310',
  },
};

// [label, fg, bg, minimum]
const pairs = (t) => [
  ['ink on paper (body)', t.ink, t.paper, 4.5],
  ['ink on surface', t.ink, t.surface, 4.5],
  ['inkSoft on paper (secondary)', t.inkSoft, t.paper, 4.5],
  ['inkSoft on surface', t.inkSoft, t.surface, 4.5],
  ['turquoiseText on paper (links/labels)', t.turquoiseText, t.paper, 4.5],
  ['turquoiseText on surface', t.turquoiseText, t.surface, 4.5],
  ['brace on paper (text/large)', t.brace, t.paper, 4.5],
  ['onBrace on brace (CTA button)', t.onBrace, t.brace, 4.5],
  ['ink on turquoise fill (badges/tiles)', t.ink === '#F4ECDD' ? t.paper : t.ink, t.turquoise, 4.5],
  ['turquoiseText vs paper (UI border/focus ring, 3:1)', t.turquoiseText, t.paper, 3],
  ['brace vs paper (UI border/focus, 3:1)', t.brace, t.paper, 3],
  ['blush on paper (decor only)', t.blush, t.paper, 1],
];

// Superfici "notte" fisse (footer, strip demo, capitoli scuri): valgono in entrambi i temi.
const night = { bg: '#1E1B18', fg: '#F4ECDD', accent: '#3CC4B7', soft: '#C9BEB0', warn: '#E5674F' };
const nightPairs = [
  ['night-fg on night', night.fg, night.bg, 4.5],
  ['night-accent on night (labels/links)', night.accent, night.bg, 4.5],
  ['night-soft on night', night.soft, night.bg, 4.5],
  ['ink on night-accent fill', '#1E1B18', night.accent, 4.5],
  ['night-warn on night (TODO, scintille)', night.warn, night.bg, 4.5],
];

let failed = 0;
console.log('\n== night (fixed, both themes) ==');
for (const [label, fg, bg, min] of nightPairs) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(5)}:1  (min ${min})  ${label}  ${fg} on ${bg}`);
}
for (const [name, t] of Object.entries(themes)) {
  console.log(`\n== ${name} ==`);
  for (const [label, fg, bg, min] of pairs(t)) {
    const r = ratio(fg, bg);
    const ok = r >= min;
    if (!ok) failed++;
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(5)}:1  (min ${min})  ${label}  ${fg} on ${bg}`);
  }
}
process.exit(failed ? 1 : 0);
