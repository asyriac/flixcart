import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth-context";
import Loading from "../../Loading/Loading";

const Logout = () => {
  const { initialLoading, logoutUser } = useAuthContext();

  useEffect(() => {
    logoutUser();
  }, [dispatch]);

  if (initialLoading) return <Loading />;

  return <Redirect replace to="/login" />;
};

export default Logout;
