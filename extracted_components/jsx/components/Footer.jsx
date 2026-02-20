const Footer = () => {
  const currentYear = (new Date()).getFullYear();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BP2C",
    "image": "https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg",
    "telephone": "+33601761395",
    "email": "contact@bp2c.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "160 Rue du Thoron",
      "addressLocality": "Fréjus",
      "postalCode": "83600",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.4334",
      "longitude": "6.7367"
    },
    "url": "https://www.bp2c.net"
  };
  return <Fragment { children: [
    <Helmet { children: <script { type: "application/ld+json", children: JSON.stringify(structuredData) }
    }, this) }
    }, this),
    <footer { className: "bg-slate-950 text-slate-300 relative overflow-hidden font-sans", children: [
      <div { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 opacity-80" }
      }, this),
      <div { className: "absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" }
      }, this),
      <div { className: "absolute top-[20%] -left-[200px] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" }
      }, this),
      <div { className: "container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12 relative z-10", children: [
        <div { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-16", children: [
          <div { className: "lg:col-span-4 space-y-6 md:space-y-8", children: [
            <Link { to: "/", className: "inline-block", children: <img { src: "https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg", alt: "BP2C Logo", className: "h-12 md:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity", "data-edit-id": "src/components/Footer.jsx:52:17" }
            }, this) }
            }, this),
            <p { className: "text-slate-400 leading-relaxed max-w-sm text-sm md:text-base", "data-edit-id": "src/components/Footer.jsx:58:15", children: "Expertise et passion au service de votre habitat à Fréjus et ses environs. Plomberie, chauffage, climatisation et rénovation de salle de bain par des artisans certifiés." }
            }, this),
            <div { className: "flex flex-col gap-3", children: [
              <div { className: "flex items-center gap-3 text-sm font-medium text-slate-400", children: [
                <ShieldCheck { className: "w-5 h-5 text-green-500" }
                }, this),
                <span { "data-edit-id": "src/components/Footer.jsx:66:19", children: "Garantie Décennale" }
              ] }
              }, this),
              <div { className: "flex items-center gap-3 text-sm font-medium text-slate-400", children: [
                <Clock { className: "w-5 h-5 text-orange-500" }
                }, this),
                <span { "data-edit-id": "src/components/Footer.jsx:70:19", children: "Intervention 7j/7 (Urgences)" }
              ] }
            ] }
            }, this),
            <div { className: "flex items-center gap-4 pt-2", children: [Facebook, Instagram, Linkedin].map((Icon, idx) => <a { href: "#", className: "w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 group", "data-edit-disabled": "true", children: <Icon { className: "w-5 h-5 text-slate-400 group-hover:text-white transition-colors" }
            }, this) }, idx, false, {
            }, this)) }
          ] }
          }, this),
          <div { className: "lg:col-span-3 lg:pl-8", children: [
            <h3 { className: "text-white text-lg font-bold mb-6 md:mb-8 relative inline-block", "data-edit-disabled": "true", children: [
              "Nos Services",
              <span { className: "absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full" }
            ] }
            }, this),
            <ul { className: "space-y-3 md:space-y-4", children: [{
              name: "Plomberie d'urgence",
              path: "/plomberie"
            }, {
              name: "Chauffage & Chaudières",
              path: "/chauffage"
            }, {
              name: "Climatisation Gainable",
              path: "/climatisation"
            }, {
              name: "Rénovation Salle de Bain",
              path: "/renovation"
            }, {
              name: "Recherche de fuite",
              path: "/plomberie"
            }, {
              name: "Entretien annuel",
              path: "/chauffage"
            }].map((item) => <li { children: <Link { to: item.path, className: "group flex items-center text-slate-400 hover:text-white transition-colors text-sm md:text-base", children: [
              <span { className: "w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 scale-0 group-hover:scale-100 transition-transform", "data-edit-id": "src/components/Footer.jsx:100:23" }
              }, this),
              item.name
            ] }
            }, this) }, item.name, false, {
            }, this)) }
          ] }
          }, this),
          <div { className: "lg:col-span-2", children: [
            <h3 { className: "text-white text-lg font-bold mb-6 md:mb-8 relative inline-block", "data-edit-disabled": "true", children: [
              "Entreprise",
              <span { className: "absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full" }
            ] }
            }, this),
            <ul { className: "space-y-3 md:space-y-4", children: [{
              name: "À propos",
              path: "/about"
            }, {
              name: "Contact",
              path: "/contact"
            }, {
              name: "FAQ",
              path: "/faq"
            }, {
              name: "Mentions Légales",
              path: "/mentions-legales"
            }, {
              name: "Confidentialité",
              path: "/politique-confidentialite"
            }].map((item) => <li { children: <Link { to: item.path, className: "group flex items-center text-slate-400 hover:text-white transition-colors text-sm md:text-base", children: item.name }
            }, this) }, item.path, false, {
            }, this)) }
          ] }
          }, this),
          <div { className: "lg:col-span-3", children: [
            <h3 { className: "text-white text-lg font-bold mb-6 md:mb-8 relative inline-block", "data-edit-disabled": "true", children: [
              "Nous Contacter",
              <span { className: "absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full" }
            ] }
            }, this),
            <ul { className: "space-y-6", children: [
              <li { className: "flex items-start gap-4 group", children: [
                <div { className: "w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: <MapPin { className: "w-5 h-5 text-blue-400 group-hover:text-white transition-colors" }
                }, this) }
                }, this),
                <div { children: [
                  <span { className: "text-xs text-slate-500 uppercase tracking-wider font-bold", "data-edit-id": "src/components/Footer.jsx:143:21", children: "Adresse" }
                  }, this),
                  <p { className: "text-slate-300 mt-1 leading-tight text-sm md:text-base", "data-edit-disabled": "true", children: [
                    "160 Rue du Thoron",
                    <br {}
                    }, this),
                    "83600 Fréjus"
                  ] }
                ] }
              ] }
              }, this),
              <li { className: "flex items-start gap-4 group", children: [
                <div { className: "w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: <Phone { className: "w-5 h-5 text-blue-400 group-hover:text-white transition-colors" }
                }, this) }
                }, this),
                <div { children: [
                  <span { className: "text-xs text-slate-500 uppercase tracking-wider font-bold", "data-edit-id": "src/components/Footer.jsx:152:21", children: "Téléphone" }
                  }, this),
                  <p { className: "mt-1", "data-edit-disabled": "true", children: <a { href: "tel:+33601761395", className: "text-base md:text-lg font-bold text-white hover:text-blue-400 transition-colors", children: "06 01 76 13 95" }
                  }, this) }
                ] }
              ] }
              }, this),
              <li { className: "flex items-start gap-4 group", children: [
                <div { className: "w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: <Mail { className: "w-5 h-5 text-blue-400 group-hover:text-white transition-colors" }
                }, this) }
                }, this),
                <div { children: [
                  <span { className: "text-xs text-slate-500 uppercase tracking-wider font-bold", "data-edit-id": "src/components/Footer.jsx:165:21", children: "Email" }
                  }, this),
                  <p { className: "mt-1", "data-edit-disabled": "true", children: <a { href: "mailto:contact@bp2c.net", className: "text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base", children: "contact@bp2c.net" }
                  }, this) }
                ] }
              ] }
            ] }
          ] }
        ] }
        }, this),
        <div { className: "border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500", children: [
          <p { className: "text-center md:text-left", "data-edit-disabled": "true", children: [
            "© ",
            currentYear,
            " BP2C. Tous droits réservés. | SIRET: 93409778300013"
          ] }
          }, this),
          <div { className: "flex gap-6", children: <span { className: "hover:text-slate-300 cursor-default transition-colors", "data-edit-id": "src/components/Footer.jsx:180:15", children: "Artisanat Français 🇫🇷" }
          }, this) }
        ] }
      ] }
    ] }
  ] }
  }, this);
};