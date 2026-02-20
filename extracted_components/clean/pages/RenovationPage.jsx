import PortfolioGallery from "/src/components/PortfolioGallery.jsx";
const RenovationPage = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Rénovation Salle de Bain Fréjus | Design & Travaux | BP2C" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Rénovation complète de salle de bain à Fréjus. Douche italienne, carrelage, plomberie. Un interlocuteur unique pour votre projet." }, void 0, false, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-50 font-sans", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1618836003104-ec6d67239040", alt: "Salle de bain luxe", className: "w-full h-full object-cover", "data-edit-id": "src/pages/RenovationPage.jsx:21:13" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 relative z-10 text-center", children: /* @__PURE__ */ jsxDEV(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400 animate-pulse", "data-edit-id": "src/pages/RenovationPage.jsx:36:17" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-purple-100 font-semibold tracking-wider uppercase text-[10px] md:text-xs", "data-edit-id": "src/pages/RenovationPage.jsx:37:17", children: "Clé en Main" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight", "data-edit-disabled": "true", children: [
            "Votre Salle de Bain ",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-purple-400", children: "D'Exception" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light", "data-edit-disabled": "true", children: [
            "Conception et réalisation de salles de bain modernes et fonctionnelles.",
            /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
            }, this),
            "De la démolition aux finitions, nous gérons l'intégralité de votre projet."
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center gap-4", children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 rounded-full text-lg shadow-lg shadow-purple-600/30 hover:scale-105 transition-all", "data-edit-disabled": "true", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "mr-2 h-5 w-5" }, void 0, false, {
            }, this),
            " Parlez-nous de votre projet"
          ] }, void 0, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-24 container mx-auto px-4 md:px-6 md:-mt-24 relative z-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: [{
        icon: Layout,
        title: "Conception",
        desc: "Agencement optimisé de l'espace et conseils décoration sur mesure.",
        color: "text-purple-600",
        bg: "bg-purple-50"
      }, {
        icon: Bath,
        title: "Sanitaires",
        desc: "Douches à l'italienne, baignoires îlot, meubles vasques design et robinetterie.",
        color: "text-indigo-600",
        bg: "bg-indigo-50"
      }, {
        icon: Ruler,
        title: "Finitions",
        desc: "Pose experte de carrelage grand format, faïence et éclairage d'ambiance.",
        color: "text-pink-600",
        bg: "bg-pink-50"
      }].map((item, i) => /* @__PURE__ */ jsxDEV(motion.div, { initial: {
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
        /* @__PURE__ */ jsxDEV("div", { className: `w-14 h-14 md:w-16 md:h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`, children: /* @__PURE__ */ jsxDEV(item.icon, { className: `w-7 h-7 md:w-8 md:h-8 ${item.color}` }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4", "data-edit-disabled": "true", children: item.title }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg", "data-edit-disabled": "true", children: item.desc }, void 0, false, {
      ] }, i, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "order-2 lg:order-1 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-purple-600/5 rounded-[2.5rem] transform -rotate-3 scale-95" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1603825394551-2e7eaace6a2a", alt: "Détail robinetterie", className: "relative rounded-3xl md:rounded-[2.5rem] shadow-2xl w-full object-cover h-[400px] md:h-[600px]", "data-edit-id": "src/pages/RenovationPage.jsx:89:15" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "order-1 lg:order-2", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-purple-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/RenovationPage.jsx:96:15", children: "Sérénité" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-id": "src/pages/RenovationPage.jsx:97:15", children: "Un interlocuteur unique" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-slate-600 mb-8 leading-relaxed", "data-edit-id": "src/pages/RenovationPage.jsx:98:15", children: "Plus besoin de coordonner plombier, carreleur et électricien. BP2C prend en charge l'intégralité de votre chantier pour une tranquillité d'esprit totale et un résultat harmonieux, livré dans les délais." }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 mb-8 md:mb-10", children: ["Création de douches PMR accessibles", "Matériaux premium et durables", "Étanchéité sous carrelage garantie (SPEC)", "Chantier propre et protégé quotidiennement"].map((text, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 md:w-6 md:h-6 text-purple-500 flex-shrink-0" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700 font-medium text-sm md:text-base", "data-edit-disabled": "true", children: text }, void 0, false, {
          ] }, i, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-20 bg-slate-50 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-12 md:mb-16", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-purple-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/RenovationPage.jsx:126:15", children: "Réalisations" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6", "data-edit-id": "src/pages/RenovationPage.jsx:127:15", children: "Notre Portfolio de Rénovations" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-slate-600", "data-edit-id": "src/pages/RenovationPage.jsx:128:15", children: "Découvrez nos dernières réalisations. Des transformations complètes pour des espaces de vie réinventés." }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV(PortfolioGallery, {}, void 0, false, {
        ] }, void 0, true, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "contact", className: "py-16 md:py-24 bg-purple-950 text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 text-center relative z-10", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold mb-6 md:mb-8", "data-edit-id": "src/pages/RenovationPage.jsx:142:13", children: "Imaginez votre nouvelle salle de bain" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-purple-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12", "data-edit-id": "src/pages/RenovationPage.jsx:143:13", children: "Transformons ensemble votre espace en un lieu de bien-être absolu." }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row justify-center gap-4 md:gap-6", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 text-lg rounded-full font-bold shadow-lg shadow-purple-600/30", "data-edit-disabled": "true", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "mr-3 w-5 h-5" }, void 0, false, {
              }, this),
              " 06 01 76 13 95"
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-6 text-lg rounded-full font-bold", "data-edit-id": "src/pages/RenovationPage.jsx:153:18", children: "Prendre Rendez-vous" }, void 0, false, {
          ] }, void 0, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_c = RenovationPage;
