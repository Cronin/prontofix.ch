import Link from "next/link";

const topLinks = [
  { href: "/de/plumber/zuerich", label: "Sanitär Zürich" },
  { href: "/de/electrician/zuerich", label: "Elektriker Zürich" },
  { href: "/de/locksmith/bern", label: "Schlüsseldienst Bern" },
  { href: "/fr/plumber/geneve", label: "Plombier Genève" },
  { href: "/fr/electrician/lausanne", label: "Électricien Lausanne" },
  { href: "/it/plumber/lugano", label: "Idraulico Lugano" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="mx-auto max-w-lg px-6 text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="mt-4 text-neutral-500">
          Diese Seite wurde nicht gefunden.
        </p>
        <p className="mt-1 text-neutral-400 text-sm">
          Cette page est introuvable. / Pagina non trovata.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 hover:border-black hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/de"
            className="rounded bg-black px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            DE
          </Link>
          <Link
            href="/fr"
            className="rounded border border-neutral-300 px-5 py-2 text-sm font-medium text-black hover:bg-neutral-50"
          >
            FR
          </Link>
          <Link
            href="/it"
            className="rounded border border-neutral-300 px-5 py-2 text-sm font-medium text-black hover:bg-neutral-50"
          >
            IT
          </Link>
        </div>
      </div>
    </div>
  );
}
