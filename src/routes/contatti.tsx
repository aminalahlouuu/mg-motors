import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — MG MOTORS" },
      {
        name: "description",
        content:
          "Contatta MG MOTORS via email o tramite il modulo. Ti rispondiamo entro 24 ore.",
      },
      { property: "og:title", content: "Contatti — MG MOTORS" },
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
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Contatti</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Parliamone</h1>
        <p className="text-muted-foreground max-w-2xl mb-14">
          Compila il modulo per richiedere informazioni su una vettura specifica
          o per fissare un appuntamento in showroom. Rispondiamo entro 24 ore.
        </p>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Info */}
          <aside className="space-y-8">
            <div className="bg-card border border-border p-7">
              <Mail className="text-primary mb-4" size={28} />
              <h3 className="font-display text-2xl mb-2">Scrivici</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Per qualsiasi richiesta puoi contattarci direttamente via email.
              </p>
              <a
                href="mailto:mgmotorsclients@gmail.com"
                className="text-primary hover:underline break-all text-sm"
              >
                mgmotorsclients@gmail.com
              </a>
            </div>
            <div className="bg-card border border-border p-7">
              <h3 className="font-display text-2xl mb-2">Orari di risposta</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>Lun — Ven: entro 4 ore</li>
                <li>Sab: entro 12 ore</li>
                <li>Dom: entro 24 ore</li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="bg-card border border-border p-7 md:p-10 space-y-5"
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
