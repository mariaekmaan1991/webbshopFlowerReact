import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function ProductItem({
  category,
  name,
  index,
  data,
  productCategorieSelect,
}) {
  console.log("dataCategory", category);
  console.log("data", name);
  // console.log(productCategorieSelect, "productCategorieSelect");

  // if (category === productCategorieSelect) {
  // console.log("dataCategory", dataCategory, "data", data);
  // console.log(productCategorieSelect, "productCategorieSelect");
  return (
    <div className="" key={index}>
      {name}
    </div>
  );
  // } else {
  //   return null;
  // }
}
