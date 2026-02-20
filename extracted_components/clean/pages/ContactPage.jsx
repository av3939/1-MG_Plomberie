const ContactPage = () => {
  _s();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous revenons vers vous rapidement."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Contact BP2C | Devis Gratuit & Contact Rapide" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Contactez BP2C à Fréjus pour vos travaux de plomberie et chauffage. Devis gratuit, réponse rapide." }, void 0, false, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-50 pt-20 pb-12 md:pt-24 md:pb-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-10 md:mb-16", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4", "data-edit-id": "src/pages/ContactPage.jsx:30:15", children: "Contactez-nous" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-base md:text-lg", "data-edit-id": "src/pages/ContactPage.jsx:31:15", children: "Une question ? Un devis ? Nous sommes à votre écoute pour concrétiser vos projets ou résoudre vos urgences." }, void 0, false, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-1 space-y-6", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 h-full", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8", "data-edit-id": "src/pages/ContactPage.jsx:41:21", children: "Coordonnées" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 md:space-y-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 md:w-6 md:h-6 text-blue-600" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider", "data-edit-id": "src/pages/ContactPage.jsx:49:30", children: "Téléphone" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "text-base md:text-lg font-bold text-slate-900 hover:text-blue-600", "data-edit-id": "src/pages/ContactPage.jsx:50:30", children: "06 01 76 13 95" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-slate-400", "data-edit-id": "src/pages/ContactPage.jsx:51:30", children: "Lun-Ven 8h-18h" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-orange-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 md:w-6 md:h-6 text-orange-600" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider", "data-edit-id": "src/pages/ContactPage.jsx:60:30", children: "Email" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "mailto:contact@bp2c.net", className: "text-base md:text-lg font-bold text-slate-900 hover:text-orange-600 break-all", "data-edit-id": "src/pages/ContactPage.jsx:61:30", children: "contact@bp2c.net" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-slate-400", "data-edit-id": "src/pages/ContactPage.jsx:62:30", children: "Réponse sous 24h" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 md:w-6 md:h-6 text-slate-600" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider", "data-edit-id": "src/pages/ContactPage.jsx:71:30", children: "Adresse" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg font-bold text-slate-900", "data-edit-id": "src/pages/ContactPage.jsx:72:30", children: "160 Rue du Thoron" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-slate-900", "data-edit-id": "src/pages/ContactPage.jsx:73:30", children: "83600 Fréjus" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
          ] }, void 0, true, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-12 rounded-2xl shadow-lg border border-slate-100", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-bold text-slate-900 mb-6", "data-edit-id": "src/pages/ContactPage.jsx:83:21", children: "Envoyez-nous un message" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-4 md:space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-4 md:gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:87:30", children: "Nom complet" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("input", { type: "text", name: "name", required: true, value: formData.name, onChange: handleChange, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900", placeholder: "Votre nom" }, void 0, false, {
              ] }, void 0, true, {
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:91:30", children: "Téléphone" }, void 0, false, {
                }, this),
                /* @__PURE__ */ jsxDEV("input", { type: "tel", name: "phone", required: true, value: formData.phone, onChange: handleChange, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900", placeholder: "Votre numéro" }, void 0, false, {
              ] }, void 0, true, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:97:27", children: "Email" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("input", { type: "email", name: "email", required: true, value: formData.email, onChange: handleChange, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900", placeholder: "votre@email.com" }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:102:27", children: "Message" }, void 0, false, {
              }, this),
              /* @__PURE__ */ jsxDEV("textarea", { name: "message", required: true, value: formData.message, onChange: handleChange, rows: 5, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all text-slate-900", placeholder: "Dites-nous en plus sur votre projet..." }, void 0, false, {
            ] }, void 0, true, {
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl font-bold shadow-lg shadow-blue-600/20", "data-edit-disabled": "true", children: [
              /* @__PURE__ */ jsxDEV(Send, { className: "mr-2 w-5 h-5" }, void 0, false, {
              }, this),
              " Envoyer ma demande"
            ] }, void 0, true, {
          ] }, void 0, true, {
        ] }, void 0, true, {
      ] }, void 0, true, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_s(ContactPage, "C+wM3CmP2JGYWXNZDcybN+p6l/w=", false, function() {
  return [useToast];
});
_c = ContactPage;
export default ContactPage;
var _c;
$RefreshReg$(_c, "ContactPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/ContactPage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/pages/ContactPage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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SjtBQUFDYixHQTlHS0QsYUFBVztBQUFBLFVBQ0dELFFBQVE7QUFBQTtBQUFBLEtBRHRCQztBQWdITixlQUFlQTtBQUFXLElBQUFpQjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVsbWV0IiwiUGhvbmUiLCJNYWlsIiwiTWFwUGluIiwiU2VuZCIsIkJ1dHRvbiIsInVzZVRvYXN0IiwiQ29udGFjdFBhZ2UiLCJfcyIsInRvYXN0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9Db250YWN0UGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgUGhvbmUsIE1haWwsIE1hcFBpbiwgU2VuZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdCc7XG5cbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHsgbmFtZTogJycsIGVtYWlsOiAnJywgcGhvbmU6ICcnLCBtZXNzYWdlOiAnJyB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2FzdCh7IHRpdGxlOiBcIk1lc3NhZ2UgZW52b3nDqVwiLCBkZXNjcmlwdGlvbjogXCJOb3VzIHJldmVub25zIHZlcnMgdm91cyByYXBpZGVtZW50LlwiIH0pO1xuICAgIHNldEZvcm1EYXRhKHsgbmFtZTogJycsIGVtYWlsOiAnJywgcGhvbmU6ICcnLCBtZXNzYWdlOiAnJyB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+Q29udGFjdCBCUDJDIHwgRGV2aXMgR3JhdHVpdCAmIENvbnRhY3QgUmFwaWRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnRhY3RleiBCUDJDIMOgIEZyw6lqdXMgcG91ciB2b3MgdHJhdmF1eCBkZSBwbG9tYmVyaWUgZXQgY2hhdWZmYWdlLiBEZXZpcyBncmF0dWl0LCByw6lwb25zZSByYXBpZGUuXCIgLz5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zbGF0ZS01MCBwdC0yMCBwYi0xMiBtZDpwdC0yNCBtZDpwYi0xNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTEwIG1kOm1iLTE2XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItNFwiPkNvbnRhY3Rlei1ub3VzPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS02MDAgdGV4dC1iYXNlIG1kOnRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgVW5lIHF1ZXN0aW9uID8gVW4gZGV2aXMgPyBOb3VzIHNvbW1lcyDDoCB2b3RyZSDDqWNvdXRlIHBvdXIgY29uY3LDqXRpc2VyIHZvcyBwcm9qZXRzIG91IHLDqXNvdWRyZSB2b3MgdXJnZW5jZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIGdhcC04IG1heC13LTZ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogQ29udGFjdCBJbmZvIENhcmQgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMSBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgbWQ6cC04IHJvdW5kZWQtMnhsIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTYgbWQ6bWItOFwiPkNvb3Jkb25uw6llczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBtZDpzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAgcC0zIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy02IG1kOmgtNiB0ZXh0LWJsdWUtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LXNsYXRlLTUwMCBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlTDqWzDqXBob25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOiszMzYwMTc2MTM5NVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+MDYgMDEgNzYgMTMgOTU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPkx1bi1WZW4gOGgtMThoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MCBwLTMgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctNiBtZDpoLTYgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LXNsYXRlLTUwMCBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPkVtYWlsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAYnAyYy5uZXRcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIGJyZWFrLWFsbFwiPmNvbnRhY3RAYnAyYy5uZXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPlLDqXBvbnNlIHNvdXMgMjRoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwIHAtMyByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy01IGgtNSBtZDp3LTYgbWQ6aC02IHRleHQtc2xhdGUtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LXNsYXRlLTUwMCBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPkFkcmVzc2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPjE2MCBSdWUgZHUgVGhvcm9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWQ6dGV4dC1sZyB0ZXh0LXNsYXRlLTkwMFwiPjgzNjAwIEZyw6lqdXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogRm9ybSBDYXJkICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgbWQ6cC0xMiByb3VuZGVkLTJ4bCBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTZcIj5FbnZveWV6LW5vdXMgdW4gbWVzc2FnZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC00IG1kOmdhcC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS03MDBcIj5Ob20gY29tcGxldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC14bCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGwgdGV4dC1zbGF0ZS05MDBcIiBwbGFjZWhvbGRlcj1cIlZvdHJlIG5vbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNzAwXCI+VMOpbMOpcGhvbmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiIHJlcXVpcmVkIHZhbHVlPXtmb3JtRGF0YS5waG9uZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyBiZy1zbGF0ZS01MCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLXhsIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbCB0ZXh0LXNsYXRlLTkwMFwiIHBsYWNlaG9sZGVyPVwiVm90cmUgbnVtw6lyb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS03MDBcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCB2YWx1ZT17Zm9ybURhdGEuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC14bCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGwgdGV4dC1zbGF0ZS05MDBcIiBwbGFjZWhvbGRlcj1cInZvdHJlQGVtYWlsLmNvbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS03MDBcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgcmVxdWlyZWQgdmFsdWU9e2Zvcm1EYXRhLm1lc3NhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJvd3M9ezV9IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC14bCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmUgdHJhbnNpdGlvbi1hbGwgdGV4dC1zbGF0ZS05MDBcIiBwbGFjZWhvbGRlcj1cIkRpdGVzLW5vdXMgZW4gcGx1cyBzdXIgdm90cmUgcHJvamV0Li4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgcHktNCB0ZXh0LWxnIHJvdW5kZWQteGwgZm9udC1ib2xkIHNoYWRvdy1sZyBzaGFkb3ctYmx1ZS02MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbmQgY2xhc3NOYW1lPVwibXItMiB3LTUgaC01XCIgLz4gRW52b3llciBtYSBkZW1hbmRlXG4gICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlO1xuIl0sImZpbGUiOiIvaG9tZS91NzMzMzgzNDM2L3dlYnNpdGVzL29hOVN6cFhoRi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvQ29udGFjdFBhZ2UuanN4In0=

