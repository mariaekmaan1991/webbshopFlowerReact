import { React, useState, useEffect, useContext } from "react";

import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const AdminRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser, isAdmin } = useContext(AuthContext);

  console.log(" finns currentUser, isAdmin ", currentUser, isAdmin);
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!!currentUser && isAdmin) {
          <RouteComponent {...routeProps} />;
        } else {
          <Redirect to={"/login"} />;
        }
      }}
    />
  );
};

export default AdminRoute;
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
