import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import {
  CalendarIcon,
  CashIcon,
  CheckCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export default function CongratulationsPage(props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-gray-100 p-8">
      <div className="w-2/3 flex flex-col py-4 border-b border-gray-200 h-fit my-4">
        <span className="text-gray-800 font-semibold text-lg mb-4">
          Congratulation!
        </span>
        <span className="text-gray-800 font-semibold text-3xl">
          Your trip has been booked!
        </span>
      </div>
      <div className="flex mb-20">
        <div className="flex flex-col">
          <div className="flex my-4">
            <span className="text-gray-700 text-lg font-semibold">AKN</span>
            <p className="flex">
              .....
              <img
                src="https://www.freeiconspng.com/thumbs/airplane-icon-png/transport-airplane-takeoff-icon--android-iconset--icons8-2.png"
                className="h-4 w-4 mt-auto"
              />
              .....
            </p>
            <span className="text-gray-700 text-lg font-semibold">SGN</span>
          </div>
          <div className="flex my-4 border-b border-gray-200 w-fit pb-4">
            <div className="flex mr-4">
              <StarIcon className="h-5 w-5 text-yellow-300" />
              <span className="text-gray-800 font-semibold text-sm mr-2">
                4.8
              </span>
              <span className="text-gray-400 font-semibold text-sm">
                (122) reviews
              </span>
            </div>
            <div className="text-gray-400 font-semibold text-sm">
              1 Baggage + Meals
            </div>
          </div>
          <div className="flex justify-between">
            <div className="bg-gray-200 flex flex-col rounded-md px-4 py-2">
              <span className="text-gray-800 font-semibold text-sm">Dates</span>
              <span className="text-gray-600 font-semibold text-sm">
                May 15-22, 2021
              </span>
            </div>
            <div className="bg-gray-200 flex flex-col rounded-md px-4 py-2">
              <span className="text-gray-800 font-semibold text-sm">
                Traveller
              </span>
              <span className="text-gray-600 font-semibold text-sm">
                1 Passenger
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-gray-200 rounded-md my-4 p-4">
            <h2 className="text-gray-800 font-semibold text-2xl mb-4">
              Reserve details
            </h2>
            <div className="flex justify-between my-1">
              <div className="flex">
                <CashIcon className="h-5 w-5 text-gray-400 my-auto" />
                <span className="text-gray-400 font-semibold text-md">
                  Promo code
                </span>
              </div>
              <span className="text-gray-800 font-semibold text-md">
                FD_158456
              </span>
            </div>
            <div className="flex justify-between my-1">
              <div className="flex">
                <CalendarIcon className="h-5 w-5 text-gray-400 my-auto" />
                <span className="text-gray-400 font-semibold text-md">
                  Date
                </span>
              </div>
              <span className="text-gray-800 font-semibold text-md">
                30 Apr, 2021
              </span>
            </div>
            <div className="flex justify-between my-1">
              <div className="flex">
                <CheckCircleIcon className="h-5 w-5 text-gray-400 my-auto" />
                <span className="text-gray-400 font-semibold text-md">
                  Total
                </span>
              </div>
              <span className="text-gray-800 font-semibold text-md">$833</span>
            </div>
            <div className="flex justify-between my-1">
              <div className="flex">
                <CreditCardIcon className="h-5 w-5 text-gray-400 my-auto" />
                <span className="text-gray-400 font-semibold text-md">
                  Payment method
                </span>
              </div>
              <span className="text-gray-800 font-semibold text-md">
                Credit card
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-700 text-white text-md font-semibold rounded-lg w-fit px-4 py-2"
          >
            Go To Your Home
          </button>
        </div>
        <div
          className="rounded-md my-2 mx-20"
          style={{
            backgroundImage:
              "url('https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_12117(1).jpg')",
            width: "600px",
            height: "400px",
          }}
        ></div>
      </div>
    </div>
  );
}
