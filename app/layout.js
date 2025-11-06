import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aerocartrips",
  description:
    "We are enthusiastic to provide help, support, and guidance to everyone, ensuring satisfaction outcomes always. we believe every great partnership begins with a conversation. Whether you’re seeking tailored solutions, expert guidance. Our support and consultation services are available 24*7.",
  charset: "utf-8",
  keywords: "aerocartrips,aerocartrips about, aero, aero car trips, aerotrips",
  robots: "index, follow",
  alternates: {
    canonical: "https://aerocartrips.com/",
  },
  icons: {
    icon: "favicon.ico",
  },
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aerocartrips",
  url: "https://aerocartrips.com",
  logo: `https://aerocartrips.com/favicon.ico`,
  image: `https://aerocartrips.com/logo/namewithlogo.png`,
  description:
    "We are enthusiastic to provide help, support, and guidance to everyone, ensuring satisfaction outcomes always. we believe every great partnership begins with a conversation. Whether you’re seeking tailored solutions, expert guidance. Our support and consultation services are available 24*7.",
  telephone: "+1-888-245-5086",
  foundingDate: "08-08-2018",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-888-245-5086",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(org).replace(/</g, "\\u003c"),
          }}
        />
        {/* <link rel="icon" href="/favicon.ico" sizes="32x32" /> */}
        {/* <link rel="icon" type="image/png" href="/logo/logo.png" sizes="32x32" /> */}
        <link rel="apple-touch-icon" href="favicon.ico" />
      </head>
      {/* <link rel="icon" href="irail.png" />
    <link rel="canonical" href="https://irail.vercel.app/" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      {/* <meta name="theme-color" content="#000000" /> */}
      {/* <meta name="title" /> */}
      {/* <meta
        name="description"
        content="Check available seats of all class Plan your journey with ease by finding open train seats across various routes Fast and reliable train seat checker"
    />
    <meta
      name="keywords"
      content="find available seats, real-time train availability,train seat availability, check train availability, train seat reservation, available train tickets, train seat checker, train booking system,rail, train, seat, tatkal, general ,available, waiting, ticket, railway, station, from, to, gadi, rac, cnf, wl, train ticket, trains, irail, erail, online ticket, online train, plateform, indian railway, railway,train seat availability, seat reservation"
    /> */}
      {/* <meta name="robots" content="index, follow"/> */}
      {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
      {/* <meta name="language" content="English"/> */}
      {/* <meta
      property="og:title"
      content="iRail | Train Seat Availability Checker"
    />
    <meta property="og:site_name" content="iRail" />
    <meta property="og:url" content="https://irail.in" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="Find available seats for your train journey. Check availability of trains."
    />
      <meta property="og:image" content="/irailhome.png" /> */}

      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
