# BP2C — Template Artisan Local

Site statique HTML/CSS/JS pour artisan (plomberie, chauffage, climatisation, rénovation).
Pas de build, pas de framework, pas de dépendances npm.

---

## Clonage pour un nouveau client (~10 min)

### Étape 1 — Copier le dossier

```bash
cp -r BP2C_bis NOM_CLIENT
cd NOM_CLIENT
```

### Étape 2 — Éditer `config/site.js`

C'est la **source de vérité unique** pour toutes les données client visibles dans le body.
Remplir chaque champ :

```js
company: {
  name:        'NOUVEAU_NOM',
  legalName:   'RAISON SOCIALE EXACTE',
  tagline:     "Accroche logo",
  siret:       'SIRET_14_CHIFFRES',
  founder:     'Prénom',
  description: 'Description pour schema.org (1-2 phrases).',
},
contact: {
  phone:        '+33XXXXXXXXX',        // Format E.164
  phoneDisplay: '0X XX XX XX XX',
  email:        'contact@domaine.fr',
  address: {
    street:      'N° Rue',
    city:        'Ville',
    postalCode:  'XXXXX',
    department:  'Département',
    country:     'FR',
    countryName: 'France',
  },
  geo: {
    latitude:  'XX.XXXX',
    longitude: 'X.XXXX',
  },
},
hours: {
  display:   'Lun–Ven 8h–18h',
  emergency: 'Urgences 24h/24 – 7j/7',
  schema:    ['Mo-Fr 08:00-18:00'],
},
serviceArea: ['Ville1', 'Ville2', 'Département'],
social: {
  facebook:  'https://facebook.com/PAGE',
  instagram: 'https://instagram.com/COMPTE',
  linkedin:  'https://linkedin.com/company/NOM',
  google:    'https://share.google/XXXXX',
},
assets: {
  logo:           'https://CDN/logo.jpg',   // Logo header + footer
  favicon:        '/favicon.ico',
  ogImageDefault: 'https://CDN/og.jpg',     // 1200×630
  ogImageWidth:   '1200',
  ogImageHeight:  '630',
},
site: {
  url:    'https://www.domaine.fr',
  name:   'NOM',
  locale: 'fr_FR',
  lang:   'fr',
},
storage: {
  cookieKey:   'CLIENT_cookie_consent',
  contactsKey: 'CLIENT_contacts',
},
pages: {
  index:         { heroImage: '...', ogImage: '...' },
  plomberie:     { heroImage: '...', ogImage: '...' },
  chauffage:     { heroImage: '...', ogImage: '...' },
  climatisation: { heroImage: '...', ogImage: '...' },
  renovation:    { heroImage: '...', ogImage: '...' },
},
```

### Étape 3 — Remplacer les assets

Déposer les fichiers dans `/assets/` :

| Dossier | Contenu |
|---------|---------|
| `assets/images/` | Photos hero par page (1920×1080 min) |
| `assets/og/` | Images Open Graph par page (1200×630 exactement) |
| `assets/favicons/` | favicon.ico, apple-touch-icon.png |
| `assets/icons/` | Icons SVG si overrides |

### Étape 4 — Mettre à jour le HEAD de chaque page HTML

Ces éléments restent **en dur dans le HTML** (stratégie Option A — indexation stable) :

| Élément | Fichier(s) | Quoi modifier |
|---------|-----------|---------------|
| `<title>` | Tous les HTML | Nom client + service + ville |
| `<meta description>` | Tous les HTML | Description courte (~155 car.) |
| `<link rel="canonical">` | Tous les HTML | `https://www.DOMAINE.fr/PAGE.html` |
| `<meta og:title>` | Tous les HTML | Même que `<title>` |
| `<meta og:description>` | Tous les HTML | Même que meta description |
| `<meta og:url>` | Tous les HTML | URL canonique |
| `<meta og:image>` | Tous les HTML | URL image OG 1200×630 |
| `<meta og:image:alt>` | Tous les HTML | Alt texte image OG |
| `<meta twitter:title>` | Tous les HTML | Même que `<title>` |
| `<meta twitter:description>` | Tous les HTML | Même que meta description |
| `<meta twitter:image>` | Tous les HTML | URL image OG |
| `<meta twitter:image:alt>` | Tous les HTML | Alt texte image OG |
| `<link rel="preload">` | Pages hero | URL image hero 1920px |
| JSON-LD `name` | Tous les HTML | Nom + service |
| JSON-LD `url` | Tous les HTML | URL canonique |
| JSON-LD `telephone` | Tous les HTML | Format E.164 |
| JSON-LD `email` | Tous les HTML | Email |
| JSON-LD `address.*` | Tous les HTML | Adresse complète |
| JSON-LD `geo` | Tous les HTML | Coordonnées GPS |
| JSON-LD `areaServed` | Tous les HTML | Villes + département |
| JSON-LD `sameAs` | Tous les HTML | URLs réseaux sociaux |
| JSON-LD `openingHours` | Tous les HTML | Horaires schema.org |
| Image hero `src` + `alt` | Pages hero | URL + alt descriptif |

