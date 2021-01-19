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
  const [showProduct, setShowProduct] = useState([]);
  fiterProductOrder();
  function fiterProductOrder() {
    let resultorder = listProduct.sort(function (a, b) {
      return a.price - b.price;
    });
    console.log(resultorder);
  }
  let categoryList = [];
  filterProductButton();
  function filterProductButton(params) {
    listProduct &&
      listProduct.map((data, index = parseInt(data.id)) => {
        data.category.map((category) => {
          // productCategorieSelect.category.map((categoryLista) => {
          if (category.category === productCategorieSelect.category) {
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
        // });
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

  return (
    <div>
      {resultat}
      <button
        className="Form-Admin-Button"
        type="submit"
        name="Grönväxt"
        onClick={() => {}}
      >
        sortera
      </button>
    </div>
  );
}
// function min(numbers) {
//   let minNumber = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number < minNumber) {
//       minNumber = number;
//     }
//   }
//   return minNumber;
// }
// function max(numbers) {
//   let maxNumber = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }
//   return maxNumber;
// }
