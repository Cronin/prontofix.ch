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
  {
    slug: "electrical-safety-home",
    title: {
      de: "Elektrosicherheit im Haushalt: 7 Regeln, die Leben retten",
      fr: "Sécurité électrique à la maison : 7 règles qui sauvent des vies",
      it: "Sicurezza elettrica in casa: 7 regole che salvano la vita",
    },
    excerpt: {
      de: "Veraltete Elektroinstallationen sind eine unterschätzte Gefahr. Erfahren Sie, wann Sie einen Elektriker rufen sollten.",
      fr: "Les installations électriques vétustes sont un danger sous-estimé. Découvrez quand faire appel à un électricien.",
      it: "Gli impianti elettrici obsoleti sono un pericolo sottovalutato. Scopri quando chiamare un elettricista.",
    },
    content: {
      de: `## Wann sind Elektroinstallationen gefährlich?

In der Schweiz werden viele Wohnungen mit veralteten Installationen bewohnt. Typische Warnsignale:

- **Flackernde Lichter**: Können auf lose Verbindungen hinweisen
- **Warme Steckdosen**: Ein Zeichen für Überlastung
- **Häufig auslösende Sicherungen**: Die Anlage ist überlastet
- **Fehlender FI-Schutzschalter**: In Altbauten oft nicht vorhanden
- **Vergilbte oder brüchige Kabel**: Isolierung ist veraltet

## Die 7 goldenen Regeln

### 1. Keine Eigenreparaturen
Elektroarbeiten dürfen in der Schweiz nur von zugelassenen Elektrikern ausgeführt werden. Eigenarbeiten sind nicht nur gefährlich, sondern auch illegal.

### 2. FI-Schutzschalter nachrüsten
Ein Fehlerstromschutzschalter (FI/RCD) kann Leben retten. Kosten: CHF 200–500 für die Installation.

### 3. Regelmässige Kontrolle
Alle 10–20 Jahre sollte eine Elektrokontrolle durchgeführt werden. In vielen Kantonen ist dies Pflicht.

### 4. Steckdosen nicht überlasten
Verwenden Sie keine Mehrfachsteckleisten an Mehrfachsteckleisten. Maximale Belastung pro Steckdose beachten.

### 5. Wasser und Strom trennen
Im Badezimmer und in der Küche gelten besondere Schutzzonen. Nur zugelassene Geräte verwenden.

### 6. Rauchmelder installieren
Obwohl in der Schweiz nicht überall obligatorisch, sind sie eine günstige Lebensversicherung.

### 7. Notrufnummer kennen
Bei Stromschlag: 144 (Sanität) anrufen. Bei Kabelbrand: 118 (Feuerwehr).

## Was kostet ein Elektro-Check?

| Leistung | Kosten |
|----------|--------|
| Elektrokontrolle Wohnung | CHF 300–600 |
| FI-Schutzschalter nachrüsten | CHF 200–500 |
| Steckdose ersetzen | CHF 80–150 |
| Komplettsanierung Altbau | CHF 5'000–15'000 |`,
      fr: `## Quand les installations électriques deviennent-elles dangereuses ?

En Suisse, de nombreux logements ont des installations vétustes. Signaux d'alerte typiques :

- **Lumières qui clignotent** : Peuvent indiquer des connexions desserrées
- **Prises chaudes** : Signe de surcharge
- **Fusibles qui sautent fréquemment** : L'installation est surchargée
- **Absence de disjoncteur différentiel** : Souvent absent dans les anciens bâtiments
- **Câbles jaunis ou cassants** : L'isolation est obsolète

## Les 7 règles d'or

### 1. Pas de réparations soi-même
En Suisse, seuls les électriciens agréés peuvent effectuer des travaux électriques. Les travaux par soi-même sont non seulement dangereux, mais aussi illégaux.

### 2. Installer un disjoncteur différentiel
Un interrupteur différentiel (FI/RCD) peut sauver des vies. Coût : CHF 200–500 pour l'installation.

### 3. Contrôle régulier
Un contrôle électrique devrait être effectué tous les 10–20 ans. Dans de nombreux cantons, c'est obligatoire.

### 4. Ne pas surcharger les prises
N'utilisez pas de multiprises sur des multiprises. Respectez la charge maximale par prise.

### 5. Séparer eau et électricité
Dans la salle de bain et la cuisine, des zones de protection spéciales s'appliquent.

### 6. Installer des détecteurs de fumée
Bien que pas obligatoires partout en Suisse, c'est une assurance-vie peu coûteuse.

### 7. Connaître les numéros d'urgence
En cas d'électrocution : appeler le 144 (ambulance). En cas d'incendie de câble : 118 (pompiers).

## Combien coûte un contrôle électrique ?

| Prestation | Coûts |
|-----------|-------|
| Contrôle électrique appartement | CHF 300–600 |
| Installation disjoncteur différentiel | CHF 200–500 |
| Remplacement prise | CHF 80–150 |
| Rénovation complète ancien bâtiment | CHF 5'000–15'000 |`,
      it: `## Quando gli impianti elettrici diventano pericolosi?

In Svizzera, molti appartamenti hanno impianti obsoleti. Segnali d'allarme tipici:

- **Luci che tremolano**: Possono indicare connessioni allentate
- **Prese calde**: Segno di sovraccarico
- **Fusibili che saltano frequentemente**: L'impianto è sovraccaricato
- **Assenza di interruttore differenziale**: Spesso assente negli edifici vecchi
- **Cavi ingialliti o fragili**: L'isolamento è obsoleto

## Le 7 regole d'oro

### 1. Niente riparazioni fai-da-te
In Svizzera, solo gli elettricisti abilitati possono eseguire lavori elettrici. I lavori fai-da-te sono non solo pericolosi, ma anche illegali.

### 2. Installare un interruttore differenziale
Un interruttore differenziale (FI/RCD) può salvare la vita. Costo: CHF 200–500 per l'installazione.

### 3. Controllo regolare
Un controllo elettrico dovrebbe essere effettuato ogni 10–20 anni. In molti cantoni è obbligatorio.

### 4. Non sovraccaricare le prese
Non usare ciabatte multiple collegate tra loro. Rispettare il carico massimo per presa.

### 5. Separare acqua e elettricità
In bagno e in cucina si applicano zone di protezione speciali.

### 6. Installare rilevatori di fumo
Anche se non obbligatori ovunque in Svizzera, sono un'assicurazione sulla vita economica.

### 7. Conoscere i numeri di emergenza
In caso di elettrocuzione: chiamare il 144 (ambulanza). In caso di incendio: 118 (pompieri).

## Quanto costa un controllo elettrico?

| Prestazione | Costi |
|------------|-------|
| Controllo elettrico appartamento | CHF 300–600 |
| Installazione interruttore differenziale | CHF 200–500 |
| Sostituzione presa | CHF 80–150 |
| Ristrutturazione completa edificio vecchio | CHF 5'000–15'000 |`,
    },
    category: "electrician",
    date: "2026-02-12",
    readingTime: 5,
  },
  {
    slug: "cleaning-costs-guide",
    title: {
      de: "Reinigungskosten Schweiz: Was kostet eine professionelle Reinigung?",
      fr: "Coûts de nettoyage en Suisse : combien coûte un nettoyage professionnel ?",
      it: "Costi pulizia Svizzera: quanto costa una pulizia professionale?",
    },
    excerpt: {
      de: "Von der Umzugsreinigung bis zur Büroreinigung: Alle Preise auf einen Blick.",
      fr: "Du nettoyage de fin de bail au nettoyage de bureau : tous les prix en un coup d'œil.",
      it: "Dalla pulizia di fine locazione alla pulizia uffici: tutti i prezzi a colpo d'occhio.",
    },
    content: {
      de: `## Reinigungskosten in der Schweiz

Die Kosten für professionelle Reinigung variieren je nach Art und Grösse. Hier eine Übersicht:

### Umzugsreinigung / Endreinigung

Die wichtigste Reinigung in der Schweiz — bei Auszug muss die Wohnung in einwandfreiem Zustand übergeben werden.

| Wohnungsgrösse | Kosten |
|---------------|--------|
| 1–2 Zimmer | CHF 300–500 |
| 3–4 Zimmer | CHF 500–900 |
| 5+ Zimmer | CHF 800–1'500 |

**Wichtig:** Viele Vermieter verlangen eine professionelle Reinigung mit Abnahmegarantie.

### Regelmässige Reinigung

| Häufigkeit | Kosten pro Stunde |
|-----------|-------------------|
| Wöchentlich | CHF 30–45 |
| Zweiwöchentlich | CHF 35–50 |
| Einmalig | CHF 40–55 |

### Spezialreinigungen

- **Fensterreinigung**: CHF 5–15 pro Fenster
- **Teppichreinigung**: CHF 3–8 pro m²
- **Bauendreinigung**: CHF 3–6 pro m²
- **Grundreinigung**: CHF 40–60 pro Stunde

## So sparen Sie bei der Reinigung

1. Vergleichen Sie mindestens 3 Offerten
2. Buchen Sie regelmässige statt einmalige Reinigungen
3. Bereiten Sie die Wohnung vor (aufräumen, Möbel rücken)
4. Wählen Sie einen lokalen Anbieter`,
      fr: `## Coûts de nettoyage en Suisse

Les coûts de nettoyage professionnel varient selon le type et la taille. Voici un aperçu :

### Nettoyage de fin de bail

Le nettoyage le plus important en Suisse — au déménagement, l'appartement doit être rendu en parfait état.

| Taille du logement | Coûts |
|--------------------|-------|
| 1–2 pièces | CHF 300–500 |
| 3–4 pièces | CHF 500–900 |
| 5+ pièces | CHF 800–1'500 |

**Important :** De nombreux propriétaires exigent un nettoyage professionnel avec garantie de réception.

### Nettoyage régulier

| Fréquence | Coût par heure |
|-----------|---------------|
| Hebdomadaire | CHF 30–45 |
| Bimensuel | CHF 35–50 |
| Ponctuel | CHF 40–55 |

### Nettoyages spéciaux

- **Nettoyage de vitres** : CHF 5–15 par fenêtre
- **Nettoyage de tapis** : CHF 3–8 par m²
- **Nettoyage de fin de chantier** : CHF 3–6 par m²
- **Nettoyage en profondeur** : CHF 40–60 par heure

## Comment économiser sur le nettoyage

1. Comparez au moins 3 devis
2. Optez pour un nettoyage régulier plutôt que ponctuel
3. Préparez l'appartement (rangement, déplacement des meubles)
4. Choisissez un prestataire local`,
      it: `## Costi di pulizia in Svizzera

I costi per la pulizia professionale variano per tipo e dimensione. Ecco una panoramica:

### Pulizia di fine locazione

La pulizia più importante in Svizzera — al trasloco, l'appartamento deve essere consegnato in condizioni perfette.

| Dimensione alloggio | Costi |
|--------------------|-------|
| 1–2 locali | CHF 300–500 |
| 3–4 locali | CHF 500–900 |
| 5+ locali | CHF 800–1'500 |

**Importante:** Molti proprietari richiedono una pulizia professionale con garanzia di accettazione.

### Pulizia regolare

| Frequenza | Costo all'ora |
|-----------|--------------|
| Settimanale | CHF 30–45 |
| Bisettimanale | CHF 35–50 |
| Una tantum | CHF 40–55 |

### Pulizie speciali

- **Pulizia vetri**: CHF 5–15 per finestra
- **Pulizia tappeti**: CHF 3–8 per m²
- **Pulizia fine cantiere**: CHF 3–6 per m²
- **Pulizia a fondo**: CHF 40–60 all'ora

## Come risparmiare sulla pulizia

1. Confronta almeno 3 preventivi
2. Scegli pulizie regolari invece che una tantum
3. Prepara l'appartamento (riordina, sposta i mobili)
4. Scegli un fornitore locale`,
    },
    category: "cleaning",
    date: "2026-02-08",
    readingTime: 4,
  },
  {
    slug: "garden-maintenance-seasons",
    title: {
      de: "Gartenpflege im Jahresverlauf: Was wann zu tun ist",
      fr: "Entretien du jardin au fil des saisons : quoi faire et quand",
      it: "Manutenzione del giardino nelle stagioni: cosa fare e quando",
    },
    excerpt: {
      de: "Von Frühjahrsschnitt bis Winterschutz: Der Gartenkalender für die Schweiz.",
      fr: "De la taille de printemps à la protection hivernale : le calendrier du jardin pour la Suisse.",
      it: "Dalla potatura primaverile alla protezione invernale: il calendario del giardino per la Svizzera.",
    },
    content: {
      de: `## Gartenarbeit in der Schweiz

Das Schweizer Klima stellt besondere Anforderungen an die Gartenpflege. Hier der Jahresüberblick:

### Frühling (März–Mai)

- **Rasen vertikutieren** und nachsäen
- **Hecken schneiden** (vor dem Austrieb)
- **Beete vorbereiten** und düngen
- **Bewässerungsanlage** in Betrieb nehmen

### Sommer (Juni–August)

- **Regelmässig mähen** (1x pro Woche)
- **Bewässern** in Trockenperioden (morgens oder abends)
- **Unkraut jäten** und mulchen
- **Rosen schneiden** nach der ersten Blüte

### Herbst (September–November)

- **Laub entfernen** vom Rasen
- **Letzte Rasenmähung** im Oktober
- **Pflanzen winterfest** machen
- **Gartengeräte reinigen** und einlagern

### Winter (Dezember–Februar)

- **Schnee räumen** von Wegen und Einfahrten
- **Winterschutz** für empfindliche Pflanzen kontrollieren
- **Bäume schneiden** (Obstbäume im Februar)
- **Nächste Saison planen**

## Was kostet ein Gärtner?

| Leistung | Kosten |
|----------|--------|
| Rasenmähen (pro Einsatz) | CHF 50–150 |
| Heckenschnitt | CHF 40–80/Stunde |
| Gartenpflege komplett | CHF 50–90/Stunde |
| Baumpflege/Fällung | CHF 80–150/Stunde |
| Gartengestaltung | CHF 70–120/Stunde |`,
      fr: `## Jardinage en Suisse

Le climat suisse pose des exigences particulières pour l'entretien du jardin. Voici l'aperçu annuel :

### Printemps (mars–mai)

- **Scarifier la pelouse** et réensemencer
- **Tailler les haies** (avant la pousse)
- **Préparer les massifs** et fertiliser
- **Mettre en service l'arrosage** automatique

### Été (juin–août)

- **Tondre régulièrement** (1x par semaine)
- **Arroser** en période sèche (matin ou soir)
- **Désherber** et pailler
- **Tailler les rosiers** après la première floraison

### Automne (septembre–novembre)

- **Ramasser les feuilles** de la pelouse
- **Dernière tonte** en octobre
- **Préparer les plantes** pour l'hiver
- **Nettoyer les outils** et les ranger

### Hiver (décembre–février)

- **Déneiger** les chemins et entrées
- **Vérifier la protection hivernale** des plantes sensibles
- **Tailler les arbres** (fruitiers en février)
- **Planifier la prochaine saison**

## Combien coûte un jardinier ?

| Prestation | Coûts |
|-----------|-------|
| Tonte de pelouse (par intervention) | CHF 50–150 |
| Taille de haie | CHF 40–80/heure |
| Entretien de jardin complet | CHF 50–90/heure |
| Élagage/Abattage | CHF 80–150/heure |
| Aménagement paysager | CHF 70–120/heure |`,
      it: `## Giardinaggio in Svizzera

Il clima svizzero pone esigenze particolari per la manutenzione del giardino. Ecco la panoramica annuale:

### Primavera (marzo–maggio)

- **Arieggiare il prato** e riseminare
- **Potare le siepi** (prima della germogliazione)
- **Preparare le aiuole** e concimare
- **Mettere in funzione l'irrigazione** automatica

### Estate (giugno–agosto)

- **Falciare regolarmente** (1x a settimana)
- **Irrigare** nei periodi secchi (mattina o sera)
- **Diserbare** e pacciamare
- **Potare le rose** dopo la prima fioritura

### Autunno (settembre–novembre)

- **Raccogliere le foglie** dal prato
- **Ultima falciatura** in ottobre
- **Preparare le piante** per l'inverno
- **Pulire gli attrezzi** e riporli

### Inverno (dicembre–febbraio)

- **Spalare la neve** dai sentieri e ingressi
- **Controllare la protezione invernale** delle piante sensibili
- **Potare gli alberi** (fruttiferi in febbraio)
- **Pianificare la prossima stagione**

## Quanto costa un giardiniere?

| Prestazione | Costi |
|------------|-------|
| Falciatura prato (per intervento) | CHF 50–150 |
| Potatura siepi | CHF 40–80/ora |
| Manutenzione giardino completa | CHF 50–90/ora |
| Potatura/Abbattimento alberi | CHF 80–150/ora |
| Progettazione giardino | CHF 70–120/ora |`,
    },
    category: "gardener",
    date: "2026-02-01",
    readingTime: 5,
  },
  {
    slug: "pest-control-prevention",
    title: {
      de: "Schädlingsbekämpfung: Vorbeugen, erkennen, handeln",
      fr: "Lutte antiparasitaire : prévenir, détecter, agir",
      it: "Disinfestazione: prevenire, riconoscere, agire",
    },
    excerpt: {
      de: "Mäuse, Wespen, Schaben: So schützen Sie Ihr Zuhause und wann Sie einen Profi brauchen.",
      fr: "Souris, guêpes, cafards : comment protéger votre maison et quand faire appel à un professionnel.",
      it: "Topi, vespe, scarafaggi: come proteggere la tua casa e quando chiamare un professionista.",
    },
    content: {
      de: `## Häufige Schädlinge in der Schweiz

### Mäuse und Ratten

Besonders im Herbst suchen Nagetiere Unterschlupf in Häusern. Warnsignale:

- Kot (kleine schwarze Kügelchen)
- Nagespuren an Kabeln oder Möbeln
- Kratzgeräusche in Wänden oder Decken
- Nestmaterial (Papier, Stoff)

### Wespen und Hornissen

Im Sommer können Wespennester zur Gefahr werden. **Wichtig:** Hornissen stehen unter Naturschutz und dürfen nur von Fachleuten umgesiedelt werden.

### Schaben / Kakerlaken

Anzeichen für Befall:
- Lebende oder tote Insekten (meist nachts aktiv)
- Kotspuren (kleine schwarze Punkte)
- Unangenehmer Geruch

### Bettwanzen

Ein zunehmendes Problem, auch in der Schweiz. Professionelle Bekämpfung ist fast immer notwendig.

## Wann brauchen Sie einen Profi?

- Bei **wiederkehrendem Befall** trotz eigener Massnahmen
- Bei **Ratten** (gesetzliche Meldepflicht in vielen Kantonen)
- Bei **Hornissennestern** (geschützte Art)
- Bei **Bettwanzen** (Hausmittel reichen nicht)
- Bei **Holzschädlingen** (Hausbock, Holzwurm)

## Was kostet Schädlingsbekämpfung?

| Schädling | Kosten |
|-----------|--------|
| Mäusebekämpfung | CHF 200–500 |
| Wespen-/Hornissennest entfernen | CHF 150–400 |
| Schabenbekämpfung | CHF 300–800 |
| Bettwanzenbekämpfung | CHF 500–2'000 |
| Rattenbekämpfung | CHF 300–1'000 |

## Prävention: 5 Tipps

1. **Lebensmittel verschlossen** lagern
2. **Abfälle** regelmässig entsorgen
3. **Risse und Spalten** abdichten
4. **Feuchtigkeit** reduzieren (Keller, Bad)
5. **Regelmässig kontrollieren** (Keller, Dachboden)`,
      fr: `## Nuisibles fréquents en Suisse

### Souris et rats

Surtout en automne, les rongeurs cherchent refuge dans les maisons. Signaux d'alerte :

- Excréments (petites boulettes noires)
- Traces de rongement sur câbles ou meubles
- Bruits de grattement dans les murs ou plafonds
- Matériaux de nidification (papier, tissu)

### Guêpes et frelons

En été, les nids de guêpes peuvent devenir dangereux. **Important :** Les frelons sont protégés et ne peuvent être déplacés que par des professionnels.

### Cafards / Blattes

Signes d'infestation :
- Insectes vivants ou morts (surtout actifs la nuit)
- Traces d'excréments (petits points noirs)
- Odeur désagréable

### Punaises de lit

Un problème croissant, aussi en Suisse. Le traitement professionnel est presque toujours nécessaire.

## Quand avez-vous besoin d'un professionnel ?

- En cas d'**infestation récurrente** malgré vos propres mesures
- Pour les **rats** (obligation de déclaration dans de nombreux cantons)
- Pour les **nids de frelons** (espèce protégée)
- Pour les **punaises de lit** (les remèdes maison ne suffisent pas)
- Pour les **insectes xylophages** (capricorne, ver à bois)

## Combien coûte la lutte antiparasitaire ?

| Nuisible | Coûts |
|----------|-------|
| Lutte contre les souris | CHF 200–500 |
| Retrait nid de guêpes/frelons | CHF 150–400 |
| Lutte contre les cafards | CHF 300–800 |
| Lutte contre les punaises de lit | CHF 500–2'000 |
| Lutte contre les rats | CHF 300–1'000 |

## Prévention : 5 conseils

1. **Stocker les aliments** dans des récipients fermés
2. **Éliminer les déchets** régulièrement
3. **Colmater fissures et interstices**
4. **Réduire l'humidité** (cave, salle de bain)
5. **Contrôler régulièrement** (cave, grenier)`,
      it: `## Parassiti frequenti in Svizzera

### Topi e ratti

Soprattutto in autunno, i roditori cercano rifugio nelle case. Segnali d'allarme:

- Escrementi (piccole palline nere)
- Tracce di rosicchiamento su cavi o mobili
- Rumori di grattamento in pareti o soffitti
- Materiali per nidi (carta, tessuto)

### Vespe e calabroni

In estate, i nidi di vespe possono diventare pericolosi. **Importante:** I calabroni sono protetti e possono essere spostati solo da professionisti.

### Scarafaggi / Blatte

Segni di infestazione:
- Insetti vivi o morti (soprattutto attivi di notte)
- Tracce di escrementi (piccoli punti neri)
- Odore sgradevole

### Cimici dei letti

Un problema crescente, anche in Svizzera. Il trattamento professionale è quasi sempre necessario.

## Quando serve un professionista?

- In caso di **infestazione ricorrente** nonostante le proprie misure
- Per i **ratti** (obbligo di segnalazione in molti cantoni)
- Per i **nidi di calabroni** (specie protetta)
- Per le **cimici dei letti** (i rimedi casalinghi non bastano)
- Per gli **insetti xilofagi** (tarlo, tarme del legno)

## Quanto costa la disinfestazione?

| Parassita | Costi |
|-----------|-------|
| Disinfestazione topi | CHF 200–500 |
| Rimozione nido vespe/calabroni | CHF 150–400 |
| Disinfestazione scarafaggi | CHF 300–800 |
| Disinfestazione cimici dei letti | CHF 500–2'000 |
| Disinfestazione ratti | CHF 300–1'000 |

## Prevenzione: 5 consigli

1. **Conservare gli alimenti** in contenitori chiusi
2. **Smaltire i rifiuti** regolarmente
3. **Sigillare crepe e fessure**
4. **Ridurre l'umidità** (cantina, bagno)
5. **Controllare regolarmente** (cantina, soffitta)`,
    },
    category: "pest-control",
    date: "2026-01-20",
    readingTime: 5,
  },
];
