import { React, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const ProfileRedirect = ({ component: RouteComponent, ...rest }) => {
  return (
    <div>x</div>
    // <Route
    //   // {...rest}
    //   // render={(props) =>
    //   //   !!currentUser.user ? (
    //   //     <RouteComponent {...props} />
    //   //   ) : (
    //   //     <Redirect
    //   //       to={{
    //   //         pathname: currentUser.IsAdmin
    //   //           ? "/admin"
    //   //           : `/profile/${currentUser.user}`,
    //   //         state: { from: props.location },
    //   //       }}
    //   //     />
    //   //   )
    //   }
    // />
  );
};

export default ProfileRedirect;
