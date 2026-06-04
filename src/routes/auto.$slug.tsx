import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { CARS, formatPrice, formatKm } from "@/data/cars";

export const Route = createFileRoute("/auto/$slug")({
  loader: ({ params }) => {
    const car = CARS.find((c) => c.slug === params.slug);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => {
    const car = loaderData?.car;
    return {
      meta: car
        ? [
            { title: `${car.name} ${car.year} — ${formatPrice(car.price)} | MG MOTORS Dubai` },
            { name: "description", content: `${car.name} ${car.year} disponibile presso MG MOTORS, Al Quoz Dubai. ${car.power}, ${car.engine}. ${car.condition}.` },
            { property: "og:title", content: `${car.name} | MG MOTORS Dubai` },
            { property: "og:image", content: car.image },
          ]
        : [{ title: "Auto — MG MOTORS" }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Vettura non trovata</h1>
        <Link to="/for-sale" className="text-primary uppercase tracking-[0.25em] text-xs">
          ← Torna al listino
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Errore di caricamento</h1>
        <button onClick={reset} className="text-primary uppercase tracking-[0.25em] text-xs">
          Riprova
        </button>
      </div>
    </SiteLayout>
  ),
  component: CarDetailPage,
});

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border py-3 flex justify-between gap-4">
      <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <span className="text-sm text-foreground text-right">{value}</span>
    </div>
  );
}

function CarDetailPage() {
  const { car } = Route.useLoaderData();
  const others = CARS.filter((c) => c.slug !== car.slug && c.brand === car.brand)
    .concat(CARS.filter((c) => c.slug !== car.slug && c.brand !== car.brand))
    .slice(0, 3);
  const [activeImg, setActiveImg] = useState(0);
  const gallery = car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <Link
          to="/for-sale"
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
        >
          ← Listino
        </Link>
      </section>

      {/* Main image + thumbnail gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-secondary border border-border">
          <img
            src={gallery[activeImg]}
            alt={`${car.name} ${car.year} — vista ${activeImg + 1} | MG MOTORS Dubai`}
            className="w-full h-full object-cover transition-opacity duration-500"
            width={1920}
            height={1080}
            key={activeImg}
          />
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] bg-background/80 backdrop-blur px-3 py-1.5 rounded-sm text-primary border border-primary/40">
            {car.condition}
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.25em] bg-background/80 backdrop-blur px-3 py-1.5 rounded-sm text-foreground/80">
            {activeImg + 1} / {gallery.length}
          </div>
        </div>

        {gallery.length > 1 && (
          <div className="mt-4 grid grid-cols-5 gap-2 md:gap-3">
            {gallery.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`relative aspect-[4/3] overflow-hidden rounded-md border transition-all ${
                  activeImg === idx
                    ? "border-primary ring-1 ring-primary"
                    : "border-border opacity-60 hover:opacity-100"
                }`}
                aria-label={`Vedi foto ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Anteprima ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">
            {car.brand} · {car.year}
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
            {car.name}
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
            {car.description}
          </p>

          <h2 className="font-display text-2xl mb-4">Specifiche tecniche</h2>
          <div className="grid sm:grid-cols-2 gap-x-10">
            <Spec label="Anno" value={String(car.year)} />
            <Spec label="Chilometraggio" value={formatKm(car.km)} />
            <Spec label="Potenza" value={car.power} />
            <Spec label="Motore" value={car.engine} />
            <Spec label="Cambio" value={car.transmission} />
            <Spec label="Trazione" value={car.drivetrain} />
            <Spec label="0-100 km/h" value={car.acceleration} />
            <Spec label="Velocità max" value={car.topSpeed} />
            <Spec label="Alimentazione" value={car.fuel} />
            <Spec label="Condizione" value={car.condition} />
            <Spec label="Esterno" value={car.exterior} />
            <Spec label="Interno" value={car.interior} />
          </div>

          <h2 className="font-display text-2xl mt-12 mb-4">Equipaggiamento</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {car.highlights.map((h: string) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-foreground/90"
              >
                <span className="text-primary mt-1">◆</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit bg-card border border-border rounded-lg p-7">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Prezzo
          </p>
          <p className="font-display text-4xl text-primary mb-1">
            {formatPrice(car.price)}
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
            IVA esclusa · Export GCC
          </p>
          <div className="space-y-3 text-sm border-t border-border pt-5">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Disponibilità</span>
              <span>Immediata</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Showroom</span>
              <span>Al Quoz · Dubai</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Garanzia</span>
              <span>Ufficiale GCC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Consegna</span>
              <span>Worldwide</span>
            </div>
          </div>
          <Link
            to="/contatti"
            className="mt-7 block text-center bg-primary text-primary-foreground py-3.5 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-colors"
          >
            Richiedi informazioni
          </Link>
          <a
            href="mailto:mgmotorsclients@gmail.com"
            className="mt-3 block text-center border border-border py-3.5 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors"
          >
            Scrivici via email
          </a>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="font-display text-3xl mb-8">Altre vetture selezionate</h2>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/auto/$slug"
              params={{ slug: c.slug }}
              className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/60 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  {c.brand} · {c.year}
                </p>
                <h3 className="font-display text-lg">{c.name}</h3>
                <p className="text-primary font-display text-lg mt-3">
                  {formatPrice(c.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
