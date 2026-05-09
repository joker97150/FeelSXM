// Real fleet — Feel SXM 2026.
// SEA YA is the featured boat (Captain's pick, displayed prominently).
// Photos are extracted from official partner brochures and stored in /public/boats/.

export const BOAT_TYPES = ["Catamaran", "Motor Yacht", "Powerboat"];
export const BUDGETS = ["Under $1500", "$1500 – $3000", "$3000+"];
export const OCCASIONS = ["Family day", "Couples", "Friends group", "Special event"];

// Charter routes — used to build the rate table in the boat detail modal.
// `dest` keys: SXM (Saint-Martin), AXA (Anguilla), SBH (Saint-Barth)
const r = (label, price) => ({ label, price });

export const BOATS = [
  {
    id: "sea-ya",
    name: "SEA YA",
    model: "Boston Whaler 27 Vantage",
    type: "Powerboat",
    length: "27 ft",
    capacity: 10,
    capacityNote: "8 recommended for comfort, up to 10 guests",
    priceFrom: 800,
    currency: "€",
    priceLabel: "from €800 half-day",
    budget: "Under $1500",
    occasion: "Couples",
    featured: true,
    description:
      "The legendary Boston Whaler 27 Vantage — speed, stability and unsinkable design. A captain favourite for hopping between Saint-Martin, Anguilla and St Barth in pure comfort.",
    longDescription:
      "Step aboard our luxury day-charter boat. Twin Mercury engines, freshwater shower, snorkel gear, paddle board and a Pina Colada blender on board. Drinks (softs, beer, wine and basic cocktails) and light snacks are included.\n\nMeet Captain Brithany, one of the rare women captains navigating these Caribbean waters. She has spent her whole life at sea and the past seven years working as a professional captain. With a background in marine biology and a deep passion for the ocean, she knows the marine life and every hidden corner of Saint-Martin, St Barth and Anguilla like the back of her hand.",
    highlights: [
      "Twin high-performance Mercury engines",
      "Unsinkable Boston Whaler hull",
      "Freshwater shower & towels",
      "Snorkeling gear, paddle board, floating mat",
      "Pina Colada blender on board",
      "Drinks & light snacks included",
    ],
    image: "/boats/britsea_00_aerial.jpg",
    gallery: [
      "/boats/britsea_00_aerial.jpg",
      "/boats/britsea_06_full.jpg",
      "/boats/britsea_05_engines.jpg",
      "/boats/britsea_02_captain.jpg",
      "/boats/britsea_01_family.jpg",
      "/boats/britsea_03_couple.jpg",
      "/boats/britsea_04_pineapple.jpg",
    ],
    rates: {
      currency: "€",
      group: "Boat for 8 guests · +€50 per extra guest up to 10",
      destinations: ["Saint-Martin", "Anguilla", "St Barth"],
      matrix: [
        { label: "Half-day", duration: "4h", prices: ["€800", "€900", "—"] },
        { label: "Full-day", duration: "8h", prices: ["€1,300", "€1,500", "€1,600"] },
      ],
      sections: [
        {
          title: "Special trips",
          items: [
            r("Snorkeling tour (9h–12h)", "€600"),
            r("Sunset cruise (17h–19h)", "€450"),
          ],
        },
        {
          title: "Add-ons",
          items: [
            r("Tubing — 20min, 2 pax", "€100"),
            r("Seabob", "€375"),
            r("Seanxt", "€275"),
            r("GoPro rental", "€75"),
            r("Drone footage", "€150"),
            r("Captain's dog crew 🐶", "Free"),
          ],
        },
      ],
      notes: [
        "Drinks included: softs, beer, wine & basic cocktails. Lunch can be arranged at beach restaurants.",
        "Customs fees: €30 per person (Anguilla & St Barth).",
        "Holiday surcharge: +20% from Dec 15 to Feb 15.",
      ],
    },
  },
  {
    id: "yes-darling",
    name: "YES DARLING",
    model: "Opera 60 — Italian motor yacht",
    type: "Motor Yacht",
    length: "60 ft",
    capacity: 30,
    capacityNote: "Up to 30 day guests · 2 overnight",
    priceFrom: 3300,
    currency: "€",
    priceLabel: "from €3,300 half-day",
    budget: "$3000+",
    occasion: "Special event",
    featured: false,
    description:
      "A rare Italian Opera 60 inspired by the Porsche 917 Gulf livery — a collector's piece combining contemporary elegance with impressive performance.",
    longDescription:
      "Experience the ultimate in luxury aboard YES DARLING. Air-conditioned salon, Bluetooth sound system, gourmet aperitif platters and a full set of water toys. Half-day rates include up to 15 guests; full-day rates include up to 12 (extras priced per person).",
    highlights: [
      "Air-conditioned salon",
      "Bluetooth sound system",
      "Continental breakfast & gourmet aperitif",
      "Snorkeling gear, paddle, life jackets",
      "Six outdoor showers",
      "Premium alcohol & soft drinks available",
    ],
    image: "/boats/yesdarling_a.jpg",
    gallery: [
      "/boats/yesdarling_a.jpg",
      "/boats/yesdarling_g.jpg",
      "/boats/yesdarling_h.jpg",
      "/boats/yesdarling_d.jpg",
      "/boats/yesdarling_e.jpg",
      "/boats/yesdarling_f.jpg",
    ],
    rates: {
      currency: "€",
      group: "15 guests included from Saint-Martin · 12 guests from Anguilla & St Barth · extras priced per person",
      matrices: [
        {
          title: "From Saint-Martin (SXM)",
          subtitle: "Up to 15 guests",
          destinations: ["Stay in SXM", "→ St Barth", "→ Anguilla"],
          rows: [
            { label: "Half-day", duration: "4h", prices: ["€3,300", "€4,100", "€3,800"] },
            { label: "Half-day", duration: "6h", prices: ["€4,000", "—", "—"] },
            { label: "Full-day", duration: "8h", prices: ["€4,500", "€4,950", "€4,800"] },
            { label: "Sunset cruise", duration: "evening", prices: ["€2,150", "—", "—"] },
          ],
        },
        {
          title: "From Anguilla (AXA)",
          subtitle: "Up to 12 guests",
          destinations: ["Stay in AXA", "→ Saint-Martin", "→ St Barth"],
          rows: [
            { label: "Half-day", duration: "4h", prices: ["€4,100", "€4,550", "€5,500"] },
            { label: "Full-day", duration: "8h", prices: ["€5,300", "€5,700", "€6,800"] },
            { label: "Sunset cruise", duration: "evening", prices: ["€2,450", "—", "—"] },
          ],
        },
        {
          title: "From St Barth (SBH)",
          subtitle: "Up to 12 guests",
          destinations: ["Stay in SBH", "→ Saint-Martin", "→ Anguilla"],
          rows: [
            { label: "Half-day", duration: "4h", prices: ["€4,500", "€4,950", "€5,500"] },
            { label: "Full-day", duration: "8h", prices: ["€5,900", "€6,500", "€6,800"] },
          ],
        },
      ],
      sections: [
        {
          title: "Extras",
          items: [
            r("Extra hour SXM", "€400/h"),
            r("Extra hour SBH/AXA", "€450/h"),
            r("Additional adult (after 12)", "€120 pp"),
            r("Additional child (after 12)", "€85 pp"),
          ],
        },
      ],
      notes: [
        "Per-person fees (not included): €5/pp Saint-Martin · €23/pp St Barth · €40/pp Anguilla · €63/pp for the Anguilla + St Barth combo.",
        "Includes fuel, continental breakfast, fruit & aperitif platter.",
        "Premium alcohol selection available on request.",
        "+20% surcharge Dec 20 – Jan 10. 4% credit-card fee on payments.",
        "On-request extras: jet ski, underwater scooter, flyboard, drone, photographer, DJ, chef, caterer.",
      ],
    },
  },
  {
    id: "infinity-dreams",
    name: "INFINITY DREAMS",
    model: "Fountaine Pajot 50 Catamaran",
    type: "Catamaran",
    length: "50 ft / 15 m",
    capacity: 28,
    capacityNote: "Up to 28 day guests · captain & 3 crew",
    priceFrom: 2100,
    currency: "$",
    priceLabel: "from $2,100 half-day",
    budget: "$1500 – $3000",
    occasion: "Friends group",
    featured: false,
    description:
      "A peaceful, spacious 50ft Fountaine Pajot catamaran with full enclosure, freshwater shower, marine sound system and a generous sunbathing area.",
    longDescription:
      "Sail in peace and luxury. Two Yanmar 80hp engines, cabin, toilet & shower, full enclosure to stay dry, Bluetooth sound system. French breakfast on full-day trips, light snacks and an open bar (rhum punch, champagne, beers, soft drinks).",
    highlights: [
      "Up to 28 guests · captain + 3 crew",
      "Full enclosure & shaded deck",
      "Bluetooth audio system",
      "Paddle board, kayak, snorkel gear",
      "French breakfast on full-day trips",
      "Open bar included",
    ],
    image: "/boats/infinity_01.jpg",
    gallery: [
      "/boats/infinity_01.jpg",
      "/boats/infinity_02.jpg",
      "/boats/infinity_03.jpg",
      "/boats/infinity_04.jpg",
    ],
    rates: {
      currency: "$",
      group: "Price for 12 pax · +$100 per extra guest",
      destinations: ["Saint-Martin", "Anguilla"],
      matrix: [
        { label: "Half-day", duration: "4h", prices: ["$2,100", "—"] },
        { label: "Full-day", duration: "7h", prices: ["$2,900", "$3,200"] },
      ],
      sections: [
        {
          title: "Add-ons",
          items: [
            r("Fruit plate", "$80"),
            r("Drone footage", "$150"),
            r("Extra hour", "$500"),
            r("E-foil", "$400"),
            r("Seabob", "$400"),
          ],
        },
      ],
      notes: [
        "Anguilla immigration tax: $35/pp (not included).",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
      ],
    },
  },
  {
    id: "free-spirit",
    name: "FREE SPIRIT",
    model: "Concept 44 — Offshore Powerboat",
    type: "Powerboat",
    length: "44 ft / 13.4 m",
    capacity: 12,
    capacityNote: "Up to 12 guests · captain & crew",
    priceFrom: 1150,
    currency: "$",
    priceLabel: "from $1,150 half-day",
    budget: "Under $1500",
    occasion: "Family day",
    featured: false,
    description:
      "A spacious Concept 44 — perfect for discovering hidden gems and inaccessible coves. Offshore performance with luxurious comfort, day or night.",
    longDescription:
      "One of our most popular speedboats. Three 300hp Mercury V8 engines, full enclosure, fresh water shower, audio marine system with Bluetooth and a spacious layout. Open bar (local rhum punch, champagne, beers, softs), snorkeling gear and beach towels included.",
    highlights: [
      "3 × 300hp Mercury V8 engines",
      "Up to 12 guests · captain + crew",
      "Saint-Martin · Anguilla · St Barth",
      "Full enclosure, freshwater shower",
      "Open bar & snorkel gear included",
    ],
    image: "/boats/freespirit_01.jpg",
    gallery: [
      "/boats/freespirit_01.jpg",
      "/boats/freespirit_02.jpg",
      "/boats/freespirit_03.jpg",
      "/boats/freespirit_04.jpg",
    ],
    rates: {
      currency: "$",
      destinations: ["Saint-Martin", "Anguilla", "St Barth"],
      matrix: [
        { label: "Half-day", duration: "4h", prices: ["$1,150", "$1,300", "$1,900"] },
        { label: "Full-day", duration: "7h", prices: ["$1,800", "$1,900", "$2,100"] },
      ],
      sections: [
        {
          title: "Transfers & add-ons",
          items: [
            r("Day transfer", "$1,900"),
            r("Night transfer", "$2,200"),
            r("Fruit plate", "$70"),
            r("Drone footage", "$100"),
            r("Extra hour", "$200"),
            r("Paddle board", "$100"),
          ],
        },
      ],
      notes: [
        "Immigration tax: $35/pp Anguilla · $20/pp St Barth (not included).",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
      ],
    },
  },
  {
    id: "natural-mystic",
    name: "NATURAL MYSTIC",
    model: "Rebel 37 — Anguillan Powerboat",
    type: "Powerboat",
    length: "37 ft / 11.3 m",
    capacity: 12,
    capacityNote: "Up to 12 guests · captain & crew",
    priceFrom: 950,
    currency: "$",
    priceLabel: "from $950 half-day",
    budget: "Under $1500",
    occasion: "Family day",
    featured: false,
    description:
      "An Anguillan-built Rebel 37, entirely redesigned with high-quality materials. Spacious interior conceived for families with children or trips with friends.",
    longDescription:
      "Comfortable and spacious. Two 300hp Mercury V8 engines take you to the surrounding islands in no time. Full enclosure, freshwater shower, audio marine system with Bluetooth. Paddle board, snorkel gear, beach towels and an open bar (rhum punch, champagne, beers, softs) included.",
    highlights: [
      "2 × 300hp Mercury V8 engines",
      "Up to 12 guests · captain + crew",
      "Paddle board included",
      "Tubing on request",
      "Saint-Martin · Anguilla · St Barth",
      "Open bar & snorkel gear included",
    ],
    image: "/boats/natural_01.jpg",
    gallery: [
      "/boats/natural_01.jpg",
      "/boats/natural_02.jpg",
      "/boats/natural_03.jpg",
      "/boats/natural_04.jpg",
    ],
    rates: {
      currency: "$",
      destinations: ["Saint-Martin", "Anguilla", "St Barth"],
      matrix: [
        { label: "Half-day", duration: "4h", prices: ["$950", "$1,150", "—"] },
        { label: "Full-day", duration: "7h", prices: ["$1,300", "$1,400", "$1,650"] },
      ],
      sections: [
        {
          title: "Transfers & add-ons",
          items: [
            r("Day transfer", "$1,400"),
            r("Night transfer", "$1,800"),
            r("Tubing", "$250"),
            r("Drone footage", "$100"),
            r("Extra hour", "$200"),
            r("Fruit plate", "$50"),
          ],
        },
      ],
      notes: [
        "Immigration tax: $35/pp Anguilla · $20/pp St Barth (not included).",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
      ],
    },
  },
  {
    id: "positive-vibes",
    name: "POSITIVE VIBES",
    model: "Cigarette 36",
    type: "Powerboat",
    length: "36 ft / 11 m",
    capacity: 12,
    capacityNote: "Up to 12 guests · captain & crew",
    priceFrom: 950,
    currency: "$",
    priceLabel: "from $950 half-day",
    budget: "Under $1500",
    occasion: "Friends group",
    featured: false,
    description:
      "A smooth, stylish Cigarette 36 with an open bow for room to lounge and a tee top extending to the stern for shade. Caribbean cruising at its purest.",
    longDescription:
      "Twin 350hp Mercury L6 engines deliver thrill and reliability. Full enclosure, fresh water shower, marine audio system with Bluetooth, spacious layout. Open bar (rhum punch, champagne, beers, softs), snorkel gear and beach towels included.",
    highlights: [
      "2 × 350hp Mercury L6 engines",
      "Up to 12 guests · captain + crew",
      "Open bow with shaded tee top",
      "Saint-Martin · Anguilla · St Barth",
      "Open bar & snorkel gear included",
    ],
    image: "/boats/positive_01.jpg",
    gallery: [
      "/boats/positive_01.jpg",
      "/boats/positive_02.jpg",
      "/boats/positive_05.jpg",
      "/boats/positive_06.jpg",
      "/boats/positive_03.jpg",
      "/boats/positive_04.jpg",
    ],
    rates: {
      currency: "$",
      destinations: ["Saint-Martin", "Anguilla", "St Barth"],
      matrix: [
        { label: "Half-day", duration: "4h", prices: ["$950", "$1,100", "—"] },
        { label: "Full-day", duration: "7h", prices: ["$1,250", "$1,350", "$1,450"] },
      ],
      sections: [
        {
          title: "Transfers & add-ons",
          items: [
            r("Day transfer", "$1,400"),
            r("Night transfer", "$1,800"),
            r("Fruit plate", "$70"),
            r("Drone footage", "$100"),
            r("Extra hour", "$150"),
            r("Paddle board", "$100"),
          ],
        },
      ],
      notes: [
        "Immigration tax: $35/pp Anguilla · $20/pp St Barth (not included).",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
      ],
    },
  },
  {
    id: "vandutch-48",
    name: "VANDUTCH 48",
    model: "VanDutch 48 — Motor Yacht",
    type: "Motor Yacht",
    length: "48 ft / 14 m",
    capacity: 12,
    capacityNote: "Up to 12 guests · captain & crew",
    priceFrom: 3000,
    currency: "$",
    priceLabel: "from $3,000 half-day",
    budget: "$3000+",
    occasion: "Special event",
    featured: false,
    description:
      "Sleek 48ft VanDutch motor yacht — a modern Italian icon designed for elegant Caribbean cruising at speeds up to 40 knots.",
    longDescription:
      "Twin 725hp engines, JL sound system, interior kitchen, full enclosure, fresh water shower and a generous, sun-bathed lounge. Cruise to St Barth, Anguilla or Tintamarre in style. Open bar, snorkel gear and beach towels included.",
    highlights: [
      "2 × 725hp engines · top 40 knots",
      "Up to 12 guests · captain + crew",
      "JL sound system · interior kitchen",
      "Full enclosure, freshwater shower",
      "Saint-Martin · Anguilla · St Barth",
      "Open bar & snorkel gear included",
    ],
    image: "/boats/vandutch48_01.jpg",
    gallery: [
      "/boats/vandutch48_01.jpg",
      "/boats/vandutch48_02.jpg",
      "/boats/vandutch48_03.jpg",
      "/boats/vandutch48_04.jpg",
      "/boats/vandutch48_05.jpg",
    ],
    rates: {
      currency: "$",
      destinations: ["Saint-Martin", "Anguilla", "St Barth"],
      matrix: [
        { label: "Half-day", duration: "4h", prices: ["$3,000", "$3,500", "—"] },
        { label: "Full-day", duration: "7h", prices: ["$4,500", "$5,000", "$5,250"] },
      ],
      sections: [
        {
          title: "Add-ons",
          items: [
            r("Fruit plate", "$80"),
            r("Drone footage", "$150"),
            r("Extra hour", "$500"),
            r("Paddle board", "$100"),
            r("Seabob", "$400"),
            r("E-foil", "$400"),
          ],
        },
      ],
      notes: [
        "Immigration clearance: $20–$45 per person for Anguilla / St Barth (added at booking).",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
        "Card fees not included.",
      ],
    },
  },
  {
    id: "vandutch-55",
    name: "VANDUTCH 55",
    model: "VanDutch 55 — Motor Yacht",
    type: "Motor Yacht",
    length: "55 ft / 16 m",
    capacity: 12,
    capacityNote: "Up to 12 guests · captain & crew",
    priceFrom: 3500,
    currency: "$",
    priceLabel: "from $3,500 half-day",
    budget: "$3000+",
    occasion: "Special event",
    featured: false,
    description:
      "An elegant 55ft VanDutch motor yacht — clean lines, an air-conditioned master cabin and 40 knots of pure Caribbean cruising.",
    longDescription:
      "Twin 900hp engines, JL sound system, master cabin with A/C, compact kitchen and bathroom. A wide shaded lounge area perfect for groups up to 12. Saint-Martin, Anguilla and St Barth in true VanDutch style.",
    highlights: [
      "2 × 900hp engines · top 40 knots",
      "Up to 12 guests · captain + crew",
      "Air-conditioned master cabin",
      "JL sound system · kitchen & bathroom",
      "Saint-Martin · Anguilla · St Barth",
      "Open bar & snorkel gear included",
    ],
    image: "/boats/vandutch55_01.jpg",
    gallery: [
      "/boats/vandutch55_01.jpg",
      "/boats/vandutch55_03.jpg",
      "/boats/vandutch55_04.jpg",
      "/boats/vandutch55_05.jpg",
      "/boats/vandutch55_02.jpg",
    ],
    rates: {
      currency: "$",
      destinations: ["Saint-Martin", "Anguilla", "St Barth"],
      matrix: [
        { label: "Half-day", duration: "4h", prices: ["$3,500", "$4,000", "—"] },
        { label: "Full-day", duration: "7h", prices: ["$5,000", "$5,500", "$5,750"] },
      ],
      sections: [
        {
          title: "Add-ons",
          items: [
            r("Fruit plate", "$80"),
            r("Drone footage", "$150"),
            r("Extra hour", "$500"),
            r("Paddle board", "$100"),
            r("Seabob", "$400"),
            r("E-foil", "$400"),
          ],
        },
      ],
      notes: [
        "Immigration clearance: $20–$45 per person for Anguilla / St Barth (added at booking).",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
        "Card fees not included.",
      ],
    },
  },

];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1763402084814-e6a988900ba2?crop=entropy&cs=srgb&fm=jpg&q=90&w=2400&auto=format&fit=crop";

