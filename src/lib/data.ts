import type { Locale } from "./i18n";

export interface Service {
  slug: string;
  icon: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
}

export interface City {
  slug: string;
  name: string;
  canton: string;
  lang: Locale;
  population: number;
  plz: string;
}

export interface Professional {
  name: string;
  company: string;
  phone: string;
  address: string;
  city: string;
  canton: string;
  rating: number;
  reviewCount: number;
  services: string[];
  verified: boolean;
  emergency: boolean;
  yearsActive: number;
}

export const services: Service[] = [
  {
    slug: "plumber",
    icon: "🔧",
    name: { de: "Sanitär", fr: "Plombier", it: "Idraulico" },
    description: {
      de: "Rohrreinigung, Leckortung, Boiler-Reparatur, Badezimmer-Renovation",
      fr: "Débouchage, détection de fuites, réparation chaudière, rénovation salle de bain",
      it: "Sturamenti, ricerca perdite, riparazione caldaia, ristrutturazione bagno",
    },
  },
  {
    slug: "electrician",
    icon: "⚡",
    name: { de: "Elektriker", fr: "Électricien", it: "Elettricista" },
    description: {
      de: "Elektroinstallationen, Störungsbehebung, Sicherungskästen, Beleuchtung",
      fr: "Installations électriques, dépannage, tableaux électriques, éclairage",
      it: "Impianti elettrici, riparazione guasti, quadri elettrici, illuminazione",
    },
  },
  {
    slug: "locksmith",
    icon: "🔑",
    name: { de: "Schlüsseldienst", fr: "Serrurier", it: "Fabbro" },
    description: {
      de: "Türöffnung, Schlossaustausch, Sicherheitsberatung, Schlüsselkopien",
      fr: "Ouverture de portes, remplacement de serrures, conseil sécurité, copies de clés",
      it: "Apertura porte, sostituzione serrature, consulenza sicurezza, copie chiavi",
    },
  },
  {
    slug: "heating",
    icon: "🔥",
    name: { de: "Heizung", fr: "Chauffage", it: "Riscaldamento" },
    description: {
      de: "Heizungsinstallation, Wartung, Wärmepumpen, Fussbodenheizung",
      fr: "Installation chauffage, entretien, pompes à chaleur, chauffage au sol",
      it: "Installazione riscaldamento, manutenzione, pompe di calore, riscaldamento a pavimento",
    },
  },
  {
    slug: "painter",
    icon: "🎨",
    name: { de: "Maler", fr: "Peintre", it: "Imbianchino" },
    description: {
      de: "Innenanstrich, Fassadenrenovation, Tapezierarbeiten, Farbberatung",
      fr: "Peinture intérieure, rénovation façade, tapisserie, conseil couleurs",
      it: "Pittura interni, ristrutturazione facciate, tappezzeria, consulenza colori",
    },
  },
  {
    slug: "cleaning",
    icon: "✨",
    name: { de: "Reinigung", fr: "Nettoyage", it: "Pulizia" },
    description: {
      de: "Wohnungsreinigung, Büroreinigung, Umzugsreinigung, Fensterreinigung",
      fr: "Nettoyage appartement, bureaux, fin de bail, vitres",
      it: "Pulizia appartamento, uffici, fine locazione, vetri",
    },
  },
  {
    slug: "carpenter",
    icon: "🪚",
    name: { de: "Schreiner", fr: "Menuisier", it: "Falegname" },
    description: {
      de: "Möbelbau, Türen & Fenster, Küchenmontage, Reparaturen",
      fr: "Fabrication meubles, portes & fenêtres, montage cuisine, réparations",
      it: "Costruzione mobili, porte & finestre, montaggio cucina, riparazioni",
    },
  },
  {
    slug: "gardener",
    icon: "🌿",
    name: { de: "Gärtner", fr: "Jardinier", it: "Giardiniere" },
    description: {
      de: "Gartenpflege, Rasenmähen, Heckenschnitt, Baumfällung",
      fr: "Entretien jardin, tonte pelouse, taille haies, abattage arbres",
      it: "Cura giardino, taglio prato, potatura siepi, abbattimento alberi",
    },
  },
  {
    slug: "mover",
    icon: "📦",
    name: { de: "Umzug", fr: "Déménagement", it: "Trasloco" },
    description: {
      de: "Umzüge, Möbeltransport, Entsorgung, Lagerung",
      fr: "Déménagements, transport meubles, débarras, stockage",
      it: "Traslochi, trasporto mobili, sgombero, deposito",
    },
  },
  {
    slug: "ac",
    icon: "❄️",
    name: { de: "Klimaanlage", fr: "Climatisation", it: "Climatizzazione" },
    description: {
      de: "Klimaanlagen-Installation, Wartung, Reparatur, Lüftungstechnik",
      fr: "Installation climatisation, entretien, réparation, ventilation",
      it: "Installazione climatizzazione, manutenzione, riparazione, ventilazione",
    },
  },
  {
    slug: "pest-control",
    icon: "🐛",
    name: { de: "Schädlingsbekämpfung", fr: "Dératisation", it: "Disinfestazione" },
    description: {
      de: "Insektenbekämpfung, Rattenbekämpfung, Wespenentfernung, Prävention",
      fr: "Insectes, rats, guêpes, prévention",
      it: "Insetti, topi, vespe, prevenzione",
    },
  },
  {
    slug: "roofer",
    icon: "🏠",
    name: { de: "Dachdecker", fr: "Couvreur", it: "Copritetto" },
    description: {
      de: "Dachreparatur, Dachsanierung, Flachdach, Dachrinnen",
      fr: "Réparation toiture, rénovation, toit plat, gouttières",
      it: "Riparazione tetto, ristrutturazione, tetto piano, grondaie",
    },
  },
];

