import React, { FormEvent, ChangeEvent, useReducer } from "react";

export function FromProduct({
  saveInfo,
  postFormValues,
  category,
  ProductImageUrl,
  ProductPrice,
  ProductName,
  ProductDescription,
  formProductPrice,
  formProductImageUrl,
  formProductName,
  formProductDescription,
}) {
  return (
    <form onSubmit={saveInfo}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={ProductName}
        onChange={formProductName}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        value={ProductPrice}
        onChange={formProductPrice}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={ProductDescription}
        onChange={formProductDescription}
      />

      <input
        type="text"
        name="imageUrl"
        placeholder="imageUrl"
        value={ProductImageUrl}
        onChange={formProductImageUrl}
      />
      <div>
        <h5>Kategorier</h5>
        <button
          type="submit"
          name="smycken"
          onClick={() => {
            category("smycken");
          }}
        >
          smycken
        </button>

        <button
          type="submit"
          name="tröja"
          onClick={() => {
            category("tröja");
          }}
        >
          tröja
        </button>
      </div>

      <button type="submit" onClick={() => postFormValues()}>
        post
      </button>
    </form>
  );
}
