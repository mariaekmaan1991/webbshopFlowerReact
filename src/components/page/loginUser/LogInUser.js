import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import { LogIn } from "../../../firebase/auth";

export function LogInUser({ history }) {
  const { register, handleSubmit, reset } = useForm();

  const [isLoading, setLoadning] = useState(false);
  const routeOnLogin = async (user) => {
    const token = await user.getIdTokenResult();
    if (token.claims.IsAdmin) {
      history.push("/adminuser");
    } else {
      history.push(`/profile/${user.uid}`);
    }
  };

  const Submit = async (data) => {
    let user;
    setLoadning(true);
    try {
      user = await LogIn(data);
      reset();
    } catch (error) {
      console.log(error);
    }

    if (user) {
      routeOnLogin(user);
    } else {
      setLoadning(false);
    }
  };

  const formClassName = `ui form ${isLoading ? "loading" : ""}`;
  return (
    <div className="Login-Main-Container">
      <div className="Login-InnerContainer">
        <form className={formClassName} onSubmit={handleSubmit(Submit)}>
          <div className="Login-InnerContainer-field">
            <label className="Login-InnerContainer-Label">
              Email
              <input
                className="Login-InnerContainer-Input"
                type="email"
                name="email"
                placeholder="Email"
                ref={register}
              />
            </label>
          </div>
          <div className="Login-InnerContainer-field">
            <label className="Login-InnerContainer-Label">
              Password
              <input
                className="Login-InnerContainer-Input"
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
              />
            </label>
          </div>

          <div className="Login-Container-Button-Sumbit">
            <div className="Login-InnerContainer-Button-Sumbit"></div>
            <button className="button-login" type="submit">
              log in
            </button>
            <div className="Login-InnerContainer-Button-Sumbit">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
