import React from "react";
import RentalsSummaryProvider from "./providers/RentalsSummaryProvider";
import RentalsOccupancy from "./RentalsOccupancy/RentalsOccupancy";
import RentalsSummary from "./RentalsSummary/RentalsSummary";
import WelcomeUser from "./WelcomeUser/WelcomeUser";

function Dashboard() {
  return (
    <React.Fragment>
      <WelcomeUser />
      <RentalsOccupancy />
      <RentalsSummaryProvider>
        <RentalsSummary />
      </RentalsSummaryProvider>
    </React.Fragment>
  );
}

export default Dashboard;
