import { React, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const ProfileRedirect = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: isAdmin ? "/users" : `/profile/${user.uid}`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProfileRedirect;
