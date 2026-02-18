import Link from "next/link";
import { type Locale, locales, t } from "@/lib/i18n";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight">
          Pronto<span className="text-red-600">Fix</span>
        </Link>
        <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
          <Link href={`/${lang}#services`} className="hover:text-black">
            {t[lang]["nav.services"]}
          </Link>
          <Link href={`/${lang}#cities`} className="hover:text-black">
            {t[lang]["nav.cities"]}
          </Link>
          <Link href={`/${lang}#how`} className="hover:text-black">
            {t[lang]["how.title"]}
          </Link>
        </nav>
        <div className="flex gap-2 text-xs">
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              className={`rounded border px-2 py-1 ${
                l === lang
                  ? "border-neutral-300 font-medium text-black"
                  : "border-transparent text-neutral-400 hover:text-black"
              }`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
