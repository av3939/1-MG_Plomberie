const ChauffagePage = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Chauffage Fréjus | Installation & Maintenance | BP2C" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Expert chauffagiste Fréjus. Installation chaudière, pompe à chaleur, entretien annuel. Confort thermique garanti." }, void 0, false, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-50 font-sans", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1700124084147-995973b6a970", alt: "Système de chauffage moderne", className: "w-full h-full object-cover", "data-edit-id": "src/pages/ChauffagePage.jsx:20:13" }, void 0, false, {
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
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-400 animate-pulse", "data-edit-id": "src/pages/ChauffagePage.jsx:35:17" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-orange-100 font-semibold tracking-wider uppercase text-[10px] md:text-xs", "data-edit-id": "src/pages/ChauffagePage.jsx:36:17", children: "Expertise Chauffage" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight", "data-edit-disabled": "true", children: [
            "Confort Thermique & ",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-orange-400", children: "Économies d'Énergie" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light", "data-edit-disabled": "true", children: [
            "Installation, entretien et dépannage de vos systèmes de chauffage.",
            /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
            }, this),
            "Optimisez la performance énergétique de votre habitat."
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center gap-4", children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 rounded-full text-lg shadow-lg shadow-orange-600/30 hover:scale-105 transition-all", "data-edit-disabled": "true", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "mr-2 h-5 w-5" }, void 0, false, {
            }, this),
            " Devis Gratuit"
          ] }, void 0, true, {
          }, this) }, void 0, false, {
          }, this) }, void 0, false, {
        ] }, void 0, true, {
        }, this) }, void 0, false, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-24 container mx-auto px-4 md:px-6 md:-mt-24 relative z-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: [{
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
        }, this) }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4", "data-edit-disabled": "true", children: item.title }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg", "data-edit-disabled": "true", children: item.desc }, void 0, false, {
      ] }, i, true, {
      }, this)) }, void 0, false, {
      }, this) }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "order-2 lg:order-1 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-orange-600/5 rounded-[2.5rem] transform -rotate-3 scale-95" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1700124108954-49db9cfe3e22", alt: "Installation chauffage", className: "relative rounded-3xl md:rounded-[2.5rem] shadow-2xl w-full object-cover h-[400px] md:h-[600px]", "data-edit-id": "src/pages/ChauffagePage.jsx:88:15" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "order-1 lg:order-2", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-orange-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/ChauffagePage.jsx:95:15", children: "Performance" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-id": "src/pages/ChauffagePage.jsx:96:15", children: "Optimisez votre consommation" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-slate-600 mb-8 leading-relaxed", "data-edit-id": "src/pages/ChauffagePage.jsx:97:15", children: "Un système de chauffage bien entretenu et moderne, c'est jusqu'à 30% d'économies sur votre facture énergétique. BP2C vous conseille sur les meilleures solutions adaptées à votre logement (Pompe à Chaleur, Gaz condensation)." }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 mb-8 md:mb-10", children: ["RGE Qualibat (en cours d'obtention)", "Désembouage de circuits haute pression", "Régulation thermique connectée", "Marques premium (Daikin, Atlantic, Viessmann)"].map((text, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 md:w-6 md:h-6 text-orange-500 flex-shrink-0" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700 font-medium text-sm md:text-base", "data-edit-disabled": "true", children: text }, void 0, false, {
          ] }, i, true, {
          }, this)) }, void 0, false, {
        ] }, void 0, true, {
      ] }, void 0, true, {
      }, this) }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "contact", className: "py-16 md:py-24 bg-orange-950 text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 text-center relative z-10", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold mb-6 md:mb-8", "data-edit-id": "src/pages/ChauffagePage.jsx:124:13", children: "Préparez l'hiver sereinement" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-orange-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12", "data-edit-id": "src/pages/ChauffagePage.jsx:125:13", children: "L'entretien de votre chaudière est une obligation légale et une garantie de sécurité." }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row justify-center gap-4 md:gap-6", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg rounded-full font-bold shadow-lg shadow-orange-600/30", "data-edit-disabled": "true", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "mr-3 w-5 h-5" }, void 0, false, {
              }, this),
              " 06 01 76 13 95"
            ] }, void 0, true, {
            }, this) }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-6 text-lg rounded-full font-bold", "data-edit-id": "src/pages/ChauffagePage.jsx:135:18", children: "Nous Contacter" }, void 0, false, {
            }, this) }, void 0, false, {
          ] }, void 0, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_c = ChauffagePage;