export const cities: City[] = [
  // German-speaking - major
  { slug: "zuerich", name: "Zürich", canton: "ZH", lang: "de", population: 421878, plz: "8000" },
  { slug: "basel", name: "Basel", canton: "BS", lang: "de", population: 177654, plz: "4000" },
  { slug: "bern", name: "Bern", canton: "BE", lang: "de", population: 134794, plz: "3000" },
  { slug: "winterthur", name: "Winterthur", canton: "ZH", lang: "de", population: 115104, plz: "8400" },
  { slug: "luzern", name: "Luzern", canton: "LU", lang: "de", population: 82620, plz: "6000" },
  { slug: "st-gallen", name: "St. Gallen", canton: "SG", lang: "de", population: 76067, plz: "9000" },
  // German-speaking - medium
  { slug: "thun", name: "Thun", canton: "BE", lang: "de", population: 44400, plz: "3600" },
  { slug: "chur", name: "Chur", canton: "GR", lang: "de", population: 38100, plz: "7000" },
  { slug: "schaffhausen", name: "Schaffhausen", canton: "SH", lang: "de", population: 37000, plz: "8200" },
  { slug: "zug", name: "Zug", canton: "ZG", lang: "de", population: 31000, plz: "6300" },
  { slug: "frauenfeld", name: "Frauenfeld", canton: "TG", lang: "de", population: 26000, plz: "8500" },
  { slug: "olten", name: "Olten", canton: "SO", lang: "de", population: 19000, plz: "4600" },
  { slug: "aarau", name: "Aarau", canton: "AG", lang: "de", population: 21924, plz: "5000" },
  { slug: "baden", name: "Baden", canton: "AG", lang: "de", population: 19800, plz: "5400" },
  { slug: "solothurn", name: "Solothurn", canton: "SO", lang: "de", population: 17000, plz: "4500" },
  { slug: "burgdorf", name: "Burgdorf", canton: "BE", lang: "de", population: 16800, plz: "3400" },
  { slug: "langenthal", name: "Langenthal", canton: "BE", lang: "de", population: 16500, plz: "4900" },
  { slug: "wil", name: "Wil", canton: "SG", lang: "de", population: 24500, plz: "9500" },
  { slug: "kreuzlingen", name: "Kreuzlingen", canton: "TG", lang: "de", population: 22000, plz: "8280" },
  { slug: "rapperswil-jona", name: "Rapperswil-Jona", canton: "SG", lang: "de", population: 27000, plz: "8640" },
  { slug: "dietikon", name: "Dietikon", canton: "ZH", lang: "de", population: 28000, plz: "8953" },
  { slug: "wetzikon", name: "Wetzikon", canton: "ZH", lang: "de", population: 25000, plz: "8620" },
  { slug: "uster", name: "Uster", canton: "ZH", lang: "de", population: 35000, plz: "8610" },
  { slug: "horgen", name: "Horgen", canton: "ZH", lang: "de", population: 23000, plz: "8810" },
  { slug: "wohlen", name: "Wohlen", canton: "AG", lang: "de", population: 17000, plz: "5610" },
  { slug: "brugg", name: "Brugg", canton: "AG", lang: "de", population: 12000, plz: "5200" },
  { slug: "liestal", name: "Liestal", canton: "BL", lang: "de", population: 14500, plz: "4410" },
  // French-speaking - major
  { slug: "geneve", name: "Genève", canton: "GE", lang: "fr", population: 203856, plz: "1200" },
  { slug: "lausanne", name: "Lausanne", canton: "VD", lang: "fr", population: 140202, plz: "1000" },
  { slug: "biel-bienne", name: "Biel/Bienne", canton: "BE", lang: "fr", population: 55206, plz: "2500" },
  { slug: "fribourg", name: "Fribourg", canton: "FR", lang: "fr", population: 42139, plz: "1700" },
  { slug: "sion", name: "Sion", canton: "VS", lang: "fr", population: 35000, plz: "1950" },
  { slug: "neuchatel", name: "Neuchâtel", canton: "NE", lang: "fr", population: 33827, plz: "2000" },
  // French-speaking - medium
  { slug: "montreux", name: "Montreux", canton: "VD", lang: "fr", population: 26700, plz: "1820" },
  { slug: "nyon", name: "Nyon", canton: "VD", lang: "fr", population: 21000, plz: "1260" },
  { slug: "vevey", name: "Vevey", canton: "VD", lang: "fr", population: 19800, plz: "1800" },
  { slug: "morges", name: "Morges", canton: "VD", lang: "fr", population: 16000, plz: "1110" },
  { slug: "yverdon", name: "Yverdon-les-Bains", canton: "VD", lang: "fr", population: 30500, plz: "1400" },
  { slug: "la-chaux-de-fonds", name: "La Chaux-de-Fonds", canton: "NE", lang: "fr", population: 37000, plz: "2300" },
  { slug: "delemont", name: "Delémont", canton: "JU", lang: "fr", population: 12700, plz: "2800" },
  { slug: "martigny", name: "Martigny", canton: "VS", lang: "fr", population: 19000, plz: "1920" },
  { slug: "sierre", name: "Sierre", canton: "VS", lang: "fr", population: 17000, plz: "3960" },
  { slug: "monthey", name: "Monthey", canton: "VS", lang: "fr", population: 18000, plz: "1870" },
  { slug: "bulle", name: "Bulle", canton: "FR", lang: "fr", population: 24000, plz: "1630" },
  { slug: "carouge", name: "Carouge", canton: "GE", lang: "fr", population: 22700, plz: "1227" },
  { slug: "vernier", name: "Vernier", canton: "GE", lang: "fr", population: 35800, plz: "1214" },
  { slug: "renens", name: "Renens", canton: "VD", lang: "fr", population: 21000, plz: "1020" },
  // Italian-speaking
  { slug: "lugano", name: "Lugano", canton: "TI", lang: "it", population: 63932, plz: "6900" },
  { slug: "bellinzona", name: "Bellinzona", canton: "TI", lang: "it", population: 44500, plz: "6500" },
  { slug: "locarno", name: "Locarno", canton: "TI", lang: "it", population: 16000, plz: "6600" },
  { slug: "mendrisio", name: "Mendrisio", canton: "TI", lang: "it", population: 15600, plz: "6850" },
  { slug: "chiasso", name: "Chiasso", canton: "TI", lang: "it", population: 8000, plz: "6830" },
  { slug: "giubiasco", name: "Giubiasco", canton: "TI", lang: "it", population: 9000, plz: "6512" },
];

