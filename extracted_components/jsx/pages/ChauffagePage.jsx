const ChauffagePage = () => {
  return <Fragment { children: [
    <Helmet { children: [
      <title { children: "Chauffage Fréjus | Installation & Maintenance | BP2C" }
      }, this),
      <meta { name: "description", content: "Expert chauffagiste Fréjus. Installation chaudière, pompe à chaleur, entretien annuel. Confort thermique garanti." }
    ] }
    }, this),
    <div { className: "min-h-screen bg-slate-50 font-sans", children: [
      <section { className: "relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0", children: [
        <div { className: "absolute inset-0", children: [
          <img { src: "https://images.unsplash.com/photo-1700124084147-995973b6a970", alt: "Système de chauffage moderne", className: "w-full h-full object-cover", "data-edit-id": "src/pages/ChauffagePage.jsx:20:13" }
          }, this),
          <div { className: "absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" }
        ] }
        }, this),
        <div { className: "container mx-auto px-4 md:px-6 relative z-10 text-center", children: <motion.div { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, className: "max-w-4xl mx-auto", children: [
          <div { className: "inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6", children: [
            <span { className: "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-400 animate-pulse", "data-edit-id": "src/pages/ChauffagePage.jsx:35:17" }
            }, this),
            <span { className: "text-orange-100 font-semibold tracking-wider uppercase text-[10px] md:text-xs", "data-edit-id": "src/pages/ChauffagePage.jsx:36:17", children: "Expertise Chauffage" }
          ] }
          }, this),
          <h1 { className: "text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight", "data-edit-disabled": "true", children: [
            "Confort Thermique & ",
            <br {}
            }, this),
            <span { className: "text-orange-400", children: "Économies d'Énergie" }
          ] }
          }, this),
          <p { className: "text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light", "data-edit-disabled": "true", children: [
            "Installation, entretien et dépannage de vos systèmes de chauffage.",
            <br { className: "hidden md:block" }
            }, this),
            "Optimisez la performance énergétique de votre habitat."
          ] }
          }, this),
          <div { className: "flex justify-center gap-4", children: <a { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: <Button { className: "w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 rounded-full text-lg shadow-lg shadow-orange-600/30 hover:scale-105 transition-all", "data-edit-disabled": "true", children: [
            <Phone { className: "mr-2 h-5 w-5" }
            }, this),
            " Devis Gratuit"
          ] }
          }, this) }
          }, this) }
        ] }
        }, this) }
      ] }
      }, this),
      <section { className: "py-16 md:py-24 container mx-auto px-4 md:px-6 md:-mt-24 relative z-20", children: <div { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: [{
        icon: Flame,
        title: "Installation",
        desc: "Chaudières gaz, pompes à chaleur, radiateurs haute performance.",
        color: "text-orange-600",
        bg: "bg-orange-50"
      }, {
        icon: Calendar,
        title: "Entretien Annuel",
        desc: "Maintenance obligatoire et préventive pour votre sécurité et longévité.",
        color: "text-blue-600",
        bg: "bg-blue-50"
      }, {
        icon: Wrench,
        title: "Dépannage",
        desc: "Diagnostic précis et réparation rapide de vos pannes de chauffage.",
        color: "text-red-600",
        bg: "bg-red-50"
      }].map((item, i) => <motion.div { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "bg-white p-8 md:p-10 rounded-3xl md:rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100", children: [
        <div { className: `w-14 h-14 md:w-16 md:h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`, children: <item.icon { className: `w-7 h-7 md:w-8 md:h-8 ${item.color}` }
        }, this) }
        }, this),
        <h3 { className: "text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4", "data-edit-disabled": "true", children: item.title }
        }, this),
        <p { className: "text-slate-600 leading-relaxed text-base md:text-lg", "data-edit-disabled": "true", children: item.desc }
      ] }, i, true, {
      }, this)) }
      }, this) }
      }, this),
      <section { className: "py-16 md:py-20 bg-white", children: <div { className: "container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
        <div { className: "order-2 lg:order-1 relative", children: [
          <div { className: "absolute inset-0 bg-orange-600/5 rounded-[2.5rem] transform -rotate-3 scale-95" }
          }, this),
          <img { src: "https://images.unsplash.com/photo-1700124108954-49db9cfe3e22", alt: "Installation chauffage", className: "relative rounded-3xl md:rounded-[2.5rem] shadow-2xl w-full object-cover h-[400px] md:h-[600px]", "data-edit-id": "src/pages/ChauffagePage.jsx:88:15" }
        ] }
        }, this),
        <div { className: "order-1 lg:order-2", children: [
          <span { className: "text-orange-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/ChauffagePage.jsx:95:15", children: "Performance" }
          }, this),
          <h2 { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-id": "src/pages/ChauffagePage.jsx:96:15", children: "Optimisez votre consommation" }
          }, this),
          <p { className: "text-base md:text-lg text-slate-600 mb-8 leading-relaxed", "data-edit-id": "src/pages/ChauffagePage.jsx:97:15", children: "Un système de chauffage bien entretenu et moderne, c'est jusqu'à 30% d'économies sur votre facture énergétique. BP2C vous conseille sur les meilleures solutions adaptées à votre logement (Pompe à Chaleur, Gaz condensation)." }
          }, this),
          <div { className: "space-y-4 mb-8 md:mb-10", children: ["RGE Qualibat (en cours d'obtention)", "Désembouage de circuits haute pression", "Régulation thermique connectée", "Marques premium (Daikin, Atlantic, Viessmann)"].map((text, i) => <div { className: "flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100", children: [
            <CheckCircle { className: "w-5 h-5 md:w-6 md:h-6 text-orange-500 flex-shrink-0" }
            }, this),
            <span { className: "text-slate-700 font-medium text-sm md:text-base", "data-edit-disabled": "true", children: text }
          ] }, i, true, {
          }, this)) }
        ] }
      ] }
      }, this) }
      }, this),
      <section { id: "contact", className: "py-16 md:py-24 bg-orange-950 text-white relative overflow-hidden", children: [
        <div { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" }
        }, this),
        <div { className: "container mx-auto px-4 md:px-6 text-center relative z-10", children: [
          <h2 { className: "text-3xl md:text-5xl font-bold mb-6 md:mb-8", "data-edit-id": "src/pages/ChauffagePage.jsx:124:13", children: "Préparez l'hiver sereinement" }
          }, this),
          <p { className: "text-orange-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12", "data-edit-id": "src/pages/ChauffagePage.jsx:125:13", children: "L'entretien de votre chaudière est une obligation légale et une garantie de sécurité." }
          }, this),
          <div { className: "flex flex-col sm:flex-row justify-center gap-4 md:gap-6", children: [
            <a { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: <Button { className: "w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg rounded-full font-bold shadow-lg shadow-orange-600/30", "data-edit-disabled": "true", children: [
              <Phone { className: "mr-3 w-5 h-5" }
              }, this),
              " 06 01 76 13 95"
            ] }
            }, this) }
            }, this),
            <Link { to: "/contact", className: "w-full sm:w-auto", children: <Button { className: "w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-6 text-lg rounded-full font-bold", "data-edit-id": "src/pages/ChauffagePage.jsx:135:18", children: "Nous Contacter" }
            }, this) }
          ] }
        ] }
      ] }
    ] }
  ] }
  }, this);
};