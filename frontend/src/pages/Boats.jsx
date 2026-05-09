import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, Users, Wallet, Star } from "lucide-react";
import { BOATS } from "../data/boats";
import BoatModal from "../components/BoatModal";

export default function Boats() {
  const [openId, setOpenId] = useState(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const opn = params.get("open");
    if (opn && BOATS.find((b) => b.id === opn)) setOpenId(opn);
  }, [params]);

  const closeModal = () => {
    setOpenId(null);
    if (params.get("open")) {
      params.delete("open");
      setParams(params, { replace: true });
    }
  };

  const featured = BOATS.find((b) => b.featured);
  const rest = featured ? BOATS.filter((b) => b.id !== featured.id) : BOATS;
  const activeBoat = openId ? BOATS.find((b) => b.id === openId) : null;

  return (
    <main data-testid="boats-page" className="pt-24 lg:pt-28">
      {/* Header */}
      <section className="bg-sxm-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="overline text-sxm-turq" data-testid="boats-overline">Our fleet</p>
          <h1 className="mt-5 font-display font-light text-5xl lg:text-7xl text-sxm-deep leading-[1] max-w-4xl" data-testid="boats-title">
            A small, hand-picked fleet for <span className="italic">your</span> day at sea.
          </h1>
          <p className="mt-8 max-w-xl text-slate-600 text-base lg:text-lg">
            Six boats, three styles, one promise — the right vessel and crew for the
            day you have in mind. Tap any boat to see all rates.
          </p>
        </div>
      </section>

      {/* Featured boat */}
      {featured && (
        <section className="py-16 lg:py-24 bg-background" data-testid="featured-boat-section">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-8">
              <Star className="text-sxm-coral" size={16} fill="#F4A261" />
              <span className="overline text-sxm-coral">Captain's pick</span>
            </div>
            <article
              data-testid={`boat-card-${featured.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch"
            >
              <button
                type="button"
                onClick={() => setOpenId(featured.id)}
                data-testid={`boat-open-${featured.id}`}
                className="lg:col-span-7 image-zoom aspect-[4/3] lg:aspect-auto bg-slate-100 lg:min-h-[520px] block group text-left"
                aria-label={`See details and rates for ${featured.name}`}
              >
                <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
              </button>
              <div className="lg:col-span-5 flex flex-col justify-center py-2">
                <div className="flex items-baseline gap-3">
                  <span className="overline text-sxm-turq">{featured.type}</span>
                  <span className="text-xs text-slate-400">· {featured.length}</span>
                </div>
                <h2 className="mt-3 font-display font-light text-5xl lg:text-6xl text-sxm-deep leading-[1.02]">
                  {featured.name}
                </h2>
                <p className="mt-2 text-slate-500 text-sm">{featured.model}</p>
                <p className="mt-6 text-slate-700 text-base lg:text-lg leading-relaxed">
                  {featured.description}
                </p>

                {featured.highlights && (
                  <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-slate-600">
                    {featured.highlights.slice(0, 6).map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-2 inline-block w-1 h-1 bg-sxm-coral rounded-full flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2"><Users size={14} /> {featured.capacityNote || `Up to ${featured.capacity}`}</span>
                  <span className="inline-flex items-center gap-2"><Wallet size={14} /> {featured.priceLabel}</span>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    onClick={() => setOpenId(featured.id)}
                    data-testid={`view-rates-btn-${featured.id}`}
                    className="inline-flex items-center gap-3 px-7 py-4 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep transition-colors text-sm tracking-wider rounded-sm"
                  >
                    See details & rates
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {featured && <div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="divider-line" /></div>}

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {featured && (
            <p className="overline text-sxm-deep mb-10">More from the fleet</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {rest.map((b) => (
              <article
                key={b.id}
                data-testid={`boat-card-${b.id}`}
                className="group flex flex-col bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(b.id)}
                  data-testid={`boat-open-${b.id}`}
                  className="image-zoom aspect-[4/3] bg-slate-100 block text-left"
                  aria-label={`See details and rates for ${b.name}`}
                >
                  <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                </button>
                <div className="pt-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-sxm-deep">{b.name}</h3>
                    <span className="overline text-sxm-turq whitespace-nowrap">{b.type}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{b.model} · {b.length}</p>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">{b.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2"><Users size={14} /> Up to {b.capacity}</span>
                    <span className="inline-flex items-center gap-2"><Wallet size={14} /> {b.priceLabel}</span>
                  </div>
                  <button
                    onClick={() => setOpenId(b.id)}
                    data-testid={`view-rates-btn-${b.id}`}
                    className="mt-6 inline-flex items-center justify-between gap-3 px-5 py-3 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep transition-colors text-sm tracking-wider rounded-sm"
                  >
                    See details & rates
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BoatModal boat={activeBoat} open={!!activeBoat} onClose={closeModal} />
    </main>
  );
}
