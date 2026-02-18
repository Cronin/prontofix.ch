import { type Locale, locales, t } from "@/lib/i18n";
import { services, cities } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: l } = await params;
  const lang = l as Locale;
  const titles: Record<Locale, string> = {
    de: "ProntoFix - Lokale Profis in der Schweiz finden",
    fr: "ProntoFix - Trouvez des professionnels locaux en Suisse",
    it: "ProntoFix - Trova professionisti locali in Svizzera",
  };
  return {
    title: titles[lang],
    description: t[lang]["hero.subtitle"],
    alternates: {
      languages: Object.fromEntries(locales.map((lo) => [lo, `/${lo}`])),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: l } = await params;
  const lang = l as Locale;

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            {t[lang]["hero.title1"]}
            <br />
            <span className="text-red-600">{t[lang]["hero.title2"]}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-neutral-500">
            {t[lang]["hero.subtitle"]}
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder={t[lang]["hero.search.service"]}
              className="flex-1 rounded border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder={t[lang]["hero.search.city"]}
              className="rounded border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black sm:w-40"
            />
            <button className="rounded bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800">
              {t[lang]["hero.search.button"]}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8 px-6 text-center">
          {[
            { value: "2'400+", label: t[lang]["stats.professionals"] },
            { value: "45'000+", label: t[lang]["stats.reviews"] },
            { value: "4.7", label: t[lang]["stats.avgRating"] },
            { value: `${cities.length}+`, label: t[lang]["stats.cities"] },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-black">{stat.value}</div>
              <div className="text-xs text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-black">{t[lang]["services.title"]}</h2>
          <p className="mt-1 text-sm text-neutral-500">{t[lang]["services.subtitle"]}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${lang}/${s.slug}`}
                className="group rounded border border-neutral-200 p-4 text-center hover:border-black"
              >
                <div className="text-3xl">{s.icon}</div>
                <div className="mt-2 text-sm font-medium text-black group-hover:underline">
                  {s.name[lang]}
                </div>
                <div className="mt-1 text-xs text-neutral-400 line-clamp-2">
                  {s.description[lang]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" className="border-b border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-black">{t[lang]["cities.title"]}</h2>
          <p className="mt-1 text-sm text-neutral-500">{t[lang]["cities.subtitle"]}</p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {cities
              .sort((a, b) => b.population - a.population)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${lang}/${c.slug}`}
                  className="flex items-center justify-between rounded border border-neutral-200 px-4 py-3 hover:border-black"
                >
                  <span className="text-sm font-medium text-black">{c.name}</span>
                  <span className="text-xs text-neutral-400">{c.canton}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-black">{t[lang]["how.title"]}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-black">
                    {t[lang][`how.step${step}.title`]}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {t[lang][`how.step${step}.desc`]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
