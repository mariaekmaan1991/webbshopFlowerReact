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
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(Submit)}>
            <div className="field">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={register}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register}
                />
              </label>
            </div>
            <div>
              <button className="buttonlogin" type="submit">
                log in
              </button>
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
