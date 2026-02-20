const ClimatisationPage = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Climatisation Fréjus | Gainable & Split | BP2C" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Installation de climatisation à Fréjus. Spécialiste du gainable et réversible. Fraîcheur l'été, chaleur l'hiver." }, void 0, false, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-50 font-sans", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1699974783477-74e9ab7546a4", alt: "Climatisation Design", className: "w-full h-full object-cover", "data-edit-id": "src/pages/ClimatisationPage.jsx:20:13" }, void 0, false, {
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
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse", "data-edit-id": "src/pages/ClimatisationPage.jsx:35:17" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-cyan-100 font-semibold tracking-wider uppercase text-[10px] md:text-xs", "data-edit-id": "src/pages/ClimatisationPage.jsx:36:17", children: "Expertise Froid" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight", "data-edit-disabled": "true", children: [
            "Fraîcheur Absolue & ",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-cyan-400", children: "Silence Garanti" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light", "data-edit-disabled": "true", children: [
            "Installation de systèmes de climatisation performants et discrets.",
            /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
            }, this),
            "Gainable, Split, Réversible : la température idéale toute l'année."
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center gap-4", children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 rounded-full text-lg shadow-lg shadow-cyan-600/30 hover:scale-105 transition-all", "data-edit-disabled": "true", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "mr-2 h-5 w-5" }, void 0, false, {
            }, this),
            " Étude Gratuite"
          ] }, void 0, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-24 container mx-auto px-4 md:px-6 md:-mt-24 relative z-20", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: [{
        icon: Wind,
        title: "Gainable",
        desc: "La solution invisible. Diffuseur d'air discret intégré aux faux-plafonds pour un design épuré.",
        color: "text-cyan-600",
        bg: "bg-cyan-50"
      }, {
        icon: Zap,
        title: "Réversible",
        desc: "Chauffez l'hiver et climatisez l'été avec le même appareil économique (PAC Air/Air).",
        color: "text-blue-600",
        bg: "bg-blue-50"
      }, {
        icon: Snowflake,
        title: "Maintenance",
        desc: "Nettoyage antibactérien des filtres et vérification de la charge de gaz.",
        color: "text-indigo-600",
        bg: "bg-indigo-50"
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
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-cyan-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/ClimatisationPage.jsx:87:15", children: "Esthétique & Confort" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-id": "src/pages/ClimatisationPage.jsx:88:15", children: "L'expertise du Gainable" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-slate-600 mb-8 leading-relaxed", "data-edit-id": "src/pages/ClimatisationPage.jsx:89:15", children: "Le système gainable est le nec plus ultra du confort thermique résidentiel. Invisible et silencieux, il valorise votre bien immobilier tout en assurant une température homogène dans toutes les pièces via des grilles discrètes." }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 mb-8 md:mb-10", children: ["Intégration architecturale parfaite (invisible)", "Silence absolu de fonctionnement", "Pilotage pièce par pièce (Airzone)", "Efficacité énergétique A++ / A+++"].map((text, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 md:w-6 md:h-6 text-cyan-500 flex-shrink-0" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700 font-medium text-sm md:text-base", "data-edit-disabled": "true", children: text }, void 0, false, {
          ] }, i, true, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-cyan-600/5 rounded-[2.5rem] transform rotate-3 scale-95" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("img", { src: "https://images.unsplash.com/photo-1590756254933-2873d72a83b6", alt: "Climatisation gainable", className: "relative rounded-3xl md:rounded-[2.5rem] shadow-2xl w-full object-cover h-[400px] md:h-[600px]", "data-edit-id": "src/pages/ClimatisationPage.jsx:110:15" }, void 0, false, {
        ] }, void 0, true, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "contact", className: "py-16 md:py-24 bg-cyan-950 text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 text-center relative z-10", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold mb-6 md:mb-8", "data-edit-id": "src/pages/ClimatisationPage.jsx:124:13", children: "Un projet de climatisation ?" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-cyan-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12", "data-edit-id": "src/pages/ClimatisationPage.jsx:125:13", children: "Profitez d'une étude thermique gratuite pour dimensionner parfaitement votre installation." }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row justify-center gap-4 md:gap-6", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "w-full sm:w-auto", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg rounded-full font-bold shadow-lg shadow-cyan-600/30", "data-edit-disabled": "true", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "mr-3 w-5 h-5" }, void 0, false, {
              }, this),
              " 06 01 76 13 95"
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-6 text-lg rounded-full font-bold", "data-edit-id": "src/pages/ClimatisationPage.jsx:135:18", children: "Demander une étude" }, void 0, false, {
          ] }, void 0, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_c = ClimatisationPage;
