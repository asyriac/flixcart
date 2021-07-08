import { Route, Redirect, useLocation } from "react-router-dom";

import { useAuthContext } from "../contexts/auth-context";

export function PrivateRoute({ path, ...props }) {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) return <Route {...props} path={path} />;

  return (
    <Redirect
      to={{
        pathname: "/login",
        state: {
          from: props.location.pathname,
        },
      }}
    />
  );
}
