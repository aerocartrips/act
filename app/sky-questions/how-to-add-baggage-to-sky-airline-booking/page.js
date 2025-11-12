import Title from "@/components/Title";

export default function Page() {
  const faqs = [
    {
      question: "How can I add baggage to my Sky Airline flight?",
      answer:
        "You can add baggage online via www.skyairline.com, by phone at +1-844-607-4888, or at the airport check-in counter.",
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
  return (

     <Title title={'🧳 How to Add Baggage with Sky Airline – Step-by-Step Guide'}>

        <p className="mb-4">
          If you’ve already booked your flight with Sky Airline and need to add
          extra baggage, don’t worry — the process is simple and can be done
          online, by phone, or at the airport. For quick help, call Sky Airline
          Support at <strong>+1-844-607-4888</strong>.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">✈️ Step 1: Check Your Current Baggage Allowance</h2>
          <ul className="list-disc ml-6">
            <li>Zero Fare: Usually includes only a small personal item (no checked bag).</li>
            <li>Plus Fare: Includes one checked bag up to 23 kg.</li>
            <li>Full Fare: Includes more baggage allowance and flexibility.</li>
          </ul>
          <p>Call <strong>+1-844-607-4888</strong> if you need to add extra baggage.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">🌐 Step 2: Add Baggage Online (Recommended Option)</h2>
          <ol className="list-decimal ml-6">
            <li>Visit www.skyairline.com.</li>
            <li>Go to the “Manage My Booking” section.</li>
            <li>Enter your booking reference and last name.</li>
            <li>Click on “Add Extra Baggage”.</li>
            <li>Select how many bags you want to add.</li>
            <li>Pay securely using your preferred method.</li>
          </ol>
          <p>After payment, your updated baggage details will appear in your booking confirmation. Online is always cheaper than airport payments. For help, call <strong>+1-844-607-4888</strong>.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">💼 Step 3: Add Baggage by Phone</h2>
          <p>Call <strong>+1-844-607-4888</strong>. Agents will review your booking, inform you of fees, add baggage, and send a confirmation email.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">🏢 Step 4: Add Baggage at the Airport</h2>
          <ol className="list-decimal ml-6">
            <li>Go to the Sky Airline check-in counter.</li>
            <li>Provide your booking reference and passport.</li>
            <li>Request to add extra baggage.</li>
            <li>Pay the applicable fee and collect your receipt.</li>
          </ol>
          <p>Airport fees are higher, so call <strong>+1-844-607-4888</strong> for updated rates.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">💰 Step 5: Understand Sky Airline Baggage Fees</h2>
          <ul className="list-disc ml-6">
            <li>Carry-on: Up to 10 kg (55 × 35 × 25 cm)</li>
            <li>Checked baggage: Up to 23 kg per bag (max 158 cm)</li>
            <li>Extra fees: US $30 – $90 depending on route and time of purchase</li>
          </ul>
          <p>Online or phone purchases are cheaper than at the airport.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">⚠️ Step 6: Important Tips Before You Fly</h2>
          <ul className="list-disc ml-6">
            <li>Always weigh your bags before leaving for the airport.</li>
            <li>Print or save your baggage confirmation email.</li>
            <li>Check special item rules (sports, musical instruments).</li>
            <li>Overweight bags incur extra fees.</li>
            <li>Need help? Call <strong>+1-844-607-4888</strong>.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">❓ FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
     </Title>

  );
}
