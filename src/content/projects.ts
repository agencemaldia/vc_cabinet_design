import type { Locale } from "@/lib/i18n/config";
import type { ProjectLabels } from "./service-types";

type ProjectText = {
  title: string;
  location: string;
  context: string;
  needs: string;
  initial: string;
  work: string;
  materials: string;
  methods: string;
  result: string;
};

export type Project = {
  id: string;
  service: "kitchen" | "bathroom";
  /** Placeholder project: shown with a "sample content" badge until the client's real project replaces it. */
  draft: boolean;
  before: string;
  after: string;
  /** Demo pair: the "before" is the "after" photo, desaturated, until real before/after photos arrive. */
  demo: boolean;
  text: Record<Locale, ProjectText>;
};

/**
 * Realized projects (specification §3 and §4): a before/after pair plus the seven facts of the job.
 *
 * The four pairs below are AI-generated illustrations (same room before/after) and their text describes what the
 * images show — no client, city or date is invented. They stay marked "Sample content" (`draft: true`) until the
 * client's real projects replace them (photos from the same angle, real facts, then `draft: false`).
 */
const K1: Record<Locale, ProjectText> = {
  fr: {
    title: "Cuisine blanche avec grand îlot",
    location: "Cuisine en L · îlot central",
    context:
      "Cuisine en L d’une maison familiale, ouverte sur la cour : refonte complète des armoires, des comptoirs et des électroménagers.",
    needs: "Une cuisine claire et facile d’entretien, plus de rangement et un îlot pour manger à trois.",
    initial:
      "Armoires en chêne foncé, comptoirs stratifiés, électroménagers crème dépareillés, plancher de vinyle et un seul plafonnier.",
    work: "Démolition, armoires jusqu’au plafond, îlot central, nouveaux dosseret, plancher et éclairage.",
    materials:
      "Armoires shaker blanches, comptoirs de quartz effet marbre, dosseret en carreaux métro, plancher de bois clair.",
    methods:
      "Réfrigérateur encastré entre deux colonnes, hotte murale au-dessus de la cuisinière, suspensions au-dessus de l’îlot et éclairage sous les armoires.",
    result: "Une pièce lumineuse, plus de surface de travail et un îlot qui devient le centre de la maison.",
  },
  en: {
    title: "White kitchen with a large island",
    location: "L-shaped kitchen · central island",
    context:
      "L-shaped kitchen of a family home, open to the yard: cabinets, countertops and appliances fully redone.",
    needs: "A bright, easy-care kitchen, more storage and an island where three can eat.",
    initial:
      "Dark oak cabinets, laminate countertops, mismatched cream appliances, vinyl floor and a single ceiling light.",
    work: "Demolition, cabinets up to the ceiling, central island, new backsplash, floor and lighting.",
    materials: "White shaker cabinets, marble-look quartz countertops, subway-tile backsplash, light wood floor.",
    methods:
      "Fridge built in between two tall units, wall hood over the range, pendants over the island and under-cabinet lighting.",
    result: "A bright room, more work surface and an island that became the heart of the home.",
  },
  es: {
    title: "Cocina blanca con gran isla",
    location: "Cocina en L · isla central",
    context:
      "Cocina en L de una casa familiar, abierta al jardín: gabinetes, encimeras y electrodomésticos renovados por completo.",
    needs: "Una cocina luminosa y fácil de mantener, más almacenamiento y una isla para comer tres personas.",
    initial:
      "Gabinetes de roble oscuro, encimeras laminadas, electrodomésticos crema dispares, piso de vinilo y una sola lámpara de techo.",
    work: "Demolición, gabinetes hasta el techo, isla central, nuevos salpicadero, piso e iluminación.",
    materials:
      "Gabinetes shaker blancos, encimeras de cuarzo efecto mármol, salpicadero de azulejo tipo metro, piso de madera clara.",
    methods:
      "Refrigerador empotrado entre dos columnas, campana de pared sobre la estufa, lámparas colgantes sobre la isla e iluminación bajo los gabinetes.",
    result: "Un espacio luminoso, más superficie de trabajo y una isla que se volvió el centro de la casa.",
  },
};

