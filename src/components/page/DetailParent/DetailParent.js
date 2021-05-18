import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebase } from "../../../firebase/config";
import { DetailProductPrint } from "./DetailProductPrint/DetailProductPrint";
import Localbase from "localbase";

export function DetailParent({ cart, setCart, setCart3 }) {
  let { id } = useParams();

  const db = firebase.firestore();
  let localBase = new Localbase("db");

  function saveInfo(e) {
    e.preventDefault();
  }
  const [DetailProductList, setDetailProductList] = useState([]);

  const [productSize, setProductSize] = useState({ size: "XS" });
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    const data = db.collection("Product").doc(id);
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
    setProductQuantity(DetailProductList.quantity--);
  }

  function handleProductQuantityIncrease(e, DetailProductList) {
    setProductQuantity(DetailProductList.quantity++);
  }

  //console.log(ProductQuantity, "finns ProductQuantity");

  function addCart(DetailProduct) {
    localBase
      .collection("Products")
      .get()
      .then((users) => {
        // console.log("users:", users);
      });

    // for (let i = 0; i < currentCart.length; i++) {
    //   console.log(currentCart[i].id);
    //   // if (
    //   //   currentCart[i].id === DetailProduct.id &&
    //   //   currentCart[i].size === DetailProduct.size
    //   // ) {
    //   //   alreadyExist = true;
    //   //   let h = currentCart[i].quantity;
    //   // }
    // }
    console.log("läggt till cart:", productSize);

    let newItem = {
      name: DetailProduct.name,
      id: DetailProduct.id,
      imageUrl: DetailProduct.imageUrl,
      price: DetailProduct.price,
      size: productSize,
      quantity: DetailProduct.quantity,
    };
    console.log("läggt till cart:", newItem);
    localBase.collection("Products").add(newItem);
    //let newItems = [...cart, newItem];
    //setCart([...cart, newItem]);
  }

  return (
    <DetailProductPrint
      addCart={addCart}
      saveInfo={saveInfo}
      productSize={productSize}
      //handleProductSize={() => handleProductSize()}
      handleProductSize={handleProductSize}
      DetailProductList={DetailProductList}
      ProductSize={() => productSize()}
      handleProductQuantityIncrease={handleProductQuantityIncrease}
      handleProductQuantityDecrease={handleProductQuantityDecrease}
      ProductQuantity={productQuantity}
    />
  );
}

// varje gång webbplatsen laddas om så blir de tomt i LocalStorage
// varför för är inte LocalStorage synkat när man hämtar från LocalStorage
// vaför funkar inte all få tag i objeckten från LocalStorage
//https://www.youtube.com/watch?v=shLz_kmA68Q
