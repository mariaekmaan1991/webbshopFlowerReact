import { React, useState, useEffect } from "react";

export function Size({ size, something }) {
  const [ProductSize, setProductSize] = useState(size);

  function fromProductSize(e) {
    console.log(e.target.value);
    setProductSize(e.target.value);
  }

  function sendTheNumber() {
    something(ProductSize);
  }

  const options = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
  ];

  return (
    <div>
      {ProductSize}

      <select
        value={ProductSize}
        onChange={fromProductSize}
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
          sendTheNumber();
        }}
      >
        save
      </button>
    </div>
  );
}
// const options = [
//   { value: "XS", label: "Size" },
//   { value: "S", label: "Size" },
//   { value: "M", label: "Size" },
//   { value: "L", label: "Size" },
// ];

// let h = options.map((m) => {
//   let hej = { size: m.size, value: m.value };
//   return hej;
// });
