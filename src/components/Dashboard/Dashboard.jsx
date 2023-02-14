import { Grid } from "@mui/material";
import React from "react";
import { RentalIncomeSummary, TasksSummary } from "./components";
import {
  RentalIncomeSummaryProvider,
  RentalsSummaryProvider,
  TasksSummaryProvider,
} from "./providers";
import RentalsOccupancy from "./RentalsOccupancy/RentalsOccupancy";
import RentalsSummary from "./RentalsSummary/RentalsSummary";
import WelcomeUser from "./WelcomeUser/WelcomeUser";

function Dashboard() {
  return (
    <React.Fragment>
      <WelcomeUser />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TasksSummaryProvider>
            <TasksSummary />
          </TasksSummaryProvider>
        </Grid>
        <Grid item xs={6}>
          <RentalIncomeSummaryProvider>
            <RentalIncomeSummary />
          </RentalIncomeSummaryProvider>
        </Grid>
      </Grid>
      <RentalsOccupancy />
      <RentalsSummaryProvider>
        <RentalsSummary />
      </RentalsSummaryProvider>
    </React.Fragment>
  );
}

export default Dashboard;
