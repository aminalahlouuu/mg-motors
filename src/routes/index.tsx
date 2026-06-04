import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CarCard } from "@/components/CarCard";
import { CARS } from "@/data/cars";
import { MapPin } from "lucide-react";
import heroImg from "@/assets/hero-mgmotors.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG MOTORS Dubai — Supercar e auto di lusso Km 0 ad Al Quoz" },
      {
        name: "description",
        content:
          "MG MOTORS, showroom di supercar Lamborghini, Porsche, Rolls-Royce, Bentley e Range Rover ad Al Quoz, Sheikh Zayed Road, Dubai. Vetture nuove Km 0 e da collezione.",
      },
      { property: "og:title", content: "MG MOTORS Dubai — Supercar e auto di lusso" },
      {
        property: "og:description",
        content:
          "Selezione esclusiva di supercar e auto di lusso ad Al Quoz, Dubai. Lamborghini, Porsche, Rolls-Royce, Bentley, Range Rover, Ferrari.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = CARS.slice(0, 6);
  const brandCount = (b: string) => CARS.filter((c) => c.brand === b).length;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Lamborghini Revuelto nello showroom MG MOTORS Al Quoz Dubai"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-primary mb-5">
            <MapPin size={14} /> Al Quoz · Sheikh Zayed Road · Dubai
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl text-foreground">
            La tua prossima <span className="text-primary italic">supercar</span> ti aspetta.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
            MG MOTORS seleziona per te le vetture più ricercate al mondo.
            Lamborghini, Porsche, Rolls-Royce, Bentley, Range Rover, Ferrari e
            Aston Martin — solo Brand New Km 0 e modelli da collezione.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/for-sale"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
            >
              Vedi il listino · {CARS.length} vetture
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center px-7 py-3.5 border border-foreground/30 text-foreground text-sm uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-colors"
            >
              Visita lo showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {["Lamborghini", "Porsche", "Rolls-Royce", "Range Rover", "Bentley", "Mercedes-Benz", "Ferrari", "Aston Martin"].map((b) => {
            const n = brandCount(b);
            if (!n) return null;
            return (
              <div key={b} className="text-center">
                <p className="font-display text-lg text-foreground">{b}</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {n} {n === 1 ? "vettura" : "vetture"}
                </p>
              </div>
            );
          })}
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

      {/* Al Quoz teaser */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
              Il nostro quartiere
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Al Quoz, la <span className="text-primary italic">capitale</span> mondiale del lusso su quattro ruote
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                MG MOTORS ha sede lungo la <strong className="text-foreground">Sheikh Zayed Road</strong>,
                nel cuore di Al Quoz: l'area di Dubai dove dagli anni '90 si
                sono insediati gli showroom più prestigiosi del mondo, gli
                atelier di tuning di livello internazionale e le gallerie d'arte
                contemporanea che hanno trasformato un ex distretto industriale
                in uno dei punti di riferimento globali del lifestyle premium.
              </p>
              <p>
                Visitarci significa entrare in un ecosistema unico, dove la
                cultura automotive vive e si rinnova ogni giorno.
              </p>
            </div>
            <Link
              to="/contatti"
              className="inline-block mt-7 text-primary text-xs uppercase tracking-[0.3em] hover:underline"
            >
              Scopri la storia di Al Quoz →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { n: CARS.length, l: "Vetture in showroom" },
              { n: "12", l: "Marchi rappresentati" },
              { n: "GCC", l: "Specifiche ufficiali" },
              { n: "24h", l: "Tempo di risposta" },
              { n: "100%", l: "Export internazionale" },
              { n: "Al Quoz", l: "Dubai, UAE" },
            ].map((s) => (
              <div key={s.l} className="border border-border p-5 bg-background/40">
                <p className="font-display text-2xl md:text-3xl text-primary mb-1">{s.n}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-background">
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
              t: "Consegna worldwide",
              d: "Organizziamo trasporto, dogana e immatricolazione ovunque tu sia.",
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