const K2: Record<Locale, ProjectText> = {
  fr: {
    title: "Cuisine deux tons, vert et blanc",
    location: "Cuisine en L · îlot vert",
    context: "Cuisine sombre transformée en pièce lumineuse, avec un îlot de couleur comme point fort.",
    needs:
      "Sortir du bois foncé, garder du caractère avec la couleur et ajouter des tablettes ouvertes pour la vaisselle de tous les jours.",
    initial:
      "Armoires acajou très foncées, comptoirs de granit noir, électroménagers noirs, dosseret beige et néon au plafond.",
    work: "Nouvelles armoires et comptoirs, îlot neuf, tablettes ouvertes en coin, plancher, dosseret et éclairage.",
    materials:
      "Armoires du haut blanches, bas et îlot vert forêt, quincaillerie laiton, quartz effet marbre, tablettes de chêne.",
    methods:
      "Deux tons pour alléger la pièce, tablettes d’angle à la place d’un coin perdu, robinet laiton assorti à la quincaillerie.",
    result: "Une cuisine chaleureuse et claire, avec plus de rangement et une vraie personnalité.",
  },
  en: {
    title: "Two-tone kitchen, green and white",
    location: "L-shaped kitchen · green island",
    context: "A dark kitchen turned into a bright room, with a coloured island as its focal point.",
    needs: "Move away from dark wood, keep character with colour and add open shelves for everyday dishes.",
    initial:
      "Very dark mahogany cabinets, black granite countertops, black appliances, beige backsplash and a fluorescent ceiling light.",
    work: "New cabinets and countertops, new island, open corner shelves, floor, backsplash and lighting.",
    materials: "White upper cabinets, forest-green lowers and island, brass hardware, marble-look quartz, oak shelves.",
    methods: "Two tones to lighten the room, corner shelves instead of a dead corner, brass faucet matching the hardware.",
    result: "A warm, bright kitchen with more storage and real personality.",
  },
  es: {
    title: "Cocina bicolor, verde y blanca",
    location: "Cocina en L · isla verde",
    context: "Una cocina oscura convertida en un espacio luminoso, con una isla de color como punto focal.",
    needs: "Dejar la madera oscura, mantener carácter con el color y añadir repisas abiertas para la vajilla diaria.",
    initial:
      "Gabinetes de caoba muy oscuros, encimeras de granito negro, electrodomésticos negros, salpicadero beige y luz fluorescente.",
    work: "Gabinetes y encimeras nuevos, isla nueva, repisas abiertas en la esquina, piso, salpicadero e iluminación.",
    materials:
      "Gabinetes superiores blancos, inferiores e isla verde bosque, herrajes de latón, cuarzo efecto mármol, repisas de roble.",
    methods:
      "Dos tonos para aligerar el espacio, repisas de esquina en lugar de un rincón perdido, grifo de latón a juego con los herrajes.",
    result: "Una cocina cálida y luminosa, con más almacenamiento y verdadera personalidad.",
  },
};

const B1: Record<Locale, ProjectText> = {
  fr: {
    title: "Salle de bain avec douche à l’italienne",
    location: "Salle de bain principale · double vasque",
    context:
      "Salle de bain principale : la baignoire-douche laisse place à une grande douche vitrée et à un meuble double.",
    needs: "Une douche sans rebord, deux lavabos pour le matin et une pièce moderne, facile à nettoyer.",
    initial:
      "Meuble-lavabo en chêne, comptoir en marbre synthétique, baignoire-douche avec rideau, céramique beige et rampe d’ampoules.",
    work: "Démolition, douche à l’italienne avec paroi de verre, meuble suspendu, plomberie, céramique et éclairage.",
    materials:
      "Meuble suspendu en chêne clair, comptoir de quartz blanc, vasques à poser, grands carreaux gris, robinetterie noire mate.",
    methods:
      "Drain linéaire et pente intégrée, niche éclairée dans la douche, miroir rétroéclairé à la place de la rampe d’ampoules.",
    result: "Une salle de bain lumineuse et dégagée, plus simple à entretenir et pensée pour deux.",
  },
  en: {
    title: "Bathroom with a curbless shower",
    location: "Main bathroom · double vanity",
    context: "Main bathroom: the tub-shower makes way for a large glass shower and a double vanity.",
    needs: "A curbless shower, two sinks for busy mornings and a modern room that is easy to clean.",
    initial: "Oak vanity, cultured-marble top, tub-shower with curtain, beige tile and a bulb strip light.",
    work: "Demolition, curbless shower with glass panel, wall-hung vanity, plumbing, tile and lighting.",
    materials: "Light-oak wall-hung vanity, white quartz top, vessel sinks, large grey tile, matte black fixtures.",
    methods: "Linear drain and built-in slope, lit niche in the shower, backlit mirror instead of the bulb strip.",
    result: "A bright, open bathroom, easier to maintain and designed for two.",
  },
  es: {
    title: "Baño con ducha a ras de suelo",
    location: "Baño principal · doble lavabo",
    context: "Baño principal: la bañera-ducha deja lugar a una gran ducha de vidrio y a un mueble doble.",
    needs: "Una ducha sin bordillo, dos lavabos para las mañanas y un baño moderno, fácil de limpiar.",
    initial:
      "Mueble de roble, encimera de mármol sintético, bañera-ducha con cortina, azulejo beige y regleta de focos.",
    work: "Demolición, ducha a ras de suelo con panel de vidrio, mueble suspendido, plomería, azulejos e iluminación.",
    materials:
      "Mueble suspendido de roble claro, encimera de cuarzo blanco, lavabos sobre encimera, azulejo gris grande, grifería negra mate.",
    methods:
      "Desagüe lineal y pendiente integrada, nicho iluminado en la ducha, espejo retroiluminado en lugar de la regleta.",
    result: "Un baño luminoso y despejado, más fácil de mantener y pensado para dos.",
  },
};

