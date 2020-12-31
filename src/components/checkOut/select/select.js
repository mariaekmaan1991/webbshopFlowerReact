import { React, useState, useEffect } from "react";

export function Size({ size }) {
  const [ProductSize, setProductSize] = useState(size);

  function fromProductSize(e) {
    console.log(e.target.value);
    setProductSize(e.target.value);

    // localBase
    //   .collection("users")
    //   .doc({ id: id })
    //   .update({
    //     name: "William",
    //   })
    //   .then((users) => {
    //     console.log("fel?", users);
    //   });
  }

  return (
    <div>
      {ProductSize}
      <select onChange={fromProductSize} name="size" id="size">
        <option value={size === "XS" ? size : "XS"}>XS</option>
        <option value={size === "S" ? size : "S"}>S</option>
        <option value={size === "M" ? size : "M"}>M</option>
        <option value={size === "L" ? size : "L"}>L</option>
      </select>
    </div>
  );
}
