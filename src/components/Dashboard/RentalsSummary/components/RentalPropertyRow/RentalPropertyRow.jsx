import {
  DoorFront,
  FormatListBulleted,
  RingVolumeOutlined,
  Web,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";
import "./RentalPropertyRow.css";

function RentalPropertyRow({ rental }) {
  return (
    <React.Fragment>
      <div className="RentalPropertyRow">
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <img src={rental.image} />
          </Grid>
          <Grid item xs={11}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">
                  {rental.name}{" "}
                  <small>
                    {rental.city}, {rental.state}
                  </small>
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <Web color="disabled" fontSize="tiny" /> {rental.applications}{" "}
                applications
              </Grid>
              <Grid item xs={3}>
                <RingVolumeOutlined color="disabled" fontSize="tiny" />{" "}
                {rental.requests} requests
              </Grid>
              <Grid item xs={3}>
                <FormatListBulleted color="disabled" fontSize="tiny" />{" "}
                {rental.tasks} tasks
              </Grid>
              <Grid item xs={3}>
                <DoorFront color="disabled" fontSize="tiny" /> {rental.units}{" "}
                units
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default RentalPropertyRow;
