import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../firebase/auth/auth.util";

export default function AdminPanel() {
  let navigate = useNavigate();
  var logout = (e) => {
    e.preventDefault();
    signOutUser();
    navigate("/Auth");
  };
  useEffect(() => {
    document.title = "Admin Panel | IshanSingla's Portfolio";
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <button onClick={logout} className="logoutBtn">
        Logout
      </button>
    </div>
  );
}
