import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Products({
  ListProduct,
  setbuttonDetailProduct,
  ProductCategories,
  ProductCategoriesButtonGreenPlant,
  ProductCategoriesButtonFlower,
}) {
  console.log(ProductCategories);
  const [ProductCategorie, setProductCategorie] = useState();

  let hej = ListProduct.map((data, i = parseInt(data.id)) => {
    // return data.category.forEach((dataCategory, index) => {
    //   console.log(dataCategory.category);
    return (
      <div className="Product-Content" key={i}>
        <Link to={"/products/" + data.id}>
          <img className="Product-Image" src={data.imageUrl} alt="" />
          <div className="Product-Content-Text">
            <div className="Product-Content-Name">{`name: ${data.name}`}</div>
            <div className="Product-Content-Price">{`price: ${data.price}`}</div>

            {/* {dataCategory.category} */}
          </div>
        </Link>
      </div>
    );
    // });
  });

  return <div className="Product-Content-List">{hej}</div>;
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
/*  return (
    <div>
      {ListProduct.map((data, id) => {
        data.category.forEach((dataCategory, id) => {
          id = data._id;
          return (
            <div className="Product-Content" key={id}>
              <Link to={"/products/" + data.id}>
                <img className="Product-Image" src={data.imageUrl} alt="" />
                <div className="Product-Content-Text">
                  <div className="Product-Content-Name">{`name: ${data.name}`}</div>
                  <div className="Product-Content-Price">{`price: ${data.price}`}</div>
                  {dataCategory}
                  {ListProduct}
                </div>
              </Link>
            </div>
          );
        });
      })}
    </div>
  );
}*/
