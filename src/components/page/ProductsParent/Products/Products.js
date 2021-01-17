import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ProductItem } from "./productItem";

export function Products({
  listProduct,
  setbuttonDetailProduct,

  productCategorieSelect,
  ProductCategoriesButtonGreenPlant,
  ProductCategoriesButtonFlower,
}) {
  console.log(listProduct);

  // let result = listProduct.map((data) => {
  //   let hej = data.category.filter((category) => {
  //     if (category === productCategorieSelect) return category;
  //   });

  //   return (
  //     <div className="Product-Content">
  //       {hej}
  //       <Link to={"/products/" + data.id}>
  //         <img className="Product-Image" src={data.imageUrl} alt="" />
  //         <div className="Product-Content-Text">
  //           <div className="Product-Content-Name">{`name: ${data.name}`}</div>
  //           <div className="Product-Content-Price">{`price: ${data.name}`}</div>
  //         </div>
  //       </Link>
  //     </div>
  //   );
  // });
  console.log(productCategorieSelect, "productCategorieSelect");

  let h =
    listProduct &&
    listProduct.map((data, index = parseInt(data.id)) => {
      data.category.forEach((category) => {
        console.log(category.category, data.name);

        return (
          <div className="Product-Content-List">
            <ProductItem
              dataCategory={category.category}
              name={data.name}
              key={index}
              productCategorieSelect={productCategorieSelect}
            />
            {data.name}
            {category.category}
          </div>
        );
      });
    });
  return <div>{h}</div>;
}
