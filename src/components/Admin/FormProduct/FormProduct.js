import React, { FormEvent, ChangeEvent, useReducer } from "react";
import { firebase } from "../../firebase/firebase";
export function FromProduct({
  saveInfo,
  postFormValues,
  category,
  ProductImageUrl,
  ProductPrice,
  ProductName,
  ProductQuantity,
  ProductDescription,
  formProductPrice,
  formProductImageUrl,
  formProductName,
  formProductDescription,
  fromProductQuantity,
}) {
  return (
    <React.Fragment>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      <div className="From-Admin-Main-Container">
        <form onSubmit={saveInfo} className="Form-Admin">
          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">Name </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={ProductName}
              onChange={formProductName}
              className="Form-Admin-Container-Input"
            />

            <label className="Form-Admin-Container-Input">Pris </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              value={ProductPrice}
              onChange={formProductPrice}
              className="Form-Admin-Container-Input"
            />
          </div>

          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">Bild </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="imageUrl"
              value={ProductImageUrl}
              onChange={formProductImageUrl}
              className="Form-Admin-Container-Input"
            />

            <label className="Form-Admin-Container-Input">Antal </label>
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              value={ProductQuantity}
              onChange={fromProductQuantity}
              className="Form-Admin-Container-Input"
            />
          </div>

          <div className="">
            <h5>Kategorier</h5>
            <button
              type="submit"
              name="smycken"
              onClick={() => {
                category("smycken");
              }}
            >
              smycken
            </button>

            <button
              type="submit"
              name="tröja"
              onClick={() => {
                category("tröja");
              }}
            >
              tröja
            </button>
          </div>

          <input
            type="text"
            name="description"
            placeholder="description"
            value={ProductDescription}
            onChange={formProductDescription}
          />

          <button type="submit" onClick={() => postFormValues()}>
            post
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
