import { type Locale, t } from "@/lib/i18n";
import type { Professional } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="text-sm text-amber-500">
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

export function ProfessionalCard({
  pro,
  lang,
}: {
  pro: Professional;
  lang: Locale;
}) {
  return (
    <div className="rounded border border-neutral-200 p-5 hover:border-neutral-400">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-semibold text-black truncate">{pro.company}</h3>
          <p className="mt-0.5 text-sm text-neutral-500">{pro.name}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          {pro.verified && (
            <span className="whitespace-nowrap rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
              {t[lang]["service.verified"]}
            </span>
          )}
          {pro.emergency && (
            <span className="whitespace-nowrap rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
              {t[lang]["service.emergency"]}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <Stars rating={pro.rating} />
        <span className="text-sm text-neutral-500">
          {pro.rating} ({pro.reviewCount} {t[lang]["service.reviews"]})
        </span>
      </div>

      <p className="mt-2 text-sm text-neutral-500">{pro.address}</p>
      <p className="mt-1 text-xs text-neutral-400">
        {pro.yearsActive}+ {lang === "de" ? "Jahre aktiv" : lang === "fr" ? "ans d'activité" : "anni di attività"}
      </p>

      <div className="mt-4 flex gap-3">
        <a
          href={`tel:${pro.phone.replace(/\s/g, "")}`}
          className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          {t[lang]["service.callNow"]}
        </a>
        <button className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium text-black hover:border-black">
          {t[lang]["service.getQuote"]}
        </button>
      </div>
    </div>
  );
}
