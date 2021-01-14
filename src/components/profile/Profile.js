import { React, useState, useEffect, useContext } from "react";
import { firebase } from "../firebase/firebase";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const db = firebase.firestore();
  let { id } = useParams();

  const [ProfileUser, setProfileUser] = useState();

  useEffect(() => {
    // const data = db.collection("maria").doc(id);
    // data
    //   .get()
    //   .then(function (doc) {
    //     if (doc.exists) {
    //       // console.log("Document data:", doc.data());
    //       setProfileUser({ ...doc.data(), id: doc.id });
    //     } else {
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting document:", error);
    //   });
  }, []);

  return (
    <div>
      <div>{ProfileUser}</div>
    </div>
  );
};

//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
