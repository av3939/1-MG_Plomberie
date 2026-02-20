const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BP2C",
    "image": "https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg",
    "telephone": "+33601761395",
    "email": "contact@bp2c.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "160 Rue du Thoron",
      "addressLocality": "Fréjus",
      "postalCode": "83600",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.4334",
      "longitude": "6.7367"
    },
    "url": "https://www.bp2c.net"
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(structuredData) }, void 0, false, {
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "bg-slate-950 text-slate-300 relative overflow-hidden font-sans", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 opacity-80" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-[20%] -left-[200px] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-16", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-4 space-y-6 md:space-y-8", children: [
            /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-block", children: /* @__PURE__ */ jsxDEV("img", { src: "https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg", alt: "BP2C Logo", className: "h-12 md:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity", "data-edit-id": "src/components/Footer.jsx:52:17" }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 leading-relaxed max-w-sm text-sm md:text-base", "data-edit-id": "src/components/Footer.jsx:58:15", children: "Expertise et passion au service de votre habitat à Fréjus et ses environs. Plomberie, chauffage, climatisation et rénovation de salle de bain par des artisans certifiés." }, void 0, false, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 text-sm font-medium text-slate-400", children: [
                /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-5 h-5 text-green-500" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/components/Footer.jsx:66:19", children: "Garantie Décennale" }, void 0, false, {
              ] }, void 0, true, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 text-sm font-medium text-slate-400", children: [
                /* @__PURE__ */ jsxDEV(Clock, { className: "w-5 h-5 text-orange-500" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-edit-id": "src/components/Footer.jsx:70:19", children: "Intervention 7j/7 (Urgences)" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 pt-2", children: [Facebook, Instagram, Linkedin].map((Icon, idx) => /* @__PURE__ */ jsxDEV("a", { href: "#", className: "w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 group", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5 text-slate-400 group-hover:text-white transition-colors" }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-3 lg:pl-8", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-white text-lg font-bold mb-6 md:mb-8 relative inline-block", "data-edit-disabled": "true", children: [
              "Nos Services",
              /* @__PURE__ */ jsxDEV("span", { className: "absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full" }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 md:space-y-4", children: [{
              name: "Plomberie d'urgence",
              path: "/plomberie"
            }, {
              name: "Chauffage & Chaudières",
              path: "/chauffage"
            }, {
              name: "Climatisation Gainable",
              path: "/climatisation"
            }, {
              name: "Rénovation Salle de Bain",
              path: "/renovation"
            }, {
              name: "Recherche de fuite",
              path: "/plomberie"
            }, {
              name: "Entretien annuel",
              path: "/chauffage"
            }].map((item) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: item.path, className: "group flex items-center text-slate-400 hover:text-white transition-colors text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 scale-0 group-hover:scale-100 transition-transform", "data-edit-id": "src/components/Footer.jsx:100:23" }, void 0, false, {
              }, this),
              item.name
            ] }, void 0, true, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-white text-lg font-bold mb-6 md:mb-8 relative inline-block", "data-edit-disabled": "true", children: [
              "Entreprise",
              /* @__PURE__ */ jsxDEV("span", { className: "absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full" }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 md:space-y-4", children: [{
              name: "À propos",
              path: "/about"
            }, {
              name: "Contact",
              path: "/contact"
            }, {
              name: "FAQ",
              path: "/faq"
            }, {
              name: "Mentions Légales",
              path: "/mentions-legales"
            }, {
              name: "Confidentialité",
              path: "/politique-confidentialite"
            }].map((item) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: item.path, className: "group flex items-center text-slate-400 hover:text-white transition-colors text-sm md:text-base", children: item.name }, void 0, false, {
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-3", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-white text-lg font-bold mb-6 md:mb-8 relative inline-block", "data-edit-disabled": "true", children: [
              "Nous Contacter",
              /* @__PURE__ */ jsxDEV("span", { className: "absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full" }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-4 group", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-blue-400 group-hover:text-white transition-colors" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-slate-500 uppercase tracking-wider font-bold", "data-edit-id": "src/components/Footer.jsx:143:21", children: "Adresse" }, void 0, false, {
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-slate-300 mt-1 leading-tight text-sm md:text-base", "data-edit-disabled": "true", children: [
                    "160 Rue du Thoron",
                    /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                    }, this),
                    "83600 Fréjus"
                  ] }, void 0, true, {
                ] }, void 0, true, {
              ] }, void 0, true, {
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-4 group", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-blue-400 group-hover:text-white transition-colors" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-slate-500 uppercase tracking-wider font-bold", "data-edit-id": "src/components/Footer.jsx:152:21", children: "Téléphone" }, void 0, false, {
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "mt-1", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "text-base md:text-lg font-bold text-white hover:text-blue-400 transition-colors", children: "06 01 76 13 95" }, void 0, false, {
                ] }, void 0, true, {
              ] }, void 0, true, {
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-4 group", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-blue-400 group-hover:text-white transition-colors" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-slate-500 uppercase tracking-wider font-bold", "data-edit-id": "src/components/Footer.jsx:165:21", children: "Email" }, void 0, false, {
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "mt-1", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV("a", { href: "mailto:contact@bp2c.net", className: "text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base", children: "contact@bp2c.net" }, void 0, false, {
                ] }, void 0, true, {
              ] }, void 0, true, {
            ] }, void 0, true, {
          ] }, void 0, true, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-center md:text-left", "data-edit-disabled": "true", children: [
            "© ",
            currentYear,
            " BP2C. Tous droits réservés. | SIRET: 93409778300013"
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-6", children: /* @__PURE__ */ jsxDEV("span", { className: "hover:text-slate-300 cursor-default transition-colors", "data-edit-id": "src/components/Footer.jsx:180:15", children: "Artisanat Français 🇫🇷" }, void 0, false, {
        ] }, void 0, true, {
      ] }, void 0, true, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_c = Footer;
