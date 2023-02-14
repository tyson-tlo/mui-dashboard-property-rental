import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import PieChart from "../../generic/PieChart/PieChart";

function ColorBar({ color, width = 100 }) {
  return (
    <div
      style={{ backgroundColor: color, width: `${width}%`, height: 15 }}
    ></div>
  );
}

function RentalsOccupancy() {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Occupancy{" "}
        </Typography>
        <Grid container>
          <Grid item xs={2} />
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <div>
              <Typography variant="h5" component="div">
                65% Occupied
              </Typography>
              <ColorBar color="#1C9368" width={65} />
            </div>
            <div>
              <Typography variant="h5" component="div">
                35% Unoccupied
              </Typography>
              <ColorBar color="#C13C37" width={35} />
            </div>
          </Grid>
          <Grid item xs={2}>
            <PieChart />
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
}

export default RentalsOccupancy;
