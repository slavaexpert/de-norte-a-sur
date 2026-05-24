/* De Norte a Sur — site script
   - Language switcher (ES default, EN secondary)
   - Sticky header scroll state
   - Mobile nav toggle
   - Menu tab switching
   - Today's-hours highlight
*/

(function () {
  "use strict";

  // ───── i18n dictionary ─────
  const i18n = {
    es: {
      "meta.title": "De Norte a Sur · Cocina española y rumana · Paterna, Valencia",
      "meta.description": "Café y cocina española y rumana en el corazón de Paterna. Almuerzos, tapas, hamburguesas y desayunos en un ambiente cálido y mediterráneo.",
      "a11y.skip": "Saltar al contenido",
      "brand.sub": "Cocina española y rumana",

      "nav.about": "Nosotros",
      "nav.menu": "Carta",
      "nav.gallery": "Fotos",
      "nav.location": "Dónde estamos",
      "nav.hours": "Horario",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Paterna · Valencia · desde 2025",
      "hero.title1": "De Norte",
      "hero.title2": "a Sur",
      "hero.lede": "Un café de barrio donde el almuerzo valenciano se sienta a la mesa con los sabores del este de Europa. Tostadas, tapas, mici y un cortado bien tirado.",
      "hero.scroll": "Sigue bajando",

      "cta.menu": "Ver carta",
      "cta.directions": "Cómo llegar",
      "cta.book": "Reservar mesa",

      "strip.opens": "Abierto hoy",
      "strip.cafe": "Cafés",
      "strip.promo": "Promo del día",
      "strip.promoVal": "2 tercios + tapa · 7 €",

      "about.eyebrow": "Nosotros",
      "about.title": "Una mesa larga entre el Mediterráneo y los Cárpatos.",
      "about.p1": "De Norte a Sur nació con una idea sencilla: que el desayuno valenciano y la comida rumana pudieran compartir la misma barra sin pedir permiso. Aquí el día empieza con tostada de tomate y café, sigue con bravas y termina con <em>mici</em>, choricitos a la cerveza y una caña fresca.",
      "about.p2": "Cocinamos con producto cercano, recetas de casa y cariño suficiente para que cada mesa, sea de almuerzo rápido o sobremesa larga, se sienta como una invitación.",
      "about.p01t": "Cocina honesta",
      "about.p01b": "Recetas tradicionales españolas y rumanas, sin atajos.",
      "about.p02t": "Café diario",
      "about.p02b": "Todos los cafés a 1,20 € de lunes a viernes hasta las 09:00.",
      "about.p03t": "Barrio",
      "about.p03b": "Un sitio de Paterna para vecinos, oficinistas y curiosos.",
      "about.quote": "El bocadillo de calamares más serio de Paterna, y un café que vale lo que cuesta.",
      "about.quoteCite": "— Vecino habitual",

      "menu.eyebrow": "Nuestra carta",
      "menu.title": "Para picar, para almorzar, para quedarse.",
      "menu.lede": "Carta vigente. Los nombres tradicionales se mantienen en español; debajo encontrarás la nota en inglés cuando hace falta.",

      "cat.desayunos": "Desayunos",
      "cat.desayunos.note": "Café + tostada. Servido toda la mañana.",
      "cat.almuerzos": "Almuerzos",
      "cat.almuerzos.note": "Bocadillo + bebida + café. Máximo 3 ingredientes en los populares.",
      "cat.alm.pop": "Populares · 6,50 €",
      "cat.alm.esp": "Especiales · 7,50 €",
      "cat.tapasC": "Tapas clásicas",
      "cat.tapasC.note": "El recetario de siempre, para compartir.",
      "cat.tapasE": "Tapas especiales",
      "cat.tapasE.note": "Para compartir, repetir y discutir.",
      "cat.rumania": "Platos de Rumanía",
      "cat.rumania.note": "La barra del este. Para descubrir o reencontrar.",
      "cat.burgers": "Hamburguesas",
      "cat.burgers.note": "Acompañadas de patatas.",
      "cat.cafes": "Cafés",
      "cat.cafes.note": "Todos los cafés a 1,20 € de lunes a viernes hasta las 09:00.",
      "cat.bebidas": "Bebidas",
      "cat.bebidas.note": "Refrescos, cervezas, vinos y licores.",

      // Dish descriptions (ES — concise)
      "dish.tost.sal": "Pan tostado con aceite de oliva y sal.",
      "dish.tost.tom": "Tomate rallado y aceite — el desayuno valenciano de siempre.",
      "dish.tost.jam": "Tostada de tomate rematada con jamón.",
      "dish.tost.atun": "Tostada de tomate con atún en aceite.",
      "dish.tost.queso": "Tostada de tomate con queso fundido.",
      "dish.alm.pop": "Bocadillo + bebida + café. Hasta 3 ingredientes.",
      "dish.chivito": "Bocadillo de carne con todo el aderezo.",
      "dish.brascada": "Bocadillo de ternera braseada.",
      "dish.calamares": "Bocadillo de calamares — clásico español.",
      "dish.bravas": "Patatas fritas con salsa brava picante.",
      "dish.morro": "Morro de cerdo crujiente, tapa de barra.",
      "dish.calam": "Aros de calamar fritos, limón.",
      "dish.oreja": "Oreja de cerdo guisada, pimentón.",
      "dish.ajo": "Bacalao, patata y emulsión de ajo.",
      "dish.ensa": "Ensaladilla rusa con atún.",
      "dish.gambas": "Gambas salteadas en aceite con ajo.",
      "dish.boq": "Boquerones marinados en vinagre.",
      "dish.croq.j": "5 croquetas de jamón.",
      "dish.jala": "Jalapeños rellenos de queso, rebozados y fritos.",
      "dish.teq": "Palitos crujientes rellenos de queso.",
      "dish.torrezno": "Panceta cocinada lenta, corteza crujiente.",
      "dish.tellinas": "Tellinas al ajillo.",
      "dish.sepia": "Sepia a la plancha, perejil y limón.",
      "dish.nugg": "Nuggets de pollo con patatas.",
      "dish.tacos": "Tacos de ternera, pimiento y queso fundido.",
      "dish.quesa": "Quesadillas de pollo a la plancha con queso fundido.",
      "dish.croq.r": "5 croquetas de rabo de toro.",
      "dish.alitas": "5 alitas de pollo con patatas fritas.",
      "dish.mici": "Chorizos rumanos sin piel, a la brasa — pide unos cuantos.",
      "dish.cho.b": "Chorizos pequeños cocinados a la cerveza.",
      "dish.cho.m": "Chorizos pequeños con glaseado de mostaza.",
      "dish.cho.p": "Chorizo servido con patatas fritas.",
      "dish.simple": "Hamburguesa con queso. Con patatas.",
      "dish.maxi": "Carne, queso, bacon, huevo, cebolla caramelizada, tomate y lechuga. Con patatas.",
      "dish.solo": "Espresso solo.",
      "dish.cortado": "Espresso cortado con un poco de leche.",
      "dish.carajillo": "Café con un chorro de licor.",
      "dish.cremaet": "Café flameado valenciano con ron y canela.",
      "dish.bombon": "Espresso con leche condensada.",
      "dish.cleche": "Espresso con leche caliente.",
      "dish.americano": "Espresso largo con agua caliente.",
      "dish.suple": "Suplemento de terraza.",

      "from": "desde 1,90 €",
      "from2": "desde 1,70 €",
      "from3": "desde 6,00 €",

      "promo.tag": "Promoción especial",
      "promo.title": "2 tercios + tapa de bravas",
      "promo.sub": "Dos cervezas de 33 cl y una ración de patatas bravas.",

      "allergens.title": "Alérgenos:",
      "allergens.body": "consulta la tabla de alérgenos disponible en el local. Si tienes alguna intolerancia, dínoslo al pedir.",

      "loc.eyebrow": "Dónde estamos",
      "loc.title": "En el centro de Paterna, a un paso del metro.",
      "loc.directions": "Cómo llegar",
      "loc.open": "Abrir en Google Maps",
      "loc.transport": "Transporte",
      "loc.transport.v": "Metrovalencia L1 / L2 — La Canyada",
      "loc.parking": "Aparcamiento",
      "loc.parking.v": "Zona azul en la misma calle",
      "loc.access": "Accesibilidad",
      "loc.access.v": "Acceso a pie de calle",

      "hours.eyebrow": "Horario",
      "hours.title": "Abrimos temprano. Cerramos cuando se acaba la sobremesa.",
      "hours.lede": "Servimos desayuno desde las 7:30. La cocina cierra una hora antes del cierre.",
      "hours.placeholder": "Horario orientativo — confírmanos cierres o festivos por WhatsApp.",

      "day.mon": "Lunes",
      "day.tue": "Martes",
      "day.wed": "Miércoles",
      "day.thu": "Jueves",
      "day.fri": "Viernes",
      "day.sat": "Sábado",
      "day.sun": "Domingo",

      "ct.eyebrow": "Contacto",
      "ct.title": "Reserva, pregunta o pásate sin avisar.",
      "ct.lede": "Las reservas se confirman por teléfono o WhatsApp. Para grupos grandes, escríbenos con un par de días de antelación.",
      "ct.phone": "Teléfono",
      "ct.email": "Email",
      "ct.placeholder": "Placeholder",
      "ct.reserveEye": "Reservar mesa",
      "ct.reserveTitle": "¿Mesa para esta noche?",
      "ct.whatsapp": "Reservar por WhatsApp",
      "ct.call": "Llámanos",

      "footer.desc": "Café, almuerzos y tapas en Paterna. Cocina española y rumana servida con calma desde la mañana hasta la noche.",
      "footer.visit": "Visítanos",
      "footer.contact": "Contacto",
      "footer.lang": "Idioma",
      "footer.rights": "Todos los derechos reservados.",
      "footer.built": "Sitio estático · HTML, CSS y JS. Imágenes de muestra como placeholders.",

      "gallery.eyebrow": "De la cocina",
      "gallery.title": "Fotos",
      "gallery.lede": "Imágenes de nuestra carta. Toca cualquiera para verla en grande.",
      "gallery.note": "Imágenes orientativas. La presentación puede variar según disponibilidad.",
      "brand.alt": "Logotipo de De Norte a Sur",

      "chip.photo": "Foto",
      "chip.menu":  "Carta",
      "chip.warm":  "Visítanos",

      "gal.cerv.name": "Estrella Galicia",
      "gal.cerv.sub":  "Bebidas",
      "gal.cerv.alt":  "Botella de cerveza Estrella Galicia",
      "gal.mahou.name": "Mahou",
      "gal.mahou.sub":  "Bebidas",
      "gal.mahou.alt":  "Botella de cerveza Mahou Cinco Estrellas",
      "gal.aguila.name": "El Águila",
      "gal.aguila.sub":  "Bebidas",
      "gal.aguila.alt":  "Lata de cerveza El Águila Dorada",
      "gal.boc.name": "Bocadillo de calamares",
      "gal.boc.sub":  "Almuerzo especial",
      "gal.boc.alt":  "Bocadillo de calamares sobre pan rustico",
      "gal.brav.name": "Patatas bravas",
      "gal.brav.sub":  "Tapa clásica",
      "gal.brav.alt":  "Plato de patatas bravas con salsa picante",
      "gal.mici1.name": "Mici con mostaza",
      "gal.mici1.sub":  "Cocina rumana",
      "gal.mici1.alt":  "Mici rumanos a la brasa mojados en mostaza",
      "gal.calam.name": "Calamares fritos",
      "gal.calam.sub":  "Tapa clásica",
      "gal.calam.alt":  "Aros de calamar fritos con limón",
      "gal.mici2.name": "Mici con patatas",
      "gal.mici2.sub":  "Plato de Rumanía",
      "gal.mici2.alt":  "Plato de mici con patatas fritas y salsa",
      "gal.maxi.name": "Maxi Burguer",
      "gal.maxi.sub":  "Hamburguesas",
      "gal.maxi.alt":  "Hamburguesa con bacon, huevo y queso",
      "gal.tost.name": "Tostada de jamón",
      "gal.tost.sub":  "Desayunos",
      "gal.tost.alt":  "Tostada con jamón y aceite",
      "gal.cafe.name": "Café",
      "gal.cafe.sub":  "Todos los cafés 1,20 €",
      "gal.cafe.alt":  "Taza de café con leche con dibujo de hoja"
    },

    en: {
      "meta.title": "De Norte a Sur · Spanish & Romanian kitchen · Paterna, Valencia",
      "meta.description": "Café and Spanish & Romanian kitchen in the heart of Paterna. Almuerzos, tapas, burgers and breakfast in a warm Mediterranean room.",
      "a11y.skip": "Skip to content",
      "brand.sub": "Spanish & Romanian kitchen",

      "nav.about": "About",
      "nav.menu": "Menu",
      "nav.gallery": "Photos",
      "nav.location": "Location",
      "nav.hours": "Hours",
      "nav.contact": "Contact",

      "hero.eyebrow": "Paterna · Valencia · since 2025",
      "hero.title1": "From North",
      "hero.title2": "to South",
      "hero.lede": "A neighbourhood café where the Valencian morning bocadillo meets the flavours of Eastern Europe. Toasts, tapas, mici and a well-poured cortado.",
      "hero.scroll": "Keep scrolling",

      "cta.menu": "View menu",
      "cta.directions": "Get directions",
      "cta.book": "Book a table",

      "strip.opens": "Open today",
      "strip.cafe": "Coffees",
      "strip.promo": "Today's promo",
      "strip.promoVal": "2 beers + tapa · €7",

      "about.eyebrow": "About us",
      "about.title": "One long table between the Mediterranean and the Carpathians.",
      "about.p1": "De Norte a Sur started with a simple idea: that the Valencian breakfast and Romanian cooking could share the same bar without asking permission. Mornings begin with tomato toast and coffee, run through patatas bravas and end with <em>mici</em>, beer-glazed chorizos and a cold caña.",
      "about.p2": "We cook with local produce, family recipes and enough warmth that every table — a quick almuerzo or a long sobremesa — feels like an invitation.",
      "about.p01t": "Honest cooking",
      "about.p01b": "Traditional Spanish and Romanian recipes, no shortcuts.",
      "about.p02t": "Daily coffee",
      "about.p02b": "All coffees €1.20, Monday to Friday until 9 am.",
      "about.p03t": "Neighbourhood",
      "about.p03b": "A Paterna spot for locals, office folk and curious wanderers.",
      "about.quote": "The most serious calamari sandwich in Paterna, and a coffee that's worth what it costs.",
      "about.quoteCite": "— A regular",

      "menu.eyebrow": "Our menu",
      "menu.title": "Something to nibble, something to share, something to stay for.",
      "menu.lede": "Current menu. Traditional names stay in Spanish; you'll find a short English note below when it helps.",

      "cat.desayunos": "Breakfast",
      "cat.desayunos.note": "Coffee + toast. Served through the morning.",
      "cat.almuerzos": "Almuerzos",
      "cat.almuerzos.note": "Sandwich + drink + coffee. Up to 3 fillings on the Populares.",
      "cat.alm.pop": "Populares · €6.50",
      "cat.alm.esp": "Specials · €7.50",
      "cat.tapasC": "Classic tapas",
      "cat.tapasC.note": "The old recipe book, made for sharing.",
      "cat.tapasE": "Special tapas",
      "cat.tapasE.note": "To share, repeat and argue over.",
      "cat.rumania": "Romanian plates",
      "cat.rumania.note": "The Eastern bar. To discover or rediscover.",
      "cat.burgers": "Burgers",
      "cat.burgers.note": "Served with fries.",
      "cat.cafes": "Coffees",
      "cat.cafes.note": "All coffees €1.20, Monday to Friday until 9 am.",
      "cat.bebidas": "Drinks",
      "cat.bebidas.note": "Soft drinks, beer, wine and spirits.",

      // Same dish descriptions (English already on page) — keep them as in HTML
      "dish.tost.sal": "Olive oil and sea salt on toasted country bread.",
      "dish.tost.tom": "Grated tomato & olive oil — the Valencian morning standard.",
      "dish.tost.jam": "Tomato toast topped with cured Spanish ham.",
      "dish.tost.atun": "Tomato toast with tuna in olive oil.",
      "dish.tost.queso": "Tomato toast with melted cheese.",
      "dish.alm.pop": "Sandwich + drink + coffee. Up to 3 fillings.",
      "dish.chivito": "Stacked steak sandwich with the works.",
      "dish.brascada": "Slow-cooked beef sandwich.",
      "dish.calamares": "Fried squid sandwich — Spanish classic.",
      "dish.bravas": "Fried potatoes, spicy bravas sauce.",
      "dish.morro": "Crispy pork snout, a Spanish bar staple.",
      "dish.calam": "Fried squid rings, lemon.",
      "dish.oreja": "Braised pork ear, paprika.",
      "dish.ajo": "Cod, potato & garlic emulsion.",
      "dish.ensa": "Spanish potato salad with tuna.",
      "dish.gambas": "Prawns sizzled in garlic oil.",
      "dish.boq": "Marinated anchovies in vinegar.",
      "dish.croq.j": "5 ham croquettes.",
      "dish.jala": "Cheese-stuffed jalapeños, breaded & fried.",
      "dish.teq": "Crispy cheese sticks.",
      "dish.torrezno": "Slow-cooked, crackling pork belly.",
      "dish.tellinas": "Tiny Mediterranean clams in garlic.",
      "dish.sepia": "Grilled cuttlefish, parsley & lemon.",
      "dish.nugg": "Chicken nuggets & fries.",
      "dish.tacos": "Beef, pepper & melted cheese tacos.",
      "dish.quesa": "Grilled chicken & melted cheese quesadillas.",
      "dish.croq.r": "5 oxtail croquettes.",
      "dish.alitas": "5 chicken wings with fries.",
      "dish.mici": "Grilled Romanian skinless sausages — order a handful.",
      "dish.cho.b": "Small chorizos simmered in beer.",
      "dish.cho.m": "Small chorizos in mustard glaze.",
      "dish.cho.p": "Chorizo served with fried potatoes.",
      "dish.simple": "Beef patty & cheese. Served with fries.",
      "dish.maxi": "Beef, cheese, bacon, egg, caramelized onion, tomato & lettuce. Served with fries.",
      "dish.solo": "Single espresso.",
      "dish.cortado": "Espresso cut with a dash of milk.",
      "dish.carajillo": "Espresso with a shot of liquor.",
      "dish.cremaet": "Valencian flamed coffee with rum & cinnamon.",
      "dish.bombon": "Espresso layered with sweetened condensed milk.",
      "dish.cleche": "Espresso with hot milk.",
      "dish.americano": "Espresso lengthened with hot water.",
      "dish.suple": "Terrace surcharge.",

      "from":  "from €1.90",
      "from2": "from €1.70",
      "from3": "from €6.00",

      "promo.tag": "Special offer",
      "promo.title": "2 beers + patatas bravas",
      "promo.sub": "Two 33cl beers and a side of patatas bravas.",

      "allergens.title": "Allergens:",
      "allergens.body": "see the allergen chart at the venue. Tell us if you have any intolerance when you order.",

      "loc.eyebrow": "Find us",
      "loc.title": "In central Paterna, a short walk from the metro.",
      "loc.directions": "Get directions",
      "loc.open": "Open in Google Maps",
      "loc.transport": "Transport",
      "loc.transport.v": "Metrovalencia L1 / L2 — La Canyada",
      "loc.parking": "Parking",
      "loc.parking.v": "Blue-zone parking on the street",
      "loc.access": "Accessibility",
      "loc.access.v": "Step-free entrance",

      "hours.eyebrow": "Hours",
      "hours.title": "We open early. We close when the sobremesa ends.",
      "hours.lede": "Breakfast served from 7:30. The kitchen closes one hour before closing time.",
      "hours.placeholder": "Approximate hours — please confirm holidays or closures via WhatsApp.",

      "day.mon": "Monday",
      "day.tue": "Tuesday",
      "day.wed": "Wednesday",
      "day.thu": "Thursday",
      "day.fri": "Friday",
      "day.sat": "Saturday",
      "day.sun": "Sunday",

      "ct.eyebrow": "Contact",
      "ct.title": "Book, ask, or just walk in.",
      "ct.lede": "Reservations confirmed by phone or WhatsApp. For larger groups, message us a couple of days ahead.",
      "ct.phone": "Phone",
      "ct.email": "Email",
      "ct.placeholder": "Placeholder",
      "ct.reserveEye": "Book a table",
      "ct.reserveTitle": "Table for tonight?",
      "ct.whatsapp": "Book via WhatsApp",
      "ct.call": "Call us",

      "footer.desc": "Café, almuerzos and tapas in Paterna. Spanish & Romanian cooking served calmly from morning to night.",
      "footer.visit": "Visit",
      "footer.contact": "Contact",
      "footer.lang": "Language",
      "footer.rights": "All rights reserved.",
      "footer.built": "Static site · HTML, CSS & JS. Sample imagery shown as placeholders.",

      "gallery.eyebrow": "From the kitchen",
      "gallery.title": "Photos",
      "gallery.lede": "Pictures from our menu. Tap any one to view it larger.",
      "gallery.note": "Reference images. Plating may vary depending on availability.",
      "brand.alt": "De Norte a Sur logo",

      "chip.photo": "Photo",
      "chip.menu":  "Menu",
      "chip.warm":  "Visit",

      "gal.cerv.name": "Estrella Galicia",
      "gal.cerv.sub":  "Drinks",
      "gal.cerv.alt":  "Bottle of Estrella Galicia beer",
      "gal.mahou.name": "Mahou",
      "gal.mahou.sub":  "Drinks",
      "gal.mahou.alt":  "Bottle of Mahou Cinco Estrellas beer",
      "gal.aguila.name": "El Águila",
      "gal.aguila.sub":  "Drinks",
      "gal.aguila.alt":  "Can of El Águila Dorada beer",
      "gal.boc.name": "Calamari sandwich",
      "gal.boc.sub":  "Almuerzo special",
      "gal.boc.alt":  "Fried calamari sandwich on rustic bread",
      "gal.brav.name": "Patatas bravas",
      "gal.brav.sub":  "Classic tapa",
      "gal.brav.alt":  "Plate of patatas bravas with spicy sauce",
      "gal.mici1.name": "Mici with mustard",
      "gal.mici1.sub":  "Romanian kitchen",
      "gal.mici1.alt":  "Grilled Romanian mici dipped in mustard",
      "gal.calam.name": "Fried calamari",
      "gal.calam.sub":  "Classic tapa",
      "gal.calam.alt":  "Fried squid rings with lemon",
      "gal.mici2.name": "Mici with fries",
      "gal.mici2.sub":  "Romanian plate",
      "gal.mici2.alt":  "Plate of mici with French fries and dipping sauce",
      "gal.maxi.name": "Maxi Burger",
      "gal.maxi.sub":  "Burgers",
      "gal.maxi.alt":  "Loaded burger with bacon, egg and cheese",
      "gal.tost.name": "Ham toast",
      "gal.tost.sub":  "Breakfast",
      "gal.tost.alt":  "Toasted bread topped with cured Spanish ham",
      "gal.cafe.name": "Coffee",
      "gal.cafe.sub":  "All coffees €1.20",
      "gal.cafe.alt":  "Cup of cappuccino with leaf latte art"
    }
  };

  // ───── Language switching ─────
  const STORAGE_KEY = "dns_lang";
  const defaultLang = "es";

  function applyLang(lang) {
    if (!i18n[lang]) lang = defaultLang;
    const dict = i18n[lang];

    document.documentElement.lang = lang;
    document.title = dict["meta.title"];

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) {
        // Allow simple <em> in copy
        if (/<\/?[a-z][\s\S]*>/i.test(dict[key])) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Translate alt text
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll(".lang-btn").forEach((b) => {
      const active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLang(stored || defaultLang);

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.addEventListener("click", () => applyLang(b.getAttribute("data-lang")));
    });
  }

  // ───── Sticky header scroll state ─────
  function initHeaderScroll() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ───── Mobile nav ─────
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".primary-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ───── Menu tabs ─────
  function initMenuTabs() {
    const tabs = document.querySelectorAll(".mt-btn");
    if (!tabs.length) return;
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-target");
        tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        document.querySelectorAll(".menu-cat").forEach((cat) => {
          cat.hidden = cat.id !== target;
        });
        // Smooth-scroll into view if user scrolled past the tabs
        const tabsEl = document.getElementById("menuTabs");
        if (tabsEl) {
          const rect = tabsEl.getBoundingClientRect();
          if (rect.top < 0) {
            window.scrollTo({ top: window.scrollY + rect.top - 90, behavior: "smooth" });
          }
        }
      });
    });
  }

  // ───── Today's hours highlight ─────
  function highlightToday() {
    const rows = document.querySelectorAll(".hours-table tbody tr");
    if (!rows.length) return;
    // JS getDay: 0 Sun → 6 Sat. Table order: Mon..Sun (index 0..6).
    const jsDay = new Date().getDay();
    const idx = jsDay === 0 ? 6 : jsDay - 1;
    rows.forEach((r, i) => r.classList.toggle("is-today", i === idx));
  }

  // ───── Year in footer ─────
  function setYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  // ───── Gallery lightbox ─────
  function initLightbox() {
    const items = [...document.querySelectorAll(".g-item")];
    const lb = document.getElementById("lightbox");
    if (!items.length || !lb) return;
    const imgEl = lb.querySelector(".lb-img");
    const capEl = lb.querySelector(".lb-cap");
    const closeBtn = lb.querySelector(".lb-close");
    const prevBtn = lb.querySelector(".lb-prev");
    const nextBtn = lb.querySelector(".lb-next");
    let idx = 0;

    function open(i) {
      idx = (i + items.length) % items.length;
      const fig = items[idx].querySelector("img");
      const nameEl = items[idx].querySelector(".g-name");
      imgEl.src = fig.src;
      imgEl.alt = fig.alt || "";
      capEl.textContent = nameEl ? nameEl.textContent : "";
      lb.hidden = false;
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lb.hidden = true;
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    function navigate(delta) { open(idx + delta); }

    items.forEach((it, i) => {
      it.addEventListener("click", () => open(i));
      it.tabIndex = 0;
      it.setAttribute("role", "button");
      it.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); }
      });
    });
    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", () => navigate(-1));
    nextBtn.addEventListener("click", () => navigate(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") navigate(-1);
      else if (e.key === "ArrowRight") navigate(1);
    });
  }

  // ───── Boot ─────
  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initHeaderScroll();
    initMobileNav();
    initMenuTabs();
    initLightbox();
    highlightToday();
    setYear();
  });
})();
