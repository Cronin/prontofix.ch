import { type Locale, locales } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const content: Record<Locale, { title: string; sections: { h: string; p: string }[] }> = {
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    sections: [
      {
        h: "1. Geltungsbereich",
        p: "Diese AGB gelten für die Nutzung der Website prontofix.ch. ProntoFix ist ein Verzeichnisdienst, der Nutzer mit lokalen Handwerkern in der Schweiz verbindet.",
      },
      {
        h: "2. Leistungen",
        p: "ProntoFix stellt ein Verzeichnis von Handwerkern und Dienstleistern zur Verfügung. Wir vermitteln keine Aufträge und sind nicht Vertragspartei zwischen Nutzern und Handwerkern.",
      },
      {
        h: "3. Haftung",
        p: "ProntoFix übernimmt keine Haftung für die Qualität der Dienstleistungen der gelisteten Handwerker. Die Bewertungen und Angaben werden nach bestem Wissen bereitgestellt, ohne Garantie auf Vollständigkeit oder Richtigkeit.",
      },
      {
        h: "4. Geistiges Eigentum",
        p: "Alle Inhalte dieser Website, einschliesslich Texte, Logos und Design, sind urheberrechtlich geschützt. Eine Vervielfältigung bedarf der schriftlichen Genehmigung.",
      },
      {
        h: "5. Anwendbares Recht",
        p: "Es gilt Schweizer Recht. Gerichtsstand ist Zürich.",
      },
    ],
  },
  fr: {
    title: "Conditions générales",
    sections: [
      {
        h: "1. Champ d'application",
        p: "Les présentes CGV s'appliquent à l'utilisation du site prontofix.ch. ProntoFix est un service d'annuaire mettant en relation les utilisateurs avec des artisans locaux en Suisse.",
      },
      {
        h: "2. Prestations",
        p: "ProntoFix met à disposition un annuaire d'artisans et de prestataires de services. Nous ne transmettons pas de mandats et ne sommes pas partie contractante entre les utilisateurs et les artisans.",
      },
      {
        h: "3. Responsabilité",
        p: "ProntoFix décline toute responsabilité quant à la qualité des prestations des artisans listés. Les évaluations et informations sont fournies au mieux de nos connaissances, sans garantie d'exhaustivité ou d'exactitude.",
      },
      {
        h: "4. Propriété intellectuelle",
        p: "Tous les contenus de ce site, y compris textes, logos et design, sont protégés par le droit d'auteur. Toute reproduction nécessite une autorisation écrite.",
      },
      {
        h: "5. Droit applicable",
        p: "Le droit suisse est applicable. Le for juridique est Zurich.",
      },
    ],
  },
  it: {
    title: "Condizioni generali",
    sections: [
      {
        h: "1. Ambito di applicazione",
        p: "Le presenti condizioni generali si applicano all'utilizzo del sito prontofix.ch. ProntoFix è un servizio di directory che mette in contatto gli utenti con artigiani locali in Svizzera.",
      },
      {
        h: "2. Servizi",
        p: "ProntoFix mette a disposizione una directory di artigiani e fornitori di servizi. Non trasmettiamo incarichi e non siamo parte contrattuale tra utenti e artigiani.",
      },
      {
        h: "3. Responsabilità",
        p: "ProntoFix non si assume alcuna responsabilità per la qualità dei servizi degli artigiani elencati. Le valutazioni e le informazioni vengono fornite al meglio delle nostre conoscenze, senza garanzia di completezza o correttezza.",
      },
      {
        h: "4. Proprietà intellettuale",
        p: "Tutti i contenuti di questo sito, inclusi testi, loghi e design, sono protetti dal diritto d'autore. La riproduzione richiede l'autorizzazione scritta.",
      },
      {
        h: "5. Diritto applicabile",
        p: "Si applica il diritto svizzero. Il foro competente è Zurigo.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: l } = await params;
  const lang = l as Locale;
  return { title: content[lang].title };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: l } = await params;
  const lang = l as Locale;
  const c = content[lang];

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-black">{c.title}</h1>
          {c.sections.map((s) => (
            <div key={s.h} className="mt-8">
              <h2 className="text-lg font-bold text-black">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {s.p}
              </p>
            </div>
          ))}
        </div>
      </article>
      <Footer lang={lang} />
    </div>
  );
}
