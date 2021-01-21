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
      <div className="Product-Content">
        <Link to={`/products/${data.id}`}>
          <img className="Product-Image" src={data.imageUrl} alt="hej" />
          <div className="Product-Content-Text">
            <div className="Product-Content-Name"> {data.name}</div>
            <div className="Product-Content-Price"> {data.price}</div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="Product-Content-List">{resultat}</div>;
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
