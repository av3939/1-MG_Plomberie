/**
 * BP2C — Configuration centrale du site
 * ======================================
 * Toutes les infos client, assets et paramètres de thème sont ici.
 * Modifiez ce fichier pour adapter le site à un nouveau client.
 *
 * Ce fichier est chargé AVANT components.js (sans defer).
 * Il expose window.SITE_CONFIG utilisé par js/components.js.
 */

window.SITE_CONFIG = {

  /* ------------------------------------------------------------------
   * ENTREPRISE
   * ------------------------------------------------------------------ */
  company: {
    name:        'BP2C',                         // Nom affiché partout
    legalName:   'BP2C',                         // Raison sociale exacte
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
    display:   'Lun–Ven 8h–18h',                // Affiché dans le footer/contact
    emergency: 'Urgences 24h/24 – 7j/7',
    // Format schema.org openingHours (tableau de chaînes)
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
    facebook:  '#',   // Remplacer par l'URL réelle
    instagram: '#',
    linkedin:  '#',
    google:    'https://share.google/AuZEaEIZEZyZJYQUI',
  },

  /* ------------------------------------------------------------------
   * ASSETS
   * ------------------------------------------------------------------ */
  assets: {
    // Logo principal (header + footer)
    logo: 'https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg',
    // Favicon (chemin absolu depuis la racine du domaine)
    favicon: '/favicon.ico',
    // Image OG par défaut (utilisée sur les pages sans image spécifique)
    ogImageDefault: 'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1200&q=80',
    ogImageWidth:  '1200',
    ogImageHeight: '630',
  },

  /* ------------------------------------------------------------------
   * SITE
   * ------------------------------------------------------------------ */
  site: {
    url:    'https://www.bp2c.net',
    name:   'BP2C',
    locale: 'fr_FR',
    lang:   'fr',
  },

  /* ------------------------------------------------------------------
   * THÈME (couleurs & typo)
   * Modifiez ici pour changer le thème sans toucher au CSS global.
   * Ces valeurs sont injectées comme variables CSS sur <html> par
   * components.js (si vous activez l'injection de CSS custom props).
   * ------------------------------------------------------------------ */
  theme: {
    colorPrimary:  '#2563eb',   // Bleu principal (boutons, liens actifs)
    colorAccent:   '#ea580c',   // Orange accent (urgences, CTA secondaire)
    colorDark:     '#0f172a',   // Fond sombre (header, footer, sections CTA)
    colorBg:       '#f8fafc',   // Background body général
    colorText:     '#111827',   // Texte principal
    fontFamily:    'Inter',     // Police Google Fonts chargée dans style.css
  },

  /* ------------------------------------------------------------------
   * STOCKAGE (clés localStorage)
   * ------------------------------------------------------------------ */
  storage: {
    cookieKey:   'bp2c_cookie_consent',
    contactsKey: 'bp2c_contacts',
  },

};
