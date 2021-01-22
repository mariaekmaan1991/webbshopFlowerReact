import { React, useState, useReducer, useEffect } from "react";

export function ProductChangeQuantity({
  productquantity,
  updateQuantityProduct,
}) {
  const [productQuantity, setProductQuantity] = useState(productquantity);

  function fromProductQuantity(e) {
    console.log(e.target.value);
    setProductQuantity(e.target.value);
  }

  function sendNewSize() {
    updateQuantityProduct(productQuantity);
  }

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
  ];

  return (
    <div>
      antal:
      {productQuantity}
      <select
        value={productQuantity}
        onChange={fromProductQuantity}
        name="size"
        id="size"
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <button
        type="submit"
        name="tröja"
        onClick={() => {
          sendNewSize();
        }}
      >
        save
      </button>
    </div>
  );
}
