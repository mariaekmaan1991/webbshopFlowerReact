import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebase } from "../firebase/firebase";
import { Products } from "../ProductsParent/Products/Products";
import { DetailProductPrint } from "./DetailProductPrint/DetailProductPrint";
export function DetailParent({ cart, setCart }) {
  let { id } = useParams();
  const db = firebase.firestore();

  function saveInfo(e) {
    e.preventDefault();
  }
  const [DetailProductList, setDetailProductList] = useState([]);
  const [currentCart, setCurrentCart] = useState();
  const [ProductSize, setProductSize] = useState();
  const [ProductQuantity, setProductQuantity] = useState();
  let currentCart3 = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    if (currentCart3) {
      setCurrentCart(currentCart3);
    }
  }, [currentCart3]);

  useEffect(() => {
    const data = db.collection("maria").doc(id);
    data
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          setDetailProductList({ ...doc.data(), id: doc.id });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  function handleProductSize(e) {
    setProductSize(e.target.value);
  }

  function handleProductQuantityDecrease(e, DetailProductList) {
    let h = DetailProductList.quantity--;
    setProductQuantity(h);
  }

  function handleProductQuantityIncrease(e, DetailProductList) {
    let h = DetailProductList.quantity++;
    setProductQuantity(h);
  }

  //console.log(ProductQuantity, "finns ProductQuantity");
  console.log(currentCart, "##");
  function addCart(DetailProduct) {
    let alreadyExist = false;
    console.log(currentCart, "##");
    for (let i = 0; i < currentCart + 1; i++) {
      console.log(currentCart[i]);
      // if (
      //   currentCart[i].id === DetailProduct.id &&
      //   currentCart[i].size === DetailProduct.size
      // ) {
      //   alreadyExist = true;
      //   let h = currentCart[i].quantity;
      // }

      // console.log("läggt till cart:", DetailProduct);
      // let newItem = {
      //   name: DetailProduct.name,
      //   id: DetailProduct.id,
      //   imageUrl: DetailProduct.imageUrl,
      //   price: DetailProduct.price,
      //   size: ProductSize,
      //   quantity: DetailProduct.quantity,
      // };
      // let newItems = [...cart, newItem];
      // setCart(newItems);
    }
  }

  console.log(currentCart, "hj");

  return (
    <DetailProductPrint
      addCart={addCart}
      saveInfo={saveInfo}
      //handleProductSize={() => handleProductSize()}
      handleProductSize={handleProductSize}
      DetailProductList={DetailProductList}
      ProductSize={() => ProductSize()}
      handleProductQuantityIncrease={handleProductQuantityIncrease}
      handleProductQuantityDecrease={handleProductQuantityDecrease}
      ProductQuantity={ProductQuantity}
    />
  );
}
//https://www.youtube.com/watch?v=shLz_kmA68Q
