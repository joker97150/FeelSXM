// Jet ski rides — extracted from islandjet.sx (Anse Marcel Marina, Saint-Martin)
// Note: 1-jet rate includes a private instructor; 2-6 jet rates are for self-driven groups.

export const JETSKI_HERO = "/jetski/jetski_hero.jpg";

export const JETSKI_INFO = {
  departurePoint: "Anse Marcel Marina · Saint-Martin",
  included: [
    "Life jacket & full safety briefing",
    "Map of the route around the island",
    "Captain-led group ride (2+ jet skis)",
    "Private instructor on the same jet ski (1-jet option)",
  ],
  notes: [
    "Driver's licence not required — captain leads the group.",
    "1-jet ski rates include a dedicated private instructor riding with you.",
    "Departure from Anse Marcel Marina, Saint-Martin.",
  ],
};

export const JETSKI_RIDES = [
  {
    id: "discovery-1h",
    name: "Discovery Ride",
    duration: "1h",
    tagline: "A first taste of the island",
    description:
      "A short, scenic loop along the protected northern coast — perfect for a first-time experience without committing to a full tour.",
    map: "/jetski/map-discovery-1h.jpg",
    prices: {
      1: { price: "€120", note: "with private instructor" },
      2: { price: "€200" },
      3: { price: "€300" },
      4: { price: "€400" },
      5: { price: "€500" },
      6: { price: "€600" },
    },
  },
  {
    id: "discovery-1h30",
    name: "Discovery Ride",
    duration: "1h30",
    tagline: "An extended introduction",
    description:
      "Same scenic loop with a bit more time on the water — explore the protected coves, snap photos, take it slow.",
    map: "/jetski/map-discovery-1h30.jpg",
    prices: {
      1: { price: "€150", note: "with private instructor" },
      2: { price: "€240" },
      3: { price: "€360" },
      4: { price: "€480" },
      5: { price: "€600" },
      6: { price: "€720" },
    },
  },
  {
    id: "lagoon-2h",
    name: "Lagoon Ride",
    duration: "2h",
    tagline: "Into the Marigot lagoon",
    description:
      "Cross into the Simpson Bay lagoon for calm, glassy water — Marigot, marina life, and a different side of the island.",
    map: "/jetski/map-lagoon-2h.jpg",
    prices: {
      1: { price: "€200", note: "with private instructor" },
      2: { price: "€300" },
      3: { price: "€450" },
      4: { price: "€600" },
      5: { price: "€750" },
      6: { price: "€900" },
    },
  },
  {
    id: "terres-basses-2h",
    name: "Terres Basses Ride",
    duration: "2h",
    tagline: "The Lowlands — luxury coast",
    description:
      "Ride along Saint-Martin's most exclusive coast: Baie Rouge, Baie aux Prunes, Plum Bay and Long Bay — pristine beaches and turquoise water.",
    map: "/jetski/map-terres-basses-2h.jpg",
    prices: {
      1: { price: "€200", note: "with private instructor" },
      2: { price: "€300" },
      3: { price: "€450" },
      4: { price: "€600" },
      5: { price: "€750" },
      6: { price: "€900" },
    },
  },
  {
    id: "philipsburg-3h",
    name: "Philipsburg Ride",
    duration: "3h",
    tagline: "Dutch capital & Great Bay",
    description:
      "Head south to the Dutch side — Philipsburg, the cruise pier, Great Bay and a stop along the way to swim or grab a drink.",
    map: "/jetski/map-philipsburg-3h.jpg",
    prices: {
      1: { price: "€280", note: "with private instructor" },
      2: { price: "€440" },
      3: { price: "€660" },
      4: { price: "€880" },
      5: { price: "€1,100" },
      6: { price: "€1,320" },
    },
  },
  {
    id: "crazy-3h",
    name: "Crazy Ride",
    duration: "3h",
    tagline: "Tintamarre & wild beaches",
    description:
      "An adventurous ride to Tintamarre island — secret beaches, snorkel stop and a generous loop along the wild eastern coast.",
    map: "/jetski/map-crazy-3h.jpg",
    prices: {
      1: { price: "€290", note: "with private instructor" },
      2: { price: "€470" },
      3: { price: "€705" },
      4: { price: "€940" },
      5: { price: "€1,175" },
      6: { price: "€1,410" },
    },
  },
  {
    id: "magic-4h",
    name: "Magic Ride",
    duration: "4h",
    tagline: "The signature half-island tour",
    description:
      "Our most popular ride. Tintamarre, Pinel, the wild coast and a long swim stop — half the island, captured in one morning.",
    map: "/jetski/map-magic-4h.jpg",
    prices: {
      1: { price: "€260", note: "with private instructor" },
      2: { price: "€420" },
      3: { price: "€630" },
      4: { price: "€840" },
      5: { price: "€1,050" },
      6: { price: "€1,260" },
    },
  },
  {
    id: "magic-5h",
    name: "Magic Ride",
    duration: "5h",
    tagline: "More magic, more time",
    description:
      "The Magic ride extended. More swim stops, more island, longer lunch break on a quiet beach.",
    map: "/jetski/map-magic-5h.jpg",
    prices: {
      1: { price: "€310", note: "with private instructor" },
      2: { price: "€480" },
      3: { price: "€720" },
      4: { price: "€960" },
      5: { price: "€1,200" },
      6: { price: "€1,440" },
    },
  },
  {
    id: "full-day-7h",
    name: "Full Day Ride",
    duration: "7h",
    tagline: "All the way around the island",
    description:
      "The ultimate jet ski experience: a complete loop around Saint-Martin / Sint Maarten with multiple beach stops, lunch, and stunning views from every angle.",
    map: "/jetski/map-full-day-7h.jpg",
    prices: {
      1: { price: "€480", note: "with private instructor" },
      2: { price: "€800" },
      3: { price: "€1,200" },
      4: { price: "€1,600" },
      5: { price: "€2,000" },
      6: { price: "€2,400" },
    },
  },
];
