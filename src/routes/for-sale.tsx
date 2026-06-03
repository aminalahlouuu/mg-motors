import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { CarCard } from "@/components/CarCard";
import { CARS } from "@/data/cars";

export const Route = createFileRoute("/for-sale")({
  head: () => ({
    meta: [
      { title: "For Sale — Listino supercar | MG MOTORS" },
      {
        name: "description",
        content:
          "Tutte le supercar disponibili da MG MOTORS: Lamborghini, Porsche, Rolls-Royce, Bentley, Mercedes-AMG. Prezzi Km 0.",
      },
      { property: "og:title", content: "Listino — MG MOTORS" },
    ],
  }),
  component: ForSalePage,
});

function ForSalePage() {
  const brands = useMemo(
    () => ["Tutti", ...Array.from(new Set(CARS.map((c) => c.brand)))],
    [],
  );
  const [brand, setBrand] = useState<string>("Tutti");
  const [sort, setSort] = useState<"recent" | "price-asc" | "price-desc">("recent");

  const list = useMemo(() => {
    let l = brand === "Tutti" ? CARS : CARS.filter((c) => c.brand === brand);
    l = [...l];
    if (sort === "price-asc") l.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l.sort((a, b) => b.price - a.price);
    return l;
  }, [brand, sort]);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
          For Sale
        </p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Il nostro listino</h1>
        <p className="text-muted-foreground max-w-2xl">
          {CARS.length} vetture disponibili. Tutte le auto sono Km 0 o usato
          garantito, immediatamente disponibili in showroom.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setBrand(b)}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2 border transition-colors ${
                  brand === b
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="bg-card border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground focus:outline-none focus:border-primary"
          >
            <option value="recent">Ordina: più recenti</option>
            <option value="price-asc">Prezzo: crescente</option>
            <option value="price-desc">Prezzo: decrescente</option>
          </select>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CarCard key={c.slug} car={c} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
