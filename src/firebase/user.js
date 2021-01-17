import "firebase/auth";

import { firebase } from "./config";
export const createUserDocument = async (user) => {
  const db = firebase.firestore();

  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    specialty: "",
    ip: "",
  };
  await db.collection("User").doc(user.uid).set(userProfile);
};

export const updateUserDocument = async (user) => {
  const db = firebase.firestore();
  await db.doc(`/User/${user.uid}`).update(user);
};

export const uploadImage = (id, files) => {
  return new Promise((resolve, reject) => {
    // create file reference
    const filePath = `User/${id}/profile-image`;
    const fileRef = firebase.storage().ref().child(filePath);

    const uploadTask = fileRef.put(files);
    console.log(uploadTask);

    uploadTask.on(
      "state_changed",
      null,
      (error) => reject(error),
      () => {
        resolve(uploadTask.snapshot.ref);
      }
    );
  });
};

export const getDownloadUrl = (userId) => {
  const filePath = `User/${userId}/profile-image`;
  return firebase.storage().ref().child(filePath).getDownloadURL();
};
