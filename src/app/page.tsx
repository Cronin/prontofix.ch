const services = [
  { name: "Plumber", de: "Sanitär", fr: "Plombier", it: "Idraulico", icon: "🔧" },
  { name: "Electrician", de: "Elektriker", fr: "Électricien", it: "Elettricista", icon: "⚡" },
  { name: "Locksmith", de: "Schlüsseldienst", fr: "Serrurier", it: "Fabbro", icon: "🔑" },
  { name: "Heating", de: "Heizung", fr: "Chauffage", it: "Riscaldamento", icon: "🔥" },
  { name: "Painter", de: "Maler", fr: "Peintre", it: "Imbianchino", icon: "🎨" },
  { name: "Cleaning", de: "Reinigung", fr: "Nettoyage", it: "Pulizia", icon: "✨" },
];

const cities = [
  { name: "Zürich", canton: "ZH", lang: "de" },
  { name: "Genève", canton: "GE", lang: "fr" },
  { name: "Basel", canton: "BS", lang: "de" },
  { name: "Bern", canton: "BE", lang: "de" },
  { name: "Lausanne", canton: "VD", lang: "fr" },
  { name: "Luzern", canton: "LU", lang: "de" },
  { name: "St. Gallen", canton: "SG", lang: "de" },
  { name: "Lugano", canton: "TI", lang: "it" },
  { name: "Winterthur", canton: "ZH", lang: "de" },
  { name: "Biel/Bienne", canton: "BE", lang: "de" },
  { name: "Thun", canton: "BE", lang: "de" },
  { name: "Fribourg", canton: "FR", lang: "fr" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-tight">
            Pronto<span className="text-red-600">Fix</span>
          </div>
          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#cities" className="hover:text-black">Cities</a>
            <a href="#how" className="hover:text-black">How it works</a>
          </nav>
          <div className="flex gap-2 text-xs">
            <span className="rounded border border-neutral-200 px-2 py-1 font-medium">DE</span>
            <span className="rounded px-2 py-1 text-neutral-400 hover:text-black cursor-pointer">FR</span>
            <span className="rounded px-2 py-1 text-neutral-400 hover:text-black cursor-pointer">IT</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Find a local professional.
            <br />
            <span className="text-red-600">Fast.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-neutral-500">
            Verified tradespeople across Switzerland. Available 24/7.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="What do you need? (e.g. plumber, electrician)"
              className="flex-1 rounded border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="City or PLZ"
              className="rounded border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black sm:w-40"
            />
            <button className="rounded bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-black">Services</h2>
          <p className="mt-1 text-sm text-neutral-500">Browse by category</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {services.map((s) => (
              <a
                key={s.name}
                href={`/${s.name.toLowerCase()}`}
                className="group rounded border border-neutral-200 p-4 text-center hover:border-black"
              >
                <div className="text-3xl">{s.icon}</div>
                <div className="mt-2 text-sm font-medium text-black group-hover:underline">
                  {s.de}
                </div>
                <div className="text-xs text-neutral-400">{s.fr} / {s.it}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" className="border-b border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-black">Cities</h2>
          <p className="mt-1 text-sm text-neutral-500">Find professionals near you</p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {cities.map((c) => (
              <a
                key={c.name}
                href={`/${c.name.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="flex items-center justify-between rounded border border-neutral-200 px-4 py-3 hover:border-black"
              >
                <span className="text-sm font-medium text-black">{c.name}</span>
                <span className="text-xs text-neutral-400">{c.canton}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-black">How it works</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Describe your problem", desc: "Tell us what you need and where you are." },
              { step: "2", title: "Get matched", desc: "We find verified professionals available in your area." },
              { step: "3", title: "Get it fixed", desc: "Contact them directly. No middleman, no commission." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-black">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-neutral-400">
          ProntoFix &middot; Switzerland &middot; All rights reserved
        </div>
      </footer>
    </div>
  );
}
