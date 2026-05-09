// Feel SXM site-wide constants. Replace placeholders before launch.
export const SITE = {
  name: "Feel SXM",
  tagline: "Private boat charters & island experiences",
  // WhatsApp number must be in international format without "+" or spaces for wa.me
  whatsappNumber: "590690568995",
  whatsappDisplay: "+590 690 56 89 95",
  email: "hello@feelsxm.com",
  instagram: "FEELSXM",
  instagramUrl: "https://instagram.com/FEELSXM",
  location: "Saint-Martin · French West Indies",
};

export function buildWhatsappUrl(message) {
  const encoded = encodeURIComponent(message || "Hello Feel SXM, I'd like to book an experience.");
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}
