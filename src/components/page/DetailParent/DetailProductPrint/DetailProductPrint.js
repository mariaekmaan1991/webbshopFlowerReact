import { React, useEffect, useState } from "react";

export function DetailProductPrint({
  DetailProductList,
  handleProductSize,
  handleProductQuantityDecrease,
  handleProductQuantityIncrease,
  saveInfo,

  addCart,
}) {
  return (
    <div>
      <div> {DetailProductList.imageUrl}</div>
      <div> {DetailProductList.name}</div>
      <div> {DetailProductList.price}</div>
      <div> {DetailProductList.description}</div>
      <div> antal:{DetailProductList.quantity}</div>
      <form onSubmit={saveInfo}>
        <label htmlFor="size">Choose a size:</label>
        <select onChange={handleProductSize} name="size" id="size">
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <label htmlFor="quantity">Antal:</label>
        <button
          onClick={(e) => handleProductQuantityIncrease(e, DetailProductList)}
          name="quantity"
          id="quantity"
        >
          +
        </button>
        {DetailProductList.quantity}
        <button
          onClick={(e) => handleProductQuantityDecrease(e, DetailProductList)}
          name="quantity"
          id="quantity"
        >
          -
        </button>
        <button
          type="submit"
          value=""
          onClick={() => addCart(DetailProductList)}
        >
          Lägg till varukorgen
        </button>
      </form>
    </div>
  );
}
