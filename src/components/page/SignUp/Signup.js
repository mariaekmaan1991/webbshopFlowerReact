import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import { signUp } from "../../../firebase/auth";

export function Signup({ history }) {
  const { register, handleSubmit, reset } = useForm();

  const [isLoading, setLoadning] = useState(false);

  const Submit = async (data) => {
    console.log(data);
    let newUser;
    setLoadning(true);
    try {
      newUser = await signUp(data);
      reset();
    } catch (error) {
      console.log(error);
    }

    if (newUser) {
      console.log(newUser.uid);
      history.push(`/profile/${newUser.uid}`);
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
            <div className="two fields">
              <div className="field">
                <label>
                  Namn
                  <input
                    type="text"
                    name="firstName"
                    placeholder="FirstName"
                    ref={register}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Efternamn
                  <input
                    type="text"
                    name="lastName"
                    placeholder="LastName"
                    ref={register}
                  />
                </label>
              </div>
            </div>
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
            <div className="field">
              <label>
                Adress
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  ref={register}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Telefoner
                <input
                  type="number"
                  name="phone"
                  placeholder="Telefoner"
                  ref={register}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Zip
                <input
                  type="number"
                  name="zip"
                  placeholder="zip"
                  ref={register}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Stad
                <input
                  type="text"
                  name="city"
                  placeholder="stad"
                  ref={register}
                />
              </label>
            </div>

            <div>
              <button className="ui primary button login" type="submit">
                Sign Up
              </button>
              <Link to="/login">log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
