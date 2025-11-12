
import Script from "next/script";

export const metadata = {
  title: "How to Cancel Sky Airline Flight by phone +1 844 607 4888",
  description:
    "Plans change +1 844 607 4888 talk to Sky airline customer number. Flights get missed. Emergencies happen. Cancelling a flight doesn’t have to be painful but it does require attention to details, timing, and paperwork. Below is an open, thorough, and original guide you can publish on your site that walks readers through cancelling a Sky Airline booking, what to expect, pitfalls to avoid, and how to get help.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:160, max-image-preview:large",
  keywords:
    "Sky customer service, Sky phone number, Sky customer phone number, Sky customer service phone number, Sky customer service phone, call Sky, Sky support number, Sky customer number, Sky customer service number, Sky 888 number, Sky customer support number, Sky 888, Sky toll free, Sky customer service toll free, Sky customer service 888, Sky customer service 888 number, Sky customer service 888 phone, Sky contact number, Sky contact phone, Sky contact, Sky customer service contact, Sky customer service contact number, Sky customer service email, Sky customer service email address, Sky customer service chat, Sky customer service live chat, contact Sky, contact Sky customer service, Sky.com phone number, Sky.com customer service, Egencia LLC phone number, Egencia LLC customer service, Sky phone number, Sky customer service, Sky get human,",
  alternates: {
    canonical: `https://aerocartrips.com/sky-questions/how-to-cancel-a-sky-airline-flight-by-phone`,
  },

  openGraph: {
    title: "Sky Customer Service +1 844 607 4888",
    description:
      "Call Sky Customer Service +1 844 607 4888 — reservations, baggage, refunds, SkyMiles. See ideal call hours & steps to reach a human agent.",
    url: "https://aerocartrips.com/sky-questions/how-to-cancel-a-sky-airline-flight-by-phone",
    siteName: "Aerocartrips",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sky Customer Service +1 844 607 4888",
    description:
      "Call +1 844 607 4888 for Sky reservations, baggage, refunds & SkyMiles assistance. Quick steps to reach a live agent.",
    site: "@Aerocartrips",
  },

  contentLanguage: "en-US",
};


// const faqItems = [
//   {
//     question: "How to Cancel Sky Airline Flight?",
//     answer:
//       "Visit www.skyairline.com, enter your route, select a flight,t. Or call +1-844-607-4888 for guided cancellation.",
//   },
//   {
//     question: "Can I change or cancel my Sky Airline flight?",
//     answer:
//       "Yes. Visit “My Trips” or call +1-844-607-4888 to modify or cancel your booking. Fees depend on fare rules.",
//   },
//   {
//     question: "How can I check my flight status?",
//     answer:
//       "Use the “Flight Status” tab on the Sky Airline website to track real-time updates.",
//   },
//   {
//     question: "What payment methods does Sky Airline accept?",
//     answer:
//       "Credit cards, debit cards, and PayPal are widely accepted for online bookings.",
//   },
//   {
//     question: "Does Sky Airline offer refunds?",
//     answer:
//       "Refunds vary by fare. Flexible fares usually allow partial or full refunds.",
//   },
// ];



const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I cancel my Sky Airline flight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call +1-844-607-4888 or Visit the Sky Airline website → Manage My Booking / My Trips, enter your PNR and last name, and choose Cancel booking. If you face any issues, call +1-844-607-4888 for assistance."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a refund or travel voucher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cancellation outcomes depend on your fare type.Call +1-844-607-4888 for refunds, Refunds to cards usually take 7–30 business days. Travel vouchers can be issued within 24–72 hours. Keep the confirmation email or voucher code for rebooking or claiming funds."
      }
    },
    {
      "@type": "Question",
      "name": "What should I prepare before cancelling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Have your booking reference (PNR), passenger full name, email used for booking, payment details, and any travel insurance info ready. This ensures a smooth cancellation process."
      }
    }
  ]
}
const today = new Date().toISOString().split("T")[0]

const artical = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Cancel a Sky Airline Flight — A Candid Step-by-Step Guide",
  "description": "Learn how to cancel your Sky Airline flight step by step. Call +1-844-607-4888 for booking and cancellation support.",
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
