import type { Locale } from "@/lib/i18n/config";

/** Body of an article: paragraphs, h2/h3 subheadings, lists, and links to the site's pages. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2" | "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "link"; text: string; href: string };

export type CategoryKey = "kitchen" | "bathroom" | "tips" | "materials" | "trends";

export const CATEGORIES: Record<Locale, Record<CategoryKey, string>> = {
  fr: {
    kitchen: "Rénovation de cuisines",
    bathroom: "Rénovation de salles de bain",
    tips: "Conseils de rénovation",
    materials: "Choix des matériaux",
    trends: "Aménagement et tendances",
  },
  en: {
    kitchen: "Kitchen renovation",
    bathroom: "Bathroom renovation",
    tips: "Renovation tips",
    materials: "Choosing materials",
    trends: "Layouts and trends",
  },
  es: {
    kitchen: "Remodelación de cocinas",
    bathroom: "Remodelación de baños",
    tips: "Consejos de remodelación",
    materials: "Elección de materiales",
    trends: "Distribución y tendencias",
  },
};

type PostText = { title: string; excerpt: string; coverAlt: string; body: Block[] };

export type RawPost = {
  slugs: Record<Locale, string>;
  category: CategoryKey;
  date: string;
  cover: string;
  text: Record<Locale, PostText>;
};

/**
 * Blog articles (specification §5). Informative advice written for the site: no project, figure or
 * testimonial is invented. Each article has its own address per language; links point to the service pages
 * and the quote form (internal linking). To add an article, add an entry; the blog, its categories, the
 * sitemap and the structured data follow.
 */
