import type { Locale } from "@/lib/i18n/config";
import type { ServiceCopy } from "./service-types";

/**
 * "Bathroom renovation" page (specification §4): same architecture as the kitchen page, its own content.
 * Facts come from what the client already states (vanities, linen towers, moisture-resistant materials,
 * vanity-only remodels, plumbing and tile coordinated with licensed trades…). Nothing invented.
 */
export const BATHROOM: Record<Locale, ServiceCopy> = {
  fr: {
    meta: {
      title: "Rénovation de salle de bain à Tampa Bay",
      description:
        "Rénovation complète de salle de bain à Tampa, Clearwater, St. Petersburg et Bradenton : meubles-lavabos sur mesure, douches, baignoires, céramique et matériaux résistants à l’humidité. Consultation gratuite.",
    },
    hero: {
      eyebrow: "Rénovation de salles de bain",
      title: "Rénovation de salle de bain",
      titleEm: "à Tampa Bay.",
      text: "Meubles-lavabos, douches, baignoires et rangements conçus pour le confort, la durabilité et l’humidité de la Floride — dessinés en 3D et réalisés par une seule équipe.",
      cta: "Demander une soumission",
      secondary: "Voir nos réalisations",
      alt: "Salle de bain rénovée avec double meuble-lavabo suspendu en bois et grand miroir",
    },
    intro: {
      title: "Une salle de bain aussi pratique que belle.",
      paragraphs: [
        "Une salle de bain se rénove dans un espace restreint, avec de l’eau, de la vapeur et beaucoup d’usage au quotidien. Chaque choix compte : disposition, rangement, revêtements, ventilation et éclairage doivent être pensés ensemble pour durer.",
        "Chez V&C Cabinet Design Concept, un designer vous accompagne de la consultation à domicile jusqu’à l’inspection finale. Nous concevons des meubles-lavabos et des rangements sur mesure, choisissons avec vous des matériaux résistants à l’humidité et coordonnons la plomberie et la céramique avec des corps de métier certifiés.",
        "Du simple remplacement du meuble-lavabo à la rénovation complète de salle de bain — douche, baignoire, revêtements et rangement — nous adaptons le projet à votre espace et à votre budget.",
      ],
      highlights: [
        "Consultation et mesures gratuites à domicile",
        "Matériaux et finitions résistants à l’humidité",
        "Plomberie et céramique coordonnées avec des corps de métier certifiés",
        "Design 2D/3D et soumission écrite détaillée",
      ],
    },
    sections: [
      {
        id: "travaux",
        nav: "Types de travaux",
        title: "Les rénovations de salle de bain que nous réalisons.",
        intro:
          "Selon l’état de la pièce et vos objectifs, la rénovation peut toucher un seul élément ou l’ensemble de la salle de bain.",
        layout: "grid",
        items: [
          {
            title: "Rénovation complète de salle de bain",
            text: "Nouvelle disposition, nouvelle douche ou baignoire, nouveaux revêtements, meuble-lavabo et rangement : nous transformons toute la pièce.",
          },
          {
            title: "Meubles-lavabos sur mesure",
            text: "Meubles suspendus ou sur pieds, simples ou doubles, conçus à la dimension exacte de votre pièce. Nous pouvons aussi remplacer le meuble-lavabo seul.",
          },
          {
            title: "Douches",
            text: "Remplacement d’une baignoire par une douche, douche à l’italienne ou cabine vitrée : nous planifions la disposition et coordonnons l’installation.",
          },
          {
            title: "Baignoires",
            text: "Baignoire autoportante ou encastrée : le choix dépend de l’espace disponible, de l’usage et de la structure du plancher.",
          },
          {
            title: "Rangement",
            text: "Colonnes à linge, armoires murales, rangements cachés et organisateurs pour garder les comptoirs dégagés.",
          },
          {
            title: "Miroirs et éclairage",
            text: "Miroirs, armoires à pharmacie et éclairage autour du lavabo pour une lumière agréable et pratique au quotidien.",
          },
        ],
      },
      {
        id: "methode",
        nav: "Notre méthode",
        title: "Préparation et réalisation des travaux.",
        intro:
          "Une salle de bain combine plomberie, revêtements et menuiserie dans peu d’espace. Une bonne préparation évite les mauvaises surprises.",
        layout: "list",
        items: [
          {
            title: "Évaluer l’existant",
            text: "Le designer observe l’état de la pièce, les emplacements de plomberie, la ventilation et les contraintes de l’espace avant de proposer des solutions.",
          },
          {
            title: "Concevoir en 3D",
            text: "Vous voyez votre future salle de bain en 2D et en 3D et pouvez ajuster la disposition, les matériaux et les couleurs avant la fabrication.",
          },
          {
            title: "Planifier les métiers",
            text: "Nous coordonnons la plomberie et la céramique avec des corps de métier certifiés et obtenons les permis lorsque le projet l’exige.",
          },
          {
            title: "Protéger la maison",
            text: "Pendant les travaux, nous protégeons les pièces voisines, retirons les débris et gardons le chantier propre et sécuritaire.",
          },
          {
            title: "Installer avec précision",
            text: "Les meubles et rangements fabriqués sur mesure sont installés au pouce près, avec des joints et des finitions soignés.",
          },
        ],
      },
      {
        id: "materiaux",
        nav: "Matériaux et revêtements",
        title: "Matériaux et revêtements pour salle de bain.",
        intro:
          "Dans une salle de bain, un matériau doit être beau, mais surtout résister à l’eau, à la vapeur et à l’usage quotidien.",
        layout: "grid",
        items: [
          {
            title: "Caissons résistants à l’humidité",
            text: "Votre designer recommande des caissons, des finitions et une quincaillerie adaptés au climat humide de la Floride.",
          },
          {
            title: "Céramique et carrelage",
            text: "Au plancher, au mur ou dans la douche : format, fini et couleur du carrelage changent l’allure et l’entretien de la pièce.",
          },
          {
            title: "Comptoirs de lavabo",
            text: "Quartz, granit ou marbre, avec éviers encastrés ou sous-plan, pour une surface durable et facile à nettoyer.",
          },
          {
            title: "Finitions des meubles",
            text: "Laque, placage de bois, peinture ou mélamine : nous vous présentons des échantillons pour choisir en connaissance de cause.",
          },
          {
            title: "Quincaillerie",
            text: "Charnières et tiroirs à fermeture en douceur, poignées et accessoires dans des finis résistants à l’humidité.",
          },
          {
            title: "Robinetterie et accessoires",
            text: "Robinets, pommeaux de douche, barres et accessoires sont choisis avec vous et coordonnés avec la plomberie.",
          },
        ],
      },
      {
        id: "amenagement",
        nav: "Aménagement",
        title: "Possibilités d’aménagement de salle de bain.",
        intro:
          "La bonne disposition dépend de la taille de la pièce, de la position de la plomberie et de qui utilise la salle de bain.",
        layout: "grid",
        items: [
          {
            title: "Salle de bain principale",
            text: "Double lavabo, grande douche et rangement généreux pour deux personnes qui se préparent en même temps.",
          },
          {
            title: "Salle de bain d’invités",
            text: "Un design simple et élégant, facile d’entretien, avec un meuble-lavabo compact et bien organisé.",
          },
          {
            title: "Petite salle de bain",
            text: "Meuble suspendu, douche vitrée et rangement en hauteur pour dégager le sol et agrandir visuellement la pièce.",
          },
          {
            title: "Douche à la place du bain",
            text: "Remplacer une baignoire peu utilisée par une douche plus accessible et plus spacieuse.",
          },
          {
            title: "Salle de bain d’enfants",
            text: "Rangement à bonne hauteur, surfaces faciles à nettoyer et matériaux durables.",
          },
          { title: "Coin coiffeuse", text: "Un espace pour se préparer, avec miroir, éclairage et tiroirs organisés." },
        ],
      },
      {
        id: "technique",
        nav: "Considérations techniques",
        title: "Les considérations techniques à connaître.",
        intro:
          "Ces points ne se voient pas une fois les travaux terminés, mais ils font la différence sur la durabilité d’une salle de bain.",
        layout: "list",
        items: [
          {
            title: "L’humidité et la ventilation",
            text: "En Floride, l’humidité est constante. Une bonne ventilation et des matériaux adaptés limitent la condensation et protègent les meubles.",
          },
          {
            title: "L’étanchéité de la douche",
            text: "Dans la douche, l’étanchéité sous le carrelage est aussi importante que le carrelage lui-même ; elle est réalisée par des corps de métier spécialisés.",
          },
          {
            title: "L’emplacement de la plomberie",
            text: "Conserver l’emplacement des drains et des alimentations limite les travaux ; le déplacer donne plus de liberté de disposition.",
          },
          {
            title: "Les permis",
            text: "Certains travaux exigent des permis. Lorsque c’est le cas, nous les obtenons pendant la préparation du chantier.",
          },
        ],
      },
      {
        id: "conseils",
        nav: "Conseils",
        title: "Conseils pour préparer votre rénovation de salle de bain.",
        intro: "Quelques questions utiles avant votre consultation.",
        layout: "list",
        items: [
          {
            title: "Qui utilise la pièce ?",
            text: "Une ou deux personnes, des enfants, des invités : l’usage détermine le nombre de lavabos, le rangement et le type de douche.",
          },
          {
            title: "Bain ou douche ?",
            text: "Pensez à l’usage réel : une baignoire peu utilisée prend beaucoup de place qui pourrait servir à une douche plus confortable.",
          },
          {
            title: "De quoi avez-vous besoin de ranger ?",
            text: "Serviettes, produits, appareils : un rangement prévu dès la conception évite l’encombrement des comptoirs.",
          },
          {
            title: "Quel entretien souhaitez-vous ?",
            text: "Certains finis et formats de carrelage demandent moins d’entretien ; votre designer vous conseille selon vos priorités.",
          },
        ],
      },
    ],
    projects: {
      nav: "Réalisations",
      title: "Nos réalisations de salles de bain.",
      intro:
        "Chaque projet est présenté avec son contexte, les besoins du client, l’espace initial, les travaux réalisés et le résultat. Faites glisser la poignée sur la photo pour comparer avant et après.",
    },
    faq: {
      nav: "FAQ",
      title: "Questions fréquentes sur la rénovation de salle de bain.",
      items: [
        {
          q: "Combien coûte une rénovation de salle de bain ?",
          a: "Le prix dépend de la taille de la pièce, des travaux de plomberie et des matériaux choisis. Après la consultation gratuite, vous recevez une soumission écrite et détaillée, sans frais cachés.",
        },
        {
          q: "Combien de temps dure une rénovation de salle de bain ?",
          a: "Cela dépend de la portée des travaux et des délais des matériaux. Votre designer vous remet un échéancier écrit avant le début des travaux.",
        },
        {
          q: "Pouvez-vous rénover seulement le meuble-lavabo ?",
          a: "Oui. Nous concevons et installons des meubles-lavabos seuls ou dans le cadre d’une rénovation complète de salle de bain.",
        },
        {
          q: "Quels matériaux résistent à l’humidité ?",
          a: "Votre designer recommande des caissons, des finitions et une quincaillerie résistants à l’humidité, adaptés aux salles de bain de la Floride.",
        },
        {
          q: "Vous occupez-vous de la plomberie et de la céramique ?",
          a: "Oui. Nous coordonnons la plomberie et la céramique avec des corps de métier certifiés, pour que vous gardiez un seul interlocuteur.",
        },
        {
          q: "Peut-on remplacer une baignoire par une douche ?",
          a: "Oui, c’est une demande fréquente. Votre design 3D montre la nouvelle disposition avant les travaux.",
        },
      ],
    },
    areas: {
      nav: "Secteurs",
      title: "Rénovation de salle de bain à Tampa, Clearwater, St. Petersburg et Bradenton.",
      text: "Nous rénovons des salles de bain à Tampa, Clearwater, St. Petersburg, Bradenton et dans les communautés voisines de Tampa Bay. Venez voir des échantillons de finitions et de comptoirs à notre salle d’exposition, au 19046 Bruce B Downs Blvd, Ste B6, à Tampa, sur rendez-vous.",
    },
    related: {
      title: "À voir aussi",
      otherService: "Rénovation de cuisines",
      otherServiceText: "Armoires sur mesure, îlots et comptoirs conçus autour de votre façon de cuisiner.",
      blog: "Nos conseils de rénovation",
      blogText: "Matériaux, aménagement et astuces pour préparer votre projet.",
    },
    cta: {
      title: "Parlons de votre nouvelle salle de bain.",
      text: "Six questions rapides, et un designer vous rappelle sous 24 heures ouvrables pour planifier une visite gratuite à domicile.",
      button: "Demander une soumission",
    },
    schema: {
      serviceType: "Rénovation de salle de bain",
      description:
        "Conception et rénovation de salles de bain : meubles-lavabos sur mesure, douches, baignoires, revêtements et rangement, du design 3D à l’installation.",
    },
  },
  en: {
    meta: {
      title: "Bathroom Renovation in Tampa Bay",
      description:
        "Full bathroom renovation in Tampa, Clearwater, St. Petersburg and Bradenton: custom vanities, showers, bathtubs, tile and moisture-resistant materials. Free in-home consultation.",
    },
    hero: {
      eyebrow: "Bathroom renovation",
      title: "Bathroom renovation",
      titleEm: "in Tampa Bay.",
      text: "Vanities, showers, bathtubs and storage designed for comfort, durability and Florida humidity — drawn in 3D and built by one team.",
      cta: "Request a quote",
      secondary: "See our projects",
      alt: "Renovated bathroom with a floating double wood vanity and a large mirror",
    },
    intro: {
      title: "A bathroom that works as well as it looks.",
      paragraphs: [
        "A bathroom is renovated in a tight space, with water, steam and heavy daily use. Every choice matters: layout, storage, surfaces, ventilation and lighting have to be planned together to last.",
        "At V&C Cabinet Design Concept, a designer guides you from the in-home consultation to the final inspection. We design custom vanities and storage, choose moisture-resistant materials with you and coordinate plumbing and tile work with licensed trades.",
        "From replacing just the vanity to a full bathroom renovation — shower, bathtub, surfaces and storage — we adapt the project to your space and your budget.",
      ],
      highlights: [
        "Free in-home consultation and measurement",
        "Moisture-resistant materials and finishes",
        "Plumbing and tile coordinated with licensed trades",
        "2D/3D design and a detailed written quote",
      ],
    },
    sections: [
      {
        id: "work",
        nav: "Types of work",
        title: "The bathroom renovations we do.",
        intro:
          "Depending on the condition of the room and your goals, the renovation can cover a single element or the whole bathroom.",
        layout: "grid",
        items: [
          {
            title: "Full bathroom renovation",
            text: "New layout, new shower or bathtub, new surfaces, vanity and storage: we transform the whole room.",
          },
          {
            title: "Custom vanities",
            text: "Floating or freestanding, single or double vanities designed to the exact size of your room. We can also replace the vanity on its own.",
          },
          {
            title: "Showers",
            text: "Tub-to-shower conversion, curbless shower or glass enclosure: we plan the layout and coordinate the installation.",
          },
          {
            title: "Bathtubs",
            text: "Freestanding or built-in tub: the choice depends on the available space, how you use it and the floor structure.",
          },
          {
            title: "Storage",
            text: "Linen towers, wall cabinets, hidden storage and organizers to keep the counters clear.",
          },
          {
            title: "Mirrors and lighting",
            text: "Mirrors, medicine cabinets and lighting around the sink for pleasant, practical light every day.",
          },
        ],
      },
      {
        id: "method",
        nav: "Our method",
        title: "Preparing and carrying out the work.",
        intro:
          "A bathroom combines plumbing, surfaces and cabinetry in a small space. Good preparation prevents bad surprises.",
        layout: "list",
        items: [
          {
            title: "Assess the existing room",
            text: "The designer looks at the condition of the room, the plumbing locations, ventilation and space constraints before proposing solutions.",
          },
          {
            title: "Design in 3D",
            text: "You see your future bathroom in 2D and 3D and can adjust the layout, materials and colors before production.",
          },
          {
            title: "Plan the trades",
            text: "We coordinate plumbing and tile work with licensed trades and obtain permits when the project requires them.",
          },
          {
            title: "Protect your home",
            text: "During the work, we protect the surrounding rooms, remove debris and keep the site clean and safe.",
          },
          {
            title: "Install precisely",
            text: "Custom-built vanities and storage are installed to the inch, with careful joints and finishes.",
          },
        ],
      },
      {
        id: "materials",
        nav: "Materials and surfaces",
        title: "Bathroom materials and surfaces.",
        intro: "In a bathroom, a material has to look good, but above all withstand water, steam and daily use.",
        layout: "grid",
        items: [
          {
            title: "Moisture-resistant boxes",
            text: "Your designer recommends cabinet boxes, finishes and hardware suited to Florida’s humid climate.",
          },
          {
            title: "Ceramic and tile",
            text: "On the floor, on the walls or in the shower: tile size, finish and color change both the look and the upkeep of the room.",
          },
          {
            title: "Vanity tops",
            text: "Quartz, granite or marble, with drop-in or undermount sinks, for a durable surface that is easy to clean.",
          },
          {
            title: "Cabinet finishes",
            text: "Lacquer, wood veneer, paint or melamine: we show you samples so you can choose with confidence.",
          },
          {
            title: "Hardware",
            text: "Soft-close hinges and drawers, pulls and accessories in moisture-resistant finishes.",
          },
          {
            title: "Faucets and fixtures",
            text: "Faucets, shower heads, bars and accessories are chosen with you and coordinated with the plumbing.",
          },
        ],
      },
      {
        id: "layouts",
        nav: "Layouts",
        title: "Bathroom layout options.",
        intro: "The right layout depends on the size of the room, where the plumbing is and who uses the bathroom.",
        layout: "grid",
        items: [
          {
            title: "Primary bathroom",
            text: "Double sink, large shower and generous storage for two people getting ready at the same time.",
          },
          {
            title: "Guest bathroom",
            text: "A simple, elegant design that is easy to maintain, with a compact, well-organized vanity.",
          },
          {
            title: "Small bathroom",
            text: "Floating vanity, glass shower and tall storage to free the floor and make the room feel larger.",
          },
          {
            title: "Shower instead of a tub",
            text: "Replace a rarely used bathtub with a more accessible, roomier shower.",
          },
          {
            title: "Kids’ bathroom",
            text: "Storage at the right height, easy-to-clean surfaces and durable materials.",
          },
          { title: "Vanity corner", text: "A place to get ready, with a mirror, lighting and organized drawers." },
        ],
      },
      {
        id: "technical",
        nav: "Technical points",
        title: "Technical points worth knowing.",
        intro: "You won’t see these once the work is done, but they make the difference in how long a bathroom lasts.",
        layout: "list",
        items: [
          {
            title: "Humidity and ventilation",
            text: "In Florida, humidity is constant. Good ventilation and suitable materials limit condensation and protect the cabinetry.",
          },
          {
            title: "Shower waterproofing",
            text: "In the shower, the waterproofing under the tile matters as much as the tile itself; it is done by specialized trades.",
          },
          {
            title: "Plumbing locations",
            text: "Keeping the drains and supply lines where they are limits the work; moving them gives more freedom in the layout.",
          },
          {
            title: "Permits",
            text: "Some work requires permits. When it does, we obtain them during site preparation.",
          },
        ],
      },
      {
        id: "tips",
        nav: "Tips",
        title: "Tips to prepare your bathroom renovation.",
        intro: "A few useful questions before your consultation.",
        layout: "list",
        items: [
          {
            title: "Who uses the room?",
            text: "One or two people, children, guests: the use decides the number of sinks, the storage and the type of shower.",
          },
          {
            title: "Tub or shower?",
            text: "Think about real use: a rarely used bathtub takes a lot of space that could make a more comfortable shower.",
          },
          {
            title: "What do you need to store?",
            text: "Towels, products, appliances: storage planned from the start keeps the counters clear.",
          },
          {
            title: "How much upkeep do you want?",
            text: "Some finishes and tile sizes need less maintenance; your designer advises you based on your priorities.",
          },
        ],
      },
    ],
    projects: {
      nav: "Projects",
      title: "Our bathroom projects.",
      intro:
        "Each project is presented with its context, the client’s needs, the original space, the work carried out and the result. Drag the handle across the photo to compare before and after.",
    },
    faq: {
      nav: "FAQ",
      title: "Bathroom renovation FAQ.",
      items: [
        {
          q: "How much does a bathroom renovation cost?",
          a: "It depends on the size of the room, the plumbing work and the materials you choose. After the free consultation, you receive a written, itemized quote with no hidden costs.",
        },
        {
          q: "How long does a bathroom renovation take?",
          a: "It depends on the scope of work and material lead times. Your designer gives you a written schedule before work begins.",
        },
        {
          q: "Can you remodel just the vanity?",
          a: "Yes. We design and install vanities on their own or as part of a full bathroom renovation.",
        },
        {
          q: "Which materials hold up to humidity?",
          a: "Your designer recommends moisture-resistant boxes, finishes and hardware suited to Florida bathrooms.",
        },
        {
          q: "Do you handle plumbing and tile?",
          a: "Yes. We coordinate plumbing and tile work with licensed trades, so you keep a single point of contact.",
        },
        {
          q: "Can a bathtub be replaced with a shower?",
          a: "Yes, it’s a common request. Your 3D design shows the new layout before the work starts.",
        },
      ],
    },
    areas: {
      nav: "Areas",
      title: "Bathroom renovation in Tampa, Clearwater, St. Petersburg and Bradenton.",
      text: "We renovate bathrooms in Tampa, Clearwater, St. Petersburg, Bradenton and the surrounding Tampa Bay communities. See finish and countertop samples at our showroom, 19046 Bruce B Downs Blvd, Ste B6, Tampa, by appointment.",
    },
    related: {
      title: "See also",
      otherService: "Kitchen renovation",
      otherServiceText: "Custom cabinets, islands and countertops designed around the way you cook.",
      blog: "Our renovation tips",
      blogText: "Materials, layouts and ideas to prepare your project.",
    },
    cta: {
      title: "Let’s talk about your new bathroom.",
      text: "Six quick questions, and a designer calls you back within 24 business hours to plan a free in-home visit.",
      button: "Request a quote",
    },
    schema: {
      serviceType: "Bathroom renovation",
      description:
        "Bathroom design and renovation: custom vanities, showers, bathtubs, surfaces and storage, from 3D design to installation.",
    },
  },
  es: {
    meta: {
      title: "Remodelación de baños en Tampa Bay",
      description:
        "Remodelación completa de baños en Tampa, Clearwater, St. Petersburg y Bradenton: muebles de baño a medida, duchas, bañeras, azulejos y materiales resistentes a la humedad. Consulta gratuita.",
    },
    hero: {
      eyebrow: "Remodelación de baños",
      title: "Remodelación de baños",
      titleEm: "en Tampa Bay.",
      text: "Muebles de baño, duchas, bañeras y almacenamiento pensados para la comodidad, la durabilidad y la humedad de Florida — diseñados en 3D y realizados por un solo equipo.",
      cta: "Solicitar una cotización",
      secondary: "Ver nuestros proyectos",
      alt: "Baño remodelado con doble mueble flotante de madera y gran espejo",
    },
    intro: {
      title: "Un baño tan práctico como hermoso.",
      paragraphs: [
        "Un baño se remodela en un espacio reducido, con agua, vapor y mucho uso diario. Cada decisión cuenta: distribución, almacenamiento, revestimientos, ventilación e iluminación deben planearse juntos para que duren.",
        "En V&C Cabinet Design Concept, un diseñador te acompaña desde la consulta a domicilio hasta la inspección final. Diseñamos muebles de baño y almacenamiento a medida, elegimos contigo materiales resistentes a la humedad y coordinamos la plomería y los azulejos con profesionales con licencia.",
        "Desde cambiar solo el mueble de baño hasta una remodelación completa — ducha, bañera, revestimientos y almacenamiento — adaptamos el proyecto a tu espacio y a tu presupuesto.",
      ],
      highlights: [
        "Consulta y medición gratuitas a domicilio",
        "Materiales y acabados resistentes a la humedad",
        "Plomería y azulejos coordinados con profesionales con licencia",
        "Diseño 2D/3D y cotización detallada por escrito",
      ],
    },
    sections: [
      {
        id: "trabajos",
        nav: "Tipos de trabajos",
        title: "Las remodelaciones de baño que realizamos.",
        intro:
          "Según el estado del espacio y tus objetivos, la remodelación puede abarcar un solo elemento o todo el baño.",
        layout: "grid",
        items: [
          {
            title: "Remodelación completa de baño",
            text: "Nueva distribución, nueva ducha o bañera, nuevos revestimientos, mueble de baño y almacenamiento: transformamos todo el espacio.",
          },
          {
            title: "Muebles de baño a medida",
            text: "Flotantes o de pie, sencillos o dobles, diseñados al tamaño exacto de tu baño. También podemos cambiar solo el mueble.",
          },
          {
            title: "Duchas",
            text: "Cambio de bañera por ducha, ducha sin escalón o cabina de vidrio: planeamos la distribución y coordinamos la instalación.",
          },
          {
            title: "Bañeras",
            text: "Bañera independiente o empotrada: la elección depende del espacio disponible, el uso y la estructura del piso.",
          },
          {
            title: "Almacenamiento",
            text: "Torres de blancos, gabinetes de pared, almacenamiento oculto y organizadores para mantener las encimeras despejadas.",
          },
          {
            title: "Espejos e iluminación",
            text: "Espejos, botiquines e iluminación alrededor del lavabo para una luz agradable y práctica todos los días.",
          },
        ],
      },
      {
        id: "metodo",
        nav: "Nuestro método",
        title: "Preparación y ejecución de los trabajos.",
        intro:
          "Un baño combina plomería, revestimientos y carpintería en poco espacio. Una buena preparación evita sorpresas.",
        layout: "list",
        items: [
          {
            title: "Evaluar lo existente",
            text: "El diseñador observa el estado del espacio, la ubicación de la plomería, la ventilación y las limitaciones antes de proponer soluciones.",
          },
          {
            title: "Diseñar en 3D",
            text: "Ves tu futuro baño en 2D y 3D y puedes ajustar la distribución, los materiales y los colores antes de la fabricación.",
          },
          {
            title: "Planear los oficios",
            text: "Coordinamos la plomería y los azulejos con profesionales con licencia y tramitamos los permisos cuando el proyecto lo requiere.",
          },
          {
            title: "Proteger tu casa",
            text: "Durante los trabajos protegemos los espacios vecinos, retiramos los escombros y mantenemos la obra limpia y segura.",
          },
          {
            title: "Instalar con precisión",
            text: "Los muebles y el almacenamiento a medida se instalan al milímetro, con uniones y acabados cuidados.",
          },
        ],
      },
      {
        id: "materiales",
        nav: "Materiales y revestimientos",
        title: "Materiales y revestimientos para baño.",
        intro: "En un baño, un material debe verse bien, pero sobre todo resistir el agua, el vapor y el uso diario.",
        layout: "grid",
        items: [
          {
            title: "Cajas resistentes a la humedad",
            text: "Tu diseñador recomienda cajas, acabados y herrajes adecuados al clima húmedo de Florida.",
          },
          {
            title: "Cerámica y azulejos",
            text: "En el piso, en las paredes o en la ducha: el formato, el acabado y el color cambian el aspecto y el mantenimiento del espacio.",
          },
          {
            title: "Encimeras de lavabo",
            text: "Cuarzo, granito o mármol, con lavabos sobrepuestos o bajo cubierta, para una superficie duradera y fácil de limpiar.",
          },
          {
            title: "Acabados de los muebles",
            text: "Laca, chapa de madera, pintura o melamina: te mostramos muestras para que elijas con confianza.",
          },
          {
            title: "Herrajes",
            text: "Bisagras y cajones de cierre suave, tiradores y accesorios en acabados resistentes a la humedad.",
          },
          {
            title: "Grifería y accesorios",
            text: "Grifos, regaderas, barras y accesorios se eligen contigo y se coordinan con la plomería.",
          },
        ],
      },
      {
        id: "distribucion",
        nav: "Distribución",
        title: "Opciones de distribución de baño.",
        intro:
          "La distribución adecuada depende del tamaño del espacio, la ubicación de la plomería y quién usa el baño.",
        layout: "grid",
        items: [
          {
            title: "Baño principal",
            text: "Doble lavabo, ducha amplia y mucho almacenamiento para dos personas que se arreglan al mismo tiempo.",
          },
          {
            title: "Baño de visitas",
            text: "Un diseño sencillo y elegante, fácil de mantener, con un mueble compacto y bien organizado.",
          },
          {
            title: "Baño pequeño",
            text: "Mueble flotante, ducha de vidrio y almacenamiento en altura para liberar el piso y agrandar visualmente el espacio.",
          },
          {
            title: "Ducha en lugar de bañera",
            text: "Reemplazar una bañera poco usada por una ducha más accesible y espaciosa.",
          },
          {
            title: "Baño de niños",
            text: "Almacenamiento a la altura adecuada, superficies fáciles de limpiar y materiales duraderos.",
          },
          {
            title: "Rincón de tocador",
            text: "Un espacio para arreglarse, con espejo, iluminación y cajones organizados.",
          },
        ],
      },
      {
        id: "tecnico",
        nav: "Aspectos técnicos",
        title: "Aspectos técnicos que conviene conocer.",
        intro: "No se ven una vez terminados los trabajos, pero marcan la diferencia en la durabilidad de un baño.",
        layout: "list",
        items: [
          {
            title: "Humedad y ventilación",
            text: "En Florida la humedad es constante. Una buena ventilación y materiales adecuados limitan la condensación y protegen los muebles.",
          },
          {
            title: "Impermeabilización de la ducha",
            text: "En la ducha, la impermeabilización bajo el azulejo es tan importante como el azulejo; la realizan oficios especializados.",
          },
          {
            title: "Ubicación de la plomería",
            text: "Conservar los desagües y las tomas donde están limita los trabajos; moverlos da más libertad de distribución.",
          },
          {
            title: "Permisos",
            text: "Algunos trabajos requieren permisos. Cuando es así, los tramitamos durante la preparación de la obra.",
          },
        ],
      },
      {
        id: "consejos",
        nav: "Consejos",
        title: "Consejos para preparar la remodelación de tu baño.",
        intro: "Algunas preguntas útiles antes de tu consulta.",
        layout: "list",
        items: [
          {
            title: "¿Quién usa el baño?",
            text: "Una o dos personas, niños, visitas: el uso decide el número de lavabos, el almacenamiento y el tipo de ducha.",
          },
          {
            title: "¿Bañera o ducha?",
            text: "Piensa en el uso real: una bañera poco usada ocupa mucho espacio que podría ser una ducha más cómoda.",
          },
          {
            title: "¿Qué necesitas guardar?",
            text: "Toallas, productos, aparatos: el almacenamiento previsto desde el diseño mantiene las encimeras despejadas.",
          },
          {
            title: "¿Cuánto mantenimiento quieres?",
            text: "Algunos acabados y formatos de azulejo requieren menos mantenimiento; tu diseñador te aconseja según tus prioridades.",
          },
        ],
      },
    ],
    projects: {
      nav: "Proyectos",
      title: "Nuestros proyectos de baños.",
      intro:
        "Cada proyecto se presenta con su contexto, las necesidades del cliente, el espacio inicial, los trabajos realizados y el resultado. Arrastra el control sobre la foto para comparar antes y después.",
    },
    faq: {
      nav: "Preguntas",
      title: "Preguntas frecuentes sobre remodelación de baños.",
      items: [
        {
          q: "¿Cuánto cuesta remodelar un baño?",
          a: "Depende del tamaño del espacio, los trabajos de plomería y los materiales que elijas. Después de la consulta gratuita recibes una cotización por escrito y detallada, sin costos ocultos.",
        },
        {
          q: "¿Cuánto tarda una remodelación de baño?",
          a: "Depende del alcance del trabajo y de los tiempos de entrega de los materiales. Tu diseñador te entrega un cronograma por escrito antes de empezar.",
        },
        {
          q: "¿Pueden remodelar solo el mueble de baño?",
          a: "Sí. Diseñamos e instalamos muebles de baño por separado o como parte de una remodelación completa.",
        },
        {
          q: "¿Qué materiales resisten la humedad?",
          a: "Tu diseñador recomienda cajas, acabados y herrajes resistentes a la humedad, adecuados para los baños de Florida.",
        },
        {
          q: "¿Se encargan de la plomería y los azulejos?",
          a: "Sí. Coordinamos la plomería y los azulejos con profesionales con licencia, para que tengas un solo contacto.",
        },
        {
          q: "¿Se puede cambiar una bañera por una ducha?",
          a: "Sí, es una solicitud frecuente. Tu diseño 3D muestra la nueva distribución antes de los trabajos.",
        },
      ],
    },
    areas: {
      nav: "Zonas",
      title: "Remodelación de baños en Tampa, Clearwater, St. Petersburg y Bradenton.",
      text: "Remodelamos baños en Tampa, Clearwater, St. Petersburg, Bradenton y las comunidades cercanas de Tampa Bay. Con cita, puedes ver muestras de acabados y encimeras en nuestra sala de exhibición, 19046 Bruce B Downs Blvd, Ste B6, Tampa.",
    },
    related: {
      title: "Ver también",
      otherService: "Remodelación de cocinas",
      otherServiceText: "Gabinetes a medida, islas y encimeras diseñados según tu forma de cocinar.",
      blog: "Nuestros consejos de remodelación",
      blogText: "Materiales, distribución e ideas para preparar tu proyecto.",
    },
    cta: {
      title: "Hablemos de tu nuevo baño.",
      text: "Seis preguntas rápidas, y un diseñador te llama en 24 horas hábiles para planear una visita gratuita a domicilio.",
      button: "Solicitar una cotización",
    },
    schema: {
      serviceType: "Remodelación de baños",
      description:
        "Diseño y remodelación de baños: muebles de baño a medida, duchas, bañeras, revestimientos y almacenamiento, del diseño 3D a la instalación.",
    },
  },
};
