import FlightSearch from '@/Component/FlightSearch'
import React from 'react'


const page = () => {
  return (
    <div className="h-screen object-cover"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-vector/travel-tourism-background-buying-booking-online-tickets-travel-business-flights-worldwide-air-travel-world-globe-airline-tickets-flat-vector-illustration_589019-2695.jpg')", // replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
    <FlightSearch/>
    </div>
  )
}

export default page
