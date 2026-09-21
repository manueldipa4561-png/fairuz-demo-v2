// Genera public/og-default.png (1200x630) — SEGNAPOSTO. TODO: sostituire con una foto reale di Fairuz.
// Uso: node scripts/make-og-placeholder.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f4ecdd"/>
  <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#1e1b18" stroke-width="2"/>
  <rect x="50" y="50" width="1100" height="530" fill="none" stroke="#1e1b18" stroke-opacity="0.25" stroke-width="1"/>
  <rect x="0" y="0" width="1200" height="14" fill="#1e9e93"/>
  <text x="600" y="150" text-anchor="middle" font-family="Consolas, Menlo, monospace" font-size="26" letter-spacing="6" fill="#14746b">RISTORANTE LIBANESE · PARMA</text>
  <text x="600" y="355" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="900" font-size="200" letter-spacing="8" fill="#1e1b18">FAIRUZ</text>
  <text x="600" y="440" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="40" fill="#14746b">Il Libano a tavola, a Parma.</text>
  <rect x="440" y="490" width="320" height="56" rx="28" fill="#b93826"/>
  <text x="600" y="526" text-anchor="middle" font-family="Consolas, Menlo, monospace" font-size="22" letter-spacing="3" fill="#ffffff">DEMO / CONCEPT</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
console.log('public/og-default.png creato');
