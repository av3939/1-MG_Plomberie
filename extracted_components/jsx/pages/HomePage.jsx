const HomePage = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const services = [{
    icon: Droplets,
    title: "Plomberie d'urgence",
    description: "Interventions rapides 24/7 pour fuites, débouchages et installations sanitaires de toutes marques.",
    link: "/plomberie",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  }, {
    icon: Thermometer,
    title: "Chauffage",
    description: "Installation et maintenance experte de chaudières, pompes à chaleur et radiateurs haute performance.",
    link: "/chauffage",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100"
  }, {
    icon: Wind,
    title: "Climatisation",
    description: "Solutions de climatisation gainable et split pour un confort thermique absolu en toute saison.",
    link: "/climatisation",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100"
  }, {
    icon: Paintbrush,
    title: "Rénovation",
    description: "Transformation complète de salles de bain : conception, carrelage et installation clé en main.",
    link: "/renovation",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100"
  }];
  const testimonials = [{
    name: "Charlotte Brot",
    rating: 5,
    text: "Très professionnel. Installation climatisation gainable de qualité. Sérieux et réactif. Je recommande vivement pour tout projet thermique."
  }, {
    name: "Didier Martinetti",
    rating: 5,
    text: "Intervention pour fuite d'eau en urgence. Je suis très satisfait du travail, technicien ponctuel et professionnel."
  }, {
    name: "Mathieu Echard",
    rating: 5,
    text: "Société très sérieuse. Travail de qualité et chantier propre. Prix correct avec des conseils avisés en amont."
  }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const savedContacts = JSON.parse(localStorage.getItem("bp2c_contacts") || "[]");
    savedContacts.push({
      ...formData,
      date: (new Date()).toISOString()
    });
    localStorage.setItem("bp2c_contacts", JSON.stringify(savedContacts));
    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons dans les plus brefs délais."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  return <Fragment { children: [
    <Helmet { children: [
      <title { children: "BP2C - Plomberie, Chauffage, Climatisation & Rénovation Fréjus | 06 01 76 13 95" }
      }, this),
      <meta { name: "description", content: "BP2C, votre expert certifié à Fréjus. Urgence plomberie 24/7, installation chauffage, climatisation et rénovation de salle de bain. Devis gratuit." }
      }, this),
      <link { rel: "canonical", href: "https://www.bp2c.net/" }
    ] }
    }, this),
    <div { className: "min-h-screen bg-slate-50 font-sans", children: [
      <section { className: "relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20", children: [
        <div { className: "absolute inset-0 z-0", children: [
          <img { src: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89", alt: "Intérieur moderne salle de bain rénovée", className: "w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]", "data-edit-id": "src/pages/HomePage.jsx:99:13" }
          }, this),
          <div { className: "absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" }
        ] }
        }, this),
        <div { className: "container mx-auto px-4 md:px-6 relative z-10", children: <div { className: "max-w-4xl", children: <motion.div { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          ease: "easeOut"
        }, children: [
          <div { className: "inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-4 py-1.5 mb-6 md:mb-8 shadow-xl", children: [
            <span { className: "flex h-2.5 w-2.5 relative", "data-edit-disabled": "true", children: [
              <span { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" }
              }, this),
              <span { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" }
            ] }
            }, this),
            <span { className: "text-orange-50 font-bold text-[10px] md:text-xs tracking-widest uppercase", "data-edit-id": "src/pages/HomePage.jsx:121:19", children: "Disponible 24/7 à Fréjus & environ" }
          ] }
          }, this),
          <h1 { className: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight", "data-edit-disabled": "true", children: [
            "L'excellence ",
            <br {}
            }, this),
            <span { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white", children: "de l'habitat." }
          ] }
          }, this),
          <p { className: "text-lg md:text-2xl text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light", "data-edit-id": "src/pages/HomePage.jsx:131:17", children: "Spécialistes en plomberie, chauffage, climatisation et rénovation. Nous allions savoir-faire artisanal et technologies modernes pour votre confort." }
          }, this),
          <div { className: "flex flex-col sm:flex-row gap-4 md:gap-5", children: [
            <Link { to: "/contact", className: "w-full sm:w-auto", children: <Button { className: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-6 md:py-8 text-lg rounded-full shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1", "data-edit-disabled": "true", children: [
              "Demander un devis",
              <ArrowRight { className: "ml-2 w-5 h-5" }
            ] }
            }, this) }
            }, this),
            <a { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: <Button { className: "w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 md:px-10 py-6 md:py-8 text-lg rounded-full transition-all duration-300 hover:-translate-y-1", "data-edit-disabled": "true", children: [
              <Phone { className: "mr-3 w-5 h-5" }
              }, this),
              "06 01 76 13 95"
            ] }
            }, this) }
          ] }
          }, this),
          <div { className: "mt-12 md:mt-16 flex flex-wrap items-center gap-x-6 md:gap-x-12 gap-y-4 border-t border-white/10 pt-8", children: [{
            icon: ShieldCheck,
            text: "Garantie Décennale",
            color: "text-green-400"
          }, {
            icon: Clock,
            text: "Intervention Rapide",
            color: "text-orange-400"
          }, {
            icon: Award,
            text: "Artisans Certifiés",
            color: "text-blue-400"
          }].map((feat, idx) => <div { className: "flex items-center gap-2 md:gap-3", children: [
            <feat.icon { className: `w-5 h-5 md:w-6 md:h-6 ${feat.color}` }
            }, this),
            <span { className: "text-slate-200 text-sm md:text-base font-medium tracking-wide", "data-edit-disabled": "true", children: feat.text }
          ] }, idx, true, {
          }, this)) }
        ] }
        }, this) }
        }, this) }
      ] }
      }, this),
      <section { className: "py-20 md:py-32 bg-white relative", children: <div { className: "container mx-auto px-4 md:px-6 relative z-10", children: [
        <div { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8", children: [
          <div { className: "max-w-2xl", children: [
            <span { className: "text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/HomePage.jsx:180:17", children: "Nos Domaines d'Expertise" }
            }, this),
            <h2 { className: "text-3xl md:text-5xl font-bold text-slate-900 leading-tight", "data-edit-disabled": "true", children: [
              "Solutions techniques ",
              <br {}
              }, this),
              "haut de gamme"
            ] }
          ] }
          }, this),
          <p { className: "text-slate-600 text-base md:text-lg max-w-md leading-relaxed", "data-edit-id": "src/pages/HomePage.jsx:183:15", children: "Une approche globale de votre confort thermique et sanitaire, avec une exigence de qualité sans compromis." }
        ] }
        }, this),
        <div { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", children: services.map((service, index) => {
          const Icon = service.icon;
          return <motion.div { initial: {
            opacity: 0,
            y: 30
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.5,
            delay: index * 0.1
          }, children: <Link { to: service.link, className: "block h-full group", children: <div { className: `h-full bg-white rounded-3xl md:rounded-[2rem] p-8 md:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 border ${service.border} relative overflow-hidden`, children: [
            <div { className: "absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500" }
            }, this),
            <div { className: `absolute inset-0 bg-gradient-to-br from-white to-${service.color.split("-")[1]}-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500` }
            }, this),
            <div { className: "relative z-10", children: [
              <div { className: `w-16 h-16 md:w-20 md:h-20 rounded-2xl ${service.bg} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`, children: <Icon { className: `w-8 h-8 md:w-10 md:h-10 ${service.color}` }
              }, this) }
              }, this),
              <h3 { className: "text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors", "data-edit-disabled": "true", children: service.title }
              }, this),
              <p { className: "text-slate-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 group-hover:text-slate-700 transition-colors", "data-edit-disabled": "true", children: service.description }
              }, this),
              <div { className: "flex items-center text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-blue-700 transition-colors", children: [
                "En savoir plus",
                <ArrowRight { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" }
              ] }
            ] }
          ] }
          }, this) }
          }, this) }, index, false, {
          }, this);
        }) }
      ] }
      }, this) }
      }, this),
      <section { className: "py-20 md:py-32 bg-slate-50 overflow-hidden", children: <div { className: "container mx-auto px-4 md:px-6", children: [
        <div { className: "text-center max-w-3xl mx-auto mb-12 md:mb-20", children: [
          <span { className: "text-orange-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/HomePage.jsx:234:15", children: "Satisfaction Client" }
          }, this),
          <h2 { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6", "data-edit-id": "src/pages/HomePage.jsx:235:15", children: "L'excellence reconnue" }
          }, this),
          <div { className: "inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100", children: [
            <span { className: "text-2xl md:text-3xl font-bold text-slate-900", "data-edit-id": "src/pages/HomePage.jsx:237:17", children: "5.0" }
            }, this),
            <div { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => <Star { className: "w-4 h-4 md:w-5 md:h-5 fill-orange-400 text-orange-400" }, star, false, {
            }, this)) }
            }, this),
            <span { className: "text-xs md:text-sm font-medium text-slate-500 ml-2", "data-edit-id": "src/pages/HomePage.jsx:241:17", children: "sur Google Avis" }
          ] }
        ] }
        }, this),
        <div { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: testimonials.map((testimonial, index) => <motion.div { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.5,
          delay: index * 0.1
        }, className: "bg-white p-8 md:p-10 rounded-3xl md:rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100/50 hover:shadow-2xl transition-all duration-300", children: [
          <div { className: "flex gap-1 mb-6", children: [1, 2, 3, 4, 5].map((star) => <Star { className: "w-4 h-4 fill-orange-400 text-orange-400" }, star, false, {
          }, this)) }
          }, this),
          <p { className: "text-slate-700 mb-8 italic leading-relaxed text-base md:text-lg", "data-edit-disabled": "true", children: [
            '"',
            testimonial.text,
            '"'
          ] }
          }, this),
          <div { className: "flex items-center border-t border-slate-100 pt-6", children: [
            <div { className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-white text-base md:text-lg mr-4 shadow-md", children: testimonial.name.charAt(0) }
            }, this),
            <div { children: [
              <p { className: "font-bold text-slate-900", "data-edit-disabled": "true", children: testimonial.name }
              }, this),
              <p { className: "text-slate-500 text-xs uppercase tracking-wide font-medium", "data-edit-id": "src/pages/HomePage.jsx:268:23", children: "Client Vérifié" }
            ] }
          ] }
        ] }, index, true, {
        }, this)) }
        }, this),
        <div { className: "mt-12 md:mt-16 text-center", children: <a { href: "https://share.google/AuZEaEIZEZyZJYQUI", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors border-b border-transparent hover:border-blue-600 pb-0.5", "data-edit-disabled": "true", children: [
          <span { children: "Lire tous les avis sur Google" }
          }, this),
          <ArrowRight { className: "w-4 h-4" }
        ] }
        }, this) }
      ] }
      }, this) }
      }, this),
      <section { className: "py-20 md:py-32 bg-slate-900 relative isolate overflow-hidden", children: [
        <div { className: "absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" }
        }, this),
        <div { className: "absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" }
        }, this),
        <div { className: "container mx-auto px-4 md:px-6", children: <div { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
          <div { children: [
            <span { className: "text-blue-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/HomePage.jsx:292:17", children: "Contactez-nous" }
            }, this),
            <h2 { className: "text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight", "data-edit-disabled": "true", children: [
              "Prêt à concrétiser ",
              <br {}
              }, this),
              "votre projet ?"
            ] }
            }, this),
            <p { className: "text-lg md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed max-w-lg", "data-edit-id": "src/pages/HomePage.jsx:294:17", children: "Que ce soit pour une urgence ou une rénovation, notre équipe est à votre écoute. Réponse garantie sous 24h." }
            }, this),
            <div { className: "space-y-6 md:space-y-8", children: [
              <div { className: "flex items-center gap-6 group", children: [
                <div { className: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: <Phone { className: "w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:text-white transition-colors" }
                }, this) }
                }, this),
                <div { children: [
                  <p { className: "text-slate-400 text-sm font-medium uppercase tracking-wider", "data-edit-id": "src/pages/HomePage.jsx:304:23", children: "Par téléphone" }
                  }, this),
                  <p { className: "text-xl md:text-2xl font-bold text-white", "data-edit-id": "src/pages/HomePage.jsx:305:23", children: "06 01 76 13 95" }
                ] }
              ] }
              }, this),
              <div { className: "flex items-center gap-6 group", children: [
                <div { className: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: <Send { className: "w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:text-white transition-colors" }
                }, this) }
                }, this),
                <div { children: [
                  <p { className: "text-slate-400 text-sm font-medium uppercase tracking-wider", "data-edit-id": "src/pages/HomePage.jsx:313:23", children: "Par email" }
                  }, this),
                  <p { className: "text-xl md:text-2xl font-bold text-white break-all", "data-edit-id": "src/pages/HomePage.jsx:314:23", children: "contact@bp2c.net" }
                ] }
              ] }
            ] }
          ] }
          }, this),
          <div { className: "bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-black/20", children: <form { onSubmit: handleSubmit, className: "space-y-4 md:space-y-6", children: [
            <h3 { className: "text-2xl font-bold text-slate-900 mb-6 md:mb-8", "data-edit-id": "src/pages/HomePage.jsx:322:19", children: "Formulaire de contact" }
            }, this),
            <div { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", children: [
              <div { className: "space-y-2", children: [
                <label { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:325:23", children: "Nom" }
                }, this),
                <input { type: "text", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900", placeholder: "Votre nom" }
              ] }
              }, this),
              <div { className: "space-y-2", children: [
                <label { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:329:23", children: "Téléphone" }
                }, this),
                <input { type: "tel", name: "phone", value: formData.phone, onChange: handleChange, required: true, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900", placeholder: "06..." }
              ] }
            ] }
            }, this),
            <div { className: "space-y-2", children: [
              <label { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:334:21", children: "Email" }
              }, this),
              <input { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900", placeholder: "votre@email.com" }
            ] }
            }, this),
            <div { className: "space-y-2", children: [
              <label { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:338:21", children: "Message" }
              }, this),
              <textarea { name: "message", value: formData.message, onChange: handleChange, required: true, rows: 4, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 resize-none", placeholder: "Comment pouvons-nous vous aider ?" }
            ] }
            }, this),
            <Button { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 md:py-5 text-lg rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]", "data-edit-id": "src/pages/HomePage.jsx:341:19", children: "Envoyer ma demande" }
          ] }
          }, this) }
        ] }
        }, this) }
      ] }
    ] }
  ] }
  }, this);
};
_s(HomePage, "C+wM3CmP2JGYWXNZDcybN+p6l/w=", false, function() {
  return [useToast];
});