export interface Canton {
  code: string;
  slug: string;
  name: Record<Locale, string>;
}

export const cantons: Canton[] = [
  { code: "ZH", slug: "zuerich", name: { de: "Kanton Zürich", fr: "Canton de Zurich", it: "Canton Zurigo" } },
  { code: "BE", slug: "bern", name: { de: "Kanton Bern", fr: "Canton de Berne", it: "Canton Berna" } },
  { code: "BS", slug: "basel-stadt", name: { de: "Kanton Basel-Stadt", fr: "Canton de Bâle-Ville", it: "Canton Basilea Città" } },
  { code: "LU", slug: "luzern", name: { de: "Kanton Luzern", fr: "Canton de Lucerne", it: "Canton Lucerna" } },
  { code: "SG", slug: "st-gallen", name: { de: "Kanton St. Gallen", fr: "Canton de Saint-Gall", it: "Canton San Gallo" } },
  { code: "AG", slug: "aargau", name: { de: "Kanton Aargau", fr: "Canton d'Argovie", it: "Canton Argovia" } },
  { code: "GR", slug: "graubuenden", name: { de: "Kanton Graubünden", fr: "Canton des Grisons", it: "Canton Grigioni" } },
  { code: "SH", slug: "schaffhausen", name: { de: "Kanton Schaffhausen", fr: "Canton de Schaffhouse", it: "Canton Sciaffusa" } },
  { code: "ZG", slug: "zug", name: { de: "Kanton Zug", fr: "Canton de Zoug", it: "Canton Zugo" } },
  { code: "TG", slug: "thurgau", name: { de: "Kanton Thurgau", fr: "Canton de Thurgovie", it: "Canton Turgovia" } },
  { code: "SO", slug: "solothurn", name: { de: "Kanton Solothurn", fr: "Canton de Soleure", it: "Canton Soletta" } },
  { code: "BL", slug: "basel-land", name: { de: "Kanton Basel-Landschaft", fr: "Canton de Bâle-Campagne", it: "Canton Basilea Campagna" } },
  { code: "GE", slug: "geneve", name: { de: "Kanton Genf", fr: "Canton de Genève", it: "Canton Ginevra" } },
  { code: "VD", slug: "vaud", name: { de: "Kanton Waadt", fr: "Canton de Vaud", it: "Canton Vaud" } },
  { code: "FR", slug: "freiburg", name: { de: "Kanton Freiburg", fr: "Canton de Fribourg", it: "Canton Friburgo" } },
  { code: "VS", slug: "wallis", name: { de: "Kanton Wallis", fr: "Canton du Valais", it: "Canton Vallese" } },
  { code: "NE", slug: "neuenburg", name: { de: "Kanton Neuenburg", fr: "Canton de Neuchâtel", it: "Canton Neuchâtel" } },
  { code: "JU", slug: "jura", name: { de: "Kanton Jura", fr: "Canton du Jura", it: "Canton Giura" } },
  { code: "TI", slug: "ticino", name: { de: "Kanton Tessin", fr: "Canton du Tessin", it: "Canton Ticino" } },
];

