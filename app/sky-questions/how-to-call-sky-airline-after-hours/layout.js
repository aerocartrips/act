import Script from "next/script";

export const metadata = {
  title: "How to Call Sky Airline After Hours +1-844-607-4888",
  description:
    "Need Sky Airline help at night? Call +1-844-607-4888 for after-hours support. Get help with flight changes, cancellations, refunds, and emergencies anytime.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline after hours, Sky Airline 24/7 support, Sky Airline night helpline, Sky Airline contact number USA, Sky Airline customer service, Sky Airline phone number, Sky Airline +1-844-607-4888, Sky Airline call center, Sky Airline live agent, Sky Airline emergency support, Sky Airline refund help, Sky Airline booking assistance",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-call-sky-airline-after-hours`,
  },

  openGraph: {
    title: "How to Call Sky Airline After Hours +1-844-607-4888 (24/7 Helpline)",
    description:
      "Sky Airline provides 24/7 customer service for urgent issues. Call +1-844-607-4888 for help with flight changes, cancellations, and refunds anytime.",
    url: "https://aerocartrips.com/sky-questions/how-to-call-sky-airline-after-hours",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Call Sky Airline After Hours +1-844-607-4888",
    description:
      "Get emergency support from Sky Airline by calling +1-844-607-4888. Available day and night for cancellations, flight changes, and refunds.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

// ✅ FAQ Schema
const faqs = [
  {
    question: "Can I call Sky Airline after hours?",
    answer:
      "Yes, Sky Airline provides 24/7 customer support. You can call +1-844-607-4888 anytime — even late at night or on weekends — for flight assistance.",
  },
  {
    question: "Is there an extra fee for after-hours service?",
    answer:
      "No. The Sky Airline toll-free number +1-844-607-4888 is free to call, and there are no extra charges for after-hours support.",
  },
  {
    question: "Can I cancel or change my flight at night?",
    answer:
      "Absolutely. Just dial +1-844-607-4888 and speak with an after-hours Sky Airline agent to make changes or cancellations instantly.",
  },
  {
    question: "Can I report lost baggage after hours?",
    answer:
      "Yes. Sky Airline’s 24/7 support team can help you file a lost baggage report and track updates anytime you call.",
  },
  {
    question: "Is the Sky Airline toll-free number available for international travelers?",
    answer:
      "Yes, international passengers can also reach Sky Airline customer support at +1-844-607-4888 for any booking or service-related issues.",
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
  headline: "How to Call Sky Airline After Hours +1-844-607-4888",
  description:
    "Get emergency support from Sky Airline by calling +1-844-607-4888. Comprehensive guide to contacting Sky Airline after hours. Call +1-844-607-4888 for help with flight changes, cancellations, and urgent travel issues.",
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
      {/* JSON-LD FAQ Schema */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq).replace(/</g, "\\u003c"),
        }}
      />
      {/* JSON-LD Article Schema */}
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
