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
        <>
          <h1 key={id}>{data.name}</h1>
          <h1>{data.price}</h1>
          <div>{`name: ${data.name}`}</div>
          <img src={data.imageUrl} alt="" />
          <div>{`price: ${data.price}`}</div>
          <div>{`description: ${data.description}`}</div>
          <div>{`id: ${data.id}`}</div>
          <div>{` category: ${data.category}`}</div>
          <button onClick={() => deleteProduct(data.id)}>radera</button>
          <button onClick={() => setUpdateFormValues(data)}>upptatera</button>
        </>
      );
    });

  return (
    <div>
      <h1>hej</h1>
      <div>{productList}</div>
    </div>
  );
}
