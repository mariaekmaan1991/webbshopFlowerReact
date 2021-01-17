import { React, useState, useEffect, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <div></div>
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     // const id = props.match.params.id;
    //     if (!!currentUser.user && currentUser.IsAdmin) {
    //       return <RouteComponent {...props} />;
    //     } else {
    //       return <Redirect to="/login" />;
    //     }
    //   }}
  );
};

export default PrivateRoute;

//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