export default ClimatisationPage;
var _c;
$RefreshReg$(_c, "ClimatisationPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/ClimatisationPage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/ClimatisationPage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTZIQTtBQUFBLE9BbklGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvSUE7QUFFSjtBQUFDSSxLQXhJS2Y7QUEwSU4sZUFBZUE7QUFBaUIsSUFBQWU7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJIZWxtZXQiLCJtb3Rpb24iLCJQaG9uZSIsIldpbmQiLCJTbm93Zmxha2UiLCJDaGVja0NpcmNsZSIsIlphcCIsIkJ1dHRvbiIsIkxpbmsiLCJDbGltYXRpc2F0aW9uUGFnZSIsIm9wYWNpdHkiLCJ5IiwiZHVyYXRpb24iLCJpY29uIiwidGl0bGUiLCJkZXNjIiwiY29sb3IiLCJiZyIsIm1hcCIsIml0ZW0iLCJpIiwib25jZSIsImRlbGF5IiwidGV4dCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9DbGltYXRpc2F0aW9uUGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUGhvbmUsIFdpbmQsIFNub3dmbGFrZSwgQ2hlY2tDaXJjbGUsIFphcCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgQ2xpbWF0aXNhdGlvblBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5DbGltYXRpc2F0aW9uIEZyw6lqdXMgfCBHYWluYWJsZSAmIFNwbGl0IHwgQlAyQzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJbnN0YWxsYXRpb24gZGUgY2xpbWF0aXNhdGlvbiDDoCBGcsOpanVzLiBTcMOpY2lhbGlzdGUgZHUgZ2FpbmFibGUgZXQgcsOpdmVyc2libGUuIEZyYcOuY2hldXIgbCfDqXTDqSwgY2hhbGV1ciBsJ2hpdmVyLlwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtNTAgZm9udC1zYW5zXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzYwdmhdIG1kOmgtWzcwdmhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBwdC0xNiBtZDpwdC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY5OTk3NDc4MzQ3Ny03NGU5YWI3NTQ2YTRcIiBcbiAgICAgICAgICAgICAgYWx0PVwiQ2xpbWF0aXNhdGlvbiBEZXNpZ25cIiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tc2xhdGUtOTAwLzkwIHZpYS1zbGF0ZS05MDAvNzAgdG8tc2xhdGUtOTAwLzMwXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgcmVsYXRpdmUgei0xMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX0gXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctY3lhbi01MDAvMjAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWN5YW4tNDAwLzMwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgbWQ6cHgtNCBtZDpweS0xLjUgbWItNCBtZDptYi02XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xLjUgaC0xLjUgbWQ6dy0yIG1kOmgtMiByb3VuZGVkLWZ1bGwgYmctY3lhbi00MDAgYW5pbWF0ZS1wdWxzZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWN5YW4tMTAwIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlIHRleHQtWzEwcHhdIG1kOnRleHQteHNcIj5FeHBlcnRpc2UgRnJvaWQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC01eGwgbWQ6dGV4dC03eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNCBtZDptYi02IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICBGcmHDrmNoZXVyIEFic29sdWUgJiA8YnIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY3lhbi00MDBcIj5TaWxlbmNlIEdhcmFudGk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTIwMCBtYXgtdy0yeGwgbXgtYXV0byBtYi04IG1kOm1iLTEwIGxlYWRpbmctcmVsYXhlZCBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgSW5zdGFsbGF0aW9uIGRlIHN5c3TDqG1lcyBkZSBjbGltYXRpc2F0aW9uIHBlcmZvcm1hbnRzIGV0IGRpc2NyZXRzLjxiciBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgIEdhaW5hYmxlLCBTcGxpdCwgUsOpdmVyc2libGUgOiBsYSB0ZW1ww6lyYXR1cmUgaWTDqWFsZSB0b3V0ZSBsJ2FubsOpZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOiszMzYwMTc2MTM5NVwiIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBiZy1jeWFuLTYwMCBob3ZlcjpiZy1jeWFuLTcwMCB0ZXh0LXdoaXRlIHB4LTEwIHB5LTYgcm91bmRlZC1mdWxsIHRleHQtbGcgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTYwMC8zMCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cIm1yLTIgaC01IHctNVwiIC8+IMOJdHVkZSBHcmF0dWl0ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTRVJWSUNFUyBHUklEICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yNCBjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgbWQ6LW10LTI0IHJlbGF0aXZlIHotMjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTYgbWQ6Z2FwLThcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgaWNvbjogV2luZCwgdGl0bGU6IFwiR2FpbmFibGVcIiwgZGVzYzogXCJMYSBzb2x1dGlvbiBpbnZpc2libGUuIERpZmZ1c2V1ciBkJ2FpciBkaXNjcmV0IGludMOpZ3LDqSBhdXggZmF1eC1wbGFmb25kcyBwb3VyIHVuIGRlc2lnbiDDqXB1csOpLlwiLCBjb2xvcjogXCJ0ZXh0LWN5YW4tNjAwXCIsIGJnOiBcImJnLWN5YW4tNTBcIiB9LFxuICAgICAgICAgICAgICB7IGljb246IFphcCwgdGl0bGU6IFwiUsOpdmVyc2libGVcIiwgZGVzYzogXCJDaGF1ZmZleiBsJ2hpdmVyIGV0IGNsaW1hdGlzZXogbCfDqXTDqSBhdmVjIGxlIG3Dqm1lIGFwcGFyZWlsIMOpY29ub21pcXVlIChQQUMgQWlyL0FpcikuXCIsIGNvbG9yOiBcInRleHQtYmx1ZS02MDBcIiwgYmc6IFwiYmctYmx1ZS01MFwiIH0sXG4gICAgICAgICAgICAgIHsgaWNvbjogU25vd2ZsYWtlLCB0aXRsZTogXCJNYWludGVuYW5jZVwiLCBkZXNjOiBcIk5ldHRveWFnZSBhbnRpYmFjdMOpcmllbiBkZXMgZmlsdHJlcyBldCB2w6lyaWZpY2F0aW9uIGRlIGxhIGNoYXJnZSBkZSBnYXouXCIsIGNvbG9yOiBcInRleHQtaW5kaWdvLTYwMFwiLCBiZzogXCJiZy1pbmRpZ28tNTBcIiB9XG4gICAgICAgICAgICBdLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaSAqIDAuMSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCBtZDpwLTEwIHJvdW5kZWQtM3hsIG1kOnJvdW5kZWQtWzJyZW1dIHNoYWRvdy14bCBzaGFkb3ctc2xhdGUtMjAwLzUwIGJvcmRlciBib3JkZXItc2xhdGUtMTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xNCBoLTE0IG1kOnctMTYgbWQ6aC0xNiAke2l0ZW0uYmd9IHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTZgfT5cbiAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPXtgdy03IGgtNyBtZDp3LTggbWQ6aC04ICR7aXRlbS5jb2xvcn1gfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi0zIG1kOm1iLTRcIj57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNjAwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZ1wiPntpdGVtLmRlc2N9PC9wPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBDT05URU5UICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yMCBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IGdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGxnOmdhcC0yMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY3lhbi02MDAgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC14cyBtZDp0ZXh0LXNtIG1iLTMgYmxvY2tcIj5Fc3Row6l0aXF1ZSAmIENvbmZvcnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItNiBtZDptYi04IGxlYWRpbmctdGlnaHRcIj5MJ2V4cGVydGlzZSBkdSBHYWluYWJsZTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIHRleHQtc2xhdGUtNjAwIG1iLTggbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgTGUgc3lzdMOobWUgZ2FpbmFibGUgZXN0IGxlIG5lYyBwbHVzIHVsdHJhIGR1IGNvbmZvcnQgdGhlcm1pcXVlIHLDqXNpZGVudGllbC4gSW52aXNpYmxlIGV0IHNpbGVuY2lldXgsIFxuICAgICAgICAgICAgICAgIGlsIHZhbG9yaXNlIHZvdHJlIGJpZW4gaW1tb2JpbGllciB0b3V0IGVuIGFzc3VyYW50IHVuZSB0ZW1ww6lyYXR1cmUgaG9tb2fDqG5lIGRhbnMgdG91dGVzIGxlcyBwacOoY2VzIHZpYSBkZXMgZ3JpbGxlcyBkaXNjcsOodGVzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtYi04IG1kOm1iLTEwXCI+XG4gICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgIFwiSW50w6lncmF0aW9uIGFyY2hpdGVjdHVyYWxlIHBhcmZhaXRlIChpbnZpc2libGUpXCIsIFxuICAgICAgICAgICAgICAgICAgXCJTaWxlbmNlIGFic29sdSBkZSBmb25jdGlvbm5lbWVudFwiLCBcbiAgICAgICAgICAgICAgICAgIFwiUGlsb3RhZ2UgcGnDqGNlIHBhciBwacOoY2UgKEFpcnpvbmUpXCIsIFxuICAgICAgICAgICAgICAgICAgXCJFZmZpY2FjaXTDqSDDqW5lcmfDqXRpcXVlIEErKyAvIEErKytcIlxuICAgICAgICAgICAgICAgIF0ubWFwKCh0ZXh0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcC00IHJvdW5kZWQteGwgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy02IG1kOmgtNiB0ZXh0LWN5YW4tNTAwIGZsZXgtc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTcwMCBmb250LW1lZGl1bSB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctY3lhbi02MDAvNSByb3VuZGVkLVsyLjVyZW1dIHRyYW5zZm9ybSByb3RhdGUtMyBzY2FsZS05NVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkwNzU2MjU0OTMzLTI4NzNkNzJhODNiNlwiIFxuICAgICAgICAgICAgICAgIGFsdD1cIkNsaW1hdGlzYXRpb24gZ2FpbmFibGVcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTN4bCBtZDpyb3VuZGVkLVsyLjVyZW1dIHNoYWRvdy0yeGwgdy1mdWxsIG9iamVjdC1jb3ZlciBoLVs0MDBweF0gbWQ6aC1bNjAwcHhdXCIgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICB7LyogQ09OVEFDVCBTVFJJUCAqL31cbiAgICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInB5LTE2IG1kOnB5LTI0IGJnLWN5YW4tOTUwIHRleHQtd2hpdGUgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctWzUwMHB4XSBoLVs1MDBweF0gYmctY3lhbi02MDAvMTAgcm91bmRlZC1mdWxsIGJsdXItWzEwMHB4XSB0cmFuc2xhdGUteC0xLzMgLXRyYW5zbGF0ZS15LTEvM1wiPjwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IHRleHQtY2VudGVyIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgbWItNiBtZDptYi04XCI+VW4gcHJvamV0IGRlIGNsaW1hdGlzYXRpb24gPzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWN5YW4tMjAwIHRleHQtbGcgbWQ6dGV4dC14bCBtYXgtdy0yeGwgbXgtYXV0byBtYi0xMCBtZDptYi0xMlwiPlxuICAgICAgICAgICAgICBQcm9maXRleiBkJ3VuZSDDqXR1ZGUgdGhlcm1pcXVlIGdyYXR1aXRlIHBvdXIgZGltZW5zaW9ubmVyIHBhcmZhaXRlbWVudCB2b3RyZSBpbnN0YWxsYXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTQgbWQ6Z2FwLTZcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzM2MDE3NjEzOTVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLWN5YW4tNjAwIGhvdmVyOmJnLWN5YW4tNzAwIHRleHQtd2hpdGUgcHgtMTAgcHktNiB0ZXh0LWxnIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTYwMC8zMFwiPlxuICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cIm1yLTMgdy01IGgtNVwiIC8+IDA2IDAxIDc2IDEzIDk1XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLXdoaXRlLzEwIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBob3ZlcjpiZy13aGl0ZS8yMCB0ZXh0LXdoaXRlIHB4LTEwIHB5LTYgdGV4dC1sZyByb3VuZGVkLWZ1bGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICBEZW1hbmRlciB1bmUgw6l0dWRlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaW1hdGlzYXRpb25QYWdlO1xuIl0sImZpbGUiOiIvaG9tZS91NzMzMzgzNDM2L3dlYnNpdGVzL29hOVN6cFhoRi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvQ2xpbWF0aXNhdGlvblBhZ2UuanN4In0=

