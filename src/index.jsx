import { createBrowserRouter, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import App from "./routes/App";
import ExploreStores from "./components/ExploreStores/ExploreStores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore-stores", element: <ExploreStores /> },
    ],
  },
]);

export default router;
