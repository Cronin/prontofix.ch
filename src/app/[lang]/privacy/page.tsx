import { type Locale, locales } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const content: Record<Locale, { title: string; sections: { h: string; p: string }[] }> = {
  de: {
    title: "Datenschutzerklärung",
    sections: [
      {
        h: "1. Allgemein",
        p: "ProntoFix ist ein Verzeichnisdienst für Handwerker in der Schweiz. Der Schutz Ihrer Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben und wie wir sie verwenden.",
      },
      {
        h: "2. Erhobene Daten",
        p: "Wir erheben keine personenbezogenen Daten ohne Ihre Einwilligung. Wenn Sie das Kontaktformular nutzen, speichern wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht, um Ihre Anfrage zu bearbeiten.",
      },
      {
        h: "3. Cookies",
        p: "Diese Website verwendet keine Tracking-Cookies. Es werden nur technisch notwendige Cookies eingesetzt.",
      },
      {
        h: "4. Drittanbieter",
        p: "Die Website wird über Vercel gehostet. Es gelten zusätzlich die Datenschutzbestimmungen von Vercel Inc.",
      },
      {
        h: "5. Ihre Rechte",
        p: "Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten, deren Berichtigung oder Löschung zu verlangen. Kontaktieren Sie uns dazu per E-Mail.",
      },
      {
        h: "6. Kontakt",
        p: "Bei Fragen zum Datenschutz wenden Sie sich an: info@prontofix.ch",
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    sections: [
      {
        h: "1. Généralités",
        p: "ProntoFix est un annuaire de professionnels en Suisse. La protection de vos données est importante pour nous. Cette politique de confidentialité vous informe sur les données que nous collectons et comment nous les utilisons.",
      },
      {
        h: "2. Données collectées",
        p: "Nous ne collectons aucune donnée personnelle sans votre consentement. Si vous utilisez le formulaire de contact, nous enregistrons votre nom, votre adresse e-mail et votre message pour traiter votre demande.",
      },
      {
        h: "3. Cookies",
        p: "Ce site n'utilise pas de cookies de suivi. Seuls les cookies techniquement nécessaires sont utilisés.",
      },
      {
        h: "4. Tiers",
        p: "Le site est hébergé par Vercel. Les conditions de confidentialité de Vercel Inc. s'appliquent également.",
      },
      {
        h: "5. Vos droits",
        p: "Vous avez le droit d'obtenir des informations sur vos données enregistrées, de demander leur rectification ou leur suppression. Contactez-nous par e-mail.",
      },
      {
        h: "6. Contact",
        p: "Pour toute question sur la protection des données : info@prontofix.ch",
      },
    ],
  },
  it: {
    title: "Informativa sulla privacy",
    sections: [
      {
        h: "1. Generalità",
        p: "ProntoFix è un servizio di directory per professionisti in Svizzera. La protezione dei tuoi dati è importante per noi. Questa informativa sulla privacy ti informa su quali dati raccogliamo e come li utilizziamo.",
      },
      {
        h: "2. Dati raccolti",
        p: "Non raccogliamo dati personali senza il tuo consenso. Se utilizzi il modulo di contatto, memorizziamo il tuo nome, indirizzo e-mail e messaggio per elaborare la tua richiesta.",
      },
      {
        h: "3. Cookie",
        p: "Questo sito non utilizza cookie di tracciamento. Vengono utilizzati solo cookie tecnicamente necessari.",
      },
      {
        h: "4. Terze parti",
        p: "Il sito è ospitato da Vercel. Si applicano inoltre le condizioni sulla privacy di Vercel Inc.",
      },
      {
        h: "5. I tuoi diritti",
        p: "Hai il diritto di ottenere informazioni sui tuoi dati memorizzati, di richiederne la rettifica o la cancellazione. Contattaci via e-mail.",
      },
      {
        h: "6. Contatto",
        p: "Per domande sulla protezione dei dati: info@prontofix.ch",
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

export default async function PrivacyPage({
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
