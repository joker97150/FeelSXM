// Placeholder fleet — replace with real boats later.
const u = (id, params = {}) => {
  const base = `https://images.unsplash.com/photo-${id}`;
  const q = new URLSearchParams({
    crop: "entropy",
    cs: "srgb",
    fm: "jpg",
    q: "85",
    auto: "format",
    fit: "crop",
    w: "1200",
    ...params,
  }).toString();
  return `${base}?${q}`;
};

export const BOAT_TYPES = ["Catamaran", "Sailboat", "Powerboat"];
export const BUDGETS = ["Under $1500", "$1500 – $3000", "$3000+"];
export const OCCASIONS = ["Family day", "Couples", "Friends group", "Special event"];

export const BOATS = [
  {
    id: "lagoon-50",
    name: "Lagoon 50 — Azur",
    type: "Catamaran",
    capacity: 12,
    priceFrom: 2400,
    budget: "$1500 – $3000",
    occasion: "Friends group",
    description:
      "Spacious 50ft catamaran with shaded flybridge, swim platform and a curated rum bar.",
    image:
      "https://images.unsplash.com/photo-1763402084814-e6a988900ba2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
  {
    id: "fountaine-pajot-44",
    name: "Fountaine Pajot 44",
    type: "Catamaran",
    capacity: 10,
    priceFrom: 1900,
    budget: "$1500 – $3000",
    occasion: "Family day",
    description:
      "Elegant cruising cat. Anchor at Tintamarre, snorkel in Creole Rock, grill on board.",
    image:
      "https://images.unsplash.com/photo-1560424730-ec1c186a7573?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
  {
    id: "beneteau-46",
    name: "Bénéteau Oceanis 46",
    type: "Sailboat",
    capacity: 8,
    priceFrom: 1450,
    budget: "Under $1500",
    occasion: "Couples",
    description:
      "Pure sailing pleasure between Anguilla and St Barth. Sunset cruise included on request.",
    image:
      "https://images.unsplash.com/photo-1623419988909-c60092c8bd6a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
  {
    id: "sunseeker-predator",
    name: "Sunseeker Predator 60",
    type: "Powerboat",
    capacity: 10,
    priceFrom: 3800,
    budget: "$3000+",
    occasion: "Special event",
    description:
      "High-speed luxury cruiser. Perfect for a fast hop to Anguilla and a Michelin lunch.",
    image:
      "https://images.unsplash.com/photo-1709187850087-06cf153f0e16?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
  {
    id: "axopar-37",
    name: "Axopar 37 Sun Top",
    type: "Powerboat",
    capacity: 8,
    priceFrom: 1300,
    budget: "Under $1500",
    occasion: "Couples",
    description:
      "Agile day boat to chase secret coves, great for couples and small groups.",
    image:
      "https://images.unsplash.com/photo-1665805397368-d3365df16e8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
  {
    id: "leopard-45",
    name: "Leopard 45 — Maho",
    type: "Catamaran",
    capacity: 12,
    priceFrom: 2100,
    budget: "$1500 – $3000",
    occasion: "Family day",
    description:
      "Family-friendly cat with paddleboards, snorkel kits and a chef-curated lunch option.",
    image:
      "https://images.unsplash.com/photo-1726591062929-14112c3cfe54?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1763402084814-e6a988900ba2?crop=entropy&cs=srgb&fm=jpg&q=90&w=2400&auto=format&fit=crop";

export const SERVICES = [
  {
    title: "Private boat charters",
    desc: "Catamarans, sailboats, powerboats — captained, fully tailored.",
    image:
      "https://images.unsplash.com/photo-1560424730-ec1c186a7573?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
    href: "/boats",
  },
  {
    title: "Jet ski & water toys",
    desc: "Half-day adventures across the lagoon and hidden coves.",
    image:
      "https://images.unsplash.com/photo-1764132868176-e1abc06ae538?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
    href: "/activities",
  },
  {
    title: "Restaurants & spots",
    desc: "Curated tables, beach clubs and island secrets — on and off the water.",
    image:
      "https://images.unsplash.com/photo-1743413515530-b45d0ae079d3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
    href: "/activities",
  },
];

export const CAPTAIN_IMAGE =
  "https://images.unsplash.com/photo-1726591062929-14112c3cfe54?crop=entropy&cs=srgb&fm=jpg&q=90&w=1600&auto=format&fit=crop";

export const TESTIMONIALS = [
  {
    quote:
      "Best day of our trip. The captain knew every quiet bay — we felt like locals.",
    author: "Olivia & Mark",
    location: "New York",
  },
  {
    quote:
      "From the first WhatsApp to the last sunset, everything was effortless and refined.",
    author: "The Patel family",
    location: "London",
  },
  {
    quote:
      "Anguilla for lunch, snorkeling at Tintamarre, drinks at sunset. Pure magic.",
    author: "Sébastien R.",
    location: "Paris",
  },
];

export { u };
