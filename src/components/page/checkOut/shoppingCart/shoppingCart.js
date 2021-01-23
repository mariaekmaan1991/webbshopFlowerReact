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

  let h = shoppingCartList.map((product, i = parseInt(product.id)) => {
    return (
      <div className="ShoppingCart-Main-Container-Item" key={i}>
        <div className="ShoppingCart-Image-Content">
          <img className="Image-Cart" src={product.imageUrl} alt="godis" />
        </div>

        <div className="ShoppingCart-Container-Content-Item">
          <div className="ShoppingCart-Content-Item">
            <div className="ShoppingCart-InnerContent-Item">{product.name}</div>
            <div className="ShoppingCart-InnerContent-Item">
              price:{product.price}
            </div>
            <div className="ShoppingCart-InnerContent-Item">
              {product.description}
            </div>

            <div className="ShoppingCart-InnerContent-Item">
              <ProductChangeSize
                newUpdateQuantityProduct={newUpdateQuantityProduct}
                updateSizeProduct={updateSizeProduct}
                size={product.size}
              />
            </div>
            <div className="ShoppingCart-InnerContent-Item">
              <ProductChangeQuantity
                updateQuantityProduct={updateQuantityProduct}
                productquantity={product.quantity}
              />
            </div>
          </div>
          <div className="ShoppingCart-InnerContent-button">
            <div className="ShoppingCart-Content-button">
              <button
                type="submit"
                name="tröja"
                onClick={() => {
                  UpdateProduct(product.id);
                }}
              >
                update
              </button>
            </div>
            <div className="ShoppingCart-Content-button">
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
        </div>
      </div>
    );
  });
  return <div className="ShoppingCart-List-Main-Container"> {h}</div>;
}
// har en fråga hur gör man
//https://codesandbox.io/s/keen-sun-qp9rb?file=/src/index.js
