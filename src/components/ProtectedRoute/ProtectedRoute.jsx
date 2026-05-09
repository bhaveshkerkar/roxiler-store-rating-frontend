import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const jsonUser = localStorage.getItem("user");
  const user = JSON.parse(jsonUser);

  if (user == null) {
    return <Navigate to="/user/login" />;
  } else if (user.role == "admin") {
    return children;
  }
};

export default ProtectedRoute;
