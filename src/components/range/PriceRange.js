import React from "react";
import { useState } from "react";

export default function PriceRange(props) {
  const [price, setPrice] = useState(100);
  const handleInput = (e) => {
    let price = parseInt(e.target.value);
    setPrice(price);
    props.sendPrice(price);
  };

  return (
    <div className="flex">
      <input
        className="w-3/4 mr-4"
        type="range"
        onInput={handleInput}
        min="0"
        max="500"
        value={price}
      />
      <input
        className="w-1/4 border border-gray-200 rounded-md p-2"
        type="number"
        min="0"
        max="500"
        onInput={handleInput}
        value={price}
      />
    </div>
  );
}
