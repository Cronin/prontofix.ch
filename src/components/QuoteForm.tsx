"use client";

import { useState } from "react";
import { type Locale, t } from "@/lib/i18n";

const labels: Record<Locale, Record<string, string>> = {
  de: {
    title: "Kostenlose Offerte anfragen",
    name: "Ihr Name",
    phone: "Telefonnummer",
    email: "E-Mail",
    city: "Stadt / PLZ",
    message: "Beschreiben Sie Ihr Problem",
    submit: "Offerte anfragen",
    success: "Anfrage gesendet! Wir melden uns in Kürze.",
    emergency: "Notfall? Rufen Sie direkt an.",
  },
  fr: {
    title: "Demander un devis gratuit",
    name: "Votre nom",
    phone: "Numéro de téléphone",
    email: "E-mail",
    city: "Ville / NPA",
    message: "Décrivez votre problème",
    submit: "Demander un devis",
    success: "Demande envoyée ! Nous vous contactons rapidement.",
    emergency: "Urgence ? Appelez directement.",
  },
  it: {
    title: "Richiedi un preventivo gratuito",
    name: "Il tuo nome",
    phone: "Numero di telefono",
    email: "E-mail",
    city: "Città / CAP",
    message: "Descrivi il tuo problema",
    submit: "Richiedi preventivo",
    success: "Richiesta inviata! Ti contatteremo a breve.",
    emergency: "Emergenza? Chiama direttamente.",
  },
};

export function QuoteForm({
  lang,
  service,
  city,
}: {
  lang: Locale;
  service?: string;
  city?: string;
}) {
  const [sent, setSent] = useState(false);
  const l = labels[lang];

  return (
    <div className="rounded border border-neutral-200 bg-neutral-50 p-6">
      <h3 className="text-lg font-bold text-black">{l.title}</h3>

      {sent ? (
        <p className="mt-4 text-sm text-green-700">{l.success}</p>
      ) : (
        <form
          className="mt-4 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              placeholder={l.name}
              required
              className="rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
            <input
              type="tel"
              placeholder={l.phone}
              required
              className="rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="email"
              placeholder={l.email}
              required
              className="rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder={l.city}
              defaultValue={city || ""}
              className="rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>
          <textarea
            placeholder={l.message}
            rows={3}
            required
            className="rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            defaultValue={service ? `${service}: ` : ""}
          />
          <button
            type="submit"
            className="rounded bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
          >
            {l.submit}
          </button>
        </form>
      )}
    </div>
  );
}
