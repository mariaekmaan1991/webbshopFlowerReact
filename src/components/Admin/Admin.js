import React, {
  ChangeEvent,
  FormEvent,
  useReducer,
  useEffect,
  useState,
} from "react";
import _ from "lodash";
import axios from "axios";
import { DisplayProducts } from "../DisplayProducts/DisplayProducts";
import { FromProduct } from "../FormProduct/FormProduct";
export class Product {
  name = "";
  price = "";
  description = "";
  imageUrl = "";
  category = "";
}

export function Admin() {
  /// Form post

  function saveInfo(e) {
    //console.log(e, "hej");
    e.preventDefault();
  }

  /// Form post
  //popUp
  const [showPopup, setShowPopup] = useState(false);

  function openPopup() {
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }
  //popUp

  /// Form  put
  const [updateFormValues, setUpdateFormValues] = useState({});

  const [ProductImageUrl, setProductImageUrl] = useState();
  const [ProductName, setProductName] = useState();
  const [ProductPrice, setProductprice] = useState();
  const [ProductDescription, setProductDescription] = useState();

  useEffect(() => {
    if (updateFormValues.description) {
      setProductDescription(updateFormValues.description);
    }
    if (updateFormValues.imageUrl) {
      setProductImageUrl(updateFormValues.imageUrl);
    }
    if (updateFormValues.price) {
      setProductprice(updateFormValues.price);
    }
    if (setProductName(updateFormValues.name)) {
      setProductName(updateFormValues.name);
    }
  }, [
    updateFormValues.description,
    updateFormValues.name,
    updateFormValues.imageUrl,
    updateFormValues.price,
  ]);

  function formProductPrice(e) {
    if (updateFormValues.price === undefined) {
      setProductprice(e.target.value);
    } else {
      setProductprice(({ ...updateFormValues.price }, e.target.value));
    }
  }

  function formProductImageUrl(e) {
    if (updateFormValues.imageUrl === undefined) {
      setProductImageUrl(e.target.value);
    } else {
      setProductImageUrl(({ ...updateFormValues.imageUrl }, e.target.value));
    }
  }

  function formProductDescription(e) {
    if (updateFormValues.description === undefined) {
      setProductDescription(e.target.value);
    } else {
      setProductDescription(
        ({ ...updateFormValues.description }, e.target.value)
      );
    }
  }

  function formProductName(e) {
    if (updateFormValues.name === undefined) {
      setProductName(e.target.value);
    } else {
      setProductName(({ ...updateFormValues.name }, e.target.value));
    }
  }

  function saveUpdate(e) {
    e.preventDefault();
  }

  // function category(text) {
  //   console.log(text);
  //   return text;
  // }

  function updateFormValue() {
    // let resultCategory = category(text);
    let h = {
      name: ProductName,
      description: ProductDescription,
      price: ProductPrice,
      imageUrl: ProductImageUrl,
      _id: updateFormValues._id,
      //category: resultCategory,
    };

    return h;
  }

  function formValuePost() {
    // let resultCategory = category(text);
    let h = {
      name: ProductName,
      description: ProductDescription,
      price: ProductPrice,
      imageUrl: ProductImageUrl,

      //category: resultCategory,
    };

    return h;
  }

  function postFormValues() {
    let resultPut = updateFormValue();
    let resultPost = formValuePost();
    console.log(resultPost);
    let id = updateFormValues._id;

    if (updateFormValues._id === undefined) {
      axios
        .post("http://localhost:8888/", resultPost)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.message.data);
        });
    } else {
      axios
        .put(
          "http://localhost:8888/admin/updateproduct/",
          updateFormValues._id,
          resultPut
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.message.data);
        });
    }
  }

  /// button deleteProduct
  function deleteProduct(id) {
    console.log(id, "ta bort product");

    axios
      .delete(`http://localhost:8888/admin/delete/` + id)
      .then((response) => {
        //dispatch(getDataToReminderCalenderAction());
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message.data);
      });
  }

  /// button deleteProduct

  return (
    <div>
      <DisplayProducts
        deleteProduct={() => deleteProduct()}
        ProductImageUrl={ProductImageUrl}
        ProductPrice={ProductPrice}
        ProductName={ProductName}
        ProductDescription={ProductDescription}
        saveUpdate={saveUpdate}
        setUpdateFormValues={setUpdateFormValues}
        formProductImageUrl={formProductImageUrl}
        formProductDescription={formProductDescription}
        formProductPrice={formProductPrice}
        deleteProduct={deleteProduct}
        formProductName={formProductName}
        showPopup={showPopup}
        closePopup={() => closePopup()}
        openPopup={() => openPopup()}
      />

      <FromProduct
        ProductImageUrl={ProductImageUrl}
        formProductPrice={formProductPrice}
        formProductImageUrl={formProductImageUrl}
        formProductDescription={formProductDescription}
        ProductPrice={ProductPrice}
        ProductName={ProductName}
        ProductDescription={ProductDescription}
        saveInfo={saveInfo}
        postFormValues={postFormValues}
        formProductName={formProductName}
        //category={category}
      />
    </div>
  );
}
