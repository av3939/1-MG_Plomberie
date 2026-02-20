const HomePage = () => {
  _s();
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
      date: (/* @__PURE__ */ new Date()).toISOString()
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
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "BP2C - Plomberie, Chauffage, Climatisation & Rénovation Fréjus | 06 01 76 13 95" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "BP2C, votre expert certifié à Fréjus. Urgence plomberie 24/7, installation chauffage, climatisation et rénovation de salle de bain. Devis gratuit." }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://www.bp2c.net/" }, void 0, false, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-50 font-sans", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
          /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89", alt: "Intérieur moderne salle de bain rénovée", className: "w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]", "data-edit-id": "src/pages/HomePage.jsx:99:13" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl", children: /* @__PURE__ */ jsxDEV(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          ease: "easeOut"
        }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-4 py-1.5 mb-6 md:mb-8 shadow-xl", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "flex h-2.5 w-2.5 relative", "data-edit-disabled": "true", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-orange-50 font-bold text-[10px] md:text-xs tracking-widest uppercase", "data-edit-id": "src/pages/HomePage.jsx:121:19", children: "Disponible 24/7 à Fréjus & environ" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight", "data-edit-disabled": "true", children: [
            "L'excellence ",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white", children: "de l'habitat." }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-2xl text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light", "data-edit-id": "src/pages/HomePage.jsx:131:17", children: "Spécialistes en plomberie, chauffage, climatisation et rénovation. Nous allions savoir-faire artisanal et technologies modernes pour votre confort." }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 md:gap-5", children: [
            /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-6 md:py-8 text-lg rounded-full shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1", "data-edit-disabled": "true", children: [
              "Demander un devis",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
            ] }, void 0, true, {
            }, this) }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 md:px-10 py-6 md:py-8 text-lg rounded-full transition-all duration-300 hover:-translate-y-1", "data-edit-disabled": "true", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "mr-3 w-5 h-5" }, void 0, false, {
              }, this),
              "06 01 76 13 95"
            ] }, void 0, true, {
            }, this) }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-12 md:mt-16 flex flex-wrap items-center gap-x-6 md:gap-x-12 gap-y-4 border-t border-white/10 pt-8", children: [{
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
          }].map((feat, idx) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsxDEV(feat.icon, { className: `w-5 h-5 md:w-6 md:h-6 ${feat.color}` }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-200 text-sm md:text-base font-medium tracking-wide", "data-edit-disabled": "true", children: feat.text }, void 0, false, {
          ] }, idx, true, {
          }, this)) }, void 0, false, {
        ] }, void 0, true, {
        }, this) }, void 0, false, {
        }, this) }, void 0, false, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 md:py-32 bg-white relative", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/HomePage.jsx:180:17", children: "Nos Domaines d'Expertise" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 leading-tight", "data-edit-disabled": "true", children: [
              "Solutions techniques ",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              }, this),
              "haut de gamme"
            ] }, void 0, true, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-base md:text-lg max-w-md leading-relaxed", "data-edit-id": "src/pages/HomePage.jsx:183:15", children: "Une approche globale de votre confort thermique et sanitaire, avec une exigence de qualité sans compromis." }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", children: services.map((service, index) => {
          const Icon = service.icon;
          return /* @__PURE__ */ jsxDEV(motion.div, { initial: {
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
          }, children: /* @__PURE__ */ jsxDEV(Link, { to: service.link, className: "block h-full group", children: /* @__PURE__ */ jsxDEV("div", { className: `h-full bg-white rounded-3xl md:rounded-[2rem] p-8 md:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 border ${service.border} relative overflow-hidden`, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: `absolute inset-0 bg-gradient-to-br from-white to-${service.color.split("-")[1]}-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500` }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxDEV("div", { className: `w-16 h-16 md:w-20 md:h-20 rounded-2xl ${service.bg} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`, children: /* @__PURE__ */ jsxDEV(Icon, { className: `w-8 h-8 md:w-10 md:h-10 ${service.color}` }, void 0, false, {
              }, this) }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors", "data-edit-disabled": "true", children: service.title }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 group-hover:text-slate-700 transition-colors", "data-edit-disabled": "true", children: service.description }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-blue-700 transition-colors", children: [
                "En savoir plus",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
          ] }, void 0, true, {
          }, this) }, void 0, false, {
          }, this) }, index, false, {
          }, this);
        }) }, void 0, false, {
      ] }, void 0, true, {
      }, this) }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 md:py-32 bg-slate-50 overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-12 md:mb-20", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-orange-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/HomePage.jsx:234:15", children: "Satisfaction Client" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6", "data-edit-id": "src/pages/HomePage.jsx:235:15", children: "L'excellence reconnue" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-2xl md:text-3xl font-bold text-slate-900", "data-edit-id": "src/pages/HomePage.jsx:237:17", children: "5.0" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 md:w-5 md:h-5 fill-orange-400 text-orange-400" }, star, false, {
            }, this)) }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs md:text-sm font-medium text-slate-500 ml-2", "data-edit-id": "src/pages/HomePage.jsx:241:17", children: "sur Google Avis" }, void 0, false, {
          ] }, void 0, true, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxDEV(motion.div, { initial: {
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
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1 mb-6", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-orange-400 text-orange-400" }, star, false, {
          }, this)) }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-700 mb-8 italic leading-relaxed text-base md:text-lg", "data-edit-disabled": "true", children: [
            '"',
            testimonial.text,
            '"'
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center border-t border-slate-100 pt-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-white text-base md:text-lg mr-4 shadow-md", children: testimonial.name.charAt(0) }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-slate-900", "data-edit-disabled": "true", children: testimonial.name }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 text-xs uppercase tracking-wide font-medium", "data-edit-id": "src/pages/HomePage.jsx:268:23", children: "Client Vérifié" }, void 0, false, {
            ] }, void 0, true, {
          ] }, void 0, true, {
        ] }, index, true, {
        }, this)) }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-12 md:mt-16 text-center", children: /* @__PURE__ */ jsxDEV("a", { href: "https://share.google/AuZEaEIZEZyZJYQUI", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors border-b border-transparent hover:border-blue-600 pb-0.5", "data-edit-disabled": "true", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "Lire tous les avis sur Google" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
        ] }, void 0, true, {
        }, this) }, void 0, false, {
      ] }, void 0, true, {
      }, this) }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 md:py-32 bg-slate-900 relative isolate overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-blue-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/HomePage.jsx:292:17", children: "Contactez-nous" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight", "data-edit-disabled": "true", children: [
              "Prêt à concrétiser ",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              }, this),
              "votre projet ?"
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed max-w-lg", "data-edit-id": "src/pages/HomePage.jsx:294:17", children: "Que ce soit pour une urgence ou une rénovation, notre équipe est à votre écoute. Réponse garantie sous 24h." }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 md:space-y-8", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6 group", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:text-white transition-colors" }, void 0, false, {
                }, this) }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 text-sm font-medium uppercase tracking-wider", "data-edit-id": "src/pages/HomePage.jsx:304:23", children: "Par téléphone" }, void 0, false, {
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl font-bold text-white", "data-edit-id": "src/pages/HomePage.jsx:305:23", children: "06 01 76 13 95" }, void 0, false, {
                ] }, void 0, true, {
              ] }, void 0, true, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6 group", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: /* @__PURE__ */ jsxDEV(Send, { className: "w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:text-white transition-colors" }, void 0, false, {
                }, this) }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 text-sm font-medium uppercase tracking-wider", "data-edit-id": "src/pages/HomePage.jsx:313:23", children: "Par email" }, void 0, false, {
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl font-bold text-white break-all", "data-edit-id": "src/pages/HomePage.jsx:314:23", children: "contact@bp2c.net" }, void 0, false, {
                ] }, void 0, true, {
              ] }, void 0, true, {
            ] }, void 0, true, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-black/20", children: /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-4 md:space-y-6", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-slate-900 mb-6 md:mb-8", "data-edit-id": "src/pages/HomePage.jsx:322:19", children: "Formulaire de contact" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:325:23", children: "Nom" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900", placeholder: "Votre nom" }, void 0, false, {
              ] }, void 0, true, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:329:23", children: "Téléphone" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleChange, required: true, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900", placeholder: "06..." }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:334:21", children: "Email" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900", placeholder: "votre@email.com" }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-slate-700 ml-1", "data-edit-id": "src/pages/HomePage.jsx:338:21", children: "Message" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("textarea", { name: "message", value: formData.message, onChange: handleChange, required: true, rows: 4, className: "w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 resize-none", placeholder: "Comment pouvons-nous vous aider ?" }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 md:py-5 text-lg rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]", "data-edit-id": "src/pages/HomePage.jsx:341:19", children: "Envoyer ma demande" }, void 0, false, {
          ] }, void 0, true, {
          }, this) }, void 0, false, {
        ] }, void 0, true, {
        }, this) }, void 0, false, {
      ] }, void 0, true, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_s(HomePage, "C+wM3CmP2JGYWXNZDcybN+p6l/w=", false, function() {
  return [useToast];
});
_c = HomePage;
export default HomePage;
var _c;
$RefreshReg$(_c, "HomePage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/HomePage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/HomePage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQTtBQUFBLGVBd0RBLEtBekRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEwREE7QUFBQSxXQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZ0VBO0FBQUEsU0E5UEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQStQQTtBQUFBLE9BdFFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F1UUw7QUFDSjtBQUFDakMsR0F2VktELFVBQVE7QUFBQSxVQUdSRCxRQUFRO0FBQUE7QUFBQSxLQUhSQztBQXdWTixlQUFlQTtBQUFRLElBQUFxRDtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVsbWV0IiwiTGluayIsIm1vdGlvbiIsIlBob25lIiwiRHJvcGxldHMiLCJUaGVybW9tZXRlciIsIldpbmQiLCJQYWludGJydXNoIiwiU3RhciIsIkFycm93UmlnaHQiLCJTZW5kIiwiU2hpZWxkQ2hlY2siLCJDbG9jayIsIkF3YXJkIiwiQnV0dG9uIiwidXNlVG9hc3QiLCJIb21lUGFnZSIsIl9zIiwidG9hc3QiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJtZXNzYWdlIiwic2VydmljZXMiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJjb2xvciIsImJnIiwiYm9yZGVyIiwidGVzdGltb25pYWxzIiwicmF0aW5nIiwidGV4dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVkQ29udGFjdHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwiZWFzZSIsIm1hcCIsImZlYXQiLCJpZHgiLCJzZXJ2aWNlIiwiaW5kZXgiLCJJY29uIiwib25jZSIsImRlbGF5Iiwic3BsaXQiLCJzdGFyIiwidGVzdGltb25pYWwiLCJjaGFyQXQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzcmMvcGFnZXMvSG9tZVBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFBob25lLCBEcm9wbGV0cywgVGhlcm1vbWV0ZXIsIFdpbmQsIFBhaW50YnJ1c2gsIFN0YXIsIEFycm93UmlnaHQsIFNlbmQsIFNoaWVsZENoZWNrLCBDbG9jaywgQXdhcmQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS91c2UtdG9hc3QnO1xuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0b2FzdFxuICB9ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBob25lOiAnJyxcbiAgICBtZXNzYWdlOiAnJ1xuICB9KTtcbiAgY29uc3Qgc2VydmljZXMgPSBbe1xuICAgIGljb246IERyb3BsZXRzLFxuICAgIHRpdGxlOiBcIlBsb21iZXJpZSBkJ3VyZ2VuY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnRlcnZlbnRpb25zIHJhcGlkZXMgMjQvNyBwb3VyIGZ1aXRlcywgZMOpYm91Y2hhZ2VzIGV0IGluc3RhbGxhdGlvbnMgc2FuaXRhaXJlcyBkZSB0b3V0ZXMgbWFycXVlcy5cIixcbiAgICBsaW5rOiBcIi9wbG9tYmVyaWVcIixcbiAgICBjb2xvcjogXCJ0ZXh0LWJsdWUtNjAwXCIsXG4gICAgYmc6IFwiYmctYmx1ZS01MFwiLFxuICAgIGJvcmRlcjogXCJib3JkZXItYmx1ZS0xMDBcIlxuICB9LCB7XG4gICAgaWNvbjogVGhlcm1vbWV0ZXIsXG4gICAgdGl0bGU6IFwiQ2hhdWZmYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFsbGF0aW9uIGV0IG1haW50ZW5hbmNlIGV4cGVydGUgZGUgY2hhdWRpw6hyZXMsIHBvbXBlcyDDoCBjaGFsZXVyIGV0IHJhZGlhdGV1cnMgaGF1dGUgcGVyZm9ybWFuY2UuXCIsXG4gICAgbGluazogXCIvY2hhdWZmYWdlXCIsXG4gICAgY29sb3I6IFwidGV4dC1vcmFuZ2UtNjAwXCIsXG4gICAgYmc6IFwiYmctb3JhbmdlLTUwXCIsXG4gICAgYm9yZGVyOiBcImJvcmRlci1vcmFuZ2UtMTAwXCJcbiAgfSwge1xuICAgIGljb246IFdpbmQsXG4gICAgdGl0bGU6IFwiQ2xpbWF0aXNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbHV0aW9ucyBkZSBjbGltYXRpc2F0aW9uIGdhaW5hYmxlIGV0IHNwbGl0IHBvdXIgdW4gY29uZm9ydCB0aGVybWlxdWUgYWJzb2x1IGVuIHRvdXRlIHNhaXNvbi5cIixcbiAgICBsaW5rOiBcIi9jbGltYXRpc2F0aW9uXCIsXG4gICAgY29sb3I6IFwidGV4dC1jeWFuLTYwMFwiLFxuICAgIGJnOiBcImJnLWN5YW4tNTBcIixcbiAgICBib3JkZXI6IFwiYm9yZGVyLWN5YW4tMTAwXCJcbiAgfSwge1xuICAgIGljb246IFBhaW50YnJ1c2gsXG4gICAgdGl0bGU6IFwiUsOpbm92YXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFuc2Zvcm1hdGlvbiBjb21wbMOodGUgZGUgc2FsbGVzIGRlIGJhaW4gOiBjb25jZXB0aW9uLCBjYXJyZWxhZ2UgZXQgaW5zdGFsbGF0aW9uIGNsw6kgZW4gbWFpbi5cIixcbiAgICBsaW5rOiBcIi9yZW5vdmF0aW9uXCIsXG4gICAgY29sb3I6IFwidGV4dC1wdXJwbGUtNjAwXCIsXG4gICAgYmc6IFwiYmctcHVycGxlLTUwXCIsXG4gICAgYm9yZGVyOiBcImJvcmRlci1wdXJwbGUtMTAwXCJcbiAgfV07XG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IFt7XG4gICAgbmFtZTogXCJDaGFybG90dGUgQnJvdFwiLFxuICAgIHJhdGluZzogNSxcbiAgICB0ZXh0OiBcIlRyw6hzIHByb2Zlc3Npb25uZWwuIEluc3RhbGxhdGlvbiBjbGltYXRpc2F0aW9uIGdhaW5hYmxlIGRlIHF1YWxpdMOpLiBTw6lyaWV1eCBldCByw6lhY3RpZi4gSmUgcmVjb21tYW5kZSB2aXZlbWVudCBwb3VyIHRvdXQgcHJvamV0IHRoZXJtaXF1ZS5cIlxuICB9LCB7XG4gICAgbmFtZTogXCJEaWRpZXIgTWFydGluZXR0aVwiLFxuICAgIHJhdGluZzogNSxcbiAgICB0ZXh0OiBcIkludGVydmVudGlvbiBwb3VyIGZ1aXRlIGQnZWF1IGVuIHVyZ2VuY2UuIEplIHN1aXMgdHLDqHMgc2F0aXNmYWl0IGR1IHRyYXZhaWwsIHRlY2huaWNpZW4gcG9uY3R1ZWwgZXQgcHJvZmVzc2lvbm5lbC5cIlxuICB9LCB7XG4gICAgbmFtZTogXCJNYXRoaWV1IEVjaGFyZFwiLFxuICAgIHJhdGluZzogNSxcbiAgICB0ZXh0OiBcIlNvY2nDqXTDqSB0csOocyBzw6lyaWV1c2UuIFRyYXZhaWwgZGUgcXVhbGl0w6kgZXQgY2hhbnRpZXIgcHJvcHJlLiBQcml4IGNvcnJlY3QgYXZlYyBkZXMgY29uc2VpbHMgYXZpc8OpcyBlbiBhbW9udC5cIlxuICB9XTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNhdmVkQ29udGFjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdicDJjX2NvbnRhY3RzJykgfHwgJ1tdJyk7XG4gICAgc2F2ZWRDb250YWN0cy5wdXNoKHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JwMmNfY29udGFjdHMnLCBKU09OLnN0cmluZ2lmeShzYXZlZENvbnRhY3RzKSk7XG4gICAgdG9hc3Qoe1xuICAgICAgdGl0bGU6IFwiTWVzc2FnZSBlbnZvecOpICFcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk5vdXMgdm91cyBjb250YWN0ZXJvbnMgZGFucyBsZXMgcGx1cyBicmVmcyBkw6lsYWlzLlwiXG4gICAgfSk7XG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBtZXNzYWdlOiAnJ1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHNldEZvcm1EYXRhKHtcbiAgICAuLi5mb3JtRGF0YSxcbiAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gIH0pO1xuICByZXR1cm4gPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5CUDJDIC0gUGxvbWJlcmllLCBDaGF1ZmZhZ2UsIENsaW1hdGlzYXRpb24gJiBSw6lub3ZhdGlvbiBGcsOpanVzIHwgMDYgMDEgNzYgMTMgOTU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQlAyQywgdm90cmUgZXhwZXJ0IGNlcnRpZmnDqSDDoCBGcsOpanVzLiBVcmdlbmNlIHBsb21iZXJpZSAyNC83LCBpbnN0YWxsYXRpb24gY2hhdWZmYWdlLCBjbGltYXRpc2F0aW9uIGV0IHLDqW5vdmF0aW9uIGRlIHNhbGxlIGRlIGJhaW4uIERldmlzIGdyYXR1aXQuXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vd3d3LmJwMmMubmV0L1wiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtNTAgZm9udC1zYW5zXCI+XG4gICAgICAgIFxuICAgICAgICB7LyogSEVSTyBTRUNUSU9OIC0gVXBkYXRlZCBMYXlvdXQgJiBUeXBvZ3JhcGh5ICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1bOTB2aF0gbWQ6bWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBwdC0yMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NzYyMTAxMzQxODgtNGMwNWRkMTcyZjg5XCIgYWx0PVwiSW50w6lyaWV1ciBtb2Rlcm5lIHNhbGxlIGRlIGJhaW4gcsOpbm92w6llXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgc2NhbGUtMTA1IGFuaW1hdGUtW2tlbmJ1cm5zXzIwc19pbmZpbml0ZV9hbHRlcm5hdGVdXCIgLz5cbiAgICAgICAgICAgIHsvKiBQcmVtaXVtIEdyYWRpZW50IE92ZXJsYXkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNsYXRlLTkwMC85NSB2aWEtc2xhdGUtOTAwLzgwIHRvLXNsYXRlLTkwMC80MFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsXCI+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgeTogMzBcbiAgICAgICAgICAgIH19IGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfX0gdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgICBlYXNlOiBcImVhc2VPdXRcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWQ6Z2FwLTMgYmctd2hpdGUvMTAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIHJvdW5kZWQtZnVsbCBwbC0yIHByLTQgcHktMS41IG1iLTYgbWQ6bWItOCBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaC0yLjUgdy0yLjUgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZS1waW5nIGFic29sdXRlIGlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsIGJnLW9yYW5nZS00MDAgb3BhY2l0eS03NVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGgtMi41IHctMi41IGJnLW9yYW5nZS01MDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS01MCBmb250LWJvbGQgdGV4dC1bMTBweF0gbWQ6dGV4dC14cyB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlXCI+RGlzcG9uaWJsZSAyNC83IMOgIEZyw6lqdXMgJiBlbnZpcm9uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHNtOnRleHQtNXhsIG1kOnRleHQtN3hsIGxnOnRleHQtOHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTYgbWQ6bWItOCBsZWFkaW5nLVsxLjFdIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICBMJ2V4Y2VsbGVuY2UgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS00MDAgdmlhLWJsdWUtMjAwIHRvLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIGRlIGwnaGFiaXRhdC5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC0yeGwgdGV4dC1zbGF0ZS0zMDAgbWItOCBtZDptYi0xMiBsZWFkaW5nLXJlbGF4ZWQgbWF4LXctMnhsIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIFNww6ljaWFsaXN0ZXMgZW4gcGxvbWJlcmllLCBjaGF1ZmZhZ2UsIGNsaW1hdGlzYXRpb24gZXQgcsOpbm92YXRpb24uIFxuICAgICAgICAgICAgICAgICAgTm91cyBhbGxpb25zIHNhdm9pci1mYWlyZSBhcnRpc2FuYWwgZXQgdGVjaG5vbG9naWVzIG1vZGVybmVzIHBvdXIgdm90cmUgY29uZm9ydC5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQgbWQ6Z2FwLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHB4LTggbWQ6cHgtMTAgcHktNiBtZDpweS04IHRleHQtbGcgcm91bmRlZC1mdWxsIHNoYWRvdy14bCBzaGFkb3ctYmx1ZS02MDAvMzAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIERlbWFuZGVyIHVuIGRldmlzXG4gICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwibWwtMiB3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzMzNjAxNzYxMzk1XCIgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gYmctd2hpdGUvMTAgYmFja2Ryb3AtYmx1ci1tZCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItd2hpdGUvMjAgaG92ZXI6Ymctd2hpdGUvMjAgcHgtOCBtZDpweC0xMCBweS02IG1kOnB5LTggdGV4dC1sZyByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOi10cmFuc2xhdGUteS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cIm1yLTMgdy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgMDYgMDEgNzYgMTMgOTVcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIG1kOm10LTE2IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAteC02IG1kOmdhcC14LTEyIGdhcC15LTQgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIHB0LThcIj5cbiAgICAgICAgICAgICAgICAgIHtbe1xuICAgICAgICAgICAgICAgICAgaWNvbjogU2hpZWxkQ2hlY2ssXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkdhcmFudGllIETDqWNlbm5hbGVcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInRleHQtZ3JlZW4tNDAwXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBpY29uOiBDbG9jayxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiSW50ZXJ2ZW50aW9uIFJhcGlkZVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwidGV4dC1vcmFuZ2UtNDAwXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBpY29uOiBBd2FyZCxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJ0aXNhbnMgQ2VydGlmacOpc1wiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwidGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgfV0ubWFwKChmZWF0LCBpZHgpID0+IDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1kOmdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZlYXQuaWNvbiBjbGFzc05hbWU9e2B3LTUgaC01IG1kOnctNiBtZDpoLTYgJHtmZWF0LmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZVwiPntmZWF0LnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTRVJWSUNFUyBTRUNUSU9OIC0gUmVmaW5lZCBDYXJkcyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgbWQ6cHktMzIgYmctd2hpdGUgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1kOml0ZW1zLWVuZCBtYi0xMiBtZDptYi0yMCBnYXAtNiBtZDpnYXAtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC14cyBtZDp0ZXh0LXNtIG1iLTMgYmxvY2tcIj5Ob3MgRG9tYWluZXMgZCdFeHBlcnRpc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBsZWFkaW5nLXRpZ2h0XCI+U29sdXRpb25zIHRlY2huaXF1ZXMgPGJyIC8+aGF1dCBkZSBnYW1tZTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBtYXgtdy1tZCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBVbmUgYXBwcm9jaGUgZ2xvYmFsZSBkZSB2b3RyZSBjb25mb3J0IHRoZXJtaXF1ZSBldCBzYW5pdGFpcmUsIGF2ZWMgdW5lIGV4aWdlbmNlIGRlIHF1YWxpdMOpIHNhbnMgY29tcHJvbWlzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC02IG1kOmdhcC04XCI+XG4gICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IEljb24gPSBzZXJ2aWNlLmljb247XG4gICAgICAgICAgICAgIHJldHVybiA8bW90aW9uLmRpdiBrZXk9e2luZGV4fSBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB5OiAzMFxuICAgICAgICAgICAgICB9fSB3aGlsZUluVmlldz17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICB9fSB2aWV3cG9ydD17e1xuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgICAgICAgfX0gdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICAgICAgZGVsYXk6IGluZGV4ICogMC4xXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17c2VydmljZS5saW5rfSBjbGFzc05hbWU9XCJibG9jayBoLWZ1bGwgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtZnVsbCBiZy13aGl0ZSByb3VuZGVkLTN4bCBtZDpyb3VuZGVkLVsycmVtXSBwLTggbWQ6cC0xMCBzaGFkb3ctbGcgc2hhZG93LXNsYXRlLTIwMC81MCBob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNoYWRvdy1ibHVlLTkwMC81IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBob3ZlcjotdHJhbnNsYXRlLXktMiBib3JkZXIgJHtzZXJ2aWNlLmJvcmRlcn0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogSG92ZXIgR3JhZGllbnQgQmFja2dyb3VuZCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iciBmcm9tLXdoaXRlIHRvLXNsYXRlLTUwIG9wYWNpdHktMTAwIGdyb3VwLWhvdmVyOm9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSB0by0ke3NlcnZpY2UuY29sb3Iuc3BsaXQoJy0nKVsxXX0tNTAvMzAgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi01MDBgfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xNiBoLTE2IG1kOnctMjAgbWQ6aC0yMCByb3VuZGVkLTJ4bCAke3NlcnZpY2UuYmd9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTYgbWQ6bWItOCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtgdy04IGgtOCBtZDp3LTEwIG1kOmgtMTAgJHtzZXJ2aWNlLmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTMgbWQ6bWItNCBncm91cC1ob3Zlcjp0ZXh0LWJsdWUtNzAwIHRyYW5zaXRpb24tY29sb3JzXCI+e3NlcnZpY2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS02MDAgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGVhZGluZy1yZWxheGVkIG1iLTYgbWQ6bWItOCBncm91cC1ob3Zlcjp0ZXh0LXNsYXRlLTcwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtOTAwIGdyb3VwLWhvdmVyOnRleHQtYmx1ZS03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBzYXZvaXIgcGx1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgbWwtMiBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogVEVTVElNT05JQUxTIFNFQ1RJT04gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIG1kOnB5LTMyIGJnLXNsYXRlLTUwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTEyIG1kOm1iLTIwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LXhzIG1kOnRleHQtc20gbWItMyBibG9ja1wiPlNhdGlzZmFjdGlvbiBDbGllbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItNlwiPkwnZXhjZWxsZW5jZSByZWNvbm51ZTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJnLXdoaXRlIHB4LTYgcHktMyByb3VuZGVkLWZ1bGwgc2hhZG93LXNtIGJvcmRlciBib3JkZXItc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+NS4wPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1XS5tYXAoc3RhciA9PiA8U3RhciBrZXk9e3N0YXJ9IGNsYXNzTmFtZT1cInctNCBoLTQgbWQ6dy01IG1kOmgtNSBmaWxsLW9yYW5nZS00MDAgdGV4dC1vcmFuZ2UtNDAwXCIgLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTUwMCBtbC0yXCI+c3VyIEdvb2dsZSBBdmlzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTYgbWQ6Z2FwLThcIj5cbiAgICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpbmRleCkgPT4gPG1vdGlvbi5kaXYga2V5PXtpbmRleH0gaW5pdGlhbD17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB5OiAyMFxuICAgICAgICAgICAgfX0gd2hpbGVJblZpZXc9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfX0gdmlld3BvcnQ9e3tcbiAgICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgICAgfX0gdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgICAgICBkZWxheTogaW5kZXggKiAwLjFcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCBtZDpwLTEwIHJvdW5kZWQtM3hsIG1kOnJvdW5kZWQtWzJyZW1dIHNoYWRvdy14bCBzaGFkb3ctc2xhdGUtMjAwLzQwIGJvcmRlciBib3JkZXItc2xhdGUtMTAwLzUwIGhvdmVyOnNoYWRvdy0yeGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICB7WzEsIDIsIDMsIDQsIDVdLm1hcChzdGFyID0+IDxTdGFyIGtleT17c3Rhcn0gY2xhc3NOYW1lPVwidy00IGgtNCBmaWxsLW9yYW5nZS00MDAgdGV4dC1vcmFuZ2UtNDAwXCIgLz4pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTcwMCBtYi04IGl0YWxpYyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlIG1kOnRleHQtbGdcIj5cInt0ZXN0aW1vbmlhbC50ZXh0fVwiPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdCBib3JkZXItc2xhdGUtMTAwIHB0LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgbWQ6dy0xMiBtZDpoLTEyIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLWJsdWUtNTAwIHRvLWJsdWUtNzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtYmFzZSBtZDp0ZXh0LWxnIG1yLTQgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFsLm5hbWUuY2hhckF0KDApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS05MDBcIj57dGVzdGltb25pYWwubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBmb250LW1lZGl1bVwiPkNsaWVudCBWw6lyaWZpw6k8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBtZDptdC0xNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zaGFyZS5nb29nbGUvQXVaRWFFSVpFWnlaSllRVUlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtYmx1ZS02MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LWJsdWUtODAwIHRyYW5zaXRpb24tY29sb3JzIGJvcmRlci1iIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItYmx1ZS02MDAgcGItMC41XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TGlyZSB0b3VzIGxlcyBhdmlzIHN1ciBHb29nbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFFVSUNLIENPTlRBQ1QgU0VDVElPTiAtIFByZW1pdW0gRGFyayBEZXNpZ24gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIG1kOnB5LTMyIGJnLXNsYXRlLTkwMCByZWxhdGl2ZSBpc29sYXRlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIGRlY29yYXRpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIC16LTEwIHctWzYwMHB4XSBoLVs2MDBweF0gYmctYmx1ZS02MDAvMjAgcm91bmRlZC1mdWxsIGJsdXItWzEyMHB4XSB0cmFuc2xhdGUteC0xLzMgLXRyYW5zbGF0ZS15LTEvM1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC16LTEwIHctWzUwMHB4XSBoLVs1MDBweF0gYmctb3JhbmdlLTUwMC8xMCByb3VuZGVkLWZ1bGwgYmx1ci1bMTAwcHhdIC10cmFuc2xhdGUteC0xLzMgdHJhbnNsYXRlLXktMS8zXCI+PC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtMTIgbGc6Z2FwLTIwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC14cyBtZDp0ZXh0LXNtIG1iLTMgYmxvY2tcIj5Db250YWN0ZXotbm91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNiBtZDptYi04IGxlYWRpbmctdGlnaHRcIj5QcsOqdCDDoCBjb25jcsOpdGlzZXIgPGJyIC8+dm90cmUgcHJvamV0ID88L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTQwMCBtYi04IG1kOm1iLTEyIGxlYWRpbmctcmVsYXhlZCBtYXgtdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgUXVlIGNlIHNvaXQgcG91ciB1bmUgdXJnZW5jZSBvdSB1bmUgcsOpbm92YXRpb24sIG5vdHJlIMOpcXVpcGUgZXN0IMOgIHZvdHJlIMOpY291dGUuIFLDqXBvbnNlIGdhcmFudGllIHNvdXMgMjRoLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBtZDpzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgbWQ6dy0xNiBtZDpoLTE2IHJvdW5kZWQtMnhsIGJnLWJsdWUtNjAwLzEwIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdXAtaG92ZXI6YmctYmx1ZS02MDAgZ3JvdXAtaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTYgaC02IG1kOnctOCBtZDpoLTggdGV4dC1ibHVlLTQwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC1zbSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5QYXIgdMOpbMOpcGhvbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPjA2IDAxIDc2IDEzIDk1PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTQgaC0xNCBtZDp3LTE2IG1kOmgtMTYgcm91bmRlZC0yeGwgYmctYmx1ZS02MDAvMTAgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm91cC1ob3ZlcjpiZy1ibHVlLTYwMCBncm91cC1ob3Zlcjpib3JkZXItYmx1ZS01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbmQgY2xhc3NOYW1lPVwidy02IGgtNiBtZDp3LTggbWQ6aC04IHRleHQtYmx1ZS00MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQtc20gZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+UGFyIGVtYWlsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgYnJlYWstYWxsXCI+Y29udGFjdEBicDJjLm5ldDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBtZDpyb3VuZGVkLVsyLjVyZW1dIHAtNiBtZDpwLTEwIHNoYWRvdy0yeGwgc2hhZG93LWJsYWNrLzIwXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi02IG1kOm1iLThcIj5Gb3JtdWxhaXJlIGRlIGNvbnRhY3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00IG1kOmdhcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDAgbWwtMVwiPk5vbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTUgcHktMyBtZDpweS00IGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIHRleHQtc2xhdGUtOTAwXCIgcGxhY2Vob2xkZXI9XCJWb3RyZSBub21cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBtbC0xXCI+VMOpbMOpcGhvbmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInBob25lXCIgdmFsdWU9e2Zvcm1EYXRhLnBob25lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBweS0zIG1kOnB5LTQgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC14bCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgdGV4dC1zbGF0ZS05MDBcIiBwbGFjZWhvbGRlcj1cIjA2Li4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIG1sLTFcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybURhdGEuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIGNsYXNzTmFtZT1cInctZnVsbCBweC01IHB5LTMgbWQ6cHktNCBiZy1zbGF0ZS01MCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCB0ZXh0LXNsYXRlLTkwMFwiIHBsYWNlaG9sZGVyPVwidm90cmVAZW1haWwuY29tXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDAgbWwtMVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiB2YWx1ZT17Zm9ybURhdGEubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgcm93cz17NH0gY2xhc3NOYW1lPVwidy1mdWxsIHB4LTUgcHktMyBtZDpweS00IGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIHRleHQtc2xhdGUtOTAwIHJlc2l6ZS1ub25lXCIgcGxhY2Vob2xkZXI9XCJDb21tZW50IHBvdXZvbnMtbm91cyB2b3VzIGFpZGVyID9cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBweS00IG1kOnB5LTUgdGV4dC1sZyByb3VuZGVkLXhsIGZvbnQtYm9sZCBzaGFkb3ctbGcgc2hhZG93LWJsdWUtNjAwLzIwIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNjYWxlLVsxLjAyXVwiPlxuICAgICAgICAgICAgICAgICAgICBFbnZveWVyIG1hIGRlbWFuZGVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+O1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJmaWxlIjoiL2hvbWUvdTczMzM4MzQzNi93ZWJzaXRlcy9vYTlTenBYaEYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL0hvbWVQYWdlLmpzeCJ9

