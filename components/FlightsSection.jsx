const FlightCard = ({ title, imageUrl, description, subDescription, padding }) => (
  <div className=" shadow-lg rounded-lg overflow-hidden w-[300px]">
    <img src={imageUrl} alt={title} className={`${padding} h-46 object-contain bg-white w-[300px]`} />
    <div className="p-4 bg-gradient-to-bl from-violet-800 to-fuchsia-900">
      <div className="text-start h-[255px]">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-slate-100 w-full font-semibold">{description}</p>
        <p className="mt-1 text-sm text-slate-200">{subDescription}</p>
      </div>
      <a href="/" className="inline-block mt-4 bg-gradient-to-tl from-violet-500 to-fuchsia-700 shadow w-full text-white py-2 px-4 rounded-full font-bold">View</a>
    </div>
  </div>
);

const FlightsSection = () => (
  <section id="flights" className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-12">Flights</h2>
      <div className="flex justify-center flex-wrap gap-5">
        <FlightCard title="Delta Airlines Customer Service – Connect with Ease" description='Find verified Delta Airlines contact numbers for quick assistance on bookings, cancellations, or flight changes.' subDescription='We help you reach Delta’s official support team directly — making your travel queries simpler and faster to resolve.' imageUrl="/assets/home/delta.png" />
        <FlightCard title="JetBlue Airlines Support – We Help You Connect" description='Access JetBlue’s verified customer service numbers for instant help with reservations, refunds, or flight information.' subDescription='Our platform ensures you connect with JetBlue’s official representatives quickly, without any hassle or confusion.' imageUrl="/assets/home/jetblue.png" padding={'p-17'} />
        <FlightCard title="Spirit Airlines Helpline – Get Support Instantly" description='Locate Spirit Airlines’ customer care numbers easily for inquiries, booking issues, or travel updates.' subDescription='We make it simple for you to reach Spirit’s official support team — saving your time with verified contact details.' imageUrl="/assets/home/spirit.png" padding={'p-17'} />
        <FlightCard title="United Airlines Contact – Reliable Support Anytime" description='Find United Airlines’ authentic helpline numbers to get assistance with flights, baggage, or booking modifications.' subDescription='Our goal is to help you connect with United’s customer service effortlessly, ensuring a smooth travel experience.' imageUrl="/assets/home/unite.png" />
      </div>
    </div>
  </section>
);

export default FlightsSection;
