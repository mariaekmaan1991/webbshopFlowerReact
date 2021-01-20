import firebase from "firebase/app";
import "firebase/auth";
import { createUserNoMemberDocument, createUserDocument } from "./user";

export const signUp = async ({
  email,
  password,
  phone,
  address,
  zip,
  city,
}) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  const user = resp.user;
  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    address: address,
    city: city,
    zip: zip,
    phone: phone,
  };

  // await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  await createUserDocument(userProfile); //här hämtas input inlogg
  return userProfile;
};

let password = "00000000";
export const SignUpDontBeMember = async ({
  firstName,
  lastName,
  email,
  phone,
  address,
  zip,
  city,
}) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  let userProfile = {
    user: user.uid,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    address: address,
    zip: zip,
    city: city,
    member: false,
  };

  await createUserNoMemberDocument(userProfile); //här hämtas input inlogg
  return user;
};

export const LogIn = async ({ email, password }) => {
  const resp = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return resp.user;
};
