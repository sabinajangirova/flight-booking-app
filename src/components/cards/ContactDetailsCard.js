import { PencilIcon } from "@heroicons/react/outline";
import React from "react";

export default function ContactDetailsCard(props) {
  return (
    <div className="bg-white rounded-md border border-gray-200 flex flex-col p-4 mb-10">
      <div className="flex justify-between">
        <h2 className="text-gray-700 text-lg font-semibold">Contact details</h2>
        <button className="flex text-gray-400 border border-gray-200 rounded-xl p-2 hover:bg-gray-100 active:bg-gray-200">
          <PencilIcon className="h-5 w-5 mr-2" />
          Edit
        </button>
      </div>
      <form></form>
      <div className="flex">
        <div className="flex flex-col w-1/2 mr-4">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Enter an email
          </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Confirm an email
          </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/2 mr-4">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Enter an address name
          </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Enter a city name
          </label>
          <input
            type="text"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/2 mr-4">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Country
          </label>
          <select className="border border-gray-200 p-3 text-gray-600 font-semibold w-full rounded-md">
            <option>Bangladesh</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
          </select>
        </div>
        <div className="flex w-1/2 flex-col">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Enter password
          </label>
          <input
            type="password"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/2 mr-4">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Country code
          </label>
          <select className="border border-gray-200 p-3 text-gray-600 font-semibold w-full rounded-md">
            <option>4032</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <div className="flex w-1/2 flex-col">
          <label className="text-gray-500 font-semibold text-md mb-2">
            Enter a phone number
          </label>
          <input
            type="tel"
            pattern="+[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="border border-gray-200 rounded-md p-3"
          />
        </div>
      </div>
    </div>
  );
}
