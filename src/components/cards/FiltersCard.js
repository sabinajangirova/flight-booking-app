import React from "react";
import PriceRange from "../range/PriceRange";
export default function FiltersCard(props) {
  const sendPrice = (price) => {
    props.filterPrice(price);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col border-b border-gray-200 py-4">
        <h2 className="text-gray-600 text-md font-semibold">Popular filter</h2>
        <div className="flex flex-col">
          <div className="flex justify-between align-bottom">
            <div className="flex">
              <input type="checkbox" className="mr-4" />
              <lable className="text-gray-600 text-md font-normal">
                Non stop
              </lable>
            </div>
            <span className="text-gray-400 text-sm font-normal align-text-bottom my-auto">
              $2.632
            </span>
          </div>
          <div className="flex justify-between align-bottom">
            <div className="flex">
              <input type="checkbox" className="mr-4" />
              <lable className="text-gray-600 text-md font-normal">
                Indigo
              </lable>
            </div>
            <span className="text-gray-400 text-sm font-normal align-text-bottom my-auto">
              $2.632
            </span>
          </div>
          <div className="flex justify-between align-bottom">
            <div className="flex">
              <input type="checkbox" className="mr-4" />
              <lable className="text-gray-600 text-md font-normal">
                Vistara
              </lable>
            </div>
            <span className="text-gray-400 text-sm font-normal align-text-bottom my-auto">
              $2.632
            </span>
          </div>
          <div className="flex justify-between align-bottom">
            <div className="flex">
              <input type="checkbox" className="mr-4" />
              <lable className="text-gray-600 text-md font-normal">
                Late Departures
              </lable>
            </div>
            <span className="text-gray-400 text-sm font-normal align-text-bottom my-auto">
              $2.632
            </span>
          </div>
          <div className="flex justify-between align-bottom">
            <div className="flex">
              <input type="checkbox" className="mr-4" />
              <lable className="text-gray-600 text-md font-normal">
                Go First
              </lable>
            </div>
            <span className="text-gray-400 text-sm font-normal align-text-bottom my-auto">
              $2.632
            </span>
          </div>
          <span className="text-blue-600 font-bold text-md cursor-pointer active:text-blue-800">
            See more
          </span>
        </div>
      </div>
      <div className="flex flex-col border-b border-gray-200 py-4">
        <h2 className="text-gray-600 text-md font-semibold">Price range</h2>
        <PriceRange sendPrice={sendPrice} />
      </div>
    </div>
  );
}
