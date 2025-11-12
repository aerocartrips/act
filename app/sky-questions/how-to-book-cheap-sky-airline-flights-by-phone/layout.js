import Script from "next/script";

export const metadata = {
  title: "How to Book Cheap Sky Airline Flights +1-844-607-4888",
  description:
    "Dial +1-844-607-4888 or Step-by-step guide to book cheap Sky Airline flights by phone. Call +1-844-607-4888 for instant support, exclusive discounts, and personalized deals.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline flights, cheap Sky Airline flights, book Sky Airline by phone, Sky Airline +1-844-607-4888, Sky Airline customer service, Sky Airline deals, Sky Airline discounts",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-book-cheap-sky-airline-flights-by-phone`,
  },

  openGraph: {
    title: "How to Book Cheap Sky Airline Flights +1-844-607-4888",
    description:
      "Step-by-step guide to book cheap Sky Airline flights by phone. Call +1-844-607-4888 for exclusive discounts.",
    url: "https://aerocartrips.com/sky-questions/how-to-book-cheap-sky-airline-flights-by-phone",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Book Cheap Sky Airline Flights +1-844-607-4888",
    description:
      "Step-by-step guide to book cheap Sky Airline flights by phone. Call +1-844-607-4888 for exclusive discounts.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

const faqs = [
  {
    question: "Can I really get cheaper Sky Airline fares by calling?",
    answer:
      "Yes. Calling +1-844-607-4888 connects you to booking experts who can access exclusive discounts, flexible deals, and hidden fare options not listed online.",
  },
  {
    question: "Is booking by phone secure?",
    answer:
      "Absolutely. Sky Airline’s booking system uses encrypted payment channels to protect your information. You’ll receive an e-ticket instantly after confirmation.",
  },
  {
    question: "Can I book group flights by phone?",
    answer:
      "Yes. Group bookings are often easier and cheaper by phone. Simply dial +1-844-607-4888, share your group size and travel dates, and an agent will arrange the best fare.",
  },
];

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs
};

const today = new Date().toISOString().split("T")[0];

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Book Cheap Sky Airline Flights – Step-by-Step Guide",
  "description":
    "Detailed guide to book cheap Sky Airline flights by phone. Call +1-844-607-4888 for instant support, exclusive discounts, and personalized deals.",
  "author": {
    "@type": "Person",
    "name": "aerocartrips"
  },
  "publisher": {
    "@type": "Organization",
    "name": "aerocartrips.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aerocartrips.com/favicon.ico"
    }
  },
  "datePublished": today,
  "dateModified": today
};

export default function RootLayout({ children }) {
  return (
    <section>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </section>
  );
}
