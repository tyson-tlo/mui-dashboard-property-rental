import { createBrowserRouter } from "react-router-dom";
import { Applications, Requests } from "../components";
import Authenticated from "../components/authentication/Authenticated/Authenticated";
import Login from "../components/authentication/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Main from "../components/Main";
import Rental from "../components/Rentals/components/Rental/Rental";
import Rentals from "../components/Rentals/Rentals";
import Settings from "../components/Settings/Settings";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Authenticated children={<Main />} />,
  },
]);

export default router;
