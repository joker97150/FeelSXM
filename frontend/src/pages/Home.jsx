import { Link } from "react-router-dom";
import { ArrowRight, Anchor, Compass, Sparkles, Quote } from "lucide-react";
import { HERO_IMAGE, SERVICES, TESTIMONIALS } from "../data/boats";
import { SITE } from "../lib/site";

export default function Home() {
  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative h-screen min-h-[640px] w-full overflow-hidden"
      >
        <img
          src={HERO_IMAGE}
          alt="Catamaran sailing in turquoise water near Saint-Martin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-24 lg:pb-32">
          <p className="overline text-white/85 reveal" data-testid="hero-overline">
            Saint-Martin · French West Indies
          </p>
          <h1
            data-testid="hero-title"
            className="mt-6 text-white font-light tracking-tight text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-5xl reveal reveal-delay-1"
          >
            Experience Saint-Martin
            <br />
            <span className="italic font-extralight">from the water</span>
          </h1>
          <p
            data-testid="hero-subtitle"
            className="mt-8 text-white/85 text-lg lg:text-xl max-w-xl font-light reveal reveal-delay-2"
          >
            {SITE.tagline}.
          </p>
          <div className="mt-10 reveal reveal-delay-3">
            <Link
              to="/experiences"
              data-testid="hero-cta-book"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-sxm-deep hover:bg-sxm-coral hover:text-white transition-all duration-500 text-sm tracking-wider rounded-sm"
            >
              Book your experience
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 lg:right-10 z-10 text-white/60 text-xs tracking-[0.3em] uppercase rotate-90 origin-bottom-right hidden lg:block">
          Scroll
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section
        data-testid="what-we-offer"
        className="py-24 lg:py-32 bg-background"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <p className="overline text-sxm-turq">What we offer</p>
              <h2 className="mt-6 font-display font-light text-4xl lg:text-5xl text-sxm-deep leading-[1.05]">
                Three ways to <span className="italic">feel</span> the island.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-xl">
                A small, hand-picked selection. We work only with operators we'd
                book for our own family — no commission games, no inflated prices.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((s, i) => (
              <Link
                key={s.title}
                to={s.href}
                data-testid={`service-card-${i}`}
                className="group block hover-lift"
              >
                <div className="image-zoom aspect-[4/5] bg-slate-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-6">
                  <h3 className="font-display text-2xl text-sxm-deep">{s.title}</h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-sxm-deep">
                    <span className="border-b border-sxm-deep/30 group-hover:border-sxm-deep transition-colors pb-0.5">
                      Discover
                    </span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FEEL SXM */}
      <section
        data-testid="why-feel-sxm"
        className="py-24 lg:py-32 bg-sxm-sand/40"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="overline text-sxm-deep">Why Feel SXM</p>
            <h2 className="mt-6 font-display font-light text-4xl lg:text-5xl text-sxm-deep leading-tight">
              The island, without the noise.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                Icon: Compass,
                title: "Local expertise",
                desc: "Run by a captain born on the island. Every cove, every wind, every restaurant — we know.",
              },
              {
                Icon: Anchor,
                title: "Curated partners",
                desc: "A short list of operators chosen for their boats, their crews and their care.",
              },
              {
                Icon: Sparkles,
                title: "Seamless booking",
                desc: "One conversation on WhatsApp. No forms to chase, no awkward back-and-forth.",
              },
            ].map((b, i) => (
              <div
                key={b.title}
                data-testid={`why-card-${i}`}
                className="text-center md:text-left"
              >
                <b.Icon className="text-sxm-deep" strokeWidth={1.25} size={36} />
                <h3 className="mt-6 font-display text-2xl text-sxm-deep">{b.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        data-testid="testimonials"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <p className="overline text-sxm-turq">Guests</p>
            <h2 className="mt-6 font-display font-light text-4xl lg:text-5xl text-sxm-deep max-w-2xl leading-tight">
              Stories from the water.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                data-testid={`testimonial-${i}`}
                className="border-t border-sxm-deep/20 pt-8"
              >
                <Quote className="text-sxm-coral" strokeWidth={1} size={28} />
                <blockquote className="mt-5 text-lg lg:text-xl text-sxm-deep font-light leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 text-sm text-slate-500 tracking-wide">
                  <span className="text-sxm-deep">{t.author}</span> · {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        data-testid="cta-strip"
        className="bg-sxm-deep text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="overline text-sxm-coral">Ready when you are</p>
            <h2 className="mt-6 font-display font-light text-4xl lg:text-5xl leading-tight">
              Tell us your dream day.<br />We'll build it around you.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/experiences"
              data-testid="cta-strip-book"
              className="inline-flex items-center gap-3 px-8 py-4 bg-sxm-coral text-sxm-deep hover:bg-white transition-colors text-sm tracking-wider rounded-sm"
            >
              Start the conversation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
