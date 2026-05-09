import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TEASERS = [
  {
    title: "Jet ski",
    desc: "Half-day rides across the lagoon and into hidden coves.",
    image:
      "https://images.unsplash.com/photo-1764132868176-e1abc06ae538?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
  {
    title: "Restaurants",
    desc: "Tables at the island's most loved spots — booked through us.",
    image:
      "https://images.unsplash.com/photo-1743413515530-b45d0ae079d3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
  {
    title: "Island spots",
    desc: "Beach clubs, sunset points, secret swims — local intel only.",
    image:
      "https://images.unsplash.com/photo-1665805397368-d3365df16e8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
];

export default function Activities() {
  return (
    <main data-testid="activities-page" className="pt-24 lg:pt-28">
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="overline text-sxm-turq" data-testid="activities-overline">Activities</p>
            <h1
              className="mt-6 font-display font-light text-5xl lg:text-7xl text-sxm-deep leading-[1.02]"
              data-testid="activities-title"
            >
              Jet ski, restaurants, island spots — <span className="italic">coming soon</span>.
            </h1>
            <p className="mt-8 text-slate-600 text-base lg:text-lg max-w-xl leading-relaxed">
              We're curating a tight selection of the experiences we'd recommend to a
              close friend. Until then, message us — we'll plan everything by hand.
            </p>
            <Link
              to="/experiences"
              data-testid="activities-book-btn"
              className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep transition-colors text-sm tracking-wider rounded-sm"
            >
              Plan with us
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TEASERS.map((t, i) => (
              <div
                key={t.title}
                data-testid={`activity-teaser-${i}`}
                className="group relative aspect-[4/5] image-zoom bg-slate-100"
              >
                <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="overline text-sxm-coral mb-3">Coming soon</p>
                  <h3 className="font-display text-3xl text-white">{t.title}</h3>
                  <p className="mt-2 text-white/80 text-sm max-w-[28ch]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
