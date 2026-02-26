#!/usr/bin/env node
/**
 * scripts/tokenize.mjs — Migration one-shot : tokenisation des HTML sources
 * ==========================================================================
 * Remplace toutes les valeurs en dur (téléphone, email, nom, adresse…)
 * par des tokens {{...}} dans les fichiers .html sources.
 *
 * Usage : node scripts/tokenize.mjs
 *
 * À exécuter UNE SEULE FOIS sur le projet source.
 * Après migration, les tokens sont résolus au build via : npm run build
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Helpers ────────────────────────────────────────────────────────────────

const log   = (msg) => console.log(msg);
const ok    = (msg) => console.log(`  ✓ ${msg}`);
const info  = (msg) => console.log(`    · ${msg}`);
const fatal = (msg) => { console.error(`\n✖ ${msg}`); process.exit(1); };

function read(file)         { return readFileSync(join(ROOT, file), 'utf8'); }
function write(file, content) { writeFileSync(join(ROOT, file), content, 'utf8'); }

/**
 * Applique une liste de remplacements [from, to] à un contenu HTML.
 * Chaque remplacement est global (toutes les occurrences).
 * Les règles sont appliquées dans l'ordre — la plus longue en premier
 * pour éviter les correspondances partielles.
 */
function applyRules(content, rules, filename) {
  let result = content;
  let count  = 0;
  for (const [from, to] of rules) {
    const next = result.split(from).join(to);   // replaceAll sans regex
    if (next !== result) {
      count++;
      info(`  ${from.slice(0, 60).trim()}… → ${to}`);
    }
    result = next;
  }
  if (count === 0) info('(aucun remplacement effectué)');
  return result;
}

// ─── Règles globales (communes à tous les HTML) ──────────────────────────────
// Ordre : du plus spécifique au plus général pour éviter les collisions.

const GLOBAL_RULES = [

  // ── html lang ──────────────────────────────────────────────────────────────
  ['<html lang="fr">',                          '<html lang="{{site.lang}}">'],

  // ── meta theme-color ───────────────────────────────────────────────────────
  ['<meta name="theme-color" content="#0f172a">',
   '<meta name="theme-color" content="{{theme.colorDark}}">'],

  // ── og: dimensions image (uniques dans tout HTML) ─────────────────────────
  ['<meta property="og:image:width" content="1200">',
   '<meta property="og:image:width" content="{{assets.ogImageWidth}}">'],
  ['<meta property="og:image:height" content="630">',
   '<meta property="og:image:height" content="{{assets.ogImageHeight}}">'],

  // ── og:locale et og:site_name ─────────────────────────────────────────────
  ['<meta property="og:locale" content="fr_FR">',
   '<meta property="og:locale" content="{{site.locale}}">'],
  ['<meta property="og:site_name" content="BP2C">',
   '<meta property="og:site_name" content="{{site.name}}">'],

  // ── JSON-LD — données contact & adresse ───────────────────────────────────
  ['"telephone": "+33601761395"',               '"telephone": "{{contact.phone}}"'],
  ['"email": "contact@bp2c.net"',               '"email": "{{contact.email}}"'],
  ['"streetAddress": "160 Rue du Thoron"',      '"streetAddress": "{{contact.address.street}}"'],
  ['"addressLocality": "Fréjus"',               '"addressLocality": "{{contact.address.city}}"'],
  ['"postalCode": "83600"',                     '"postalCode": "{{contact.address.postalCode}}"'],
  ['"addressRegion": "Var"',                    '"addressRegion": "{{contact.address.department}}"'],
  ['"addressCountry": "FR"',                    '"addressCountry": "{{contact.address.country}}"'],
  ['"latitude": "43.4334"',                     '"latitude": "{{contact.geo.latitude}}"'],
  ['"longitude": "6.7367"',                     '"longitude": "{{contact.geo.longitude}}"'],
  ['"founder": {"@type": "Person", "name": "William"}',
   '"founder": {"@type": "Person", "name": "{{company.founder}}"}'],
  ['"sameAs": ["https://share.google/AuZEaEIZEZyZJYQUI"]',
   '"sameAs": ["{{social.google}}"]'],

  // ── Body — hrefs tel: et mailto: ──────────────────────────────────────────
  ['href="tel:+33601761395"',                   'href="tel:{{contact.phone}}"'],
  ['href="mailto:contact@bp2c.net"',            'href="mailto:{{contact.email}}"'],

  // ── Body — textes dans les éléments [data-token] ──────────────────────────
  // Adresse (contact.html, mentions-legales, politique)
  ['>160 Rue du Thoron, 83600 Fréjus, France</span>',
   '>{{contact.address.fullCountry}}</span>'],
  ['>160 Rue du Thoron, 83600 Fréjus</span>',
   '>{{contact.address.full}}</span>'],
  ['>160 Rue du Thoron</p>',                    '>{{contact.address.street}}</p>'],
  ['>83600 Fréjus</p>',                         '>{{contact.address.cityLine}}</p>'],

  // Téléphone affiché (toutes les formes dans les data-token)
  ['>06 01 76 13 95</span>',                    '>{{contact.phoneDisplay}}</span>'],
  ['>06 01 76 13 95</p>',                       '>{{contact.phoneDisplay}}</p>'],
  ['>06 01 76 13 95</a>',                       '>{{contact.phoneDisplay}}</a>'],

  // Email affiché
  ['>contact@bp2c.net</a>',                     '>{{contact.email}}</a>'],
  ['>contact@bp2c.net</span>',                  '>{{contact.email}}</span>'],
  ['>contact@bp2c.net</p>',                     '>{{contact.email}}</p>'],

  // SIRET et raison sociale dans data-token
  ['>93409778300013</span>',                    '>{{company.siret}}</span>'],
  ['>BP2C</span>',                              '>{{company.legalName}}</span>'],
];

