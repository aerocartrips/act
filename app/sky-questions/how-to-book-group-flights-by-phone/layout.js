import Script from "next/script";

export const metadata = {
  title: "How to Book Group Flights by Phone with Sky Airline +1-844-607-4888",
  description:
    "Path to get help by dial +1-844-607-4888 to book group flights with Sky Airline. Call +1-844-607-4888 for personalized group fares, flexible payments, and expert travel assistance.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline group booking, Sky group flights, book group flight Sky Airline, Sky Airline phone number, Sky Airline +1-844-607-4888, Sky customer service, Sky group desk, Sky Airline USA contact, Sky Airline reservations, Sky flight booking help, Sky Airline group travel, Sky Airline special fares, Sky Airline team booking",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-book-group-flights-by-phone`,
  },

  openGraph: {
    title: "How to Book Group Flights by Phone with Sky Airline +1-844-607-4888",
    description:
      "Book Sky Airline group flights easily by phone. Call +1-844-607-4888 for personalized service, discounts, and flexible payment options.",
    url: "https://aerocartrips.com/sky-questions/how-to-book-group-flights-by-phone",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Book Group Flights by Phone with Sky Airline +1-844-607-4888",
    description:
      "Call +1-844-607-4888 for Sky Airline group bookings, discounted fares, and expert assistance. Ideal for families, companies, and events.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

// ✅ FAQ Schema
const faqs = [
  {
    question: "How many passengers qualify for a group booking with Sky Airline?",
    answer:
      "Call +1-844-607-4888 for details. A minimum of 10 passengers traveling together on the same flight qualifies for a Sky Airline group booking.",
  },
  {
    question: "Can I pay later or partially for a Sky Airline group booking?",
    answer:
      "Yes, you can secure your Sky Airline group reservation with a small deposit and pay the remaining balance later. Contact +1-844-607-4888 for flexible options.",
  },
  {
    question: "Can Sky Airline arrange special services for group travelers?",
    answer:
      "Absolutely. Sky Airline provides dedicated support for meals, seating, and baggage arrangements. Simply call +1-844-607-4888 for personalized help.",
  },
];

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const today = new Date().toISOString().split("T")[0];

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Book Group Flights by Phone with Sky Airline +1-844-607-4888",
  description:
    "Detailed guide on booking group flights with Sky Airline. Call +1-844-607-4888 for exclusive fares, flexible payment options, and 24/7 expert help.",
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
