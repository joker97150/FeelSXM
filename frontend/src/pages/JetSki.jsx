import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, X } from "lucide-react";
import { JETSKI_HERO, JETSKI_INFO, JETSKI_RIDES } from "../data/jetski";

export default function JetSki() {
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();

  const activeRide = openId ? JETSKI_RIDES.find((r) => r.id === openId) : null;

  const requestRide = (ride) => {
    navigate(
      `/book?type=${encodeURIComponent("Jet ski")}&ride=${encodeURIComponent(
        `${ride.name} (${ride.duration})`
      )}`
    );
  };

  return (
    <main data-testid="jetski-page" className="pt-24 lg:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
        <img
          src={JETSKI_HERO}
          alt="Jet ski tour around Saint-Martin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/65" />
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-14 lg:pb-20">
          <p className="overline text-white/85" data-testid="jetski-overline">
            Jet ski tours
          </p>
          <h1
            className="mt-6 font-display font-light text-white text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-5xl"
            data-testid="jetski-title"
          >
            Saint-Martin, <span className="italic font-extralight">at full throttle</span>.
          </h1>
          <p className="mt-7 text-white/85 text-lg lg:text-xl max-w-2xl font-light">
            Nine guided rides departing from Anse Marcel Marina — from a quick discovery loop to a full island circumnavigation.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 lg:py-20 bg-sxm-sand/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="overline text-sxm-turq">How it works</p>
              <h2 className="mt-4 font-display font-light text-3xl lg:text-5xl text-sxm-deep leading-[1.05]">
                No licence needed. Captain leads the way.
              </h2>
              <p className="mt-6 text-slate-600 lg:text-lg leading-relaxed">
                {JETSKI_INFO.departurePoint}. Choose your ride, your group size, and we handle everything — briefing, gear, route, and a safety boat that follows the group.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <p className="overline text-sxm-deep mb-4">What's included</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {JETSKI_INFO.included.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 bg-sxm-coral rounded-full flex-shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rides grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 lg:mb-16">
            <p className="overline text-sxm-turq" data-testid="rides-overline">The rides</p>
            <h2 className="mt-4 font-display font-light text-4xl lg:text-6xl text-sxm-deep leading-[1.02] max-w-3xl">
              Nine routes, one island, <span className="italic">your day</span>.
            </h2>
            <p className="mt-6 text-slate-600 max-w-xl">
              Each ride traces a different path around Saint-Martin — see the map, pick your distance, and we'll set you up.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {JETSKI_RIDES.map((ride) => (
              <article
                key={ride.id}
                data-testid={`ride-card-${ride.id}`}
                className="group flex flex-col bg-white border border-slate-200 hover-lift"
              >
                {/* Map with red route */}
                <button
                  type="button"
                  onClick={() => setOpenId(ride.id)}
                  data-testid={`ride-open-${ride.id}`}
                  className="relative aspect-[4/3] bg-sxm-sand/30 overflow-hidden"
                  aria-label={`See ${ride.name} ${ride.duration} details`}
                >
                  <img
                    src={ride.map}
                    alt={`${ride.name} route map`}
                    className="absolute inset-0 w-full h-full object-contain p-5 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs text-sxm-deep font-medium rounded-sm">
                    <Clock size={12} />
                    {ride.duration}
                  </div>
                </button>

                <div className="p-6 lg:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-sxm-deep">{ride.name}</h3>
                  <p className="mt-1 text-sxm-coral text-sm">{ride.tagline}</p>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                    {ride.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-slate-200 flex items-baseline justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">From</p>
                      <p className="font-display text-xl text-sxm-deep mt-0.5">
                        {ride.prices[1].price}
                        <span className="text-slate-400 text-xs ml-2 font-sans">/ jet</span>
                      </p>
                    </div>
                    <button
                      onClick={() => setOpenId(ride.id)}
                      data-testid={`view-ride-btn-${ride.id}`}
                      className="text-sm text-sxm-deep hover:text-sxm-coral transition-colors inline-flex items-center gap-1.5 border-b border-sxm-deep/30 hover:border-sxm-coral pb-0.5"
                    >
                      All rates
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 lg:mt-20 max-w-2xl">
            <p className="overline text-sxm-deep mb-3">Good to know</p>
            <ul className="space-y-2 text-sm text-slate-500 leading-relaxed">
              {JETSKI_INFO.notes.map((n) => (
                <li key={n}>· {n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeRide && (
        <RideModal
          ride={activeRide}
          onClose={() => setOpenId(null)}
          onRequest={() => requestRide(activeRide)}
        />
      )}
    </main>
  );
}

function RideModal({ ride, onClose, onRequest }) {
  return (
    <div
      data-testid="ride-modal"
      className="fixed inset-0 z-[100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        data-testid="ride-modal-backdrop"
        className="fixed inset-0 bg-sxm-deep/70 backdrop-blur-sm cursor-default"
        aria-label="Close"
      />
      <div
        className="relative min-h-full flex items-start justify-center p-0 sm:p-6 lg:p-10 pointer-events-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="relative w-full max-w-5xl bg-white shadow-2xl my-0 sm:my-6 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            data-testid="ride-modal-close"
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-sxm-deep rounded-full shadow-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Map */}
            <div className="lg:col-span-7 bg-sxm-sand/40 p-6 lg:p-10 flex items-center justify-center min-h-[360px]">
              <img
                src={ride.map}
                alt={`${ride.name} route map`}
                className="w-full h-auto max-h-[560px] object-contain"
              />
            </div>

            {/* Info */}
            <div className="lg:col-span-5 p-7 lg:p-10 max-h-[90vh] lg:max-h-[760px] overflow-y-auto">
              <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
                <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {ride.duration}</span>
                <span className="inline-flex items-center gap-1.5"><Users size={14} /> 1–6 jets</span>
                <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Anse Marcel</span>
              </div>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-sxm-deep leading-[1.05]">
                {ride.name}
              </h2>
              <p className="mt-2 text-sxm-coral text-sm">{ride.tagline}</p>
              <p className="mt-6 text-slate-700 leading-relaxed">{ride.description}</p>

              <div className="mt-8" data-testid="ride-rates">
                <p className="overline text-sxm-deep mb-1">Rates</p>
                <p className="text-xs text-slate-500 mb-4">
                  Total price for the group · 2 riders per jet ski
                </p>
                <div className="border-t border-slate-200">
                  {[1, 2, 3, 4, 5, 6].map((n) => {
                    const p = ride.prices[n];
                    return (
                      <div
                        key={n}
                        className="flex items-baseline justify-between gap-4 py-2.5 border-b border-slate-100"
                      >
                        <span className="text-sm text-slate-700">
                          {n} jet ski{n > 1 ? "s" : ""}{" "}
                          {p.note && (
                            <span className="text-xs text-slate-400 ml-1">· {p.note}</span>
                          )}
                        </span>
                        <span className="text-sm font-medium text-sxm-deep whitespace-nowrap tabular-nums">
                          {p.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={onRequest}
                data-testid={`ride-modal-request-${ride.id}`}
                className="mt-8 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep transition-colors text-sm tracking-wider rounded-sm"
              >
                Request this ride
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
