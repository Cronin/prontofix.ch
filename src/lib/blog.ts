import type { Locale } from "./i18n";

export interface BlogPost {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
  category: string;
  date: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "emergency-plumber-what-to-know",
    title: {
      de: "Notfall-Sanitär: Was Sie wissen müssen",
      fr: "Plombier d'urgence : ce qu'il faut savoir",
      it: "Idraulico d'emergenza: cosa devi sapere",
    },
    excerpt: {
      de: "Ein Rohrbruch um 3 Uhr morgens? Erfahren Sie, wie Sie einen seriösen Notfall-Sanitär finden und was ein Einsatz kostet.",
      fr: "Une fuite à 3h du matin ? Découvrez comment trouver un plombier d'urgence fiable et combien coûte une intervention.",
      it: "Un tubo rotto alle 3 di notte? Scopri come trovare un idraulico d'emergenza affidabile e quanto costa un intervento.",
    },
    content: {
      de: `## Wann brauchen Sie einen Notfall-Sanitär?

Ein Notfall-Sanitär wird benötigt, wenn ein sofortiges Eingreifen erforderlich ist, um grössere Schäden zu verhindern. Typische Notfälle sind:

- **Rohrbruch**: Wasser fliesst unkontrolliert und droht, Wände, Böden oder Möbel zu beschädigen
- **Verstopfte Kanalisation**: Abwasser tritt zurück und verursacht unhygienische Zustände
- **Heizungsausfall im Winter**: Besonders bei Minustemperaturen kann ein Heizungsausfall gefährlich werden
- **Gasgeruch**: Sofort Fenster öffnen, Gas abstellen und den Notdienst rufen

## Was kostet ein Notfall-Einsatz?

Die Kosten variieren je nach Kanton und Tageszeit:

| Zeitraum | Typische Kosten |
|----------|----------------|
| Werktags tagsüber | CHF 150–250 |
| Abends/Samstag | CHF 250–400 |
| Sonn-/Feiertag/Nacht | CHF 350–500+ |

**Tipp:** Fragen Sie immer nach einem Kostenvoranschlag, bevor der Handwerker beginnt. Seriöse Betriebe geben gerne Auskunft.

## So finden Sie einen seriösen Notfall-Sanitär

1. **Bewertungen prüfen**: Achten Sie auf verifizierte Bewertungen anderer Kunden
2. **Festpreis vereinbaren**: Seriöse Betriebe nennen einen Preis vor dem Einsatz
3. **Lokale Anbieter bevorzugen**: Kürzere Anfahrt = schnellere Hilfe und tiefere Kosten
4. **Offizielle Zulassung prüfen**: Der Betrieb sollte im Handelsregister eingetragen sein

## Erste Hilfe bei Wasserschäden

Bis der Sanitär eintrifft:
- Hauptwasserhahn zudrehen
- Strom in betroffenen Räumen abschalten
- Wasser aufwischen und Möbel hochstellen
- Fotos für die Versicherung machen`,
      fr: `## Quand avez-vous besoin d'un plombier d'urgence ?

Un plombier d'urgence est nécessaire lorsqu'une intervention immédiate s'impose pour éviter des dégâts importants. Urgences typiques :

- **Fuite d'eau** : L'eau coule de manière incontrôlée et menace d'endommager murs, sols ou meubles
- **Canalisation bouchée** : Les eaux usées remontent et créent des conditions insalubres
- **Panne de chauffage en hiver** : Particulièrement dangereux par températures négatives
- **Odeur de gaz** : Ouvrir immédiatement les fenêtres, couper le gaz et appeler les urgences

## Combien coûte une intervention d'urgence ?

Les coûts varient selon le canton et l'heure :

| Période | Coûts typiques |
|---------|---------------|
| Jours ouvrables | CHF 150–250 |
| Soirs/Samedi | CHF 250–400 |
| Dimanche/Férié/Nuit | CHF 350–500+ |

**Conseil :** Demandez toujours un devis avant que l'artisan ne commence. Les entreprises sérieuses vous informent volontiers.

## Comment trouver un plombier d'urgence fiable

1. **Vérifier les avis** : Consultez les évaluations vérifiées d'autres clients
2. **Convenir d'un prix fixe** : Les entreprises sérieuses annoncent un prix avant l'intervention
3. **Privilégier les prestataires locaux** : Trajet plus court = aide plus rapide et coûts réduits
4. **Vérifier l'agrément officiel** : L'entreprise doit être inscrite au registre du commerce

## Premiers gestes en cas de dégât des eaux

En attendant le plombier :
- Fermer le robinet principal
- Couper le courant dans les pièces touchées
- Éponger l'eau et surélever les meubles
- Prendre des photos pour l'assurance`,
      it: `## Quando hai bisogno di un idraulico d'emergenza?

Un idraulico d'emergenza serve quando è necessario un intervento immediato per prevenire danni gravi. Emergenze tipiche:

- **Tubo rotto**: L'acqua scorre incontrollata e rischia di danneggiare pareti, pavimenti o mobili
- **Scarico intasato**: Le acque reflue risalgono creando condizioni non igieniche
- **Guasto al riscaldamento in inverno**: Particolarmente pericoloso con temperature sotto zero
- **Odore di gas**: Aprire subito le finestre, chiudere il gas e chiamare l'emergenza

## Quanto costa un intervento d'emergenza?

I costi variano per cantone e orario:

| Periodo | Costi tipici |
|---------|-------------|
| Giorni feriali | CHF 150–250 |
| Sera/Sabato | CHF 250–400 |
| Domenica/Festivo/Notte | CHF 350–500+ |

**Consiglio:** Chiedi sempre un preventivo prima che l'artigiano inizi. Le imprese serie informano volentieri.

## Come trovare un idraulico d'emergenza affidabile

1. **Controllare le recensioni**: Verifica le valutazioni di altri clienti
2. **Concordare un prezzo fisso**: Le imprese serie comunicano il prezzo prima dell'intervento
3. **Preferire fornitori locali**: Tragitto più breve = aiuto più rapido e costi inferiori
4. **Verificare l'abilitazione ufficiale**: L'impresa deve essere iscritta al registro di commercio

## Primi soccorsi in caso di danni da acqua

In attesa dell'idraulico:
- Chiudere il rubinetto principale
- Staccare la corrente nelle stanze interessate
- Asciugare l'acqua e sollevare i mobili
- Fare foto per l'assicurazione`,
    },
    category: "plumber",
    date: "2026-02-15",
    readingTime: 5,
  },
  {
    slug: "locksmith-costs-switzerland",
    title: {
      de: "Schlüsseldienst Kosten Schweiz: Der komplette Preisguide",
      fr: "Coûts serrurier Suisse : le guide complet des prix",
      it: "Costi fabbro Svizzera: la guida completa ai prezzi",
    },
    excerpt: {
      de: "Ausgesperrt? Erfahren Sie, was ein Schlüsseldienst in der Schweiz kostet und wie Sie Abzocke vermeiden.",
      fr: "Enfermé dehors ? Découvrez ce que coûte un serrurier en Suisse et comment éviter les arnaques.",
      it: "Chiuso fuori? Scopri quanto costa un fabbro in Svizzera e come evitare le truffe.",
    },
    content: {
      de: `## Typische Kosten für den Schlüsseldienst

Die Preise für einen Schlüsseldienst in der Schweiz variieren stark. Hier eine Übersicht:

### Türöffnung ohne Beschädigung
- **Tagsüber (Mo–Fr)**: CHF 150–250
- **Abend/Samstag**: CHF 200–350
- **Nacht/Sonntag**: CHF 300–500

### Schlossaustausch
- **Einfaches Schloss**: CHF 200–400
- **Sicherheitsschloss**: CHF 400–800
- **Mehrfachverriegelung**: CHF 600–1200

## Warnsignale für unseriöse Anbieter

- Kein fester Firmensitz in Ihrer Region
- Extrem tiefe Preise am Telefon, hohe Rechnung vor Ort
- Drängen auf sofortigen Schlossaustausch
- Keine transparente Preisauskunft
- Rechnung ohne MwSt.-Nummer

## So schützen Sie sich

1. Vereinbaren Sie den Preis **vor** dem Einsatz
2. Lassen Sie sich einen **schriftlichen Kostenvoranschlag** geben
3. Wählen Sie einen **lokalen Betrieb** mit Bewertungen
4. Prüfen Sie die **Handelsregistereintragung**`,
      fr: `## Coûts typiques d'un serrurier

Les prix d'un serrurier en Suisse varient considérablement. Voici un aperçu :

### Ouverture de porte sans dégât
- **Journée (Lu–Ve)** : CHF 150–250
- **Soir/Samedi** : CHF 200–350
- **Nuit/Dimanche** : CHF 300–500

### Remplacement de serrure
- **Serrure simple** : CHF 200–400
- **Serrure de sécurité** : CHF 400–800
- **Multipoint** : CHF 600–1200

## Signes d'alerte pour les prestataires malhonnêtes

- Pas de siège social dans votre région
- Prix très bas au téléphone, facture élevée sur place
- Insistance sur un remplacement immédiat de la serrure
- Pas de transparence sur les prix
- Facture sans numéro TVA

## Comment vous protéger

1. Convenez du prix **avant** l'intervention
2. Demandez un **devis écrit**
3. Choisissez une **entreprise locale** avec des avis
4. Vérifiez l'**inscription au registre du commerce**`,
      it: `## Costi tipici per un fabbro

I prezzi per un fabbro in Svizzera variano molto. Ecco una panoramica:

### Apertura porta senza danno
- **Giorno (Lu–Ve)**: CHF 150–250
- **Sera/Sabato**: CHF 200–350
- **Notte/Domenica**: CHF 300–500

### Sostituzione serratura
- **Serratura semplice**: CHF 200–400
- **Serratura di sicurezza**: CHF 400–800
- **Multipoint**: CHF 600–1200

## Segnali d'allarme per fornitori disonesti

- Nessuna sede nella tua regione
- Prezzi molto bassi al telefono, fattura alta sul posto
- Insistenza sulla sostituzione immediata della serratura
- Nessuna trasparenza sui prezzi
- Fattura senza numero IVA

## Come proteggerti

1. Concorda il prezzo **prima** dell'intervento
2. Chiedi un **preventivo scritto**
3. Scegli un'**impresa locale** con recensioni
4. Verifica l'**iscrizione al registro di commercio**`,
    },
    category: "locksmith",
    date: "2026-02-10",
    readingTime: 4,
  },
  {
    slug: "heating-maintenance-guide",
    title: {
      de: "Heizungswartung: Wann, warum und was es kostet",
      fr: "Entretien du chauffage : quand, pourquoi et combien ça coûte",
      it: "Manutenzione riscaldamento: quando, perché e quanto costa",
    },
    excerpt: {
      de: "Regelmässige Heizungswartung spart Geld und verlängert die Lebensdauer. Alles, was Sie wissen müssen.",
      fr: "L'entretien régulier du chauffage économise de l'argent et prolonge sa durée de vie. Tout ce que vous devez savoir.",
      it: "La manutenzione regolare del riscaldamento risparmia denaro e prolunga la durata. Tutto quello che devi sapere.",
    },
    content: {
      de: `## Warum ist Heizungswartung wichtig?

Eine regelmässige Wartung Ihrer Heizung bietet zahlreiche Vorteile:

- **Energieeinsparung**: Bis zu 15% weniger Heizkosten durch optimale Einstellung
- **Längere Lebensdauer**: Gut gewartete Heizungen halten 20–30 Jahre
- **Sicherheit**: Frühzeitige Erkennung von Defekten und Gasundichtigkeiten
- **Umweltschutz**: Weniger CO2-Ausstoss durch effiziente Verbrennung

## Wann sollte die Wartung erfolgen?

**Ideal: im Spätsommer oder Frühherbst** (August–Oktober), bevor die Heizperiode beginnt.

## Was wird bei einer Wartung gemacht?

1. Brenner reinigen und einstellen
2. Abgaswerte messen
3. Dichtheit prüfen
4. Umwälzpumpe kontrollieren
5. Ausdehnungsgefäss prüfen
6. Thermostat und Regelung testen

## Typische Kosten

| Heizungstyp | Wartungskosten |
|------------|---------------|
| Gas-Heizung | CHF 250–400 |
| Öl-Heizung | CHF 300–500 |
| Wärmepumpe | CHF 200–350 |
| Pelletheizung | CHF 300–450 |`,
      fr: `## Pourquoi l'entretien du chauffage est-il important ?

Un entretien régulier de votre chauffage offre de nombreux avantages :

- **Économie d'énergie** : Jusqu'à 15% de coûts de chauffage en moins grâce à un réglage optimal
- **Durée de vie prolongée** : Les chauffages bien entretenus durent 20–30 ans
- **Sécurité** : Détection précoce des défauts et fuites de gaz
- **Protection de l'environnement** : Moins d'émissions de CO2 grâce à une combustion efficace

## Quand effectuer l'entretien ?

**Idéalement : fin d'été ou début d'automne** (août–octobre), avant la période de chauffage.

## Que comprend un entretien ?

1. Nettoyage et réglage du brûleur
2. Mesure des émissions
3. Contrôle de l'étanchéité
4. Vérification de la pompe de circulation
5. Contrôle du vase d'expansion
6. Test du thermostat et de la régulation

## Coûts typiques

| Type de chauffage | Coûts d'entretien |
|------------------|------------------|
| Chauffage au gaz | CHF 250–400 |
| Chauffage au mazout | CHF 300–500 |
| Pompe à chaleur | CHF 200–350 |
| Chauffage à pellets | CHF 300–450 |`,
      it: `## Perché la manutenzione del riscaldamento è importante?

Una manutenzione regolare del riscaldamento offre numerosi vantaggi:

- **Risparmio energetico**: Fino al 15% in meno di costi di riscaldamento con una regolazione ottimale
- **Maggiore durata**: I riscaldamenti ben mantenuti durano 20–30 anni
- **Sicurezza**: Rilevamento precoce di difetti e perdite di gas
- **Protezione ambientale**: Meno emissioni di CO2 grazie a una combustione efficiente

## Quando fare la manutenzione?

**Idealmente: a fine estate o inizio autunno** (agosto–ottobre), prima della stagione di riscaldamento.

## Cosa comprende la manutenzione?

1. Pulizia e regolazione del bruciatore
2. Misurazione delle emissioni
3. Controllo della tenuta
4. Verifica della pompa di circolazione
5. Controllo del vaso d'espansione
6. Test del termostato e della regolazione

## Costi tipici

| Tipo di riscaldamento | Costi di manutenzione |
|----------------------|----------------------|
| Riscaldamento a gas | CHF 250–400 |
| Riscaldamento a gasolio | CHF 300–500 |
| Pompa di calore | CHF 200–350 |
| Riscaldamento a pellet | CHF 300–450 |`,
    },
    category: "heating",
    date: "2026-02-05",
    readingTime: 4,
  },
  {
    slug: "renovation-tips-apartment",
    title: {
      de: "Wohnung renovieren: 10 Tipps vom Profi",
      fr: "Rénover son appartement : 10 conseils de pro",
      it: "Ristrutturare l'appartamento: 10 consigli dal professionista",
    },
    excerpt: {
      de: "Von der Planung bis zur Umsetzung: Die wichtigsten Tipps für eine erfolgreiche Wohnungsrenovation in der Schweiz.",
      fr: "De la planification à la réalisation : les conseils essentiels pour une rénovation réussie en Suisse.",
      it: "Dalla pianificazione alla realizzazione: i consigli essenziali per una ristrutturazione di successo in Svizzera.",
    },
    content: {
      de: `## 10 Tipps für Ihre Wohnungsrenovation

### 1. Budget realistisch planen
Rechnen Sie mit CHF 800–1500 pro Quadratmeter für eine umfassende Renovation. Planen Sie 15–20% Reserve für Unvorhergesehenes ein.

### 2. Bewilligungen frühzeitig klären
In vielen Kantonen brauchen Sie für grössere Umbauten eine Baubewilligung. Klären Sie dies frühzeitig mit der Gemeinde.

### 3. Mehrere Offerten einholen
Holen Sie mindestens 3 Offerten ein und vergleichen Sie nicht nur den Preis, sondern auch die enthaltenen Leistungen.

### 4. Zeitplan erstellen
Eine typische Badezimmer-Renovation dauert 2–3 Wochen, eine Küche 3–4 Wochen. Planen Sie grosszügig.

### 5. Handwerker koordinieren
Bei grösseren Projekten brauchen Sie verschiedene Handwerker. Die richtige Reihenfolge spart Zeit und Geld.

### 6. Materialien selbst beschaffen
Bei Fliesen, Armaturen und Sanitärkeramik können Sie durch Eigenrecherche oft 20–30% sparen.

### 7. Versicherung informieren
Informieren Sie Ihre Gebäudeversicherung über geplante Renovationen, besonders bei Nassräumen.

### 8. Nachbarn informieren
Lärm und Staub sind unvermeidlich. Informieren Sie Ihre Nachbarn frühzeitig.

### 9. Abnahme sorgfältig durchführen
Prüfen Sie alle Arbeiten sorgfältig und dokumentieren Sie Mängel schriftlich.

### 10. Garantie sichern
Handwerker in der Schweiz müssen 2 Jahre Garantie auf ihre Arbeit geben (SIA-Norm 118).`,
      fr: `## 10 conseils pour votre rénovation

### 1. Planifier un budget réaliste
Comptez CHF 800–1500 par mètre carré pour une rénovation complète. Prévoyez 15–20% de réserve pour les imprévus.

### 2. Clarifier les autorisations à temps
Dans de nombreux cantons, une autorisation de construire est nécessaire pour les travaux importants. Clarifiez cela rapidement avec la commune.

### 3. Demander plusieurs devis
Demandez au moins 3 devis et comparez non seulement le prix, mais aussi les prestations incluses.

### 4. Établir un planning
Une rénovation de salle de bain dure typiquement 2–3 semaines, une cuisine 3–4 semaines. Planifiez largement.

### 5. Coordonner les artisans
Pour les projets importants, vous aurez besoin de différents artisans. Le bon ordre d'intervention économise temps et argent.

### 6. Acheter les matériaux soi-même
Pour les carrelages, robinetterie et sanitaires, vous pouvez souvent économiser 20–30% en cherchant vous-même.

### 7. Informer l'assurance
Informez votre assurance bâtiment des rénovations prévues, surtout pour les pièces d'eau.

### 8. Prévenir les voisins
Bruit et poussière sont inévitables. Prévenez vos voisins à l'avance.

### 9. Effectuer la réception avec soin
Vérifiez tous les travaux soigneusement et documentez les défauts par écrit.

### 10. Garantir la garantie
Les artisans en Suisse doivent donner 2 ans de garantie sur leur travail (norme SIA 118).`,
      it: `## 10 consigli per la tua ristrutturazione

### 1. Pianificare un budget realistico
Calcola CHF 800–1500 per metro quadrato per una ristrutturazione completa. Prevedi il 15–20% di riserva per imprevisti.

### 2. Chiarire i permessi in anticipo
In molti cantoni serve un permesso di costruzione per lavori importanti. Chiariscilo presto con il comune.

### 3. Richiedere più preventivi
Chiedi almeno 3 preventivi e confronta non solo il prezzo, ma anche le prestazioni incluse.

### 4. Creare un piano temporale
Una ristrutturazione del bagno dura tipicamente 2–3 settimane, una cucina 3–4 settimane. Pianifica con margine.

### 5. Coordinare gli artigiani
Per progetti grandi servono diversi artigiani. L'ordine giusto risparmia tempo e denaro.

### 6. Acquistare i materiali da soli
Per piastrelle, rubinetteria e sanitari puoi spesso risparmiare il 20–30% cercando da solo.

### 7. Informare l'assicurazione
Informa la tua assicurazione edificio delle ristrutturazioni previste, specialmente per i locali umidi.

### 8. Avvisare i vicini
Rumore e polvere sono inevitabili. Avvisa i vicini in anticipo.

### 9. Eseguire il collaudo con cura
Controlla tutti i lavori accuratamente e documenta i difetti per iscritto.

### 10. Assicurare la garanzia
Gli artigiani in Svizzera devono dare 2 anni di garanzia sul lavoro (norma SIA 118).`,
    },
    category: "general",
    date: "2026-01-28",
    readingTime: 6,
  },
];
