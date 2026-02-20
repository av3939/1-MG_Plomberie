const AboutPage = () => {
  return <Fragment { children: [
    <Helmet { children: [
      <title { children: "À propos de BP2C | Votre Artisan de Confiance" }
      }, this),
      <meta { name: "description", content: "Découvrez BP2C, entreprise de plomberie et chauffage à Fréjus dirigée par William. Engagement qualité, expertise et satisfaction client." }
    ] }
    }, this),
    <div { className: "min-h-screen bg-slate-50 font-sans", children: [
      <section { className: "pt-24 pb-16 md:pt-32 md:pb-20 bg-white", children: <div { className: "container mx-auto px-4 md:px-6", children: <motion.div { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "text-center max-w-4xl mx-auto", children: [
        <span { className: "text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block", "data-edit-id": "src/pages/AboutPage.jsx:27:15", children: "Notre Philosophie" }
        }, this),
        <h1 { className: "text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-disabled": "true", children: [
          "L'Artisanat au service de ",
          <br {}
          }, this),
          <span { className: "text-blue-600", children: "votre confort" }
        ] }
        }, this),
        <p { className: "text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto", "data-edit-id": "src/pages/AboutPage.jsx:29:15", children: "BP2C, c'est l'histoire d'une passion pour le travail bien fait. Basés à Fréjus, nous mettons notre expertise technique au service des particuliers pour créer des habitats sains, confortables et durables." }
      ] }
      }, this) }
      }, this) }
      }, this),
      <section { className: "py-16 md:py-24 bg-slate-50", children: <div { className: "container mx-auto px-4 md:px-6", children: <div { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: [{
        icon: Shield,
        title: "Fiabilité",
        desc: "Nous tenons nos engagements : délais respectés, devis transparents et qualité irréprochable.",
        color: "text-blue-600",
        bg: "bg-blue-50"
      }, {
        icon: Target,
        title: "Précision",
        desc: "Le souci du détail dans chaque soudure, chaque installation, pour une durabilité maximale.",
        color: "text-orange-600",
        bg: "bg-orange-50"
      }, {
        icon: Heart,
        title: "Proximité",
        desc: "Une relation de confiance avec nos clients varois, basée sur l'écoute et le conseil personnalisé.",
        color: "text-red-600",
        bg: "bg-red-50"
      }].map((val, i) => <motion.div { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "bg-white p-8 md:p-10 rounded-3xl md:rounded-[2rem] shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100", children: [
        <div { className: `w-12 h-12 md:w-14 md:h-14 ${val.bg} rounded-2xl flex items-center justify-center mb-6`, children: <val.icon { className: `w-6 h-6 md:w-8 md:h-8 ${val.color}` }
        }, this) }
        }, this),
        <h3 { className: "text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4", "data-edit-disabled": "true", children: val.title }
        }, this),
        <p { className: "text-slate-600 leading-relaxed text-base md:text-lg", "data-edit-disabled": "true", children: val.desc }
      ] }, i, true, {
      }, this)) }
      }, this) }
      }, this) }
      }, this),
      <section { className: "py-20 md:py-32 bg-white", children: <div { className: "container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
        <div { children: [
          <span { className: "text-orange-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/AboutPage.jsx:68:17", children: "Le Fondateur" }
          }, this),
          <h2 { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-id": "src/pages/AboutPage.jsx:69:17", children: "Rencontrez William" }
          }, this),
          <div { className: "prose text-base md:text-lg text-slate-600 leading-relaxed space-y-4 md:space-y-6", children: [
            <p { "data-edit-id": "src/pages/AboutPage.jsx:71:20", children: "Au cœur de BP2C, il y a William, expert technicien passionné. Avec des années d'expérience sur le terrain, il a fondé BP2C avec une vision simple : redonner ses lettres de noblesse au métier de plombier-chauffagiste." }
            }, this),
            <p { "data-edit-id": "src/pages/AboutPage.jsx:74:20", children: `Nos clients le disent mieux que nous : "Très bon contact", "Personne agréable et professionnelle". C'est cette approche humaine, couplée à une haute technicité, qui fait la différence aujourd'hui.` }
            }, this),
            <p { "data-edit-id": "src/pages/AboutPage.jsx:77:20", children: "Que ce soit pour une installation complexe de climatisation gainable ou un dépannage urgent, William s'implique personnellement pour garantir un résultat irréprochable et votre entière satisfaction." }
          ] }
          }, this),
          <div { className: "mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            <div { className: "flex items-center gap-3", children: [
              <Award { className: "text-blue-600 w-8 h-8 flex-shrink-0" }
              }, this),
              <div { children: [
                <p { className: "font-bold text-slate-900", "data-edit-id": "src/pages/AboutPage.jsx:86:25", children: "Expert Certifié" }
                }, this),
                <p { className: "text-xs text-slate-500", "data-edit-id": "src/pages/AboutPage.jsx:87:25", children: "Qualifications à jour" }
              ] }
            ] }
            }, this),
            <div { className: "flex items-center gap-3", children: [
              <Shield { className: "text-blue-600 w-8 h-8 flex-shrink-0" }
              }, this),
              <div { children: [
                <p { className: "font-bold text-slate-900", "data-edit-id": "src/pages/AboutPage.jsx:93:25", children: "Assurance Décennale" }
                }, this),
                <p { className: "text-xs text-slate-500", "data-edit-id": "src/pages/AboutPage.jsx:94:25", children: "Protection complète" }
              ] }
            ] }
          ] }
          }, this),
          <div { className: "mt-10 md:mt-12", children: <Link { to: "/contact", className: "w-full sm:w-auto", children: <Button { className: "w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-lg hover:bg-slate-800 transition-colors", "data-edit-id": "src/pages/AboutPage.jsx:101:23", children: "Discuter avec William" }
          }, this) }
          }, this) }
        ] }
        }, this),
        <div { className: "relative", children: [
          <div { className: "absolute inset-0 bg-blue-100 rounded-[2.5rem] md:rounded-[3rem] transform rotate-3" }
          }, this),
          <div { className: "bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 relative shadow-2xl", children: [
            <PenTool { className: "w-12 h-12 md:w-16 md:h-16 text-blue-200 mb-6 md:mb-8" }
            }, this),
            <blockquote { className: "text-xl md:text-3xl font-serif italic text-slate-800 mb-6 md:mb-8 leading-relaxed", children: `"La satisfaction de mes clients est ma plus belle réussite. Je ne quitte pas un chantier tant qu'il n'est pas parfait."` }
            }, this),
            <div { className: "flex items-center gap-4", children: [
              <div { className: "w-10 h-1 md:w-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full" }
              }, this),
              <p { className: "font-bold text-slate-900 uppercase tracking-widest text-xs md:text-sm", "data-edit-id": "src/pages/AboutPage.jsx:117:22", children: "William, Fondateur" }
            ] }
          ] }
        ] }
      ] }
      }, this) }
    ] }
  ] }
  }, this);
};