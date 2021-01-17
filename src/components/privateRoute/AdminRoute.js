import { React, useState, useEffect, useContext } from "react";

import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const AdminRoute = ({ component: RouteComponent, ...rest }) => {
  return <div></div>;
};

export default AdminRoute;
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
