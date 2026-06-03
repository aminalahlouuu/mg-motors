import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CarCard } from "@/components/CarCard";
import { CARS } from "@/data/cars";
import heroImg from "@/assets/hero-mgmotors.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG MOTORS — Supercar e auto di lusso Km 0" },
      {
        name: "description",
        content:
          "MG MOTORS: selezione esclusiva di supercar Lamborghini, Porsche, Ferrari, Rolls-Royce e Bentley. Km 0 e usato garantito.",
      },
      { property: "og:title", content: "MG MOTORS — Supercar e auto di lusso" },
      {
        property: "og:description",
        content:
          "Concessionaria di vetture sportive e di lusso. Selezione esclusiva di supercar Km 0.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = CARS.slice(0, 6);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Lamborghini Revuelto esposta nello showroom MG MOTORS"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-5">
            Luxury & Performance
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl text-foreground">
            La tua prossima <span className="text-primary italic">supercar</span> ti aspetta.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
            MG MOTORS seleziona per te le vetture più ricercate al mondo.
            Lamborghini, Porsche, Bentley, Rolls-Royce e Mercedes-AMG: solo Km 0
            e usato garantito.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/for-sale"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
            >
              Vedi il listino
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center px-7 py-3.5 border border-foreground/30 text-foreground text-sm uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-colors"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">
              In Evidenza
            </p>
            <h2 className="font-display text-4xl md:text-5xl">Selezione del momento</h2>
          </div>
          <Link
            to="/for-sale"
            className="text-sm uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors"
          >
            Vedi tutte →
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <CarCard key={c.slug} car={c} />
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10 text-center md:text-left">
          {[
            {
              t: "Selezione esclusiva",
              d: "Solo vetture certificate, scelte una ad una dal nostro team.",
            },
            {
              t: "Servizio dedicato",
              d: "Consulenza personalizzata e gestione completa della pratica.",
            },
            {
              t: "Consegna in tutta Europa",
              d: "Organizziamo il trasporto e l'immatricolazione ovunque tu sia.",
            },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-display text-2xl text-primary mb-2">{b.t}</h3>
              <p className="text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
