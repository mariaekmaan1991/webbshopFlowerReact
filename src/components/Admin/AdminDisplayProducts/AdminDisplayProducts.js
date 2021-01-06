import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

export function AdminDisplayProducts({
  setUpdateFormValues,
  deleteProduct,

  ListProduct,
}) {
  function saveInfo2(e) {
    console.log(e, "hej");
    e.preventDefault();
  }

  let productList =
    ListProduct &&
    ListProduct.map((data, id) => {
      console.log(data, "hh");
      return (
        <div className="Admin-Display-Product-Main-Container">
          <div className="Admin-Display-Product-Container" key={id}>
            <div className="Admin-Display-Product-Container-Name">
              {`id: ${data.id}`}
              <h2 className="Admin-Display-Product-Name">
                {`Titel: ${data.name}`}
              </h2>
            </div>
            <div className="Admin-Display-Product-Container-ImageUrl">
              <img
                className="Admin-Display-Product-ImageUrl"
                src={data.imageUrl}
                alt=""
              />
            </div>
            <div className="Admin-Display-Product-Container-Info">
              <h3> {`price: ${data.price}`}</h3>
              <p>{`description: ${data.description}`}</p>
            </div>
            <div className="Admin-Display-Product-Container-Category">
              <p>{` category: ${data.category}`}</p>
            </div>
            <div className="Admin-Display-Product-Container-Category">
              <button
                className="Admin-Display-Product-Container-Button"
                onClick={() => deleteProduct(data.id)}
              >
                radera
              </button>
              <button
                className="Admin-Display-Product-Container-Button"
                onClick={() => setUpdateFormValues(data)}
              >
                upptatera
              </button>
            </div>
          </div>
        </div>
      );
    });

  return (
    <React.Fragment>
      <div>{productList}</div>
    </React.Fragment>
  );
}
