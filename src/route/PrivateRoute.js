import { React, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../firebase/UserProvider";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        const id = props.match.params.id;
        if (!!currentUser.user && currentUser.user.uid === id) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
