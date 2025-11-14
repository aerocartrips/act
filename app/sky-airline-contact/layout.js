import Script from "next/script";

export const metadata = {
  title: "SKY Airline Contact",
  description:
    "Contact +1-844-607-4888. Full guide explaining every SKY Airline support channel, phone help, refund process, baggage claims, and urgent travel help.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline customer support, Sky Airline phone number, Sky Airline help center, Sky Airline contact, Sky Airline USA number, Sky Airline customer service, Sky Airline refund help, Sky Airline baggage support, Sky Airline flight change help, Sky Airline agent phone, Sky Airline English support, Sky Airline live person, Sky Airline +1-844-607-4888, Sky Airline toll-free number, contact Sky Airline, Sky Airline complaints",
  alternates: {
    canonical: `https://aerocartrips.com/sky-airline-contact`,
  },

  openGraph: {
    title: "SKY Airline Contact",
    description:
      "Understand all SKY Airline support channels: phone, refunds, baggage, airport help, and more. Contact +1-844-607-4888.",
    url: "https://aerocartrips.com/sky-airline-contact",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SKY Airline Contact",
    description:
      "Detailed guide to contact SKY Airline support, refund help, flight issues, and more. Contact +1-844-607-4888.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};


const faqs = [
  {
    question: "What is the fastest way to contact SKY Airline?",
    answer:
      "If your travel is today or tomorrow, call +1-844-607-4888 or visit the airport desk immediately.",
  },
  {
    question: "Can I get an English-speaking SKY Airline agent?",
    answer:
      'Yes, but availability is limited. You can request: "English agent, please."',
  },
  {
    question: "How do I request a refund from SKY Airline?",
    answer:
      "Refunds must be submitted through the online Help Center form. Phone agents cannot process refunds.",
  },
];

// FAQ JSON-LD
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// -------------------- ARTICLE SCHEMA ------------------------

const today = new Date().toISOString().split("T")[0];

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SKY Airline Contact",
  description:
    "Contact +1-844-607-4888. Full guide explaining every SKY Airline support channel, phone help, refund process, baggage claims, and urgent travel help.",
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
