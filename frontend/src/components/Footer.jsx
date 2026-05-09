import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { SITE, buildWhatsappUrl } from "../lib/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-sxm-deep text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-display text-3xl lg:text-4xl">
              <span className="font-medium">Feel</span>
              <span className="font-light">·SXM</span>
            </div>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              Private boat charters and curated island experiences in Saint-Martin.
              Designed by locals, delivered like a friend with the keys to the island.
            </p>
            <p className="mt-8 overline text-sxm-coral">{SITE.location}</p>
          </div>

          <div className="lg:col-span-3">
            <p className="overline text-white/60 mb-5">Explore</p>
            <ul className="space-y-3 text-white/85">
              <li><Link to="/boats" data-testid="footer-link-boats" className="hover:text-sxm-coral transition-colors">Boats</Link></li>
              <li><Link to="/activities" data-testid="footer-link-activities" className="hover:text-sxm-coral transition-colors">Activities</Link></li>
              <li><Link to="/about" data-testid="footer-link-about" className="hover:text-sxm-coral transition-colors">About</Link></li>
              <li><Link to="/book" data-testid="footer-link-book" className="hover:text-sxm-coral transition-colors">Book</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="overline text-white/60 mb-5">Contact</p>
            <ul className="space-y-4 text-white/85">
              <li>
                <a
                  href={buildWhatsappUrl("Hello Feel SXM, I'd like to plan an experience.")}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="footer-whatsapp"
                  className="inline-flex items-center gap-3 hover:text-sxm-coral transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp · {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  data-testid="footer-email"
                  className="inline-flex items-center gap-3 hover:text-sxm-coral transition-colors"
                >
                  <Mail size={18} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="footer-instagram"
                  className="inline-flex items-center gap-3 hover:text-sxm-coral transition-colors"
                >
                  <Instagram size={18} />
                  @{SITE.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Feel SXM. All rights reserved.</p>
          <p>Crafted on the island · feelsxm.com</p>
        </div>
      </div>
    </footer>
  );
}
