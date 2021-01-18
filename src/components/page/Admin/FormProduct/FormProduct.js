import React, { FormEvent, ChangeEvent, useReducer } from "react";

export function FromProduct({
  saveInfo,
  postFormValues,
  category,
  productImageUrl,
  productPrice,
  productName,
  productQuantity,

  formProductPrice,
  formProductImageUrl,
  formProductName,
  descriptionProduct,
  formDescriptionProduct,
  fromProductQuantity,
}) {
  return (
    <React.Fragment>
      <div className="From-Admin-Main-Container">
        <form onSubmit={saveInfo} className="Form-Admin">
          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">Name </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={productName}
              onChange={formProductName}
              className="Form-Admin-Container-Input"
            />
          </div>
          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">Pris </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              value={productPrice}
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
              value={productImageUrl}
              onChange={formProductImageUrl}
              className="Form-Admin-Container-Input"
            />
          </div>
          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">Antal </label>
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              value={productQuantity}
              onChange={fromProductQuantity}
              className="Form-Admin-Container-Input"
            />
          </div>
          <div className="Form-Admin-Container-Button">
            <div className="Form-Admin-innerContainer-Button">
              <button
                className="Form-Admin-Button"
                type="submit"
                name="smycken"
                onClick={() => {
                  category("smycken");
                }}
              >
                Sticklingar
              </button>

              <button
                className="Form-Admin-Button"
                type="submit"
                name="accessories"
                onClick={() => {
                  category("accessories");
                }}
              >
                Tillbehör
              </button>
            </div>
            <div className="Form-Admin-innerContainer-Button">
              <button
                className="Form-Admin-Button"
                type="submit"
                name="flower"
                onClick={() => {
                  category("flower");
                }}
              >
                Blommor
              </button>

              <button
                className="Form-Admin-Button"
                type="submit"
                name="Grönväxt"
                onClick={() => {
                  category("greenPlant");
                }}
              >
                Grön växter
              </button>
            </div>
            <div className="Form-Admin-innerContainer-Button">
              <button
                className="Form-Admin-Button"
                type="submit"
                name="Ovanliga blommor"
                onClick={() => {
                  category("UnusualFlowers");
                }}
              >
                Ovanliga blommor
              </button>

              <button
                className="Form-Admin-Button"
                type="submit"
                name="Pots"
                onClick={() => {
                  category("Pots");
                }}
              >
                Krukor
              </button>
            </div>
          </div>

          <input
            className="Form-Admin-Container-Description"
            type="text"
            name="description"
            placeholder="description"
            value={descriptionProduct}
            onChange={formDescriptionProduct}
          ></input>
          <button
            className="Form-Admin-Container-PostButton"
            type="submit"
            onClick={() => postFormValues()}
          >
            post
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
