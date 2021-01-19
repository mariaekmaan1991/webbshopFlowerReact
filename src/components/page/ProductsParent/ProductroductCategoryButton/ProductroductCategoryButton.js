import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export function ProductroductCategoryButton({
  ProductCategoriesButtonGreenPlant,

  ProductCategoriesButton,
}) {
  return (
    <div>
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
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
