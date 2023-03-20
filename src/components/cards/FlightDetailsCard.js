import React from "react";

export default function FlightDetailsCard(props) {
  return (
    <div className="bg-white p-4 rounded-lg border-gray-200 mb-10">
      <div className="border-b border-gray-200">
        <div className="flex justify-between my-3">
          <div className="flex flex-col">
            <h2 className="text-lg text-gray-800 font-bold">
              {props.flight.departure_city} to {props.flight.arrival_city}
            </h2>
            <p className="text-sm font-semibold text-gray-400">
              Non-stop | {props.flight.duration} | Economy |{" "}
              {props.flight.flight_date}
            </p>
          </div>
          <button className="bg-orange-200 text-orange-500 font-semibold text-md rounded-md p-3">
            Change Flight
          </button>
        </div>
        <div className="grid grid-cols-5 gap-y-6 gap-2 mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Motorcycle_travel_logo.png"
            className="h-12 w-12 mr-2"
          />
          <div className="flex flex-col">
            <h3 className="text-gray-700 font-semibold text-md">IndiGo</h3>
            <p className="text-sm font-semibold text-gray-400">GE-965 320</p>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-gray-600 font-semibold">
              {props.flight.departure_time}
            </span>
            <span className="text-gray-400 text-md font-semibold">
              {props.flight.flight_date}
            </span>
            <span className="text-gray-400 text-sm font-semibold">
              Dhaka zia internationa airport, Bangladesh
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold text-md">
              {props.flight.duration}
            </span>
            <p className="flex">
              .....
              <img
                src="https://www.freeiconspng.com/thumbs/airplane-icon-png/transport-airplane-takeoff-icon--android-iconset--icons8-2.png"
                className="h-4 w-4 mt-auto"
              />
              .....
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-gray-600 font-semibold">
              {props.flight.arrival_time}
            </span>
            <span className="text-gray-400 text-md font-semibold">
              {props.flight.flight_date}
            </span>
            <span className="text-gray-400 text-sm font-semibold">
              Dhaka zia internationa airport, Bangladesh
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray-600 text-sm font-semibold">Baggage:</h4>
            <span className="text-gray-400 text-sm font-semibold">Adult</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-gray-600 text-sm font-semibold">Check-in</h4>
            <span className="text-gray-400 text-sm font-semibold">20 kgs</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-gray-600 text-sm font-semibold">Cabin</h4>
            <span className="text-gray-400 text-sm font-semibold">7 kgs</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-gray-600 text-sm font-semibold">Meals</h4>
            <span className="text-gray-400 text-sm font-semibold">
              Meals not available
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between my-3">
          <div className="flex flex-col">
            <h2 className="text-lg text-gray-800 font-bold">
              {props.flight.departure_city} to {props.flight.arrival_city}
            </h2>
            <p className="text-sm font-semibold text-gray-400">
              Non-stop | {props.flight.duration} | Economy |{" "}
              {props.flight.flight_date}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-y-6 gap-2 mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Motorcycle_travel_logo.png"
            className="h-12 w-12 mr-2"
          />
          <div className="flex flex-col">
            <h3 className="text-gray-700 font-semibold text-md">IndiGo</h3>
            <p className="text-sm font-semibold text-gray-400">GE-965 320</p>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-gray-600 font-semibold">
              {props.flight.departure_time}
            </span>
            <span className="text-gray-400 text-md font-semibold">
              {props.flight.flight_date}
            </span>
            <span className="text-gray-400 text-sm font-semibold">
              Dhaka zia internationa airport, Bangladesh
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold text-md">
              {props.flight.duration}
            </span>
            <p className="flex">
              .....
              <img
                src="https://www.freeiconspng.com/thumbs/airplane-icon-png/transport-airplane-takeoff-icon--android-iconset--icons8-2.png"
                className="h-4 w-4 mt-auto"
              />
              .....
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-gray-600 font-semibold">
              {props.flight.arrival_time}
            </span>
            <span className="text-gray-400 text-md font-semibold">
              {props.flight.flight_date}
            </span>
            <span className="text-gray-400 text-sm font-semibold">
              Dhaka zia internationa airport, Bangladesh
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray-600 text-sm font-semibold">Baggage:</h4>
            <span className="text-gray-400 text-sm font-semibold">Adult</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-gray-600 text-sm font-semibold">Check-in</h4>
            <span className="text-gray-400 text-sm font-semibold">20 kgs</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-gray-600 text-sm font-semibold">Cabin</h4>
            <span className="text-gray-400 text-sm font-semibold">7 kgs</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-gray-600 text-sm font-semibold">Meals</h4>
            <span className="text-gray-400 text-sm font-semibold">
              Meals not available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
