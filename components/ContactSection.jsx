import { CalendarDaysIcon, ClockIcon, ComputerDesktopIcon, CurrencyDollarIcon, GlobeAltIcon, PhoneIcon, ShoppingBagIcon, TicketIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline'

const ContactSection = ({ name, isSide }) => (
  <div className={`${isSide ? "pb-4 pt-3 p-1 mx-1 bg-gradient-to-bl from-violet-50 to-fuchsia-50   md:max-w-[320px]" : "pb-16 pt-5 p-8 "}`}>
    {!isSide &&
      <div className={`${isSide ? "mb-2 mt-1  text-xl" : "mt-2 mb-8 text-3xl"}  text-center   font-bold text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500`}>Contact Sky Airline Support</div>
    }
    <div className={`${isSide ? "mx-3 md:mx-2 px-3  pb-4 mb-3 mt-1" : "mx-3 md:mx-8 px-6 pt-3 pb-8 my-6  bg-white  rounded shadow"} `}>

      <h1 className={` ${isSide ? "text-lg md:text-xl mt-3 mb-3 font-semibold" : "text-xl md:text-3xl mt-8 mb-4 font-medium"}    text-transparent bg-clip-text bg-gradient-to-bl from-violet-700 to-fuchsia-800 `}>{name || "Sky Airline"} Contact Details</h1>
      <div className={`flex gap-2 mt-2 items-center`}>
        <PhoneIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} />
        <a
          href="tel:+18446074888"
          className={`${isSide?"text-lg md:text-xl":"text-lg md:text-2xl"} font-semibold   text-blue-900 hover:underline`}
        >
          +1 844 607 4888
        </a>
      </div>
      <div className={`${isSide?"text-base ":"text-base"} mt-2  text-slate-700`}>
        Need help with your Sky Airline booking? Call our 24/7 customer care line for assistance with reservations, cancellations, baggage, or flight changes. Our support specialists are always ready to assist you with any Sky Airline service.
      </div>

      <div className={`flex justify-between flex-wrap gap-3 mt-3`}>
        <div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <GlobeAltIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            24/7 Customer Support
          </div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <UserGroupIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Dedicated Airline Agents
          </div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <ClockIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Real-Time Flight Updates
          </div>
        </div>

        <div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <ComputerDesktopIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Online Booking Help
          </div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <CalendarDaysIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Date Change Assistance
          </div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <XCircleIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Ticket Cancellations
          </div>
        </div>

        <div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <CurrencyDollarIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Refund Requests
          </div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <ShoppingBagIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Baggage Information
          </div>
          <div className={`mt-4 text-slate-700 text-[17px] font-medium flex gap-2 items-center`}>
            <TicketIcon className={`w-10 h-10 p-2  bg-gradient-to-bl from-violet-700 to-fuchsia-800 text-white rounded `} /> 
            Name Corrections
          </div>
        </div>
      </div>
    </div>

    <div className={`px-6 py-4 my-4 rounded-2xl bg-gradient-to-l from-pink-800 to-fuchsia-900`}>
      <h2 className={`text-[22px] font-semibold text-gray-50 mb-4`}>Sky Airline Customer Support</h2>
      <p className={`text-gray-100 text-lg mb-3 `}>
        We’re always here to make your travel experience smooth and simple.
      </p>
      <p className={`text-gray-300 text-base`}>
        Whether you need to manage your booking, modify your flight, or request a refund, our Sky Airline support experts are available to guide you every step of the way. 
        <br />
        <span className={`font-medium`}>Count on us for fast, reliable, and friendly assistance whenever you fly with Sky.</span>
      </p>
    </div>

    <div className={`${isSide?"mx-3 md:mx-0":"mx-3 md:mx-8"} relative shadow-lg rounded-lg  p-6  md:pb-26 bg-white  `}>
      <div className={`text-fuchsia-600 text-sm font-bold text-center my-4`}>{"Sky Airline – Trusted by Travelers".toUpperCase()}</div>
      <div className={` flex gap-8 justify-around flex-wrap mt-12`}>
        <div className={`p-5 shadow-lg rounded-lg  z-10 bg-white border border-slate-100 w-[190px] `}>
          <div className={`text-2xl text-center font-semibold text-slate-700`}>3.8<span className={`text-orange-600`}>+</span> million</div>
          <div className={`text-sm text-center mt-1 text-slate-500`}>happy passengers</div>
        </div>
        <div className={`p-5 shadow-lg rounded-lg z-10 bg-white border border-slate-100 w-[190px]`}>
          <div className={`text-2xl text-center font-semibold text-slate-700`}>120<span className={`text-orange-600`}>+</span> destinations</div>
          <div className={`text-sm text-center mt-1 text-slate-500`}>served globally</div>
        </div>
        <div className={`p-5 shadow-lg rounded-lg z-10 bg-white border border-slate-100 w-[190px]`}>
          <div className={`text-2xl text-center font-semibold text-slate-700`}>8<span className={`text-orange-600`}>+</span> years</div>
          <div className={`text-sm text-center mt-1 text-slate-500`}>of trusted service</div>
        </div>
        <div className={`p-5 shadow-lg rounded-lg z-10 bg-white border border-slate-100 w-[190px]`}>
          <div className={`text-2xl text-center font-semibold text-slate-700`}>190,300<span className={`text-orange-600`}>+</span></div>
          <div className={`text-sm text-center mt-1 text-slate-500`}>5-star reviews</div>
        </div>
        <div className={`absolute w-full rounded h-20 bg-gradient-to-bl from-pink-500 to-fuchsia-500 mt-20 hidden md:block `}></div>
      </div>
      <p className={`${isSide?"text-sm mt-8 mx-3":'mt-24 text-sm'}`}>
        Sky Airline is committed to offering exceptional passenger care and responsive customer service. From booking to boarding, we ensure your questions are answered quickly and your concerns resolved efficiently. Travel confidently knowing Sky Airline is always ready to help.
      </p>
    </div>
  </div>
);

export default ContactSection;
