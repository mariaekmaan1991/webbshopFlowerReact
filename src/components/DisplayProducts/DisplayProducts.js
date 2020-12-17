import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/actions";
export function DisplayProducts({
  setUpdateFormValues,
  deleteProduct,
  products,
}) {
  const dispatch = useDispatch();

  // const productSeletor = useSelector(
  // (state) => state.
  // );

  function saveInfo2(e) {
    //console.log(e, "hej");
    e.preventDefault();
  }
  /* useEffect(() => {
    axios.get("http://localhost:8888/").then((response) => {
      dispatch(getProducts());
      let products = response.data.map((p) => {
        return {
          name: p.name,
          price: p.price,
          description: p.description,
          _id: p._id,
          date: p.date,
          imageUrl: p.imageUrl,
          category: p.category,
        };
      });
      setProduct(products);
    });
  }, []);*/

  console.log(products);

  let productList = products.map((data, i = parseInt(data._id)) => {
    console.log(data);
    return (
      <>
        <form onSubmit={saveInfo2} key={i} className="Main-Update-Box">
          <div>{`name: ${data.name}`}</div>
          <img src={data.imageUrl} alt="" />
          <div>{`price: ${data.price}`}</div>
          <div>{`description: ${data.description}`}</div>
          <div>{`id: ${data._id}`}</div>
          <div>{` category: ${data.category}`}</div>
          <button onClick={() => deleteProduct(data._id)}>radera</button>
          <button onClick={() => setUpdateFormValues(data)}>upptatera</button>
        </form>
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
