const PolitiqueConfidentialitePage = () => {
  return <Fragment { children: [
    <Helmet { children: [
      <title { children: "Politique de Confidentialité | BP2C" }
      }, this),
      <meta { name: "description", content: "Politique de confidentialité et protection des données personnelles de BP2C. Conformité RGPD." }
      }, this),
      <link { rel: "canonical", href: "https://www.bp2c.net/politique-confidentialite" }
      }, this),
      <meta { name: "robots", content: "noindex, follow" }
    ] }
    }, this),
    <div { className: "min-h-screen pt-20 bg-gray-50", children: <div { className: "container mx-auto px-4 py-16 max-w-4xl", children: <motion.div { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.8
    }, children: [
      <div { className: "text-center mb-12", children: [
        <Shield { className: "w-20 h-20 mx-auto mb-6 text-blue-600" }
        }, this),
        <h1 { className: "text-5xl font-bold text-gray-900 mb-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:26:15", children: "Politique de Confidentialité" }
        }, this),
        <p { className: "text-xl text-gray-600", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:27:15", children: "Protection de vos données personnelles" }
      ] }
      }, this),
      <div { className: "bg-white rounded-2xl shadow-lg p-8 space-y-8", children: [
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:32:17", children: "Introduction" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:35:17", children: "BP2C accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité a pour but de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016 et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée." }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:44:17", children: "Responsable du traitement" }
          }, this),
          <div { className: "text-gray-700 space-y-2", children: [
            <p { "data-edit-disabled": "true", children: [
              <span { className: "font-semibold", children: "Raison sociale :" }
              }, this),
              " BP2C"
            ] }
            }, this),
            <p { "data-edit-disabled": "true", children: [
              <span { className: "font-semibold", children: "Siège social :" }
              }, this),
              " 160 Rue du Thoron, 83600 Fréjus"
            ] }
            }, this),
            <p { "data-edit-disabled": "true", children: [
              <span { className: "font-semibold", children: "Email :" }
              }, this),
              " ",
              <a { href: "mailto:contact@bp2c.net", className: "text-blue-600 hover:text-orange-500", children: "contact@bp2c.net" }
            ] }
            }, this),
            <p { "data-edit-disabled": "true", children: [
              <span { className: "font-semibold", children: "Téléphone :" }
              }, this),
              " ",
              <a { href: "tel:+33601761395", className: "text-blue-600 hover:text-orange-500", children: "06 01 76 13 95" }
            ] }
          ] }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:56:17", children: "Données collectées" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed mb-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:59:17", children: "Dans le cadre de l'utilisation de notre site web et de nos services, nous sommes amenés à collecter les données personnelles suivantes :" }
          }, this),
          <ul { className: "list-disc list-inside text-gray-700 space-y-2 ml-4", children: [
            <li { children: "Nom et prénom" }
            }, this),
            <li { children: "Adresse email" }
            }, this),
            <li { children: "Numéro de téléphone" }
            }, this),
            <li { children: "Ville de résidence" }
            }, this),
            <li { children: "Informations relatives à votre demande (message, projet)" }
            }, this),
            <li { children: "Données de navigation (cookies, adresse IP, pages visitées)" }
          ] }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:73:17", children: "Finalités du traitement" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed mb-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:76:17", children: "Vos données personnelles sont collectées et traitées pour les finalités suivantes :" }
          }, this),
          <ul { className: "list-disc list-inside text-gray-700 space-y-2 ml-4", children: [
            <li { children: "Répondre à vos demandes de contact et de devis" }
            }, this),
            <li { children: "Assurer le suivi de nos interventions et prestations" }
            }, this),
            <li { children: "Améliorer nos services et notre site web" }
            }, this),
            <li { children: "Vous informer de nos actualités et offres (avec votre consentement)" }
            }, this),
            <li { children: "Respecter nos obligations légales et réglementaires" }
          ] }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:89:17", children: "Base légale du traitement" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:92:17", children: "Le traitement de vos données personnelles repose sur les bases légales suivantes :" }
          }, this),
          <ul { className: "list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4", children: [
            <li { children: "Votre consentement pour l'utilisation de cookies et l'envoi de communications marketing" }
            }, this),
            <li { children: "L'exécution du contrat ou de mesures précontractuelles (devis, prestations)" }
            }, this),
            <li { children: "Le respect d'obligations légales" }
            }, this),
            <li { children: "Notre intérêt légitime à améliorer nos services" }
          ] }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:104:17", children: "Durée de conservation" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:107:17", children: "Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :" }
          }, this),
          <ul { className: "list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4", children: [
            <li { children: "Données de contact et devis : 3 ans à compter du dernier contact" }
            }, this),
            <li { children: "Données relatives aux prestations : durée légale de conservation des documents comptables" }
            }, this),
            <li { children: "Cookies : 13 mois maximum" }
          ] }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:118:17", children: "Destinataires des données" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:121:17", children: "Vos données personnelles sont destinées aux services internes de BP2C. Elles peuvent également être transmises à nos prestataires techniques (hébergement, maintenance du site) qui agissent en tant que sous-traitants et s'engagent à respecter la réglementation en vigueur." }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:129:17", children: "Vos droits" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed mb-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:132:17", children: "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :" }
          }, this),
          <ul { className: "list-disc list-inside text-gray-700 space-y-2 ml-4", children: [
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:136:23", children: "Droit d'accès :" }
              }, this),
              " obtenir une copie de vos données personnelles"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:137:23", children: "Droit de rectification :" }
              }, this),
              " corriger vos données inexactes ou incomplètes"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:138:23", children: "Droit à l'effacement :" }
              }, this),
              " demander la suppression de vos données"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:139:23", children: "Droit d'opposition :" }
              }, this),
              " vous opposer au traitement de vos données"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:140:23", children: "Droit à la limitation :" }
              }, this),
              " demander la limitation du traitement"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:141:23", children: "Droit à la portabilité :" }
              }, this),
              " recevoir vos données dans un format structuré"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:142:23", children: "Droit de retirer votre consentement :" }
              }, this),
              " à tout moment"
            ] }
          ] }
          }, this),
          <p { className: "text-gray-700 leading-relaxed mt-4", "data-edit-disabled": "true", children: [
            "Pour exercer ces droits, vous pouvez nous contacter à l'adresse email :",
            <a { href: "mailto:contact@bp2c.net", className: "text-blue-600 hover:text-orange-500 ml-1", children: "contact@bp2c.net" }
          ] }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:151:17", children: "Cookies" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed mb-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:154:17", children: "Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site. Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite." }
          }, this),
          <p { className: "text-gray-700 leading-relaxed mb-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:158:17", children: "Nous utilisons les types de cookies suivants :" }
          }, this),
          <ul { className: "list-disc list-inside text-gray-700 space-y-2 ml-4", children: [
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:162:23", children: "Cookies essentiels :" }
              }, this),
              " nécessaires au fonctionnement du site"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:163:23", children: "Cookies de performance :" }
              }, this),
              " permettent d'analyser l'utilisation du site pour l'améliorer"
            ] }
            }, this),
            <li { children: [
              <span { className: "font-semibold", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:164:23", children: "Cookies de marketing :" }
              }, this),
              " permettent de vous proposer des publicités pertinentes"
            ] }
          ] }
        ] }
        }, this),
        <section { children: [
          <h2 { className: "text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:169:17", children: "Modification de la politique" }
          }, this),
          <p { className: "text-gray-700 leading-relaxed", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:172:17", children: "BP2C se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Nous vous invitons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications." }
        ] }
        }, this),
        <section { className: "border-t pt-8", children: <p { className: "text-sm text-gray-600", "data-edit-id": "src/pages/PolitiqueConfidentialitePage.jsx:180:17", children: "Dernière mise à jour : Février 2026" }
        }, this) }
      ] }
    ] }
    }, this) }
    }, this) }
  ] }
  }, this);
};