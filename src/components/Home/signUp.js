import { React, useCallback, useState } from "react";
import { withRouter } from "react-router";
import { firebase } from "../firebase/firebase";

export const SignUp = ({ history }) => {
  const [pending, setPending] = useState(false);

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <label for="vehicle1">admin</label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);

//https://firebase.google.com/docs/auth/admin
