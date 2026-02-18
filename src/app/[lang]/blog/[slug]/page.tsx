import { type Locale, locales, t } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const post of blogPosts) {
      params.push({ lang, slug: post.slug });
    }
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
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "ProntoFix" };

  return {
    title: post.title[lang],
    description: post.excerpt[lang],
    openGraph: {
      title: post.title[lang],
      description: post.excerpt[lang],
      type: "article",
      publishedTime: post.date,
      locale: lang === "de" ? "de_CH" : lang === "fr" ? "fr_CH" : "it_CH",
      siteName: "ProntoFix",
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((lo) => [lo, `/${lo}/blog/${slug}`])
      ),
    },
  };
}

function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];

  function flushTable() {
    if (tableRows.length < 2) return;
    const headers = tableRows[0];
    const rows = tableRows.slice(2); // skip separator row
    elements.push(
      <div key={`table-${elements.length}`} className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="border-b border-neutral-300 px-4 py-2 text-left font-medium text-black"
                >
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="border-b border-neutral-100 px-4 py-2 text-neutral-600"
                  >
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
  }

  function flushList() {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`list-${elements.length}`} className="my-4 ml-6 list-disc space-y-2 text-neutral-600">
        {listItems}
      </ul>
    );
    listItems = [];
  }

  function formatInline(text: string): React.ReactNode {
    // Handle bold **text**
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-medium text-black">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table row
    if (line.startsWith("|")) {
      if (!inTable) inTable = true;
      if (inList) { inList = false; flushList(); }
      const cells = line.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      inTable = false;
      flushTable();
    }

    // List item
    if (line.startsWith("- ")) {
      if (!inList) inList = true;
      listItems.push(
        <li key={`li-${elements.length}-${listItems.length}`}>
          {formatInline(line.slice(2))}
        </li>
      );
      continue;
    } else if (inList) {
      inList = false;
      flushList();
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const text = line.replace(/^\d+\.\s/, "");
      if (!inList) inList = true;
      listItems.push(
        <li key={`li-${elements.length}-${listItems.length}`}>
          {formatInline(text)}
        </li>
      );
      continue;
    } else if (inList && !/^\d+\.\s/.test(line) && !line.startsWith("- ")) {
      inList = false;
      flushList();
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="mt-10 mb-4 text-xl font-bold text-black"
        >
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="mt-8 mb-3 text-lg font-bold text-black"
        >
          {line.slice(4)}
        </h3>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") continue;

    // Paragraph
    elements.push(
      <p
        key={`p-${elements.length}`}
        className="my-3 text-sm leading-relaxed text-neutral-600"
      >
        {formatInline(line)}
      </p>
    );
  }

  if (inTable) flushTable();
  if (inList) flushList();

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: l, slug } = await params;
  const lang = l as Locale;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedService = services.find((s) => s.slug === post.category);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[lang],
    description: post.excerpt[lang],
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "ProntoFix",
      url: "https://prontofix.ch",
    },
    mainEntityOfPage: `https://prontofix.ch/${lang}/blog/${slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ProntoFix", item: `https://prontofix.ch/${lang}` },
      { "@type": "ListItem", position: 2, name: t[lang]["blog.title"], item: `https://prontofix.ch/${lang}/blog` },
      { "@type": "ListItem", position: 3, name: post.title[lang] },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 text-xs text-neutral-400">
            <Link href={`/${lang}`} className="hover:text-black">
              ProntoFix
            </Link>
            {" / "}
            <Link href={`/${lang}/blog`} className="hover:text-black">
              {t[lang]["blog.title"]}
            </Link>
            {" / "}
            <span className="text-neutral-600">{post.title[lang]}</span>
          </nav>

          {/* Meta */}
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

          <h1 className="mt-4 text-3xl font-bold text-black md:text-4xl">
            {post.title[lang]}
          </h1>
          <p className="mt-3 text-lg text-neutral-500">{post.excerpt[lang]}</p>

          {/* Content */}
          <div className="mt-10 border-t border-neutral-200 pt-8">
            {renderMarkdown(post.content[lang])}
          </div>

          {/* Related service */}
          {relatedService && (
            <div className="mt-12 rounded border border-neutral-200 p-6">
              <h3 className="text-sm font-bold text-black">
                {t[lang]["blog.relatedServices"]}
              </h3>
              <Link
                href={`/${lang}/${relatedService.slug}`}
                className="mt-3 flex items-center gap-3 hover:underline"
              >
                <span className="text-2xl">{relatedService.icon}</span>
                <div>
                  <div className="font-medium text-black">
                    {relatedService.name[lang]}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {relatedService.description[lang]}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Other articles */}
          {otherPosts.length > 0 && (
            <div className="mt-12 border-t border-neutral-200 pt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-black">
                  {t[lang]["blog.title"]}
                </h3>
                <Link
                  href={`/${lang}/blog`}
                  className="text-sm text-neutral-500 underline hover:text-black"
                >
                  {t[lang]["blog.backToList"]}
                </Link>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {otherPosts.slice(0, 2).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${lang}/blog/${p.slug}`}
                    className="group rounded border border-neutral-200 p-4 hover:border-black"
                  >
                    <div className="text-xs text-neutral-400">
                      {new Date(p.date).toLocaleDateString(
                        lang === "de" ? "de-CH" : lang === "fr" ? "fr-CH" : "it-CH"
                      )}
                    </div>
                    <div className="mt-1 font-medium text-black group-hover:underline">
                      {p.title[lang]}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer lang={lang} />
    </div>
  );
}
