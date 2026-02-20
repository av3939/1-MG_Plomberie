const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
    q: "Quel est le délai d'intervention pour une urgence ?",
    a: "Pour les urgences plomberie (fuites importantes, dégâts des eaux), nous intervenons sous 2 heures maximum à Fréjus et ses alentours. Notre service est disponible 24h/24 et 7j/7."
  }, {
    q: "Réalisez-vous des devis gratuits ?",
    a: "Absolument. Tous nos devis sont gratuits et sans engagement. Pour les projets de rénovation ou d'installation (chauffage, clim), nous nous déplaçons systématiquement pour réaliser une étude technique précise."
  }, {
    q: "Quelles marques de matériel installez-vous ?",
    a: "Nous privilégions les marques reconnues pour leur fiabilité et leur performance (Atlantic, Daikin, Mitsubishi, Grohe, etc.). Nous garantissons ainsi la durabilité de vos installations."
  }, {
    q: "La climatisation gainable est-elle bruyante ?",
    a: "Non, c'est l'un de ses principaux avantages. Le moteur est déporté (souvent dans les combles) et l'air circule via des gaines isolées, rendant le système quasiment inaudible dans les pièces de vie."
  }, {
    q: "Gérez-vous l'évacuation des gravats lors d'une rénovation ?",
    a: "Oui, notre prestation de rénovation de salle de bain est 'clé en main'. Nous nous occupons de la protection du chantier, de la démolition et de l'évacuation complète des déchets en déchetterie professionnelle."
  }];
  return <Fragment { children: [
    <Helmet { children: [
      <title { children: "FAQ | Vos Questions, Nos Réponses - BP2C" }
      }, this),
      <meta { name: "description", content: "Réponses aux questions fréquentes sur nos services de plomberie, chauffage et climatisation à Fréjus." }
    ] }
    }, this),
    <div { className: "min-h-screen bg-slate-50 pt-20 pb-12 md:pt-24 md:pb-16", children: <div { className: "container mx-auto px-4 max-w-3xl", children: [
      <div { className: "text-center mb-10 md:mb-16", children: [
        <h1 { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4", "data-edit-id": "src/pages/FAQPage.jsx:43:13", children: "Questions Fréquentes" }
        }, this),
        <p { className: "text-slate-600 text-base md:text-lg", "data-edit-id": "src/pages/FAQPage.jsx:44:13", children: "Tout ce que vous devez savoir avant de commencer vos travaux." }
      ] }
      }, this),
      <div { className: "space-y-4", children: faqs.map((faq, index) => <div { className: "bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
        <button { onClick: () => setOpenIndex(openIndex === index ? -1 : index), className: "w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none", "data-edit-disabled": "true", children: [
          <span { className: `text-base md:text-lg font-bold pr-4 ${openIndex === index ? "text-blue-600" : "text-slate-900"}`, "data-edit-disabled": "true", children: faq.q }
          }, this),
          <span { className: `p-1.5 md:p-2 rounded-full flex-shrink-0 ${openIndex === index ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`, "data-edit-disabled": "true", children: openIndex === index ? <Minus { className: "w-4 h-4 md:w-5 md:h-5" }
          }, this) : <Plus { className: "w-4 h-4 md:w-5 md:h-5" }
          }, this) }
        ] }
        }, this),
        <AnimatePresence { children: openIndex === index && <motion.div { initial: {
          height: 0,
          opacity: 0
        }, animate: {
          height: "auto",
          opacity: 1
        }, exit: {
          height: 0,
          opacity: 0
        }, transition: {
          duration: 0.3
        }, children: <div { className: "px-4 md:px-6 pb-6 pt-0 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4", children: faq.a }
        }, this) }
        }, this) }
      ] }, index, true, {
      }, this)) }
    ] }
    }, this) }
  ] }
  }, this);
};
_s(FAQPage, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");