export const business = {
  name: "HANIF PRINTING",
  tagline: "Professional Printing & Creative Design",
  description:
    "Creative design, professional printing, and customized branding solutions for businesses, organizations, events, and individuals.",
  city: "Harar",
  landmark: "Ras Hotel",
  country: "Ethiopia",
  addressLine: "Harar, Ras Hotel, Ethiopia",
  phones: [
    { label: "Phone 1", value: "+251962444622" },
    { label: "Phone 2", value: "+251957530001" },
  ],
  whatsappNumber: "251962444622",
  whatsappLink: "https://wa.me/251962444622",
  mapsQuery: "Ras Hotel Harar Ethiopia",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Ras Hotel Harar Ethiopia"),
  yearEstablishedKnown: false,
} as const;

export const getMapsUrl = () => business.mapsUrl;
export const getPrimaryPhoneHref = () => `tel:${business.phones[0].value}`;
export const getSecondaryPhoneHref = () => `tel:${business.phones[1].value}`;