const B2: Record<Locale, ProjectText> = {
  fr: {
    title: "Salle de bain zen avec bain autoportant",
    location: "Salle de bain · bain autoportant",
    context: "Salle de bain des années 80 entièrement refaite autour d’un bain autoportant et d’une céramique verte.",
    needs: "En finir avec le rose, profiter du bain dans une pièce calme et gagner du rangement près du lavabo.",
    initial:
      "Céramique rose jusqu’à mi-mur, bain encastré rose, meuble blanc usé, robinetterie laiton et plancher de vinyle.",
    work: "Démolition, bain autoportant, meuble suspendu, céramique murale et plancher, plomberie et éclairage.",
    materials:
      "Meuble en noyer, comptoir de quartz, carreaux verts posés à la verticale, plancher terrazzo, robinetterie noire.",
    methods: "Robinet de bain sur pied, niche éclairée au-dessus du bain, appliques de chaque côté du miroir rond.",
    result: "Une pièce chaleureuse et apaisante, avec plus de rangement et un vrai coin bain.",
  },
  en: {
    title: "Calm bathroom with a freestanding tub",
    location: "Bathroom · freestanding tub",
    context: "An 80s bathroom fully redone around a freestanding tub and green tile.",
    needs: "Say goodbye to the pink, enjoy baths in a calm room and gain storage near the sink.",
    initial: "Pink tile up to mid-wall, built-in pink tub, worn white vanity, brass fixtures and vinyl floor.",
    work: "Demolition, freestanding tub, wall-hung vanity, wall and floor tile, plumbing and lighting.",
    materials: "Walnut vanity, quartz top, vertically laid green tile, terrazzo floor, black fixtures.",
    methods: "Floor-mounted tub filler, lit niche above the tub, sconces on each side of the round mirror.",
    result: "A warm, soothing room with more storage and a real bath corner.",
  },
  es: {
    title: "Baño sereno con bañera exenta",
    location: "Baño · bañera exenta",
    context: "Un baño de los años 80 renovado por completo alrededor de una bañera exenta y azulejo verde.",
    needs: "Despedirse del rosa, disfrutar del baño en un espacio tranquilo y ganar almacenamiento junto al lavabo.",
    initial:
      "Azulejo rosa hasta media pared, bañera empotrada rosa, mueble blanco gastado, grifería de latón y piso de vinilo.",
    work: "Demolición, bañera exenta, mueble suspendido, azulejo de pared y piso, plomería e iluminación.",
    materials: "Mueble de nogal, encimera de cuarzo, azulejo verde colocado en vertical, piso de terrazo, grifería negra.",
    methods: "Grifo de bañera de pie, nicho iluminado sobre la bañera, apliques a cada lado del espejo redondo.",
    result: "Un espacio cálido y relajante, con más almacenamiento y un verdadero rincón de baño.",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "kitchen-1",
    service: "kitchen",
    draft: true,
    demo: false,
    before: "/images/project-kitchen-1-before.webp",
    after: "/images/project-kitchen-1-after.webp",
    text: K1,
  },
  {
    id: "kitchen-2",
    service: "kitchen",
    draft: true,
    demo: false,
    before: "/images/project-kitchen-2-before.webp",
    after: "/images/project-kitchen-2-after.webp",
    text: K2,
  },
  {
    id: "bathroom-1",
    service: "bathroom",
    draft: true,
    demo: false,
    before: "/images/project-bathroom-1-before.webp",
    after: "/images/project-bathroom-1-after.webp",
    text: B1,
  },
  {
    id: "bathroom-2",
    service: "bathroom",
    draft: true,
    demo: false,
    before: "/images/project-bathroom-2-before.webp",
    after: "/images/project-bathroom-2-after.webp",
    text: B2,
  },
];

export const PROJECT_LABELS: Record<Locale, ProjectLabels> = {
  fr: {
    context: "Présentation",
    needs: "Besoins du client",
    initial: "État initial",
    work: "Travaux effectués",
    materials: "Matériaux",
    methods: "Méthodes et solutions",
    result: "Résultat",
  },
  en: {
    context: "Overview",
    needs: "Client’s needs",
    initial: "Original state",
    work: "Work carried out",
    materials: "Materials",
    methods: "Methods and solutions",
    result: "Result",
  },
  es: {
    context: "Presentación",
    needs: "Necesidades del cliente",
    initial: "Estado inicial",
    work: "Trabajos realizados",
    materials: "Materiales",
    methods: "Métodos y soluciones",
    result: "Resultado",
  },
};
