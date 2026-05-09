import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const role = localStorage.getItem("role");

  if (!isLoggedIn) {
    return <Navigate to="/user/login" />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/user/login" />;
  }

  return children;
};

export default ProtectedRoute;
