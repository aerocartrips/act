import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Modal from "./Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import airportsData from "@nitro-land/airport-codes/airports.json";

// Normalize airport entries
const normalizeEntry = (entry) => {
  const iata = entry.iata || "";
  const icao = entry.icao || "";
  const name = entry.name || entry.airport || "";
  const city = entry.city || "";
  const country = entry.country || "";
  const label = [name, city, country, iata].filter(Boolean).join(" • ");
  return { label, name, city, country, iata, icao };
};

const ALL_AIRPORTS = airportsData.map(normalizeEntry);

export default function FlightSearch() {
  const [tripClass, setTripClass] = useState("domestic");
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mobile, setMobile] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const debouncedFrom = useDebounce(from, 300);
  const debouncedTo = useDebounce(to, 300);

  // Search airports with IATA priority
  const searchAirports = (query) => {
    if (!query) return [];
    const q = query.trim().toLowerCase();

    // Priority 1: IATA matches
    const iataMatches = ALL_AIRPORTS.filter(
      (a) => a.iata.toLowerCase().includes(q)
    );

    // Priority 2: Other fields matches (exclude duplicates)
    const otherMatches = ALL_AIRPORTS.filter(
      (a) =>
        !iataMatches.includes(a) &&
        (a.name.toLowerCase().includes(q) ||
         a.city.toLowerCase().includes(q) ||
         a.country.toLowerCase().includes(q))
    );

    return [...iataMatches, ...otherMatches].slice(0, 8);
  };

  useEffect(() => setFromSuggestions(searchAirports(debouncedFrom)), [debouncedFrom]);
  useEffect(() => setToSuggestions(searchAirports(debouncedTo)), [debouncedTo]);

  const handleSelectSuggestion = (setter, item) => setter(item.label);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !departureDate || !mobile) {
      alert("Please fill From, To, Departure date and Mobile number.");
      return;
    }
    if (tripType === "round" && !returnDate) {
      alert("Please select return date for round-trip.");
      return;
    }
    setOpenModal(true);
  };

  return (
    <div className="mx-auto w-full max-w-3xl p-4 mt-[10%]"
>
      <form className="rounded-2xl bg-white/95 p-6 shadow-lg" onSubmit={handleSearch}>
        {/* Trip class/type */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTripClass("domestic")}
              className={`rounded-full px-3 py-1 text-sm ${tripClass === "domestic" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              Domestic
            </button>
            <button
              type="button"
              onClick={() => setTripClass("international")}
              className={`rounded-full px-3 py-1 text-sm ${tripClass === "international" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              International
            </button>
          </div>
          <div className="flex gap-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="tripType" value="oneway" checked={tripType === "oneway"} onChange={() => setTripType("oneway")} /> One-way
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="tripType" value="round" checked={tripType === "round"} onChange={() => setTripType("round")} /> Round-trip
            </label>
          </div>
        </div>

        {/* From / To */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* From */}
          <div className="relative">
            <label className="mb-1 block text-sm font-medium">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Airport, city or IATA (e.g. DEL)"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
            />
            {fromSuggestions.length > 0 && (
              <ul className="absolute z-50 max-h-56 w-full overflow-auto rounded-md bg-white shadow-lg">
                {fromSuggestions.map((s, i) => (
                  <li
                    key={i}
                    onMouseDown={() => handleSelectSuggestion(setFrom, s)}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                  >
                    <div className="text-sm">{s.label}</div>
                    <div className="text-xs text-gray-500">{s.iata || s.icao}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* To */}
          <div className="relative">
            <label className="mb-1 block text-sm font-medium">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Airport, city or IATA (e.g. BOM)"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
            />
            {toSuggestions.length > 0 && (
              <ul className="absolute z-50 max-h-56 w-full overflow-auto rounded-md bg-white shadow-lg">
                {toSuggestions.map((s, i) => (
                  <li
                    key={i}
                    onMouseDown={() => handleSelectSuggestion(setTo, s)}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                  >
                    <div className="text-sm">{s.label}</div>
                    <div className="text-xs text-gray-500">{s.iata || s.icao}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Dates + Mobile */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium">Departure</label>
            <DatePicker
              selected={departureDate}
              onChange={setDepartureDate}
              placeholderText="Select departure"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Return</label>
            <DatePicker
              selected={returnDate}
              onChange={setReturnDate}
              placeholderText={tripType === "round" ? "Select return" : "Disabled for one-way"}
              className={`w-full rounded-lg border px-3 py-2 text-sm outline-none ${tripType === "oneway" ? "bg-gray-50" : ""}`}
              disabled={tripType === "oneway"}
              minDate={departureDate || new Date()}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Mobile number</label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
              inputMode="tel"
              pattern="[0-9+ ]{7,20}"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-600">Showing results for {tripClass === "domestic" ? "Domestic" : "International"} flights</div>
          <div className="flex gap-3">
            <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Search flights</button>
            <button type="button" onClick={() => { setFrom(""); setTo(""); setDepartureDate(null); setReturnDate(null); setMobile(""); }} className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">Reset</button>
          </div>
        </div>
      </form>

      {/* Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600">Agency phone (for now):</p>
            <p className="mt-1 text-lg font-semibold">+91 98765 43210</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Summary</p>
            <div className="mt-2 text-sm">
              <div><strong>From:</strong> {from}</div>
              <div><strong>To:</strong> {to}</div>
              <div><strong>Departure:</strong> {departureDate ? departureDate.toLocaleDateString() : "-"}</div>
              {tripType === "round" && <div><strong>Return:</strong> {returnDate ? returnDate.toLocaleDateString() : "-"}</div>}
              <div><strong>Phone:</strong> {mobile}</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
