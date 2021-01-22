import React, { FormEvent, ChangeEvent, useReducer } from "react";

export function FromProduct({
  saveInfo,
  postFormValues,
  formCategoryProduct,
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
            <label className="Form-Admin-Container-Label">
              Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={productName}
                onChange={formProductName}
                className="Form-Admin-Container-Input"
              />
            </label>
          </div>
          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">
              Pris
              <input
                type="number"
                name="price"
                placeholder="price"
                value={productPrice}
                onChange={formProductPrice}
                className="Form-Admin-Container-Input"
              />
            </label>
          </div>
          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">
              Bild
              <input
                type="text"
                name="imageUrl"
                placeholder="imageUrl"
                value={productImageUrl}
                onChange={formProductImageUrl}
                className="Form-Admin-Container-Input"
              />
            </label>
          </div>
          <div className="Form-Admin-Container">
            <label className="Form-Admin-Container-Input">
              Antal
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                value={productQuantity}
                onChange={fromProductQuantity}
                className="Form-Admin-Container-Input"
              />
            </label>
          </div>
          <div className="Form-Admin-Main-Container-Button">
            <div className="Form-Admin-innerContainer-Button">
              <button
                className="Form-Admin-Button"
                type="submit"
                name="esy"
                onClick={() => {
                  formCategoryProduct({ category: "Cuttings" });
                }}
              >
                Sticklingar
              </button>
              <button
                className="Form-Admin-Button"
                type="submit"
                name="esy"
                onClick={() => {
                  formCategoryProduct({ category: "easy-careflowers" });
                }}
              >
                lätt skötta
              </button>
              <button
                className="Form-Admin-Button"
                type="submit"
                name="accessories"
                onClick={() => {
                  formCategoryProduct({ category: "accessories" });
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
                  formCategoryProduct({ category: "flower" });
                }}
              >
                Blommor
              </button>

              <button
                className="Form-Admin-Button"
                type="submit"
                name="Grönväxt"
                onClick={() => {
                  formCategoryProduct({ category: "greenPlant" });
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
                  formCategoryProduct({ category: "unusualFlowers" });
                }}
              >
                Ovanliga blommor
              </button>

              <button
                className="Form-Admin-Button"
                type="submit"
                name="Pots"
                onClick={() => {
                  formCategoryProduct({ category: "pots" });
                }}
              >
                Krukor
              </button>
            </div>
          </div>
          <label>
            Beskrivning
            <input
              className="Form-Admin-Container-Description"
              type="text"
              name="description"
              placeholder="description"
              value={descriptionProduct}
              onChange={formDescriptionProduct}
            ></input>
          </label>
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
