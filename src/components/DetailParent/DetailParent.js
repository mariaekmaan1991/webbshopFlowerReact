import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebase } from "../firebase/firebase";
import { Products } from "../ProductsParent/Products/Products";
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
  const [currentCart, setCurrentCart] = useState([]);
  const [ProductSize, setProductSize] = useState();
  const [ProductQuantity, setProductQuantity] = useState();

  useEffect(() => {}, []);

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

  function addCart(DetailProduct) {
    localBase
      .collection("users")
      .get()
      .then((users) => {
        // console.log("users:", users);
      });

    console.log(" finns currentCart", currentCart, currentCart.length);

    for (let i = 0; i < currentCart.length; i++) {
      console.log(currentCart[i].id);
      // if (
      //   currentCart[i].id === DetailProduct.id &&
      //   currentCart[i].size === DetailProduct.size
      // ) {
      //   alreadyExist = true;
      //   let h = currentCart[i].quantity;
      // }
    }
    console.log("läggt till cart:", DetailProduct);
    let newItem = {
      name: DetailProduct.name,
      id: DetailProduct.id,
      imageUrl: DetailProduct.imageUrl,
      price: DetailProduct.price,
      size: ProductSize,
      quantity: DetailProduct.quantity,
    };

    localBase.collection("users").add(newItem);
    //let newItems = [...cart, newItem];
    //setCart([...cart, newItem]);
  }

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

// varje gång webbplatsen laddas om så blir de tomt i LocalStorage
// varför för är inte LocalStorage synkat när man hämtar från LocalStorage
// vaför funkar inte all få tag i objeckten från LocalStorage
//https://www.youtube.com/watch?v=shLz_kmA68Q