// ─── Règles spécifiques par fichier ─────────────────────────────────────────

const PAGE_RULES = {

  'index.html': [
    // <title>
    ['<title>BP2C - Plomberie, Chauffage, Climatisation & Rénovation Fréjus | 06 01 76 13 95</title>',
     '<title>{{seo.pages.index.title}}</title>'],
    // meta description
    ['content="BP2C, votre expert certifié à Fréjus. Urgence plomberie 24/7, installation chauffage, climatisation et rénovation de salle de bain. Devis gratuit."',
     'content="{{seo.pages.index.description}}"'],
    // canonical
    ['<link rel="canonical" href="https://www.bp2c.net/">',
     '<link rel="canonical" href="{{seo.pages.index.canonical}}">'],
    // og:title (avec &amp;)
    ['content="BP2C - Plomberie, Chauffage, Climatisation &amp; Rénovation Fréjus | 06 01 76 13 95"',
     'content="{{seo.pages.index.title}}"'],
    // og:url
    ['<meta property="og:url" content="https://www.bp2c.net/">',
     '<meta property="og:url" content="{{seo.pages.index.canonical}}">'],
    // og:image
    ['content="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.index.ogImage}}"'],
    // og:image:alt
    ['content="BP2C - Plomberie, Chauffage, Climatisation et Rénovation à Fréjus"',
     'content="{{seo.pages.index.ogImageAlt}}"'],
    // twitter:title (plus court — sans le numéro)
    ['content="BP2C - Plomberie, Chauffage, Climatisation &amp; Rénovation Fréjus"',
     'content="{{seo.pages.index.twitterTitle}}"'],
    // JSON-LD schema name, url, description
    ['"name": "BP2C",\n    "legalName": "BP2C",\n    "url": "https://www.bp2c.net",',
     '"name": "{{seo.pages.index.schemaName}}",\n    "legalName": "{{company.legalName}}",\n    "url": "{{site.url}}",'],
    ['"description": "Plomberie, chauffage, climatisation et rénovation salle de bain à Fréjus. Urgences 24h/24.",',
     '"description": "{{seo.pages.index.schemaDesc}}",'],
    ['"name": "Services BP2C"',
     '"name": "Services {{company.name}}"'],
  ],

  'chauffage.html': [
    ['<title>Chauffage Fréjus | Installation & Maintenance | BP2C</title>',
     '<title>{{seo.pages.chauffage.title}}</title>'],
    ['content="Expert chauffagiste Fréjus. Installation chaudière, pompe à chaleur, entretien annuel. Confort thermique garanti."',
     'content="{{seo.pages.chauffage.description}}"'],
    ['<link rel="canonical" href="https://www.bp2c.net/chauffage.html">',
     '<link rel="canonical" href="{{seo.pages.chauffage.canonical}}">'],
    ['content="Chauffage Fréjus | Installation &amp; Maintenance | BP2C"',
     'content="{{seo.pages.chauffage.title}}"'],
    ['<meta property="og:url" content="https://www.bp2c.net/chauffage.html">',
     '<meta property="og:url" content="{{seo.pages.chauffage.canonical}}">'],
    ['content="https://images.unsplash.com/photo-1700124084147-995973b6a970?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.chauffage.ogImage}}"'],
    ['content="Installation chauffage par BP2C à Fréjus"',
     'content="{{seo.pages.chauffage.ogImageAlt}}"'],
    ['"name": "BP2C – Chauffage",\n    "url": "https://www.bp2c.net/chauffage.html",',
     '"name": "{{seo.pages.chauffage.schemaName}}",\n    "url": "{{seo.pages.chauffage.canonical}}",'],
    ['"description": "Installation et entretien chaudières, pompes à chaleur et radiateurs à Fréjus. Devis gratuit.",',
     '"description": "{{seo.pages.chauffage.schemaDesc}}",'],
  ],

  'plomberie.html': [
    ['<title>Plomberie Fréjus | Dépannage Urgence 24/7 | BP2C</title>',
     '<title>{{seo.pages.plomberie.title}}</title>'],
    ['content="Plombier Fréjus expert. Intervention urgence 24/7, recherche de fuite, installation sanitaire. Qualité garantie."',
     'content="{{seo.pages.plomberie.description}}"'],
    ['<link rel="canonical" href="https://www.bp2c.net/plomberie.html">',
     '<link rel="canonical" href="{{seo.pages.plomberie.canonical}}">'],
    ['content="Plomberie Fréjus | Dépannage Urgence 24/7 | BP2C"',
     'content="{{seo.pages.plomberie.title}}"'],
    ['<meta property="og:url" content="https://www.bp2c.net/plomberie.html">',
     '<meta property="og:url" content="{{seo.pages.plomberie.canonical}}">'],
    ['content="https://images.unsplash.com/photo-1674913636232-115aa871d14f?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.plomberie.ogImage}}"'],
    ['content="Plombier professionnel BP2C à Fréjus"',
     'content="{{seo.pages.plomberie.ogImageAlt}}"'],
    ['"name": "BP2C – Plomberie",\n    "url": "https://www.bp2c.net/plomberie.html",',
     '"name": "{{seo.pages.plomberie.schemaName}}",\n    "url": "{{seo.pages.plomberie.canonical}}",'],
    ['"description": "Plombier urgence 24/7 à Fréjus. Fuites, débouchage, recherche de fuite, installation sanitaire.",',
     '"description": "{{seo.pages.plomberie.schemaDesc}}",'],
  ],

  'climatisation.html': [
    ['<title>Climatisation Fréjus | Gainable & Split | BP2C</title>',
     '<title>{{seo.pages.climatisation.title}}</title>'],
    ["content=\"Installation de climatisation à Fréjus. Spécialiste du gainable et réversible. Fraîcheur l'été, chaleur l'hiver.\"",
     'content="{{seo.pages.climatisation.description}}"'],
    ['<link rel="canonical" href="https://www.bp2c.net/climatisation.html">',
     '<link rel="canonical" href="{{seo.pages.climatisation.canonical}}">'],
    ['content="Climatisation Fréjus | Gainable &amp; Split | BP2C"',
     'content="{{seo.pages.climatisation.title}}"'],
    ['<meta property="og:url" content="https://www.bp2c.net/climatisation.html">',
     '<meta property="og:url" content="{{seo.pages.climatisation.canonical}}">'],
    ['content="https://images.unsplash.com/photo-1699974783477-74e9ab7546a4?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.climatisation.ogImage}}"'],
    ['content="Installation climatisation gainable BP2C à Fréjus"',
     'content="{{seo.pages.climatisation.ogImageAlt}}"'],
    ['"name": "BP2C – Climatisation",\n    "url": "https://www.bp2c.net/climatisation.html",',
     '"name": "{{seo.pages.climatisation.schemaName}}",\n    "url": "{{seo.pages.climatisation.canonical}}",'],
    ['"description": "Installation climatisation gainable et split à Fréjus. Spécialiste réversible toutes saisons.",',
     '"description": "{{seo.pages.climatisation.schemaDesc}}",'],
  ],

  'renovation.html': [
    ['<title>Rénovation Salle de Bain Fréjus | Design & Travaux | BP2C</title>',
     '<title>{{seo.pages.renovation.title}}</title>'],
    ['content="Rénovation complète de salle de bain à Fréjus. Douche italienne, carrelage, plomberie. Un interlocuteur unique pour votre projet."',
     'content="{{seo.pages.renovation.description}}"'],
    ['<link rel="canonical" href="https://www.bp2c.net/renovation.html">',
     '<link rel="canonical" href="{{seo.pages.renovation.canonical}}">'],
    ['content="Rénovation Salle de Bain Fréjus | Design &amp; Travaux | BP2C"',
     'content="{{seo.pages.renovation.title}}"'],
    ['<meta property="og:url" content="https://www.bp2c.net/renovation.html">',
     '<meta property="og:url" content="{{seo.pages.renovation.canonical}}">'],
    ['content="https://images.unsplash.com/photo-1618836003104-ec6d67239040?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.renovation.ogImage}}"'],
    ['content="Rénovation salle de bain avant/après par BP2C à Fréjus"',
     'content="{{seo.pages.renovation.ogImageAlt}}"'],
    ['"name": "BP2C – Rénovation Salle de Bain",\n    "url": "https://www.bp2c.net/renovation.html",',
     '"name": "{{seo.pages.renovation.schemaName}}",\n    "url": "{{seo.pages.renovation.canonical}}",'],
    ['"description": "Rénovation complète de salle de bain à Fréjus. Conception, carrelage, plomberie, douche italienne. Clé en main.",',
     '"description": "{{seo.pages.renovation.schemaDesc}}",'],
  ],

  'contact.html': [
    ['<title>Contact BP2C | Devis Gratuit & Contact Rapide</title>',
     '<title>{{seo.pages.contact.title}}</title>'],
    ['content="Contactez BP2C à Fréjus pour vos travaux de plomberie et chauffage. Devis gratuit, réponse rapide."',
     'content="{{seo.pages.contact.description}}"'],
    ['<link rel="canonical" href="https://www.bp2c.net/contact.html">',
     '<link rel="canonical" href="{{seo.pages.contact.canonical}}">'],
    ['content="Contact BP2C | Devis Gratuit &amp; Contact Rapide"',
     'content="{{seo.pages.contact.title}}"'],
    ['<meta property="og:url" content="https://www.bp2c.net/contact.html">',
     '<meta property="og:url" content="{{seo.pages.contact.canonical}}">'],
    ['content="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.contact.ogImage}}"'],
    ['content="Contactez BP2C à Fréjus"',
     'content="{{seo.pages.contact.ogImageAlt}}"'],
    // JSON-LD : format différent (ContactPage)
    ['"name": "Contact BP2C",\n    "url": "https://www.bp2c.net/contact.html",',
     '"name": "{{seo.pages.contact.schemaName}}",\n    "url": "{{seo.pages.contact.canonical}}",'],
    ['"description": "Contactez BP2C pour un devis gratuit. Plomberie, chauffage, climatisation, rénovation à Fréjus.",',
     '"description": "{{seo.pages.contact.schemaDesc}}",'],
    // Nested "name": "BP2C" inside the ContactPage schema
    ['"name": "BP2C",\n      "telephone":',
     '"name": "{{company.name}}",\n      "telephone":'],
  ],

  'about.html': [
    ['<title>À propos de BP2C | Votre Artisan de Confiance</title>',
     '<title>{{seo.pages.about.title}}</title>'],
    ['content="Découvrez BP2C, entreprise de plomberie et chauffage à Fréjus dirigée par William. Engagement qualité, expertise et satisfaction client."',
     'content="{{seo.pages.about.description}}"'],
    ['<link rel="canonical" href="https://www.bp2c.net/about.html">',
     '<link rel="canonical" href="{{seo.pages.about.canonical}}">'],
    ['content="À propos de BP2C | Votre Artisan de Confiance"',
     'content="{{seo.pages.about.title}}"'],
    ['<meta property="og:url" content="https://www.bp2c.net/about.html">',
     '<meta property="og:url" content="{{seo.pages.about.canonical}}">'],
    ['content="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.about.ogImage}}"'],
    ['content="William, fondateur de BP2C à Fréjus"',
     'content="{{seo.pages.about.ogImageAlt}}"'],
    ['"name": "BP2C",\n    "url": "https://www.bp2c.net/about.html",',
     '"name": "{{seo.pages.about.schemaName}}",\n    "url": "{{seo.pages.about.canonical}}",'],
    ['"description": "BP2C, artisans certifiés à Fréjus. Plomberie, chauffage, climatisation et rénovation. Fondé par William.",',
     '"description": "{{seo.pages.about.schemaDesc}}",'],
  ],

  'faq.html': [
    ['<title>FAQ | Vos Questions, Nos Réponses - BP2C</title>',
     '<title>{{seo.pages.faq.title}}</title>'],
    ['content="Réponses aux questions fréquentes sur nos services de plomberie, chauffage et climatisation à Fréjus."',
     'content="{{seo.pages.faq.description}}"'],
    ['<link rel="canonical" href="https://www.bp2c.net/faq.html">',
     '<link rel="canonical" href="{{seo.pages.faq.canonical}}">'],
    ['content="FAQ | Vos Questions, Nos Réponses - BP2C"',
     'content="{{seo.pages.faq.title}}"'],
    ['<meta property="og:url" content="https://www.bp2c.net/faq.html">',
     '<meta property="og:url" content="{{seo.pages.faq.canonical}}">'],
    ['content="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80"',
     'content="{{seo.pages.faq.ogImage}}"'],
    ['content="FAQ BP2C - Questions fréquentes plomberie chauffage Fréjus"',
     'content="{{seo.pages.faq.ogImageAlt}}"'],
  ],

  'mentions-legales.html': [
    ['<title>Mentions Légales | BP2C</title>',
     '<title>{{seo.pages.mentionsLegales.title}}</title>'],
    ['content="Mentions légales de BP2C - Informations légales sur notre entreprise de plomberie, chauffage et climatisation à Fréjus."',
     'content="{{seo.pages.mentionsLegales.description}}"'],
    // Prose : domaine dans le texte
    ['www.bp2c.net',                             '{{site.domain}}'],
  ],

  'politique-confidentialite.html': [
    ['<title>Politique de Confidentialité | BP2C</title>',
     '<title>{{seo.pages.politiqueConf.title}}</title>'],
    ['content="Politique de confidentialité et protection des données personnelles de BP2C. Conformité RGPD."',
     'content="{{seo.pages.politiqueConf.description}}"'],
  ],

  '404.html': [
    ['<title>Page introuvable (404) - BP2C</title>',
     '<title>{{seo.pages.notFound.title}}</title>'],
    ['content="Cette page n\'existe pas. Retrouvez nos services de plomberie, chauffage, climatisation et rénovation à Fréjus."',
     'content="{{seo.pages.notFound.description}}"'],
  ],

};

