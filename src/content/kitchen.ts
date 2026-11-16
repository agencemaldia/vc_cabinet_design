import type { Locale } from "@/lib/i18n/config";
import type { ServiceCopy } from "./service-types";

/**
 * "Kitchen renovation" page (specification §3). Facts come from what the client already states (free
 * in-home consultation, 2D/3D design, written quote, permits, European / Canadian / American cabinetry,
 * countertops supplied, plumbing and tile coordinated with licensed trades…). Nothing here invents a
 * project, a certification or a service.
 */
export const KITCHEN: Record<Locale, ServiceCopy> = {
  fr: {
    meta: {
      title: "Rénovation de cuisine à Tampa Bay",
      description:
        "Rénovation complète de cuisine à Tampa, Clearwater, St. Petersburg et Bradenton : armoires sur mesure, îlots, comptoirs, design 3D et soumission écrite. Consultation gratuite à domicile.",
    },
    hero: {
      eyebrow: "Rénovation de cuisines",
      title: "Rénovation de cuisine",
      titleEm: "sur mesure à Tampa Bay.",
      text: "Armoires, îlots, garde-manger et comptoirs conçus autour de votre façon de cuisiner, de recevoir et de vivre — dessinés en 3D, fabriqués selon vos mesures et installés par notre équipe.",
      cta: "Demander une soumission",
      secondary: "Voir nos réalisations",
      alt: "Cuisine rénovée avec îlot en quartz et armoires sur mesure",
    },
    intro: {
      title: "Une cuisine pensée pour votre quotidien.",
      paragraphs: [
        "La cuisine est la pièce la plus utilisée d’une maison, et souvent la plus complexe à rénover : rangement, circulation, électroménagers, éclairage et finitions doivent fonctionner ensemble. Une rénovation de cuisine réussie commence donc par une bonne compréhension de vos habitudes, et non par un catalogue.",
        "Chez V&C Cabinet Design Concept, un designer vous accompagne de la première visite à l’inspection finale. Nous concevons chaque armoire pour votre espace, nous vous montrons le résultat en 3D avant la fabrication et nous coordonnons l’ensemble des travaux, pour que vous n’ayez qu’un seul interlocuteur.",
        "Que vous souhaitiez rafraîchir les armoires, ajouter un îlot ou faire une rénovation complète de cuisine avec une nouvelle disposition, nous adaptons le projet à vos objectifs et à votre budget.",
      ],
      highlights: [
        "Consultation et mesures gratuites à domicile",
        "Design 2D/3D révisé avec vous en temps réel",
        "Soumission écrite et détaillée, sans frais cachés",
        "Une seule équipe, de la conception à l’inspection finale",
      ],
    },
    sections: [
      {
        id: "travaux",
        nav: "Types de travaux",
        title: "Les travaux de rénovation de cuisine que nous réalisons.",
        intro:
          "Chaque cuisine est différente. Voici les interventions les plus courantes ; votre designer vous aide à choisir celles qui répondent vraiment à vos besoins.",
        layout: "grid",
        items: [
          {
            title: "Rénovation complète de cuisine",
            text: "Nouvelle disposition, nouvelles armoires, nouveaux comptoirs et nouvel éclairage : nous repensons la pièce de A à Z, en conservant ou en déplaçant la plomberie et les électroménagers selon vos objectifs.",
          },
          {
            title: "Armoires sur mesure",
            text: "Des armoires fabriquées selon vos mesures exactes, en style européen, canadien ou américain, avec des intérieurs organisés pour ce que vous rangez réellement.",
          },
          {
            title: "Îlots et péninsules",
            text: "Un îlot ajoute du plan de travail, des places assises et du rangement. Nous vérifions en 3D qu’il laisse assez d’espace pour circuler autour.",
          },
          {
            title: "Garde-manger et rangement",
            text: "Garde-manger, colonnes, tiroirs coulissants et plateaux tournants transforment les coins perdus en rangement accessible.",
          },
          {
            title: "Comptoirs",
            text: "Nous fournissons et installons des comptoirs en quartz, en granit ou en marbre, taillés sur mesure pour vos armoires et votre évier.",
          },
          {
            title: "Éclairage et finitions",
            text: "Éclairage sous les armoires, poignées, quincaillerie à fermeture en douceur et accessoires : les détails qui rendent une cuisine agréable tous les jours.",
          },
        ],
      },
      {
        id: "methode",
        nav: "Notre méthode",
        title: "Notre méthode pour rénover une cuisine.",
        intro:
          "Une rénovation de cuisine mobilise plusieurs corps de métier. Notre méthode vise une chose : que vous sachiez toujours ce qui se passe et ce qui vient ensuite.",
        layout: "list",
        items: [
          {
            title: "Écouter avant de dessiner",
            text: "Le designer observe comment vous utilisez la cuisine : nombre de personnes, habitudes de cuisine, électroménagers, besoins de rangement et budget visé.",
          },
          {
            title: "Mesurer précisément",
            text: "Les mesures prises sur place permettent de fabriquer des armoires qui s’ajustent au pouce près, même dans une maison dont les murs ne sont pas parfaitement droits.",
          },
          {
            title: "Valider en 3D",
            text: "Vous voyez votre future cuisine en 2D et en 3D et pouvez demander des retouches en temps réel : disposition, matériaux, couleurs et éclairage.",
          },
          {
            title: "Coordonner les métiers",
            text: "Nous coordonnons la plomberie, l’électricité et la céramique avec des corps de métier certifiés, et nous obtenons les permis lorsque le projet l’exige.",
          },
          {
            title: "Installer et protéger",
            text: "Notre équipe livre et installe les armoires, retire les débris et garde votre maison propre et sécuritaire pendant les travaux.",
          },
        ],
      },
      {
        id: "materiaux",
        nav: "Matériaux et finitions",
        title: "Matériaux, techniques et finitions.",
        intro:
          "Les matériaux déterminent l’allure de la cuisine, mais aussi sa durabilité et son entretien. Votre designer vous présente les options et vous aide à les combiner.",
        layout: "grid",
        items: [
          {
            title: "Styles d’armoires",
            text: "Européen (épuré, sans poignées), canadien (bois massif, chaleureux) ou américain (profils shaker et classiques), en gamme moyenne à haut de gamme.",
          },
          {
            title: "Finitions des façades",
            text: "Laque, placage de bois, peinture ou mélamine : chaque finition a son rendu et son entretien. Nous vous montrons des échantillons avant de choisir.",
          },
          {
            title: "Comptoirs",
            text: "Le quartz est peu poreux et facile d’entretien ; le granit et le marbre offrent des veines naturelles uniques. Les gabarits sont pris sur place pour un ajustement exact.",
          },
          {
            title: "Quincaillerie",
            text: "Charnières et glissières à fermeture en douceur, tiroirs à extension complète, tablettes coulissantes et poignées en laiton ou noires.",
          },
          {
            title: "Éclairage",
            text: "L’éclairage sous les armoires éclaire le plan de travail ; l’éclairage d’accent met en valeur les vitrines et les tablettes ouvertes.",
          },
          {
            title: "Électroménagers",
            text: "Nous concevons les armoires autour de vos électroménagers, existants ou nouveaux, et coordonnons leur intégration.",
          },
        ],
      },
      {
        id: "amenagement",
        nav: "Aménagement",
        title: "Possibilités d’aménagement de cuisine.",
        intro:
          "La disposition détermine le confort d’une cuisine. Le bon aménagement dépend de la forme de la pièce, des ouvertures et de votre façon de cuisiner.",
        layout: "grid",
        items: [
          {
            title: "Cuisine en L",
            text: "Deux murs perpendiculaires laissent un espace ouvert ; idéale pour ajouter un îlot ou une table.",
          },
          {
            title: "Cuisine en U",
            text: "Trois murs d’armoires offrent beaucoup de rangement et de plan de travail, avec un triangle de travail compact.",
          },
          {
            title: "Cuisine en corridor",
            text: "Deux rangées parallèles, efficaces dans les espaces étroits ; nous optimisons chaque pouce en hauteur.",
          },
          {
            title: "Cuisine avec îlot",
            text: "L’îlot devient le centre de la pièce : préparation, rangement et coin repas. Il demande un dégagement suffisant tout autour.",
          },
          {
            title: "Cuisine ouverte",
            text: "Ouverte sur le séjour, elle demande des finitions qui s’accordent avec le reste de la maison et un rangement bien caché.",
          },
          {
            title: "Petite cuisine",
            text: "Rangement vertical, électroménagers compacts et couleurs claires permettent de gagner en espace sans agrandir la pièce.",
          },
        ],
      },
      {
        id: "conseils",
        nav: "Conseils",
        title: "Conseils pratiques avant de rénover votre cuisine.",
        intro:
          "Quelques questions à se poser avant de commencer — elles rendent la consultation plus efficace et le projet plus clair.",
        layout: "list",
        items: [
          {
            title: "Listez ce qui ne fonctionne pas",
            text: "Manque de rangement, comptoir trop petit, mauvaise lumière, circulation difficile : partir des problèmes concrets guide les bons choix.",
          },
          {
            title: "Définissez un budget et des priorités",
            text: "Décidez ce qui compte le plus — armoires, comptoirs, électroménagers — pour orienter les matériaux et la portée des travaux.",
          },
          {
            title: "Pensez à votre façon de cuisiner",
            text: "Un cuisinier quotidien n’a pas les mêmes besoins qu’une famille qui reçoit souvent : le design doit refléter votre réalité.",
          },
          {
            title: "Gardez ou changez la disposition ?",
            text: "Conserver l’emplacement de la plomberie et des électroménagers limite les travaux ; le déplacer ouvre plus de possibilités. Nous vous aidons à comparer.",
          },
          {
            title: "Prévoyez la période des travaux",
            text: "Votre designer vous remet un échéancier écrit avant le début des travaux pour que vous puissiez vous organiser.",
          },
        ],
      },
      {
        id: "deroulement",
        nav: "Déroulement",
        title: "Le déroulement d’une rénovation de cuisine.",
        intro:
          "Du premier appel à la remise des clés de votre nouvelle cuisine, voici les grandes étapes du processus de rénovation.",
        layout: "steps",
        items: [
          {
            title: "Consultation gratuite à domicile",
            text: "Visite d’un designer, écoute de vos besoins et prise de mesures.",
          },
          { title: "Design et soumission", text: "Design 2D/3D, choix des matériaux et soumission écrite détaillée." },
          {
            title: "Contrat et préparation",
            text: "Contrat précisant matériaux, portée et échéancier ; permis au besoin ; commande des armoires.",
          },
          {
            title: "Travaux et installation",
            text: "Démolition au besoin, coordination des métiers, installation des armoires et des comptoirs.",
          },
          {
            title: "Finitions et inspection finale",
            text: "Derniers ajustements, nettoyage et inspection finale avec vous.",
          },
        ],
      },
    ],
    projects: {
      nav: "Réalisations",
      title: "Nos réalisations de cuisines.",
      intro:
        "Chaque projet est présenté avec son contexte, les besoins du client, les travaux réalisés et le résultat. Faites glisser la poignée sur la photo pour comparer avant et après.",
    },
    faq: {
      nav: "FAQ",
      title: "Questions fréquentes sur la rénovation de cuisine.",
      items: [
        {
          q: "Combien coûte une rénovation de cuisine ?",
          a: "Le prix dépend de la taille de la cuisine, de la disposition, des matériaux et des finitions choisis. Après la consultation gratuite, vous recevez une soumission écrite et détaillée, sans frais cachés.",
        },
        {
          q: "Combien de temps dure une rénovation de cuisine ?",
          a: "Cela dépend des délais de fabrication des armoires et de la portée des travaux. Vous recevez un échéancier écrit avant le début des travaux, et nous vous tenons informé jusqu’à l’inspection finale.",
        },
        {
          q: "Pouvez-vous conserver ma disposition actuelle ?",
          a: "Oui. Nous pouvons garder l’emplacement de la plomberie et des électroménagers ou repenser toute la disposition, selon vos objectifs et votre budget.",
        },
        {
          q: "Fournissez-vous les comptoirs et les électroménagers ?",
          a: "Nous fournissons et installons les comptoirs et nous coordonnons vos électroménagers, pour que la cuisine soit livrée complète et prête à utiliser.",
        },
        {
          q: "Puis-je ajouter un îlot ?",
          a: "Oui, si l’espace le permet. Votre design 3D montre exactement comment l’îlot s’intègre et l’espace qui reste pour circuler.",
        },
        {
          q: "Quels styles d’armoires proposez-vous ?",
          a: "Des armoires de style européen, canadien et américain, de moyen à haut de gamme, avec des finitions en laque, placage, peinture ou mélamine.",
        },
      ],
    },
    areas: {
      nav: "Secteurs",
      title: "Rénovation de cuisine à Tampa, Clearwater, St. Petersburg et Bradenton.",
      text: "Nous rénovons des cuisines à Tampa, Clearwater, St. Petersburg, Bradenton et dans les communautés voisines de Tampa Bay. Notre salle d’exposition se trouve au 19046 Bruce B Downs Blvd, Ste B6, à Tampa : vous pouvez y voir des échantillons d’armoires, de finitions et de comptoirs sur rendez-vous.",
    },
    related: {
      title: "À voir aussi",
      otherService: "Rénovation de salles de bain",
      otherServiceText: "Meubles-lavabos, douches et baignoires pensés pour l’humidité de la Floride.",
      blog: "Nos conseils de rénovation",
      blogText: "Aménagement, matériaux et astuces pour préparer votre projet.",
    },
    cta: {
      title: "Parlons de votre nouvelle cuisine.",
      text: "Six questions rapides, et un designer vous rappelle sous 24 heures ouvrables pour planifier une visite gratuite à domicile.",
      button: "Demander une soumission",
    },
    schema: {
      serviceType: "Rénovation de cuisine",
      description:
        "Conception et rénovation de cuisines sur mesure : armoires, îlots, garde-manger, comptoirs et éclairage, du design 3D à l’installation.",
    },
  },
  en: {
    meta: {
      title: "Kitchen Renovation in Tampa Bay",
      description:
        "Full kitchen renovation in Tampa, Clearwater, St. Petersburg and Bradenton: custom cabinets, islands, countertops, 3D design and a written quote. Free in-home consultation.",
    },
    hero: {
      eyebrow: "Kitchen renovation",
      title: "Custom kitchen renovation",
      titleEm: "in Tampa Bay.",
      text: "Cabinets, islands, pantries and countertops designed around the way you cook, gather and live — drawn in 3D, built to your measurements and installed by our team.",
      cta: "Request a quote",
      secondary: "See our projects",
      alt: "Renovated kitchen with a quartz island and custom cabinets",
    },
    intro: {
      title: "A kitchen designed for your everyday life.",
      paragraphs: [
        "The kitchen is the most used room in a home, and often the most complex to renovate: storage, circulation, appliances, lighting and finishes all have to work together. A successful kitchen renovation starts with understanding your habits, not with a catalog.",
        "At V&C Cabinet Design Concept, a designer guides you from the first visit to the final inspection. We design every cabinet for your space, show you the result in 3D before production and coordinate all the work, so you deal with a single point of contact.",
        "Whether you want to refresh your cabinets, add an island or carry out a full kitchen renovation with a new layout, we adapt the project to your goals and your budget.",
      ],
      highlights: [
        "Free in-home consultation and measurement",
        "2D/3D design reviewed with you in real time",
        "Clear, written and itemized quote with no hidden costs",
        "One team, from design to final inspection",
      ],
    },
    sections: [
      {
        id: "work",
        nav: "Types of work",
        title: "The kitchen renovation work we do.",
        intro:
          "Every kitchen is different. Here are the most common projects; your designer helps you choose the ones that truly meet your needs.",
        layout: "grid",
        items: [
          {
            title: "Full kitchen renovation",
            text: "New layout, new cabinets, new countertops and new lighting: we rethink the room from A to Z, keeping or moving the plumbing and appliances to match your goals.",
          },
          {
            title: "Custom cabinets",
            text: "Cabinets built to your exact measurements, in European, Canadian or American styles, with interiors organized for what you actually store.",
          },
          {
            title: "Islands and peninsulas",
            text: "An island adds counter space, seating and storage. We check in 3D that it leaves enough room to move around it.",
          },
          {
            title: "Pantries and storage",
            text: "Pantries, tall cabinets, pull-out drawers and lazy Susans turn wasted corners into accessible storage.",
          },
          {
            title: "Countertops",
            text: "We supply and install quartz, granite or marble countertops, cut to fit your cabinets and sink.",
          },
          {
            title: "Lighting and finishing touches",
            text: "Under-cabinet lighting, pulls, soft-close hardware and accessories: the details that make a kitchen pleasant every day.",
          },
        ],
      },
      {
        id: "method",
        nav: "Our method",
        title: "How we renovate a kitchen.",
        intro:
          "A kitchen renovation involves several trades. Our method aims at one thing: that you always know what is happening and what comes next.",
        layout: "list",
        items: [
          {
            title: "Listen before drawing",
            text: "The designer looks at how you use the kitchen: number of people, cooking habits, appliances, storage needs and target budget.",
          },
          {
            title: "Measure precisely",
            text: "On-site measurements let us build cabinets that fit to the inch, even in a home whose walls are not perfectly straight.",
          },
          {
            title: "Approve in 3D",
            text: "You see your future kitchen in 2D and 3D and can request edits in real time: layout, materials, colors and lighting.",
          },
          {
            title: "Coordinate the trades",
            text: "We coordinate plumbing, electrical and tile work with licensed trades and obtain permits when the project requires them.",
          },
          {
            title: "Install and protect",
            text: "Our team delivers and installs the cabinets, removes debris and keeps your home clean and safe during the work.",
          },
        ],
      },
      {
        id: "materials",
        nav: "Materials and finishes",
        title: "Materials, techniques and finishes.",
        intro:
          "Materials shape how the kitchen looks, but also how long it lasts and how easy it is to maintain. Your designer presents the options and helps you combine them.",
        layout: "grid",
        items: [
          {
            title: "Cabinet styles",
            text: "European (sleek, handle-less), Canadian (solid wood, warm) or American (Shaker and classic profiles), in medium-to-high-end ranges.",
          },
          {
            title: "Door finishes",
            text: "Lacquer, wood veneer, paint or melamine: each finish has its own look and care. We show you samples before you choose.",
          },
          {
            title: "Countertops",
            text: "Quartz is low-porosity and easy to maintain; granite and marble offer unique natural veining. Templates are taken on site for an exact fit.",
          },
          {
            title: "Hardware",
            text: "Soft-close hinges and slides, full-extension drawers, pull-out shelves and brass or black pulls.",
          },
          {
            title: "Lighting",
            text: "Under-cabinet lighting brightens the work surface; accent lighting highlights glass cabinets and open shelves.",
          },
          {
            title: "Appliances",
            text: "We design the cabinets around your appliances, existing or new, and coordinate their integration.",
          },
        ],
      },
      {
        id: "layouts",
        nav: "Layouts",
        title: "Kitchen layout options.",
        intro:
          "The layout determines how comfortable a kitchen is. The right one depends on the shape of the room, the openings and the way you cook.",
        layout: "grid",
        items: [
          {
            title: "L-shaped kitchen",
            text: "Two perpendicular walls leave an open area; ideal for adding an island or a table.",
          },
          {
            title: "U-shaped kitchen",
            text: "Three walls of cabinets offer plenty of storage and counter space, with a compact work triangle.",
          },
          {
            title: "Galley kitchen",
            text: "Two parallel runs, efficient in narrow spaces; we make the most of every inch of height.",
          },
          {
            title: "Kitchen with an island",
            text: "The island becomes the center of the room: prep, storage and dining. It needs enough clearance all around.",
          },
          {
            title: "Open-plan kitchen",
            text: "Open to the living area, it calls for finishes that match the rest of the home and well-hidden storage.",
          },
          {
            title: "Small kitchen",
            text: "Vertical storage, compact appliances and light colors make room without making the room bigger.",
          },
        ],
      },
      {
        id: "tips",
        nav: "Tips",
        title: "Practical tips before renovating your kitchen.",
        intro:
          "A few questions to ask yourself before starting — they make the consultation more productive and the project clearer.",
        layout: "list",
        items: [
          {
            title: "List what doesn’t work",
            text: "Lack of storage, too little counter space, poor light, awkward circulation: starting from concrete problems leads to the right choices.",
          },
          {
            title: "Set a budget and priorities",
            text: "Decide what matters most — cabinets, countertops, appliances — to guide the materials and the scope of work.",
          },
          {
            title: "Think about how you cook",
            text: "A daily cook doesn’t have the same needs as a family that entertains often: the design should reflect your reality.",
          },
          {
            title: "Keep or change the layout?",
            text: "Keeping the plumbing and appliance locations limits the work; moving them opens more possibilities. We help you compare.",
          },
          {
            title: "Plan for the work period",
            text: "Your designer gives you a written schedule before work begins so you can get organized.",
          },
        ],
      },
      {
        id: "process",
        nav: "Process",
        title: "How a kitchen renovation unfolds.",
        intro:
          "From the first call to the handover of your new kitchen, here are the main steps of the renovation process.",
        layout: "steps",
        items: [
          {
            title: "Free in-home consultation",
            text: "A designer visits, listens to your needs and takes measurements.",
          },
          { title: "Design and quote", text: "2D/3D design, choice of materials and a detailed written quote." },
          {
            title: "Contract and preparation",
            text: "A contract setting out materials, scope and schedule; permits when needed; cabinets ordered.",
          },
          {
            title: "Work and installation",
            text: "Demolition if needed, coordination of trades, installation of cabinets and countertops.",
          },
          {
            title: "Finishing and final inspection",
            text: "Final adjustments, cleaning and a final inspection with you.",
          },
        ],
      },
    ],
    projects: {
      nav: "Projects",
      title: "Our kitchen projects.",
      intro:
        "Each project is presented with its context, the client’s needs, the work carried out and the result. Drag the handle across the photo to compare before and after.",
    },
    faq: {
      nav: "FAQ",
      title: "Kitchen renovation FAQ.",
      items: [
        {
          q: "How much does a kitchen renovation cost?",
          a: "It depends on the size of the kitchen, the layout and the materials and finishes you choose. After the free consultation, you receive a written, itemized quote with no hidden costs.",
        },
        {
          q: "How long does a kitchen renovation take?",
          a: "It depends on cabinet lead times and the scope of work. You receive a written schedule before work begins, and we keep you updated until the final inspection.",
        },
        {
          q: "Can you keep my existing layout?",
          a: "Yes. We can keep your plumbing and appliance locations or redesign the whole layout, depending on your goals and budget.",
        },
        {
          q: "Do you supply countertops and appliances?",
          a: "We supply and install countertops and coordinate your appliances, so your kitchen is delivered complete and ready to use.",
        },
        {
          q: "Can I add an island?",
          a: "Yes, if the space allows. Your 3D design shows exactly how the island fits and how much room is left to move around.",
        },
        {
          q: "Which cabinet styles do you offer?",
          a: "European, Canadian and American cabinetry, from medium to high end, with lacquer, veneer, painted or melamine finishes.",
        },
      ],
    },
    areas: {
      nav: "Areas",
      title: "Kitchen renovation in Tampa, Clearwater, St. Petersburg and Bradenton.",
      text: "We renovate kitchens in Tampa, Clearwater, St. Petersburg, Bradenton and the surrounding Tampa Bay communities. Our showroom is at 19046 Bruce B Downs Blvd, Ste B6, Tampa: you can see cabinet, finish and countertop samples there by appointment.",
    },
    related: {
      title: "See also",
      otherService: "Bathroom renovation",
      otherServiceText: "Vanities, showers and bathtubs designed for Florida humidity.",
      blog: "Our renovation tips",
      blogText: "Layouts, materials and ideas to prepare your project.",
    },
    cta: {
      title: "Let’s talk about your new kitchen.",
      text: "Six quick questions, and a designer calls you back within 24 business hours to plan a free in-home visit.",
      button: "Request a quote",
    },
    schema: {
      serviceType: "Kitchen renovation",
      description:
        "Custom kitchen design and renovation: cabinets, islands, pantries, countertops and lighting, from 3D design to installation.",
    },
  },
  es: {
    meta: {
      title: "Remodelación de cocinas en Tampa Bay",
      description:
        "Remodelación completa de cocinas en Tampa, Clearwater, St. Petersburg y Bradenton: gabinetes a medida, islas, encimeras, diseño 3D y cotización por escrito. Consulta gratuita a domicilio.",
    },
    hero: {
      eyebrow: "Remodelación de cocinas",
      title: "Remodelación de cocinas",
      titleEm: "a medida en Tampa Bay.",
      text: "Gabinetes, islas, despensas y encimeras diseñados según tu forma de cocinar, reunirte y vivir — dibujados en 3D, fabricados a tus medidas e instalados por nuestro equipo.",
      cta: "Solicitar una cotización",
      secondary: "Ver nuestros proyectos",
      alt: "Cocina remodelada con isla de cuarzo y gabinetes a medida",
    },
    intro: {
      title: "Una cocina pensada para tu día a día.",
      paragraphs: [
        "La cocina es el espacio más usado de una casa y, a menudo, el más complejo de remodelar: almacenamiento, circulación, electrodomésticos, iluminación y acabados deben funcionar juntos. Una buena remodelación de cocina empieza por entender tus hábitos, no por un catálogo.",
        "En V&C Cabinet Design Concept, un diseñador te acompaña desde la primera visita hasta la inspección final. Diseñamos cada gabinete para tu espacio, te mostramos el resultado en 3D antes de fabricarlo y coordinamos todos los trabajos, para que tengas un solo contacto.",
        "Ya sea que quieras renovar los gabinetes, agregar una isla o hacer una remodelación completa de cocina con una nueva distribución, adaptamos el proyecto a tus objetivos y a tu presupuesto.",
      ],
      highlights: [
        "Consulta y medición gratuitas a domicilio",
        "Diseño 2D/3D revisado contigo en tiempo real",
        "Cotización clara, por escrito y detallada, sin costos ocultos",
        "Un solo equipo, del diseño a la inspección final",
      ],
    },
    sections: [
      {
        id: "trabajos",
        nav: "Tipos de trabajos",
        title: "Los trabajos de remodelación de cocina que realizamos.",
        intro:
          "Cada cocina es diferente. Estos son los proyectos más comunes; tu diseñador te ayuda a elegir los que realmente responden a tus necesidades.",
        layout: "grid",
        items: [
          {
            title: "Remodelación completa de cocina",
            text: "Nueva distribución, nuevos gabinetes, nuevas encimeras y nueva iluminación: repensamos el espacio de principio a fin, conservando o moviendo la plomería y los electrodomésticos según tus objetivos.",
          },
          {
            title: "Gabinetes a medida",
            text: "Gabinetes fabricados a tus medidas exactas, en estilo europeo, canadiense o americano, con interiores organizados para lo que realmente guardas.",
          },
          {
            title: "Islas y penínsulas",
            text: "Una isla agrega superficie de trabajo, asientos y almacenamiento. Verificamos en 3D que deje espacio suficiente para circular.",
          },
          {
            title: "Despensas y almacenamiento",
            text: "Despensas, gabinetes altos, cajones extraíbles y carruseles convierten las esquinas perdidas en almacenamiento accesible.",
          },
          {
            title: "Encimeras",
            text: "Suministramos e instalamos encimeras de cuarzo, granito o mármol, cortadas a la medida de tus gabinetes y tu fregadero.",
          },
          {
            title: "Iluminación y acabados",
            text: "Iluminación bajo los gabinetes, tiradores, herrajes de cierre suave y accesorios: los detalles que hacen agradable una cocina todos los días.",
          },
        ],
      },
      {
        id: "metodo",
        nav: "Nuestro método",
        title: "Cómo remodelamos una cocina.",
        intro:
          "Una remodelación de cocina involucra varios oficios. Nuestro método busca una cosa: que siempre sepas qué está pasando y qué sigue.",
        layout: "list",
        items: [
          {
            title: "Escuchar antes de dibujar",
            text: "El diseñador observa cómo usas la cocina: número de personas, hábitos de cocina, electrodomésticos, necesidades de almacenamiento y presupuesto.",
          },
          {
            title: "Medir con precisión",
            text: "Las medidas tomadas en sitio permiten fabricar gabinetes que encajan al milímetro, incluso en una casa con paredes no perfectamente rectas.",
          },
          {
            title: "Aprobar en 3D",
            text: "Ves tu futura cocina en 2D y 3D y puedes pedir ajustes en tiempo real: distribución, materiales, colores e iluminación.",
          },
          {
            title: "Coordinar los oficios",
            text: "Coordinamos la plomería, la electricidad y los azulejos con profesionales con licencia, y tramitamos los permisos cuando el proyecto lo requiere.",
          },
          {
            title: "Instalar y proteger",
            text: "Nuestro equipo entrega e instala los gabinetes, retira los escombros y mantiene tu casa limpia y segura durante los trabajos.",
          },
        ],
      },
      {
        id: "materiales",
        nav: "Materiales y acabados",
        title: "Materiales, técnicas y acabados.",
        intro:
          "Los materiales definen el aspecto de la cocina, pero también su durabilidad y su mantenimiento. Tu diseñador te presenta las opciones y te ayuda a combinarlas.",
        layout: "grid",
        items: [
          {
            title: "Estilos de gabinetes",
            text: "Europeo (líneas limpias, sin tiradores), canadiense (madera maciza, cálido) o americano (perfiles shaker y clásicos), de gama media a alta.",
          },
          {
            title: "Acabados de las puertas",
            text: "Laca, chapa de madera, pintura o melamina: cada acabado tiene su aspecto y su mantenimiento. Te mostramos muestras antes de elegir.",
          },
          {
            title: "Encimeras",
            text: "El cuarzo es poco poroso y fácil de mantener; el granito y el mármol ofrecen vetas naturales únicas. Las plantillas se toman en sitio para un ajuste exacto.",
          },
          {
            title: "Herrajes",
            text: "Bisagras y correderas de cierre suave, cajones de extensión completa, repisas extraíbles y tiradores de latón o negros.",
          },
          {
            title: "Iluminación",
            text: "La iluminación bajo los gabinetes ilumina la superficie de trabajo; la iluminación de acento resalta vitrinas y repisas abiertas.",
          },
          {
            title: "Electrodomésticos",
            text: "Diseñamos los gabinetes en torno a tus electrodomésticos, actuales o nuevos, y coordinamos su integración.",
          },
        ],
      },
      {
        id: "distribucion",
        nav: "Distribución",
        title: "Opciones de distribución de cocina.",
        intro:
          "La distribución determina la comodidad de una cocina. La adecuada depende de la forma del espacio, las aberturas y tu forma de cocinar.",
        layout: "grid",
        items: [
          {
            title: "Cocina en L",
            text: "Dos paredes perpendiculares dejan un área abierta; ideal para agregar una isla o una mesa.",
          },
          {
            title: "Cocina en U",
            text: "Tres paredes de gabinetes ofrecen mucho almacenamiento y superficie de trabajo, con un triángulo de trabajo compacto.",
          },
          {
            title: "Cocina de pasillo",
            text: "Dos líneas paralelas, eficientes en espacios angostos; aprovechamos cada centímetro de altura.",
          },
          {
            title: "Cocina con isla",
            text: "La isla se vuelve el centro del espacio: preparación, almacenamiento y comedor. Necesita suficiente espacio alrededor.",
          },
          {
            title: "Cocina abierta",
            text: "Abierta a la sala, requiere acabados que combinen con el resto de la casa y un almacenamiento bien escondido.",
          },
          {
            title: "Cocina pequeña",
            text: "Almacenamiento vertical, electrodomésticos compactos y colores claros ganan espacio sin agrandar la cocina.",
          },
        ],
      },
      {
        id: "consejos",
        nav: "Consejos",
        title: "Consejos prácticos antes de remodelar tu cocina.",
        intro:
          "Algunas preguntas que conviene hacerse antes de empezar — hacen la consulta más productiva y el proyecto más claro.",
        layout: "list",
        items: [
          {
            title: "Haz una lista de lo que no funciona",
            text: "Falta de almacenamiento, poca superficie, mala luz, circulación incómoda: partir de problemas concretos lleva a las decisiones correctas.",
          },
          {
            title: "Define un presupuesto y prioridades",
            text: "Decide qué es lo más importante — gabinetes, encimeras, electrodomésticos — para orientar los materiales y el alcance del trabajo.",
          },
          {
            title: "Piensa en cómo cocinas",
            text: "Quien cocina a diario no tiene las mismas necesidades que una familia que recibe visitas a menudo: el diseño debe reflejar tu realidad.",
          },
          {
            title: "¿Conservar o cambiar la distribución?",
            text: "Conservar la ubicación de la plomería y los electrodomésticos limita los trabajos; moverla abre más posibilidades. Te ayudamos a comparar.",
          },
          {
            title: "Planea el periodo de obra",
            text: "Tu diseñador te entrega un cronograma por escrito antes de empezar para que puedas organizarte.",
          },
        ],
      },
      {
        id: "proceso",
        nav: "Proceso",
        title: "Cómo se desarrolla una remodelación de cocina.",
        intro:
          "Desde la primera llamada hasta la entrega de tu nueva cocina, estas son las grandes etapas del proceso.",
        layout: "steps",
        items: [
          {
            title: "Consulta gratuita a domicilio",
            text: "Visita de un diseñador, escucha de tus necesidades y toma de medidas.",
          },
          {
            title: "Diseño y cotización",
            text: "Diseño 2D/3D, elección de materiales y cotización detallada por escrito.",
          },
          {
            title: "Contrato y preparación",
            text: "Contrato con materiales, alcance y cronograma; permisos si es necesario; pedido de gabinetes.",
          },
          {
            title: "Obra e instalación",
            text: "Demolición si es necesario, coordinación de oficios, instalación de gabinetes y encimeras.",
          },
          { title: "Acabados e inspección final", text: "Últimos ajustes, limpieza e inspección final contigo." },
        ],
      },
    ],
    projects: {
      nav: "Proyectos",
      title: "Nuestros proyectos de cocinas.",
      intro:
        "Cada proyecto se presenta con su contexto, las necesidades del cliente, los trabajos realizados y el resultado. Arrastra el control sobre la foto para comparar antes y después.",
    },
    faq: {
      nav: "Preguntas",
      title: "Preguntas frecuentes sobre remodelación de cocinas.",
      items: [
        {
          q: "¿Cuánto cuesta remodelar una cocina?",
          a: "Depende del tamaño de la cocina, la distribución y los materiales y acabados que elijas. Después de la consulta gratuita recibes una cotización por escrito y detallada, sin costos ocultos.",
        },
        {
          q: "¿Cuánto tarda una remodelación de cocina?",
          a: "Depende de los tiempos de fabricación de los gabinetes y del alcance del trabajo. Recibes un cronograma por escrito antes de empezar y te mantenemos informado hasta la inspección final.",
        },
        {
          q: "¿Pueden conservar mi distribución actual?",
          a: "Sí. Podemos conservar la ubicación de la plomería y los electrodomésticos o rediseñar toda la distribución, según tus objetivos y tu presupuesto.",
        },
        {
          q: "¿Suministran encimeras y electrodomésticos?",
          a: "Suministramos e instalamos las encimeras y coordinamos tus electrodomésticos, para entregarte la cocina completa y lista para usar.",
        },
        {
          q: "¿Puedo agregar una isla?",
          a: "Sí, si el espacio lo permite. Tu diseño 3D muestra exactamente cómo encaja la isla y cuánto espacio queda para circular.",
        },
        {
          q: "¿Qué estilos de gabinetes ofrecen?",
          a: "Gabinetes de estilo europeo, canadiense y americano, de gama media a alta, con acabados en laca, chapa, pintura o melamina.",
        },
      ],
    },
    areas: {
      nav: "Zonas",
      title: "Remodelación de cocinas en Tampa, Clearwater, St. Petersburg y Bradenton.",
      text: "Remodelamos cocinas en Tampa, Clearwater, St. Petersburg, Bradenton y las comunidades cercanas de Tampa Bay. Nuestra sala de exhibición está en 19046 Bruce B Downs Blvd, Ste B6, Tampa: con cita, puedes ver muestras de gabinetes, acabados y encimeras.",
    },
    related: {
      title: "Ver también",
      otherService: "Remodelación de baños",
      otherServiceText: "Muebles de baño, duchas y bañeras pensados para la humedad de Florida.",
      blog: "Nuestros consejos de remodelación",
      blogText: "Distribución, materiales e ideas para preparar tu proyecto.",
    },
    cta: {
      title: "Hablemos de tu nueva cocina.",
      text: "Seis preguntas rápidas, y un diseñador te llama en 24 horas hábiles para planear una visita gratuita a domicilio.",
      button: "Solicitar una cotización",
    },
    schema: {
      serviceType: "Remodelación de cocinas",
      description:
        "Diseño y remodelación de cocinas a medida: gabinetes, islas, despensas, encimeras e iluminación, del diseño 3D a la instalación.",
    },
  },
};
