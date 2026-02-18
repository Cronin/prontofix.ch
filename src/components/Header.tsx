import Link from "next/link";
import Image from "next/image";
import { type Locale, locales, t } from "@/lib/i18n";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${lang}`} className="flex items-center">
          <Image src="/logo.svg" alt="ProntoFix" width={160} height={28} priority />
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
          <Link href={`/${lang}/blog`} className="hover:text-black">
            {t[lang]["blog.title"]}
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
