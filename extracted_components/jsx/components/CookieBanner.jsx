const CookieBanner = () => {
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
  return <AnimatePresence { children: isVisible && <motion.div { initial: {
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
  }, className: "fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl", children: <div { className: "container mx-auto px-4 py-6", children: <div { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
    <div { className: "flex items-start space-x-4 flex-1", children: [
      <Cookie { className: "w-8 h-8 text-orange-500 flex-shrink-0 mt-1" }
      }, this),
      <div { className: "flex-1", children: [
        <h3 { className: "font-bold text-gray-900 mb-2", "data-edit-id": "src/components/CookieBanner.jsx:42:19", children: "Nous respectons votre vie privée" }
        }, this),
        <p { className: "text-sm text-gray-600 leading-relaxed", "data-edit-id": "src/components/CookieBanner.jsx:43:19", children: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. Ces cookies nous permettent d'analyser le trafic et d'améliorer nos services. En continuant votre navigation, vous acceptez l'utilisation de ces cookies conformément à notre politique de confidentialité et au RGPD." }
      ] }
    ] }
    }, this),
    <div { className: "flex items-center space-x-3 w-full md:w-auto", children: [
      <Button { onClick: handleReject, variant: "outline", className: "flex-1 md:flex-none border-2 border-gray-300 text-gray-700 hover:bg-gray-100", "data-edit-id": "src/components/CookieBanner.jsx:53:17", children: "Refuser" }
      }, this),
      <Button { onClick: handleAccept, className: "flex-1 md:flex-none bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-xl", "data-edit-id": "src/components/CookieBanner.jsx:60:17", children: "Accepter" }
      }, this),
      <button { onClick: handleReject, className: "p-2 text-gray-400 hover:text-gray-600 transition-colors", "aria-label": "Fermer", "data-edit-disabled": "true", children: <X { className: "w-5 h-5" }
      }, this) }
    ] }
  ] }
  }, this) }
  }, this) }
  }, this) }
  }, this);
};
_s(CookieBanner, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");