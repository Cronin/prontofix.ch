import { type Locale, locales, t } from "@/lib/i18n";
import { services, cities, getServiceBySlug, getCityBySlug, getProfessionals } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const s of services) params.push({ lang, slug: s.slug });
    for (const c of cities) params.push({ lang, slug: c.slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: l, slug } = await params;
  const lang = l as Locale;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(slug);

  if (service) {
    return {
      title: `${service.name[lang]} - ProntoFix ${t[lang]["service.in"]}`,
      description: service.description[lang],
    };
  }
  if (city) {
    return {
      title: `${t[lang]["city.servicesIn"]} ${city.name} - ProntoFix`,
      description: `${t[lang]["city.findPro"]} ${city.name}. ${services.map((s) => s.name[lang]).join(", ")}.`,
    };
  }
  return { title: "ProntoFix" };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: l, slug } = await params;
  const lang = l as Locale;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(slug);

  if (service) return <ServicePage lang={lang} service={typeof service === "object" ? service : service} />;
  if (city) return <CityPage lang={lang} city={city} />;
  notFound();
}

function ServicePage({ lang, service }: { lang: Locale; service: ReturnType<typeof getServiceBySlug> }) {
  if (!service) return null;
  // Show top 3 cities with previews
  const topCities = cities.filter((c) => c.lang === lang || cities.filter((ct) => ct.lang === lang).length < 3)
    .sort((a, b) => b.population - a.population)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-black md:text-4xl">
                {service.name[lang]}
              </h1>
              <p className="mt-1 text-neutral-500">{service.description[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities for this service */}
      <section className="border-b border-neutral-200 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold text-black">
            {service.name[lang]} — {t[lang]["service.available"]} {cities.length} {t[lang]["service.cities"]}
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {cities
              .sort((a, b) => b.population - a.population)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${lang}/${service.slug}/${c.slug}`}
                  className="flex items-center justify-between rounded border border-neutral-200 px-4 py-3 hover:border-black"
                >
                  <span className="text-sm font-medium text-black">
                    {service.name[lang]} {c.name}
                  </span>
                  <span className="text-xs text-neutral-400">{c.canton}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Preview: top professionals in biggest city */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold text-black">
            Top {service.name[lang]} — {topCities[0]?.name}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {getProfessionals(service.slug, topCities[0]?.slug || "zuerich")
              .slice(0, 4)
              .map((pro) => (
                <ProfessionalCard key={pro.name} pro={pro} lang={lang} />
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href={`/${lang}/${service.slug}/${topCities[0]?.slug}`}
              className="text-sm font-medium text-black underline"
            >
              {t[lang]["combo.findBest"]} {service.name[lang]} {t[lang]["combo.in"]} {topCities[0]?.name} →
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}

function CityPage({ lang, city }: { lang: Locale; city: ReturnType<typeof getCityBySlug> }) {
  if (!city) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl font-bold text-black md:text-4xl">
            {t[lang]["city.servicesIn"]} {city.name}
          </h1>
          <p className="mt-2 text-neutral-500">
            {t[lang]["city.findPro"]} {city.name} ({city.canton})
          </p>
        </div>
      </section>

      {/* All services in this city */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {services.map((s) => {
              const pros = getProfessionals(s.slug, city.slug);
              return (
                <Link
                  key={s.slug}
                  href={`/${lang}/${s.slug}/${city.slug}`}
                  className="group rounded border border-neutral-200 p-5 hover:border-black"
                >
                  <div className="text-3xl">{s.icon}</div>
                  <div className="mt-2 font-medium text-black group-hover:underline">
                    {s.name[lang]}
                  </div>
                  <div className="mt-1 text-xs text-neutral-400">
                    {pros.length} {t[lang]["service.professionals"]}
                  </div>
                  <div className="mt-2 text-xs text-neutral-500 line-clamp-2">
                    {s.description[lang]}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