export const POSTS: RawPost[] = [
  {
    slugs: {
      fr: "etapes-renovation-de-cuisine",
      en: "kitchen-renovation-steps",
      es: "pasos-remodelacion-de-cocina",
    },
    category: "kitchen",
    date: "2026-11-10",
    cover: "/images/kitchen-renovation-white-island.webp",
    text: {
      fr: {
        title: "Rénovation de cuisine : les étapes à connaître avant de commencer",
        excerpt:
          "De la première visite à l’inspection finale, comment se déroule une rénovation de cuisine et ce que vous devez préparer à chaque étape.",
        coverAlt: "Cuisine rénovée avec îlot blanc et tabourets en bois",
        body: [
          {
            type: "p",
            text: "Rénover une cuisine demande de coordonner la conception, la fabrication des armoires et plusieurs corps de métier. Connaître les étapes à l’avance vous aide à prendre de meilleures décisions et à planifier la période des travaux.",
          },
          { type: "h2", text: "1. La consultation et les mesures" },
          {
            type: "p",
            text: "Tout commence par une visite à domicile. Le designer observe la pièce, prend les mesures et vous pose des questions sur votre façon de cuisiner, le nombre de personnes, ce que vous rangez et le budget que vous visez.",
          },
          {
            type: "ul",
            items: [
              "Notez ce qui ne fonctionne pas dans votre cuisine actuelle.",
              "Rassemblez quelques photos d’inspiration.",
              "Pensez aux électroménagers que vous gardez ou remplacez.",
            ],
          },
          { type: "h2", text: "2. Le design et la soumission" },
          {
            type: "p",
            text: "Le designer prépare un design en 2D et en 3D : disposition, armoires, comptoirs, éclairage. Vous le révisez ensemble et pouvez demander des retouches en temps réel. Une soumission écrite et détaillée accompagne le design.",
          },
          { type: "h2", text: "3. Le contrat et la préparation" },
          {
            type: "p",
            text: "Une fois le design approuvé, un contrat précise les matériaux, la portée des travaux et l’échéancier. Les permis sont obtenus lorsque le projet l’exige, et les armoires sont commandées selon vos mesures.",
          },
          { type: "h2", text: "4. Les travaux" },
          {
            type: "p",
            text: "Les travaux suivent l’échéancier : démolition au besoin, plomberie et électricité coordonnées avec des corps de métier certifiés, installation des armoires puis des comptoirs. Une seule équipe coordonne l’ensemble et vous tient informé.",
          },
          { type: "h2", text: "5. Les finitions et l’inspection finale" },
          {
            type: "p",
            text: "Les derniers ajustements, la quincaillerie et l’éclairage complètent la cuisine. Une inspection finale avec vous permet de vérifier chaque détail avant la remise.",
          },
          { type: "link", text: "Découvrir notre service de rénovation de cuisine", href: "/kitchen-renovation" },
        ],
      },
      en: {
        title: "Kitchen renovation: the steps to know before you start",
        excerpt:
          "From the first visit to the final inspection, how a kitchen renovation unfolds and what to prepare at each step.",
        coverAlt: "Renovated kitchen with a white island and wooden stools",
        body: [
          {
            type: "p",
            text: "Renovating a kitchen means coordinating the design, the cabinet production and several trades. Knowing the steps in advance helps you make better decisions and plan for the work period.",
          },
          { type: "h2", text: "1. Consultation and measurements" },
          {
            type: "p",
            text: "It all starts with an in-home visit. The designer looks at the room, takes measurements and asks about how you cook, how many people use the kitchen, what you store and the budget you have in mind.",
          },
          {
            type: "ul",
            items: [
              "Write down what doesn’t work in your current kitchen.",
              "Gather a few inspiration photos.",
              "Think about which appliances you keep or replace.",
            ],
          },
          { type: "h2", text: "2. Design and quote" },
          {
            type: "p",
            text: "The designer prepares a 2D and 3D design: layout, cabinets, countertops, lighting. You review it together and can request edits in real time. A detailed written quote comes with the design.",
          },
          { type: "h2", text: "3. Contract and preparation" },
          {
            type: "p",
            text: "Once the design is approved, a contract sets out the materials, the scope of work and the schedule. Permits are obtained when the project requires them, and the cabinets are ordered to your measurements.",
          },
          { type: "h2", text: "4. The work" },
          {
            type: "p",
            text: "The work follows the schedule: demolition if needed, plumbing and electrical coordinated with licensed trades, installation of the cabinets and then the countertops. One team coordinates everything and keeps you updated.",
          },
          { type: "h2", text: "5. Finishing touches and final inspection" },
          {
            type: "p",
            text: "Final adjustments, hardware and lighting complete the kitchen. A final inspection with you checks every detail before the handover.",
          },
          { type: "link", text: "Explore our kitchen renovation service", href: "/kitchen-renovation" },
        ],
      },
      es: {
        title: "Remodelación de cocina: los pasos que debes conocer antes de empezar",
        excerpt:
          "Desde la primera visita hasta la inspección final, cómo se desarrolla una remodelación de cocina y qué preparar en cada paso.",
        coverAlt: "Cocina remodelada con isla blanca y bancos de madera",
        body: [
          {
            type: "p",
            text: "Remodelar una cocina implica coordinar el diseño, la fabricación de los gabinetes y varios oficios. Conocer los pasos con anticipación te ayuda a tomar mejores decisiones y a planear el periodo de obra.",
          },
          { type: "h2", text: "1. La consulta y las medidas" },
          {
            type: "p",
            text: "Todo empieza con una visita a domicilio. El diseñador observa el espacio, toma las medidas y te pregunta cómo cocinas, cuántas personas usan la cocina, qué guardas y qué presupuesto tienes en mente.",
          },
          {
            type: "ul",
            items: [
              "Anota lo que no funciona en tu cocina actual.",
              "Reúne algunas fotos de inspiración.",
              "Piensa qué electrodomésticos conservas o cambias.",
            ],
          },
          { type: "h2", text: "2. El diseño y la cotización" },
          {
            type: "p",
            text: "El diseñador prepara un diseño en 2D y 3D: distribución, gabinetes, encimeras, iluminación. Lo revisan juntos y puedes pedir ajustes en tiempo real. Una cotización detallada por escrito acompaña el diseño.",
          },
          { type: "h2", text: "3. El contrato y la preparación" },
          {
            type: "p",
            text: "Una vez aprobado el diseño, un contrato define los materiales, el alcance del trabajo y el cronograma. Los permisos se tramitan cuando el proyecto lo requiere y los gabinetes se piden a tus medidas.",
          },
          { type: "h2", text: "4. Los trabajos" },
          {
            type: "p",
            text: "Los trabajos siguen el cronograma: demolición si es necesario, plomería y electricidad coordinadas con profesionales con licencia, instalación de los gabinetes y luego de las encimeras. Un solo equipo coordina todo y te mantiene informado.",
          },
          { type: "h2", text: "5. Los acabados y la inspección final" },
          {
            type: "p",
            text: "Los últimos ajustes, los herrajes y la iluminación completan la cocina. Una inspección final contigo verifica cada detalle antes de la entrega.",
          },
          { type: "link", text: "Conoce nuestro servicio de remodelación de cocinas", href: "/kitchen-renovation" },
        ],
      },
    },
  },
  {
    slugs: {
      fr: "optimiser-espace-petite-cuisine",
      en: "space-optimization-in-small-kitchens",
      es: "optimizar-espacio-cocina-pequena",
    },
    category: "trends",
    date: "2026-10-31",
    cover: "/images/small-kitchen-smart-storage.webp",
    text: {
      fr: {
        title: "Optimiser l’espace dans une petite cuisine",
        excerpt:
          "Rangements malins, électroménagers compacts et astuces d’éclairage pour tirer le meilleur d’une petite cuisine.",
        coverAlt: "Petite cuisine avec rangement intelligent et éclairage sous les armoires",
        body: [
          {
            type: "p",
            text: "Une petite cuisine peut être un défi, mais avec une bonne planification et quelques solutions créatives, elle peut être aussi fonctionnelle et belle qu’une grande. Voici des façons pratiques de tirer parti de chaque pouce.",
          },
          { type: "h2", text: "Des rangements intelligents" },
          {
            type: "ul",
            items: [
              "Rangement vertical : tablettes et barres murales libèrent comptoirs et armoires.",
              "Tiroirs et tablettes coulissants : on atteint tout au fond des armoires profondes.",
              "Armoires de coin : les plateaux tournants rendent les coins utiles.",
            ],
          },
          { type: "h2", text: "Des électroménagers compacts" },
          {
            type: "p",
            text: "Les réfrigérateurs étroits, les lave-vaisselle compacts et les fours micro-ondes combinés économisent une largeur précieuse sans sacrifier les fonctions essentielles.",
          },
          { type: "h2", text: "Une organisation sans encombrement" },
          {
            type: "p",
            text: "Des comptoirs dégagés agrandissent visuellement la pièce : rangez les petits électroménagers hors de vue et prévoyez une place pour chaque objet du quotidien.",
          },
          { type: "h2", text: "L’éclairage et la couleur" },
          {
            type: "p",
            text: "Des armoires et des murs pâles reflètent la lumière ; l’éclairage sous les armoires éclaire le plan de travail et donne de la profondeur.",
          },
          { type: "link", text: "Planifier une petite cuisine avec un designer", href: "/get-a-quote" },
        ],
      },
      en: {
        title: "Space optimization in small kitchens",
        excerpt: "Smart storage, compact appliances and lighting tricks that make a small kitchen work harder.",
        coverAlt: "Small kitchen with smart storage and under-cabinet lighting",
        body: [
          {
            type: "p",
            text: "A small kitchen can be challenging, but with careful planning and a few creative solutions, it can be as functional and beautiful as a large one. Here are practical ways to get the most out of every inch.",
          },
          { type: "h2", text: "Smart storage" },
          {
            type: "ul",
            items: [
              "Vertical storage: wall shelves and rails free up counters and cabinets.",
              "Pull-out shelves and drawers: reach everything at the back of deep cabinets.",
              "Corner cabinets: lazy Susans make corners usable.",
            ],
          },
          { type: "h2", text: "Compact appliances" },
          {
            type: "p",
            text: "Slim refrigerators, compact dishwashers and microwave–oven combos save precious width without giving up essential functions.",
          },
          { type: "h2", text: "Clutter-free organization" },
          {
            type: "p",
            text: "Clear countertops make the room feel larger: store small appliances out of sight and plan a place for every everyday item.",
          },
          { type: "h2", text: "Lighting and color" },
          {
            type: "p",
            text: "Pale cabinets and walls reflect light; under-cabinet lighting brightens the work surface and adds depth.",
          },
          { type: "link", text: "Plan a small kitchen with a designer", href: "/get-a-quote" },
        ],
      },
      es: {
        title: "Optimizar el espacio en una cocina pequeña",
        excerpt:
          "Almacenamiento inteligente, electrodomésticos compactos y trucos de iluminación para aprovechar una cocina pequeña.",
        coverAlt: "Cocina pequeña con almacenamiento inteligente e iluminación bajo los gabinetes",
        body: [
          {
            type: "p",
            text: "Una cocina pequeña puede ser un reto, pero con buena planeación y algunas soluciones creativas puede ser tan funcional y bonita como una grande. Estas son formas prácticas de aprovechar cada centímetro.",
          },
          { type: "h2", text: "Almacenamiento inteligente" },
          {
            type: "ul",
            items: [
              "Almacenamiento vertical: repisas y barras de pared liberan encimeras y gabinetes.",
              "Repisas y cajones extraíbles: alcanza todo al fondo de los gabinetes profundos.",
              "Gabinetes de esquina: los carruseles aprovechan las esquinas.",
            ],
          },
          { type: "h2", text: "Electrodomésticos compactos" },
          {
            type: "p",
            text: "Los refrigeradores delgados, los lavavajillas compactos y los hornos combinados ahorran un ancho valioso sin renunciar a lo esencial.",
          },
          { type: "h2", text: "Una organización sin desorden" },
          {
            type: "p",
            text: "Las encimeras despejadas agrandan visualmente el espacio: guarda los electrodomésticos pequeños fuera de la vista y prevé un lugar para cada objeto de uso diario.",
          },
          { type: "h2", text: "Iluminación y color" },
          {
            type: "p",
            text: "Los gabinetes y paredes claros reflejan la luz; la iluminación bajo los gabinetes ilumina la superficie de trabajo y da profundidad.",
          },
          { type: "link", text: "Planea una cocina pequeña con un diseñador", href: "/get-a-quote" },
        ],
      },
    },
  },
  {
    slugs: {
      fr: "salle-de-bain-humidite-floride",
      en: "bathroom-humidity-florida",
      es: "bano-humedad-florida",
    },
    category: "bathroom",
    date: "2026-10-20",
    cover: "/images/bathroom-renovation-floating-vanity.webp",
    text: {
      fr: {
        title: "Rénover une salle de bain en Floride : bien gérer l’humidité",
        excerpt:
          "Ventilation, matériaux et étanchéité : les choix qui font durer une salle de bain dans un climat humide.",
        coverAlt: "Salle de bain moderne avec meuble-lavabo suspendu et miroirs ronds",
        body: [
          {
            type: "p",
            text: "En Floride, l’humidité ne se limite pas à la douche : elle est présente toute l’année. Une salle de bain bien conçue en tient compte dès le départ, dans le choix des matériaux comme dans la ventilation.",
          },
          { type: "h2", text: "Choisir des matériaux adaptés" },
          {
            type: "p",
            text: "Les caissons, les finitions et la quincaillerie du meuble-lavabo doivent supporter la vapeur et les éclaboussures. Votre designer recommande des matériaux résistants à l’humidité et vous montre des échantillons.",
          },
          { type: "h2", text: "Ventiler correctement" },
          {
            type: "p",
            text: "Une bonne ventilation évacue la vapeur après la douche, limite la condensation et protège les meubles et les joints.",
          },
          { type: "h2", text: "Soigner l’étanchéité de la douche" },
          {
            type: "p",
            text: "Sous le carrelage, l’étanchéité protège la structure. Elle est réalisée par des corps de métier spécialisés et ne doit jamais être négligée.",
          },
          { type: "h2", text: "Prévoir l’entretien" },
          {
            type: "ul",
            items: [
              "Des surfaces faciles à nettoyer.",
              "Des joints et un carrelage adaptés à l’usage.",
              "Un rangement fermé pour protéger les produits et les serviettes.",
            ],
          },
          {
            type: "link",
            text: "Découvrir notre service de rénovation de salle de bain",
            href: "/bathroom-renovation",
          },
        ],
      },
      en: {
        title: "Renovating a bathroom in Florida: managing humidity",
        excerpt: "Ventilation, materials and waterproofing: the choices that make a bathroom last in a humid climate.",
        coverAlt: "Modern bathroom with a floating vanity and round mirrors",
        body: [
          {
            type: "p",
            text: "In Florida, humidity isn’t limited to the shower: it’s there all year long. A well-designed bathroom takes it into account from the start, in the choice of materials as well as in ventilation.",
          },
          { type: "h2", text: "Choose suitable materials" },
          {
            type: "p",
            text: "The vanity’s boxes, finishes and hardware have to withstand steam and splashes. Your designer recommends moisture-resistant materials and shows you samples.",
          },
          { type: "h2", text: "Ventilate properly" },
          {
            type: "p",
            text: "Good ventilation removes steam after a shower, limits condensation and protects the cabinetry and joints.",
          },
          { type: "h2", text: "Take care of shower waterproofing" },
          {
            type: "p",
            text: "Under the tile, waterproofing protects the structure. It is done by specialized trades and should never be overlooked.",
          },
          { type: "h2", text: "Plan for upkeep" },
          {
            type: "ul",
            items: [
              "Easy-to-clean surfaces.",
              "Grout and tile suited to the use.",
              "Closed storage to protect products and towels.",
            ],
          },
          { type: "link", text: "Explore our bathroom renovation service", href: "/bathroom-renovation" },
        ],
      },
      es: {
        title: "Remodelar un baño en Florida: cómo manejar la humedad",
        excerpt:
          "Ventilación, materiales e impermeabilización: las decisiones que hacen durar un baño en un clima húmedo.",
        coverAlt: "Baño moderno con mueble flotante y espejos redondos",
        body: [
          {
            type: "p",
            text: "En Florida, la humedad no se limita a la ducha: está presente todo el año. Un baño bien diseñado la tiene en cuenta desde el principio, tanto en la elección de materiales como en la ventilación.",
          },
          { type: "h2", text: "Elegir materiales adecuados" },
          {
            type: "p",
            text: "Las cajas, los acabados y los herrajes del mueble de baño deben resistir el vapor y las salpicaduras. Tu diseñador recomienda materiales resistentes a la humedad y te muestra muestras.",
          },
          { type: "h2", text: "Ventilar correctamente" },
          {
            type: "p",
            text: "Una buena ventilación elimina el vapor después de la ducha, limita la condensación y protege los muebles y las juntas.",
          },
          { type: "h2", text: "Cuidar la impermeabilización de la ducha" },
          {
            type: "p",
            text: "Bajo el azulejo, la impermeabilización protege la estructura. La realizan oficios especializados y nunca debe descuidarse.",
          },
          { type: "h2", text: "Prever el mantenimiento" },
          {
            type: "ul",
            items: [
              "Superficies fáciles de limpiar.",
              "Juntas y azulejos adecuados al uso.",
              "Almacenamiento cerrado para proteger productos y toallas.",
            ],
          },
          { type: "link", text: "Conoce nuestro servicio de remodelación de baños", href: "/bathroom-renovation" },
        ],
      },
    },
  },
  {
    slugs: {
      fr: "quartz-granit-marbre-comptoir",
      en: "quartz-granite-marble-countertops",
      es: "cuarzo-granito-marmol-encimeras",
    },
    category: "materials",
    date: "2026-10-08",
    cover: "/images/kitchen-countertop-quartz.webp",
    text: {
      fr: {
        title: "Quartz, granit ou marbre : quel comptoir choisir ?",
        excerpt:
          "Apparence, entretien et usage : comparer les trois matériaux de comptoir les plus demandés pour une cuisine ou une salle de bain.",
        coverAlt: "Îlot de cuisine avec comptoir en pierre veinée",
        body: [
          {
            type: "p",
            text: "Le comptoir est l’une des surfaces les plus sollicitées d’une cuisine ou d’une salle de bain. Le choix du matériau dépend de l’apparence recherchée, de l’entretien que vous acceptez et de l’usage quotidien.",
          },
          { type: "h2", text: "Le quartz" },
          {
            type: "p",
            text: "Le quartz est peu poreux et facile d’entretien. Son apparence est régulière, avec un large choix de couleurs et de motifs, ce qui facilite l’harmonisation avec les armoires.",
          },
          { type: "h2", text: "Le granit" },
          {
            type: "p",
            text: "Pierre naturelle, le granit offre des motifs uniques et une bonne résistance à l’usage. Chaque dalle est différente : il vaut mieux voir la pièce avant de la choisir.",
          },
          { type: "h2", text: "Le marbre" },
          {
            type: "p",
            text: "Le marbre apporte des veines naturelles élégantes. Plus sensible aux taches et aux rayures, il demande davantage de soin et convient bien aux zones moins sollicitées.",
          },
          { type: "h2", text: "Comment décider" },
          {
            type: "ul",
            items: [
              "Pensez à l’usage : cuisine très utilisée ou salle de bain d’invités.",
              "Voyez des échantillons à la lumière de votre pièce.",
              "Demandez à votre designer comment le comptoir s’accorde avec les armoires.",
            ],
          },
          {
            type: "p",
            text: "Pour un ajustement exact, les gabarits du comptoir sont pris sur place une fois les armoires installées.",
          },
          { type: "link", text: "Voir nos matériaux et finitions de cuisine", href: "/kitchen-renovation#materiaux" },
        ],
      },
      en: {
        title: "Quartz, granite or marble: which countertop should you choose?",
        excerpt:
          "Look, upkeep and use: comparing the three most requested countertop materials for a kitchen or bathroom.",
        coverAlt: "Kitchen island with a veined stone countertop",
        body: [
          {
            type: "p",
            text: "The countertop is one of the hardest-working surfaces in a kitchen or bathroom. The right material depends on the look you want, the upkeep you accept and everyday use.",
          },
          { type: "h2", text: "Quartz" },
          {
            type: "p",
            text: "Quartz is low-porosity and easy to maintain. Its look is consistent, with a wide choice of colors and patterns, which makes it easy to match with the cabinets.",
          },
          { type: "h2", text: "Granite" },
          {
            type: "p",
            text: "A natural stone, granite offers unique patterns and good resistance to use. Every slab is different: it’s best to see the piece before choosing it.",
          },
          { type: "h2", text: "Marble" },
          {
            type: "p",
            text: "Marble brings elegant natural veining. More sensitive to stains and scratches, it needs more care and suits less heavily used areas well.",
          },
          { type: "h2", text: "How to decide" },
          {
            type: "ul",
            items: [
              "Think about use: a busy kitchen or a guest bathroom.",
              "Look at samples in your room’s light.",
              "Ask your designer how the countertop works with the cabinets.",
            ],
          },
          {
            type: "p",
            text: "For an exact fit, countertop templates are taken on site once the cabinets are installed.",
          },
          { type: "link", text: "See our kitchen materials and finishes", href: "/kitchen-renovation#materials" },
        ],
      },
      es: {
        title: "Cuarzo, granito o mármol: ¿qué encimera elegir?",
        excerpt:
          "Aspecto, mantenimiento y uso: comparamos los tres materiales de encimera más solicitados para una cocina o un baño.",
        coverAlt: "Isla de cocina con encimera de piedra veteada",
        body: [
          {
            type: "p",
            text: "La encimera es una de las superficies más exigidas de una cocina o un baño. El material adecuado depende del aspecto que buscas, del mantenimiento que aceptas y del uso diario.",
          },
          { type: "h2", text: "El cuarzo" },
          {
            type: "p",
            text: "El cuarzo es poco poroso y fácil de mantener. Su aspecto es uniforme, con una amplia variedad de colores y diseños, lo que facilita combinarlo con los gabinetes.",
          },
          { type: "h2", text: "El granito" },
          {
            type: "p",
            text: "Piedra natural, el granito ofrece diseños únicos y buena resistencia al uso. Cada losa es diferente: conviene ver la pieza antes de elegirla.",
          },
          { type: "h2", text: "El mármol" },
          {
            type: "p",
            text: "El mármol aporta vetas naturales elegantes. Más sensible a manchas y rayones, requiere más cuidado y funciona bien en zonas de menor uso.",
          },
          { type: "h2", text: "Cómo decidir" },
          {
            type: "ul",
            items: [
              "Piensa en el uso: una cocina muy utilizada o un baño de visitas.",
              "Mira las muestras con la luz de tu espacio.",
              "Pregunta a tu diseñador cómo combina la encimera con los gabinetes.",
            ],
          },
          {
            type: "p",
            text: "Para un ajuste exacto, las plantillas de la encimera se toman en sitio una vez instalados los gabinetes.",
          },
          {
            type: "link",
            text: "Ver nuestros materiales y acabados de cocina",
            href: "/kitchen-renovation#materiales",
          },
        ],
      },
    },
  },
  {
    slugs: {
      fr: "baignoire-ou-douche",
      en: "bathtub-or-shower",
      es: "banera-o-ducha",
    },
    category: "bathroom",
    date: "2026-09-26",
    cover: "/images/bathroom-freestanding-tub.webp",
    text: {
      fr: {
        title: "Baignoire ou douche : que choisir pour votre salle de bain ?",
        excerpt:
          "Espace, usage, accessibilité et entretien : les questions à se poser avant de garder la baignoire ou de passer à la douche.",
        coverAlt: "Salle de bain avec baignoire autoportante et grande fenêtre",
        body: [
          {
            type: "p",
            text: "Remplacer une baignoire par une douche est l’une des demandes les plus fréquentes en rénovation de salle de bain. Mais le bon choix dépend de votre espace et de votre façon d’utiliser la pièce.",
          },
          { type: "h2", text: "Partir de l’usage réel" },
          {
            type: "p",
            text: "Si la baignoire sert rarement, l’espace qu’elle occupe peut devenir une douche plus spacieuse et plus confortable. Si vous avez de jeunes enfants ou aimez prendre des bains, la garder peut rester le meilleur choix.",
          },
          { type: "h2", text: "Penser à l’accessibilité" },
          {
            type: "p",
            text: "Une douche sans seuil ou avec un seuil bas facilite l’accès au quotidien, aujourd’hui comme dans les années à venir.",
          },
          { type: "h2", text: "Considérer l’espace et la plomberie" },
          {
            type: "p",
            text: "La position des drains et des alimentations influence la disposition. Les conserver limite les travaux ; les déplacer donne plus de liberté.",
          },
          { type: "h2", text: "Et pourquoi pas les deux ?" },
          {
            type: "p",
            text: "Dans une grande salle de bain principale, une douche séparée et une baignoire autoportante peuvent cohabiter. Votre design 3D montre ce que l’espace permet.",
          },
          { type: "link", text: "Planifier votre salle de bain avec un designer", href: "/get-a-quote" },
        ],
      },
      en: {
        title: "Bathtub or shower: which is right for your bathroom?",
        excerpt:
          "Space, use, accessibility and upkeep: the questions to ask before keeping the tub or switching to a shower.",
        coverAlt: "Bathroom with a freestanding bathtub and a large window",
        body: [
          {
            type: "p",
            text: "Replacing a bathtub with a shower is one of the most common bathroom renovation requests. But the right choice depends on your space and how you use the room.",
          },
          { type: "h2", text: "Start from real use" },
          {
            type: "p",
            text: "If the tub is rarely used, its space can become a roomier, more comfortable shower. If you have young children or enjoy baths, keeping it may still be the best choice.",
          },
          { type: "h2", text: "Think about accessibility" },
          {
            type: "p",
            text: "A curbless or low-threshold shower makes daily access easier, now and in the years to come.",
          },
          { type: "h2", text: "Consider the space and plumbing" },
          {
            type: "p",
            text: "The position of the drains and supply lines shapes the layout. Keeping them limits the work; moving them gives more freedom.",
          },
          { type: "h2", text: "Why not both?" },
          {
            type: "p",
            text: "In a large primary bathroom, a separate shower and a freestanding tub can live side by side. Your 3D design shows what the space allows.",
          },
          { type: "link", text: "Plan your bathroom with a designer", href: "/get-a-quote" },
        ],
      },
      es: {
        title: "Bañera o ducha: ¿qué elegir para tu baño?",
        excerpt:
          "Espacio, uso, accesibilidad y mantenimiento: las preguntas que conviene hacerse antes de conservar la bañera o cambiarla por una ducha.",
        coverAlt: "Baño con bañera independiente y una gran ventana",
        body: [
          {
            type: "p",
            text: "Cambiar una bañera por una ducha es una de las solicitudes más frecuentes en la remodelación de baños. Pero la decisión correcta depende de tu espacio y de cómo usas el baño.",
          },
          { type: "h2", text: "Partir del uso real" },
          {
            type: "p",
            text: "Si la bañera se usa poco, su espacio puede convertirse en una ducha más amplia y cómoda. Si tienes niños pequeños o te gustan los baños de tina, conservarla puede seguir siendo la mejor opción.",
          },
          { type: "h2", text: "Pensar en la accesibilidad" },
          {
            type: "p",
            text: "Una ducha sin escalón o con un escalón bajo facilita el acceso diario, hoy y en los años por venir.",
          },
          { type: "h2", text: "Considerar el espacio y la plomería" },
          {
            type: "p",
            text: "La ubicación de los desagües y las tomas define la distribución. Conservarlos limita los trabajos; moverlos da más libertad.",
          },
          { type: "h2", text: "¿Y por qué no ambos?" },
          {
            type: "p",
            text: "En un baño principal amplio, una ducha separada y una bañera independiente pueden convivir. Tu diseño 3D muestra lo que permite el espacio.",
          },
          { type: "link", text: "Planea tu baño con un diseñador", href: "/get-a-quote" },
        ],
      },
    },
  },
  {
    slugs: {
      fr: "preparer-maison-renovation",
      en: "prepare-home-for-renovation",
      es: "preparar-casa-remodelacion",
    },
    category: "tips",
    date: "2026-09-12",
    cover: "/images/kitchen-renovation-open-plan.webp",
    text: {
      fr: {
        title: "Comment préparer votre maison pour une rénovation",
        excerpt:
          "Vider la pièce, organiser le quotidien pendant les travaux et bien communiquer avec l’équipe : nos conseils pour une rénovation plus sereine.",
        coverAlt: "Cuisine ouverte rénovée avec armoires en bois et îlot",
        body: [
          {
            type: "p",
            text: "Une rénovation de cuisine ou de salle de bain change le quotidien pendant quelques semaines. Un peu de préparation rend la période des travaux beaucoup plus simple.",
          },
          { type: "h2", text: "Vider et protéger la pièce" },
          {
            type: "p",
            text: "Retirez les objets, la vaisselle et les produits de la pièce avant le début des travaux. Pensez aussi aux pièces voisines : les objets fragiles sont mieux rangés ailleurs.",
          },
          { type: "h2", text: "Organiser le quotidien" },
          {
            type: "ul",
            items: [
              "Pour une cuisine : installez un coin repas temporaire avec un micro-ondes et une cafetière.",
              "Pour une salle de bain : planifiez l’usage d’une autre salle de bain de la maison.",
              "Prévoyez l’accès des équipes et la place pour les livraisons.",
            ],
          },
          { type: "h2", text: "Suivre l’échéancier" },
          {
            type: "p",
            text: "Votre designer vous remet un échéancier écrit avant le début des travaux. Il vous permet de prévoir les étapes qui demandent votre présence ou une décision.",
          },
          { type: "h2", text: "Garder un seul interlocuteur" },
          {
            type: "p",
            text: "Avec une équipe qui coordonne l’ensemble des métiers, vous savez toujours qui appeler. Notez vos questions au fur et à mesure et posez-les à votre designer.",
          },
          { type: "link", text: "Demander une soumission", href: "/get-a-quote" },
        ],
      },
      en: {
        title: "How to prepare your home for a renovation",
        excerpt:
          "Emptying the room, organizing daily life during the work and communicating well with the team: our tips for a smoother renovation.",
        coverAlt: "Renovated open-plan kitchen with wood cabinets and an island",
        body: [
          {
            type: "p",
            text: "A kitchen or bathroom renovation changes daily life for a few weeks. A little preparation makes the work period much easier.",
          },
          { type: "h2", text: "Empty and protect the room" },
          {
            type: "p",
            text: "Remove items, dishes and products from the room before the work begins. Think about the neighboring rooms too: fragile items are better stored elsewhere.",
          },
          { type: "h2", text: "Organize daily life" },
          {
            type: "ul",
            items: [
              "For a kitchen: set up a temporary dining corner with a microwave and a coffee maker.",
              "For a bathroom: plan to use another bathroom in the house.",
              "Plan access for the crews and space for deliveries.",
            ],
          },
          { type: "h2", text: "Follow the schedule" },
          {
            type: "p",
            text: "Your designer gives you a written schedule before work begins. It helps you anticipate the steps that need your presence or a decision.",
          },
          { type: "h2", text: "Keep one point of contact" },
          {
            type: "p",
            text: "With a team that coordinates all the trades, you always know who to call. Write down your questions as they come and ask your designer.",
          },
          { type: "link", text: "Request a quote", href: "/get-a-quote" },
        ],
      },
      es: {
        title: "Cómo preparar tu casa para una remodelación",
        excerpt:
          "Vaciar el espacio, organizar el día a día durante la obra y comunicarte bien con el equipo: nuestros consejos para una remodelación más tranquila.",
        coverAlt: "Cocina abierta remodelada con gabinetes de madera e isla",
        body: [
          {
            type: "p",
            text: "Una remodelación de cocina o de baño cambia el día a día durante algunas semanas. Un poco de preparación hace mucho más fácil el periodo de obra.",
          },
          { type: "h2", text: "Vaciar y proteger el espacio" },
          {
            type: "p",
            text: "Retira los objetos, la vajilla y los productos del espacio antes de empezar. Piensa también en los espacios vecinos: los objetos frágiles están mejor guardados en otro lugar.",
          },
          { type: "h2", text: "Organizar el día a día" },
          {
            type: "ul",
            items: [
              "Para una cocina: instala un rincón de comida temporal con microondas y cafetera.",
              "Para un baño: planea usar otro baño de la casa.",
              "Prevé el acceso de los equipos y espacio para las entregas.",
            ],
          },
          { type: "h2", text: "Seguir el cronograma" },
          {
            type: "p",
            text: "Tu diseñador te entrega un cronograma por escrito antes de empezar. Te ayuda a anticipar los pasos que requieren tu presencia o una decisión.",
          },
          { type: "h2", text: "Mantener un solo contacto" },
          {
            type: "p",
            text: "Con un equipo que coordina todos los oficios, siempre sabes a quién llamar. Anota tus preguntas a medida que surjan y plantéaselas a tu diseñador.",
          },
          { type: "link", text: "Solicitar una cotización", href: "/get-a-quote" },
        ],
      },
    },
  },
];

export type Post = Omit<RawPost, "text"> & PostText & { slug: string; categoryLabel: string; readMinutes: number };

const words = (b: Block[]) =>
  b.reduce((n, x) => n + ("items" in x ? x.items.join(" ") : x.text).split(/\s+/).length, 0);

/** Articles in one language, newest first. */
export function getPosts(lang: Locale): Post[] {
  return [...POSTS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => ({
      ...p,
      ...p.text[lang],
      slug: p.slugs[lang],
      categoryLabel: CATEGORIES[lang][p.category],
      readMinutes: Math.max(2, Math.round(words(p.text[lang].body) / 200)),
    }));
}

/** The article for a slug in a language (or the slug of another language, to redirect). */
export function findPost(lang: Locale, slug: string): { post: Post; redirectTo?: string } | null {
  const raw = POSTS.find((p) => Object.values(p.slugs).includes(slug));
  if (!raw) return null;
  const post = getPosts(lang).find((p) => p.slugs === raw.slugs)!;
  return post.slug === slug ? { post } : { post, redirectTo: post.slug };
}
