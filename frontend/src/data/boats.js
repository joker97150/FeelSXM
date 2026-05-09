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
      "Step aboard our luxury day-charter boat. Twin Mercury engines, freshwater shower, snorkel gear, paddle board and a Pina Colada blender on board. Drinks (softs, beer, wine and basic cocktails) and light snacks are included.",
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
      sections: [
        {
          title: "Day charters",
          items: [
            r("Half-day Saint-Martin (9–13h or 13–17h)", "€800"),
            r("Full-day Saint-Martin (9h–17h)", "€1,300"),
            r("Half-day Anguilla South / AXA (4h)", "€900"),
            r("Full-day Anguilla (9h–17h)", "€1,500"),
            r("Full-day St Barth (9h–17h)", "€1,600"),
          ],
        },
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
            r("Captain's dog crew 🐶", "€50"),
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
      "/boats/yesdarling_b.jpg",
      "/boats/yesdarling_c.jpg",
      "/boats/yesdarling_d.jpg",
      "/boats/yesdarling_e.jpg",
      "/boats/yesdarling_f.jpg",
    ],
    rates: {
      currency: "€",
      group: "Up to 15 guests included on half-day · 12 on full-day · extras priced per person",
      sections: [
        {
          title: "Half-day (4h)",
          items: [
            r("Saint-Martin", "€3,300 + €5/pp reserve"),
            r("Saint-Martin (6h)", "€4,000 + €5/pp reserve"),
            r("SXM ↔ St Barth", "€4,100 + €23/pp customs"),
            r("SXM ↔ Anguilla", "€3,800 + €40/pp customs"),
            r("St Barth", "€4,500"),
            r("Anguilla", "€4,100 + €40/pp customs"),
          ],
        },
        {
          title: "Full-day (8h)",
          items: [
            r("Saint-Martin", "€4,500 + €5/pp reserve"),
            r("SXM ↔ St Barth", "€4,950 + €23/pp customs"),
            r("SXM ↔ Anguilla", "€4,800 + €40/pp customs"),
            r("St Barth", "€5,900"),
            r("Anguilla", "€5,300 + €40/pp customs"),
            r("AXA + SBH combo", "€6,800 + €63/pp customs"),
          ],
        },
        {
          title: "Sunset & extras",
          items: [
            r("Sunset Saint-Martin", "€2,150 + €5/pp reserve"),
            r("Sunset Anguilla", "€2,450 + €40/pp customs"),
            r("Extra hour SXM", "€400/h"),
            r("Extra hour SBH/AXA", "€450/h"),
            r("Additional adult (after 12)", "€120 pp"),
            r("Additional child (after 12)", "€85 pp"),
          ],
        },
      ],
      notes: [
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
    model: "50 ft Catamaran",
    type: "Catamaran",
    length: "50 ft",
    capacity: 28,
    capacityNote: "Up to 28 day guests · price for 12 pax",
    priceFrom: 2100,
    currency: "$",
    priceLabel: "from $2,100 half-day",
    budget: "$1500 – $3000",
    occasion: "Friends group",
    featured: false,
    description:
      "A peaceful, spacious 50ft catamaran with full enclosure, freshwater shower, marine sound system and a generous sunbathing area.",
    longDescription:
      "Two Yanmar 80hp engines, cabin, toilet & shower, full enclosure to stay dry, Bluetooth sound system. French breakfast on full-day trips, light snacks and an open bar (rhum punch, champagne, beers, soft drinks).",
    highlights: [
      "28 guests capacity",
      "Full enclosure & shaded deck",
      "Bluetooth audio system",
      "Paddle board, kayak, snorkel gear",
      "French breakfast on full-day trips",
      "Open bar included",
    ],
    image: "/boats/infinity_a.jpg",
    gallery: ["/boats/infinity_a.jpg", "/boats/infinity_b.jpg"],
    rates: {
      currency: "$",
      group: "Price for 12 pax · +$100 per extra guest",
      sections: [
        {
          title: "Day charters from Saint-Martin",
          items: [
            r("Half-day SXM (4h)", "$2,100"),
            r("Full-day SXM (7h)", "$2,900"),
            r("Full-day Anguilla", "$3,200 + $35/pp tax"),
          ],
        },
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
      notes: ["+20% surcharge during Christmas period (Dec 20 – Jan 7)."],
    },
  },
  {
    id: "free-spirit",
    name: "FREE SPIRIT",
    model: "44 ft Offshore Powerboat",
    type: "Powerboat",
    length: "44 ft",
    capacity: 12,
    capacityNote: "Family-style offshore powerboat",
    priceFrom: 1150,
    currency: "$",
    priceLabel: "from $1,150 half-day",
    budget: "Under $1500",
    occasion: "Family day",
    featured: false,
    description:
      "High-powered offshore powerboat blending performance and luxury — 44 ft of confort, pleasure and Caribbean lifestyle.",
    longDescription:
      "Three 300hp Mercury engines, fresh water shower, full enclosure, Bluetooth audio. Open bar, snorkel gear and beach towels included.",
    highlights: [
      "3 × 300hp Mercury engines",
      "Saint-Martin · Anguilla · St Barth",
      "Day & night transfers available",
      "Snorkel gear & beach towels included",
    ],
    image: "/boats/freespirit_a.jpg",
    gallery: ["/boats/freespirit_a.jpg", "/boats/freespirit_b.jpg"],
    rates: {
      currency: "$",
      sections: [
        {
          title: "Half-day (4h)",
          items: [r("Saint-Martin", "$1,150"), r("Anguilla", "$1,300")],
        },
        {
          title: "Full-day (7h)",
          items: [
            r("Saint-Martin", "$1,800"),
            r("Anguilla", "$1,900"),
            r("St Barth", "$2,100"),
          ],
        },
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
        "Taxes: $35/pp Anguilla · $20/pp St Barth.",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
      ],
    },
  },
  {
    id: "natural-mystic",
    name: "NATURAL MYSTIC",
    model: "37 ft Anguillan Powerboat",
    type: "Powerboat",
    length: "37 ft",
    capacity: 10,
    capacityNote: "Spacious, family-friendly",
    priceFrom: 950,
    currency: "$",
    priceLabel: "from $950 half-day",
    budget: "Under $1500",
    occasion: "Family day",
    featured: false,
    description:
      "Anguillan-built powerboat with high-quality materials and a spacious interior — perfect for a farniente day or for adrenaline lovers chasing tubing and snorkel spots.",
    longDescription:
      "Two 300hp Mercury engines, sunbed, fresh water shower, full enclosure, Bluetooth audio. Paddle board included, tubing on request.",
    highlights: [
      "2 × 300hp Mercury engines",
      "Paddle board included",
      "Tubing on request",
      "Saint-Martin · Anguilla · St Barth",
    ],
    image: "/boats/natural_a.jpg",
    gallery: ["/boats/natural_a.jpg", "/boats/natural_b.jpg"],
    rates: {
      currency: "$",
      sections: [
        {
          title: "Half-day (4h)",
          items: [r("Saint-Martin", "$950")],
        },
        {
          title: "Full-day (7h)",
          items: [
            r("Saint-Martin", "$1,300"),
            r("Anguilla", "$1,400"),
            r("St Barth", "$1,650"),
          ],
        },
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
        "Taxes: $35/pp Anguilla · $20/pp St Barth.",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
      ],
    },
  },
  {
    id: "positive-vibes",
    name: "POSITIVE VIBES",
    model: "Cigarette 36",
    type: "Powerboat",
    length: "36 ft",
    capacity: 10,
    capacityNote: "Smooth open-bow with shaded tee top",
    priceFrom: 950,
    currency: "$",
    priceLabel: "from $950 half-day",
    budget: "Under $1500",
    occasion: "Friends group",
    featured: false,
    description:
      "A Cigarette 36 with a smooth, comfortable ride. Open bow for room to lounge, tee top for shade — Caribbean style at its purest.",
    longDescription:
      "Saint-Martin · Anguilla · St Barth. Comfortable cruise, shaded tee top, snorkel gear, beach towels and an open bar included.",
    highlights: [
      "Open bow with shaded tee top",
      "Saint-Martin · Anguilla · St Barth",
      "Drone & extras on request",
    ],
    image: "/boats/positive_a.jpg",
    gallery: ["/boats/positive_a.jpg", "/boats/positive_b.jpg"],
    rates: {
      currency: "$",
      sections: [
        {
          title: "Half-day (4h)",
          items: [r("Saint-Martin", "$950")],
        },
        {
          title: "Full-day (7h)",
          items: [
            r("Saint-Martin", "$1,250"),
            r("Anguilla", "$1,350"),
            r("St Barth", "$1,450"),
          ],
        },
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
        "Taxes: $35/pp Anguilla · $20/pp St Barth.",
        "+20% surcharge during Christmas period (Dec 20 – Jan 7).",
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
