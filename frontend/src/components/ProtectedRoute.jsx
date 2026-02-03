import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user, loadingAuth } = useAuth();

  if (loadingAuth) {
    return <div className="text-center mt-10">Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
