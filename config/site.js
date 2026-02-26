/**
 * BP2C — Configuration centrale du site
 * ======================================
 * Toutes les infos client, assets, SEO par page et paramètres de thème.
 * Modifiez CE fichier pour adapter le site à un nouveau client.
 *
 * Ce fichier est chargé AVANT components.js (sans defer).
 * Il expose window.SITE_CONFIG utilisé par :
 *   - js/components.js  (header / footer / tokens runtime)
 *   - scripts/build.mjs (tokens {{...}} dans les HTML sources)
 */

window.SITE_CONFIG = {

  /* ------------------------------------------------------------------
   * ENTREPRISE
   * ------------------------------------------------------------------ */
  company: {
    name:        'BP2C',                        // Nom affiché partout
    legalName:   'BP2C',                        // Raison sociale exacte
    tagline:     "L'excellence de l'habitat",   // Sous-titre logo
    siret:       '93409778300013',
    founder:     'William',
    description: 'Expertise et passion au service de votre habitat à Fréjus et ses environs. Plomberie, chauffage, climatisation et rénovation de salle de bain par des artisans certifiés.',
  },

  /* ------------------------------------------------------------------
   * COORDONNÉES
   * ------------------------------------------------------------------ */
  contact: {
    phone:        '+33601761395',               // Format E.164 (liens tel:)
    phoneDisplay: '06 01 76 13 95',             // Format affiché
    email:        'contact@bp2c.net',
    address: {
      street:      '160 Rue du Thoron',
      city:        'Fréjus',
      postalCode:  '83600',
      department:  'Var',
      country:     'FR',
      countryName: 'France',
      // Champs calculés — miroir de hydrateClientTokens dans components.js
      // Utilisés par les tokens de build {{contact.address.*}} ET le runtime JS.
      cityLine:    '83600\u00a0Fréjus',
      full:        '160 Rue du Thoron, 83600\u00a0Fréjus',
      fullCountry: '160 Rue du Thoron, 83600\u00a0Fréjus, France',
    },
    geo: {
      latitude:  '43.4334',
      longitude: '6.7367',
    },
  },

  /* ------------------------------------------------------------------
   * HORAIRES
   * ------------------------------------------------------------------ */
  hours: {
    display:   'Lun–Ven 8h–18h',
    emergency: 'Urgences 24h/24 – 7j/7',
    schema: ['Mo-Fr 08:00-18:00'],
  },

  /* ------------------------------------------------------------------
   * ZONE D'INTERVENTION
   * ------------------------------------------------------------------ */
  serviceArea: [
    'Fréjus', 'Saint-Raphaël', 'Roquebrune-sur-Argens',
    'Puget-sur-Argens', 'Les Arcs-sur-Argens', 'Var',
  ],

  /* ------------------------------------------------------------------
   * RÉSEAUX SOCIAUX
   * ------------------------------------------------------------------ */
  social: {
    facebook:  '#',
    instagram: '#',
    linkedin:  '#',
    google:    'https://share.google/AuZEaEIZEZyZJYQUI',
  },

  /* ------------------------------------------------------------------
   * ASSETS
   * ------------------------------------------------------------------ */
  assets: {
    logo:           'https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg',
    favicon:        '/favicon.ico',
    ogImageDefault: 'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
    ogImageWidth:   '1200',
    ogImageHeight:  '630',
  },

  /* ------------------------------------------------------------------
   * SITE
   * ------------------------------------------------------------------ */
  site: {
    url:    'https://www.bp2c.net',
    domain: 'www.bp2c.net',               // Sans protocole — usage dans les textes légaux
    name:   'BP2C',
    locale: 'fr_FR',
    lang:   'fr',
  },

  /* ------------------------------------------------------------------
   * THÈME (couleurs & typo)
   * ------------------------------------------------------------------ */
  theme: {
    colorPrimary: '#2563eb',
    colorAccent:  '#ea580c',
    colorDark:    '#0f172a',
    colorBg:      '#f8fafc',
    colorText:    '#111827',
    fontFamily:   'Inter',
  },

  /* ------------------------------------------------------------------
   * STOCKAGE (clés localStorage)
   * ------------------------------------------------------------------ */
  storage: {
    cookieKey:   'bp2c_cookie_consent',
    contactsKey: 'bp2c_contacts',
  },

  /* ------------------------------------------------------------------
   * SEO PAR PAGE
   * Chaque clé correspond à un fichier HTML.
   *
   * Tokens de build disponibles (ex. pour index) :
   *   {{seo.pages.index.title}}        → <title> et og:title
   *   {{seo.pages.index.twitterTitle}} → twitter:title (si ≠ title)
   *   {{seo.pages.index.description}}  → meta desc, og:desc, twitter:desc
   *   {{seo.pages.index.canonical}}    → <link canonical>, og:url, schema url
   *   {{seo.pages.index.ogImage}}      → og:image et twitter:image
   *   {{seo.pages.index.ogImageAlt}}   → og:image:alt et twitter:image:alt
   *   {{seo.pages.index.schemaName}}   → JSON-LD "name"
   *   {{seo.pages.index.schemaDesc}}   → JSON-LD "description"
   * ------------------------------------------------------------------ */
  seo: {
    pages: {

      index: {
        title:        'BP2C – Plomberie, Chauffage, Climatisation &amp; Rénovation à Fréjus',
        twitterTitle: 'BP2C – Plomberie, Chauffage, Climatisation &amp; Rénovation à Fréjus',
        description:  'BP2C, votre expert certifié à Fréjus. Urgence plomberie 24/7, installation chauffage, climatisation et rénovation de salle de bain. Devis gratuit.',
        canonical:    'https://www.bp2c.net/',
        ogImage:      'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:   'BP2C - Plomberie, Chauffage, Climatisation et Rénovation à Fréjus',
        schemaName:   'BP2C',
        schemaDesc:   'Plomberie, chauffage, climatisation et rénovation salle de bain à Fréjus. Urgences 24h/24.',
      },

      chauffage: {
        title:       'Chauffage à Fréjus – BP2C | Installation &amp; Entretien',
        description: 'Expert chauffagiste Fréjus. Installation chaudière, pompe à chaleur, entretien annuel. Confort thermique garanti.',
        canonical:   'https://www.bp2c.net/chauffage.html',
        ogImage:     'https://images.unsplash.com/photo-1700124084147-995973b6a970?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Installation chauffage par BP2C à Fréjus',
        schemaName:  'BP2C \u2013 Chauffage',
        schemaDesc:  'Installation et entretien chaudières, pompes à chaleur et radiateurs à Fréjus. Devis gratuit.',
      },

      plomberie: {
        title:       'Plomberie à Fréjus – BP2C | Urgence 24h/7j',
        description: 'Plombier Fréjus expert. Intervention urgence 24/7, recherche de fuite, installation sanitaire. Qualité garantie.',
        canonical:   'https://www.bp2c.net/plomberie.html',
        ogImage:     'https://images.unsplash.com/photo-1674913636232-115aa871d14f?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Plombier professionnel BP2C à Fréjus',
        schemaName:  'BP2C \u2013 Plomberie',
        schemaDesc:  'Plombier urgence 24/7 à Fréjus. Fuites, débouchage, recherche de fuite, installation sanitaire.',
      },

      climatisation: {
        title:       'Climatisation à Fréjus – BP2C | Gainable &amp; Split',
        description: "Installation de climatisation à Fréjus. Spécialiste du gainable et réversible. Fraîcheur l'été, chaleur l'hiver.",
        canonical:   'https://www.bp2c.net/climatisation.html',
        ogImage:     'https://images.unsplash.com/photo-1699974783477-74e9ab7546a4?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Installation climatisation gainable BP2C à Fréjus',
        schemaName:  'BP2C \u2013 Climatisation',
        schemaDesc:  'Installation climatisation gainable et split à Fréjus. Spécialiste réversible toutes saisons.',
      },

      renovation: {
        title:       'Rénovation Salle de Bain à Fréjus – BP2C',
        description: 'Rénovation complète de salle de bain à Fréjus. Douche italienne, carrelage, plomberie. Un interlocuteur unique pour votre projet.',
        canonical:   'https://www.bp2c.net/renovation.html',
        ogImage:     'https://images.unsplash.com/photo-1618836003104-ec6d67239040?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Rénovation salle de bain avant/après par BP2C à Fréjus',
        schemaName:  'BP2C \u2013 R\u00e9novation Salle de Bain',
        schemaDesc:  'Rénovation complète de salle de bain à Fréjus. Conception, carrelage, plomberie, douche italienne. Clé en main.',
      },

      contact: {
        title:       'Contact BP2C à Fréjus | Devis Gratuit',
        description: 'Contactez BP2C à Fréjus pour vos travaux de plomberie et chauffage. Devis gratuit, réponse rapide.',
        canonical:   'https://www.bp2c.net/contact.html',
        ogImage:     'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Contactez BP2C à Fréjus',
        schemaName:  'Contact BP2C',
        schemaDesc:  'Contactez BP2C pour un devis gratuit. Plomberie, chauffage, climatisation, rénovation à Fréjus.',
      },

      about: {
        title:       'À propos de BP2C – Votre Artisan à Fréjus',
        description: 'Découvrez BP2C, entreprise de plomberie et chauffage à Fréjus dirigée par William. Engagement qualité, expertise et satisfaction client.',
        canonical:   'https://www.bp2c.net/about.html',
        ogImage:     'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'William, fondateur de BP2C à Fréjus',
        schemaName:  'BP2C',
        schemaDesc:  'BP2C, artisans certifiés à Fréjus. Plomberie, chauffage, climatisation et rénovation. Fondé par William.',
      },

      faq: {
        title:       'FAQ – BP2C | Plomberie, Chauffage à Fréjus',
        description: 'Réponses aux questions fréquentes sur nos services de plomberie, chauffage et climatisation à Fréjus.',
        canonical:   'https://www.bp2c.net/faq.html',
        ogImage:     'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'FAQ BP2C - Questions fréquentes plomberie chauffage Fréjus',
      },

      mentionsLegales: {
        title:       'Mentions Légales – BP2C',
        description: 'Mentions légales de BP2C - Informations légales sur notre entreprise de plomberie, chauffage et climatisation à Fréjus.',
      },

      politiqueConf: {
        title:       'Politique de Confidentialité – BP2C',
        description: 'Politique de confidentialité et protection des données personnelles de BP2C. Conformité RGPD.',
      },

      notFound: {
        title:       'Page introuvable (404) – BP2C',
        description: "Cette page n'existe pas. Retrouvez nos services de plomberie, chauffage, climatisation et rénovation à Fréjus.",
      },

    },
  },

};