export default RenovationPage;
var _c;
$RefreshReg$(_c, "RenovationPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/RenovationPage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/RenovationPage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQSxVQUNBLHVCQUFDLFNBQUksV0FBVSwyREFDYjtBQUFBLG1DQUFDLE9BQUUsTUFBSyxvQkFBbUIsV0FBVSxvQkFBa0IsOEJBQ3JELGlDQUFDLFVBQU8sV0FBVSwwSUFBd0ksOEJBQ3hKO0FBQUEscUNBQUMsU0FBTSxXQUFVLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUErQjtBQUFBLGNBQUc7QUFBQSxpQkFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSUE7QUFBQSxZQUNBLHVCQUFDLFFBQUssSUFBRyxZQUFXLFdBQVUsb0JBQzNCLGlDQUFDLFVBQU8sV0FBVSwrSUFBNkksMEZBQS9KO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUQsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUlBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVdBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWlCQTtBQUFBLFdBcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFxQkQ7QUFBQSxTQTdJRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOElBO0FBQUEsT0FwSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXFKQTtBQUVKO0FBQUNJLEtBekpLZjtBQTJKTixlQUFlQTtBQUFjLElBQUFlO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiSGVsbWV0IiwibW90aW9uIiwiTGluayIsIlBob25lIiwiUnVsZXIiLCJDaGVja0NpcmNsZSIsIkJhdGgiLCJMYXlvdXQiLCJCdXR0b24iLCJQb3J0Zm9saW9HYWxsZXJ5IiwiUmVub3ZhdGlvblBhZ2UiLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwiaWNvbiIsInRpdGxlIiwiZGVzYyIsImNvbG9yIiwiYmciLCJtYXAiLCJpdGVtIiwiaSIsIm9uY2UiLCJkZWxheSIsInRleHQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzcmMvcGFnZXMvUmVub3ZhdGlvblBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFBob25lLCBSdWxlciwgQ2hlY2tDaXJjbGUsIEJhdGgsIExheW91dCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCBQb3J0Zm9saW9HYWxsZXJ5IGZyb20gJ0AvY29tcG9uZW50cy9Qb3J0Zm9saW9HYWxsZXJ5LmpzeCc7XG5cbmNvbnN0IFJlbm92YXRpb25QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+UsOpbm92YXRpb24gU2FsbGUgZGUgQmFpbiBGcsOpanVzIHwgRGVzaWduICYgVHJhdmF1eCB8IEJQMkM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUsOpbm92YXRpb24gY29tcGzDqHRlIGRlIHNhbGxlIGRlIGJhaW4gw6AgRnLDqWp1cy4gRG91Y2hlIGl0YWxpZW5uZSwgY2FycmVsYWdlLCBwbG9tYmVyaWUuIFVuIGludGVybG9jdXRldXIgdW5pcXVlIHBvdXIgdm90cmUgcHJvamV0LlwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtNTAgZm9udC1zYW5zXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzYwdmhdIG1kOmgtWzcwdmhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBwdC0xNiBtZDpwdC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxODgzNjAwMzEwNC1lYzZkNjcyMzkwNDBcIiBcbiAgICAgICAgICAgICAgYWx0PVwiU2FsbGUgZGUgYmFpbiBsdXhlXCIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNsYXRlLTkwMC85MCB2aWEtc2xhdGUtOTAwLzcwIHRvLXNsYXRlLTkwMC8zMFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IHJlbGF0aXZlIHotMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19IFxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLXB1cnBsZS01MDAvMjAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLXB1cnBsZS00MDAvMzAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSBtZDpweC00IG1kOnB5LTEuNSBtYi00IG1kOm1iLTZcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEuNSBoLTEuNSBtZDp3LTIgbWQ6aC0yIHJvdW5kZWQtZnVsbCBiZy1wdXJwbGUtNDAwIGFuaW1hdGUtcHVsc2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtMTAwIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlIHRleHQtWzEwcHhdIG1kOnRleHQteHNcIj5DbMOpIGVuIE1haW48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC01eGwgbWQ6dGV4dC03eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNCBtZDptYi02IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICBWb3RyZSBTYWxsZSBkZSBCYWluIDxici8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNDAwXCI+RCdFeGNlcHRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTIwMCBtYXgtdy0yeGwgbXgtYXV0byBtYi04IG1kOm1iLTEwIGxlYWRpbmctcmVsYXhlZCBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgQ29uY2VwdGlvbiBldCByw6lhbGlzYXRpb24gZGUgc2FsbGVzIGRlIGJhaW4gbW9kZXJuZXMgZXQgZm9uY3Rpb25uZWxsZXMuPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgRGUgbGEgZMOpbW9saXRpb24gYXV4IGZpbml0aW9ucywgbm91cyBnw6lyb25zIGwnaW50w6lncmFsaXTDqSBkZSB2b3RyZSBwcm9qZXQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzM2MDE3NjEzOTVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgcHgtMTAgcHktNiByb3VuZGVkLWZ1bGwgdGV4dC1sZyBzaGFkb3ctbGcgc2hhZG93LXB1cnBsZS02MDAvMzAgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJtci0yIGgtNSB3LTVcIiAvPiBQYXJsZXotbm91cyBkZSB2b3RyZSBwcm9qZXRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogU0VSVklDRVMgR1JJRCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbWQ6cHktMjQgY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IG1kOi1tdC0yNCByZWxhdGl2ZSB6LTIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1kOmdhcC04XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGljb246IExheW91dCwgdGl0bGU6IFwiQ29uY2VwdGlvblwiLCBkZXNjOiBcIkFnZW5jZW1lbnQgb3B0aW1pc8OpIGRlIGwnZXNwYWNlIGV0IGNvbnNlaWxzIGTDqWNvcmF0aW9uIHN1ciBtZXN1cmUuXCIsIGNvbG9yOiBcInRleHQtcHVycGxlLTYwMFwiLCBiZzogXCJiZy1wdXJwbGUtNTBcIiB9LFxuICAgICAgICAgICAgICB7IGljb246IEJhdGgsIHRpdGxlOiBcIlNhbml0YWlyZXNcIiwgZGVzYzogXCJEb3VjaGVzIMOgIGwnaXRhbGllbm5lLCBiYWlnbm9pcmVzIMOubG90LCBtZXVibGVzIHZhc3F1ZXMgZGVzaWduIGV0IHJvYmluZXR0ZXJpZS5cIiwgY29sb3I6IFwidGV4dC1pbmRpZ28tNjAwXCIsIGJnOiBcImJnLWluZGlnby01MFwiIH0sXG4gICAgICAgICAgICAgIHsgaWNvbjogUnVsZXIsIHRpdGxlOiBcIkZpbml0aW9uc1wiLCBkZXNjOiBcIlBvc2UgZXhwZXJ0ZSBkZSBjYXJyZWxhZ2UgZ3JhbmQgZm9ybWF0LCBmYcOvZW5jZSBldCDDqWNsYWlyYWdlIGQnYW1iaWFuY2UuXCIsIGNvbG9yOiBcInRleHQtcGluay02MDBcIiwgYmc6IFwiYmctcGluay01MFwiIH1cbiAgICAgICAgICAgIF0ubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4xIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IG1kOnAtMTAgcm91bmRlZC0zeGwgbWQ6cm91bmRlZC1bMnJlbV0gc2hhZG93LXhsIHNoYWRvdy1zbGF0ZS0yMDAvNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTE0IGgtMTQgbWQ6dy0xNiBtZDpoLTE2ICR7aXRlbS5iZ30gcm91bmRlZC0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNmB9PlxuICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9e2B3LTcgaC03IG1kOnctOCBtZDpoLTggJHtpdGVtLmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTMgbWQ6bWItNFwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS02MDAgbGVhZGluZy1yZWxheGVkIHRleHQtYmFzZSBtZDp0ZXh0LWxnXCI+e2l0ZW0uZGVzY308L3A+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIENPTlRFTlQgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IG1kOnB5LTIwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgZ3JpZCBsZzpncmlkLWNvbHMtMiBnYXAtMTIgbGc6Z2FwLTIwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci0yIGxnOm9yZGVyLTEgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLXB1cnBsZS02MDAvNSByb3VuZGVkLVsyLjVyZW1dIHRyYW5zZm9ybSAtcm90YXRlLTMgc2NhbGUtOTVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwMzgyNTM5NDU1MS0yZTdlYWFjZTZhMmFcIiBcbiAgICAgICAgICAgICAgICBhbHQ9XCJEw6l0YWlsIHJvYmluZXR0ZXJpZVwiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtM3hsIG1kOnJvdW5kZWQtWzIuNXJlbV0gc2hhZG93LTJ4bCB3LWZ1bGwgb2JqZWN0LWNvdmVyIGgtWzQwMHB4XSBtZDpoLVs2MDBweF1cIiBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci0xIGxnOm9yZGVyLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNjAwIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQteHMgbWQ6dGV4dC1zbSBtYi0zIGJsb2NrXCI+U8OpcsOpbml0w6k8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItNiBtZDptYi04IGxlYWRpbmctdGlnaHRcIj5VbiBpbnRlcmxvY3V0ZXVyIHVuaXF1ZTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIHRleHQtc2xhdGUtNjAwIG1iLTggbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgUGx1cyBiZXNvaW4gZGUgY29vcmRvbm5lciBwbG9tYmllciwgY2FycmVsZXVyIGV0IMOpbGVjdHJpY2llbi4gQlAyQyBwcmVuZCBlbiBjaGFyZ2UgbCdpbnTDqWdyYWxpdMOpIGRlIHZvdHJlIGNoYW50aWVyIFxuICAgICAgICAgICAgICAgIHBvdXIgdW5lIHRyYW5xdWlsbGl0w6kgZCdlc3ByaXQgdG90YWxlIGV0IHVuIHLDqXN1bHRhdCBoYXJtb25pZXV4LCBsaXZyw6kgZGFucyBsZXMgZMOpbGFpcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWItOCBtZDptYi0xMFwiPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICBcIkNyw6lhdGlvbiBkZSBkb3VjaGVzIFBNUiBhY2Nlc3NpYmxlc1wiLCBcbiAgICAgICAgICAgICAgICAgIFwiTWF0w6lyaWF1eCBwcmVtaXVtIGV0IGR1cmFibGVzXCIsIFxuICAgICAgICAgICAgICAgICAgXCLDiXRhbmNow6lpdMOpIHNvdXMgY2FycmVsYWdlIGdhcmFudGllIChTUEVDKVwiLCBcbiAgICAgICAgICAgICAgICAgIFwiQ2hhbnRpZXIgcHJvcHJlIGV0IHByb3TDqWfDqSBxdW90aWRpZW5uZW1lbnRcIlxuICAgICAgICAgICAgICAgIF0ubWFwKCh0ZXh0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcC00IHJvdW5kZWQteGwgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy02IG1kOmgtNiB0ZXh0LXB1cnBsZS01MDAgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNzAwIGZvbnQtbWVkaXVtIHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogUE9SVEZPTElPIFNFQ1RJT04gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IG1kOnB5LTIwIGJnLXNsYXRlLTUwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LVs1MDBweF0gaC1bNTAwcHhdIGJnLXB1cnBsZS0xMDAvNDAgcm91bmRlZC1mdWxsIGJsdXItWzEwMHB4XSB0cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBwb2ludGVyLWV2ZW50cy1ub25lXCI+PC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xMiBtZDptYi0xNlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS02MDAgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC14cyBtZDp0ZXh0LXNtIG1iLTMgYmxvY2tcIj5Sw6lhbGlzYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTZcIj5Ob3RyZSBQb3J0Zm9saW8gZGUgUsOpbm92YXRpb25zPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIHRleHQtc2xhdGUtNjAwXCI+XG4gICAgICAgICAgICAgICAgRMOpY291dnJleiBub3MgZGVybmnDqHJlcyByw6lhbGlzYXRpb25zLiBEZXMgdHJhbnNmb3JtYXRpb25zIGNvbXBsw6h0ZXMgcG91ciBkZXMgZXNwYWNlcyBkZSB2aWUgcsOpaW52ZW50w6lzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFBvcnRmb2xpb0dhbGxlcnkgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICB7LyogQ09OVEFDVCBTVFJJUCAqL31cbiAgICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInB5LTE2IG1kOnB5LTI0IGJnLXB1cnBsZS05NTAgdGV4dC13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdy1bNTAwcHhdIGgtWzUwMHB4XSBiZy1wdXJwbGUtNjAwLzEwIHJvdW5kZWQtZnVsbCBibHVyLVsxMDBweF0gdHJhbnNsYXRlLXgtMS8zIHRyYW5zbGF0ZS15LTEvM1wiPjwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IHRleHQtY2VudGVyIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgbWItNiBtZDptYi04XCI+SW1hZ2luZXogdm90cmUgbm91dmVsbGUgc2FsbGUgZGUgYmFpbjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS0yMDAgdGV4dC1sZyBtZDp0ZXh0LXhsIG1heC13LTJ4bCBteC1hdXRvIG1iLTEwIG1kOm1iLTEyXCI+XG4gICAgICAgICAgICAgIFRyYW5zZm9ybW9ucyBlbnNlbWJsZSB2b3RyZSBlc3BhY2UgZW4gdW4gbGlldSBkZSBiaWVuLcOqdHJlIGFic29sdS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtZDpnYXAtNlwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOiszMzYwMTc2MTM5NVwiIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgcHgtMTAgcHktNiB0ZXh0LWxnIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgc2hhZG93LWxnIHNoYWRvdy1wdXJwbGUtNjAwLzMwXCI+XG4gICAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwibXItMyB3LTUgaC01XCIgLz4gMDYgMDEgNzYgMTMgOTVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gYmctd2hpdGUvMTAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIGhvdmVyOmJnLXdoaXRlLzIwIHRleHQtd2hpdGUgcHgtMTAgcHktNiB0ZXh0LWxnIHJvdW5kZWQtZnVsbCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIFByZW5kcmUgUmVuZGV6LXZvdXNcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVub3ZhdGlvblBhZ2U7XG4iXSwiZmlsZSI6Ii9ob21lL3U3MzMzODM0MzYvd2Vic2l0ZXMvb2E5U3pwWGhGL3B1YmxpY19odG1sL3NyYy9wYWdlcy9SZW5vdmF0aW9uUGFnZS5qc3gifQ==