export function getCantonBySlug(slug: string): Canton | undefined {
  return cantons.find((c) => c.slug === slug);
}

export function getCitiesByCanton(cantonCode: string): City[] {
  return cities.filter((c) => c.canton === cantonCode).sort((a, b) => b.population - a.population);
}

// Generate realistic Swiss professional names per language region
const deNames = [
  { first: "Thomas", last: "Müller" }, { first: "Daniel", last: "Keller" },
  { first: "Martin", last: "Schneider" }, { first: "Markus", last: "Weber" },
  { first: "Stefan", last: "Fischer" }, { first: "Andreas", last: "Huber" },
  { first: "Peter", last: "Brunner" }, { first: "Christian", last: "Meier" },
  { first: "Michael", last: "Schmid" }, { first: "Patrick", last: "Baumann" },
  { first: "Marco", last: "Gerber" }, { first: "Reto", last: "Steiner" },
  { first: "Urs", last: "Frei" }, { first: "Beat", last: "Hofmann" },
  { first: "Felix", last: "Zimmermann" }, { first: "Roland", last: "Wenger" },
  { first: "Hans", last: "Bühler" }, { first: "Walter", last: "Roth" },
  { first: "Kurt", last: "Wyss" }, { first: "Roger", last: "Ammann" },
];

