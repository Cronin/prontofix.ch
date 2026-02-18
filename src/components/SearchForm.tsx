"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { type Locale, t } from "@/lib/i18n";
import { services, cities } from "@/lib/data";

export function SearchForm({ lang }: { lang: Locale }) {
  const router = useRouter();
  const [serviceQuery, setServiceQuery] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredServices = useMemo(() => {
    if (!serviceQuery) return services;
    const q = serviceQuery.toLowerCase();
    return services.filter(
      (s) =>
        s.name[lang].toLowerCase().includes(q) ||
        s.description[lang].toLowerCase().includes(q)
    );
  }, [serviceQuery, lang]);

  const filteredCities = useMemo(() => {
    if (!cityQuery) return cities.sort((a, b) => b.population - a.population).slice(0, 10);
    const q = cityQuery.toLowerCase();
    return cities
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.plz.startsWith(q) ||
          c.canton.toLowerCase().includes(q)
      )
      .sort((a, b) => b.population - a.population)
      .slice(0, 8);
  }, [cityQuery]);

  function handleSearch() {
    if (selectedService && selectedCity) {
      router.push(`/${lang}/${selectedService}/${selectedCity}`);
    } else if (selectedService) {
      router.push(`/${lang}/${selectedService}`);
    } else if (selectedCity) {
      router.push(`/${lang}/${selectedCity}`);
    }
  }

  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
      {/* Service input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder={t[lang]["hero.search.service"]}
          value={serviceQuery}
          onChange={(e) => {
            setServiceQuery(e.target.value);
            setSelectedService("");
            setShowServiceDropdown(true);
          }}
          onFocus={() => setShowServiceDropdown(true)}
          onBlur={() => setTimeout(() => setShowServiceDropdown(false), 200)}
          className="w-full rounded border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
        />
        {showServiceDropdown && filteredServices.length > 0 && (
          <div className="absolute left-0 top-full z-10 mt-1 w-full rounded border border-neutral-200 bg-white shadow-lg">
            {filteredServices.map((s) => (
              <button
                key={s.slug}
                type="button"
                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-neutral-50"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setServiceQuery(s.name[lang]);
                  setSelectedService(s.slug);
                  setShowServiceDropdown(false);
                }}
              >
                <span>{s.icon}</span>
                <span>{s.name[lang]}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* City input */}
      <div className="relative sm:w-40">
        <input
          type="text"
          placeholder={t[lang]["hero.search.city"]}
          value={cityQuery}
          onChange={(e) => {
            setCityQuery(e.target.value);
            setSelectedCity("");
            setShowCityDropdown(true);
          }}
          onFocus={() => setShowCityDropdown(true)}
          onBlur={() => setTimeout(() => setShowCityDropdown(false), 200)}
          className="w-full rounded border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
        />
        {showCityDropdown && filteredCities.length > 0 && (
          <div className="absolute left-0 top-full z-10 mt-1 w-full rounded border border-neutral-200 bg-white shadow-lg">
            {filteredCities.map((c) => (
              <button
                key={c.slug}
                type="button"
                className="flex w-full items-center justify-between px-4 py-2 text-left text-sm hover:bg-neutral-50"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setCityQuery(c.name);
                  setSelectedCity(c.slug);
                  setShowCityDropdown(false);
                }}
              >
                <span>{c.name}</span>
                <span className="text-xs text-neutral-400">{c.canton}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="rounded bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
      >
        {t[lang]["hero.search.button"]}
      </button>
    </div>
  );
}
