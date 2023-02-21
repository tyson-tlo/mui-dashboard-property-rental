import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

function statusColor(status) {
  switch (status) {
    case "Available":
      return "green";
    case "Occupied":
      return "red";
    default:
      return "grey";
  }
}

function UnitDetailsRow({ unit }) {
  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#fafafa",
        borderRadius: "5px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            variant="h6"
            display="flex"
            justifyContent="space-between"
          >
            {unit.name}{" "}
            <small style={{ color: statusColor(unit.status) }}>
              {unit.status}
            </small>
          </Typography>
          <Typography variant="small" color="grey">
            {unit.meta}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="small" display="block">
            Unit Description
          </Typography>
          <Typography variant="small" color="grey">
            {unit.bedrooms} bedrooms, {unit.bathrooms} bathrooms, with{" "}
            {unit.appliances.join(", ")}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default UnitDetailsRow;
