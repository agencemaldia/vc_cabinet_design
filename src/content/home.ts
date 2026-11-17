import type { Locale } from "@/lib/i18n/config";

export type Faq = { q: string; a: string };

type HomeCopy = {
  hero: {
    eyebrow: string;
    title: string;
    titleEm: string;
    text: string;
    cta: string;
    secondary: string;
    pause: string;
    play: string;
  };
  reviews: { eyebrow: string; title: string; text: string; ratingLabel: string };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    kitchen: { title: string; text: string; points: string[]; link: string; alt: string };
    bathroom: { title: string; text: string; points: string[]; link: string; alt: string };
  };
  method: { eyebrow: string; title: string; text: string; steps: { title: string; text: string }[] };
  faq: { eyebrow: string; title: string; text: string; items: Faq[] };
  blog: { eyebrow: string; title: string; text: string };
  final: { title: string; text: string; cta: string; call: string };
};

/**
 * Home page (specification §2), sections in the required order: video hero, reviews, the two services,
 * the work method, FAQ, latest articles, final call to action — then the footer.
 */
export const HOME: Record<Locale, HomeCopy> = {
  fr: {
    hero: {
      eyebrow: "Tampa Bay, Floride",
      title: "Rénovation de cuisines",
      titleEm: "et de salles de bain.",
      text: "Nous concevons et réalisons des cuisines et des salles de bain sur mesure — de la consultation gratuite à domicile jusqu’à l’inspection finale, avec une seule équipe.",
      cta: "Demander une soumission",
      secondary: "Nos cuisines",
      pause: "Mettre la vidéo en pause",
      play: "Lire la vidéo",
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Ce que disent nos clients.",
      text: "Les avis laissés par les propriétaires qui nous ont confié leur projet.",
      ratingLabel: "Note moyenne",
    },
    services: {
      eyebrow: "Nos services",
      title: "Deux spécialités, un même soin.",
      text: "Nous rénovons les deux pièces qui comptent le plus dans une maison : la cuisine et la salle de bain.",
      kitchen: {
        title: "Rénovation de cuisines",
        text: "Armoires sur mesure, îlots, garde-manger et comptoirs, conçus en 3D autour de votre façon de cuisiner et de recevoir.",
        points: ["Armoires et îlots sur mesure", "Comptoirs en quartz et en pierre", "Rangement et éclairage intégrés"],
        link: "Cuisines",
        alt: "Cuisine rénovée avec armoires blanches, comptoirs en granit et plancher de bois",
      },
      bathroom: {
        title: "Rénovation de salles de bain",
        text: "Meubles-lavabos, douches, baignoires et rangements pensés pour le confort, la durabilité et l’humidité de la Floride.",
        points: ["Meubles-lavabos sur mesure", "Douches et baignoires", "Matériaux résistants à l’humidité"],
        link: "Salles de bain",
        alt: "Salle de bain rénovée avec meuble-lavabo en bois, comptoir en marbre et douche vitrée",
      },
    },
    method: {
      eyebrow: "Notre méthode",
      title: "Cinq étapes, une seule équipe.",
      text: "Vous savez toujours ce qui vient ensuite, et qui appeler.",
      steps: [
        {
          title: "Premier contact et compréhension des besoins",
          text: "Un designer vient chez vous gratuitement : il écoute vos besoins, regarde l’espace et parle avec vous de style, de matériaux et de budget.",
        },
        {
          title: "Évaluation et planification",
          text: "Nous prenons les mesures, préparons un design 2D/3D et une soumission écrite détaillée. Vous révisez le design avec votre designer avant d’approuver.",
        },
        {
          title: "Préparation du chantier",
          text: "Un contrat précise les matériaux, la portée et l’échéancier. Nous obtenons les permis au besoin et commandons les armoires et les matériaux.",
        },
        {
          title: "Réalisation des travaux",
          text: "Notre équipe de gestion de projet coordonne les livraisons et les corps de métier, installe tout avec précision et vous tient informé.",
        },
        {
          title: "Finitions et livraison du projet",
          text: "Nous vérifions chaque détail, nettoyons le chantier et faisons l’inspection finale avec vous avant de vous remettre votre nouvelle pièce.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Vos questions, nos réponses.",
      text: "Les questions que les propriétaires nous posent le plus souvent avant une rénovation.",
      items: [
        {
          q: "La consultation avec un designer est-elle vraiment gratuite ?",
          a: "Oui. Un designer visite votre maison, écoute vos besoins et mesure l’espace, sans frais et sans engagement.",
        },
        {
          q: "Combien coûte une rénovation de cuisine ou de salle de bain ?",
          a: "Le prix dépend de la taille de la pièce, des matériaux et des finitions choisis. Après la consultation gratuite, vous recevez une soumission écrite, claire et détaillée, sans frais cachés.",
        },
        {
          q: "Combien de temps durent les travaux ?",
          a: "Cela dépend de la portée du projet et des délais des matériaux. Avant le début des travaux, votre designer vous remet un échéancier écrit et vous tient informé à chaque étape.",
        },
        {
          q: "Puis-je voir mon projet avant les travaux ?",
          a: "Oui. Vous révisez un design 2D/3D et pouvez demander des retouches en temps réel avec votre designer avant la fabrication.",
        },
        {
          q: "Vous occupez-vous des permis ?",
          a: "Oui. Lorsque votre projet exige des permis, nous les obtenons pendant la préparation du chantier.",
        },
        {
          q: "Vous occupez-vous de la plomberie et de la céramique ?",
          a: "Oui. Nous coordonnons la plomberie et la céramique avec des corps de métier certifiés, pour que vous gardiez un seul interlocuteur du début à la fin.",
        },
        {
          q: "Mon projet est-il garanti ?",
          a: "Votre contrat précise la garantie de votre projet, y compris la garantie du fabricant sur les armoires. Demandez les détails à votre designer lors de la consultation.",
        },
        {
          q: "Quels secteurs desservez-vous ?",
          a: "Tampa, Bradenton, Clearwater, St. Petersburg et les communautés voisines de Tampa Bay.",
        },
      ],
    },
    blog: {
      eyebrow: "Blogue",
      title: "Conseils et idées de rénovation.",
      text: "Nos articles pour préparer votre projet de cuisine ou de salle de bain.",
    },
    final: {
      title: "Prêt à rénover votre cuisine ou votre salle de bain ?",
      text: "Répondez à six questions rapides : un designer vous rappelle sous 24 heures ouvrables pour planifier une visite gratuite à domicile.",
      cta: "Demander une soumission",
      call: "Appeler le 727-223-3490",
    },
  },
  en: {
    hero: {
      eyebrow: "Tampa Bay, Florida",
      title: "Kitchen and bathroom",
      titleEm: "renovation.",
      text: "We design and build custom kitchens and bathrooms — from the free in-home consultation to the final inspection, with one team.",
      cta: "Request a quote",
      secondary: "Our kitchens",
      pause: "Pause the video",
      play: "Play the video",
    },
    reviews: {
      eyebrow: "Client reviews",
      title: "What our clients say.",
      text: "Reviews from homeowners who trusted us with their project.",
      ratingLabel: "Average rating",
    },
    services: {
      eyebrow: "Our services",
      title: "Two specialties, the same care.",
      text: "We renovate the two rooms that matter most in a home: the kitchen and the bathroom.",
      kitchen: {
        title: "Kitchen renovation",
        text: "Custom cabinets, islands, pantries and countertops, designed in 3D around the way you cook and gather.",
        points: ["Custom cabinets and islands", "Quartz and stone countertops", "Built-in storage and lighting"],
        link: "Explore our kitchens",
        alt: "Renovated kitchen with white cabinets, granite countertops and a hardwood floor",
      },
      bathroom: {
        title: "Bathroom renovation",
        text: "Vanities, showers, bathtubs and storage designed for comfort, durability and Florida humidity.",
        points: ["Custom vanities", "Showers and bathtubs", "Moisture-resistant materials"],
        link: "Explore our bathrooms",
        alt: "Renovated bathroom with a wood vanity, a marble countertop and a glass shower",
      },
    },
    method: {
      eyebrow: "Our method",
      title: "Five steps, one team.",
      text: "You always know what comes next, and who to call.",
      steps: [
        {
          title: "First contact and understanding your needs",
          text: "A designer visits your home for free: they listen to your needs, look at the space and talk through style, materials and budget.",
        },
        {
          title: "Assessment and planning",
          text: "We take measurements and prepare a 2D/3D design and a detailed written quote. You review the design with your designer before approving it.",
        },
        {
          title: "Site preparation",
          text: "A contract sets out the materials, scope and schedule. We obtain permits when needed and order the cabinets and materials.",
        },
        {
          title: "Carrying out the work",
          text: "Our project management team coordinates deliveries and trades, installs everything precisely and keeps you updated.",
        },
        {
          title: "Finishing touches and handover",
          text: "We check every detail, clean the site and walk through the final inspection with you before handing over your new room.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Your questions, answered.",
      text: "The questions homeowners ask us most often before a renovation.",
      items: [
        {
          q: "Is the designer consultation really free?",
          a: "Yes. A designer visits your home, listens to your needs and measures the space, at no cost and with no commitment.",
        },
        {
          q: "How much does a kitchen or bathroom renovation cost?",
          a: "Pricing depends on the size of the room and the materials and finishes you choose. After the free consultation, you receive a clear, written and itemized quote with no hidden costs.",
        },
        {
          q: "How long does the work take?",
          a: "It depends on the scope of the project and on material lead times. Before work begins, your designer gives you a written schedule and keeps you updated at every step.",
        },
        {
          q: "Can I see my project before the work starts?",
          a: "Yes. You review a 2D/3D design and can request real-time edits with your designer before production starts.",
        },
        {
          q: "Do you handle permits?",
          a: "Yes. When your project requires permits, we obtain them during site preparation.",
        },
        {
          q: "Do you handle plumbing and tile?",
          a: "Yes. We coordinate plumbing and tile work with licensed trades, so you keep one point of contact from start to finish.",
        },
        {
          q: "Is my project under warranty?",
          a: "Your contract details the warranty coverage for your project, including the manufacturer’s warranty on the cabinetry. Ask your designer for the specifics during the consultation.",
        },
        {
          q: "Which areas do you serve?",
          a: "Tampa, Bradenton, Clearwater, St. Petersburg and the surrounding Tampa Bay communities.",
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "Renovation tips and ideas.",
      text: "Our articles to help you prepare your kitchen or bathroom project.",
    },
    final: {
      title: "Ready to renovate your kitchen or bathroom?",
      text: "Answer six quick questions: a designer calls you back within 24 business hours to plan a free in-home visit.",
      cta: "Request a quote",
      call: "Call 727-223-3490",
    },
  },
  es: {
    hero: {
      eyebrow: "Tampa Bay, Florida",
      title: "Remodelación de cocinas",
      titleEm: "y baños.",
      text: "Diseñamos y construimos cocinas y baños a medida — desde la consulta gratuita a domicilio hasta la inspección final, con un solo equipo.",
      cta: "Solicitar una cotización",
      secondary: "Nuestras cocinas",
      pause: "Pausar el video",
      play: "Reproducir el video",
    },
    reviews: {
      eyebrow: "Reseñas de clientes",
      title: "Lo que dicen nuestros clientes.",
      text: "Las reseñas de los propietarios que nos confiaron su proyecto.",
      ratingLabel: "Calificación promedio",
    },
    services: {
      eyebrow: "Nuestros servicios",
      title: "Dos especialidades, el mismo cuidado.",
      text: "Remodelamos los dos espacios que más importan en un hogar: la cocina y el baño.",
      kitchen: {
        title: "Remodelación de cocinas",
        text: "Gabinetes a medida, islas, despensas y encimeras, diseñados en 3D según tu forma de cocinar y reunirte.",
        points: [
          "Gabinetes e islas a medida",
          "Encimeras de cuarzo y piedra",
          "Almacenamiento e iluminación integrados",
        ],
        link: "Ver nuestras cocinas",
        alt: "Cocina remodelada con gabinetes blancos, encimeras de granito y piso de madera",
      },
      bathroom: {
        title: "Remodelación de baños",
        text: "Muebles de baño, duchas, bañeras y almacenamiento pensados para la comodidad, la durabilidad y la humedad de Florida.",
        points: ["Muebles de baño a medida", "Duchas y bañeras", "Materiales resistentes a la humedad"],
        link: "Ver nuestros baños",
        alt: "Baño remodelado con mueble de madera, encimera de mármol y ducha de vidrio",
      },
    },
    method: {
      eyebrow: "Nuestro método",
      title: "Cinco pasos, un solo equipo.",
      text: "Siempre sabes qué sigue y a quién llamar.",
      steps: [
        {
          title: "Primer contacto y comprensión de tus necesidades",
          text: "Un diseñador visita tu casa gratis: escucha tus necesidades, observa el espacio y conversa contigo sobre estilo, materiales y presupuesto.",
        },
        {
          title: "Evaluación y planificación",
          text: "Tomamos las medidas y preparamos un diseño 2D/3D y una cotización escrita detallada. Revisas el diseño con tu diseñador antes de aprobarlo.",
        },
        {
          title: "Preparación de la obra",
          text: "Un contrato define los materiales, el alcance y el cronograma. Tramitamos los permisos si es necesario y pedimos los gabinetes y materiales.",
        },
        {
          title: "Ejecución de los trabajos",
          text: "Nuestro equipo de gestión de proyectos coordina las entregas y los oficios, instala todo con precisión y te mantiene informado.",
        },
        {
          title: "Acabados y entrega del proyecto",
          text: "Revisamos cada detalle, limpiamos la obra y hacemos contigo la inspección final antes de entregarte tu nuevo espacio.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Tus preguntas, nuestras respuestas.",
      text: "Las preguntas que más nos hacen los propietarios antes de una remodelación.",
      items: [
        {
          q: "¿La consulta con un diseñador es realmente gratuita?",
          a: "Sí. Un diseñador visita tu casa, escucha tus necesidades y mide el espacio, sin costo y sin compromiso.",
        },
        {
          q: "¿Cuánto cuesta remodelar una cocina o un baño?",
          a: "El precio depende del tamaño del espacio y de los materiales y acabados que elijas. Después de la consulta gratuita recibes una cotización clara, por escrito y detallada, sin costos ocultos.",
        },
        {
          q: "¿Cuánto duran los trabajos?",
          a: "Depende del alcance del proyecto y de los tiempos de entrega de los materiales. Antes de empezar, tu diseñador te entrega un cronograma por escrito y te mantiene informado en cada paso.",
        },
        {
          q: "¿Puedo ver mi proyecto antes de los trabajos?",
          a: "Sí. Revisas un diseño 2D/3D y puedes pedir ajustes en tiempo real con tu diseñador antes de la fabricación.",
        },
        {
          q: "¿Se encargan de los permisos?",
          a: "Sí. Cuando tu proyecto requiere permisos, los tramitamos durante la preparación de la obra.",
        },
        {
          q: "¿Se encargan de la plomería y los azulejos?",
          a: "Sí. Coordinamos la plomería y los azulejos con profesionales con licencia, para que tengas un solo contacto de principio a fin.",
        },
        {
          q: "¿Mi proyecto tiene garantía?",
          a: "Tu contrato detalla la garantía de tu proyecto, incluida la garantía del fabricante de los gabinetes. Pide los detalles a tu diseñador durante la consulta.",
        },
        {
          q: "¿Qué zonas atienden?",
          a: "Tampa, Bradenton, Clearwater, St. Petersburg y las comunidades cercanas de Tampa Bay.",
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "Consejos e ideas de remodelación.",
      text: "Nuestros artículos para preparar tu proyecto de cocina o baño.",
    },
    final: {
      title: "¿Listo para remodelar tu cocina o tu baño?",
      text: "Responde seis preguntas rápidas: un diseñador te llama en 24 horas hábiles para planear una visita gratuita a domicilio.",
      cta: "Solicitar una cotización",
      call: "Llamar al 727-223-3490",
    },
  },
};
