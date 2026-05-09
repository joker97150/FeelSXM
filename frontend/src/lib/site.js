// Feel SXM site-wide constants. Replace placeholders before launch.
export const SITE = {
  name: "Feel SXM",
  tagline: "Private boat charters & island experiences",
  // WhatsApp number must be in international format without "+" or spaces for wa.me
  whatsappNumber: "15550001234", // PLACEHOLDER — replace with real number e.g. 590xxxxxxx
  whatsappDisplay: "+1 (555) 000-1234",
  email: "hello@feelsxm.com",
  instagram: "feelsxm",
  instagramUrl: "https://instagram.com/feelsxm",
  location: "Saint-Martin · French West Indies",
};

export function buildWhatsappUrl(message) {
  const encoded = encodeURIComponent(message || "Hello Feel SXM, I'd like to book an experience.");
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}
