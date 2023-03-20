import {
  CheckIcon,
  ChipIcon,
  DotsVerticalIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactDatePicker from "react-datepicker";

export default function ConfirmPage(props) {
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

  const [selectedCard, setSelectedCard] = useState("mastercard");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="flex bg-gray-100 p-8">
      <div className="w-1/2">
        <h1 className="text-gray-800 font-bold text-4xl py-10 border-b border-gray-200">
          Confirm your Book
        </h1>
        <div className="flex flex-col mt-4 w-2/3">
          <h2 className="text-gray-800 font-bold text-2xl">Your tour</h2>
          <div className="bg-gray-200 rounded-md flex justify-between mt-4">
            <div className="flex flex-col p-2">
              <span className="text-gray-800 text-sm font-semibold">Date</span>
              <span className="text-gray-600 text-sm font-semibold">
                {flight.flight_date}
              </span>
            </div>
            <PencilIcon
              onClick={onOpenModal}
              className="text-gray-600 h-5 w-5 my-auto mr-2 cursor-pointer"
            />
          </div>
          <div className="bg-gray-200 rounded-md flex justify-between mt-4">
            <div className="flex flex-col p-2">
              <span className="text-gray-800 text-sm font-semibold">
                Traveller
              </span>
              <span className="text-gray-600 text-sm font-semibold">
                1 passenger
              </span>
            </div>
            <PencilIcon className="text-gray-600 h-5 w-5 my-auto mr-2 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col mt-4 border-b border-gray-200 mb-4">
          <h2 className="text-gray-800 font-bold text-2xl">Credit Cards</h2>
          <div className="flex justify-evenly my-4">
            <div
              style={{
                backgroundImage:
                  "url('https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png')",
                height: "120px",
                width: "180px",
              }}
              className="rounded-md border mx-2 cursor-pointer relative"
              onClick={() => setSelectedCard("mastercard")}
            >
              {selectedCard === "mastercard" && (
                <CheckCircleIcon className="absolute text-blue-500 h-5 w-5 -top-2 -right-2" />
              )}
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/128/196/196566.png')",
                height: "120px",
                width: "180px",
              }}
              className="rounded-md border mx-2 cursor-pointer relative"
              onClick={() => setSelectedCard("paypal")}
            >
              {selectedCard === "paypal" && (
                <CheckCircleIcon className="absolute text-blue-500 h-5 w-5 -top-2 -right-2" />
              )}
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-icon/visa-logo_318-77307.jpg')",
                height: "120px",
                width: "180px",
              }}
              className="rounded-md border mx-2 cursor-pointer relative"
              onClick={() => setSelectedCard("visa")}
            >
              {selectedCard === "visa" && (
                <CheckCircleIcon className="absolute text-blue-500 h-5 w-5 -top-2 -right-2" />
              )}
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.cardrates.com/images/uploads/2019/01/amex-logo-1.png?width=256&height=256')",
                height: "120px",
                width: "180px",
              }}
              className="rounded-md border mx-2 cursor-pointer relative"
              onClick={() => setSelectedCard("americanExpress")}
            >
              {selectedCard === "americanExpress" && (
                <CheckCircleIcon className="absolute text-blue-500 h-5 w-5 -top-2 -right-2" />
              )}
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.discover.com/company/images/newsroom/media-downloads/discover.png')",
                height: "120px",
                width: "180px",
              }}
              className="rounded-md border mx-2 cursor-pointer relative"
              onClick={() => setSelectedCard("discover")}
            >
              {selectedCard === "discover" && (
                <CheckCircleIcon className="absolute text-blue-500 h-5 w-5 -top-2 -right-2" />
              )}
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="rounded-xl p-4 bg-violet-200 flex flex-col justify-between w-1/2">
            <div className="flex justify-between mb-8">
              <ChipIcon className="text-gray-600 h-8 w-8" />
              <DotsVerticalIcon className="text-gray-600 h-8 w-8" />
            </div>
            <div className=" flex justify-between">
              <div className="flex flex-col">
                <span className="text-gray-600 text-md font-semibold">
                  8948 xxxx xxxx 7894
                </span>
                <span className="text-gray-600 text-md font-semibold">
                  Holder Name
                </span>
              </div>
              <img
                style={{
                  height: "40px",
                  width: "40px",
                }}
                src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960"
              />
            </div>
          </div>
          <div className="rounded-xl p-4 bg-green-200 flex flex-col justify-between w-1/2 ml-4">
            <div className="flex justify-between mb-8">
              <ChipIcon className="text-gray-600 h-8 w-8" />
              <DotsVerticalIcon className="text-gray-600 h-8 w-8" />
            </div>
            <div className=" flex justify-between">
              <div className="flex flex-col">
                <span className="text-gray-600 text-md font-semibold">
                  8948 xxxx xxxx 7894
                </span>
                <span className="text-gray-600 text-md font-semibold">
                  Holder Name
                </span>
              </div>
              <img
                style={{
                  height: "40px",
                  width: "40px",
                }}
                src="https://www.visa.com.au/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 mb-20">
          <h3 className="text-gray-600 font-semibold text-md">Card Number</h3>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 border border-gray-300 rounded-lg p-2 w-full"
            />
            <CheckIcon className="text-violet-300 h-5 w-5 absolute  right-0" />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold text-md">
                Expiry date
              </label>
              <input
                type="text"
                className="bg-gray-200 border border-gray-300 rounded-lg p-2 text-gray-600"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold text-md">
                CVC / CVV
              </label>
              <input
                type="password"
                className="bg-gray-200 border border-gray-300 rounded-lg p-2 text-gray-600"
                placeholder="Enter CVC / CVV"
              />
            </div>
          </div>
          <div className="flex mt-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-600 font-semibold text-md">
              Save Card
            </label>
          </div>
          <button
            onClick={() => navigate("/congratulations")}
            className="bg-blue-600 py-2 px-4 text-white text-md rounded-xl w-fit mt-4"
          >
            Confirm and reserve
          </button>
        </div>
      </div>
      <div className="w-1/2  py-10 px-12">
        <div className="rounded-md bg-white border border-gray-200 flex flex-col w-fit p-4">
          <div className="flex my-2">
            <span className="text-gray-700 text-md font-semibold">AKN</span>
            <p className="flex">
              .....
              <img
                src="https://www.freeiconspng.com/thumbs/airplane-icon-png/transport-airplane-takeoff-icon--android-iconset--icons8-2.png"
                className="h-4 w-4 mt-auto"
              />
              .....
            </p>
            <span className="text-gray-700 text-md font-semibold">SGN</span>
          </div>
          <div className="flex my-2">
            <StarIcon className="h-5 w-5 text-yellow-300" />
            <span className="text-gray-800 font-semibold text-md mr-2">
              4.8
            </span>
            <span className="text-gray-400 font-semibold text-md">
              (122) reviews
            </span>
          </div>
          <div
            className="rounded-md my-2"
            style={{
              backgroundImage:
                "url('https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_12117(1).jpg')",
              width: "300px",
              height: "200px",
            }}
          ></div>
          <div className="text-gray-400 font-semibold text-sm border-b border-gray-200 pb-2 my-2 w-1/2">
            1 Baggage + Meals
          </div>
          <div className="flex my-2">
            <div className="flex flex-col w-1/2 border-r border-gray-200 px-2">
              <span className="text-gray-400 font-semibold text-sm">
                Check-in
              </span>
              <span className="text-gray-800 font-semibold text-md">
                May 15, 2021
              </span>
            </div>
            <div className="flex flex-col w-1/2 px-2">
              <span className="text-gray-400 font-semibold text-sm">
                Check-out
              </span>
              <span className="text-gray-800 font-semibold text-md">
                May 22, 2021
              </span>
            </div>
          </div>
          <div className="flex flex-col my-2 px-2">
            <span className="text-gray-400 font-semibold text-sm">
              Travellers
            </span>
            <span className="text-gray-800 font-semibold text-md">
              1 Passenger
            </span>
          </div>
          <div className="flex flex-col my-2">
            <span className="text-gray-800 text-lg font-semibold my-4">
              Fare summary
            </span>
            <div className="flex justify-between px-2 my-1">
              <span className="text-gray-400 font-semibold text-md">
                1x passenger
              </span>
              <span className="text-gray-800 font-semibold text-md">$140</span>
            </div>
            <div className="flex justify-between px-2 my-1">
              <span className="text-gray-400 font-semibold text-md">
                Tax and fee
              </span>
              <span className="text-gray-800 font-semibold text-md">$140</span>
            </div>
            <div className="flex justify-between px-2 my-1">
              <span className="text-gray-400 font-semibold text-md">
                Service fee
              </span>
              <span className="text-gray-800 font-semibold text-md">$140</span>
            </div>
            <div className="flex justify-between px-2 bg-gray-200 rounded-md my-1">
              <span className="text-gray-400 font-semibold text-md">Total</span>
              <span className="text-gray-800 font-semibold text-md">$140</span>
            </div>
          </div>
          <span className="my-2 text-gray-400 text-sm font-semibold mx-auto cursor-pointer">
            Report this flight
          </span>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Change your date</h2>
        <ReactDatePicker />
      </Modal>
    </div>
  );
}
