const ContactPage = () => {
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
  return <Fragment { children: [
    <Helmet { children: [
      <title { children: "Contact BP2C | Devis Gratuit & Contact Rapide" }
      }, this),
      <meta { name: "description", content: "Contactez BP2C à Fréjus pour vos travaux de plomberie et chauffage. Devis gratuit, réponse rapide." }
    ] }
    }, this),
    <div { className: "min-h-screen bg-slate-50 pt-20 pb-12 md:pt-24 md:pb-16", children: <div { className: "container mx-auto px-4 md:px-6", children: [
      <div { className: "text-center max-w-2xl mx-auto mb-10 md:mb-16", children: [
        <h1 { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4", "data-edit-id": "src/pages/ContactPage.jsx:30:15", children: "Contactez-nous" }
        }, this),
        <p { className: "text-slate-600 text-base md:text-lg", "data-edit-id": "src/pages/ContactPage.jsx:31:15", children: "Une question ? Un devis ? Nous sommes à votre écoute pour concrétiser vos projets ou résoudre vos urgences." }
      ] }
      }, this),
      <div { className: "grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        <div { className: "lg:col-span-1 space-y-6", children: <div { className: "bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 h-full", children: [
          <h2 { className: "text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8", "data-edit-id": "src/pages/ContactPage.jsx:41:21", children: "Coordonnées" }
          }, this),
          <div { className: "space-y-6 md:space-y-8", children: [
            <div { className: "flex items-start space-x-4", children: [
              <div { className: "bg-blue-50 p-3 rounded-lg", children: <Phone { className: "w-5 h-5 md:w-6 md:h-6 text-blue-600" }
              }, this) }
              }, this),
              <div { children: [
                <p { className: "text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider", "data-edit-id": "src/pages/ContactPage.jsx:49:30", children: "Téléphone" }
                }, this),
                <a { href: "tel:+33601761395", className: "text-base md:text-lg font-bold text-slate-900 hover:text-blue-600", "data-edit-id": "src/pages/ContactPage.jsx:50:30", children: "06 01 76 13 95" }
                }, this),
                <p { className: "text-xs md:text-sm text-slate-400", "data-edit-id": "src/pages/ContactPage.jsx:51:30", children: "Lun-Ven 8h-18h" }
              ] }
            ] }
            }, this),
            <div { className: "flex items-start space-x-4", children: [
              <div { className: "bg-orange-50 p-3 rounded-lg", children: <Mail { className: "w-5 h-5 md:w-6 md:h-6 text-orange-600" }
              }, this) }
              }, this),
              <div { children: [
                <p { className: "text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider", "data-edit-id": "src/pages/ContactPage.jsx:60:30", children: "Email" }
                }, this),
                <a { href: "mailto:contact@bp2c.net", className: "text-base md:text-lg font-bold text-slate-900 hover:text-orange-600 break-all", "data-edit-id": "src/pages/ContactPage.jsx:61:30", children: "contact@bp2c.net" }
                }, this),
                <p { className: "text-xs md:text-sm text-slate-400", "data-edit-id": "src/pages/ContactPage.jsx:62:30", children: "Réponse sous 24h" }
              ] }
            ] }
            }, this),
            <div { className: "flex items-start space-x-4", children: [
              <div { className: "bg-slate-50 p-3 rounded-lg", children: <MapPin { className: "w-5 h-5 md:w-6 md:h-6 text-slate-600" }
              }, this) }
              }, this),
              <div { children: [
                <p { className: "text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider", "data-edit-id": "src/pages/ContactPage.jsx:71:30", children: "Adresse" }
                }, this),
                <p { className: "text-base md:text-lg font-bold text-slate-900", "data-edit-id": "src/pages/ContactPage.jsx:72:30", children: "160 Rue du Thoron" }
                }, this),
                <p { className: "text-base md:text-lg text-slate-900", "data-edit-id": "src/pages/ContactPage.jsx:73:30", children: "83600 Fréjus" }
              ] }
            ] }
          ] }
        ] }
        }, this) }
        }, this),
        <div { className: "lg:col-span-2", children: <div { className: "bg-white p-6 md:p-12 rounded-2xl shadow-lg border border-slate-100", children: [
          <h2 { className: "text-xl md:text-2xl font-bold text-slate-900 mb-6", "data-edit-id": "src/pages/ContactPage.jsx:83:21", children: "Envoyez-nous un message" }
          }, this),
          <form { onSubmit: handleSubmit, className: "space-y-4 md:space-y-6", children: [
            <div { className: "grid md:grid-cols-2 gap-4 md:gap-6", children: [
              <div { className: "space-y-2", children: [
                <label { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:87:30", children: "Nom complet" }
                }, this),
                <input { type: "text", name: "name", required: true, value: formData.name, onChange: handleChange, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900", placeholder: "Votre nom" }
              ] }
              }, this),
              <div { className: "space-y-2", children: [
                <label { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:91:30", children: "Téléphone" }
                }, this),
                <input { type: "tel", name: "phone", required: true, value: formData.phone, onChange: handleChange, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900", placeholder: "Votre numéro" }
              ] }
            ] }
            }, this),
            <div { className: "space-y-2", children: [
              <label { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:97:27", children: "Email" }
              }, this),
              <input { type: "email", name: "email", required: true, value: formData.email, onChange: handleChange, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900", placeholder: "votre@email.com" }
            ] }
            }, this),
            <div { className: "space-y-2", children: [
              <label { className: "text-sm font-semibold text-slate-700", "data-edit-id": "src/pages/ContactPage.jsx:102:27", children: "Message" }
              }, this),
              <textarea { name: "message", required: true, value: formData.message, onChange: handleChange, rows: 5, className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all text-slate-900", placeholder: "Dites-nous en plus sur votre projet..." }
            ] }
            }, this),
            <Button { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl font-bold shadow-lg shadow-blue-600/20", "data-edit-disabled": "true", children: [
              <Send { className: "mr-2 w-5 h-5" }
              }, this),
              " Envoyer ma demande"
            ] }
          ] }
        ] }
        }, this) }
      ] }
    ] }
    }, this) }
  ] }
  }, this);
};
_s(ContactPage, "C+wM3CmP2JGYWXNZDcybN+p6l/w=", false, function() {
  return [useToast];
});