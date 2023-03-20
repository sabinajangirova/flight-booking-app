import React from "react";
import { useNavigate } from "react-router-dom";

export default function FlightCard(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 mb-4">
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-md text-gray-600 font-semibold">
          {props.flight.departure_city} {"->"} {props.flight.arrival_city}{" "}
          {props.flight.flight_date}
        </h2>
        <div className="flex justify-evenly">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Motorcycle_travel_logo.png"
            className="h-12 w-12 mr-4"
          />
          <div className="flex flex-col mr-4">
            <span className="text-lg text-gray-800 font-bold">
              {props.flight.departure_code}
            </span>
            <span className="text-md text-gray-600 font-semibold">
              {props.flight.departure_time}
            </span>
          </div>
          <div className="rounded-t-full border-t border-orange-400 mr-4">
            <span className="my-auto">{props.flight.duration}</span>
          </div>
          <div className="flex flex-col mr-4">
            <span className="text-lg text-gray-800 font-bold">
              {props.flight.arrival_code}
            </span>
            <span className="text-md text-gray-600 font-semibold">
              {props.flight.arrival_time}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-md">
              ${props.flight.price}
            </span>
            <button
              onClick={() => navigate(`${props.flight.id}`)}
              className="bg-blue-600 text-white rounded-xl p-3 text-sm font-bold active:bg-blue-800"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-md text-gray-600 font-semibold">
          {props.flight.departure_city} {"->"} {props.flight.arrival_city}{" "}
          {props.flight.flight_date}
        </h2>
        <div className="flex justify-evenly">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Motorcycle_travel_logo.png"
            className="h-12 w-12 mr-4"
          />
          <div className="flex flex-col mr-4">
            <span className="text-lg text-gray-800 font-bold">
              {props.flight.departure_code}
            </span>
            <span className="text-md text-gray-600 font-semibold">
              {props.flight.departure_time}
            </span>
          </div>
          <div className="rounded-t-full border-t border-orange-400 mr-4">
            <span className="my-auto">{props.flight.duration}</span>
          </div>
          <div className="flex flex-col mr-4">
            <span className="text-lg text-gray-800 font-bold">
              {props.flight.arrival_code}
            </span>
            <span className="text-md text-gray-600 font-semibold">
              {props.flight.arrival_time}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-md">
              ${props.flight.price}
            </span>
            <button
              onClick={() => navigate(`${props.flight.id}`)}
              className="bg-blue-600 text-white rounded-xl p-3 text-sm font-bold active:bg-blue-800"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
