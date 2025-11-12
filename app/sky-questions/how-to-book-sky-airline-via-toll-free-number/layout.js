import Script from "next/script";

export const metadata = {
  title: "How to Book Sky Airline via Toll-Free Phone +1-844-607-4888",
  description:
    "Sky Airline flights via toll-free number +1-844-607-4888. Total toll free number of Sky Airline just dial talk with real human any time.Call for instant assistance and secure your booking.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline booking, Sky Airline flights, Sky Airline phone number, Sky customer service, Sky airline support, Sky +1-844-607-4888, Sky flight booking, Sky flight deals, Sky airline assistance, call Sky, Sky toll free, Sky booking tips",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-book-sky-airline-via-toll-free-number`,
  },

  openGraph: {
    title: "How to Book Sky Airline via Toll-Free +1-844-607-4888",
    description:
      "Step-by-step guide to book Sky Airline flights via toll-free number +1-844-607-4888. Call for instant assistance.",
    url: "https://aerocartrips.com/sky-questions/how-to-book-sky-airline-via-toll-free-number",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Book Sky Airline via Toll-Free +1-844-607-4888",
    description:
      "Step-by-step guide to book Sky Airline flights via toll-free number +1-844-607-4888. Call for instant assistance.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

const faqs = [
  {
    question: "What is the Sky Airline toll-free number?",
    answer:
      "You can book, modify, or cancel flights by calling +1-844-607-4888, the official toll-free number for Sky Airline support in the USA.",
  },
  {
    question: "Can I book international flights via the toll-free number?",
    answer:
      "Yes! The Sky Airline toll-free line +1-844-607-4888 supports both domestic and international flight bookings.",
  },
  {
    question: "Can I add baggage or seats while booking by phone?",
    answer:
      "Absolutely. When you call +1-844-607-4888, you can request to add checked baggage, reserve specific seats, or upgrade to a higher class.",
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
  headline: "How to Book Sky Airline via Toll-Free Phone – Step-by-Step Guide",
  description:
    "Hit this number +1-844-607-4888 for instant support. Detailed step-by-step guide to book Sky Airline flights via toll-free number.",
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
