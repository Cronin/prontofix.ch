"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, locales, t } from "@/lib/i18n";

export function Header({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: `/${lang}#services`, label: t[lang]["nav.services"] },
    { href: `/${lang}#cities`, label: t[lang]["nav.cities"] },
    { href: `/${lang}#how`, label: t[lang]["how.title"] },
    { href: `/${lang}/blog`, label: t[lang]["blog.title"] },
  ];

  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${lang}`} className="flex items-center">
          <Image src="/logo.svg" alt="ProntoFix" width={160} height={28} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
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

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-center rounded border border-neutral-200 md:hidden"
            aria-label="Menu"
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-neutral-200 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-black"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