// ─── Exécution ───────────────────────────────────────────────────────────────

log('\n══════════════════════════════════════════════════════');
log(' tokenize.mjs — Migration tokens HTML source');
log('══════════════════════════════════════════════════════\n');

const files = Object.keys(PAGE_RULES);
let totalRewrites = 0;

for (const file of files) {
  log(`→ ${file}`);

  let content;
  try {
    content = read(file);
  } catch {
    console.warn(`  ⚠ Fichier introuvable — ignoré : ${file}`);
    continue;
  }

  const original = content;

  // 1. Appliquer les règles globales
  content = applyRules(content, GLOBAL_RULES, file);

  // 2. Appliquer les règles spécifiques à cette page
  const pageRules = PAGE_RULES[file] ?? [];
  content = applyRules(content, pageRules, file);

  if (content !== original) {
    write(file, content);
    ok(`${file} — réécrit\n`);
    totalRewrites++;
  } else {
    ok(`${file} — inchangé\n`);
  }
}

// ─── Vérification post-migration ─────────────────────────────────────────────
// Chercher les valeurs en dur résiduelles qui auraient dû être tokenisées.

log('══ Vérification résiduelle ══\n');

const RESIDUAL_CHECKS = [
  { pattern: '+33601761395',   label: 'téléphone E.164' },
  { pattern: '06 01 76 13 95', label: 'téléphone affiché' },
  { pattern: 'contact@bp2c.net', label: 'email' },
  { pattern: '93409778300013', label: 'SIRET' },
  { pattern: '160 Rue du Thoron', label: 'adresse rue' },
  // Exclusions : les valeurs sont autorisées DANS les fichiers de config et script
];

const SKIP_FILES = new Set(['config/site.js', 'scripts/tokenize.mjs', 'scripts/build.mjs', 'scripts/check-template.sh', 'README.md']);

let residuals = 0;
for (const file of files) {
  if (SKIP_FILES.has(file)) continue;
  let content;
  try { content = read(file); } catch { continue; }

  for (const { pattern, label } of RESIDUAL_CHECKS) {
    if (content.includes(pattern)) {
      console.warn(`  ⚠ Résiduel [${label}] dans ${file}`);
      residuals++;
    }
  }
}

if (residuals === 0) {
  log('  ✓ Aucune valeur en dur résiduelle détectée\n');
} else {
  log(`  ⚠ ${residuals} occurrence(s) résiduelle(s) — vérifier manuellement\n`);
}

log('══════════════════════════════════════════════════════');
log(` ✅  Migration terminée — ${totalRewrites} fichier(s) réécrit(s)`);
log('══════════════════════════════════════════════════════\n');
log('  Prochaine étape : npm run build');
log('');
