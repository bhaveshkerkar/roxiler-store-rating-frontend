import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import ExploreStores from "./components/ExploreStores/ExploreStores";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import OwnerDashboard from "./components/Dashboard/OwnerDashboard";

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
        element: <ExploreStores />,
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
        element: <AdminDashboard />,
      },

      {
        path: "/owner/dashboard",
        element: <OwnerDashboard />,
      },
    ],
  },
]);

export default router;
