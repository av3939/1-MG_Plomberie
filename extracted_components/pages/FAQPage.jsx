const FAQPage = () => {
  _s();
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
    q: "Quel est le délai d'intervention pour une urgence ?",
    a: "Pour les urgences plomberie (fuites importantes, dégâts des eaux), nous intervenons sous 2 heures maximum à Fréjus et ses alentours. Notre service est disponible 24h/24 et 7j/7."
  }, {
    q: "Réalisez-vous des devis gratuits ?",
    a: "Absolument. Tous nos devis sont gratuits et sans engagement. Pour les projets de rénovation ou d'installation (chauffage, clim), nous nous déplaçons systématiquement pour réaliser une étude technique précise."
  }, {
    q: "Quelles marques de matériel installez-vous ?",
    a: "Nous privilégions les marques reconnues pour leur fiabilité et leur performance (Atlantic, Daikin, Mitsubishi, Grohe, etc.). Nous garantissons ainsi la durabilité de vos installations."
  }, {
    q: "La climatisation gainable est-elle bruyante ?",
    a: "Non, c'est l'un de ses principaux avantages. Le moteur est déporté (souvent dans les combles) et l'air circule via des gaines isolées, rendant le système quasiment inaudible dans les pièces de vie."
  }, {
    q: "Gérez-vous l'évacuation des gravats lors d'une rénovation ?",
    a: "Oui, notre prestation de rénovation de salle de bain est 'clé en main'. Nous nous occupons de la protection du chantier, de la démolition et de l'évacuation complète des déchets en déchetterie professionnelle."
  }];
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "FAQ | Vos Questions, Nos Réponses - BP2C" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Réponses aux questions fréquentes sur nos services de plomberie, chauffage et climatisation à Fréjus." }, void 0, false, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-50 pt-20 pb-12 md:pt-24 md:pb-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10 md:mb-16", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4", "data-edit-id": "src/pages/FAQPage.jsx:43:13", children: "Questions Fréquentes" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-base md:text-lg", "data-edit-id": "src/pages/FAQPage.jsx:44:13", children: "Tout ce que vous devez savoir avant de commencer vos travaux." }, void 0, false, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setOpenIndex(openIndex === index ? -1 : index), className: "w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none", "data-edit-disabled": "true", children: [
          /* @__PURE__ */ jsxDEV("span", { className: `text-base md:text-lg font-bold pr-4 ${openIndex === index ? "text-blue-600" : "text-slate-900"}`, "data-edit-disabled": "true", children: faq.q }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: `p-1.5 md:p-2 rounded-full flex-shrink-0 ${openIndex === index ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`, "data-edit-disabled": "true", children: openIndex === index ? /* @__PURE__ */ jsxDEV(Minus, { className: "w-4 h-4 md:w-5 md:h-5" }, void 0, false, {
          }, this) : /* @__PURE__ */ jsxDEV(Plus, { className: "w-4 h-4 md:w-5 md:h-5" }, void 0, false, {
          }, this) }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsxDEV(motion.div, { initial: {
          height: 0,
          opacity: 0
        }, animate: {
          height: "auto",
          opacity: 1
        }, exit: {
          height: 0,
          opacity: 0
        }, transition: {
          duration: 0.3
        }, children: /* @__PURE__ */ jsxDEV("div", { className: "px-4 md:px-6 pb-6 pt-0 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4", children: faq.a }, void 0, false, {
        }, this) }, void 0, false, {
        }, this) }, void 0, false, {
      ] }, index, true, {
      }, this)) }, void 0, false, {
    ] }, void 0, true, {
    }, this) }, void 0, false, {
  ] }, void 0, true, {
  }, this);
};
_s(FAQPage, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQPage;
export default FAQPage;
var _c;
$RefreshReg$(_c, "FAQPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/FAQPage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/FAQPage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUE7QUFBQSxlQWFBO0FBQUEsV0EzQktHLE9BRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTZCQSxDQUNELEtBaENIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFpQ0E7QUFBQSxTQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBd0NBLEtBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EwQ0E7QUFBQSxPQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBaURBO0FBRUo7QUFBQ1IsR0E5RUtELFNBQU87QUFBQSxLQUFQQTtBQWdGTixlQUFlQTtBQUFPLElBQUFhO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIZWxtZXQiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJQbHVzIiwiTWludXMiLCJGQVFQYWdlIiwiX3MiLCJvcGVuSW5kZXgiLCJzZXRPcGVuSW5kZXgiLCJmYXFzIiwicSIsImEiLCJtYXAiLCJmYXEiLCJpbmRleCIsImhlaWdodCIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9GQVFQYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUGx1cywgTWludXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCBGQVFQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbkluZGV4LCBzZXRPcGVuSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgZmFxcyA9IFtcbiAgICB7XG4gICAgICBxOiBcIlF1ZWwgZXN0IGxlIGTDqWxhaSBkJ2ludGVydmVudGlvbiBwb3VyIHVuZSB1cmdlbmNlID9cIixcbiAgICAgIGE6IFwiUG91ciBsZXMgdXJnZW5jZXMgcGxvbWJlcmllIChmdWl0ZXMgaW1wb3J0YW50ZXMsIGTDqWfDonRzIGRlcyBlYXV4KSwgbm91cyBpbnRlcnZlbm9ucyBzb3VzIDIgaGV1cmVzIG1heGltdW0gw6AgRnLDqWp1cyBldCBzZXMgYWxlbnRvdXJzLiBOb3RyZSBzZXJ2aWNlIGVzdCBkaXNwb25pYmxlIDI0aC8yNCBldCA3ai83LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBxOiBcIlLDqWFsaXNlei12b3VzIGRlcyBkZXZpcyBncmF0dWl0cyA/XCIsXG4gICAgICBhOiBcIkFic29sdW1lbnQuIFRvdXMgbm9zIGRldmlzIHNvbnQgZ3JhdHVpdHMgZXQgc2FucyBlbmdhZ2VtZW50LiBQb3VyIGxlcyBwcm9qZXRzIGRlIHLDqW5vdmF0aW9uIG91IGQnaW5zdGFsbGF0aW9uIChjaGF1ZmZhZ2UsIGNsaW0pLCBub3VzIG5vdXMgZMOpcGxhw6dvbnMgc3lzdMOpbWF0aXF1ZW1lbnQgcG91ciByw6lhbGlzZXIgdW5lIMOpdHVkZSB0ZWNobmlxdWUgcHLDqWNpc2UuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiUXVlbGxlcyBtYXJxdWVzIGRlIG1hdMOpcmllbCBpbnN0YWxsZXotdm91cyA/XCIsXG4gICAgICBhOiBcIk5vdXMgcHJpdmlsw6lnaW9ucyBsZXMgbWFycXVlcyByZWNvbm51ZXMgcG91ciBsZXVyIGZpYWJpbGl0w6kgZXQgbGV1ciBwZXJmb3JtYW5jZSAoQXRsYW50aWMsIERhaWtpbiwgTWl0c3ViaXNoaSwgR3JvaGUsIGV0Yy4pLiBOb3VzIGdhcmFudGlzc29ucyBhaW5zaSBsYSBkdXJhYmlsaXTDqSBkZSB2b3MgaW5zdGFsbGF0aW9ucy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgcTogXCJMYSBjbGltYXRpc2F0aW9uIGdhaW5hYmxlIGVzdC1lbGxlIGJydXlhbnRlID9cIixcbiAgICAgIGE6IFwiTm9uLCBjJ2VzdCBsJ3VuIGRlIHNlcyBwcmluY2lwYXV4IGF2YW50YWdlcy4gTGUgbW90ZXVyIGVzdCBkw6lwb3J0w6kgKHNvdXZlbnQgZGFucyBsZXMgY29tYmxlcykgZXQgbCdhaXIgY2lyY3VsZSB2aWEgZGVzIGdhaW5lcyBpc29sw6llcywgcmVuZGFudCBsZSBzeXN0w6htZSBxdWFzaW1lbnQgaW5hdWRpYmxlIGRhbnMgbGVzIHBpw6hjZXMgZGUgdmllLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBxOiBcIkfDqXJlei12b3VzIGwnw6l2YWN1YXRpb24gZGVzIGdyYXZhdHMgbG9ycyBkJ3VuZSByw6lub3ZhdGlvbiA/XCIsXG4gICAgICBhOiBcIk91aSwgbm90cmUgcHJlc3RhdGlvbiBkZSByw6lub3ZhdGlvbiBkZSBzYWxsZSBkZSBiYWluIGVzdCAnY2zDqSBlbiBtYWluJy4gTm91cyBub3VzIG9jY3Vwb25zIGRlIGxhIHByb3RlY3Rpb24gZHUgY2hhbnRpZXIsIGRlIGxhIGTDqW1vbGl0aW9uIGV0IGRlIGwnw6l2YWN1YXRpb24gY29tcGzDqHRlIGRlcyBkw6ljaGV0cyBlbiBkw6ljaGV0dGVyaWUgcHJvZmVzc2lvbm5lbGxlLlwiXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5GQVEgfCBWb3MgUXVlc3Rpb25zLCBOb3MgUsOpcG9uc2VzIC0gQlAyQzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSw6lwb25zZXMgYXV4IHF1ZXN0aW9ucyBmcsOpcXVlbnRlcyBzdXIgbm9zIHNlcnZpY2VzIGRlIHBsb21iZXJpZSwgY2hhdWZmYWdlIGV0IGNsaW1hdGlzYXRpb24gw6AgRnLDqWp1cy5cIiAvPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXNsYXRlLTUwIHB0LTIwIHBiLTEyIG1kOnB0LTI0IG1kOnBiLTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy0zeGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwIG1kOm1iLTE2XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTMgbWQ6bWItNFwiPlF1ZXN0aW9ucyBGcsOpcXVlbnRlczwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZ1wiPlRvdXQgY2UgcXVlIHZvdXMgZGV2ZXogc2F2b2lyIGF2YW50IGRlIGNvbW1lbmNlciB2b3MgdHJhdmF1eC48L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAge2ZhcXMubWFwKChmYXEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLXNoYWRvd1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuSW5kZXgob3BlbkluZGV4ID09PSBpbmRleCA/IC0xIDogaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQgbWQ6cC02IHRleHQtbGVmdCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtYmFzZSBtZDp0ZXh0LWxnIGZvbnQtYm9sZCBwci00ICR7b3BlbkluZGV4ID09PSBpbmRleCA/ICd0ZXh0LWJsdWUtNjAwJyA6ICd0ZXh0LXNsYXRlLTkwMCd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtmYXEucX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHAtMS41IG1kOnAtMiByb3VuZGVkLWZ1bGwgZmxleC1zaHJpbmstMCAke29wZW5JbmRleCA9PT0gaW5kZXggPyAnYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTYwMCcgOiAnYmctc2xhdGUtMTAwIHRleHQtc2xhdGUtNTAwJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge29wZW5JbmRleCA9PT0gaW5kZXggPyA8TWludXMgY2xhc3NOYW1lPVwidy00IGgtNCBtZDp3LTUgbWQ6aC01XCIgLz4gOiA8UGx1cyBjbGFzc05hbWU9XCJ3LTQgaC00IG1kOnctNSBtZDpoLTVcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAge29wZW5JbmRleCA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgaGVpZ2h0OiAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBoZWlnaHQ6IFwiYXV0b1wiLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgZXhpdD17eyBoZWlnaHQ6IDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBtZDpweC02IHBiLTYgcHQtMCB0ZXh0LXNtIG1kOnRleHQtYmFzZSB0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTUwIG10LTIgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZhcS5hfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRkFRUGFnZTtcbiJdLCJmaWxlIjoiL2hvbWUvdTczMzM4MzQzNi93ZWJzaXRlcy9vYTlTenBYaEYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL0ZBUVBhZ2UuanN4In0=

