import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../Contexts/user";
import AdminPanel from "../pages/AdminPanel";

const AdminRoute = () => {
  const { currentUser } = useContext(UserContext);
  return currentUser ? <AdminPanel /> : <Navigate to="/Auth" />;
};

export default AdminRoute;
