import { type Locale, locales, t } from "@/lib/i18n";
import {
  services,
  cities,
  getServiceBySlug,
  getCityBySlug,
  getProfessionals,
} from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { lang: string; slug: string; city: string }[] = [];
  for (const lang of locales) {
    for (const s of services) {
      for (const c of cities) {
        params.push({ lang, slug: s.slug, city: c.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string; city: string }>;
}): Promise<Metadata> {
  const { lang: l, slug, city: citySlug } = await params;
  const lang = l as Locale;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) return { title: "ProntoFix" };

  const title = `${service.name[lang]} ${city.name} - ProntoFix`;
  const pros = getProfessionals(slug, citySlug);

  return {
    title,
    description: `${pros.length} ${t[lang]["service.verified"].toLowerCase()} ${service.name[lang].toLowerCase()} ${t[lang]["combo.in"]} ${city.name}. ${service.description[lang]}`,
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string; city: string }>;
}) {
  const { lang: l, slug, city: citySlug } = await params;
  const lang = l as Locale;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) notFound();

  const professionals = getProfessionals(slug, citySlug);
  const otherCities = cities
    .filter((c) => c.slug !== citySlug)
    .sort((a, b) => b.population - a.population)
    .slice(0, 8);
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 6);

  // Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${service.name[lang]} ${city.name}`,
    description: `${service.name[lang]} ${t[lang]["combo.in"]} ${city.name}`,
    numberOfItems: professionals.length,
    itemListElement: professionals.map((pro, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LocalBusiness",
        name: pro.company,
        address: {
          "@type": "PostalAddress",
          streetAddress: pro.address.split(",")[0],
          addressLocality: city.name,
          postalCode: city.plz,
          addressCountry: "CH",
        },
        telephone: pro.phone,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: pro.rating,
          reviewCount: pro.reviewCount,
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-4 text-xs text-neutral-400">
            <Link href={`/${lang}`} className="hover:text-black">
              ProntoFix
            </Link>
            {" / "}
            <Link href={`/${lang}/${service.slug}`} className="hover:text-black">
              {service.name[lang]}
            </Link>
            {" / "}
            <span className="text-neutral-600">{city.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-4xl">{service.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-black md:text-3xl">
                {service.name[lang]} {city.name}
              </h1>
              <p className="mt-1 text-neutral-500">
                {professionals.length} {t[lang]["service.professionals"]} &middot; {city.canton} &middot; {city.plz}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional listings */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {professionals.map((pro) => (
              <ProfessionalCard key={pro.name + pro.company} pro={pro} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Service description */}
      <section className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold text-black">
            {service.name[lang]} {t[lang]["combo.in"]} {city.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {service.description[lang]}.{" "}
            {lang === "de"
              ? `Alle ${service.name[lang]} in ${city.name} sind geprüft und verfügen über langjährige Erfahrung. Ob Notfall oder geplanter Einsatz — bei ProntoFix finden Sie den richtigen Fachmann für jede Situation. Rufen Sie direkt an oder fordern Sie eine unverbindliche Offerte an.`
              : lang === "fr"
                ? `Tous les ${service.name[lang].toLowerCase()}s à ${city.name} sont vérifiés et disposent d'une longue expérience. Urgence ou intervention planifiée — chez ProntoFix, trouvez le bon professionnel pour chaque situation. Appelez directement ou demandez un devis gratuit.`
                : `Tutti i ${service.name[lang].toLowerCase()} a ${city.name} sono verificati e dispongono di lunga esperienza. Emergenza o intervento programmato — su ProntoFix trovi il professionista giusto per ogni situazione. Chiama direttamente o richiedi un preventivo gratuito.`}
          </p>
        </div>
      </section>

      {/* Other cities */}
      <section className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-lg font-bold text-black">
            {t[lang]["combo.otherCities"]}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${lang}/${service.slug}/${c.slug}`}
                className="rounded border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 hover:border-black hover:text-black"
              >
                {service.name[lang]} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other services in this city */}
      <section className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-lg font-bold text-black">
            {t[lang]["combo.otherServices"]} {city.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${lang}/${s.slug}/${citySlug}`}
                className="rounded border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 hover:border-black hover:text-black"
              >
                {s.icon} {s.name[lang]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
