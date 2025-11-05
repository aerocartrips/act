import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import Link from "next/link";

const faqItems =  [
  {
    "@type": "Question",
    "name": "How can I contact Sky customer service?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Connect with Sky Airlines’ customer service team for any inquiries by calling +1 844 607 4888 for immediate assistance."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For support, reservations, or general assistance, reach Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky Airlines phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Speak with a Sky representative regarding your travel needs by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky airline contact number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines directly at +1 844 607 4888 for flight, booking, and customer support inquiries."
    }
  },
  {
    "@type": "Question",
    "name": "Sky contact number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Airlines for reservations, cancellations, or general assistance by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer service number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For professional customer support for Sky Airlines, call +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky reservations phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Make or modify reservations with Sky Airlines by contacting +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I call Sky reservations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Reservations by phone for assistance at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky USA phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For support and information within the U.S., contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky toll free number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call Sky Airlines toll-free at +1 844 607 4888 for bookings and customer service."
    }
  },
  {
    "@type": "Question",
    "name": "Sky support phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For Sky Airlines support, dial +1 844 607 4888 to connect with an agent."
    }
  },
  {
    "@type": "Question",
    "name": "Sky helpline",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Get assistance for Sky Airlines via their helpline at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer care phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky customer care for travel inquiries by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky Airlines customer care number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For customer service for Sky Airlines, call +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How to reach Sky by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Airlines quickly by calling +1 844 607 4888 for reservations or inquiries."
    }
  },
  {
    "@type": "Question",
    "name": "What is Sky's phone number?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky Airlines can be reached at +1 844 607 4888 for all customer support needs."
    }
  },
  {
    "@type": "Question",
    "name": "Phone number for Sky Air Lines",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dial +1 844 607 4888 to speak with Sky Airlines customer service regarding flights and bookings."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone number for bookings",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For booking flights with Sky Airlines, call +1 844 607 4888 for immediate assistance."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone number for cancellations",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To cancel a Sky flight, contact customer service at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer service phone for refunds",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request refunds or credits for Sky Airlines by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky baggage phone number (lost luggage)",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Report lost or delayed baggage with Sky Airlines by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Call Sky Airlines customer service",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Connect with Sky customer service directly at +1 844 607 4888 for assistance."
    }
  },
  {
    "@type": "Question",
    "name": "How do I call Sky customer care?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky customer care by phone at +1 844 607 4888 for professional support."
    }
  },
  {
    "@type": "Question",
    "name": "Sky hotline number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky Airlines’ hotline for reservations and support is +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone +1 888 245 5086",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call Sky Airlines directly at +1 844 607 4888 for travel assistance."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone +18882455086",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Use Sky Airlines’ real person contact number +1 844 607 4888 for customer service."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone 1-888-245-5086",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To reach Sky Airlines for bookings, call +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer service +1 (888) 245-5086",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For all customer support needs, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone number US",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky customer service in the US is available at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call Sky Airlines at +1 844 607 4888 for assistance with flights and services."
    }
  },
  {
    "@type": "Question",
    "name": "Sky airlines contact number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Airlines for travel support by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky airllines phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Speak with a Sky Airlines agent by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky air lines phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky Airlines customer support can be reached at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky reservations phone number for international flights",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For international flight bookings with Sky, call +1 844 607 4888 for support."
    }
  },
  {
    "@type": "Question",
    "name": "Sky corporate phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Corporate inquiries to Sky Airlines can be handled by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky SkyMiles phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For Sky SkyMiles account assistance, contact +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Phone number for Sky group travel",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Plan group travel with Sky Airlines by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky accessibility phone number (assistance for disabilities)",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For accessibility and disability assistance, contact Sky at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How to contact Sky baggage claim by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Resolve any baggage issues by calling Sky Airlines at +1 844 607 4888 for dedicated support."
    }
  },
  {
    "@type": "Question",
    "name": "Who do I call for Sky Airlines help?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For all Sky travel assistance, contact their support team at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Need to speak with Sky by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Speak directly with Sky Airlines representatives by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Where can I find Sky's phone number?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky Airlines’ official contact number is +1 844 607 4888 for all inquiries."
    }
  },
  {
    "@type": "Question",
    "name": "Call Sky Airlines number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Connect with Sky Airlines for assistance by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Speak to Sky agent phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To speak with a live Sky agent, dial +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Talk to Sky agent",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request assistance for a Sky agent by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Hey Google what's Sky Airlines phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ask Google or directly call Sky Airlines at +1 844 607 4888 for support."
    }
  },
  {
    "@type": "Question",
    "name": "Siri call Sky Airlines number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Activate Siri or dial +1 844 607 4888 to reach Sky Airlines customer service."
    }
  },
  {
    "@type": "Question",
    "name": "Sky number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For Sky assistance, call the official number +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Airlines customer service via +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky contact",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines directly at +1 844 607 4888 for any travel-related support."
    }
  },
  {
    "@type": "Question",
    "name": "Sky change flight phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To modify or reschedule a Sky flight, call +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky same day flight change phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For same-day flight changes, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone number near me",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Access Sky Airlines customer service from anywhere by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I contact Sky?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call +1 844 607 4888 to reach Sky Airlines for assistance with flights and services."
    }
  },
  {
    "@type": "Question",
    "name": "What number do I call for Sky reservations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For reservations support, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky complaints phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Register complaints or feedback with Sky Airlines by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky refunds phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request refunds or account credits for Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer service WhatsApp number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky Airlines phone support, including guidance for reservations, is available at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer service text number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines by phone at +1 844 607 4888 for personalized assistance."
    }
  },
  {
    "@type": "Question",
    "name": "Sky airlines customer service phone number reservations baggage refund",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For reservations, baggage claims, refunds, and customer service, dial +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How can I reach Sky Air Lines by telephone for reservations and customer service?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines by calling +1 844 607 4888 for reservations and expert support."
    }
  },
  {
    "@type": "Question",
    "name": "What is the phone number to call Sky for lost baggage?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Report lost or delayed baggage to Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Is there a phone number for Sky Airlines corporate office?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For corporate inquiries, contact Sky Airlines customer service at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky help phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Get travel help for Sky Airlines by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky technical support phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For technical or account support, reach Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I get Sky on the phone?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dial +1 844 607 4888 to connect directly with Sky Airlines for assistance."
    }
  },
  {
    "@type": "Question",
    "name": "Who to call for Sky flight support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines for flight support and travel guidance at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky phone number booking customer care 1 888 245 5086",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Airlines booking and customer care by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky 888 245 5086",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For all Sky Airlines inquiries, call +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Number to call Sky for wheelchair assistance",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request wheelchair or mobility assistance for Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Phone to call for Sky group bookings",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Coordinate group travel by contacting Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "All ways to contact Sky by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For reservations, customer service, baggage, refunds, and more, call Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Call Sky",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Airlines support anytime by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I call Sky?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines directly at +1 844 607 4888 for travel assistance."
    }
  },
  {
    "@type": "Question",
    "name": "Can I book a flight by phone with Sky?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, call Sky Airlines at +1 844 607 4888 to book or manage flights."
    }
  },
  {
    "@type": "Question",
    "name": "Sky bookings phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For flight bookings with Sky Airlines, contact +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky change flight date phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Modify your Sky flight date by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I change my Sky flight date?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To reschedule your flight, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Reschedule Sky flight by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky Airlines rescheduling support is available at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How to rebook Sky flight over the phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call +1 844 607 4888 to rebook or modify your Sky flight reservations."
    }
  },
  {
    "@type": "Question",
    "name": "Sky change class phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Upgrade or change your travel class with Sky by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I upgrade my Sky seat by phone?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request a seat upgrade with Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky upgrade to business class phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For business class upgrades, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky cancellation phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Cancel a Sky flight by calling +1 844 607 4888 for assistance."
    }
  },
  {
    "@type": "Question",
    "name": "How to cancel Sky flight by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To cancel your booking, call Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I get a refund for Sky?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request flight refunds or credits by contacting Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky voucher or travel credit phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Check travel credits or vouchers with Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky baggage phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For baggage inquiries or claims, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Lost luggage Sky phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Report lost or delayed luggage by calling Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How to contact Sky about my baggage",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sky Airlines baggage assistance is available at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How do I talk to a real person at Sky?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Speak with a live Sky representative by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Speak to a human Sky phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request a human agent at Sky Airlines by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Get me a human Sky support number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For personal assistance, call Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Talk to Sky agent phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Connect to a Sky agent by dialing +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Operator Sky phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request an operator at Sky Airlines by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky wheelchair assistance phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call Sky Airlines at +1 844 607 4888 for wheelchair or special assistance."
    }
  },
  {
    "@type": "Question",
    "name": "How to request special assistance Sky by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For special travel assistance, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky frequent flyer number phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SkyMiles or loyalty account help is available at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky group bookings phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Coordinate group bookings with Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer service number US",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For US-based support, call Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Alexa what is Sky phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ask Alexa or dial +1 844 607 4888 to reach Sky Airlines."
    }
  },
  {
    "@type": "Question",
    "name": "Emergency Sky contact number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For emergency travel assistance, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky flight disruption phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Report flight disruptions to Sky Airlines at +1 844 607 4888 for guidance."
    }
  },
  {
    "@type": "Question",
    "name": "Sky flight change fee waiver phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Inquire about flight change fee waivers by calling Sky at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Check refund status Sky phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Verify the status of refunds or credits with Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How to redeem a Sky voucher by phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Redeem your Sky vouchers or credits by calling +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky change seat phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Change your Sky flight seat by contacting +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Get a new boarding pass Sky phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Request a new boarding pass or reissue by calling Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky ticketing phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For ticketing support, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky travel insurance claims phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Assistance with travel insurance claims is available at Sky Airlines via +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How can I contact Sky Air Lines by telephone for cancellations, date changes, refunds or baggage issues?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For cancellations, changes, refunds, or baggage support, call Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "What is the phone number to call Sky for lost baggage, refunds, or to speak with an agent?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach Sky Airlines for lost baggage, refunds, or live support at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Call Sky Airlines customer service number now",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dial +1 844 607 4888 to connect with Sky Airlines customer service immediately."
    }
  },
  {
    "@type": "Question",
    "name": "How to reach a Sky agent by phone to change my flight",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines at +1 844 607 4888 to speak with an agent regarding flight changes."
    }
  },
  {
    "@type": "Question",
    "name": "Sky help number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For all assistance, call Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky cancellation and baggage phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For cancellations or baggage help, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky change date and class phone number",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Modify travel dates or class by calling Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "Sky customer service phone vs airport desk contact",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call +1 844 607 4888 for phone support, or visit a Sky airport desk for in-person assistance."
    }
  },
  {
    "@type": "Question",
    "name": "Who do I call for Sky flight support and refunds?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For flight support and refund inquiries, contact Sky Airlines at +1 844 607 4888."
    }
  },
  {
    "@type": "Question",
    "name": "How to reach Sky for a refund and speak to a supervisor",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call +1 844 607 4888 to request a refund and escalate to a supervisor if needed."
    }
  },
  {
    "@type": "Question",
    "name": "How to get a Sky representative on the phone",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach a Sky representative by dialing +1 844 607 4888 and follow the prompts to connect with a live agent."
    }
  },
  {
    "@type": "Question",
    "name": "How to get Sky live agent",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contact Sky Airlines at +1 844 607 4888 and request to speak with a live agent for personalized support."
    }
  },
  {
    "@type": "Question",
    "name": "All ways to contact Sky by phone for reservations, cancellations, baggage, and speaking to a human",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Primary phone contact for Sky: +1 844 607 4888. Use this number for reservations, cancellations, date or class changes, baggage claims, refunds, SkyMiles, special assistance, and to speak with a live agent."
    }
  },
  {
    "@type": "Question",
    "name": "How do I talk to Sky reservations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Call Sky Airline Reservations directly or use their website to manage your booking."
    }
  }
]
export default function Page() {
  return (
    <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[1000px] bg-[#ffffff50]">
        <div className="flex justify-between gap-6 items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
          Frequently Asked Questions - FAQ for services
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
          <div className="divide-y">
            {faqItems.map((item, i) => (
              <div key={i} className="px-4 py-4 sm:px-6 sm:py-5">
                <button
                  className="w-full text-left flex items-start justify-between focus:outline-none"
               
                >
                  <span>
                    <h3 className="text-base sm:text-lg font-medium">
                      {item.name}
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
                    {item.acceptedAnswer.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        <div className="flex justify-between gap-2 flex-wrap">
          <div className="">
            Pre -{" "}
            <Link
              href="/sky-airlines"
              className={`hover:text-blue-800 text-blue-700 underline`}
            >
              Sky Airlines
            </Link>
          </div>
          <div className="">
            Next -{" "}
            <Link
              href="/"
              className={`hover:text-blue-800 text-blue-700 underline`}
            >
              Home
            </Link>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
}
