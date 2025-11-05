import Image from "next/image";
import Link from "next/link";

// app/sky-airline/page.jsx
export default function Page() {
  return (
    <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[1000px] bg-[#ffffff50]">
        <div className="flex justify-between gap-6 items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            How to Book a Flight on Sky Airline - Step-by-Step Guide (2025)
          </h1>
          <Image
            src="/skylogo.png"
            alt="Sky History"
            width={250}
            height={90}
            className="rounded h-[90px] w-[150px] sm:w-[250px] object-cover"
          />
        </div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 font-sans leading-relaxed">
          <p className="mb-6">
            Planning your next trip with Sky Airline? Whether you’re flying for
            business, leisure, or a family vacation, booking a flight on Sky
            Airline is quick, secure, and convenient. Follow this unique,
            step-by-step guide to book your flight effortlessly — plus, find
            expert tips and support details below.
          </p>

          {/* Step 1 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              ✈️ Step 1: Visit the Official Sky Airline Website
            </h2>
            <p>
              Start by visiting the official Sky Airline website at{" "}
              <a
                href="https://www.skyairline.com"
                target="_blank"
                className="text-blue-500 underline"
              >
                www.skyairline.com
              </a>
              . You’ll see the main booking box where you can search flights by
              entering your route, date, and passenger details.
            </p>
            <p>
              Need help? You can also book through Sky Airline’s support line at{" "}
              <strong>+1-844-607-4888</strong> for real-time flight assistance.
            </p>
          </section>

          {/* Step 2 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              🧭 Step 2: Enter Your Travel Details
            </h2>
            <p>In the search form, add:</p>
            <ul className="list-disc pl-6">
              <li>Departure and destination airports</li>
              <li>Travel dates (round-trip or one-way)</li>
              <li>Number of passengers</li>
              <li>Cabin preference (Economy, Plus, or Premium)</li>
            </ul>
            <p>
              Click “Search Flights” to see all available Sky Airline options
              and special offers.
              <br />
              <strong>Tip:</strong> If your travel dates are flexible, check
              nearby days for lower fares.
            </p>
          </section>

          {/* Step 3 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              💸 Step 3: Compare Flights and Fares
            </h2>
            <p>Sky Airline displays all flight options with their:</p>
            <ul className="list-disc pl-6">
              <li>Departure/arrival times</li>
              <li>Flight duration</li>
              <li>Fare type and included baggage</li>
              <li>Change or refund flexibility</li>
            </ul>
            <p>
              Choose the flight that fits your schedule and comfort preferences.
              You can also call <strong>+1-844-607-4888</strong> if you need
              guidance choosing the best fare for your route.
            </p>
          </section>

          {/* Step 4 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              👤 Step 4: Enter Passenger Information
            </h2>
            <p>Enter traveler details carefully:</p>
            <ul className="list-disc pl-6">
              <li>Full name (as on passport or ID)</li>
              <li>Date of birth</li>
              <li>Nationality and passport details (if international)</li>
              <li>Contact email and phone number</li>
            </ul>
            <p>
              Accuracy is essential — small spelling errors can cause boarding
              issues later.
            </p>
          </section>

          {/* Step 5 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              🧳 Step 5: Customize Your Flight
            </h2>
            <p>Sky Airline lets you add optional services for extra comfort:</p>
            <ul className="list-disc pl-6">
              <li>Checked baggage</li>
              <li>Seat selection (window, aisle, or extra legroom)</li>
              <li>Priority boarding</li>
              <li>Travel insurance</li>
            </ul>
            <p>Pick what you need to make your journey smoother.</p>
          </section>

          {/* Step 6 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              💳 Step 6: Review and Pay Securely
            </h2>
            <p>Review all flight details before paying:</p>
            <ul className="list-disc pl-6">
              <li>Passenger names</li>
              <li>Flight times and total fare</li>
              <li>Baggage and service fees</li>
            </ul>
            <p>
              Pay securely using credit/debit cards, PayPal, or other local
              methods. Once payment is successful, you’ll get a booking
              confirmation and e-ticket via email.
            </p>
          </section>

          {/* Step 7 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              📧 Step 7: Receive and Save Your E-Ticket
            </h2>
            <p>
              Check your email for the Sky Airline e-ticket and booking
              reference (PNR). Save this email or print it — you’ll need it for
              check-in.
            </p>
            <p>
              If you don’t receive it within minutes, call{" "}
              <strong>+1-844-607-4888</strong> to confirm your booking details.
            </p>
          </section>

          {/* Step 8 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              🧾 Step 8: Manage Your Booking
            </h2>
            <p>Go to “My Trips” on the Sky Airline website.</p>
            <ul className="list-disc pl-6">
              <li>View or change your booking</li>
              <li>Add baggage or seat upgrades</li>
              <li>Download your boarding pass</li>
            </ul>
            <p>All you need is your booking reference (PNR) and last name.</p>
          </section>

          {/* Step 9 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              🛫 Step 9: Check-In Online
            </h2>
            <p>
              Sky Airline’s online check-in opens 48 hours before departure.
            </p>
            <ul className="list-disc pl-6">
              <li>Download your boarding pass to your mobile</li>
              <li>Choose or confirm seats</li>
              <li>Save time at the airport by skipping long queues</li>
            </ul>
          </section>

          {/* Step 10 */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              🌍 Step 10: Enjoy Your Flight!
            </h2>
            <p>
              Arrive early — at least 2 hours for domestic or 3 hours for
              international flights. Carry your passport/ID, printed e-ticket,
              and boarding pass. Sky Airline’s staff will take care of the rest.
            </p>
          </section>

          {/* Assistance */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              ☎️ Need Booking Assistance?
            </h2>
            <p>
              If you face any issue while booking or checking in, contact Sky
              Airline Customer Service at <strong>+1-844-607-4888</strong> —
              available 24/7 to assist with reservations, cancellations, and
              flight changes.
            </p>
          </section>

          {/* Tips */}
          <section className="space-y-3 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              ✅ Sky Airline Booking Tips
            </h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Book early to get the best fares.</li>
              <li>
                Compare fare types — some include baggage and flexibility.
              </li>
              <li>Subscribe to Sky Airline’s newsletter for promotions.</li>
              <li>Double-check travel documents before departure.</li>
              <li>
                Use +1-844-607-4888 for personalized booking help anytime.
              </li>
            </ol>
          </section>

          {/* FAQs */}
          <section className="space-y-4 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              📚 FAQs About Booking Sky Airline Flights
            </h2>
            <div className="space-y-2">
              <p>
                <strong>1. How do I book a Sky Airline flight?</strong>
                <br />
                Visit www.skyairline.com, enter your route, select a flight,
                fill in your details, and complete payment. Or call
                +1-844-607-4888 for guided booking.
              </p>
              <p>
                <strong>
                  2. Can I change or cancel my Sky Airline flight?
                </strong>
                <br />
                Yes. Visit “My Trips” or call +1-844-607-4888 to modify or
                cancel your booking. Fees depend on fare rules.
              </p>
              <p>
                <strong>3. How can I check my flight status?</strong>
                <br />
                Use the “Flight Status” tab on the Sky Airline website to track
                real-time updates.
              </p>
              <p>
                <strong>
                  4. What payment methods does Sky Airline accept?
                </strong>
                <br />
                Credit cards, debit cards, and PayPal are widely accepted for
                online bookings.
              </p>
              <p>
                <strong>5. Does Sky Airline offer refunds?</strong>
                <br />
                Refunds vary by fare. Flexible fares usually allow partial or
                full refunds.
              </p>
            </div>
          </section>
          <div className="flex justify-between gap-2 flex-wrap">
            <div className="">
              Pre -{" "}
              <Link
                href="/sky-airlines"
                className={`hover:text-blue-700 text-blue-700 underline`}
              >
                Sky Airlines
              </Link>
            </div>
            <div className="">
              Next -{" "}
              <Link
                href="/sky-airlines-faq"
                className={`hover:text-blue-700 text-blue-700 underline`}
              >
                FAQ
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