const frNames = [
  { first: "Jean-Pierre", last: "Favre" }, { first: "Michel", last: "Dupont" },
  { first: "Pierre", last: "Bonvin" }, { first: "Alain", last: "Reymond" },
  { first: "Marc", last: "Berset" }, { first: "Philippe", last: "Moret" },
  { first: "François", last: "Chenaux" }, { first: "Laurent", last: "Blanc" },
  { first: "Nicolas", last: "Rochat" }, { first: "Christophe", last: "Vuille" },
  { first: "David", last: "Monney" }, { first: "Raphaël", last: "Grandjean" },
  { first: "Yves", last: "Piguet" }, { first: "Claude", last: "Tercier" },
  { first: "Thierry", last: "Dubois" }, { first: "Olivier", last: "Savary" },
];

const itNames = [
  { first: "Marco", last: "Bentivoglio" }, { first: "Luca", last: "Bernasconi" },
  { first: "Andrea", last: "Colombo" }, { first: "Giovanni", last: "Ferrari" },
  { first: "Roberto", last: "Ponti" }, { first: "Paolo", last: "Rezzonico" },
  { first: "Alessandro", last: "Brambilla" }, { first: "Stefano", last: "Cattaneo" },
  { first: "Fabio", last: "Martinelli" }, { first: "Diego", last: "Solari" },
  { first: "Massimo", last: "Lurati" }, { first: "Claudio", last: "Bentivoglio" },
];

const deCompanyPatterns = [
  (last: string, svc: string) => `${last} ${svc} GmbH`,
  (last: string, svc: string) => `${last} & Partner ${svc}`,
  (last: string, svc: string) => `${svc}profi ${last}`,
  (last: string, svc: string) => `${last} ${svc} AG`,
  (last: string, svc: string) => `${last} ${svc} & Sohn`,
  (last: string, svc: string) => `${svc}technik ${last}`,
  (last: string, svc: string) => `${last} ${svc} Service`,
  (last: string, svc: string) => `${svc} Express ${last}`,
  (last: string, svc: string) => `A1 ${svc} ${last}`,
  (last: string, svc: string) => `${last}'s ${svc}dienst`,
];
const frCompanyPatterns = [
  (last: string, svc: string) => `${last} ${svc} Sàrl`,
  (last: string, svc: string) => `${svc} ${last} SA`,
  (last: string, svc: string) => `${last} & Fils ${svc}`,
  (last: string, svc: string) => `${svc} Pro ${last}`,
  (last: string, svc: string) => `Ets. ${last} ${svc}`,
  (last: string, svc: string) => `${svc} Express ${last}`,
  (last: string, svc: string) => `${last} ${svc} Services`,
  (last: string, svc: string) => `A1 ${svc} ${last}`,
];
const itCompanyPatterns = [
  (last: string, svc: string) => `${last} ${svc} Sagl`,
  (last: string, svc: string) => `${svc} ${last} SA`,
  (last: string, svc: string) => `${last} & Figli ${svc}`,
  (last: string, svc: string) => `${svc} Pro ${last}`,
  (last: string, svc: string) => `${last} ${svc} Servizi`,
  (last: string, svc: string) => `${svc} Express ${last}`,
  (last: string, svc: string) => `Impresa ${last} ${svc}`,
  (last: string, svc: string) => `A1 ${svc} ${last}`,
];

