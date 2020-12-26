import { React, useEffect, useState } from "react";

export function DetailProductPrint({
  DetailProductList,
  ProductSize,
  handleProductSize,
  handleProductQuantity,
  ProductQuantity,
  handleProduct,
  saveInfo,
  id,
  sethandleProductId,
}) {
  return (
    <div>
      <div> {DetailProductList.imageUrl}</div>
      <div> {DetailProductList.name}</div>
      <div> {DetailProductList.price}</div>
      <div> {DetailProductList.description}</div>
      <div> antal:{DetailProductList.quantity}</div>
      <form onSubmit={saveInfo}>
        <label for="size">Choose a size:</label>
        <select onChange={handleProductSize} name="size" id="size">
          <option value={ProductSize}>XS</option>
          <option value={ProductSize}>S</option>
          <option value={ProductSize}>M</option>
          <option value={ProductSize}>L</option>
        </select>
        <label for="quantity">Antal:</label>
        <select
          type="number"
          onChange={handleProductQuantity}
          name="quantity"
          id="quantity"
        >
          <option value={ProductQuantity}>1</option>
          <option value={ProductQuantity}>2</option>
          <option value={ProductQuantity}>3</option>
          <option value={ProductQuantity}>4</option>
          <option value={ProductQuantity}>5</option>
        </select>
        <button type="submit" value="" onClick={() => handleProduct(id)}>
          Lägg till varukorgen
        </button>
      </form>
    </div>
  );
}
