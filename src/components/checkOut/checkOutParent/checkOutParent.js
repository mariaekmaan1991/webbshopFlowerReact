import { React, useState, useEffect } from "react";
import Localbase from "localbase";
import { ShoppingCart } from "../shoppingCart/shoppingCart";
import { Size } from "../ProductChangeSize/ProductChangeSize";
export function CheckOutParent() {
  return (
    <div>
      <ShoppingCart></ShoppingCart>
    </div>
  );
}