### Étape 5 — robots.txt + sitemap.xml

- `robots.txt` : remplacer l'URL du sitemap par `https://www.DOMAINE.fr/sitemap.xml`
- `sitemap.xml` : remplacer toutes les URLs `https://www.bp2c.net/` par `https://www.DOMAINE.fr/`
  + Mettre à jour `<lastmod>` à la date du jour

### Étape 6 — Vérifier avec le script

```bash
bash scripts/check-template.sh
```

---

## Structure du projet

```
/
├── config/
│   └── site.js          ← SOURCE DE VÉRITÉ — modifier en premier
├── css/
│   └── style.css
├── js/
│   ├── components.js    ← Header, footer, cookie, injection tokens body
│   └── script.js        ← Interactions page, formulaire contact
├── assets/
│   ├── images/          ← Photos hero (1920px+)
│   ├── og/              ← Images OG (1200×630)
│   ├── favicons/        ← favicon.ico, apple-touch-icon.png
│   └── icons/           ← SVG icons
├── scripts/
│   └── check-template.sh ← Vérification pré-déploiement
├── robots.txt
├── sitemap.xml
└── *.html               ← 10 pages statiques
```

## Architecture — Token body

`components.js` injecte automatiquement depuis `config/site.js` :

| Attribut HTML | Description |
|---------------|-------------|
| `data-tel-cta` | Met à jour `href="tel:..."` des liens téléphone |
| `data-email-cta` | Met à jour `href="mailto:..."` des liens email |
| `data-token="contact.phoneDisplay"` | Affiche le numéro formaté |
| `data-token="contact.email"` | Affiche l'email |
| `data-token="contact.address.street"` | Affiche la rue |
| `data-token="contact.address.cityLine"` | Affiche `CP Ville` |
| `data-token="contact.address.full"` | Affiche `Rue, CP Ville` |
| `data-token="contact.address.fullCountry"` | Affiche `Rue, CP Ville, Pays` |
| `data-token="company.legalName"` | Affiche la raison sociale |
| `data-token="company.siret"` | Affiche le SIRET |
| `data-token="hours.display"` | Affiche les horaires |

---

## Checklist de test — Pré-déploiement

### Responsivité

- [ ] Mobile portrait (375px) — hero, nav, cards, formulaire
- [ ] Mobile paysage (667px) — hero height, CTA visibility
- [ ] Tablette portrait (768px) — grid layout, images
- [ ] Tablette paysage (1024px) — desktop nav visible
- [ ] Desktop (1440px) — espacements, largeur max container

### Navigateurs prioritaires

- [ ] Safari iOS (iPhone physique ou simulateur) — menu mobile, scroll lock, touch events
- [ ] Chrome Android
- [ ] Firefox desktop
- [ ] Safari macOS

### Fonctionnalités

- [ ] Menu mobile : ouverture / fermeture / scroll lock body
- [ ] Formulaire contact : soumission → toast "Message envoyé"
- [ ] Cookie banner : accept / reject → `localStorage` mis à jour
- [ ] Bouton urgence flottant → lien `tel:` fonctionnel
- [ ] Ancres de navigation actives (lien courant surligné)
- [ ] Scroll-reveal animations (IntersectionObserver)
- [ ] Avant/après rénovation : toggle glisser/cliquer

### SEO + technique

- [ ] `<title>` unique par page
- [ ] `<meta description>` ≤ 160 caractères
- [ ] JSON-LD valide : [validator.schema.org](https://validator.schema.org/)
- [ ] OG tags : [opengraph.xyz](https://www.opengraph.xyz/) ou Facebook Sharing Debugger
- [ ] Sitemap accessible : `https://www.DOMAINE.fr/sitemap.xml`
- [ ] robots.txt accessible : `https://www.DOMAINE.fr/robots.txt`
- [ ] Favicon affiché dans l'onglet
- [ ] Pas de mixed content (HTTP dans HTTPS)

### Performance

- [ ] LCP < 2.5s (image hero préchargée avec `fetchpriority="high"`)
- [ ] Pas d'erreurs console JS
- [ ] Fonts Google chargées (Inter)

---

## Ce qui reste hardcodé (intentionnel)

- `<title>`, `<meta description>`, `<canonical>`, JSON-LD → HEAD — stable pour le SEO
- Témoignages, FAQ, portfolio → contenu éditorial statique
- Prose légale dans mentions-légales et politique de confidentialité
- Images `src` des sections portfolio (renovation.html) → à remplacer manuellement

## Aperçu local

```bash
python3 -m http.server 8080
# ou
npx serve .
```

Puis ouvrir `http://localhost:8080`
