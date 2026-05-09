import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import ExploreStores from "./components/ExploreStores/ExploreStores";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import OwnerDashboard from "./components/Dashboard/OwnerDashboard";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import App from "./routes/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/explore-stores",
        element: (
          <ProtectedRoute allowedRole="user">
            <ExploreStores />
          </ProtectedRoute>
        ),
      },

      {
        path: "/user/login",
        element: <Login />,
      },

      {
        path: "/user/signup",
        element: <Signup />,
      },

      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/owner/dashboard",
        element: (
          <ProtectedRoute allowedRole="owner">
            <OwnerDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
