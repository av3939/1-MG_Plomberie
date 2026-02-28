/**
 * Template Artisan — Configuration centrale du site
 * ==================================================
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
    name:        'MG Plomberie',                  // Nom affiché partout
    legalName:   'MG Plomberie SARL',             // Raison sociale exacte
    tagline:     "Votre artisan de confiance",          // Sous-titre logo
    siret:       '51098492500048',
    founder:     'Gregory',
    description: 'Artisan qualifié au service de votre habitat. Plomberie, chauffage, climatisation et rénovation par des professionnels certifiés.',
  },

  /* ------------------------------------------------------------------
   * COORDONNÉES
   * ------------------------------------------------------------------ */
  contact: {
    phone:        '+33123456789',               // Format E.164 (liens tel:)
    phoneDisplay: '01 23 45 67 89',             // Format affiché
    email:        'messaoudgregory@live.fr',
    address: {
      street:      '',
      city:        'Paris',
      postalCode:  '75000',
      department:  'Ile de France',
      country:     'FR',
      countryName: 'France',
      // Champs calculés — miroir de hydrateClientTokens dans components.js
      // Utilisés par les tokens de build {{contact.address.*}} ET le runtime JS.
      cityLine:    '75000\u00a0Paris',
      full:        '75000\u00a0Paris',
      fullCountry: '75000\u00a0Paris, France',
    },
    geo: {
      latitude:  '48.8566',
      longitude: '2.3522',
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
    'Ville Exemple', 'Commune 1', 'Commune 2',
  ],

  /* ------------------------------------------------------------------
   * RÉSEAUX SOCIAUX
   * ------------------------------------------------------------------ */
  social: {
    facebook:  '#',
    instagram: '#',
    linkedin:  '#',
    google:    '#',
  },

  /* ------------------------------------------------------------------
   * ASSETS
   * ------------------------------------------------------------------ */
  assets: {
    logo:           '/assets/images/logo.png',
    favicon:        '/favicon.ico',
    ogImageDefault: 'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
    ogImageWidth:   '1200',
    ogImageHeight:  '630',
  },

  /* ------------------------------------------------------------------
   * SITE
   * ------------------------------------------------------------------ */
  site: {
    url:    'https://example.fr',
    domain: 'example.fr',               // Sans protocole — usage dans les textes légaux
    name:   'Entreprise Exemple',
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
    cookieKey:   'site_cookie_consent',
    contactsKey: 'site_contacts',
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
        title:        'Entreprise Exemple – Plomberie, Chauffage, Climatisation &amp; Rénovation',
        twitterTitle: 'Entreprise Exemple – Plomberie, Chauffage, Climatisation &amp; Rénovation',
        description:  'Entreprise Exemple, votre expert certifié. Urgence plomberie 24/7, installation chauffage, climatisation et rénovation de salle de bain. Devis gratuit.',
        canonical:    'https://example.fr/',
        ogImage:      'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:   'Entreprise Exemple - Plomberie, Chauffage, Climatisation et Rénovation',
        schemaName:   'Entreprise Exemple',
        schemaDesc:   'Plomberie, chauffage, climatisation et rénovation salle de bain. Urgences 24h/24.',
      },

      chauffage: {
        title:       'Chauffage – Entreprise Exemple | Installation &amp; Entretien',
        description: 'Expert chauffagiste. Installation chaudière, pompe à chaleur, entretien annuel. Confort thermique garanti.',
        canonical:   'https://example.fr/chauffage.html',
        ogImage:     'https://images.unsplash.com/photo-1700124084147-995973b6a970?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Installation chauffage par Entreprise Exemple',
        schemaName:  'Entreprise Exemple \u2013 Chauffage',
        schemaDesc:  'Installation et entretien chaudières, pompes à chaleur et radiateurs. Devis gratuit.',
      },

      plomberie: {
        title:       'Plomberie – Entreprise Exemple | Urgence 24h/7j',
        description: 'Plombier expert. Intervention urgence 24/7, recherche de fuite, installation sanitaire. Qualité garantie.',
        canonical:   'https://example.fr/plomberie.html',
        ogImage:     'https://images.unsplash.com/photo-1674913636232-115aa871d14f?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Plombier professionnel Entreprise Exemple',
        schemaName:  'Entreprise Exemple \u2013 Plomberie',
        schemaDesc:  'Plombier urgence 24/7. Fuites, débouchage, recherche de fuite, installation sanitaire.',
      },

      climatisation: {
        title:       'Climatisation – Entreprise Exemple | Gainable &amp; Split',
        description: "Installation de climatisation. Spécialiste du gainable et réversible. Fraîcheur l'été, chaleur l'hiver.",
        canonical:   'https://example.fr/climatisation.html',
        ogImage:     'https://images.unsplash.com/photo-1699974783477-74e9ab7546a4?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Installation climatisation gainable Entreprise Exemple',
        schemaName:  'Entreprise Exemple \u2013 Climatisation',
        schemaDesc:  'Installation climatisation gainable et split. Spécialiste réversible toutes saisons.',
      },

      rechercheFuite: {
        title:       'Recherche de Fuite – Entreprise Exemple | Sans Destruction',
        description: 'Détection de fuite professionnelle sans casse. Écoute acoustique, caméra thermique, gaz traceur. Localisation précise garantie, rapport pour assurance.',
        canonical:   'https://example.fr/recherche-de-fuite.html',
        ogImage:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Technicien recherche de fuite Entreprise Exemple',
        schemaName:  'Entreprise Exemple \u2013 Recherche de Fuite',
        schemaDesc:  'Recherche de fuite non destructive. Écoute acoustique, thermique et gaz traceur. Localisation ±5 cm, rapport assurance.',
      },

      renovation: {
        title:       'Rénovation Salle de Bain – Entreprise Exemple',
        description: 'Rénovation complète de salle de bain. Douche italienne, carrelage, plomberie. Un interlocuteur unique pour votre projet.',
        canonical:   'https://example.fr/renovation.html',
        ogImage:     'https://images.unsplash.com/photo-1618836003104-ec6d67239040?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Rénovation salle de bain avant/après par Entreprise Exemple',
        schemaName:  'Entreprise Exemple \u2013 R\u00e9novation Salle de Bain',
        schemaDesc:  'Rénovation complète de salle de bain. Conception, carrelage, plomberie, douche italienne. Clé en main.',
      },

      contact: {
        title:       'Contact Entreprise Exemple | Devis Gratuit',
        description: 'Contactez Entreprise Exemple pour vos travaux de plomberie et chauffage. Devis gratuit, réponse rapide.',
        canonical:   'https://example.fr/contact.html',
        ogImage:     'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Contactez Entreprise Exemple',
        schemaName:  'Contact Entreprise Exemple',
        schemaDesc:  'Contactez Entreprise Exemple pour un devis gratuit. Plomberie, chauffage, climatisation, rénovation.',
      },

      about: {
        title:       'À propos – Entreprise Exemple | Votre Artisan',
        description: 'Découvrez Entreprise Exemple, artisan qualifié en plomberie et chauffage. Engagement qualité, expertise et satisfaction client.',
        canonical:   'https://example.fr/about.html',
        ogImage:     'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'Fondateur de Entreprise Exemple',
        schemaName:  'Entreprise Exemple',
        schemaDesc:  'Artisans certifiés. Plomberie, chauffage, climatisation et rénovation.',
      },

      faq: {
        title:       'FAQ – Entreprise Exemple | Plomberie, Chauffage',
        description: 'Réponses aux questions fréquentes sur nos services de plomberie, chauffage et climatisation.',
        canonical:   'https://example.fr/faq.html',
        ogImage:     'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
        ogImageAlt:  'FAQ Entreprise Exemple - Questions fréquentes plomberie chauffage',
      },

      mentionsLegales: {
        title:       'Mentions Légales – Entreprise Exemple',
        description: 'Mentions légales de Entreprise Exemple - Informations légales sur notre entreprise de plomberie et chauffage.',
      },

      politiqueConf: {
        title:       'Politique de Confidentialité – Entreprise Exemple',
        description: 'Politique de confidentialité et protection des données personnelles de Entreprise Exemple. Conformité RGPD.',
      },

      notFound: {
        title:       'Page introuvable (404) – Entreprise Exemple',
        description: "Cette page n'existe pas. Retrouvez nos services de plomberie, chauffage, climatisation et rénovation.",
      },

    },
  },

};
