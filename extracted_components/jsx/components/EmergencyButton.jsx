const EmergencyButton = () => {
  return <motion.div { initial: {
    opacity: 0,
    scale: 0.5,
    y: 100
  }, animate: {
    opacity: 1,
    scale: 1,
    y: 0
  }, transition: {
    delay: 1,
    duration: 0.5,
    type: "spring"
  }, className: "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-2", children: <motion.a { href: "tel:+336017613195", whileHover: {
    scale: 1.05
  }, whileTap: {
    scale: 0.95
  }, className: "group relative flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-full shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 min-h-[48px] min-w-[48px]", "data-edit-disabled": "true", children: [
    <span { className: "absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping group-hover:animate-none" }
    }, this),
    <div { className: "relative flex items-center gap-2 md:gap-3", children: [
      <div { className: "bg-white/20 p-1 md:p-1.5 rounded-full", children: <Phone { className: "w-4 h-4 md:w-5 md:h-5 fill-current animate-pulse" }
      }, this) }
      }, this),
      <div { className: "flex flex-col items-start leading-none", children: [
        <span { className: "text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-90 hidden sm:block", children: "Urgence 24/7" }
        }, this),
        <span { className: "text-sm md:text-lg font-bold", children: "06 01 76 13 95" }
      ] }
    ] }
  ] }
  }, this) }
  }, this);
};