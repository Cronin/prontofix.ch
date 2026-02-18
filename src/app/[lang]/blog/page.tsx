import { type Locale, locales, t } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog";
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

  return {
    title: `${t[lang]["blog.title"]} - ProntoFix`,
    description: t[lang]["blog.subtitle"],
    alternates: {
      languages: Object.fromEntries(
        locales.map((lo) => [lo, `/${lo}/blog`])
      ),
    },
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: l } = await params;
  const lang = l as Locale;

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl font-bold text-black md:text-4xl">
            {t[lang]["blog.title"]}
          </h1>
          <p className="mt-2 text-neutral-500">{t[lang]["blog.subtitle"]}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="group rounded border border-neutral-200 p-6 hover:border-black"
              >
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(
                      lang === "de" ? "de-CH" : lang === "fr" ? "fr-CH" : "it-CH"
                    )}
                  </time>
                  <span>&middot;</span>
                  <span>
                    {post.readingTime} {t[lang]["blog.readTime"]}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-black group-hover:underline">
                  {post.title[lang]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                  {post.excerpt[lang]}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-black underline">
                  {t[lang]["blog.readMore"]} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
