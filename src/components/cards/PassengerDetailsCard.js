import React from "react";
export default function PassengerDetailsCard(props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-10 p-4 flex flex-col">
      <h1 className="text-xl text-gray-700 font-bold mb-4">
        Passenger Details {props.adult ? "(adult)" : ""}
      </h1>
      <div className="flex mb-2">
        <div className="flex flex-col w-2/5 mr-4">
          <label className="text-gray-500 font-semibold text-md mb-2">
            First name
          </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
        <div className="flex flex-col w-2/5">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Last name
          </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/3 mr-4">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Gender
          </label>
          <select className="border border-gray-200 rounded-md p-3 text-gray-600 font-semibold w-full">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        {!props.adult && (
          <div className="flex flex-col w-1/3 mr-4">
            <label className="text-gray-500 font-semibold text-md mb-2">
              Birthday
            </label>
            <div className="flex">
              <select className="border border-gray-200 p-3 text-gray-600 font-semibold w-full rounded-l-md rounded-r-none">
                <option selected disabled>
                  Date
                </option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
              </select>
              <select className="border border-gray-200 p-3 text-gray-600 font-semibold w-full rounded-none">
                <option selected disabled>
                  Month
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>Septemder</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select className="border border-gray-200 rounded-r-md p-3 text-gray-600 font-semibold w-full">
                <option selected disabled>
                  Year
                </option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
