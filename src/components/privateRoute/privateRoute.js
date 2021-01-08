import { React, useState, useEffect, useContext } from "react";

import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Home/AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
