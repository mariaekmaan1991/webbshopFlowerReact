import { React } from "react";
import Localbase from "localbase";
import { ProductChangeSize } from "../ProductChangeSize/ProductChangeSize";

import { ProductChangeQuantity } from "../ProductChangeQuantity/ProductChangeQuantity";

export function ShoppingCart({
  setNewUpdateSizeProduct,
  shoppingCartList,
  newUpdateQuantityProduct,
  newUpdateSizeProduct,
  setNewUpdateQuantityProduct,
}) {
  let localBase = new Localbase("db");

  function updateSizeProduct(x) {
    setNewUpdateSizeProduct(x);
  }

  function updateQuantityProduct(x) {
    setNewUpdateQuantityProduct(x);
  }
  function UpdateProduct(product) {
    localBase
      .collection("Products")
      .doc({ id: product.id })
      .update({
        size: newUpdateSizeProduct,
        quantity: parseInt(newUpdateQuantityProduct),
      })
      .then((product) => {
        console.log("fel?", product);
      });
  }

  function deleteProduct(id) {
    console.log(id);
    localBase
      .collection("Products")
      .doc({ id: id })
      .delete()
      .then((users) => {
        console.log("fel?", users);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps

  let h = shoppingCartList.map((product, i = parseInt(product.id)) => {
    return (
      <div className="Product-ShoppingCart-Container" key={i}>
        <div className="ShoppingCart-List-Content-Item">
          <img
            className="Admin-Display-Product-ImageUrl"
            src={product.imageUrl}
            alt=""
          />
        </div>

        <div className="ShoppingCart-List-Content-Item">{product.name}</div>
        <div className="ShoppingCart-List-Content-Item">
          price:{product.price}
        </div>
        <div className="ShoppingCart-List-Content-Item">
          {product.description}
        </div>

        <div className="ShoppingCart-List-Content-Item">
          <ProductChangeSize
            newUpdateQuantityProduct={newUpdateQuantityProduct}
            updateSizeProduct={updateSizeProduct}
            size={product.size}
          />
        </div>
        {/* <ProductChangeProductQuantity
            productQuantity={product.quantity}
            productid={product.id}
            something2={updateIpsumNumber2}
          /> */}
        <div className="ShoppingCart-List-Content-Item">
          <ProductChangeQuantity
            updateQuantityProduct={updateQuantityProduct}
            productquantity={product.quantity}
          />
        </div>
        <div className="ShoppingCart-List-Content-Item">
          <button
            type="submit"
            name="tröja"
            onClick={() => {
              UpdateProduct(product.id);
            }}
          >
            update
          </button>

          <button
            type="submit"
            name="tröja"
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            radera
          </button>
        </div>
      </div>
    );
  });
  return <div className="ShoppingCart-List-Container"> {h}</div>;
}
// har en fråga hur gör man
//https://codesandbox.io/s/keen-sun-qp9rb?file=/src/index.js