// Deterministic pseudo-random based on string hash
function hashCode(s: string): number {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

// Area codes per canton
const areaCodes: Record<string, string> = {
  ZH: "44", BS: "61", BL: "61", BE: "31", LU: "41", SG: "71",
  AG: "62", SO: "32", TG: "52", SH: "52", GR: "81", ZG: "41",
  GE: "22", VD: "21", FR: "26", NE: "32", VS: "27", JU: "32",
  TI: "91",
};

export function getProfessionals(serviceSlug: string, citySlug: string): Professional[] {
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return [];

  const seed = `${serviceSlug}-${citySlug}`;
  const count = 4 + (hashCode(seed) % 5); // 4-8 professionals per combo
  const names = city.lang === "fr" ? frNames : city.lang === "it" ? itNames : deNames;
  const companyPatterns = city.lang === "fr" ? frCompanyPatterns : city.lang === "it" ? itCompanyPatterns : deCompanyPatterns;
  const service = services.find((s) => s.slug === serviceSlug);

  const streets: Record<string, string[]> = {
    de: ["Bahnhofstrasse", "Hauptstrasse", "Dorfstrasse", "Kirchgasse", "Marktgasse", "Industriestrasse", "Ringstrasse", "Seestrasse", "Bergstrasse", "Schulstrasse", "Zürichstrasse", "Gartenstrasse", "Rosenweg", "Lindenstrasse", "Feldstrasse", "Mühlegasse", "Obere Gasse", "Untere Gasse", "Talstrasse", "Wiesenstrasse"],
    fr: ["Rue de la Gare", "Avenue de la Paix", "Rue du Commerce", "Rue du Marché", "Avenue des Alpes", "Rue de Lausanne", "Rue du Simplon", "Chemin des Vignes", "Rue du Mont-Blanc", "Rue des Pâquis", "Avenue du Léman", "Route de Berne", "Rue de la Plaine", "Rue du Stand", "Avenue de Cour", "Rue de Carouge", "Boulevard de Grancy", "Rue de la Terrassière", "Chemin du Reposoir", "Rue des Eaux-Vives"],
    it: ["Via della Stazione", "Via San Gottardo", "Via Nassa", "Via della Posta", "Via Cantonale", "Via Pretorio", "Via Pessina", "Via Monte Brè", "Via Trevano", "Via Ciani", "Via Pioda", "Via Besso", "Via Maraini", "Via alla Campagna", "Via Zurigo", "Via Berna", "Via Maderno", "Viale Cassarate", "Via Geretta", "Via Capelli"],
  };

  const areaCode = areaCodes[city.canton] || "41";
  const results: Professional[] = [];

  for (let i = 0; i < count; i++) {
    const h = hashCode(`${seed}-${i}`);
    const h2 = hashCode(`${i}-${seed}-x`); // second hash for more variety
    const nameIdx = (h + i * 7) % names.length; // offset to avoid same sequence
    const n = names[nameIdx];
    const patternIdx = (h2 >> 4) % companyPatterns.length;
    const streetIdx = (h2 + i * 3) % streets[city.lang].length; // different street per professional
    const streetNum = 1 + (h2 % 150);
    const rating = 3.8 + ((h % 13) / 10);
    const reviewCount = 8 + (h % 230);
    const yearsActive = 2 + (h % 25);

    const serviceLocalized = service?.name[city.lang] || serviceSlug;

    results.push({
      name: `${n.first} ${n.last}`,
      company: companyPatterns[patternIdx](n.last, serviceLocalized),
      phone: `+41 ${areaCode} ${100 + (h % 900)} ${10 + ((h2 >> 8) % 90)} ${10 + ((h2 >> 16) % 90)}`,
      address: `${streets[city.lang][streetIdx]} ${streetNum}, ${city.plz} ${city.name}`,
      city: city.name,
      canton: city.canton,
      rating: Math.round(rating * 10) / 10,
      reviewCount,
      services: [serviceSlug],
      verified: h % 3 !== 0, // ~67% verified
      emergency: h % 4 === 0, // ~25% offer emergency
      yearsActive,
    });
  }

  return results;
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
