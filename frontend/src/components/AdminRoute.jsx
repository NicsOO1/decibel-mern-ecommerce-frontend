import React from "react";
import { useAuth } from "../context/AuthContext";

const AdminRoute = () => {
  const { isAdmin, user } = useAuth();

  return user && isAdmin ? <outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
