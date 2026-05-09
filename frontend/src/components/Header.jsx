import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE } from "../lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/boats", label: "Boats" },
  { to: "/activities", label: "Activities" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="brand-logo"
          className={`font-display text-xl lg:text-2xl tracking-tight ${
            scrolled ? "text-sxm-deep" : "text-white"
          } transition-colors`}
        >
          <span className="font-medium">Feel</span>
          <span className="font-light">·SXM</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-sxm-deep font-medium"
                      : "text-slate-600 hover:text-sxm-deep"
                    : isActive
                    ? "text-white font-medium"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            data-testid="header-book-btn"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm bg-sxm-deep text-white hover:bg-sxm-deep/90 transition-colors rounded-sm"
          >
            Book your experience
          </Link>
          <button
            data-testid="mobile-menu-toggle"
            className={`lg:hidden p-2 ${scrolled ? "text-sxm-deep" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-white border-t border-slate-100 shadow-lg"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base ${isActive ? "text-sxm-deep font-medium" : "text-slate-700"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/book"
              data-testid="mobile-book-btn"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm bg-sxm-deep text-white rounded-sm"
            >
              Book your experience
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              data-testid="mobile-whatsapp"
              className="text-sm text-slate-600"
            >
              WhatsApp · {SITE.whatsappDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
