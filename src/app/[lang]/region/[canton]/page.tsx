import { type Locale, locales, t } from "@/lib/i18n";
import {
  services,
  cantons,
  getCantonBySlug,
  getCitiesByCanton,
  getProfessionalCount,
} from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { lang: string; canton: string }[] = [];
  for (const lang of locales) {
    for (const c of cantons) {
      params.push({ lang, canton: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; canton: string }>;
}): Promise<Metadata> {
  const { lang: l, canton: cantonSlug } = await params;
  const lang = l as Locale;
  const canton = getCantonBySlug(cantonSlug);

  if (!canton) return { title: "ProntoFix" };

  const cantonCities = getCitiesByCanton(canton.code);
  const title = `${t[lang]["canton.title"]} ${canton.name[lang]} - ProntoFix`;
  const description = `${cantonCities.length} ${t[lang]["stats.cities"].toLowerCase()} ${t[lang]["combo.in"]} ${canton.name[lang]}. ${services.map((s) => s.name[lang]).join(", ")}.`;

  return {
    title,
    description,
    alternates: {
      languages: Object.fromEntries(
        locales.map((lo) => [lo, `/${lo}/region/${cantonSlug}`])
      ),
    },
  };
}

export default async function CantonPage({
  params,
}: {
  params: Promise<{ lang: string; canton: string }>;
}) {
  const { lang: l, canton: cantonSlug } = await params;
  const lang = l as Locale;
  const canton = getCantonBySlug(cantonSlug);

  if (!canton) notFound();

  const cantonCities = getCitiesByCanton(canton.code);
  const totalPros = cantonCities.reduce((sum, city) => {
    return sum + services.reduce((s, svc) => s + getProfessionalCount(svc.slug, city.slug), 0);
  }, 0);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ProntoFix", item: `https://prontofix.ch/${lang}` },
      { "@type": "ListItem", position: 2, name: canton.name[lang] },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-4 text-xs text-neutral-400">
            <Link href={`/${lang}`} className="hover:text-black">
              ProntoFix
            </Link>
            {" / "}
            <span className="text-neutral-600">{canton.name[lang]}</span>
          </nav>
          <h1 className="text-3xl font-bold text-black md:text-4xl">
            {t[lang]["canton.title"]} {canton.name[lang]}
          </h1>
          <p className="mt-2 text-neutral-500">
            {cantonCities.length} {t[lang]["stats.cities"]} &middot; {totalPros}+ {t[lang]["service.professionals"]}
          </p>
        </div>
      </section>

      {/* Cities in this canton */}
      <section className="border-b border-neutral-200 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold text-black">
            {t[lang]["canton.cities"]} {canton.name[lang]}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cantonCities.map((city) => {
              const proCount = services.reduce(
                (s, svc) => s + getProfessionalCount(svc.slug, city.slug),
                0
              );
              return (
                <Link
                  key={city.slug}
                  href={`/${lang}/${city.slug}`}
                  className="group rounded border border-neutral-200 p-5 hover:border-black"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black group-hover:underline">
                      {city.name}
                    </span>
                    <span className="text-xs text-neutral-400">{city.plz}</span>
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    {proCount} {t[lang]["service.professionals"]}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services grid per city */}
      <section className="border-b border-neutral-200 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold text-black">
            {t[lang]["services.title"]}
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {services.map((svc) => (
              <div key={svc.slug} className="rounded border border-neutral-200 p-4">
                <div className="text-2xl">{svc.icon}</div>
                <div className="mt-1 text-sm font-medium text-black">{svc.name[lang]}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cantonCities.slice(0, 4).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${lang}/${svc.slug}/${city.slug}`}
                      className="rounded border border-neutral-100 px-2 py-0.5 text-xs text-neutral-500 hover:border-black hover:text-black"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other cantons */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-lg font-bold text-black">
            {t[lang]["canton.allCantons"]}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {cantons
              .filter((c) => c.slug !== cantonSlug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${lang}/region/${c.slug}`}
                  className="rounded border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 hover:border-black hover:text-black"
                >
                  {c.name[lang]}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
