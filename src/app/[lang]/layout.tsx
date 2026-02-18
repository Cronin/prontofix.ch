import type { Locale } from "@/lib/i18n";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProntoFix",
    url: "https://prontofix.ch",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://prontofix.ch/${lang}/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ProntoFix",
    url: "https://prontofix.ch",
    logo: "https://prontofix.ch/logo.svg",
    description:
      lang === "de"
        ? "Finden Sie geprüfte Handwerker in der ganzen Schweiz. Sanitär, Elektriker, Schlüsseldienst und mehr. 24/7 verfügbar."
        : lang === "fr"
          ? "Trouvez des artisans vérifiés dans toute la Suisse. Plombier, électricien, serrurier et plus. Disponibles 24h/24."
          : "Trova artigiani verificati in tutta la Svizzera. Idraulico, elettricista, fabbro e altro. Disponibili 24/7.",
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {children}
    </>
  );
}
