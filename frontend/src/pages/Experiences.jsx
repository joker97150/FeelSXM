import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES } from "../data/boats";

export default function Experiences() {
  return (
    <main data-testid="experiences-page" className="pt-24 lg:pt-28">
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="overline text-sxm-turq" data-testid="experiences-overline">
              Book your experience
            </p>
            <h1
              className="mt-5 font-display font-light text-5xl lg:text-7xl text-sxm-deep leading-[1.02]"
              data-testid="experiences-title"
            >
              What kind of day did you <span className="italic">have in mind?</span>
            </h1>
            <p className="mt-7 text-slate-600 text-base lg:text-lg max-w-xl leading-relaxed">
              Pick where to start. Every booking is then handled personally on
              WhatsApp — no automated checkout, no surprises.
            </p>
          </div>

          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {EXPERIENCES.map((e, i) => (
              <Link
                key={e.id}
                to={e.href}
                data-testid={`experience-card-${e.id}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-slate-900"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/75" />
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                  <p className="overline text-sxm-coral mb-4">0{i + 1} · Experience</p>
                  <h2 className="font-display text-4xl lg:text-5xl text-white leading-[1.02]">
                    {e.title}
                  </h2>
                  <p className="mt-4 text-white/80 text-base max-w-md">{e.desc}</p>
                  <span className="mt-7 inline-flex items-center gap-3 text-white text-sm tracking-wider border-b border-white/40 group-hover:border-sxm-coral group-hover:text-sxm-coral transition-colors pb-1">
                    {e.cta}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Looking for restaurants and island spots? Tell us in your message —
              the captain handles those personally.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
