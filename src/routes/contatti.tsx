import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Send, Check, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — MG MOTORS Al Quoz Dubai" },
      {
        name: "description",
        content:
          "MG MOTORS — showroom di supercar e auto di lusso ad Al Quoz, Sheikh Zayed Road, Dubai. Contattaci via email o tramite il modulo.",
      },
      { property: "og:title", content: "Contatti — MG MOTORS Dubai" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Richiesta informazioni — ${form.interest || "MG MOTORS"}`,
    );
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nTelefono: ${form.phone}\nInteresse: ${form.interest}\n\nMessaggio:\n${form.message}`,
    );
    window.location.href = `mailto:mgmotorsclients@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Contatti</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Parliamone</h1>
        <p className="text-muted-foreground max-w-2xl mb-14">
          Vieni a trovarci nel nostro showroom di Al Quoz lungo la Sheikh Zayed
          Road, oppure compila il modulo per fissare un appuntamento dedicato.
          Rispondiamo entro 24 ore.
        </p>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Info */}
          <aside className="space-y-6">
            <div className="bg-card border border-border p-7">
              <MapPin className="text-primary mb-4" size={28} />
              <h3 className="font-display text-2xl mb-2">Showroom</h3>
              <p className="text-sm text-foreground/90 mb-1">
                MG MOTORS Showroom
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Al Quoz Industrial Area<br />
                Sheikh Zayed Road<br />
                Dubai — Emirati Arabi Uniti
              </p>
              <a
                href="https://maps.google.com/?q=Al+Quoz+Sheikh+Zayed+Road+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary text-xs uppercase tracking-[0.25em] hover:underline"
              >
                Apri in Google Maps →
              </a>
            </div>

            <div className="bg-card border border-border p-7">
              <Mail className="text-primary mb-4" size={28} />
              <h3 className="font-display text-2xl mb-2">Scrivici</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Per richieste su vetture specifiche o consulenza dedicata.
              </p>
              <a
                href="mailto:mgmotorsclients@gmail.com"
                className="text-primary hover:underline break-all text-sm"
              >
                mgmotorsclients@gmail.com
              </a>
            </div>

            <div className="bg-card border border-border p-7">
              <Clock className="text-primary mb-4" size={28} />
              <h3 className="font-display text-2xl mb-2">Orari showroom</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li className="flex justify-between"><span>Sab — Gio</span><span>10:00 — 22:00</span></li>
                <li className="flex justify-between"><span>Ven</span><span>14:00 — 22:00</span></li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="bg-card border border-border p-7 md:p-10 space-y-5 h-fit"
          >
            {sent && (
              <div className="flex items-center gap-2 text-primary text-sm border border-primary/40 bg-primary/10 px-4 py-3">
                <Check size={16} />
                Ti abbiamo aperto il client email. Inviaci il messaggio e ti
                risponderemo a breve.
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Nome e cognome"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Telefono (opzionale)"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />
              <Field
                label="Vettura di interesse"
                value={form.interest}
                onChange={(v) => setForm({ ...form, interest: v })}
                placeholder="Es. Lamborghini Revuelto"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                Messaggio
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Raccontaci cosa stai cercando..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
            >
              <Send size={16} /> Invia richiesta
            </button>
          </form>
        </div>
      </section>

      {/* Al Quoz history section */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
            La nostra sede
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Al Quoz, l'anima automotive di Dubai
          </h2>
          <div className="prose prose-invert max-w-none space-y-5 text-foreground/85 leading-relaxed">
            <p>
              MG MOTORS ha scelto <strong className="text-foreground">Al Quoz</strong>,
              lungo la celebre <strong className="text-foreground">Sheikh Zayed Road</strong>,
              perché qui batte da decenni il cuore del mondo automotive di Dubai.
              Nato negli anni '80 come distretto industriale ai margini del deserto,
              Al Quoz è oggi una delle aree più dinamiche e iconiche dell'emirato:
              un crocevia dove convivono showroom delle case più esclusive del
              pianeta, atelier di tuning di livello mondiale, gallerie d'arte
              contemporanea e laboratori di design.
            </p>
            <p>
              La Sheikh Zayed Road — l'arteria a dodici corsie che attraversa
              Dubai da Abu Dhabi a Sharjah — è dagli anni '90 la vetrina su cui
              si affacciano i marchi più ambiti del lusso automobilistico
              mondiale. Camminare ad Al Quoz significa attraversare uno spazio
              dove Lamborghini, Rolls-Royce, Bentley, Ferrari, Aston Martin,
              Porsche e Range Rover non sono semplici brand, ma protagonisti
              quotidiani di un ecosistema unico al mondo.
            </p>
            <p>
              È in questa cornice che MG MOTORS ha costruito la propria
              identità: una selezione curata di supercar e vetture di lusso
              <strong className="text-foreground"> brand new Km 0</strong> e
              modelli da collezione, presentate in uno spazio espositivo che
              riflette il rigore e l'eleganza che da sempre caratterizzano la
              cultura automotive di Dubai. Visitarci ad Al Quoz significa
              entrare in contatto diretto con la passione che muove ogni nostra
              scelta.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
