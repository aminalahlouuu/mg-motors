import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/for-sale", label: "For Sale" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl tracking-[0.2em] text-primary">
              MG
            </span>
            <span className="font-display text-2xl tracking-[0.2em] text-foreground/90">
              MOTORS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                    active ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-xl tracking-[0.2em] text-primary mb-3">
              MG MOTORS
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Showroom di supercar e auto di lusso ad Al Quoz, Sheikh Zayed
              Road, Dubai. Brand New Km 0 e modelli da collezione.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-foreground/80 mb-3">
              Navigazione
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-foreground/80 mb-3">
              Showroom · Contatti
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Al Quoz, Sheikh Zayed Road<br />
              Dubai — UAE
            </p>
            <a
              href="mailto:mgmotorsclients@gmail.com"
              className="text-sm text-primary hover:underline break-all"
            >
              mgmotorsclients@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MG MOTORS. Tutti i diritti riservati.
        </div>
        <div hidden>argen</div>
      </footer>
    </div>
  );
}
