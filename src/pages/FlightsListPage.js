import React, { useState } from "react";
import FlightCard from "../components/cards/FlightCard";
import FiltersCard from "../components/cards/FiltersCard";

export default function FlightsListPage(props) {
  const [flights, setFlights] = useState([
    {
      departure_city: "Dhaka",
      arrival_city: "Dubai",
      flight_date: "Thu, 19 Aug",
      duration: "5h 20 min",
      departure_code: "DAC",
      arrival_code: "DXB",
      departure_time: "08:45 AM",
      arrival_time: "01:05 PM",
      price: 350,
      id: 1,
    },
    {
      departure_city: "Dhaka",
      arrival_city: "Dubai",
      flight_date: "Thu, 19 Aug",
      duration: "5h 20 min",
      departure_code: "DAC",
      arrival_code: "DXB",
      departure_time: "08:45 AM",
      arrival_time: "01:05 PM",
      price: 250,
      id: 2,
    },
    {
      departure_city: "Dhaka",
      arrival_city: "Dubai",
      flight_date: "Thu, 19 Aug",
      duration: "5h 20 min",
      departure_code: "DAC",
      arrival_code: "DXB",
      departure_time: "08:45 AM",
      arrival_time: "01:05 PM",
      price: 200,
      id: 3,
    },
    {
      departure_city: "Dhaka",
      arrival_city: "Dubai",
      flight_date: "Thu, 19 Aug",
      duration: "5h 20 min",
      departure_code: "DAC",
      arrival_code: "DXB",
      departure_time: "08:45 AM",
      arrival_time: "01:05 PM",
      price: 230,
      id: 4,
    },
    {
      departure_city: "Dhaka",
      arrival_city: "Dubai",
      flight_date: "Thu, 19 Aug",
      duration: "5h 20 min",
      departure_code: "DAC",
      arrival_code: "DXB",
      departure_time: "08:45 AM",
      arrival_time: "01:05 PM",
      price: 150,
      id: 5,
    },
  ]);
  const [price, setPrice] = useState(0);
  const filterPrice = (price) => {
    setPrice(price);
  };
  return (
    <div className="flex bg-gray-100 py-4 px-10 justify-around pb-32">
      <div className="w-1/3 mr-16">
        <FiltersCard filterPrice={filterPrice} />
      </div>
      <div className="w-2/3 ml-16">
        {flights
          .filter((flight) => flight.price >= 0 && flight.price <= price)
          .map((flight, index) => {
            return <FlightCard key={index} flight={flight} />;
          })}
      </div>
    </div>
  );
}