export default ChauffagePage;
var _c;
$RefreshReg$(_c, "ChauffagePage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/ChauffagePage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/ChauffagePage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUE7QUFBQTtBQUFBLFdBNkhBO0FBQUEsT0FuSUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW9JQTtBQUVKO0FBQUNJLEtBeElLZjtBQTBJTixlQUFlQTtBQUFhLElBQUFlO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiSGVsbWV0IiwibW90aW9uIiwiTGluayIsIlBob25lIiwiVGhlcm1vbWV0ZXIiLCJXcmVuY2giLCJDYWxlbmRhciIsIkNoZWNrQ2lyY2xlIiwiRmxhbWUiLCJCdXR0b24iLCJDaGF1ZmZhZ2VQYWdlIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsImljb24iLCJ0aXRsZSIsImRlc2MiLCJjb2xvciIsImJnIiwibWFwIiwiaXRlbSIsImkiLCJvbmNlIiwiZGVsYXkiLCJ0ZXh0IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsic3JjL3BhZ2VzL0NoYXVmZmFnZVBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFBob25lLCBUaGVybW9tZXRlciwgV3JlbmNoLCBDYWxlbmRhciwgQ2hlY2tDaXJjbGUsIEZsYW1lIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuXG5jb25zdCBDaGF1ZmZhZ2VQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+Q2hhdWZmYWdlIEZyw6lqdXMgfCBJbnN0YWxsYXRpb24gJiBNYWludGVuYW5jZSB8IEJQMkM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRXhwZXJ0IGNoYXVmZmFnaXN0ZSBGcsOpanVzLiBJbnN0YWxsYXRpb24gY2hhdWRpw6hyZSwgcG9tcGUgw6AgY2hhbGV1ciwgZW50cmV0aWVuIGFubnVlbC4gQ29uZm9ydCB0aGVybWlxdWUgZ2FyYW50aS5cIiAvPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXNsYXRlLTUwIGZvbnQtc2Fuc1wiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLVs2MHZoXSBtZDpoLVs3MHZoXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcHQtMTYgbWQ6cHQtMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiPlxuICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE3MDAxMjQwODQxNDctOTk1OTczYjZhOTcwXCIgXG4gICAgICAgICAgICAgIGFsdD1cIlN5c3TDqG1lIGRlIGNoYXVmZmFnZSBtb2Rlcm5lXCIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNsYXRlLTkwMC85MCB2aWEtc2xhdGUtOTAwLzcwIHRvLXNsYXRlLTkwMC8zMFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IHJlbGF0aXZlIHotMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19IFxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLW9yYW5nZS01MDAvMjAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLW9yYW5nZS00MDAvMzAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSBtZDpweC00IG1kOnB5LTEuNSBtYi00IG1kOm1iLTZcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEuNSBoLTEuNSBtZDp3LTIgbWQ6aC0yIHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtNDAwIGFuaW1hdGUtcHVsc2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtMTAwIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlIHRleHQtWzEwcHhdIG1kOnRleHQteHNcIj5FeHBlcnRpc2UgQ2hhdWZmYWdlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHNtOnRleHQtNXhsIG1kOnRleHQtN3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNiBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgQ29uZm9ydCBUaGVybWlxdWUgJiA8YnIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTQwMFwiPsOJY29ub21pZXMgZCfDiW5lcmdpZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIHRleHQtc2xhdGUtMjAwIG1heC13LTJ4bCBteC1hdXRvIG1iLTggbWQ6bWItMTAgbGVhZGluZy1yZWxheGVkIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBJbnN0YWxsYXRpb24sIGVudHJldGllbiBldCBkw6lwYW5uYWdlIGRlIHZvcyBzeXN0w6htZXMgZGUgY2hhdWZmYWdlLjxiciBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIi8+XG4gICAgICAgICAgICAgICAgT3B0aW1pc2V6IGxhIHBlcmZvcm1hbmNlIMOpbmVyZ8OpdGlxdWUgZGUgdm90cmUgaGFiaXRhdC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOiszMzYwMTc2MTM5NVwiIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS03MDAgdGV4dC13aGl0ZSBweC0xMCBweS02IHJvdW5kZWQtZnVsbCB0ZXh0LWxnIHNoYWRvdy1sZyBzaGFkb3ctb3JhbmdlLTYwMC8zMCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cIm1yLTIgaC01IHctNVwiIC8+IERldmlzIEdyYXR1aXRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogU0VSVklDRVMgR1JJRCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbWQ6cHktMjQgY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IG1kOi1tdC0yNCByZWxhdGl2ZSB6LTIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1kOmdhcC04XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGljb246IEZsYW1lLCB0aXRsZTogXCJJbnN0YWxsYXRpb25cIiwgZGVzYzogXCJDaGF1ZGnDqHJlcyBnYXosIHBvbXBlcyDDoCBjaGFsZXVyLCByYWRpYXRldXJzIGhhdXRlIHBlcmZvcm1hbmNlLlwiLCBjb2xvcjogXCJ0ZXh0LW9yYW5nZS02MDBcIiwgYmc6IFwiYmctb3JhbmdlLTUwXCIgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiBDYWxlbmRhciwgdGl0bGU6IFwiRW50cmV0aWVuIEFubnVlbFwiLCBkZXNjOiBcIk1haW50ZW5hbmNlIG9ibGlnYXRvaXJlIGV0IHByw6l2ZW50aXZlIHBvdXIgdm90cmUgc8OpY3VyaXTDqSBldCBsb25nw6l2aXTDqS5cIiwgY29sb3I6IFwidGV4dC1ibHVlLTYwMFwiLCBiZzogXCJiZy1ibHVlLTUwXCIgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiBXcmVuY2gsIHRpdGxlOiBcIkTDqXBhbm5hZ2VcIiwgZGVzYzogXCJEaWFnbm9zdGljIHByw6ljaXMgZXQgcsOpcGFyYXRpb24gcmFwaWRlIGRlIHZvcyBwYW5uZXMgZGUgY2hhdWZmYWdlLlwiLCBjb2xvcjogXCJ0ZXh0LXJlZC02MDBcIiwgYmc6IFwiYmctcmVkLTUwXCIgfVxuICAgICAgICAgICAgXS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjEgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggbWQ6cC0xMCByb3VuZGVkLTN4bCBtZDpyb3VuZGVkLVsycmVtXSBzaGFkb3cteGwgc2hhZG93LXNsYXRlLTIwMC81MCBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMTQgaC0xNCBtZDp3LTE2IG1kOmgtMTYgJHtpdGVtLmJnfSByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi02YH0+XG4gICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT17YHctNyBoLTcgbWQ6dy04IG1kOmgtOCAke2l0ZW0uY29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItMyBtZDptYi00XCI+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlIG1kOnRleHQtbGdcIj57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogQ09OVEVOVCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbWQ6cHktMjAgYmctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiBncmlkIGxnOmdyaWQtY29scy0yIGdhcC0xMiBsZzpnYXAtMjAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLTIgbGc6b3JkZXItMSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctb3JhbmdlLTYwMC81IHJvdW5kZWQtWzIuNXJlbV0gdHJhbnNmb3JtIC1yb3RhdGUtMyBzY2FsZS05NVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNzAwMTI0MTA4OTU0LTQ5ZGI5Y2ZlM2UyMlwiIFxuICAgICAgICAgICAgICAgIGFsdD1cIkluc3RhbGxhdGlvbiBjaGF1ZmZhZ2VcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTN4bCBtZDpyb3VuZGVkLVsyLjVyZW1dIHNoYWRvdy0yeGwgdy1mdWxsIG9iamVjdC1jb3ZlciBoLVs0MDBweF0gbWQ6aC1bNjAwcHhdXCIgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItMSBsZzpvcmRlci0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LXhzIG1kOnRleHQtc20gbWItMyBibG9ja1wiPlBlcmZvcm1hbmNlPC9zcGFuPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTYgbWQ6bWItOCBsZWFkaW5nLXRpZ2h0XCI+T3B0aW1pc2V6IHZvdHJlIGNvbnNvbW1hdGlvbjwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIHRleHQtc2xhdGUtNjAwIG1iLTggbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgVW4gc3lzdMOobWUgZGUgY2hhdWZmYWdlIGJpZW4gZW50cmV0ZW51IGV0IG1vZGVybmUsIGMnZXN0IGp1c3F1J8OgIDMwJSBkJ8OpY29ub21pZXMgc3VyIHZvdHJlIGZhY3R1cmUgw6luZXJnw6l0aXF1ZS4gXG4gICAgICAgICAgICAgICAgQlAyQyB2b3VzIGNvbnNlaWxsZSBzdXIgbGVzIG1laWxsZXVyZXMgc29sdXRpb25zIGFkYXB0w6llcyDDoCB2b3RyZSBsb2dlbWVudCAoUG9tcGUgw6AgQ2hhbGV1ciwgR2F6IGNvbmRlbnNhdGlvbikuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG1iLTggbWQ6bWItMTBcIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgXCJSR0UgUXVhbGliYXQgKGVuIGNvdXJzIGQnb2J0ZW50aW9uKVwiLCBcbiAgICAgICAgICAgICAgICAgIFwiRMOpc2VtYm91YWdlIGRlIGNpcmN1aXRzIGhhdXRlIHByZXNzaW9uXCIsIFxuICAgICAgICAgICAgICAgICAgXCJSw6lndWxhdGlvbiB0aGVybWlxdWUgY29ubmVjdMOpZVwiLCBcbiAgICAgICAgICAgICAgICAgIFwiTWFycXVlcyBwcmVtaXVtIChEYWlraW4sIEF0bGFudGljLCBWaWVzc21hbm4pXCJcbiAgICAgICAgICAgICAgICBdLm1hcCgodGV4dCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtNCByb3VuZGVkLXhsIGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctNiBtZDpoLTYgdGV4dC1vcmFuZ2UtNTAwIGZsZXgtc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTcwMCBmb250LW1lZGl1bSB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgIHsvKiBDT05UQUNUIFNUUklQICovfVxuICAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicHktMTYgbWQ6cHktMjQgYmctb3JhbmdlLTk1MCB0ZXh0LXdoaXRlIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHctWzUwMHB4XSBoLVs1MDBweF0gYmctb3JhbmdlLTYwMC8xMCByb3VuZGVkLWZ1bGwgYmx1ci1bMTAwcHhdIC10cmFuc2xhdGUteC0xLzMgdHJhbnNsYXRlLXktMS8zXCI+PC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgdGV4dC1jZW50ZXIgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCBtYi02IG1kOm1iLThcIj5QcsOpcGFyZXogbCdoaXZlciBzZXJlaW5lbWVudDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS0yMDAgdGV4dC1sZyBtZDp0ZXh0LXhsIG1heC13LTJ4bCBteC1hdXRvIG1iLTEwIG1kOm1iLTEyXCI+XG4gICAgICAgICAgICAgIEwnZW50cmV0aWVuIGRlIHZvdHJlIGNoYXVkacOocmUgZXN0IHVuZSBvYmxpZ2F0aW9uIGzDqWdhbGUgZXQgdW5lIGdhcmFudGllIGRlIHPDqWN1cml0w6kuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTQgbWQ6Z2FwLTZcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzM2MDE3NjEzOTVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCB0ZXh0LXdoaXRlIHB4LTEwIHB5LTYgdGV4dC1sZyByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIHNoYWRvdy1sZyBzaGFkb3ctb3JhbmdlLTYwMC8zMFwiPlxuICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cIm1yLTMgdy01IGgtNVwiIC8+IDA2IDAxIDc2IDEzIDk1XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLXdoaXRlLzEwIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBob3ZlcjpiZy13aGl0ZS8yMCB0ZXh0LXdoaXRlIHB4LTEwIHB5LTYgdGV4dC1sZyByb3VuZGVkLWZ1bGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICBOb3VzIENvbnRhY3RlclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF1ZmZhZ2VQYWdlO1xuIl0sImZpbGUiOiIvaG9tZS91NzMzMzgzNDM2L3dlYnNpdGVzL29hOVN6cFhoRi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvQ2hhdWZmYWdlUGFnZS5qc3gifQ==

