import Link from "next/link";
import { type Locale, t } from "@/lib/i18n";

export function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-neutral-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-xs text-neutral-400 sm:flex-row sm:justify-between">
        <div>ProntoFix &middot; Switzerland &middot; {t[lang]["footer.allRights"]}</div>
        <div className="flex gap-4">
          <Link href={`/${lang}/privacy`} className="hover:text-black underline">
            {t[lang]["footer.privacy"]}
          </Link>
          <Link href={`/${lang}/terms`} className="hover:text-black underline">
            {t[lang]["footer.terms"]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
