import firebase from "firebase/app";
import "firebase/auth";
export const signUp = async ({ firstname, lastname, email, password }) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  await user.updateProfile({ displayName: `${firstname}``${lastname}` });
  return user;
};

export const logout = () => {
  firebase.auth().signOut();
};

export const LogIn = async ({ email, password }) => {
  const resp = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return resp.user;
};
