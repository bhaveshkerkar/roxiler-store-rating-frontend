import { createBrowserRouter, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import App from "./routes/App";

const router = createBrowserRouter([
  {
    path: "/roxiler",
    element: <App />,
    children: [{ path: "/roxiler", element: <Home /> }],
  },
]);

export default router;
