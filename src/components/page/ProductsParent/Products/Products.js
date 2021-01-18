import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Product {
  name;
}

export function Products({
  listProduct,
  setbuttonDetailProduct,

  productCategorieSelect,
  ProductCategoriesButtonGreenPlant,
  ProductCategoriesButtonFlower,
}) {
  let categoryList = [];
  filterProduct();
  function filterProduct(params) {
    listProduct &&
      listProduct.map((data, index = parseInt(data.id)) => {
        data.category.map((category) => {
          if (category.category === productCategorieSelect) {
            let Product = {
              category: category.category,
              name: data.name,
              description: data.description,
              price: data.price,
              imageUrl: data.imageUrl,
              id: data.id,
              quantity: data.quantity,
            };

            categoryList.push(Product);
          }
        });
      });
  }

  let resultat = categoryList.map((data) => {
    return (
      <Link to={`/products/${data.id}`}>
        <div>{data.category}</div>
        <div> {data.name}</div>
        <div> {data.description}</div>
        <div> {data.price}</div>
        <div> {data.imageUrl}</div>
        <div> {data.id}</div>
        <div> {data.quantity}</div>
      </Link>
    );
  });

  return <div>{resultat}</div>;
}
