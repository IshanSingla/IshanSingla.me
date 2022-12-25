import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Contexts/user";

import Auth from "../pages/Auth";

const AuthRoute = () => {
  const { currentUser } = useContext(UserContext);

  return currentUser ? <Navigate to="/Admin" /> : <Auth />;
};

export default AuthRoute;
