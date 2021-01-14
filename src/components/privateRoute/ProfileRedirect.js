import { React, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const ProfileRedirect = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(
    " finns currentUser, isAdmin ",
    currentUser.IsAdmin,
    currentUser.user
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        !currentUser.user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: currentUser.IsAdmin
                ? "/users"
                : `/profile/${currentUser.user}`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProfileRedirect;
