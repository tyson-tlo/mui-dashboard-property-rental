import { createBrowserRouter } from "react-router-dom";
import { Applications, Requests } from "../components";
import Authenticated from "../components/authentication/Authenticated/Authenticated";
import Login from "../components/authentication/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Rental from "../components/Rentals/components/Rental/Rental";
import Rentals from "../components/Rentals/Rentals";
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
  {
    path: "rentals/*",
    element: <Authenticated children={<Rentals />} />,
  },
  {
    path: "applications",
    element: <Authenticated children={<Applications />} />,
  },
  {
    path: "requests",
    element: <Authenticated children={<Requests />} />,
  },
  {
    path: "tasks",
    element: <Authenticated children={<div>Tasks</div>} />,
  },
]);

export default router;
