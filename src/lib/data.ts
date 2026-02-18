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
  // German-speaking
  { slug: "zuerich", name: "Zürich", canton: "ZH", lang: "de", population: 421878, plz: "8000" },
  { slug: "basel", name: "Basel", canton: "BS", lang: "de", population: 177654, plz: "4000" },
  { slug: "bern", name: "Bern", canton: "BE", lang: "de", population: 134794, plz: "3000" },
  { slug: "luzern", name: "Luzern", canton: "LU", lang: "de", population: 82620, plz: "6000" },
  { slug: "st-gallen", name: "St. Gallen", canton: "SG", lang: "de", population: 76067, plz: "9000" },
  { slug: "winterthur", name: "Winterthur", canton: "ZH", lang: "de", population: 115104, plz: "8400" },
  { slug: "aarau", name: "Aarau", canton: "AG", lang: "de", population: 21924, plz: "5000" },
  { slug: "thun", name: "Thun", canton: "BE", lang: "de", population: 44400, plz: "3600" },
  { slug: "schaffhausen", name: "Schaffhausen", canton: "SH", lang: "de", population: 37000, plz: "8200" },
  { slug: "chur", name: "Chur", canton: "GR", lang: "de", population: 38100, plz: "7000" },
  { slug: "zug", name: "Zug", canton: "ZG", lang: "de", population: 31000, plz: "6300" },
  { slug: "baden", name: "Baden", canton: "AG", lang: "de", population: 19800, plz: "5400" },
  // French-speaking
  { slug: "geneve", name: "Genève", canton: "GE", lang: "fr", population: 203856, plz: "1200" },
  { slug: "lausanne", name: "Lausanne", canton: "VD", lang: "fr", population: 140202, plz: "1000" },
  { slug: "fribourg", name: "Fribourg", canton: "FR", lang: "fr", population: 42139, plz: "1700" },
  { slug: "neuchatel", name: "Neuchâtel", canton: "NE", lang: "fr", population: 33827, plz: "2000" },
  { slug: "sion", name: "Sion", canton: "VS", lang: "fr", population: 35000, plz: "1950" },
  { slug: "montreux", name: "Montreux", canton: "VD", lang: "fr", population: 26700, plz: "1820" },
  { slug: "nyon", name: "Nyon", canton: "VD", lang: "fr", population: 21000, plz: "1260" },
  { slug: "biel-bienne", name: "Biel/Bienne", canton: "BE", lang: "fr", population: 55206, plz: "2500" },
  // Italian-speaking
  { slug: "lugano", name: "Lugano", canton: "TI", lang: "it", population: 63932, plz: "6900" },
  { slug: "bellinzona", name: "Bellinzona", canton: "TI", lang: "it", population: 44500, plz: "6500" },
  { slug: "locarno", name: "Locarno", canton: "TI", lang: "it", population: 16000, plz: "6600" },
  { slug: "mendrisio", name: "Mendrisio", canton: "TI", lang: "it", population: 15600, plz: "6850" },
];

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

const deCompanySuffixes = ["GmbH", "AG", "& Sohn", "& Partner", "Technik", "Service", "Express"];
const frCompanySuffixes = ["Sàrl", "SA", "& Fils", "Services", "Express", "Pro"];
const itCompanySuffixes = ["Sagl", "SA", "& Figli", "Servizi", "Express", "Pro"];

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

export function getProfessionals(serviceSlug: string, citySlug: string): Professional[] {
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return [];

  const seed = `${serviceSlug}-${citySlug}`;
  const count = 4 + (hashCode(seed) % 5); // 4-8 professionals per combo
  const names = city.lang === "fr" ? frNames : city.lang === "it" ? itNames : deNames;
  const suffixes = city.lang === "fr" ? frCompanySuffixes : city.lang === "it" ? itCompanySuffixes : deCompanySuffixes;
  const service = services.find((s) => s.slug === serviceSlug);

  const streets: Record<string, string[]> = {
    de: ["Bahnhofstrasse", "Hauptstrasse", "Dorfstrasse", "Kirchgasse", "Marktgasse", "Industriestrasse", "Ringstrasse", "Seestrasse", "Bergstrasse", "Schulstrasse"],
    fr: ["Rue de la Gare", "Avenue de la Paix", "Rue du Commerce", "Rue du Marché", "Avenue des Alpes", "Rue de Lausanne", "Rue du Simplon", "Chemin des Vignes", "Rue de Genève", "Rue du Mont-Blanc"],
    it: ["Via della Stazione", "Via San Gottardo", "Via Nassa", "Via della Posta", "Via Cantonale", "Via Pretorio", "Via Pessina", "Via Monte Brè", "Via Lugano", "Via Ticino"],
  };

  const results: Professional[] = [];

  for (let i = 0; i < count; i++) {
    const h = hashCode(`${seed}-${i}`);
    const nameIdx = h % names.length;
    const n = names[nameIdx];
    const suffixIdx = (h >> 4) % suffixes.length;
    const streetIdx = (h >> 8) % streets[city.lang].length;
    const streetNum = 1 + (h % 120);
    const rating = 3.8 + ((h % 13) / 10);
    const reviewCount = 5 + (h % 180);
    const yearsActive = 2 + (h % 25);

    const serviceLocalized = service?.name[city.lang] || serviceSlug;

    results.push({
      name: `${n.first} ${n.last}`,
      company: `${n.last} ${serviceLocalized} ${suffixes[suffixIdx]}`,
      phone: `+41 ${city.lang === "fr" ? "22" : city.lang === "it" ? "91" : city.canton === "ZH" ? "44" : city.canton === "BE" ? "31" : city.canton === "BS" ? "61" : "41"} ${100 + (h % 900)} ${10 + ((h >> 12) % 90)} ${10 + ((h >> 16) % 90)}`,
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
