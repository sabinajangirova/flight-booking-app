import React from "react";
import FlightDetailsCard from "../components/cards/FlightDetailsCard";
import PassengerDetailsCard from "../components/cards/PassengerDetailsCard";
import ContactDetailsCard from "../components/cards/ContactDetailsCard";
import { useNavigate } from "react-router-dom";

export default function FlightPage() {
  const flight = {
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
  };

  const navigate = useNavigate();
  return (
    <div className="flex bg-gray-100">
      <div className="w-2/3 flex flex-col m-4">
        <FlightDetailsCard flight={flight} />
        <PassengerDetailsCard />
        <PassengerDetailsCard adult={true} />
        <ContactDetailsCard />
        <button
          className="bg-blue-500 text-white font-semibold text-md rounded-xl w-fit py-2 px-4"
          onClick={() => navigate("confirm")}
        >
          Continue
        </button>
      </div>
      <div className="w-1/4 m-4"></div>
    </div>
  );
}
