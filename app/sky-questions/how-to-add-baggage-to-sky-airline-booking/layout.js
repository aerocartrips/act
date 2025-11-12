
import Script from "next/script";

export const metadata = {
  title: "How to Add Baggage with Sky Airline +1-844-607-4888",
  description:
    "Step-by-step guide to add extra baggage with Sky Airline. Call +1-844-607-4888 for instant help. Avoid last-minute charges and ensure a smooth travel experience.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky Airline baggage, Sky Airline extra baggage, add baggage Sky Airline, Sky customer service, Sky phone number, Sky baggage support, Sky +1-844-607-4888, Sky customer service, Sky phone number, Sky customer phone number, Sky customer service phone number, Sky customer service phone, call Sky, Sky support number, Sky customer number, Sky customer service number, Sky 888 number, Sky customer support number, Sky 888, Sky toll free, Sky customer service toll free, Sky customer service 888, Sky customer service 888 number, Sky customer service 888 phone, Sky contact number, Sky contact phone, Sky contact, Sky customer service contact, Sky customer service contact number, Sky customer service email, Sky customer service email address, Sky customer service chat, Sky customer service live chat, contact Sky, contact Sky customer service, Sky.com phone number, Sky.com customer service, Egencia LLC phone number, Egencia LLC customer service, Sky phone number, Sky customer service, Sky get human,",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-add-baggage-to-sky-airline-booking`,
  },

  openGraph: {
    title: "How to Add Baggage with Sky Airline +1-844-607-4888",
    description:
      "Step-by-step guide to add extra baggage with Sky Airline. Call +1-844-607-4888 for instant help.",
    url: "https://aerocartrips.com/sky-questions/how-to-add-baggage-to-sky-airline-booking",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Add Baggage with Sky Airline +1-844-607-4888",
    description:
      "Step-by-step guide to add extra baggage with Sky Airline. Call +1-844-607-4888 for instant help.",
    site: "@Aerocartrips",
  },
  contentLanguage: "en-US",
};

const faqs = [
  {
    question: "How can I add baggage to my Sky Airline flight?",
    answer:
      "Call phone at +1-844-607-4888 or You can add baggage online via www.skyairline.com, or at the airport check-in counter.",
  },
  {
    question: "Is adding baggage online cheaper than at the airport?",
    answer:
      "Yes, adding baggage online before check-in is always cheaper than paying at the airport.",
  },
  {
    question: "What is the maximum weight for checked baggage?",
    answer:
      "Checked baggage can weigh up to 23 kg per bag, with a maximum size of 158 cm in total dimensions.",
  },
];



const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity":faqs
}
const today = new Date().toISOString().split("T")[0]

const artical = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Add Baggage with Sky Airline – Step-by-Step Guide",
  "description":"Detailed step-by-step guide to add extra baggage to your Sky Airline booking. Call +1-844-607-4888 for instant support.",
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
}


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
          __html: JSON.stringify(artical).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </section>
  );
}
