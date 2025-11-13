import Script from "next/script";

export const metadata = {
  title: "How to Call Sky Airline Customer Service USA +1-844-607-4888",
  description:
    "Sky Airline booking in the USA call +1-844-607-4888 for instant support with bookings, cancellations, refunds, seat upgrades, and baggage issues.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline customer service USA, Sky Airline phone number USA, Sky Airline contact number, Sky Airline helpline, Sky Airline live agent, Sky Airline booking assistance, Sky Airline refund help, Sky Airline +1-844-607-4888, Sky Airline flight changes, Sky Airline rebooking, Sky Airline cancellation, Sky Airline baggage support",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-call-sky-airline-customer-service-usa`,
  },

  openGraph: {
    title:
      "How to Call Sky Airline Customer Service USA +1-844-607-4888 ",
    description:
      "Call Sky Airline Customer Service USA at +1-844-607-4888 for immediate help with bookings, cancellations, baggage, and refunds — available 24/7.",
    url: "https://aerocartrips.com/sky-questions/how-to-call-sky-airline-customer-service-usa",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Call Sky Airline Customer Service USA +1-844-607-4888",
    description:
      "Need Sky Airline help? Call +1-844-607-4888 for 24/7 customer service in the USA. Get quick help with booking, refunds, and flight changes.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

// ✅ FAQ Schema
const faqs = [
  {
    question: "What is Sky Airline’s customer service number in the USA?",
    answer:
      "You can reach Sky Airline’s USA support by calling +1-844-607-4888, available 24 hours a day, 7 days a week.",
  },
  {
    question: "Can I book flights by calling Sky Airline customer service?",
    answer:
      "Yes! Dial +1-844-607-4888 to book your Sky Airline flight over the phone. Agents can also help you apply discounts or special fares.",
  },
  {
    question: "Is the USA Sky Airline number toll-free?",
    answer:
      "Yes, +1-844-607-4888 is a toll-free number for passengers in the USA. There are no call charges.",
  },
  {
    question: "Can I speak to a live agent at night or on weekends?",
    answer:
      "Absolutely! Sky Airline’s USA support is available 24/7, including weekends and holidays.",
  },
  {
    question: "Can I manage my booking by phone?",
    answer:
      "Yes, you can modify your flight details, add baggage, change seats, or cancel tickets simply by calling +1-844-607-4888.",
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

// ✅ Add dynamic date for SEO freshness
const today = new Date().toISOString().split("T")[0];

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Call Sky Airline Customer Service USA +1-844-607-4888",
  description:
    "Call Sky Airline’s USA helpline at +1-844-607-4888 for fast and reliable assistance. Get help with bookings, cancellations, refunds, and baggage services anytime.",
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
