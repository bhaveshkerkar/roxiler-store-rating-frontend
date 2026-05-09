import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const jsonUser = localStorage.getItem("user");
  const user = JSON.parse(jsonUser);

  console.log("protected route");
  console.log("user: ", user.role);

  return user.role == "admin" ? children : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
