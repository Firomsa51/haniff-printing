import { business } from "@/lib/business";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressCountry: business.country,
      streetAddress: business.landmark,
    },
    telephone: business.phones.map((p) => p.value),
    url: "https://haniffprinting.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
