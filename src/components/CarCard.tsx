import { type Car, formatPrice } from "@/data/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/60 transition-all duration-500">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={car.image}
          alt={`${car.name} ${car.year} disponibile presso MG MOTORS`}
          loading="lazy"
          width={1536}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-background/80 backdrop-blur px-2.5 py-1 rounded-sm text-primary border border-primary/40">
          Km 0
        </div>
      </div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
          {car.brand} · {car.year}
        </p>
        <h3 className="font-display text-xl text-foreground leading-tight">
          {car.name}
        </h3>
        <div className="mt-4 pt-4 border-t border-border flex items-baseline justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Prezzo
          </span>
          <span className="font-display text-xl text-primary">
            {formatPrice(car.price)}
          </span>
        </div>
      </div>
    </article>
  );
}