export default Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/components/Footer.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/components/Footer.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBO0FBQUEsU0F3SkE7QUFFSjtBQUFDWSxLQXBMS2I7QUFzTE4sZUFBZUE7QUFBTSxJQUFBYTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJQaG9uZSIsIk1haWwiLCJNYXBQaW4iLCJGYWNlYm9vayIsIkluc3RhZ3JhbSIsIkxpbmtlZGluIiwiU2hpZWxkQ2hlY2siLCJDbG9jayIsIkhlbG1ldCIsIkZvb3RlciIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic3RydWN0dXJlZERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwiSWNvbiIsImlkeCIsIm5hbWUiLCJwYXRoIiwiaXRlbSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Zvb3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUGhvbmUsIE1haWwsIE1hcFBpbiwgRmFjZWJvb2ssIEluc3RhZ3JhbSwgTGlua2VkaW4sIFNoaWVsZENoZWNrLCBDbG9jayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZWREYXRhID0ge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiTG9jYWxCdXNpbmVzc1wiLFxuICAgIFwibmFtZVwiOiBcIkJQMkNcIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9ob3Jpem9ucy1jZG4uaG9zdGluZ2VyLmNvbS85ZmJhNDNhZS05ZWVhLTRhOWYtYWIzNS1kNjAzMTUxOWE4NjYvNjgxNTJlNThjOWQ1OTNhZGJlOWUwM2I4ZDc1ZGVkY2QuanBnXCIsXG4gICAgXCJ0ZWxlcGhvbmVcIjogXCIrMzM2MDE3NjEzOTVcIixcbiAgICBcImVtYWlsXCI6IFwiY29udGFjdEBicDJjLm5ldFwiLFxuICAgIFwiYWRkcmVzc1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgXCJzdHJlZXRBZGRyZXNzXCI6IFwiMTYwIFJ1ZSBkdSBUaG9yb25cIixcbiAgICAgIFwiYWRkcmVzc0xvY2FsaXR5XCI6IFwiRnLDqWp1c1wiLFxuICAgICAgXCJwb3N0YWxDb2RlXCI6IFwiODM2MDBcIixcbiAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJGUlwiXG4gICAgfSxcbiAgICBcImdlb1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiR2VvQ29vcmRpbmF0ZXNcIixcbiAgICAgIFwibGF0aXR1ZGVcIjogXCI0My40MzM0XCIsXG4gICAgICBcImxvbmdpdHVkZVwiOiBcIjYuNzM2N1wiXG4gICAgfSxcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJwMmMubmV0XCJcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCI+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0cnVjdHVyZWREYXRhKX1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0zMDAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGZvbnQtc2Fuc1wiPlxuICAgICAgICB7LyogRGVjb3JhdGl2ZSBiYWNrZ3JvdW5kIGVsZW1lbnRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB2aWEtb3JhbmdlLTUwMCB0by1ibHVlLTYwMCBvcGFjaXR5LTgwXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC1bMzAwcHhdIC1yaWdodC1bMzAwcHhdIHctWzYwMHB4XSBoLVs2MDBweF0gYmctYmx1ZS02MDAvNSByb3VuZGVkLWZ1bGwgYmx1ci1bMTIwcHhdXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVsyMCVdIC1sZWZ0LVsyMDBweF0gdy1bNTAwcHhdIGgtWzUwMHB4XSBiZy1vcmFuZ2UtNTAwLzUgcm91bmRlZC1mdWxsIGJsdXItWzEwMHB4XVwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IHB0LTE2IG1kOnB0LTI0IHBiLTEyIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTEyIGdhcC0xMCBtZDpnYXAtMTIgbGc6Z2FwLTggbWItMTZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIEJyYW5kIENvbHVtbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNCBzcGFjZS15LTYgbWQ6c3BhY2UteS04XCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2hvcml6b25zLWNkbi5ob3N0aW5nZXIuY29tLzlmYmE0M2FlLTllZWEtNGE5Zi1hYjM1LWQ2MDMxNTE5YTg2Ni82ODE1MmU1OGM5ZDU5M2FkYmU5ZTAzYjhkNzVkZWRjZC5qcGdcIiBcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkJQMkMgTG9nb1wiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiBtZDpoLTE2IHctYXV0byBicmlnaHRuZXNzLTAgaW52ZXJ0IG9wYWNpdHktOTAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIGxlYWRpbmctcmVsYXhlZCBtYXgtdy1zbSB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgIEV4cGVydGlzZSBldCBwYXNzaW9uIGF1IHNlcnZpY2UgZGUgdm90cmUgaGFiaXRhdCDDoCBGcsOpanVzIGV0IHNlcyBlbnZpcm9ucy4gXG4gICAgICAgICAgICAgICAgUGxvbWJlcmllLCBjaGF1ZmZhZ2UsIGNsaW1hdGlzYXRpb24gZXQgcsOpbm92YXRpb24gZGUgc2FsbGUgZGUgYmFpbiBwYXIgZGVzIGFydGlzYW5zIGNlcnRpZmnDqXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmVlbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2FyYW50aWUgRMOpY2VubmFsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5JbnRlcnZlbnRpb24gN2ovNyAoVXJnZW5jZXMpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHB0LTJcIj5cbiAgICAgICAgICAgICAgICB7W0ZhY2Vib29rLCBJbnN0YWdyYW0sIExpbmtlZGluXS5tYXAoKEljb24sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGEga2V5PXtpZHh9IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwIG1kOnctMTEgbWQ6aC0xMSByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1ibHVlLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXNsYXRlLTQwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFNlcnZpY2VzIENvbHVtbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMyBsZzpwbC04XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIG1iLTYgbWQ6bWItOCByZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBOb3MgU2VydmljZXNcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTIgbGVmdC0wIHctMTIgaC0xIGJnLWJsdWUtNjAwIHJvdW5kZWQtZnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMyBtZDpzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnUGxvbWJlcmllIGRcXCd1cmdlbmNlJywgcGF0aDogJy9wbG9tYmVyaWUnIH0sXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdDaGF1ZmZhZ2UgJiBDaGF1ZGnDqHJlcycsIHBhdGg6ICcvY2hhdWZmYWdlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQ2xpbWF0aXNhdGlvbiBHYWluYWJsZScsIHBhdGg6ICcvY2xpbWF0aXNhdGlvbicgfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1LDqW5vdmF0aW9uIFNhbGxlIGRlIEJhaW4nLCBwYXRoOiAnL3Jlbm92YXRpb24nIH0sXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWNoZXJjaGUgZGUgZnVpdGUnLCBwYXRoOiAnL3Bsb21iZXJpZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0VudHJldGllbiBhbm51ZWwnLCBwYXRoOiAnL2NoYXVmZmFnZScgfVxuICAgICAgICAgICAgICAgIF0ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbS5wYXRofSBjbGFzc05hbWU9XCJncm91cCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xLjUgaC0xLjUgcm91bmRlZC1mdWxsIGJnLWJsdWUtNjAwIG1yLTMgc2NhbGUtMCBncm91cC1ob3ZlcjpzY2FsZS0xMDAgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTGlua3MgQ29sdW1uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIG1iLTYgbWQ6bWItOCByZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBFbnRyZXByaXNlXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0yIGxlZnQtMCB3LTEyIGgtMSBiZy1vcmFuZ2UtNTAwIHJvdW5kZWQtZnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMyBtZDpzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnw4AgcHJvcG9zJywgcGF0aDogJy9hYm91dCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NvbnRhY3QnLCBwYXRoOiAnL2NvbnRhY3QnIH0sXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdGQVEnLCBwYXRoOiAnL2ZhcScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ01lbnRpb25zIEzDqWdhbGVzJywgcGF0aDogJy9tZW50aW9ucy1sZWdhbGVzJyB9LFxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQ29uZmlkZW50aWFsaXTDqScsIHBhdGg6ICcvcG9saXRpcXVlLWNvbmZpZGVudGlhbGl0ZScgfVxuICAgICAgICAgICAgICAgIF0ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbS5wYXRofSBjbGFzc05hbWU9XCJncm91cCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ29udGFjdCBDb2x1bW4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTNcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGQgbWItNiBtZDptYi04IHJlbGF0aXZlIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIE5vdXMgQ29udGFjdGVyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0yIGxlZnQtMCB3LTEyIGgtMSBiZy13aGl0ZSByb3VuZGVkLWZ1bGxcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNCBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgbWQ6dy0xMiBtZDpoLTEyIHJvdW5kZWQteGwgYmctYmx1ZS05MDAvMzAgYm9yZGVyIGJvcmRlci1ibHVlLTgwMC81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wIGdyb3VwLWhvdmVyOmJnLWJsdWUtNjAwIGdyb3VwLWhvdmVyOmJvcmRlci1ibHVlLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1hcFBpbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYmx1ZS00MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtYm9sZFwiPkFkcmVzc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIG10LTEgbGVhZGluZy10aWdodCB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPjE2MCBSdWUgZHUgVGhvcm9uPGJyIC8+ODM2MDAgRnLDqWp1czwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTQgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIG1kOnctMTIgbWQ6aC0xMiByb3VuZGVkLXhsIGJnLWJsdWUtOTAwLzMwIGJvcmRlciBib3JkZXItYmx1ZS04MDAvNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCBncm91cC1ob3ZlcjpiZy1ibHVlLTYwMCBncm91cC1ob3Zlcjpib3JkZXItYmx1ZS01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYmx1ZS00MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtYm9sZFwiPlTDqWzDqXBob25lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzM2MDE3NjEzOTVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJsdWUtNDAwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAwNiAwMSA3NiAxMyA5NVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNCBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgbWQ6dy0xMiBtZDpoLTEyIHJvdW5kZWQteGwgYmctYmx1ZS05MDAvMzAgYm9yZGVyIGJvcmRlci1ibHVlLTgwMC81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wIGdyb3VwLWhvdmVyOmJnLWJsdWUtNjAwIGdyb3VwLWhvdmVyOmJvcmRlci1ibHVlLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1haWwgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWJsdWUtNDAwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LWJvbGRcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBicDJjLm5ldFwiIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIGhvdmVyOnRleHQtYmx1ZS00MDAgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RAYnAyYy5uZXRcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTkwMCBwdC04IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LXhzIG1kOnRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPsKpIHtjdXJyZW50WWVhcn0gQlAyQy4gVG91cyBkcm9pdHMgcsOpc2VydsOpcy4gfCBTSVJFVDogOTM0MDk3NzgzMDAwMTM8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1zbGF0ZS0zMDAgY3Vyc29yLWRlZmF1bHQgdHJhbnNpdGlvbi1jb2xvcnNcIj5BcnRpc2FuYXQgRnJhbsOnYWlzIPCfh6vwn4e3PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwiZmlsZSI6Ii9ob21lL3U3MzMzODM0MzYvd2Vic2l0ZXMvb2E5U3pwWGhGL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qc3gifQ==

