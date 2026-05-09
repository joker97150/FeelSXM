import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CAPTAIN_IMAGE } from "../data/boats";

export default function About() {
  return (
    <main data-testid="about-page" className="pt-24 lg:pt-28">
      <section className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <div className="image-zoom aspect-[4/5] bg-slate-100">
                <img
                  src={CAPTAIN_IMAGE}
                  alt="Local captain on his boat in Saint-Martin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:pt-10">
              <p className="overline text-sxm-turq" data-testid="about-overline">About</p>
              <h1
                className="mt-6 font-display font-light text-4xl lg:text-6xl text-sxm-deep leading-[1.05]"
                data-testid="about-title"
              >
                A captain, an island, <span className="italic">a way of doing things</span>.
              </h1>
              <div className="mt-10 space-y-6 text-slate-600 text-base lg:text-lg leading-relaxed max-w-xl">
                <p>
                  Feel SXM is run by a local captain with over fifteen years navigating
                  Saint-Martin, Anguilla, St Barth and the surrounding cays. Born here,
                  raised on these waters — and quietly obsessed with the details that
                  make a day on the boat unforgettable.
                </p>
                <p>
                  We don't run a fleet of our own. Instead, we work with a short list of
                  trusted operators and weave together the right boat, crew, lunch,
                  music and timing for each guest. Less catalog, more conversation.
                </p>
                <p>
                  The result is simple: you arrive, we cast off, and the island opens up.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <Stat value="15+" label="Years on the water" />
                <Stat value="6" label="Hand-picked boats" />
                <Stat value="100%" label="Locally run" />
              </div>

              <Link
                to="/experiences"
                data-testid="about-book-btn"
                className="mt-12 inline-flex items-center gap-3 px-7 py-4 bg-sxm-deep text-white hover:bg-sxm-coral hover:text-sxm-deep transition-colors text-sm tracking-wider rounded-sm"
              >
                Start planning your day
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }) {
  return (
    <div className="border-t border-sxm-deep/20 pt-4">
      <div className="font-display text-3xl text-sxm-deep">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{label}</div>
    </div>
  );
}
