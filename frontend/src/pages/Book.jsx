import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { ArrowRight, MessageCircle, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { SITE, buildWhatsappUrl } from "../lib/site";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const EXPERIENCE_TYPES = [
  "Private boat charter",
  "Sunset cruise",
  "Island hop (Anguilla / St Barth)",
  "Jet ski",
  "Restaurant booking",
  "Custom day",
];

export default function Book() {
  const [params] = useSearchParams();
  const prefilledBoat = params.get("boat") || "";
  const prefilledType = params.get("type") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    date: "",
    persons: "",
    experience_type: prefilledType ? `Private boat charter (${prefilledType})` : "",
    boat_name: prefilledBoat,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (prefilledBoat) {
      setForm((f) => ({
        ...f,
        boat_name: prefilledBoat,
        experience_type: f.experience_type || "Private boat charter",
        message:
          f.message ||
          `I'm interested in chartering "${prefilledBoat}". Could you share availability and details?`,
      }));
    }
  }, [prefilledBoat]);

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () => {
    const lines = [
      "Hello Feel SXM 👋",
      "",
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `WhatsApp: ${form.whatsapp || "—"}`,
      `Date: ${form.date || "—"}`,
      `Guests: ${form.persons || "—"}`,
      `Experience: ${form.experience_type || "—"}`,
    ];
    if (form.boat_name) lines.push(`Boat: ${form.boat_name}`);
    if (form.message) {
      lines.push("", "Notes:");
      lines.push(form.message);
    }
    return lines.join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.whatsapp) {
      setError("Please fill in name, email and WhatsApp.");
      return;
    }
    setSubmitting(true);
    try {
      // Save lead to backend (non-blocking for the WhatsApp redirect)
      await axios.post(`${API}/bookings`, {
        name: form.name,
        email: form.email,
        whatsapp: form.whatsapp,
        date: form.date || null,
        persons: form.persons ? Number(form.persons) : null,
        experience_type: form.experience_type || null,
        boat_name: form.boat_name || null,
        message: form.message || null,
      });
    } catch (err) {
      // Don't block WhatsApp flow on backend errors
      console.warn("Booking save failed:", err?.message);
    }
    setSubmitting(false);
    setDone(true);
    // Open WhatsApp pre-filled
    window.open(buildWhatsappUrl(buildMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <main data-testid="book-page" className="pt-24 lg:pt-28">
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="overline text-sxm-turq" data-testid="book-overline">Book your experience</p>
          <h1
            className="mt-5 font-display font-light text-4xl lg:text-6xl text-sxm-deep leading-[1.05]"
            data-testid="book-title"
          >
            Tell us your dream day. <span className="italic">We'll handle the rest.</span>
          </h1>
          <p className="mt-6 text-slate-600 text-base lg:text-lg leading-relaxed">
            Send your request and we'll reply on WhatsApp — usually within an hour
            during island time.
          </p>

          {done && (
            <div
              data-testid="book-success"
              className="mt-10 p-6 border border-sxm-turq/30 bg-sxm-turq/5 flex items-start gap-4"
            >
              <CheckCircle2 className="text-sxm-turq mt-0.5" size={22} />
              <div>
                <p className="text-sxm-deep font-medium">Request sent.</p>
                <p className="mt-1 text-sm text-slate-600">
                  WhatsApp should have opened in a new tab with your details pre-filled.
                  If not,{" "}
                  <a
                    href={buildWhatsappUrl(buildMessage())}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-sxm-deep"
                    data-testid="book-whatsapp-fallback"
                  >
                    click here to open WhatsApp
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            data-testid="booking-form"
          >
            <Field label="Full name *" testId="field-name">
              <input
                required
                value={form.name}
                onChange={update("name")}
                data-testid="input-name"
                className="input"
                placeholder="Olivia Brown"
              />
            </Field>

            <Field label="Email *" testId="field-email">
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                data-testid="input-email"
                className="input"
                placeholder="olivia@email.com"
              />
            </Field>

            <Field label="WhatsApp *" testId="field-whatsapp">
              <input
                required
                value={form.whatsapp}
                onChange={update("whatsapp")}
                data-testid="input-whatsapp"
                className="input"
                placeholder="+1 555 000 1234"
              />
            </Field>

            <Field label="Preferred date" testId="field-date">
              <input
                type="date"
                value={form.date}
                onChange={update("date")}
                data-testid="input-date"
                className="input"
              />
            </Field>

            <Field label="Number of guests" testId="field-persons">
              <input
                type="number"
                min="1"
                max="50"
                value={form.persons}
                onChange={update("persons")}
                data-testid="input-persons"
                className="input"
                placeholder="6"
              />
            </Field>

            <Field label="Experience type" testId="field-experience">
              <select
                value={form.experience_type}
                onChange={update("experience_type")}
                data-testid="input-experience"
                className="input"
              >
                <option value="">Select an experience…</option>
                {EXPERIENCE_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
                {form.experience_type &&
                  !EXPERIENCE_TYPES.includes(form.experience_type) && (
                    <option value={form.experience_type}>{form.experience_type}</option>
                  )}
              </select>
            </Field>

            {form.boat_name && (
              <Field label="Boat" testId="field-boat" full>
                <input
                  value={form.boat_name}
                  onChange={update("boat_name")}
                  data-testid="input-boat"
                  className="input"
                  readOnly
                />
              </Field>
            )}

            <Field label="Tell us more" testId="field-message" full>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={5}
                data-testid="input-message"
                className="input resize-none"
                placeholder="Special occasion, dietary preferences, music vibe, ports of call…"
              />
            </Field>

            {error && (
              <p
                className="sm:col-span-2 text-sm text-red-600"
                data-testid="book-error"
              >
                {error}
              </p>
            )}

            <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-slate-500 max-w-md">
                Submitting opens WhatsApp with your request pre-filled. We reply
                personally — no automated booking system.
              </p>
              <button
                type="submit"
                disabled={submitting}
                data-testid="book-submit-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep disabled:opacity-60 transition-colors text-sm tracking-wider rounded-sm"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send via WhatsApp <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-600">
            <a
              href={buildWhatsappUrl("Hello Feel SXM, I'd like to chat about an experience.")}
              target="_blank"
              rel="noreferrer"
              data-testid="direct-whatsapp"
              className="inline-flex items-center gap-3 hover:text-sxm-deep transition-colors"
            >
              <MessageCircle size={16} />
              Or reach us directly · {SITE.whatsappDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              data-testid="direct-email"
              className="inline-flex items-center gap-3 hover:text-sxm-deep transition-colors"
            >
              <Mail size={16} />
              {SITE.email}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          font-family: 'Outfit', sans-serif;
          color: #0F172A;
          border-radius: 2px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input:focus {
          border-color: #0A3641;
          box-shadow: 0 0 0 3px rgba(10, 54, 65, 0.08);
        }
        .input::placeholder { color: #94A3B8; }
      `}</style>
    </main>
  );
}

function Field({ label, children, testId, full = false }) {
  return (
    <label
      data-testid={testId}
      className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}
    >
      <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
      {children}
    </label>
  );
}
