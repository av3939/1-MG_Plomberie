const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  const navLinks = [{
    path: "/",
    label: "Accueil"
  }, {
    path: "/plomberie",
    label: "Plomberie"
  }, {
    path: "/chauffage",
    label: "Chauffage"
  }, {
    path: "/climatisation",
    label: "Climatisation"
  }, {
    path: "/renovation",
    label: "Rénovation"
  }, {
    path: "/about",
    label: "À propos"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  const mobileExtraLinks = [{
    path: "/faq",
    label: "FAQ"
  }, {
    path: "/mentions-legales",
    label: "Mentions Légales"
  }, {
    path: "/politique-confidentialite",
    label: "Confidentialité"
  }];
  return <header { className: `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100" : "bg-white/80 backdrop-blur-sm py-3 md:py-5 border-transparent"}`, children: [
    <div { className: "container mx-auto px-4 md:px-6", children: <div { className: "flex items-center justify-between", children: [
      <Link { to: "/", className: "flex items-center gap-2 md:gap-3 group relative z-50", children: [
        <div { className: "relative", children: [
          <div { className: "absolute inset-0 bg-blue-600 blur-xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full" }
          }, this),
          <img { src: "https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg", alt: "BP2C Logo", className: "h-10 md:h-12 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10", "data-edit-id": "src/components/Header.jsx:71:15" }
        ] }
        }, this),
        <div { className: "flex flex-col", children: [
          <span { className: "text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-none", "data-edit-id": "src/components/Header.jsx:74:15", children: "BP2C" }
          }, this),
          <span { className: "hidden md:block text-[10px] md:text-xs font-medium text-blue-600 tracking-widest uppercase", "data-edit-id": "src/components/Header.jsx:75:15", children: "L'excellence de l'habitat" }
        ] }
      ] }
      }, this),
      <nav { className: "hidden lg:flex items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm", children: navLinks.map((link) => <Link { to: link.path, className: `px-4 xl:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative group ${location.pathname === link.path ? "text-white" : "text-slate-600 hover:text-blue-700"}`, children: [
        <span { className: "relative z-10", "data-edit-disabled": "true", children: link.label }
        }, this),
        location.pathname === link.path && <motion.div { layoutId: "activeTab", className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md -z-0", transition: {
          type: "spring",
          bounce: 0.2,
          duration: 0.6
        } }
        }, this),
        location.pathname !== link.path && <span { className: "absolute inset-x-4 bottom-1.5 h-0.5 bg-blue-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full", "data-edit-id": "src/components/Header.jsx:88:53" }
      ] }, link.path, true, {
      }, this)) }
      }, this),
      <div { className: "flex items-center gap-3 md:gap-4", children: [
        <a { href: "tel:+33601761395", className: "hidden md:flex items-center gap-2 bg-slate-900 text-white pl-4 pr-5 py-2.5 md:py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 group text-sm md:text-base", "data-edit-disabled": "true", children: [
          <div { className: "bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors", children: <Phone { className: "w-3 h-3 md:w-4 md:h-4 fill-current" }
          }, this) }
          }, this),
          <span { className: "hidden xl:inline", children: "06 01 76 13 95" }
          }, this),
          <span { className: "xl:hidden", children: "Appeler" }
        ] }
        }, this),
        <button { onClick: () => setIsMenuOpen(!isMenuOpen), className: "lg:hidden relative z-50 p-2 md:p-2.5 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500", "aria-label": "Toggle menu", "data-edit-disabled": "true", children: isMenuOpen ? <X { className: "w-6 h-6" }
        }, this) : <Menu { className: "w-6 h-6" }
        }, this) }
      ] }
    ] }
    }, this) }
    }, this),
    <AnimatePresence { children: isMenuOpen && <motion.div { initial: {
      opacity: 0,
      height: 0
    }, animate: {
      opacity: 1,
      height: "100vh"
    }, exit: {
      opacity: 0,
      height: 0
    }, transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }, className: "lg:hidden fixed inset-0 top-[60px] md:top-[80px] bg-white z-40 overflow-y-auto border-t border-slate-100 flex flex-col pb-20", children: [
      <div { className: "p-4 md:p-6 space-y-2 flex-grow", children: [
        <span { className: "text-xs font-bold text-slate-400 uppercase tracking-wider px-4", "data-edit-id": "src/components/Header.jsx:125:15", children: "Menu Principal" }
        }, this),
        navLinks.map((link, idx) => <motion.div { initial: {
          opacity: 0,
          x: -20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: idx * 0.05
        }, children: <Link { to: link.path, onClick: () => setIsMenuOpen(false), className: `flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all duration-200 border ${location.pathname === link.path ? "bg-blue-50 border-blue-100 text-blue-700 shadow-sm" : "bg-white border-transparent text-slate-600 hover:bg-slate-50"}`, children: [
          <span { className: "flex items-center gap-3", "data-edit-disabled": "true", children: [
            location.pathname === link.path && <div { className: "w-1.5 h-1.5 rounded-full bg-blue-600" }
            }, this),
            link.label
          ] }
          }, this),
          <ChevronRight { className: `w-5 h-5 transition-opacity ${location.pathname === link.path ? "opacity-100" : "opacity-30"}` }
        ] }
        }, this) }, link.path, false, {
        }, this)),
        <div { className: "my-6 border-t border-slate-100" }
        }, this),
        <span { className: "text-xs font-bold text-slate-400 uppercase tracking-wider px-4 mt-6 block", "data-edit-id": "src/components/Header.jsx:146:15", children: "Informations" }
        }, this),
        mobileExtraLinks.map((link, idx) => <motion.div { initial: {
          opacity: 0,
          x: -20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: navLinks.length * 0.05 + idx * 0.05
        }, children: <Link { to: link.path, onClick: () => setIsMenuOpen(false), className: "flex items-center justify-between px-4 py-3 text-sm text-slate-500 hover:text-blue-600 transition-colors", children: link.label }
        }, this) }, link.path, false, {
        }, this))
      ] }
      }, this),
      <div { className: "p-6 bg-slate-50 border-t border-slate-100 pb-24 md:pb-6", children: <div { className: "flex flex-col gap-4", children: [
        <a { href: "tel:+33601761395", className: "flex items-center justify-center gap-3 bg-slate-900 text-white w-full py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform", "data-edit-disabled": "true", children: [
          <Phone { className: "w-5 h-5 fill-current" }
          }, this),
          <span { children: "Appeler maintenant" }
        ] }
        }, this),
        <p { className: "text-center text-xs text-slate-400", "data-edit-id": "src/components/Header.jsx:168:17", children: "Disponible 7j/7 pour vos urgences" }
      ] }
      }, this) }
    ] }
    }, this) }
  ] }
  }, this);
};
_s(Header, "7aDSADaF+2jFkKesUuGqGmMzzng=", false, function() {
  return [useLocation];
});