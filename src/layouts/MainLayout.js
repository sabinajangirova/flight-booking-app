import React from "react";
import { Outlet } from "react-router-dom";
import { BellIcon } from "@heroicons/react/outline";
import AccountDropdown from "../components/dropdowns/AccountDropdown";
export default function MainLayout(props) {
  return (
    <>
      <header className="w-full flex justify-between px-8 py-4">
        <div className="w-fit flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Motorcycle_travel_logo.png"
            className="h-12 w-12 mr-2"
          />
          <span className="text-gray-900 font-semibold text-xl">TripGuide</span>
        </div>
        <div className="flex">
          <div className="flex border-r-2 border-gray-400 items-center">
            <span className="text-gray-600 font-medium text-md mx-1">USD</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
              className="rounded-full h-6 w-6 mx-1"
            />
            <BellIcon className="h-6 w-6 text-gray-600 mx-1" />
          </div>
          <div className="flex items-center">
            <AccountDropdown />
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="bg-gray-100 grid grid-cols-4 gap-12 px-8 py-4">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Motorcycle_travel_logo.png"
              className="h-12 w-12 mr-2"
            />
            <span className="text-gray-900 font-semibold text-xl">
              TripGuide
            </span>
          </div>
          <p className="text-gray-400 text-md mt-2">
            This is the team that specializes in making sure in the find it a
            your interior looks cool
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-800 text-lg font-medium">Services</div>
          <ul className="text-gray-400 text-md">
            <li className="my-4">
              <a href="#" className="hover:underline hover:underline-offset-4">
                Travel Booking
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="hover:underline hover:underline-offset-4">
                Flight Booking
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="hover:underline hover:underline-offset-4">
                Car Booking
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="hover:underline hover:underline-offset-4">
                Fivestar Booking
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="hover:underline hover:underline-offset-4">
                Travelling
              </a>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </footer>
    </>
  );
}
