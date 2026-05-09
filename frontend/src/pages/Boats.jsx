import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, Wallet } from "lucide-react";
import { BOATS, BOAT_TYPES, BUDGETS, OCCASIONS } from "../data/boats";

export default function Boats() {
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState("All");
  const [occasion, setOccasion] = useState("All");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return BOATS.filter((b) => {
      if (type !== "All" && b.type !== type) return false;
      if (budget !== "All" && b.budget !== budget) return false;
      if (occasion !== "All" && b.occasion !== occasion) return false;
      return true;
    });
  }, [type, budget, occasion]);

  const requestBoat = (boat) => {
    navigate(`/book?boat=${encodeURIComponent(boat.name)}&type=${encodeURIComponent(boat.type)}`);
  };

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
            day you have in mind.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-slate-200 bg-white sticky top-16 lg:top-20 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap items-center gap-3 lg:gap-6">
          <FilterGroup
            label="Type"
            value={type}
            options={["All", ...BOAT_TYPES]}
            onChange={setType}
            testId="filter-type"
          />
          <FilterGroup
            label="Budget"
            value={budget}
            options={["All", ...BUDGETS]}
            onChange={setBudget}
            testId="filter-budget"
          />
          <FilterGroup
            label="Occasion"
            value={occasion}
            options={["All", ...OCCASIONS]}
            onChange={setOccasion}
            testId="filter-occasion"
          />
          <span className="ml-auto text-sm text-slate-500" data-testid="filter-count">
            {filtered.length} boats
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="py-24 text-center text-slate-500" data-testid="boats-empty">
              No boats match these filters yet. Try widening the search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filtered.map((b, i) => (
                <article
                  key={b.id}
                  data-testid={`boat-card-${b.id}`}
                  className="group flex flex-col bg-white"
                >
                  <div className="image-zoom aspect-[4/3] bg-slate-100">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-6 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl text-sxm-deep">{b.name}</h3>
                      <span className="overline text-sxm-turq whitespace-nowrap">{b.type}</span>
                    </div>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-1">{b.description}</p>
                    <div className="mt-5 flex items-center gap-5 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-2"><Users size={14} /> Up to {b.capacity}</span>
                      <span className="inline-flex items-center gap-2"><Wallet size={14} /> from ${b.priceFrom.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => requestBoat(b)}
                      data-testid={`request-boat-btn-${b.id}`}
                      className="mt-6 inline-flex items-center justify-between gap-3 px-5 py-3 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep transition-colors text-sm tracking-wider rounded-sm"
                    >
                      Request this boat
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function FilterGroup({ label, value, options, onChange, testId }) {
  return (
    <div className="flex items-center gap-2" data-testid={testId}>
      <span className="text-xs uppercase tracking-[0.18em] text-slate-500 mr-1">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const active = o === value;
          return (
            <button
              key={o}
              onClick={() => onChange(o)}
              data-testid={`${testId}-option-${o.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                active
                  ? "bg-sxm-deep text-white border-sxm-deep"
                  : "bg-white text-slate-700 border-slate-200 hover:border-sxm-deep/40"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}
