#!/usr/bin/env node
/**
 * scripts/build.mjs — Build statique Template Artisan
 * =========================================
 * Usage : node scripts/build.mjs
 *
 * 1. Charge config/site.js (window.SITE_CONFIG)
 * 2. Remplace les tokens {{clé.sous-clé}} dans tous les .html
 * 3. Génère dist/ propre avec html + css/ + js/ + assets/ + config/
 * 4. Injecte un JSON-LD LocalBusiness auto-généré dans chaque page
 * 5. Génère dist/sitemap.xml et dist/robots.txt
 * 6. Échoue si un token {{...}} non résolu subsiste dans dist/*.html
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createContext, runInContext } from 'vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT   = join(__dirname, '..');
const DIST   = join(ROOT, 'dist');

// ─── Helpers ────────────────────────────────────────────────────────────────

const log   = (msg) => console.log(msg);
const ok    = (msg) => console.log(`  ✓ ${msg}`);
const warn  = (msg) => console.warn(`  ⚠ ${msg}`);
const fatal = (msg) => { console.error(`\n✖ ${msg}`); process.exit(1); };

// ─── 1. Charger config/site.js ──────────────────────────────────────────────

log('\n→ Chargement de config/site.js…');

const configPath = join(ROOT, 'config', 'site.js');
let configSrc;
try {
  configSrc = readFileSync(configPath, 'utf8');
} catch {
  fatal(`config/site.js introuvable : ${configPath}`);
}

// Évaluer dans un sandbox avec window mock
const sandbox = { window: {} };
createContext(sandbox);
try {
  runInContext(configSrc, sandbox);
} catch (e) {
  fatal(`Erreur d'évaluation de config/site.js : ${e.message}`);
}

const config = sandbox.window.SITE_CONFIG;
if (!config || typeof config !== 'object') {
  fatal('window.SITE_CONFIG absent ou invalide dans config/site.js');
}
ok('config/site.js chargé');

// ─── 2. Aplatir la config en table de tokens ─────────────────────────────────
// Ex. : config.contact.phoneDisplay → clé "contact.phoneDisplay"
// Dans les HTML : {{contact.phoneDisplay}}

function flatten(obj, prefix = '') {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(result, flatten(val, fullKey));
    } else if (Array.isArray(val)) {
      result[fullKey] = val.join(', ');
    } else {
      result[fullKey] = val === null || val === undefined ? '' : String(val);
    }
  }
  return result;
}

const tokens = flatten(config);
ok(`${Object.keys(tokens).length} tokens disponibles`);

// ─── 3. Fonction de remplacement ────────────────────────────────────────────

function replaceTokens(html, filename) {
  return html.replace(/\{\{([^}]+)\}\}/g, (match, raw) => {
    const key = raw.trim();
    if (Object.prototype.hasOwnProperty.call(tokens, key)) {
      return tokens[key];
    }
    warn(`Token inconnu dans ${filename} : ${match}`);
    return match; // conservé → sera détecté à la validation
  });
}

// ─── 3b. Générer le bloc JSON-LD LocalBusiness ──────────────────────────────
// Injecté automatiquement dans chaque page avant </head>
// Depts/régions → AdministrativeArea ; villes → City

const AREA_DEPARTMENTS = new Set(['Var', 'Alpes-Maritimes', 'Bouches-du-Rhône', 'Vaucluse', 'Gard']);

function generateLocalBusinessBlock(cfg) {
  const schema = {
    '@context':   'https://schema.org',
    '@type':      'LocalBusiness',
    name:         cfg.company.name,
    legalName:    cfg.company.legalName,
    url:          cfg.site.url,
    telephone:    cfg.contact.phone,
    email:        cfg.contact.email,
    description:  cfg.company.description,
    priceRange:   '€€',
    openingHours: cfg.hours.schema,
    address: {
      '@type':         'PostalAddress',
      streetAddress:   cfg.contact.address.street,
      addressLocality: cfg.contact.address.city,
      postalCode:      cfg.contact.address.postalCode,
      addressRegion:   cfg.contact.address.department,
      addressCountry:  cfg.contact.address.country,
    },
    geo: {
      '@type':   'GeoCoordinates',
      latitude:  cfg.contact.geo.latitude,
      longitude: cfg.contact.geo.longitude,
    },
    areaServed: (cfg.serviceArea || []).map(n => ({
      '@type': AREA_DEPARTMENTS.has(n) ? 'AdministrativeArea' : 'City',
      name: n,
    })),
    sameAs: Object.values(cfg.social || {}).filter(v => v && v !== '#'),
  };

  const json = JSON.stringify(schema, null, 2)
    .split('\n')
    .map(l => '  ' + l)
    .join('\n');

  return [
    '  <!-- LocalBusiness — généré depuis config/site.js -->',
    '  <script type="application/ld+json">',
    json,
    '  </script>',
  ].join('\n');
}

const localBusinessBlock = generateLocalBusinessBlock(config);
ok('JSON-LD LocalBusiness généré');

// ─── 4. Nettoyer et créer dist/ ─────────────────────────────────────────────

log('\n→ Nettoyage de dist/…');
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
ok('dist/ recréé');

// ─── 5. Traiter les fichiers HTML ────────────────────────────────────────────

log('\n→ Traitement des fichiers HTML…');

const htmlFiles = readdirSync(ROOT).filter(f => f.endsWith('.html'));
if (htmlFiles.length === 0) fatal('Aucun fichier .html trouvé à la racine du projet.');

for (const file of htmlFiles) {
  const src     = readFileSync(join(ROOT, file), 'utf8');
  let processed = replaceTokens(src, file);
  // Injecter le JSON-LD LocalBusiness commun avant </head>
  processed = processed.replace('</head>', `${localBusinessBlock}\n</head>`);
  writeFileSync(join(DIST, file), processed, 'utf8');
  ok(file);
}

// ─── 6. Copier les dossiers statiques ───────────────────────────────────────

log('\n→ Copie des dossiers statiques…');

const staticDirs = ['css', 'js', 'assets', 'config'];
for (const dir of staticDirs) {
  const src = join(ROOT, dir);
  try {
    statSync(src);
    cpSync(src, join(DIST, dir), { recursive: true });
    ok(`${dir}/`);
  } catch {
    warn(`${dir}/ introuvable — ignoré`);
  }
}

// Copier les fichiers statiques isolés à la racine (favicon, etc.)
const rootStatics = readdirSync(ROOT).filter(f => {
  try { return statSync(join(ROOT, f)).isFile() && /\.(ico|png|svg|webmanifest|txt|xml)$/.test(f); }
  catch { return false; }
});
// On ne copie pas robots.txt et sitemap.xml : ils seront générés
const skipFiles = new Set(['robots.txt', 'sitemap.xml']);
for (const f of rootStatics) {
  if (skipFiles.has(f)) continue;
  cpSync(join(ROOT, f), join(DIST, f));
  ok(f);
}

// ─── 7. Générer sitemap.xml ──────────────────────────────────────────────────

log('\n→ Génération de sitemap.xml…');

const domain  = (config.site?.url ?? '').replace(/\/$/, '');
if (!domain) warn('config.site.url vide — les <loc> seront relatives');

const today = new Date().toISOString().slice(0, 10);

// Priorités par page (pages non listées → 0.5 / monthly)
const PAGE_META = {
  'index.html':                    { priority: '1.0', changefreq: 'monthly' },
  'plomberie.html':                { priority: '0.9', changefreq: 'monthly' },
  'chauffage.html':                { priority: '0.9', changefreq: 'monthly' },
  'recherche-de-fuite.html':       { priority: '0.9', changefreq: 'monthly' },
  'renovation.html':               { priority: '0.9', changefreq: 'monthly' },
  'contact.html':                  { priority: '0.8', changefreq: 'yearly'  },
  'faq.html':                      { priority: '0.7', changefreq: 'monthly' },
  'about.html':                    { priority: '0.6', changefreq: 'yearly'  },
  'mentions-legales.html':         { priority: '0.2', changefreq: 'yearly'  },
  'politique-confidentialite.html':{ priority: '0.2', changefreq: 'yearly'  },
};

// Pages exclues de l'index
const NOINDEX = new Set(['404.html']);

const urlEntries = htmlFiles
  .filter(f => !NOINDEX.has(f))
  .map(f => {
    const loc    = f === 'index.html' ? `${domain}/` : `${domain}/${f}`;
    const { priority, changefreq } = PAGE_META[f] ?? { priority: '0.5', changefreq: 'monthly' };
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n\n');

const sitemapXml =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urlEntries}

</urlset>`;

writeFileSync(join(DIST, 'sitemap.xml'), sitemapXml, 'utf8');
ok(`sitemap.xml (${htmlFiles.length - NOINDEX.size} URL(s))`);

// ─── 8. Générer robots.txt ───────────────────────────────────────────────────

log('\n→ Génération de robots.txt…');

const robotsTxt =
`User-agent: *
Allow: /

# Exclure la configuration côté serveur
Disallow: /config/

Sitemap: ${domain}/sitemap.xml
`;

writeFileSync(join(DIST, 'robots.txt'), robotsTxt, 'utf8');
ok('robots.txt');

// ─── 9. Validation finale : aucun token non résolu ──────────────────────────

log('\n→ Validation des tokens…');

let errors = 0;
for (const file of htmlFiles) {
  const content   = readFileSync(join(DIST, file), 'utf8');
  const remaining = [...content.matchAll(/\{\{[^}]+\}\}/g)].map(m => m[0]);
  if (remaining.length > 0) {
    console.error(`  ✖ Tokens non résolus dans ${file} : ${remaining.join(', ')}`);
    errors++;
  }
}

if (errors > 0) {
  fatal(`Build échoué : ${errors} fichier(s) contiennent des tokens non résolus.`);
}

// ─── Résumé ──────────────────────────────────────────────────────────────────

log(`
╔══════════════════════════════════════════╗
║  ✅  Build terminé avec succès → dist/   ║
╚══════════════════════════════════════════╝

  HTML    : ${htmlFiles.length} fichier(s)
  Sitemap : ${htmlFiles.length - NOINDEX.size} URL(s)
  Domaine : ${domain || '(non défini)'}
`);
