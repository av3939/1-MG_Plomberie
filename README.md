# BP2C — Template Site Vitrine Artisan Local

Template statique **SEO-ready** pour artisan (plomberie, chauffage, climatisation, rénovation).
Architecture HTML/CSS/JS vanilla avec build statique centralisé via `config/site.js`.

---

## Sommaire

1. [Présentation](#1-présentation)
2. [Structure du projet](#2-structure-du-projet)
3. [Configuration client](#3-configuration-client-configsitejs)
4. [Système de tokens](#4-système-de-tokens)
5. [Build & développement](#5-build--développement)
6. [SEO](#6-seo)
7. [Checklist avant déploiement](#7-checklist-avant-déploiement)
8. [Déploiement](#8-déploiement)
9. [Bonnes pratiques](#9-bonnes-pratiques)

---

## 1. Présentation

### Description

Template site vitrine 11 pages pour artisan local. Pas de framework, pas de dépendances inutiles — HTML pur avec un pipeline de build Node.js léger.

**Pages incluses :** accueil, plomberie, chauffage, climatisation, rénovation, contact, à propos, FAQ, mentions légales, politique de confidentialité, 404.

### Objectif

Permettre de paramétrer un nouveau client **en modifiant un seul fichier** (`config/site.js`) et de générer un site statique complet, optimisé SEO, prêt à déployer.

### Architecture

```
Source (racine)  →  build.mjs  →  dist/ (à déployer)
     ↑
config/site.js
```

- **Sources HTML** : contiennent des tokens `{{clé.sous-clé}}` à la place des données client
- **`config/site.js`** : source de vérité unique — toutes les données client
- **`scripts/build.mjs`** : remplace les tokens, injecte le JSON-LD, génère sitemap + robots, écrit `dist/`
- **`dist/`** : output final, seul dossier à déployer (jamais modifier à la main)

---

## 2. Structure du projet

```
/
├── config/
│   └── site.js              ← SOURCE DE VÉRITÉ — modifier en premier
│
├── scripts/
│   ├── build.mjs            ← Build statique (token replacement + génération)
│   ├── tokenize.mjs         ← Migration one-shot (déjà exécuté — ne pas relancer)
│   └── check-template.sh    ← Vérification pré-déploiement
│
├── css/
│   └── style.css            ← Tout le CSS, breakpoint unique 768px
│
├── js/
│   ├── components.js        ← Header, footer, cookie banner, token runtime
│   └── script.js            ← Interactions page, formulaire, FAQ accordion
│
├── assets/
│   ├── images/              ← Photos hero (1920px+)
│   ├── og/                  ← Images Open Graph (1200×630)
│   └── favicons/            ← favicon.ico, apple-touch-icon.png
│
├── dist/                    ← Output build (gitignored — ne jamais modifier)
│
├── *.html                   ← 11 pages sources avec tokens {{...}}
├── package.json
└── README.md
```

### Rôle de chaque dossier

| Dossier / Fichier | Rôle |
|---|---|
| `config/site.js` | Données client : nom, coordonnées, SEO par page, réseaux, thème |
| `scripts/build.mjs` | Pipeline de build : tokens → dist/, sitemap, robots, JSON-LD |
| `js/components.js` | Injection runtime du header/footer + hydratation des `data-token` |
| `js/script.js` | Comportements page : scroll, FAQ, formulaire localStorage |
| `css/style.css` | Styles globaux. Thème contrôlé par variables CSS |
| `dist/` | Site final à déployer. Généré par `npm run build` |

---

## 3. Configuration client (`config/site.js`)

**C'est le seul fichier à modifier pour adapter le site à un nouveau client.**

### `company` — Identité entreprise

```js
company: {
  name:        'BP2C',                 // Nom affiché partout (header, footer, JSON-LD)
  legalName:   'BP2C',                 // Raison sociale exacte (mentions légales, JSON-LD)
  tagline:     "L'excellence de l'habitat", // Sous-titre sous le logo
  siret:       '93409778300013',       // 14 chiffres, affiché dans mentions légales
  founder:     'William',             // Prénom fondateur (page à propos)
  description: 'Expertise…',          // 1-2 phrases pour schema.org
},
```

### `contact` — Coordonnées

```js
contact: {
  phone:        '+33601761395',        // Format E.164 — utilisé dans href="tel:..."
  phoneDisplay: '06 01 76 13 95',      // Format affiché à l'écran
  email:        'contact@bp2c.net',

  address: {
    street:      '160 Rue du Thoron',
    city:        'Fréjus',
    postalCode:  '83600',
    department:  'Var',               // Département (schema.org addressRegion)
    country:     'FR',                // Code ISO
    countryName: 'France',
    // Champs calculés — ne pas modifier manuellement :
    cityLine:    '83600\u00a0Fréjus',
    full:        '160 Rue du Thoron, 83600\u00a0Fréjus',
    fullCountry: '160 Rue du Thoron, 83600\u00a0Fréjus, France',
  },

  geo: {
    latitude:  '43.4334',            // Coordonnées GPS pour schema.org GeoCoordinates
    longitude: '6.7367',
  },
},
```

> **Astuce GPS :** Ouvrir Google Maps → clic droit sur l'adresse → copier les coordonnées.

### `hours` — Horaires

```js
hours: {
  display:   'Lun–Ven 8h–18h',        // Affiché dans le footer et header
  emergency: 'Urgences 24h/24 – 7j/7',
  schema:    ['Mo-Fr 08:00-18:00'],   // Format schema.org (tableau de strings)
},
```

### `serviceArea` — Zone d'intervention

```js
serviceArea: [
  'Fréjus', 'Saint-Raphaël', 'Roquebrune-sur-Argens',
  'Puget-sur-Argens', 'Les Arcs-sur-Argens', 'Var',
],
```

Le build distingue automatiquement les **villes** (`@type: City`) des **départements/régions** (`@type: AdministrativeArea`) dans le JSON-LD généré. Les valeurs reconnues comme départements sont : `Var`, `Alpes-Maritimes`, `Bouches-du-Rhône`, `Vaucluse`, `Gard`.

### `social` — Réseaux sociaux

```js
social: {
  facebook:  'https://facebook.com/PAGE',   // Mettre '#' si inexistant
  instagram: '#',
  linkedin:  '#',
  google:    'https://share.google/XXXXX',  // Lien Google Business
},
```

Les valeurs `'#'` sont automatiquement exclues du JSON-LD `sameAs`.

### `assets` — Images et favicon

```js
assets: {
  logo:           'https://CDN/logo.jpg',       // Logo header et footer
  favicon:        '/favicon.ico',
  ogImageDefault: 'https://CDN/og.jpg',         // Image OG par défaut (1200×630)
  ogImageWidth:   '1200',
  ogImageHeight:  '630',
},
```

### `site` — URL et langue

```js
site: {
  url:    'https://www.domaine.fr',  // Avec protocole — utilisé dans sitemap et JSON-LD
  domain: 'www.domaine.fr',         // Sans protocole — affiché dans mentions légales
  name:   'NOM',
  locale: 'fr_FR',
  lang:   'fr',
},
```

> **Important :** `site.url` sans slash final. Le build ajoute le slash pour `index.html`.

### `seo.pages` — SEO par page

Chaque page HTML a son entrée dédiée. Exemple :

```js
seo: {
  pages: {
    chauffage: {
      title:       'Chauffage à Fréjus – BP2C | Installation & Entretien',
      description: 'Expert chauffagiste Fréjus. Installation chaudière…',
      canonical:   'https://www.bp2c.net/chauffage.html',
      ogImage:     'https://images.unsplash.com/…',
      ogImageAlt:  'Installation chauffage par BP2C à Fréjus',
      schemaName:  'BP2C – Chauffage',
      schemaDesc:  'Installation et entretien chaudières… Devis gratuit.',
    },
    // index, plomberie, climatisation, renovation, contact, about, faq,
    // mentionsLegales, politiqueConf, notFound
  },
},
```

| Clé | Utilisé dans | Limite |
|---|---|---|
| `title` | `<title>`, og:title, twitter:title | < 60 caractères |
| `description` | `<meta description>`, og:description, twitter:description | < 160 caractères |
| `canonical` | `<link rel="canonical">`, og:url | URL absolue |
| `ogImage` | og:image, twitter:image | URL absolue, 1200×630 px |
| `ogImageAlt` | og:image:alt, twitter:image:alt | Texte descriptif |
| `schemaName` | JSON-LD page-specific `name` | — |
| `schemaDesc` | JSON-LD page-specific `description` | — |
| `twitterTitle` | twitter:title uniquement (si différent du title) | Optionnel |

---

## 4. Système de tokens

### Principe

Les fichiers HTML sources contiennent des **tokens** `{{clé.sous-clé}}` à la place des données client. Le build les remplace par les valeurs issues de `config/site.js`.

```html
<!-- Source -->
<title>{{seo.pages.chauffage.title}}</title>
<meta name="description" content="{{seo.pages.chauffage.description}}">

<!-- Après build (dans dist/) -->
<title>Chauffage à Fréjus – BP2C | Installation &amp; Entretien</title>
<meta name="description" content="Expert chauffagiste Fréjus…">
```

### Notation

Les tokens suivent la **notation pointée** de la config aplatie :

```
config.contact.phoneDisplay  →  {{contact.phoneDisplay}}
config.seo.pages.index.title →  {{seo.pages.index.title}}
config.site.url              →  {{site.url}}
```

### Comportement en cas d'erreur

- **Token inconnu** : un warning est émis (`⚠ Token inconnu dans fichier.html : {{clé}}`), le token reste dans la sortie
- **Token non résolu dans dist/** : le build **échoue** avec un message d'erreur explicite — il est impossible de déployer un site contenant des tokens résiduels

### Tokens runtime (JS)

En complément du build statique, `components.js` hydrate à l'exécution les éléments marqués avec des attributs spéciaux :

| Attribut | Effet |
|---|---|
| `data-tel-cta` | Met à jour `href="tel:…"` depuis `SITE_CONFIG.contact.phone` |
| `data-email-cta` | Met à jour `href="mailto:…"` depuis `SITE_CONFIG.contact.email` |
| `data-token="contact.phoneDisplay"` | Injecte le numéro formaté dans le `textContent` |
| `data-token="contact.email"` | Injecte l'email |
| `data-token="contact.address.cityLine"` | Injecte `CP Ville` |
| `data-token="hours.display"` | Injecte les horaires |

---

## 5. Build & développement

### Prérequis

- Node.js ≥ 18

### Commandes

```bash
# Générer dist/ depuis les sources
npm run build

# Prévisualiser le site généré sur http://localhost:8000
npm run preview
```

### Ce que fait `npm run build`

1. Charge et valide `config/site.js`
2. Aplatit la config en table de tokens (107 tokens)
3. Génère le bloc JSON-LD LocalBusiness depuis la config
4. Supprime et recrée `dist/`
5. Traite chaque `.html` : remplace les tokens + injecte le JSON-LD avant `</head>`
6. Copie `css/`, `js/`, `assets/`, `config/` dans `dist/`
7. Génère `dist/sitemap.xml`
8. Génère `dist/robots.txt`
9. Valide : échoue si un token `{{…}}` subsiste dans un fichier HTML

### Différence source / dist

| | Sources (racine) | `dist/` |
|---|---|---|
| Contenu | Tokens `{{…}}` | Valeurs résolues |
| JSON-LD | Partiellement dans HTML | + LocalBusiness auto-généré |
| sitemap.xml | Absent | Généré |
| robots.txt | Absent | Généré |
| Édition | ✅ Toujours ici | ❌ Jamais |
| Déploiement | ❌ | ✅ |

### Développement local (sans build)

Pour travailler sur le design sans passer par le build, servir la racine directement :

```bash
python3 -m http.server 8080
# ou
npx serve .
```

Les tokens `{{…}}` resteront visibles mais le rendu visuel (layout, CSS, JS) est fonctionnel.

---

## 6. SEO

### Modifier un title

Dans `config/site.js`, rubrique `seo.pages` :

```js
chauffage: {
  title: 'Chauffage à Fréjus – BP2C | Installation & Entretien',
  // ...
},
```

Puis rebuilder : `npm run build`. Le `<title>` de `dist/chauffage.html` est mis à jour automatiquement.

### Modifier une meta description

Même emplacement, clé `description` :

```js
chauffage: {
  description: 'Expert chauffagiste Fréjus. Installation chaudière, pompe à chaleur…',
},
```

### Canonicals

Chaque page a sa canonical dans `seo.pages.X.canonical`. Format :

```
https://www.domaine.fr/           ← index uniquement
https://www.domaine.fr/page.html  ← toutes les autres
```

Les pages `mentions-legales.html`, `politique-confidentialite.html` et `404.html` portent `<meta name="robots" content="noindex, follow">` et n'ont pas de canonical ni d'entrée dans le sitemap.

### JSON-LD automatique

À chaque build, un bloc **LocalBusiness** est auto-généré depuis `config/site.js` et injecté dans **toutes les pages** avant `</head>` :

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BP2C",
  "telephone": "+33601761395",
  "address": { "@type": "PostalAddress", "addressLocality": "Fréjus", … },
  "geo": { "@type": "GeoCoordinates", "latitude": "43.4334", … },
  "areaServed": [
    { "@type": "City", "name": "Fréjus" },
    { "@type": "AdministrativeArea", "name": "Var" }
  ],
  "openingHours": ["Mo-Fr 08:00-18:00"],
  "sameAs": ["https://share.google/…"]
}
```

Pour modifier ce JSON-LD, modifier les champs correspondants dans `config/site.js` et rebuilder.

### Sitemap

Généré automatiquement dans `dist/sitemap.xml`. Priorités par page :

| Page | Priorité | Fréquence |
|---|---|---|
| `index.html` | 1.0 | monthly |
| Services (4 pages) | 0.9 | monthly |
| `contact.html` | 0.8 | yearly |
| `faq.html` | 0.7 | monthly |
| `about.html` | 0.6 | yearly |
| Légales (2 pages) | 0.2 | yearly |
| `404.html` | — | exclu |

### robots.txt

Généré dans `dist/robots.txt` :

```
User-agent: *
Allow: /
Disallow: /config/
Sitemap: https://www.domaine.fr/sitemap.xml
```

L'URL du sitemap est construite automatiquement depuis `config.site.url`.

---

## 7. Checklist avant déploiement

### Configuration

- [ ] `company.name` et `company.legalName` corrects
- [ ] `contact.phone` au format E.164 (`+33XXXXXXXXX`)
- [ ] `contact.email` valide
- [ ] `contact.address` complète (rue, ville, code postal, département)
- [ ] `contact.geo` — coordonnées GPS vérifiées
- [ ] `site.url` et `site.domain` pointent vers le bon domaine
- [ ] `serviceArea` contient les bonnes villes et le département
- [ ] `social` — URLs réseaux sociaux valides (ou `'#'` si inexistants)
- [ ] `assets.logo` — URL du logo fonctionnelle
- [ ] `seo.pages` — tous les titles et descriptions remplis

### Build

- [ ] `npm run build` se termine sans erreur ni warning de token
- [ ] `dist/sitemap.xml` généré et accessible
- [ ] `dist/robots.txt` généré et accessible
- [ ] Aucun token `{{…}}` résiduel dans `dist/`

### SEO

- [ ] `<title>` unique par page (< 60 caractères)
- [ ] `<meta description>` ≤ 160 caractères
- [ ] JSON-LD valide : [validator.schema.org](https://validator.schema.org)
- [ ] OG tags vérifiés : [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Sitemap soumis à Google Search Console

### Fonctionnel

- [ ] Menu mobile : ouverture / fermeture / scroll lock
- [ ] Formulaire contact → toast "Message envoyé" → entrée dans `localStorage`
- [ ] Cookie banner : accept / reject → `localStorage` mis à jour
- [ ] Bouton urgence flottant → `tel:` fonctionnel
- [ ] Liens téléphone et email dans header/footer corrects
- [ ] Favicon affiché dans l'onglet

### Performance

- [ ] LCP < 2.5s (image hero préchargée avec `fetchpriority="high"`)
- [ ] Pas d'erreurs console JS
- [ ] Pas de mixed content (HTTP dans HTTPS)

---

## 8. Déploiement

### Principe

**Déployer uniquement le contenu de `dist/`**, jamais les sources.

```bash
npm run build
# Copier dist/ vers le serveur / hébergeur
```

### Hébergement statique

Compatible avec tout hébergeur statique : Netlify, Vercel, GitHub Pages, Hostinger, OVH mutualisé, etc.

Configurer la racine de publication sur `dist/`.

### Vérifications post-déploiement

```
https://www.domaine.fr/sitemap.xml    → doit s'afficher
https://www.domaine.fr/robots.txt     → doit s'afficher
https://www.domaine.fr/favicon.ico    → doit se charger
```

- [Google Rich Results Test](https://search.google.com/test/rich-results) — valider le JSON-LD LocalBusiness
- [Google Search Console](https://search.google.com/search-console) — soumettre le sitemap

---

## 9. Bonnes pratiques

### Contenu

- Titles : **< 60 caractères** (au-delà, tronqué dans les SERPs)
- Meta descriptions : **< 160 caractères**
- `ogImage` : **1200×630 px** exactement
- Images hero : **1920 px de large minimum**, compressées (WebP de préférence)

### Workflow

- **Toujours modifier les sources** (racine), jamais `dist/`
- **Toujours rebuilder** après toute modification de `config/site.js` ou d'un `.html`
- Incrémenter le paramètre de version CSS/JS après modification (`style.css?v=5`) pour invalider le cache navigateur
- Ne jamais relancer `scripts/tokenize.mjs` — script de migration one-shot déjà exécuté

### Adaptation nouveau client

1. Copier le dossier du projet
2. Modifier `config/site.js` (toutes les sections)
3. Remplacer les images dans `assets/`
4. Remplacer le favicon (`/favicon.ico`)
5. Mettre à jour `storage.cookieKey` et `storage.contactsKey` (préfixer avec le nom client)
6. `npm run build`
7. Vérifier avec `bash scripts/check-template.sh`
8. Déployer `dist/`
