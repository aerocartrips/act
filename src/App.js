import Checkout from "./Checkout";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from "./Component/Layout";
import FlightSearch from "./Component/FlightSearch";

function App() {
  return (
    <div className="h-screen object-cover"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-vector/travel-tourism-background-buying-booking-online-tickets-travel-business-flights-worldwide-air-travel-world-globe-airline-tickets-flat-vector-illustration_589019-2695.jpg')", // replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<FlightSearch/>}/>
        <Route path="/payment" element= {<Checkout/>}/>
      </Route>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
