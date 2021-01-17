import { React, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../firebase/UserProvider";
export const AdminRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser.IsAdmin === true && currentUser.user !== undefined) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
