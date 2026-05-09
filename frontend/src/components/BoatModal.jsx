import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight, Users, Ruler, Star } from "lucide-react";

export default function BoatModal({ boat, open, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setActiveImg(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !boat) return null;

  const gallery = boat.gallery && boat.gallery.length ? boat.gallery : [boat.image];

  const requestBoat = () => {
    onClose();
    navigate(`/book?boat=${encodeURIComponent(boat.name)}&type=${encodeURIComponent(boat.type)}`);
  };

  return (
    <div
      data-testid="boat-modal"
      className="fixed inset-0 z-[100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <button
        onClick={onClose}
        data-testid="boat-modal-backdrop"
        className="fixed inset-0 bg-sxm-deep/70 backdrop-blur-sm cursor-default"
        aria-label="Close"
      />

      {/* Sheet */}
      <div className="relative min-h-full flex items-start justify-center p-0 sm:p-6 lg:p-10">
        <div className="relative w-full max-w-6xl bg-white shadow-2xl my-0 sm:my-6 animate-in">
          {/* Close */}
          <button
            onClick={onClose}
            data-testid="boat-modal-close"
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-sxm-deep rounded-full shadow-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Gallery */}
            <div className="lg:col-span-7 bg-sxm-deep">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[640px] bg-slate-900">
                <img
                  key={activeImg}
                  src={gallery[activeImg]}
                  alt={`${boat.name} ${activeImg + 1}`}
                  className="w-full h-full object-cover animate-fade"
                />
              </div>
              {gallery.length > 1 && (
                <div
                  data-testid="boat-modal-thumbs"
                  className="flex gap-2 p-3 bg-sxm-deep overflow-x-auto"
                >
                  {gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      data-testid={`boat-modal-thumb-${i}`}
                      className={`flex-shrink-0 w-20 h-16 sm:w-24 sm:h-20 overflow-hidden rounded-sm transition-all ${
                        i === activeImg
                          ? "ring-2 ring-sxm-coral opacity-100"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-5 p-7 lg:p-10 max-h-[90vh] lg:max-h-[760px] overflow-y-auto">
              {boat.featured && (
                <div className="inline-flex items-center gap-2 mb-4">
                  <Star size={14} className="text-sxm-coral" fill="#F4A261" />
                  <span className="overline text-sxm-coral">Captain's pick</span>
                </div>
              )}
              <p className="overline text-sxm-turq">{boat.type}</p>
              <h2 className="mt-2 font-display font-light text-4xl lg:text-5xl text-sxm-deep leading-[1.05]">
                {boat.name}
              </h2>
              <p className="mt-2 text-slate-500 text-sm">{boat.model}</p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Users size={14} /> {boat.capacityNote || `Up to ${boat.capacity}`}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Ruler size={14} /> {boat.length}
                </span>
              </div>

              <p className="mt-6 text-slate-700 leading-relaxed">
                {boat.longDescription || boat.description}
              </p>

              {boat.highlights && (
                <div className="mt-7">
                  <p className="overline text-sxm-deep mb-3">On board</p>
                  <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                    {boat.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span className="mt-2 inline-block w-1 h-1 bg-sxm-coral rounded-full flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rates */}
              {boat.rates && (
                <div className="mt-9" data-testid="boat-modal-rates">
                  <p className="overline text-sxm-deep mb-1">Rates</p>
                  {boat.rates.group && (
                    <p className="text-xs text-slate-500 mb-5">{boat.rates.group}</p>
                  )}

                  <div className="space-y-6">
                    {boat.rates.sections.map((s) => (
                      <div key={s.title}>
                        <p className="text-xs uppercase tracking-[0.18em] text-sxm-turq mb-2">
                          {s.title}
                        </p>
                        <div className="border-t border-slate-200">
                          {s.items.map((it) => (
                            <div
                              key={it.label}
                              className="flex items-baseline justify-between gap-4 py-2.5 border-b border-slate-100"
                            >
                              <span className="text-sm text-slate-700">{it.label}</span>
                              <span className="text-sm font-medium text-sxm-deep whitespace-nowrap tabular-nums">
                                {it.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {boat.rates.notes && boat.rates.notes.length > 0 && (
                    <ul className="mt-6 space-y-1.5 text-xs text-slate-500 leading-relaxed">
                      {boat.rates.notes.map((n) => (
                        <li key={n}>· {n}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <button
                onClick={requestBoat}
                data-testid={`boat-modal-request-${boat.id}`}
                className="mt-9 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep transition-colors text-sm tracking-wider rounded-sm"
              >
                Request this boat
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade {
          animation: bm-fade 0.35s ease-out;
        }
        @keyframes bm-fade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-in {
          animation: bm-in 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes bm-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
