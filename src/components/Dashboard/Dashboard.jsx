import React from "react";
import { useUserProvider } from "../../providers/UserProvider";
import WelcomeUser from "./WelcomeUser/WelcomeUser";

function Dashboard() {
  return (
    <React.Fragment>
      <WelcomeUser />
    </React.Fragment>
  );
}

export default Dashboard;
