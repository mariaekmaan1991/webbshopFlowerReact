// import { React, useState, useReducer, useEffect } from "react";

// export function ProductChangeProductQuantity({ something2, productQuantity }) {
//   const [productQuantity, setProductQuantity] = useState(productQuantity);

//   function sendTheNumber() {
//     something2(productQuantity);
//   }

//   function handleProductQuantityDecrease(e, product) {
//     setProductQuantity(product - 1);
//   }

//   function handleProductQuantityIncrease2(e, product) {
//     setProductQuantity(product * 2);

//     hej();
//   }
//   console.log(productQuantity);

//   function hej() {
//     // for (let i = 0; i < productQuantity.length; i++) {
//     //   console.log(i);
//     // }
//   }

//   return (
//     <div>
//       {productQuantity}
//       <button
//         type="submit"
//         name="tröja"
//         onClick={(e) => {
//           handleProductQuantityDecrease(e, productQuantity);
//         }}
//       >
//         minska
//       </button>
//       <button
//         type="submit"
//         name="tröja"
//         onClick={(e) => {
//           handleProductQuantityIncrease2(e, productQuantity);
//         }}
//       >
//         öka
//       </button>
//       <button
//         type="submit"
//         name="tröja"
//         onClick={(e) => {
//           sendTheNumber();
//         }}
//       >
//         save
//       </button>
//     </div>
//   );
// }
// // const options = [
// //   { value: "XS", label: "Size" },
// //   { value: "S", label: "Size" },
// //   { value: "M", label: "Size" },
// //   { value: "L", label: "Size" },
// // ];

// // let h = options.map((m) => {
// //   let hej = { size: m.size, value: m.value };
// //   return hej;
// // });
