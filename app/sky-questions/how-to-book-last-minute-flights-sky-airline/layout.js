import Script from "next/script";

export const metadata = {
  title: "How to Book Last-Minute Flights with Sky Airline +1-844-607-4888",
  description:
    "Last-minute Sky Airline flight Call +1-844-607-4888 for urgent bookings, same-day tickets, and exclusive phone-only fares. Get instant confirmation and team available to hear concern about sky airline.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline last-minute flights, book Sky Airline flight, Sky Airline phone booking, Sky Airline urgent ticket, Sky Airline USA contact, Sky Airline +1-844-607-4888, Sky Airline same day flights, Sky Airline customer service, Sky Airline booking number, Sky Airline phone help, Sky Airline instant ticket confirmation, Sky Airline emergency booking",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-book-last-minute-flights-sky-airline`,
  },

  openGraph: {
    title: "How to Book Last-Minute Flights with Sky Airline +1-844-607-4888",
    description:
      "Book urgent Sky Airline flights easily by phone. Call +1-844-607-4888 for last-minute tickets, same-day deals, and instant confirmation.",
    url: "https://aerocartrips.com/sky-questions/how-to-book-last-minute-flights-sky-airline",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Book Last-Minute Flights with Sky Airline +1-844-607-4888",
    description:
      "Call +1-844-607-4888 to book last-minute Sky Airline flights with real-time assistance and secure payment options.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

// ✅ FAQ Schema
const faqs = [
  {
    question: "Can I really book a Sky Airline flight on the same day of travel?",
    answer:
      "Yes. Many passengers successfully book same-day Sky Airline flights by calling +1-844-607-4888 for direct assistance.",
  },
  {
    question: "Are last-minute tickets more expensive?",
    answer:
      "Not always. Sky Airline often releases unsold seats at discounted prices close to departure — call +1-844-607-4888 to check today’s deals.",
  },
  {
    question: "Can I make changes to my last-minute booking?",
    answer:
      "Yes. Sky Airline allows flight changes based on your fare type. Simply contact +1-844-607-4888 to modify your reservation.",
  },
  {
    question: "Is it safe to book by phone?",
    answer:
      "Absolutely. When calling +1-844-607-4888, you’re connected to verified Sky Airline representatives who process payments securely.",
  },
  {
    question: "Can I add baggage or select seats after booking?",
    answer:
      "Yes. You can manage or modify your booking anytime by calling +1-844-607-4888.",
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
    "How to Book Last-Minute Flights with Sky Airline +1-844-607-4888",
  description:
    "Step-by-step guide on booking last-minute Sky Airline flights by phone. Call +1-844-607-4888 for urgent reservations, same-day ticket help, and instant confirmation.",
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
