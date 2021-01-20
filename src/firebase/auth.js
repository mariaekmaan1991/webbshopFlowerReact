import firebase from "firebase/app";
import "firebase/auth";
import { createUserNoMemberDocument, createUserDocument } from "./user";

export const signUp = async ({
  firstName,
  lastName,
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

  let userProfile = {
    user: user.uid,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    address: address,
    zip: zip,
    city: city,
    member: true,
  };

  await createUserDocument(userProfile); //här hämtas input inlogg
  return user;
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
