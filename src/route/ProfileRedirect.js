import { React, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import { useSession } from "../../firebase/UserProvider";
import { UserContext } from "../firebase/UserProvider";
export const ProfileRedirect = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(UserContext);
  // const { user, isAdmin } = useSession();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser.user === null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathnane: currentUser.IsAdmin
                ? "/adminuser"
                : `/profile/${currentUser.user.uid}`,
              state: { from: props.location },
            }}
          ></Redirect>
        )
      }
    />
  );
};
