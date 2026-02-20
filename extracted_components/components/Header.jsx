const Header = () => {
  _s();
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
  return /* @__PURE__ */ jsxDEV("header", { className: `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100" : "bg-white/80 backdrop-blur-sm py-3 md:py-5 border-transparent"}`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-2 md:gap-3 group relative z-50", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-blue-600 blur-xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("img", { src: "https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg", alt: "BP2C Logo", className: "h-10 md:h-12 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10", "data-edit-id": "src/components/Header.jsx:71:15" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-none", "data-edit-id": "src/components/Header.jsx:74:15", children: "BP2C" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "hidden md:block text-[10px] md:text-xs font-medium text-blue-600 tracking-widest uppercase", "data-edit-id": "src/components/Header.jsx:75:15", children: "L'excellence de l'habitat" }, void 0, false, {
        ] }, void 0, true, {
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "hidden lg:flex items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm", children: navLinks.map((link) => /* @__PURE__ */ jsxDEV(Link, { to: link.path, className: `px-4 xl:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative group ${location.pathname === link.path ? "text-white" : "text-slate-600 hover:text-blue-700"}`, children: [
        /* @__PURE__ */ jsxDEV("span", { className: "relative z-10", "data-edit-disabled": "true", children: link.label }, void 0, false, {
        }, this),
        location.pathname === link.path && /* @__PURE__ */ jsxDEV(motion.div, { layoutId: "activeTab", className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md -z-0", transition: {
          type: "spring",
          bounce: 0.2,
          duration: 0.6
        } }, void 0, false, {
        }, this),
        location.pathname !== link.path && /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-x-4 bottom-1.5 h-0.5 bg-blue-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full", "data-edit-id": "src/components/Header.jsx:88:53" }, void 0, false, {
      ] }, link.path, true, {
      }, this)) }, void 0, false, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 md:gap-4", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "hidden md:flex items-center gap-2 bg-slate-900 text-white pl-4 pr-5 py-2.5 md:py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 group text-sm md:text-base", "data-edit-disabled": "true", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-3 h-3 md:w-4 md:h-4 fill-current" }, void 0, false, {
          }, this) }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "hidden xl:inline", children: "06 01 76 13 95" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "xl:hidden", children: "Appeler" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "lg:hidden relative z-50 p-2 md:p-2.5 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500", "aria-label": "Toggle menu", "data-edit-disabled": "true", children: isMenuOpen ? /* @__PURE__ */ jsxDEV(X, { className: "w-6 h-6" }, void 0, false, {
        }, this) : /* @__PURE__ */ jsxDEV(Menu, { className: "w-6 h-6" }, void 0, false, {
        }, this) }, void 0, false, {
      ] }, void 0, true, {
    ] }, void 0, true, {
    }, this) }, void 0, false, {
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isMenuOpen && /* @__PURE__ */ jsxDEV(motion.div, { initial: {
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
      /* @__PURE__ */ jsxDEV("div", { className: "p-4 md:p-6 space-y-2 flex-grow", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider px-4", "data-edit-id": "src/components/Header.jsx:125:15", children: "Menu Principal" }, void 0, false, {
        }, this),
        navLinks.map((link, idx) => /* @__PURE__ */ jsxDEV(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: idx * 0.05
        }, children: /* @__PURE__ */ jsxDEV(Link, { to: link.path, onClick: () => setIsMenuOpen(false), className: `flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all duration-200 border ${location.pathname === link.path ? "bg-blue-50 border-blue-100 text-blue-700 shadow-sm" : "bg-white border-transparent text-slate-600 hover:bg-slate-50"}`, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-3", "data-edit-disabled": "true", children: [
            location.pathname === link.path && /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-600" }, void 0, false, {
            }, this),
            link.label
          ] }, void 0, true, {
          }, this),
          /* @__PURE__ */ jsxDEV(ChevronRight, { className: `w-5 h-5 transition-opacity ${location.pathname === link.path ? "opacity-100" : "opacity-30"}` }, void 0, false, {
        ] }, void 0, true, {
        }, this) }, link.path, false, {
        }, this)),
        /* @__PURE__ */ jsxDEV("div", { className: "my-6 border-t border-slate-100" }, void 0, false, {
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider px-4 mt-6 block", "data-edit-id": "src/components/Header.jsx:146:15", children: "Informations" }, void 0, false, {
        }, this),
        mobileExtraLinks.map((link, idx) => /* @__PURE__ */ jsxDEV(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: navLinks.length * 0.05 + idx * 0.05
        }, children: /* @__PURE__ */ jsxDEV(Link, { to: link.path, onClick: () => setIsMenuOpen(false), className: "flex items-center justify-between px-4 py-3 text-sm text-slate-500 hover:text-blue-600 transition-colors", children: link.label }, void 0, false, {
        }, this) }, link.path, false, {
        }, this))
      ] }, void 0, true, {
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 bg-slate-50 border-t border-slate-100 pb-24 md:pb-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "tel:+33601761395", className: "flex items-center justify-center gap-3 bg-slate-900 text-white w-full py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform", "data-edit-disabled": "true", children: [
          /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 fill-current" }, void 0, false, {
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Appeler maintenant" }, void 0, false, {
        ] }, void 0, true, {
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs text-slate-400", "data-edit-id": "src/components/Header.jsx:168:17", children: "Disponible 7j/7 pour vos urgences" }, void 0, false, {
      ] }, void 0, true, {
      }, this) }, void 0, false, {
    ] }, void 0, true, {
    }, this) }, void 0, false, {
  ] }, void 0, true, {
  }, this);
};
_s(Header, "7aDSADaF+2jFkKesUuGqGmMzzng=", false, function() {
  return [useLocation];
});
_c = Header;
export default Header;
var _c;
$RefreshReg$(_c, "Header");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/u733383436/websites/oa9SzpXhF/public_html/src/components/Header.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/u733383436/websites/oa9SzpXhF/public_html/src/components/Header.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LFNBQVNnQixTQUFTLE9BQU9ILE1BQU07QUFBQSxRQUN4QyxHQUNRLGlDQUFDLFFBQUssSUFBSVIsS0FBS0osTUFBTSxTQUFTLE1BQU1kLGNBQWMsS0FBSyxHQUFHLFdBQVUsNEdBQ2pFa0IsZUFBS0gsU0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUEsS0FYa0RHLEtBQUtKLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFZbkMsQ0FBYTtBQUFBLFdBbkNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBb0NBO0FBQUEsTUFFQSx1QkFBQyxTQUFJLFdBQVUsMkRBQ2IsaUNBQUMsU0FBSSxXQUFVLHVCQUNiO0FBQUEsK0JBQUMsT0FBRSxNQUFLLG9CQUFtQixXQUFVLDBKQUF3Siw4QkFDM0w7QUFBQSxpQ0FBQyxTQUFNLFdBQVUsMEJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXVDO0FBQUEsVUFDdkMsdUJBQUMsVUFBSyxrQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF3QjtBQUFBLGFBRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFHQTtBQUFBLFFBQ0EsdUJBQUMsT0FBRSxXQUFVLHNDQUFvQyxxR0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsV0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUUEsS0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVUE7QUFBQSxTQTdEVztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOERiLEtBL0RKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnRUE7QUFBQSxPQS9HRztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZ0hMO0FBQ0o7QUFBQ2hCLEdBM0tLRCxRQUFNO0FBQUEsVUFHT1AsV0FBVztBQUFBO0FBQUEsS0FIeEJPO0FBNEtOLGVBQWVBO0FBQU0sSUFBQWlDO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJQaG9uZSIsIk1lbnUiLCJYIiwiQ2hldnJvblJpZ2h0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiSGVhZGVyIiwiX3MiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwibG9jYXRpb24iLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwibmF2TGlua3MiLCJwYXRoIiwibGFiZWwiLCJtb2JpbGVFeHRyYUxpbmtzIiwibWFwIiwibGluayIsInBhdGhuYW1lIiwidHlwZSIsImJvdW5jZSIsImR1cmF0aW9uIiwib3BhY2l0eSIsImhlaWdodCIsImVhc2UiLCJpZHgiLCJ4IiwiZGVsYXkiLCJsZW5ndGgiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9IZWFkZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFBob25lLCBNZW51LCBYLCBDaGV2cm9uUmlnaHQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBzZXRJc1Njcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMjApO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XG4gIH0sIFtsb2NhdGlvbl0pO1xuXG4gIC8vIFByZXZlbnQgYm9keSBzY3JvbGwgd2hlbiBtZW51IGlzIG9wZW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNNZW51T3Blbikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Vuc2V0JztcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnO1xuICAgIH07XG4gIH0sIFtpc01lbnVPcGVuXSk7XG4gIGNvbnN0IG5hdkxpbmtzID0gW3tcbiAgICBwYXRoOiAnLycsXG4gICAgbGFiZWw6ICdBY2N1ZWlsJ1xuICB9LCB7XG4gICAgcGF0aDogJy9wbG9tYmVyaWUnLFxuICAgIGxhYmVsOiAnUGxvbWJlcmllJ1xuICB9LCB7XG4gICAgcGF0aDogJy9jaGF1ZmZhZ2UnLFxuICAgIGxhYmVsOiAnQ2hhdWZmYWdlJ1xuICB9LCB7XG4gICAgcGF0aDogJy9jbGltYXRpc2F0aW9uJyxcbiAgICBsYWJlbDogJ0NsaW1hdGlzYXRpb24nXG4gIH0sIHtcbiAgICBwYXRoOiAnL3Jlbm92YXRpb24nLFxuICAgIGxhYmVsOiAnUsOpbm92YXRpb24nXG4gIH0sIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBsYWJlbDogJ8OAIHByb3BvcydcbiAgfSwge1xuICAgIHBhdGg6ICcvY29udGFjdCcsXG4gICAgbGFiZWw6ICdDb250YWN0J1xuICB9XTtcbiAgY29uc3QgbW9iaWxlRXh0cmFMaW5rcyA9IFt7XG4gICAgcGF0aDogJy9mYXEnLFxuICAgIGxhYmVsOiAnRkFRJ1xuICB9LCB7XG4gICAgcGF0aDogJy9tZW50aW9ucy1sZWdhbGVzJyxcbiAgICBsYWJlbDogJ01lbnRpb25zIEzDqWdhbGVzJ1xuICB9LCB7XG4gICAgcGF0aDogJy9wb2xpdGlxdWUtY29uZmlkZW50aWFsaXRlJyxcbiAgICBsYWJlbDogJ0NvbmZpZGVudGlhbGl0w6knXG4gIH1dO1xuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTQwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCAke2lzU2Nyb2xsZWQgPyAnYmctd2hpdGUvOTUgYmFja2Ryb3AtYmx1ci1tZCBzaGFkb3ctbGcgcHktMyBib3JkZXItYiBib3JkZXItZ3JheS0xMDAnIDogJ2JnLXdoaXRlLzgwIGJhY2tkcm9wLWJsdXItc20gcHktMyBtZDpweS01IGJvcmRlci10cmFuc3BhcmVudCd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBMb2dvIFNlY3Rpb24gKi99XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWQ6Z2FwLTMgZ3JvdXAgcmVsYXRpdmUgei01MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmx1ZS02MDAgYmx1ci14bCBvcGFjaXR5LTIwIGdyb3VwLWhvdmVyOm9wYWNpdHktMzAgdHJhbnNpdGlvbi1vcGFjaXR5IHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaG9yaXpvbnMtY2RuLmhvc3Rpbmdlci5jb20vOWZiYTQzYWUtOWVlYS00YTlmLWFiMzUtZDYwMzE1MTlhODY2LzY4MTUyZTU4YzlkNTkzYWRiZTllMDNiOGQ3NWRlZGNkLmpwZ1wiIGFsdD1cIkJQMkMgTG9nb1wiIGNsYXNzTmFtZT1cImgtMTAgbWQ6aC0xMiBsZzpoLTE2IHctYXV0byBvYmplY3QtY29udGFpbiB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHJlbGF0aXZlIHotMTBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zbGF0ZS05MDAgbGVhZGluZy1ub25lXCI+QlAyQzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIHRleHQtWzEwcHhdIG1kOnRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlXCI+TCdleGNlbGxlbmNlIGRlIGwnaGFiaXRhdDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gKi99XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgYmctc2xhdGUtMTAwLzUwIHAtMS41IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMC81MCBiYWNrZHJvcC1ibHVyLXNtXCI+XG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gPExpbmsga2V5PXtsaW5rLnBhdGh9IHRvPXtsaW5rLnBhdGh9IGNsYXNzTmFtZT17YHB4LTQgeGw6cHgtNSBweS0yLjUgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgcmVsYXRpdmUgZ3JvdXAgJHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gbGluay5wYXRoID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtc2xhdGUtNjAwIGhvdmVyOnRleHQtYmx1ZS03MDAnfWB9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj57bGluay5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lID09PSBsaW5rLnBhdGggJiYgPG1vdGlvbi5kaXYgbGF5b3V0SWQ9XCJhY3RpdmVUYWJcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB0by1ibHVlLTcwMCByb3VuZGVkLWZ1bGwgc2hhZG93LW1kIC16LTBcIiB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAgIGJvdW5jZTogMC4yLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMC42XG4gICAgICAgICAgICB9fSAvPn1cbiAgICAgICAgICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgIT09IGxpbmsucGF0aCAmJiA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTQgYm90dG9tLTEuNSBoLTAuNSBiZy1ibHVlLTIwMCBzY2FsZS14LTAgZ3JvdXAtaG92ZXI6c2NhbGUteC0xMDAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gb3JpZ2luLWxlZnQgZHVyYXRpb24tMzAwIHJvdW5kZWQtZnVsbFwiPjwvc3Bhbj59XG4gICAgICAgICAgICAgIDwvTGluaz4pfVxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgey8qIENUQSAmIE1vYmlsZSBUb2dnbGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtZDpnYXAtNFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzM2MDE3NjEzOTVcIiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctc2xhdGUtOTAwIHRleHQtd2hpdGUgcGwtNCBwci01IHB5LTIuNSBtZDpweS0zIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCBob3ZlcjpiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGdyb3VwIHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMjAgcC0xLjUgcm91bmRlZC1mdWxsIGdyb3VwLWhvdmVyOmJnLXdoaXRlLzMwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctMyBoLTMgbWQ6dy00IG1kOmgtNCBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHhsOmlubGluZVwiPjA2IDAxIDc2IDEzIDk1PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ4bDpoaWRkZW5cIj5BcHBlbGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfSBjbGFzc05hbWU9XCJsZzpoaWRkZW4gcmVsYXRpdmUgei01MCBwLTIgbWQ6cC0yLjUgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTkwMCBob3ZlcjpiZy1zbGF0ZS0yMDAgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBtZW51XCI+XG4gICAgICAgICAgICAgIHtpc01lbnVPcGVuID8gPFggY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+IDogPE1lbnUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgTWVudSBPdmVybGF5ICovfVxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2lzTWVudU9wZW4gJiYgPG1vdGlvbi5kaXYgaW5pdGlhbD17e1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBoZWlnaHQ6IDBcbiAgICAgIH19IGFuaW1hdGU9e3tcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCJcbiAgICAgIH19IGV4aXQ9e3tcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgICB9fSB0cmFuc2l0aW9uPXt7XG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIGVhc2U6IFswLjIyLCAxLCAwLjM2LCAxXVxuICAgICAgfX0gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGZpeGVkIGluc2V0LTAgdG9wLVs2MHB4XSBtZDp0b3AtWzgwcHhdIGJnLXdoaXRlIHotNDAgb3ZlcmZsb3cteS1hdXRvIGJvcmRlci10IGJvcmRlci1zbGF0ZS0xMDAgZmxleCBmbGV4LWNvbCBwYi0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbWQ6cC02IHNwYWNlLXktMiBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zbGF0ZS00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHB4LTRcIj5NZW51IFByaW5jaXBhbDwvc3Bhbj5cbiAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaywgaWR4KSA9PiA8bW90aW9uLmRpdiBrZXk9e2xpbmsucGF0aH0gaW5pdGlhbD17e1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHg6IC0yMFxuICAgICAgICAgIH19IGFuaW1hdGU9e3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB4OiAwXG4gICAgICAgICAgfX0gdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZGVsYXk6IGlkeCAqIDAuMDVcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtsaW5rLnBhdGh9IG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oZmFsc2UpfSBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IHJvdW5kZWQteGwgdGV4dC1sZyBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgYm9yZGVyICR7bG9jYXRpb24ucGF0aG5hbWUgPT09IGxpbmsucGF0aCA/ICdiZy1ibHVlLTUwIGJvcmRlci1ibHVlLTEwMCB0ZXh0LWJsdWUtNzAwIHNoYWRvdy1zbScgOiAnYmctd2hpdGUgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc2xhdGUtNjAwIGhvdmVyOmJnLXNsYXRlLTUwJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgPT09IGxpbmsucGF0aCAmJiA8ZGl2IGNsYXNzTmFtZT1cInctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1ibHVlLTYwMFwiPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT17YHctNSBoLTUgdHJhbnNpdGlvbi1vcGFjaXR5ICR7bG9jYXRpb24ucGF0aG5hbWUgPT09IGxpbmsucGF0aCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0zMCd9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KX1cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTYgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zbGF0ZS00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHB4LTQgbXQtNiBibG9ja1wiPkluZm9ybWF0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAge21vYmlsZUV4dHJhTGlua3MubWFwKChsaW5rLCBpZHgpID0+IDxtb3Rpb24uZGl2IGtleT17bGluay5wYXRofSBpbml0aWFsPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgeDogLTIwXG4gICAgICAgICAgfX0gYW5pbWF0ZT17e1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHg6IDBcbiAgICAgICAgICB9fSB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkZWxheTogbmF2TGlua3MubGVuZ3RoICogMC4wNSArIGlkeCAqIDAuMDVcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtsaW5rLnBhdGh9IG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oZmFsc2UpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0zIHRleHQtc20gdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy1zbGF0ZS01MCBib3JkZXItdCBib3JkZXItc2xhdGUtMTAwIHBiLTI0IG1kOnBiLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzM2MDE3NjEzOTVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZSB3LWZ1bGwgcHktNCByb3VuZGVkLXhsIGZvbnQtYm9sZCB0ZXh0LWxnIHNoYWRvdy1sZyBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IGZpbGwtY3VycmVudFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BcHBlbGVyIG1haW50ZW5hbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgICAgICAgIERpc3BvbmlibGUgN2ovNyBwb3VyIHZvcyB1cmdlbmNlc1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+fVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9oZWFkZXI+O1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwiZmlsZSI6Ii9ob21lL3U3MzMzODM0MzYvd2Vic2l0ZXMvb2E5U3pwWGhGL3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3gifQ==

