import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Products({
  listProduct,
  setbuttonDetailProduct,

  productCategorieSelect,
  ProductCategoriesButtonGreenPlant,
  ProductCategoriesButtonFlower,
}) {
  console.log(listProduct);
  console.log(productCategorieSelect, "productCategorieSelect");

  function Fitercategory() {
    listProduct &&
      listProduct.map((data, index = parseInt(data.id)) => {
        // data.category.filter((category) => {
        //   console.log(category.category, data.name);
        // });
      });
  }

  return <div>{}</div>;
}
