import { Route,  Redirect, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/auth-context";

export function PrivateRoute({ path, ...props }) {
  const { loggedIn } = useAuth();

  if(loggedIn)
  return (
    <Route {...props} path={path} />
  )
  
  return(
    <Redirect to={{
        pathname: "/login",
        state: {
            from: props.location.pathname
        }
    }}/>
  );
}
