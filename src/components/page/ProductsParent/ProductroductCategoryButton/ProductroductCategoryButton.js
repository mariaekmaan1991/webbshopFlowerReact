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
  ProductCategoriesButtonFlower,
}) {
  return (
    <div>
      <button
        className="Form-Admin-Button"
        type="submit"
        name="flower"
        onClick={() => {
          ProductCategoriesButtonFlower("Flower");
        }}
      >
        Blommor
      </button>
      <button
        className="Form-Admin-Button"
        type="submit"
        name="flower"
        onClick={() => {
          ProductCategoriesButtonFlower("easy-careflowers");
        }}
      >
        lätt skötta växter Blommor
      </button>
      <button
        className="Form-Admin-Button"
        type="submit"
        name="flower"
        onClick={() => {
          ProductCategoriesButtonFlower("Pots");
        }}
      >
        krukor
      </button>
      <button
        className="Form-Admin-Button"
        type="submit"
        name="Grönväxt"
        onClick={() => {
          ProductCategoriesButtonGreenPlant("greenPlant");
        }}
      >
        Grön växter
      </button>
      <button
        className="Form-Admin-Button"
        type="submit"
        name="Grönväxt"
        onClick={() => {
          ProductCategoriesButtonGreenPlant("greenPlant");
        }}
      >
        accessories
      </button>
    </div>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
