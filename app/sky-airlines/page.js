import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import Link from "next/link";

// app/sky-airline/page.jsx
export default function Page() {
  const faqItems = [
    {
      question: "Does SKY have a frequent flyer program?",
      answer:
        "SKY runs a program named Sky Plus (or similar branded tiers). Call +1 844 607 4888 for further detail. Program details and benefits evolve — check SKY’s official loyalty pages for the latest terms.",
    },
    {
      question:
        "How can I check in and what airport processes should I expect?",
      answer:
        "SKY offers online and mobile check-in windows; printed or mobile boarding passes are accepted depending on the airport. Call +1 844 607 4888 for further detail. If you have checked luggage, arrive earlier and use the airline counters for bag drop.",
    },
    {
      question: "How do I file a claim for lost baggage or delay?",
      answer:
        "Call +1 844 607 4888 or Use SKY’s online case form and attach required documents at mmb.skyairline.com.",
    },
    {
      question: "Is SKY a full-service airline?",
      answer:
        "No — SKY is a low-cost carrier. Base fares are intentionally minimal; many extras (baggage, seat selection, meals) cost extra.",
    },
    {
      question: "Which aircraft does SKY fly?",
      answer:
        "SKY’s operations are based on Airbus A320-family aircraft (A320neo and related variants).",
    },
    {
      question: "How strict is SKY about carry-on size?",
      answer:
        "Carry-on dimensions are enforced strictly. Measure bags or prepay for larger ones.",
    },

    {
      question: "Is SKY safe?",
      answer:
        "Yes. SKY operates under civil aviation regulations and professional maintenance standards.",
    },
    {
      question: "What is SKY’s hub and main route footprint?",
      answer:
        "Primary hub: Santiago (SCL). SKY operates domestic routes across Chile and regional services to Argentina, Peru, Colombia, Brazil, Uruguay, Ecuador, and seasonal leisure routes to the Caribbean and Miami.",
    },
    {
      question: "What are SKY’s fare types and how do they work?",
      answer:
        "SKY sells unbundled fares. Basic fares include a very small personal item only. Higher bundles or paid options add carry-on, checked bags, seat selection, and flexibility. Buying baggage at booking is generally cheaper than at the airport.",
    },

    {
      question: "Any tips to avoid surprises when booking SKY?",
      answer:
        "Read fare rules carefully, buy baggage during booking, pre-check seat rules, and if you have special or oversized items, pre-arrange them with the airline. For long delays, keep receipts for any expenses and file claims promptly.",
    },
  ];
  return (
    <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[900px]">
        <div className="flex justify-between gap-6 items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Sky Airlines
          </h1>
          <Image
            src="/skylogo.png"
            alt="Sky History"
            width={250}
            height={90}
            className="rounded h-[90px] w-[150px] sm:w-[250px] object-cover"
          />
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            1. Quick Snapshot
          </h2>
          <p>
            SKY Airline (IATA: H2) is a Chilean low-cost carrier headquartered
            in Santiago (Arturo Merino Benítez International Airport). Launched
            in the early 2000s, SKY grew rapidly as Chile’s first major low-cost
            operator and today operates an all-Airbus narrow-body fleet on
            domestic and regional routes across South America and to select
            Caribbean / U.S. gateways. It positions itself on low fares, simple
            fare bundles, and a no-frills onboard product while keeping a high
            flight frequency on key domestic corridors.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            2. History & Corporate Structure
          </h2>
          <p>
            Founded: Early 2000s (founded 2001) by the Paulmann family and
            associates; over two decades it expanded from a Chile-focused
            carrier to a multi-country presence via subsidiaries.
          </p>
          <p>
            Business model: Low-cost carrier (LCC) model — point-to-point
            routes, unbundled fares (pay for extras), and an emphasis on cost
            efficiency.
          </p>
          <p>
            Corporate organization: Parent operations in Chile with subsidiaries
            or branded operations in nearby markets (notably Peru and Ecuador),
            and Abra Group listed among investors/minority owners in public
            summaries.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            3. Hubs, Route Network & Destinations
          </h2>
          <p>
            <strong>Primary hub:</strong> Santiago (SCL - Arturo Merino Benítez
            International).
          </p>
          <p>
            Network footprint: SKY flies a mix of domestic Chilean routes and
            international services across South America (Argentina, Peru,
            Colombia, Brazil, Uruguay, Ecuador) and has marketed routes to the
            Caribbean and Miami. The carrier often adds seasonal and
            leisure-focused services (Cancún, Punta Cana, etc.) and also serves
            important secondary cities in Peru and Chile. For the most current
            city list consult SKY’s destination pages.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            4. Fleet — Types, Size, and Configuration
          </h2>
          <p>
            Airbus narrow-body fleet: SKY operates a fleet built around Airbus
            A320-family aircraft (A320neo / A321neo previously reported in
            orders and A320 variants in service); this fleet strategy keeps
            maintenance and training costs lower and gives high commonality.
            Fleet numbers change with deliveries and retirements, but public
            fleet trackers list dozens of active Airbus A320 family jets across
            the group.
          </p>
          <p>
            Why this matters: A single-family fleet simplifies scheduling,
            maintenance, spare parts, and crew training — central to the LCC
            cost model.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            5. Fare Types, Seating & Ancillaries
          </h2>
          <p>
            Unbundled fares: Basic (very low fare) tickets typically include
            only a small personal item; higher fare buckets add carry-on,
            checked baggage, seat selection, and flexible changes. SKY sells
            extras a-la-carte: priority boarding, baggage, seats with extra
            legroom, and onboard snacks. (Always check the fare rules at
            booking; “Zero/Basic” fares are strict.)
          </p>
          <p>
            Seat types and upgrade options: Standard economy seating is the
            default. Some flights or aircraft may offer seats with extra legroom
            at a cost. Upgrade to a higher bundle or pay for a seat selection at
            booking.
          </p>
          <p>
            <strong>Tips:</strong> If you need baggage, buy it during booking —
            it’s typically cheaper than paying at the airport.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            6. Baggage Policy
          </h2>
          <p>
            Baggage rules differ by fare and route (and they change), but
            general patterns are:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Zero / Basic fares:</strong> Include only a small personal
              item (strict dimensions and weight).
            </li>
            <li>
              <strong>Plus / Master fares:</strong> Include a personal item plus
              a carry-on and checked bags depending on the fare.
            </li>
            <li>
              <strong>Checked baggage limits:</strong> Vary by route; standard
              maximum linear dimension 158 cm.
            </li>
          </ul>
          <p>
            Always verify at booking or see SKY’s baggage pages for current fee
            tables.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            7. Check-in, Boarding & Airport Processes
          </h2>
          <p>
            Online check-in: SKY offers online/mobile check-in; printing or
            mobile boarding passes are accepted depending on the airport. Online
            check-in opens at specific windows.
          </p>
          <p>
            Airport counters & bag drop: If you have checked bags or need
            assistance, arrive earlier and use SKY counters; airports enforce
            cut-offs for check-in and bag drop times.
          </p>
          <p>
            Size checks and enforcement: Travelers report strict enforcement of
            hand-luggage dimensions on some routes.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            8. Customer Service, Claims, and Contact Channels
          </h2>
          <p>
            Official channels: SKY publishes customer forms for claims and case
            inquiries and has region-specific contact pages. For claims or
            baggage/IRROPS issues use the SKY online case form linked from their
            contact pages.
          </p>
          <p>
            Best practice: File via the online form, keep boarding passes &
            receipts. Local civil aviation rules may affect compensation.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            9. Frequent Flyer / Loyalty
          </h2>
          <p>
            Sky Plus: SKY runs a simple loyalty program where members may earn
            perks (priority options, fare benefits); check their site for
            updates.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            10. Operational Performance & Reputation
          </h2>
          <p>
            Punctuality & awards: SKY has been recognized in past years for
            punctuality and regional awards (e.g., Skytrax). Customer feedback
            centers on fare competitiveness (positive) and ancillary fees
            (mixed).
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            11. Safety, Maintenance & Oversight
          </h2>
          <p>
            Maintenance: SKY contracts or runs maintenance through AIRMAN
            (Santiago). Operates under civil aviation oversight in all markets.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            12. Subsidiaries, Alliances & Partnerships
          </h2>
          <p>
            SKY operates subsidiaries such as SKY Peru and SKY Ecuador to expand
            its reach across the Americas. It also works with interline partners
            occasionally.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            13. Business Strategy & Market Position
          </h2>
          <p>
            Value proposition: Low fares and frequent schedules between major
            cities.
          </p>
          <p>
            When to choose SKY: Ideal for travelers prioritizing price over
            amenities. For all-inclusive service, full-service carriers may be
            preferable.
          </p>
          <p>
            For agents: SKY’s regional reach is especially useful for Chile–Peru
            itineraries.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            14. Practical Tips & How to Avoid Surprises
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Buy baggage online at booking time (airport fees are higher).
            </li>
            <li>Read the fare rules carefully.</li>
            <li>Pre-arrange oversized or special baggage.</li>
            <li>
              Keep receipts for delays and file claims promptly via
              mmb.skyairline.com.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            15. Notable Sources
          </h2>
          <ul className="list-disc pl-6">
            <li>SKY Airline company & summary page (Wikipedia)</li>
            <li>SKY official site — fleet / onboard / destination pages</li>
            <li>Fleet trackers (Planespotters, Airfleets)</li>
            <li>Routesonline and travel blogs tracking fees</li>
          </ul>
        </section>

        <section className="mt-12">
          {/* <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            FAQ — Ready for Publishing
          </h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Q: Is SKY a full-service airline?</p>
              <p>
                A: No—SKY is a low-cost carrier. Base fares are minimal; extras
                cost extra.
              </p>
            </div>
            <div>
              <p className="font-semibold">Q: Which aircraft does SKY fly?</p>
              <p>
                A: SKY’s operations are based on Airbus A320-family aircraft
                (A320neo and related variants).
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Q: How strict is SKY about carry-on size?
              </p>
              <p>
                A: Carry-on dimensions are enforced strictly. Measure bags or
                prepay for larger ones.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Q: How do I file a claim for lost baggage or delay?
              </p>
              <p>
                A: Call +1 844 607 4888 or Use SKY’s online case form and attach
                required documents at mmb.skyairline.com.
              </p>
            </div>
            <div>
              <p className="font-semibold">Q: Is SKY safe?</p>
              <p>
                A: Yes. SKY operates under civil aviation regulations and
                professional maintenance standards.
              </p>
            </div>
          </div> */}
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            FAQ — Ready for Publishing
          </h2>
          <div className="divide-y">
            {faqItems.map((item, i) => (
              <div key={i} className="px-4 py-4 sm:px-6 sm:py-5">
                <button className="w-full text-left flex items-start justify-between focus:outline-none">
                  <span>
                    <h3 className="text-base sm:text-lg font-medium">
                      {item.question}
                    </h3>
                    <span className="mt-2 block text-sm sm:text-base text-gray-600">
                      {true ? (
                        <span className="sr-only">Expanded</span>
                      ) : (
                        <span className="sr-only">Collapsed</span>
                      )}
                    </span>
                  </span>

                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      true ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`${
                    true ? "max-h-screen mt-3" : "max-h-0"
                  } overflow-hidden transition-all duration-300`}
                >
                  <div className="text-sm sm:text-base text-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-between gap-2 flex-wrap">
          <div className="">
            Pre -{" "}
            <Link
              href="/"
              className={`hover:text-blue-700 text-blue-700 underline`}
            >
              Home
            </Link>
          </div>
          <div className="">
            Next -{" "}
            <Link
              href="/how-to-book-sky-tickets-sky-airlines"
              className={`hover:text-blue-700 text-blue-700 underline`}
            >
              How to book ticket
            </Link>
          </div>
        </div>
      </div>

      <div>
        <ContactSection name="Sky" isSide={true} />
      </div>
    </div>
  );
}
