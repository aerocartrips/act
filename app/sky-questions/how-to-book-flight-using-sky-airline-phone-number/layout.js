import Script from "next/script";

export const metadata = {
  title: "How to Book Family Travel via Sky Airline Phone +1-844-607-4888",
  description:
    "Go with +1-844-607-4888 or Step-by-step guide to book family travel with Sky Airline. Call +1-844-607-4888 for instant help and ensure your family sits together.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline family travel, Sky Airline group booking, book family Sky Airline, Sky customer service, Sky phone number, Sky customer support, Sky +1-844-607-4888, Sky booking assistance, Sky flight booking, Sky family fares, Sky airline help, Sky customer service number, Sky airline phone booking, call Sky, Sky toll free, Sky booking tips",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-book-family-travel-via-sky-airline-phone`,
  },

  openGraph: {
    title: "How to Book Family Travel via Sky Airline +1-844-607-4888",
    description:
      "Step-by-step guide to book family travel with Sky Airline. Call +1-844-607-4888 for instant help.",
    url: "https://aerocartrips.com/sky-questions/how-to-book-family-travel-via-sky-airline-phone",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Book Family Travel via Sky Airline +1-844-607-4888",
    description:
      "Step-by-step guide to book family travel with Sky Airline. Call +1-844-607-4888 for instant help.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

const faqs = [
  {
    question: "Can I book flights for infants and children together with adults?",
    answer:
      "Yes, Sky Airline agents will handle all passengers, including infants, to ensure accurate ticketing and seating.",
  },
  {
    question: "Are there special discounts for family bookings?",
    answer:
      "Yes, family or group bookings often receive lower fares per person, and phone agents can provide exclusive promotions.",
  },
  {
    question: "Can I request seats together for my family?",
    answer:
      "Absolutely. By calling +1-844-607-4888, agents ensure all family members sit together and can handle special seating needs.",
  },
];

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs,
};

const today = new Date().toISOString().split("T")[0];

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Book Family Travel via Sky Airline – Step-by-Step Guide",
  description:
    "Go with real human +1-844-607-4888 for instant support. Detailed step-by-step guide to book family travel with Sky Airline.",
  author: {
    "@type": "Person",
    name: "aerocartrips",
  },
  publisher: {
    "@type": "Organization",
    name: "aerocartrips.com",
    logo: {
      "@type": "ImageObject",
      url: "https://aerocartrips.com/favicon.ico",
    },
  },
  datePublished: today,
  dateModified: today,
};

export default function RootLayout({ children }) {
  return (
    <section>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </section>
  );
}
