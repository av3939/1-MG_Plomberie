const AboutPage = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "À propos de BP2C | Votre Artisan de Confiance" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Découvrez BP2C, entreprise de plomberie et chauffage à Fréjus dirigée par William. Engagement qualité, expertise et satisfaction client." }, void 0, false, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-50 font-sans", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "pt-24 pb-16 md:pt-32 md:pb-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "text-center max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block", "data-edit-id": "src/pages/AboutPage.jsx:27:15", children: "Notre Philosophie" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-disabled": "true", children: [
          "L'Artisanat au service de ",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600", children: "votre confort" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto", "data-edit-id": "src/pages/AboutPage.jsx:29:15", children: "BP2C, c'est l'histoire d'une passion pour le travail bien fait. Basés à Fréjus, nous mettons notre expertise technique au service des particuliers pour créer des habitats sains, confortables et durables." }, void 0, false, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-24 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: [{
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
      }].map((val, i) => /* @__PURE__ */ jsxDEV(motion.div, { initial: {
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
        /* @__PURE__ */ jsxDEV("div", { className: `w-12 h-12 md:w-14 md:h-14 ${val.bg} rounded-2xl flex items-center justify-center mb-6`, children: /* @__PURE__ */ jsxDEV(val.icon, { className: `w-6 h-6 md:w-8 md:h-8 ${val.color}` }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4", "data-edit-disabled": "true", children: val.title }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg", "data-edit-disabled": "true", children: val.desc }, void 0, false, {
      ] }, i, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 md:py-32 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-orange-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block", "data-edit-id": "src/pages/AboutPage.jsx:68:17", children: "Le Fondateur" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight", "data-edit-id": "src/pages/AboutPage.jsx:69:17", children: "Rencontrez William" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose text-base md:text-lg text-slate-600 leading-relaxed space-y-4 md:space-y-6", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-edit-id": "src/pages/AboutPage.jsx:71:20", children: "Au cœur de BP2C, il y a William, expert technicien passionné. Avec des années d'expérience sur le terrain, il a fondé BP2C avec une vision simple : redonner ses lettres de noblesse au métier de plombier-chauffagiste." }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-edit-id": "src/pages/AboutPage.jsx:74:20", children: `Nos clients le disent mieux que nous : "Très bon contact", "Personne agréable et professionnelle". C'est cette approche humaine, couplée à une haute technicité, qui fait la différence aujourd'hui.` }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-edit-id": "src/pages/AboutPage.jsx:77:20", children: "Que ce soit pour une installation complexe de climatisation gainable ou un dépannage urgent, William s'implique personnellement pour garantir un résultat irréprochable et votre entière satisfaction." }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(Award, { className: "text-blue-600 w-8 h-8 flex-shrink-0" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-slate-900", "data-edit-id": "src/pages/AboutPage.jsx:86:25", children: "Expert Certifié" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500", "data-edit-id": "src/pages/AboutPage.jsx:87:25", children: "Qualifications à jour" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(Shield, { className: "text-blue-600 w-8 h-8 flex-shrink-0" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-slate-900", "data-edit-id": "src/pages/AboutPage.jsx:93:25", children: "Assurance Décennale" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500", "data-edit-id": "src/pages/AboutPage.jsx:94:25", children: "Protection complète" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-10 md:mt-12", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Button, { className: "w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-lg hover:bg-slate-800 transition-colors", "data-edit-id": "src/pages/AboutPage.jsx:101:23", children: "Discuter avec William" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-blue-100 rounded-[2.5rem] md:rounded-[3rem] transform rotate-3" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 relative shadow-2xl", children: [
            /* @__PURE__ */ jsxDEV(PenTool, { className: "w-12 h-12 md:w-16 md:h-16 text-blue-200 mb-6 md:mb-8" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("blockquote", { className: "text-xl md:text-3xl font-serif italic text-slate-800 mb-6 md:mb-8 leading-relaxed", children: `"La satisfaction de mes clients est ma plus belle réussite. Je ne quitte pas un chantier tant qu'il n'est pas parfait."` }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-1 md:w-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-slate-900 uppercase tracking-widest text-xs md:text-sm", "data-edit-id": "src/pages/AboutPage.jsx:117:22", children: "William, Fondateur" }, void 0, false, {
            ] }, void 0, true, {
          ] }, void 0, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_c = AboutPage;
export default AboutPage;
var _c;
$RefreshReg$(_c, "AboutPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/AboutPage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/AboutPage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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dUJBQUMsU0FBSSxXQUFVLHVHQUNaO0FBQUEsbUNBQUMsV0FBUSxXQUFVLDBEQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF5RTtBQUFBLFlBQ3pFLHVCQUFDLGdCQUFXLFdBQVUscUZBQW1GLHVJQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUEsWUFDQSx1QkFBQyxTQUFJLFdBQVUsMkJBQ2I7QUFBQSxxQ0FBQyxTQUFJLFdBQVUsZ0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNEY7QUFBQSxjQUM1Rix1QkFBQyxPQUFFLFdBQVUseUVBQXVFLGtEQUFDLGtDQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1RztBQUFBLGlCQUZ6RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsZUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVNBO0FBQUEsYUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWUE7QUFBQSxXQXRESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdURBLEtBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF5REE7QUFBQSxTQXpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMkdBO0FBQUEsT0FqSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtIQTtBQUVKO0FBQUNHLEtBdEhLYjtBQXdITixlQUFlQTtBQUFTLElBQUFhO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiSGVsbWV0IiwibW90aW9uIiwiU2hpZWxkIiwiVXNlcnMiLCJUYXJnZXQiLCJDaGVja0NpcmNsZSIsIlBlblRvb2wiLCJBd2FyZCIsIkhlYXJ0IiwiQnV0dG9uIiwiTGluayIsIkFib3V0UGFnZSIsIm9wYWNpdHkiLCJ5IiwiaWNvbiIsInRpdGxlIiwiZGVzYyIsImNvbG9yIiwiYmciLCJtYXAiLCJ2YWwiLCJpIiwib25jZSIsImRlbGF5IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsic3JjL3BhZ2VzL0Fib3V0UGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgU2hpZWxkLCBVc2VycywgVGFyZ2V0LCBDaGVja0NpcmNsZSwgUGVuVG9vbCwgQXdhcmQsIEhlYXJ0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT7DgCBwcm9wb3MgZGUgQlAyQyB8IFZvdHJlIEFydGlzYW4gZGUgQ29uZmlhbmNlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkTDqWNvdXZyZXogQlAyQywgZW50cmVwcmlzZSBkZSBwbG9tYmVyaWUgZXQgY2hhdWZmYWdlIMOgIEZyw6lqdXMgZGlyaWfDqWUgcGFyIFdpbGxpYW0uIEVuZ2FnZW1lbnQgcXVhbGl0w6ksIGV4cGVydGlzZSBldCBzYXRpc2ZhY3Rpb24gY2xpZW50LlwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtNTAgZm9udC1zYW5zXCI+XG4gICAgICAgIFxuICAgICAgICB7LyogSEVSTyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtMjQgcGItMTYgbWQ6cHQtMzIgbWQ6cGItMjAgYmctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IFxuICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy00eGwgbXgtYXV0b1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC14cyBtZDp0ZXh0LXNtIG1iLTMgbWQ6bWItNCBibG9ja1wiPk5vdHJlIFBoaWxvc29waGllPC9zcGFuPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC01eGwgbWQ6dGV4dC03eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTYgbWQ6bWItOCBsZWFkaW5nLXRpZ2h0XCI+TCdBcnRpc2FuYXQgYXUgc2VydmljZSBkZSA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIj52b3RyZSBjb25mb3J0PC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWQgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICBCUDJDLCBjJ2VzdCBsJ2hpc3RvaXJlIGQndW5lIHBhc3Npb24gcG91ciBsZSB0cmF2YWlsIGJpZW4gZmFpdC4gQmFzw6lzIMOgIEZyw6lqdXMsIG5vdXMgbWV0dG9ucyBub3RyZSBleHBlcnRpc2UgdGVjaG5pcXVlIGF1IHNlcnZpY2UgZGVzIHBhcnRpY3VsaWVycyBwb3VyIGNyw6llciBkZXMgaGFiaXRhdHMgc2FpbnMsIGNvbmZvcnRhYmxlcyBldCBkdXJhYmxlcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFZBTFVFUyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbWQ6cHktMjQgYmctc2xhdGUtNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtNiBtZDpnYXAtOFwiPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7IGljb246IFNoaWVsZCwgdGl0bGU6IFwiRmlhYmlsaXTDqVwiLCBkZXNjOiBcIk5vdXMgdGVub25zIG5vcyBlbmdhZ2VtZW50cyA6IGTDqWxhaXMgcmVzcGVjdMOpcywgZGV2aXMgdHJhbnNwYXJlbnRzIGV0IHF1YWxpdMOpIGlycsOpcHJvY2hhYmxlLlwiLCBjb2xvcjogXCJ0ZXh0LWJsdWUtNjAwXCIsIGJnOiBcImJnLWJsdWUtNTBcIiB9LFxuICAgICAgICAgICAgICAgICAgeyBpY29uOiBUYXJnZXQsIHRpdGxlOiBcIlByw6ljaXNpb25cIiwgZGVzYzogXCJMZSBzb3VjaSBkdSBkw6l0YWlsIGRhbnMgY2hhcXVlIHNvdWR1cmUsIGNoYXF1ZSBpbnN0YWxsYXRpb24sIHBvdXIgdW5lIGR1cmFiaWxpdMOpIG1heGltYWxlLlwiLCBjb2xvcjogXCJ0ZXh0LW9yYW5nZS02MDBcIiwgYmc6IFwiYmctb3JhbmdlLTUwXCIgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogSGVhcnQsIHRpdGxlOiBcIlByb3hpbWl0w6lcIiwgZGVzYzogXCJVbmUgcmVsYXRpb24gZGUgY29uZmlhbmNlIGF2ZWMgbm9zIGNsaWVudHMgdmFyb2lzLCBiYXPDqWUgc3VyIGwnw6ljb3V0ZSBldCBsZSBjb25zZWlsIHBlcnNvbm5hbGlzw6kuXCIsIGNvbG9yOiBcInRleHQtcmVkLTYwMFwiLCBiZzogXCJiZy1yZWQtNTBcIiB9XG4gICAgICAgICAgICAgICAgXS5tYXAoKHZhbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICAga2V5PXtpfSBcbiAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjEgfX1cbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCBtZDpwLTEwIHJvdW5kZWQtM3hsIG1kOnJvdW5kZWQtWzJyZW1dIHNoYWRvdy1sZyBzaGFkb3ctc2xhdGUtMjAwLzUwIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjotdHJhbnNsYXRlLXktMSBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIG1kOnctMTQgbWQ6aC0xNCAke3ZhbC5iZ30gcm91bmRlZC0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHZhbC5pY29uIGNsYXNzTmFtZT17YHctNiBoLTYgbWQ6dy04IG1kOmgtOCAke3ZhbC5jb2xvcn1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi0zIG1kOm1iLTRcIj57dmFsLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS02MDAgbGVhZGluZy1yZWxheGVkIHRleHQtYmFzZSBtZDp0ZXh0LWxnXCI+e3ZhbC5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogU1RPUlkgLyBXSUxMSUFNICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBtZDpweS0zMiBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IGdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGxnOmdhcC0yMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LXhzIG1kOnRleHQtc20gbWItMyBibG9ja1wiPkxlIEZvbmRhdGV1cjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTYgbWQ6bWItOCBsZWFkaW5nLXRpZ2h0XCI+UmVuY29udHJleiBXaWxsaWFtPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIHRleHQtYmFzZSBtZDp0ZXh0LWxnIHRleHQtc2xhdGUtNjAwIGxlYWRpbmctcmVsYXhlZCBzcGFjZS15LTQgbWQ6c3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICBBdSBjxZN1ciBkZSBCUDJDLCBpbCB5IGEgV2lsbGlhbSwgZXhwZXJ0IHRlY2huaWNpZW4gcGFzc2lvbm7DqS4gQXZlYyBkZXMgYW5uw6llcyBkJ2V4cMOpcmllbmNlIHN1ciBsZSB0ZXJyYWluLCBpbCBhIGZvbmTDqSBCUDJDIGF2ZWMgdW5lIHZpc2lvbiBzaW1wbGUgOiByZWRvbm5lciBzZXMgbGV0dHJlcyBkZSBub2JsZXNzZSBhdSBtw6l0aWVyIGRlIHBsb21iaWVyLWNoYXVmZmFnaXN0ZS5cbiAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICBOb3MgY2xpZW50cyBsZSBkaXNlbnQgbWlldXggcXVlIG5vdXMgOiBcIlRyw6hzIGJvbiBjb250YWN0XCIsIFwiUGVyc29ubmUgYWdyw6lhYmxlIGV0IHByb2Zlc3Npb25uZWxsZVwiLiBDJ2VzdCBjZXR0ZSBhcHByb2NoZSBodW1haW5lLCBjb3VwbMOpZSDDoCB1bmUgaGF1dGUgdGVjaG5pY2l0w6ksIHF1aSBmYWl0IGxhIGRpZmbDqXJlbmNlIGF1am91cmQnaHVpLlxuICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgIFF1ZSBjZSBzb2l0IHBvdXIgdW5lIGluc3RhbGxhdGlvbiBjb21wbGV4ZSBkZSBjbGltYXRpc2F0aW9uIGdhaW5hYmxlIG91IHVuIGTDqXBhbm5hZ2UgdXJnZW50LCBXaWxsaWFtIHMnaW1wbGlxdWUgcGVyc29ubmVsbGVtZW50IHBvdXIgZ2FyYW50aXIgdW4gcsOpc3VsdGF0IGlycsOpcHJvY2hhYmxlIGV0IHZvdHJlIGVudGnDqHJlIHNhdGlzZmFjdGlvbi5cbiAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEwIGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEF3YXJkIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdy04IGgtOCBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+RXhwZXJ0IENlcnRpZmnDqTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj5RdWFsaWZpY2F0aW9ucyDDoCBqb3VyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2hpZWxkIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdy04IGgtOCBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+QXNzdXJhbmNlIETDqWNlbm5hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwXCI+UHJvdGVjdGlvbiBjb21wbMOodGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBtZDptdC0xMlwiPlxuICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlIHB4LTggcHktNCByb3VuZGVkLWZ1bGwgdGV4dC1sZyBob3ZlcjpiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2N1dGVyIGF2ZWMgV2lsbGlhbVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsdWUtMTAwIHJvdW5kZWQtWzIuNXJlbV0gbWQ6cm91bmRlZC1bM3JlbV0gdHJhbnNmb3JtIHJvdGF0ZS0zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMCByb3VuZGVkLVsyLjVyZW1dIG1kOnJvdW5kZWQtWzNyZW1dIHAtOCBtZDpwLTEyIHJlbGF0aXZlIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICA8UGVuVG9vbCBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbWQ6dy0xNiBtZDpoLTE2IHRleHQtYmx1ZS0yMDAgbWItNiBtZDptYi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtM3hsIGZvbnQtc2VyaWYgaXRhbGljIHRleHQtc2xhdGUtODAwIG1iLTYgbWQ6bWItOCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgIFwiTGEgc2F0aXNmYWN0aW9uIGRlIG1lcyBjbGllbnRzIGVzdCBtYSBwbHVzIGJlbGxlIHLDqXVzc2l0ZS4gSmUgbmUgcXVpdHRlIHBhcyB1biBjaGFudGllciB0YW50IHF1J2lsIG4nZXN0IHBhcyBwYXJmYWl0LlwiXG4gICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEgbWQ6dy0xMiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8tb3JhbmdlLTUwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQteHMgbWQ6dGV4dC1zbVwiPldpbGxpYW0sIEZvbmRhdGV1cjwvcD5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcbiJdLCJmaWxlIjoiL2hvbWUvdTczMzM4MzQzNi93ZWJzaXRlcy9vYTlTenBYaEYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qc3gifQ==

