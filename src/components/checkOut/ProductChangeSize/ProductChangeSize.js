import { React, useState, useEffect } from "react";

export function ProductChangeSize({ size, updateSizeProduct }) {
  const [ProductSize, setProductSize] = useState(size);

  function fromProductSize(e) {
    console.log(e.target.value);
    setProductSize(e.target.value);
  }

  function sendTheSize() {
    updateSizeProduct(ProductSize, size);
  }

  const options = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
  ];

  return (
    <div>
      storlek:{ProductSize}
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
          sendTheSize();
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