export const SERVICES = [
  {
    title: "Private boat charters",
    desc: "Catamarans, motor yachts, powerboats — captained, fully tailored.",
    image: "/boats/britsea_00_aerial.jpg",
    href: "/boats",
  },
  {
    title: "Jet ski & water toys",
    desc: "Half-day adventures across the lagoon and hidden coves.",
    image:
      "https://images.unsplash.com/photo-1764132868176-e1abc06ae538?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
    href: "/book?type=Jet%20ski",
  },
  {
    title: "Restaurants & spots",
    desc: "Curated tables, beach clubs and island secrets — on and off the water.",
    image:
      "https://images.unsplash.com/photo-1743413515530-b45d0ae079d3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200&auto=format&fit=crop",
    href: "/activities",
  },
];

export const EXPERIENCES = [
  {
    id: "boat",
    title: "Private boat charter",
    desc: "Choose from our hand-picked fleet of catamarans, motor yachts and powerboats. Saint-Martin, Anguilla, St Barth.",
    image: "/boats/britsea_00_aerial.jpg",
    cta: "Browse the fleet",
    href: "/boats",
  },
  {
    id: "jetski",
    title: "Jet ski",
    desc: "Half-day adventures across the lagoon and into hidden coves. We arrange everything — just show up.",
    image:
      "https://images.unsplash.com/photo-1764132868176-e1abc06ae538?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600&auto=format&fit=crop",
    cta: "Request a jet ski",
    href: "/book?type=Jet%20ski",
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
