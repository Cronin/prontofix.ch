import type { Locale } from "./i18n";

interface FAQ {
  q: string;
  a: string;
}

export function getServiceFAQs(
  serviceName: string,
  cityName: string,
  lang: Locale
): FAQ[] {
  const faqs: Record<Locale, (s: string, c: string) => FAQ[]> = {
    de: (s, c) => [
      {
        q: `Was kostet ein ${s} in ${c}?`,
        a: `Die Kosten für einen ${s} in ${c} variieren je nach Art und Umfang der Arbeit. Ein Notfalleinsatz kostet typischerweise CHF 150-300, während geplante Arbeiten ab CHF 80/Stunde beginnen. Fordern Sie eine unverbindliche Offerte an für einen genauen Preis.`,
      },
      {
        q: `Gibt es einen 24-Stunden-Notdienst für ${s} in ${c}?`,
        a: `Ja, mehrere ${s}-Betriebe in ${c} bieten einen 24/7-Notdienst an. Diese sind auf ProntoFix mit dem Label "Notdienst" gekennzeichnet. Bei Notfällen wie Rohrbruch oder Stromausfall können Sie sofort anrufen.`,
      },
      {
        q: `Wie schnell kann ein ${s} in ${c} vor Ort sein?`,
        a: `Bei Notfällen sind die meisten ${s}-Profis in ${c} innerhalb von 30-60 Minuten bei Ihnen. Für geplante Einsätze können Sie einen Termin vereinbaren, der Ihnen passt.`,
      },
      {
        q: `Sind die ${s}-Profis auf ProntoFix in ${c} geprüft?`,
        a: `Ja, alle auf ProntoFix gelisteten ${s}-Betriebe in ${c} werden überprüft. Wir kontrollieren Handelsregister-Einträge, Versicherungen und Kundenbewertungen, damit Sie nur qualifizierte Fachleute finden.`,
      },
      {
        q: `Wie finde ich den besten ${s} in ${c}?`,
        a: `Vergleichen Sie die Bewertungen und Erfahrung der ${s}-Profis auf dieser Seite. Achten Sie auf das "Geprüft"-Label und lesen Sie die Kundenbewertungen. Bei ProntoFix können Sie direkt anrufen oder eine Offerte anfragen.`,
      },
    ],
    fr: (s, c) => [
      {
        q: `Combien coûte un ${s} à ${c} ?`,
        a: `Le coût d'un ${s} à ${c} varie selon le type et l'ampleur des travaux. Une intervention d'urgence coûte typiquement CHF 150-300, tandis que les travaux planifiés commencent à CHF 80/heure. Demandez un devis gratuit pour un prix exact.`,
      },
      {
        q: `Y a-t-il un service d'urgence 24h/24 pour ${s} à ${c} ?`,
        a: `Oui, plusieurs entreprises de ${s} à ${c} proposent un service d'urgence 24h/24 et 7j/7. Ceux-ci sont identifiés sur ProntoFix par le label "Service d'urgence". En cas d'urgence, vous pouvez appeler immédiatement.`,
      },
      {
        q: `En combien de temps un ${s} peut-il intervenir à ${c} ?`,
        a: `En cas d'urgence, la plupart des ${s} à ${c} peuvent être chez vous en 30 à 60 minutes. Pour les interventions planifiées, vous pouvez convenir d'un rendez-vous qui vous convient.`,
      },
      {
        q: `Les ${s}s sur ProntoFix à ${c} sont-ils vérifiés ?`,
        a: `Oui, toutes les entreprises de ${s} listées sur ProntoFix à ${c} sont vérifiées. Nous contrôlons les inscriptions au registre du commerce, les assurances et les avis clients pour vous garantir des professionnels qualifiés.`,
      },
      {
        q: `Comment trouver le meilleur ${s} à ${c} ?`,
        a: `Comparez les évaluations et l'expérience des ${s}s sur cette page. Recherchez le label "Vérifié" et lisez les avis clients. Sur ProntoFix, vous pouvez appeler directement ou demander un devis.`,
      },
    ],
    it: (s, c) => [
      {
        q: `Quanto costa un ${s} a ${c}?`,
        a: `Il costo di un ${s} a ${c} varia in base al tipo e all'entità del lavoro. Un intervento d'emergenza costa tipicamente CHF 150-300, mentre i lavori programmati partono da CHF 80/ora. Richiedi un preventivo gratuito per un prezzo esatto.`,
      },
      {
        q: `C'è un servizio d'emergenza 24h per ${s} a ${c}?`,
        a: `Sì, diverse imprese di ${s} a ${c} offrono un servizio d'emergenza 24/7. Queste sono identificate su ProntoFix con l'etichetta "Servizio emergenza". In caso di emergenza, puoi chiamare immediatamente.`,
      },
      {
        q: `In quanto tempo può intervenire un ${s} a ${c}?`,
        a: `In caso di emergenza, la maggior parte dei ${s} a ${c} può essere da te in 30-60 minuti. Per interventi programmati, puoi concordare un appuntamento comodo per te.`,
      },
      {
        q: `I ${s} su ProntoFix a ${c} sono verificati?`,
        a: `Sì, tutte le imprese di ${s} elencate su ProntoFix a ${c} sono verificate. Controlliamo iscrizioni al registro di commercio, assicurazioni e recensioni dei clienti per garantirti solo professionisti qualificati.`,
      },
      {
        q: `Come trovo il miglior ${s} a ${c}?`,
        a: `Confronta le valutazioni e l'esperienza dei ${s} in questa pagina. Cerca l'etichetta "Verificato" e leggi le recensioni dei clienti. Su ProntoFix puoi chiamare direttamente o richiedere un preventivo.`,
      },
    ],
  };

  return faqs[lang](serviceName, cityName);
}
