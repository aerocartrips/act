
import Script from "next/script";

export const metadata = {
  title: "How to Book a Flight on Sky Airline — Step-by-Step Guide 2025",
  description:
    "Learn how to book your Sky Airline flight in 10 easy steps. Follow this complete guide or call +1-844-607-4888 for instant booking and travel assistance.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky customer service, Sky phone number, Sky customer phone number, Sky customer service phone number, Sky customer service phone, call Sky, Sky support number, Sky customer number, Sky customer service number, Sky 888 number, Sky customer support number, Sky 888, Sky toll free, Sky customer service toll free, Sky customer service 888, Sky customer service 888 number, Sky customer service 888 phone, Sky contact number, Sky contact phone, Sky contact, Sky customer service contact, Sky customer service contact number, Sky customer service email, Sky customer service email address, Sky customer service chat, Sky customer service live chat, contact Sky, contact Sky customer service, Sky.com phone number, Sky.com customer service, Egencia LLC phone number, Egencia LLC customer service, Sky phone number, Sky customer service, Sky get human,",
  alternates: {
    canonical: `https://aerocartrips.com/how-to-book-sky-tickets-sky-airlines`,
  },

  openGraph: {
    title: "Sky Customer Service +1 844 607 4888",
    description:
      "Call Sky Customer Service +1 844 607 4888 — reservations, baggage, refunds, SkyMiles. See ideal call hours & steps to reach a human agent.",
    url: "https://aerocartrips.com/how-to-book-sky-tickets-sky-airlines",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sky Customer Service +1 844 607 4888 ",
    description:
      "Call +1 844 607 4888 for Sky reservations, baggage, refunds & SkyMiles assistance. Quick steps to reach a live agent.",
    site: "@Aerocartrips",
  },

  contentLanguage: "en-US",
};


const faqItems = [
  {
    question: "How do I book a Sky Airline flight?",
    answer:
      "Visit www.skyairline.com, enter your route, select a flight, fill in your details, and complete payment. Or call +1-844-607-4888 for guided booking.",
  },
  {
    question: "Can I change or cancel my Sky Airline flight?",
    answer:
      "Yes. Visit “My Trips” or call +1-844-607-4888 to modify or cancel your booking. Fees depend on fare rules.",
  },
  {
    question: "How can I check my flight status?",
    answer:
      "Use the “Flight Status” tab on the Sky Airline website to track real-time updates.",
  },
  {
    question: "What payment methods does Sky Airline accept?",
    answer:
      "Credit cards, debit cards, and PayPal are widely accepted for online bookings.",
  },
  {
    question: "Does Sky Airline offer refunds?",
    answer:
      "Refunds vary by fare. Flexible fares usually allow partial or full refunds.",
  },
];

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "Sky Airlines how to book FAQ",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sky Customer Support",
  telephone: "+1 844 607 4888",
  jobTitle: "Support Executive",
  worksFor: {
    "@type": "Organization",
    name: "Sky Customer Support Service",
  },
};
export default function RootLayout({ children }) {
  return (
    <section>
      {/* <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(org).replace(/</g, '\\u003c'),
        }}
      /> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </section>
  );
}
