const CookieBanner = () => {
  _s();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("bp2c_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("bp2c_cookie_consent", "accepted");
    setIsVisible(false);
  };
  const handleReject = () => {
    localStorage.setItem("bp2c_cookie_consent", "rejected");
    setIsVisible(false);
  };
  return /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxDEV(motion.div, { initial: {
    y: 100,
    opacity: 0
  }, animate: {
    y: 0,
    opacity: 1
  }, exit: {
    y: 100,
    opacity: 0
  }, transition: {
    duration: 0.3
  }, className: "fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-start space-x-4 flex-1", children: [
      /* @__PURE__ */ jsxDEV(Cookie, { className: "w-8 h-8 text-orange-500 flex-shrink-0 mt-1" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-gray-900 mb-2", "data-edit-id": "src/components/CookieBanner.jsx:42:19", children: "Nous respectons votre vie privée" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 leading-relaxed", "data-edit-id": "src/components/CookieBanner.jsx:43:19", children: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. Ces cookies nous permettent d'analyser le trafic et d'améliorer nos services. En continuant votre navigation, vous acceptez l'utilisation de ces cookies conformément à notre politique de confidentialité et au RGPD." }, void 0, false, {
      ] }, void 0, true, {
    ] }, void 0, true, {
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 w-full md:w-auto", children: [
      /* @__PURE__ */ jsxDEV(Button, { onClick: handleReject, variant: "outline", className: "flex-1 md:flex-none border-2 border-gray-300 text-gray-700 hover:bg-gray-100", "data-edit-id": "src/components/CookieBanner.jsx:53:17", children: "Refuser" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { onClick: handleAccept, className: "flex-1 md:flex-none bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-xl", "data-edit-id": "src/components/CookieBanner.jsx:60:17", children: "Accepter" }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: handleReject, className: "p-2 text-gray-400 hover:text-gray-600 transition-colors", "aria-label": "Fermer", "data-edit-disabled": "true", children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
    ] }, void 0, true, {
  ] }, void 0, true, {
  }, this);
};
_s(CookieBanner, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = CookieBanner;
export default CookieBanner;
var _c;
$RefreshReg$(_c, "CookieBanner");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/components/CookieBanner.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/components/CookieBanner.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0Q2hCLE9BQU9BLFNBQVNDLFVBQVVDLGlCQUFpQjtBQUMzQyxTQUFTQyxRQUFRQyx1QkFBdUI7QUFDeEMsU0FBU0MsUUFBUUMsU0FBUztBQUMxQixTQUFTQyxjQUFjO0FBRXZCLE1BQU1DLGVBQWVBLE1BQU07QUFBQUMsS0FBQTtBQUN6QixRQUFNLENBQUNDLFdBQVdDLFlBQVksSUFBSVYsU0FBUyxLQUFLO0FBRWhEQyxZQUFVLE1BQU07QUFDZCxVQUFNVSxVQUFVQyxhQUFhQyxRQUFRLHFCQUFxQjtBQUMxRCxRQUFJLENBQUNGLFNBQVM7QUFDWkQsbUJBQWEsSUFBSTtBQUFBLElBQ25CO0FBQUEsRUFDRixHQUFHLEVBQUU7QUFFTCxRQUFNSSxlQUFlQSxNQUFNO0FBQ3pCRixpQkFBYUcsUUFBUSx1QkFBdUIsVUFBVTtBQUN0REwsaUJBQWEsS0FBSztBQUFBLEVBQ3BCO0FBRUEsUUFBTU0sZUFBZUEsTUFBTTtBQUN6QkosaUJBQWFHLFFBQVEsdUJBQXVCLFVBQVU7QUFDdERMLGlCQUFhLEtBQUs7QUFBQSxFQUNwQjtBQUVBLFNBQ0UsdUJBQUMsbUJBQ0VELHVCQUNDLHVCQUFDLE9BQU8sS0FBUCxFQUNDLFNBQVM7QUFBQSxJQUFFUSxHQUFHO0FBQUEsSUFBS0MsU0FBUztBQUFBLEVBQUUsR0FDOUIsU0FBUztBQUFBLElBQUVELEdBQUc7QUFBQSxJQUFHQyxTQUFTO0FBQUEsRUFBRSxHQUM1QixNQUFNO0FBQUEsSUFBRUQsR0FBRztBQUFBLElBQUtDLFNBQVM7QUFBQSxFQUFFLEdBQzNCLFlBQVk7QUFBQSxJQUFFQyxVQUFVO0FBQUEsRUFBSSxHQUM1QixXQUFVLHFGQUVWLGlDQUFDLFNBQUksV0FBVSwrQkFDYixpQ0FBQyxTQUFJLFdBQVUsK0VBQ2I7QUFBQSwyQkFBQyxTQUFJLFdBQVUscUNBQ2I7QUFBQSw2QkFBQyxVQUFPLFdBQVUsZ0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBOEQ7QUFBQSxNQUM5RCx1QkFBQyxTQUFJLFdBQVUsVUFDYjtBQUFBLCtCQUFDLFFBQUcsV0FBVSxnQ0FBOEIseURBQUMsZ0RBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNkU7QUFBQSxRQUM3RSx1QkFBQyxPQUFFLFdBQVUseUNBQXVDLDBXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBS0E7QUFBQSxXQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFRQTtBQUFBLFNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVdBO0FBQUEsSUFFQSx1QkFBQyxTQUFJLFdBQVUsZ0RBQ2I7QUFBQSw2QkFBQyxVQUNDLFNBQVNILGNBQ1QsU0FBUSxXQUNSLFdBQVUsZ0ZBQThFLGdGQUgxRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTUE7QUFBQSxNQUNBLHVCQUFDLFVBQ0MsU0FBU0YsY0FDVCxXQUFVLDhGQUE0RixpRkFGeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUtBO0FBQUEsTUFDQSx1QkFBQyxZQUNDLFNBQVNFLGNBQ1QsV0FBVSwyREFDVixjQUFXLFVBQVEsOEJBRW5CLGlDQUFDLEtBQUUsV0FBVSxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBc0IsS0FMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU1BO0FBQUEsU0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFCQTtBQUFBLE9BbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvQ0EsS0FyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXNDQSxLQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBOENBLEtBaERKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrREE7QUFFSjtBQUFDUixHQXpFS0QsY0FBWTtBQUFBLEtBQVpBO0FBMkVOLGVBQWVBO0FBQVksSUFBQWE7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkNvb2tpZSIsIlgiLCJCdXR0b24iLCJDb29raWVCYW5uZXIiLCJfcyIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImNvbnNlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQWNjZXB0Iiwic2V0SXRlbSIsImhhbmRsZVJlamVjdCIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9Db29raWVCYW5uZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQ29va2llLCBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuXG5jb25zdCBDb29raWVCYW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JwMmNfY29va2llX2NvbnNlbnQnKTtcbiAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVBY2NlcHQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JwMmNfY29va2llX2NvbnNlbnQnLCAnYWNjZXB0ZWQnKTtcbiAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlamVjdCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnAyY19jb29raWVfY29uc2VudCcsICdyZWplY3RlZCcpO1xuICAgIHNldElzVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAge2lzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyB5OiAxMDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICBleGl0PXt7IHk6IDEwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHotNTAgYmctd2hpdGUgYm9yZGVyLXQtMiBib3JkZXItZ3JheS0yMDAgc2hhZG93LTJ4bFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLXN0YXJ0IG1kOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICA8Q29va2llIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1vcmFuZ2UtNTAwIGZsZXgtc2hyaW5rLTAgbXQtMVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0yXCI+Tm91cyByZXNwZWN0b25zIHZvdHJlIHZpZSBwcml2w6llPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgTm91cyB1dGlsaXNvbnMgZGVzIGNvb2tpZXMgcG91ciBhbcOpbGlvcmVyIHZvdHJlIGV4cMOpcmllbmNlIHN1ciBub3RyZSBzaXRlLiBcbiAgICAgICAgICAgICAgICAgICAgQ2VzIGNvb2tpZXMgbm91cyBwZXJtZXR0ZW50IGQnYW5hbHlzZXIgbGUgdHJhZmljIGV0IGQnYW3DqWxpb3JlciBub3Mgc2VydmljZXMuIFxuICAgICAgICAgICAgICAgICAgICBFbiBjb250aW51YW50IHZvdHJlIG5hdmlnYXRpb24sIHZvdXMgYWNjZXB0ZXogbCd1dGlsaXNhdGlvbiBkZSBjZXMgY29va2llcyBcbiAgICAgICAgICAgICAgICAgICAgY29uZm9ybcOpbWVudCDDoCBub3RyZSBwb2xpdGlxdWUgZGUgY29uZmlkZW50aWFsaXTDqSBldCBhdSBSR1BELlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyB3LWZ1bGwgbWQ6dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVqZWN0fVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXgtbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVmdXNlclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFjY2VwdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LW5vbmUgYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS01MDAgdG8tcmVkLTYwMCB0ZXh0LXdoaXRlIGhvdmVyOnNoYWRvdy14bFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWNjZXB0ZXJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZWplY3R9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGZXJtZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApfVxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29va2llQmFubmVyO1xuIl0sImZpbGUiOiIvaG9tZS91NzMzMzgzNDM2L3dlYnNpdGVzL29hOVN6cFhoRi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9Db29raWVCYW5uZXIuanN4In0=

