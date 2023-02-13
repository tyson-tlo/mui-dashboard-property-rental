import { createBrowserRouter } from "react-router-dom";
import Authenticated from "../components/authentication/Authenticated/Authenticated";
import Login from "../components/authentication/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Settings from "../components/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Authenticated children={<Dashboard />} />,
  },
  {
    path: "settings",
    element: <Authenticated children={<Settings />} />,
  },
]);

export default router;
