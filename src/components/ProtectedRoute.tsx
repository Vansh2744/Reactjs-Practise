import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = { email: "vansh@gmail.com" };
  return <div>{user ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default ProtectedRoute;
