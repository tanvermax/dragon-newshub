import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivetRoutes = ({ children }) => {
  const location = useLocation();
  console.log(location);
  
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivetRoutes;
