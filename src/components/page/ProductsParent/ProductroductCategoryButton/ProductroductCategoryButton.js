import { React, useState, useEffect } from "react";

export function ProductCategoryButton({ ProductCategoriesButton }) {
  return (
    <div className="Form-Main-Container-Category-Button">
      <div className="Form-InnerContainer-Category-Button">
        <div className="Form-Container-Category-Button">
          <button
            className="Form-Admin-Button"
            type="submit"
            name="flower"
            onClick={() => {
              ProductCategoriesButton({ category: " " });
            }}
          >
            set
          </button>
        </div>
        <div className="Form-Container-Category-Button">
          <button
            className="Form-Admin-Button"
            type="submit"
            name="flower"
            onClick={() => {
              ProductCategoriesButton({ category: "Flower" });
            }}
          >
            Blommor
          </button>
        </div>
      </div>
      <div className="Form-InnerContainer-Category-Button">
        <div className="Form-Container-Category-Button">
          <button
            className="Form-Admin-Button"
            type="submit"
            name="flower"
            onClick={() => {
              ProductCategoriesButton({ category: "easy-careflowers" });
            }}
          >
            lätt skötta växter Blommor
          </button>
        </div>
        <div className="Form-Container-Category-Button">
          <button
            className="Form-Admin-Button"
            type="submit"
            name="flower"
            onClick={() => {
              ProductCategoriesButton({ category: "Pots" });
            }}
          >
            krukor
          </button>
        </div>
      </div>
      <div className="Form-InnerContainer-Category-Button">
        <div className="Form-Container-Category-Button">
          <button
            className="Form-Admin-Button"
            type="submit"
            name="Grönväxt"
            onClick={() => {
              ProductCategoriesButton({ category: "greenPlant" });
            }}
          >
            Grön växter
          </button>
        </div>
        <div className="Form-Container-Category-Button">
          <button
            className="Form-Admin-Button"
            type="submit"
            name="Grönväxt"
            onClick={() => {
              ProductCategoriesButton({ category: "accessories" });
            }}
          >
            accessories
          </button>
        </div>
      </div>
    </div>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
