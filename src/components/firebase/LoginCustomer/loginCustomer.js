import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LogIn } from "../auth";

export const LoginCustomer = (props) => {
  const [Isloading, setLoding] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const routeOnLogin = async (user) => {
    const token = await user.getIdTokenResult();
    if (token.claims.admin) {
      props.history.push("/admin");
    } else {
      props.history.push(`/profile/${user.uid}`);
    }
  };

  const onSubmit = async (data) => {
    let user;
    setLoding(true);
    try {
      user = await LogIn(data);
      console.log(user.uid);
      reset();
    } catch (error) {
      console.log(error);

      if (user) {
        routeOnLogin(user);
      } else {
        setLoding(false);
      }
    }
  };
  return (
    <div>
      {Isloading}
      <h1>Logga in </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div>
          <label htmlFor="vehicle1">admin</label>
          <button type="submit">Logga in</button>
          <Link to="/signup">Bli medlem</Link>
        </div>
      </form>
    </div>
  );
};

//https://firebase.google.com/docs/auth/admin
