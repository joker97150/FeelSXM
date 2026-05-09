# Feel SXM — Product Requirements Document

## Problem Statement
Marketing/showcase site for Feel SXM — a curated, locally-run boat charter and island experience service in Saint-Martin (French West Indies). English only. The site does NOT handle real-time bookings; all reservations are handled manually by the founder via WhatsApp. Primary audience: American tourists, mostly browsing on mobile.

Inspiration: wearesxm.com — but more refined and minimal. Vibe: accessible luxury, turquoise sea, premium Caribbean.

## User Personas
- **The American couple/family** planning a Caribbean trip — discovers the site on mobile, scans the fleet, taps "Request this boat", lands on WhatsApp.
- **Returning concierge guest** — uses the contact buttons to reach the captain directly.
- **The captain (operator)** — receives leads via WhatsApp; backend stores a copy of every form submission as a safety net.

## Core Requirements (Static)
1. Five pages: Home, Boats, Activities (placeholder), About, Book.
2. Hero must read **"Experience Saint-Martin from the water"** with subtitle **"Private boat charters & island experiences"** and a single CTA **"Book your experience"**.
3. Boats page: filterable grid (Type / Budget / Occasion) + per-boat "Request this boat" CTA.
4. Activities page: elegant placeholder ("Jet ski, restaurants, island spots — coming soon").
5. About page: short copy about the local captain + ambient image.
6. Booking form: name, email, WhatsApp, date, persons, experience type, message → opens WhatsApp pre-filled.
7. Footer: WhatsApp + Instagram + email.
8. Mobile-first responsive.
9. English only.

## Architecture
- **Backend**: FastAPI + MongoDB. Single resource `bookings` with POST/GET endpoints under `/api`. Pydantic models, no `_id` leakage. Email validated with `EmailStr`.
- **Frontend**: React 19 + React Router 7 + Tailwind + Shadcn-ready UI. Fonts: Cabinet Grotesk (display) + Outfit (body) via Fontshare/Google Fonts. Custom palette mapped onto Shadcn HSL tokens (deep teal #0A3641, turquoise #38B2CE, sand #F3EAD3, coral #F4A261).
- **WhatsApp integration**: client-side `window.open(buildWhatsappUrl(message))` in `/app/frontend/src/lib/site.js`. Number is a placeholder (`15550001234`) until the user provides the real one.
- **Lead persistence**: `POST /api/bookings` is called before the WhatsApp redirect — the captain has a backup record in MongoDB.

## Implemented (2025-12)
- Backend: `GET /api/`, `POST /api/bookings`, `GET /api/bookings` — verified by pytest (100% pass).
- Frontend: All 5 pages, sticky glass header with mobile hamburger, dark footer, scroll-to-top, hero with Unsplash catamaran image, `What we offer` (3 cards), `Why Feel SXM` (3 columns), testimonials (3 placeholder quotes), CTA strip.
- Boats page: 6 placeholder boats (Lagoon 50, Fountaine Pajot 44, Bénéteau Oceanis 46, Sunseeker Predator 60, Axopar 37, Leopard 45) with type/budget/occasion filters. Request flow prefills `/book?boat=...&type=...`.
- Booking form: required-field validation, posts lead to backend, opens WhatsApp pre-filled in new tab, displays success state with manual fallback link.
- All interactive elements have `data-testid` attributes.

## Placeholders (replace before launch)
- WhatsApp: `+1 (555) 000-1234` — `/app/frontend/src/lib/site.js` → `whatsappNumber` and `whatsappDisplay`.
- Email: `hello@feelsxm.com` — same file, `email`.
- Instagram: `@feelsxm` — same file, `instagram` / `instagramUrl`.
- Real fleet content (replace `BOATS` array in `/app/frontend/src/data/boats.js`).

## Backlog
### P0
- Replace placeholder WhatsApp number, email, Instagram handle with real ones.
- Replace 6 placeholder boats with real fleet (photos + specs + prices).

### P1
- Connect Resend/SendGrid to send the captain an email notification on each new booking lead (currently stored in DB only).
- Add a captain-facing `/admin` page (auth-protected) listing leads from `/api/bookings`.
- Add structured data / SEO meta + Open Graph image.
- Optional: short looping hero video (MP4) instead of still image.

### P2
- Add real testimonials with guest photos.
- Multi-currency price display.
- Build out the Activities page (jet ski, restaurants, island spots) with real partner cards.

## Test Credentials
N/A — no authentication in this app.
