// app/page.jsx
"use client"
import Title from "@/components/Title";
import React, { useState } from "react";

export default function Page() {
  const faqItems = [
    {
      q: "FAQ 1 — What is the fastest way to contact SKY Airline?",
      a:
        "If your travel is today or tomorrow, call or go to the airport.\nFor refunds → use the online form. Contact +1-844-607-4888",
    },
    {
      q: "FAQ 2 — Can I speak to an English agent?",
      a:
        'Yes, but availability is limited. Say:\n“English agent, please.”',
    },
    {
      q: "FAQ 3 — How do I get a refund?",
      a:
        "Step-by-step:\n\nGo to Help Center\n\nSubmit refund form\n\nUpload payment proof\n\nReceive case number\n\nWait for processing\n\nRefunds are not processed on calls.",
    },
    {
      q: "FAQ 4 — What if SKY doesn’t answer my call?",
      a:
        "Try:\n\nEarly morning (best time)\n\nSocial media DM\n\nOnline claims form",
    },
    {
      q: "FAQ 5 — How do I file a baggage claim?",
      a:
        "At the airport:\n\nVisit baggage counter\n\nFill PIR report\n\nKeep receipts\n\nFile online claim",
    },
    {
      q: "FAQ 6 — My payment failed but money was deducted. What do I do?",
      a:
        "Call SKY + upload screenshot to claims form.\nPayment team will verify with the bank.",
    },
    {
      q: "FAQ 7 — Can SKY change my flight instantly?",
      a:
        "Yes, if:\n\nFare allows\n\nSeats available\n\nDifference in fare is paid\n\nUrgent cases get priority.",
    },
    {
      q: "FAQ 8 — Can I request name correction?",
      a:
        "Yes, but:\n\nMinor typos allowed\n\nMajor name change requires documentation",
    },
    {
      q: "FAQ 9 — I booked through an agency. Who handles my issue?",
      a:
        "The agency manages:\n\nChanges\n\nRefunds\n\nBilling\n\nSKY cannot modify agency-controlled tickets.",
    },
    {
      q: "FAQ 10 — What if my flight is cancelled?",
      a:
        "You are eligible for:\n\nFree rebooking\n\nRefund\n\nCompensation (in some cases)",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Title title={'Sky Airline Contact'}>

      <main  >
   
      <h2 className="text-2xl font-semibold mb-3">
        1. Know SKY Airline Customer Support +1-844-607-4888
      </h2>

      <p className="mb-4">
        SKY Airline is a major low-cost airline based in Chile and Peru, offering domestic and international routes across South America and North America. Due to its large customer base and operational model, contacting SKY the right way can make a massive difference in:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>How fast you get help</li>
        <li>Whether you receive compensation or refund</li>
        <li>How your issue is prioritized</li>
        <li>Whether your flight changes are processed correctly</li>
      </ul>

      <p className="mb-4">
        This expanded guide explains every channel, every contact situation, what customers must prepare, how SKY handles communication internally, and best practices in both English and Spanish.
      </p>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-semibold mb-3">
        2. Why Contacting SKY Airline Correctly Is So Important
      </h2>

      <h3 className="text-xl font-semibold mb-2">2.1 SKY Operates a Lean, Low-Cost Model</h3>

      <p className="mb-4">This means:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Fewer call center agents</li>
        <li>High passenger volume</li>
        <li>Most processes automated</li>
        <li>Priority is given to urgent travel issues</li>
      </ul>

      <p className="mb-4">
        So using the wrong channel (example: calling for a refund instead of using the online form) will often delay the solution.
      </p>

      <h3 className="text-xl font-semibold mb-2">2.2 Different Issues = Different Channels</h3>

      <p className="mb-2">Examples:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Flight change today? → Call or airport desk</li>
        <li>Refund? → Online form only</li>
        <li>Lost baggage? → Airport desk + claim form</li>
        <li>Payment verification? → Phone + proof</li>
        <li>Minor doubts? → Help Center or chat</li>
      </ul>

      <p className="mb-4">Using the correct path ensures your request goes to the right department.</p>

      <h3 className="text-xl font-semibold mb-2">2.3 Language Availability Matters</h3>

      <p className="mb-4">
        SKY operates mainly in Spanish-speaking countries. This affects:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Speed of response</li>
        <li>Quality of guidance</li>
        <li>Agent availability</li>
      </ul>

      <p className="mb-4">
        English support exists, but mostly for:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>International passengers</li>
        <li>USA-based callers</li>
        <li>Website & app FAQs</li>
      </ul>

      {/* SECTION 3 */}
      <h2 className="text-2xl font-semibold mb-4">
        3. Complete List of SKY Airline Contact Methods
      </h2>

      {/* 3.1 */}
      <h3 className="text-xl font-semibold mb-3">
        🟦 3.1 SKY Airline Help Center (Primary Support Hub)
      </h3>

      <p className="mb-4">The official Help Center includes:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Baggage policies</li>
        <li>Refund instructions</li>
        <li>Compensation rules</li>
        <li>Ticket change rules</li>
        <li>Travel requirements</li>
        <li>Online claim submission</li>
        <li>Self-service check-in</li>
        <li>Travel alerts</li>
      </ul>

      <p className="mb-4">Why it's important:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Available 24/7</li>
        <li>Multilingual (English + Spanish)</li>
        <li>Official processes are explained in detail</li>
        <li>Required for formal cases</li>
      </ul>

      <p className="mb-4">What customers can solve through the Help Center:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Request refund</li>
        <li>View travel policies</li>
        <li>File a claim (PQR: Petición, Queja o Reclamo)</li>
        <li>Get step-by-step solutions</li>
        <li>Manage travel options</li>
      </ul>

      {/* 3.2 */}
      <h3 className="text-xl font-semibold mb-3">
        🟦 3.2 SKY Airline Phone Support (Country-Based Contact Centers)
      </h3>

      <p className="mb-4">Phone support is ideal for:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Urgent issues</li>
        <li>Same-day travel</li>
        <li>Payment problems</li>
        <li>Flight disruptions</li>
        <li>Adding services (seats, baggage)</li>
        <li>Checking booking status</li>
      </ul>

      <p className="mb-4">Languages on phone:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Spanish: Primary language</li>
        <li>English: Limited availability; request “English Agent Please”</li>
      </ul>

      <p className="mb-4">Types of phone support:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Reservations Team</li>
        <li>Flight Change Desk</li>
        <li>Payment Verification & Billing</li>
        <li>Travel Requirements Team</li>
        <li>Special Assistance Department</li>
      </ul>

      {/* 3.3 */}
      <h3 className="text-xl font-semibold mb-3">
        🟦 3.3 Airport Customer Service Desks
      </h3>

      <p className="mb-4">Airport desks can help with:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Check-in issues</li>
        <li>Boarding problems</li>
        <li>Document problems</li>
        <li>Missed flight assistance</li>
        <li>Emergency rebooking</li>
        <li>Lost/delayed baggage reports</li>
        <li>Printing boarding passes</li>
      </ul>

      <p className="mb-4">Why they are crucial:</p>

      <p className="mb-4">
        Airports receive priority authority to rebook you if:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Flight is delayed</li>
        <li>You miss a connection</li>
        <li>You face documentation issues</li>
      </ul>

      <p className="mb-6">
        Call centers cannot always handle last-minute changes — airport staff can.
      </p>

      {/* 3.4 */}
      <h3 className="text-xl font-semibold mb-3">
        🟦 3.4 SKY Airline Mobile App Contact Options
      </h3>

      <p className="mb-4">Through the app, customers can:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Change flights</li>
        <li>Add baggage</li>
        <li>Modify name (if fare allows)</li>
        <li>Buy seats</li>
        <li>Download boarding passes</li>
        <li>Access real-time flight updates</li>
        <li>Use chat support (regional feature)</li>
      </ul>

      {/* 3.5 */}
      <h3 className="text-xl font-semibold mb-3">
        🟦 3.5 SKY Airline Social Media Support
      </h3>

      <p className="mb-4">Support is available on:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Facebook Messenger</li>
        <li>Instagram DM</li>
        <li>Twitter/X DM</li>
      </ul>

      <p className="mb-4">Useful for:</p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Delayed replies via email</li>
        <li>Clarifying policy questions</li>
        <li>Getting immediate basic guidance</li>
      </ul>

      <p className="mb-4">Not useful for:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Refunds</li>
        <li>Formal complaints</li>
        <li>Legal claims</li>
      </ul>

      {/* 3.6 */}
      <h3 className="text-xl font-semibold mb-3">
        🟦 3.6 Travel Agency & OTA Support
      </h3>

      <p className="mb-4">
        If you booked:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Despegar</li>
        <li>Expedia</li>
        <li>eDreams</li>
        <li>Kiwi</li>
        <li>Local agency</li>
      </ul>

      <p className="mb-6">
        Then SKY agents cannot modify your ticket — you must contact the agency, because they control your booking.
      </p>

      {/* SECTION 4 */}
      <h2 className="text-2xl font-semibold mb-4">
        4. What Customers Should Do Before Contacting SKY Airline (Full Checklist)
      </h2>

      <h3 className="text-xl font-semibold mb-3">
        4.1 Collect All Evidence/Documents
      </h3>

      <p className="mb-4">Prepare:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>✔ Booking reference (PNR)</li>
        <li>✔ Passenger names</li>
        <li>✔ Flight number + dates</li>
        <li>✔ Payment information</li>
        <li>✔ Screenshots of errors</li>
        <li>✔ Baggage proof</li>
      </ul>

      {/* SECTION 5 */}
      <h2 className="text-2xl font-semibold mb-4">
        5. How SKY Airline Handles Customer Contact Internally (Deep Explanation)
      </h2>

      <h3 className="text-xl font-semibold mb-3">
        🟩 5.1 Stage 1 — Automated Sorting
      </h3>

      <p className="mb-4">
        When you contact SKY:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Phone → IVR categorizes reason</li>
        <li>Form → system tags case type</li>
        <li>Social media → bot identifies keywords</li>
      </ul>

      <p className="mb-4">
        Tags include:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>“Refund”</li>
        <li>“Baggage delay”</li>
        <li>“Payment dispute”</li>
        <li>“Check-in error”</li>
        <li>“Name correction request”</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">
        🟩 5.2 Stage 2 — Human Triage Team
      </h3>

      <p className="mb-6">
        A human agent determines urgency, eligibility, required documents, and escalation needs.
      </p>

      <h3 className="text-xl font-semibold mb-3">
        🟩 5.3 Stage 3 — Assignment to Specialized Departments
      </h3>

      <p className="mb-4">Departments include:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Refund & Compensation Unit</li>
        <li>Baggage Services Center</li>
        <li>Payment Verification Team</li>
        <li>International Travel Team</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">
        🟩 5.4 Stage 4 — Resolution & Notification
      </h3>

      <p className="mb-6">
        You receive email updates, case numbers, summaries, and sometimes voucher or refund timelines.
      </p>

      {/* SECTION 6 */}
      <h2 className="text-2xl font-semibold mb-4">
        6. Language Support — English & Spanish in Detail
      </h2>

      <h3 className="text-xl font-semibold mb-3">
        6.1 Spanish (Español)
      </h3>

      <p className="mb-4">
        Available on phone, email, airport desks, website, and social media.
      </p>

      <h3 className="text-xl font-semibold mb-3">
        6.2 English
      </h3>

      <p className="mb-6">
        Available on website, some phone agents, and social media (on request). Availability varies.
      </p>

      {/* SECTION 7 */}
      <h2 className="text-2xl font-semibold mb-4">
        7. SKY Airline Contact Centers — Extended Breakdown
      </h2>

      <h3 className="text-xl font-semibold mb-3">🛫 Headquarters</h3>

      <p className="mb-4">
        Santiago, Chile (SCL) — main control center and leadership.
      </p>

      <h3 className="text-xl font-semibold mb-3">🛫 Peru Contact Operations</h3>

      <p className="mb-4">
        Lima, Peru (LIM) — handles claims, flight issues, and payment verification.
      </p>

      <h3 className="text-xl font-semibold mb-3">🛫 24/7 Digital Support Center</h3>

      <p className="mb-4">
        Handles online forms, case tracking, and email complaints.
      </p>

      <h3 className="text-xl font-semibold mb-3">🛫 Airport Service Units</h3>

      <p className="mb-6">
        Located at SCL, LIM, AQP, MVD, BOG, EZE, and other secondary airports.
      </p>

      <section  className="mt-10">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>

          <div className="grid gap-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-5 py-4 flex items-start justify-between"
                >
                  <div>
                    <div className="text-sm font-medium">{item.q}</div>
                    <div className="text-xs text-slate-500 mt-1">Tap to {true ? "collapse" : "expand"}</div>
                  </div>
                  <div className="ml-4 text-slate-400">{true ? "−" : "+"}</div>
                </button>

                <div
                  className={`px-5 pb-4 transition-all duration-200 ${true ? "max-h-96" : "max-h-0 overflow-hidden"}`}
                >
                  <div style={{ whiteSpace: "pre-line" }} className="text-sm text-slate-700">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

    </Title>
  );
}
