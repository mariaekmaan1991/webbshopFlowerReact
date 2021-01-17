import { React, useCallback, useState } from "react";

import { useForm } from "react-hook-form";
import { signUp } from "./auth.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const SignUpUserCustomer = ({ history }) => {
  const [isLoading, setLoding] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    let newUser;
    setLoding(true);
    try {
      newUser = await signUp(data);
      reset();
    } catch (error) {
      console.log(error);
    }

    if (newUser) {
      history.push(`/profile/${newUser.uid}`);
    } else {
      setLoding(false);
    }
  };
  const formClassName = `ui form ${isLoading ? "loading" : ""}`;

  return (
    <div>
      <h1>Bli medlem</h1>
      <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input ref={register} name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input
            ref={register}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>

        <label>
          Namn
          <input
            ref={register}
            name="firstname"
            type="text"
            placeholder="Namn"
          />
        </label>
        <label>
          Förnamn
          <input
            ref={register}
            name="lastname"
            type="text"
            placeholder="Förnamn"
          />
        </label>
        <div>
          <label htmlFor="vehicle1">Bli medlem</label>
          <button type="submit">skicka</button>
          <Link to="/login">Login in</Link>
        </div>
      </form>
    </div>
  );
};

//https://firebase.google.com/docs/auth/admin
