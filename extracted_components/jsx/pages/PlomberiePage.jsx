const PlomberiePage = () => {
  return <Fragment { children: [
    <Helmet { children: [
      <title { children: "Plomberie Fréjus | Dépannage Urgence 24/7 | BP2C" }
      }, this),
      <meta { name: "description", content: "Plombier Fréjus expert. Intervention urgence 24/7, recherche de fuite, installation sanitaire. Qualité garantie." }
    ] }
    }, this),
    <div { className: "min-h-screen bg-slate-50 font-sans", children: [
      <section { className: "relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0", children: [
        <div { className: "absolute inset-0", children: [
          <img { src: "https://images.unsplash.com/photo-1674913636232-115aa871d14f", alt: "Plomberie Professionnelle", className: "w-full h-full object-cover", "data-edit-id": "src/pages/PlomberiePage.jsx:21:13" }
          }, this),
          <div { className: "absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" }
        ] }
        }, this),
        <div { className: "container mx-auto px-4 md:px-6 relative z-10", children: <motion.div { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, className: "max-w-3xl", children: [
          <div { className: "inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6", children: [
            <span { className: "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400 animate-pulse", "data-edit-id": "src/pages/PlomberiePage.jsx:36:17" }
            }, this),
            <span { className: "text-blue-100 font-semibold tracking-wider uppercase text-[10px] md:text-xs", "data-edit-id": "src/pages/PlomberiePage.jsx:37:17", children: "Expertise Plomberie" }
          ] }
          }, this),
          <h1 { className: "text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight", "data-edit-disabled": "true", children: [
            "Dépannage & ",
            <br {}
            }, this),
            <span { className: "text-blue-400", children: "Installation Sanitaire" }
          ] }
          }, this),
          <p { className: "text-lg md:text-xl text-slate-200 max-w-2xl mb-8 md:mb-10 leading-relaxed font-light", "data-edit-disabled": "true", children: [
            "Une fuite ? Une urgence ? Ou un projet de rénovation ? ",
            <br { className: "hidden md:block" }
            }, this),
            "BP2C intervient rapidement avec efficacité, propreté et garantie."
          ] }
          }, this),
          <div { className: "flex flex-col sm:flex-row gap-4", children: [
            <a { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: <Button { className: "w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-5 md:py-6 rounded-full text-lg shadow-lg shadow-red-600/30 hover:scale-105 transition-all", "data-edit-disabled": "true", children: [
              <AlertTriangle { className: "mr-2 h-5 w-5" }
              }, this),
              " Urgence 24/7"
            ] }
            }, this) }
            }, this),
            <Button { onClick: () => document.getElementById("contact").scrollIntoView({
              behavior: "smooth"
            }), className: "w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-5 md:py-6 rounded-full text-lg", "data-edit-id": "src/pages/PlomberiePage.jsx:53:17", children: "Demander un devis" }
          ] }
        ] }
        }, this) }
      ] }
      }, this),
      <section { className: "py-16 md:py-24 container mx-auto px-4 md:px-6 md:-mt-24 relative z-20", children: <div { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: [{
        icon: Clock,
        title: "Urgence 24/7",
        desc: "Intervention en moins de 2h pour fuites et dégâts des eaux.",
        color: "text-blue-600",
        bg: "bg-blue-50"
      }, {
        icon: Wrench,
        title: "Installation",
        desc: "Robinetterie, chauffe-eau, WC, et réseaux complets.",
        color: "text-orange-600",
        bg: "bg-orange-50"
      }, {
        icon: Droplets,
        title: "Recherche de Fuite",
        desc: "Technologie de pointe pour localisation non destructive.",
        color: "text-cyan-600",
        bg: "bg-cyan-50"
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
        <div { children: [
          <span { className: "text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/PlomberiePage.jsx:91:15", children: "Savoir-faire" }
          }, this),
          <h2 { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-id": "src/pages/PlomberiePage.jsx:92:15", children: "Votre plombier de confiance à Fréjus" }
          }, this),
          <p { className: "text-base md:text-lg text-slate-600 mb-8 leading-relaxed", "data-edit-id": "src/pages/PlomberiePage.jsx:93:15", children: "Les problèmes de plomberie ne préviennent pas. C'est pourquoi BP2C s'engage sur la réactivité et la qualité. Que ce soit pour un simple joint ou une installation complexe, nous appliquons la même rigueur professionnelle." }
          }, this),
          <div { className: "space-y-4 mb-8 md:mb-10", children: ["Devis clair et détaillé avant travaux", "Respect des lieux et propreté du chantier", "Matériel professionnel garanti", "Tarifs transparents sans surprise"].map((text, i) => <div { className: "flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100", children: [
            <CheckCircle { className: "w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" }
            }, this),
            <span { className: "text-slate-700 font-medium text-sm md:text-base", "data-edit-disabled": "true", children: text }
          ] }, i, true, {
          }, this)) }
          }, this),
          <Button { onClick: () => document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
          }), className: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg shadow-lg shadow-blue-600/20", "data-edit-disabled": "true", children: [
            "Demander un devis gratuit ",
            <ArrowRight { className: "ml-2 w-5 h-5" }
          ] }
        ] }
        }, this),
        <div { className: "relative", children: [
          <div { className: "absolute inset-0 bg-blue-600/5 rounded-[2.5rem] transform rotate-6 scale-95" }
          }, this),
          <img { src: "https://images.unsplash.com/photo-1637549175384-84773dcb9765", alt: "Plombier au travail", className: "relative rounded-3xl md:rounded-[2.5rem] shadow-2xl w-full object-cover h-[400px] md:h-[600px]", "data-edit-id": "src/pages/PlomberiePage.jsx:119:15" }
        ] }
      ] }
      }, this) }
      }, this),
      <section { id: "contact", className: "py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden", children: [
        <div { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" }
        }, this),
        <div { className: "container mx-auto px-4 md:px-6 text-center relative z-10", children: [
          <h2 { className: "text-3xl md:text-5xl font-bold mb-6 md:mb-8", "data-edit-id": "src/pages/PlomberiePage.jsx:133:13", children: "Besoin d'un plombier maintenant ?" }
          }, this),
          <p { className: "text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12", "data-edit-id": "src/pages/PlomberiePage.jsx:134:13", children: "Ne laissez pas une fuite s'aggraver. Contactez-nous pour une intervention rapide." }
          }, this),
          <div { className: "flex flex-col sm:flex-row justify-center gap-4 md:gap-6", children: [
            <a { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: <Button { className: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-full font-bold shadow-lg shadow-blue-600/30", "data-edit-disabled": "true", children: [
              <Phone { className: "mr-3 w-5 h-5" }
              }, this),
              " 06 01 76 13 95"
            ] }
            }, this) }
            }, this),
            <Link { to: "/contact", className: "w-full sm:w-auto", children: <Button { className: "w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-6 text-lg rounded-full font-bold", "data-edit-id": "src/pages/PlomberiePage.jsx:144:18", children: "Formulaire de contact" }
            }, this) }
          ] }
        ] }
      ] }
    ] }
  ] }
  }, this);
};