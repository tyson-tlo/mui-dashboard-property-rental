import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import PieChart from "../../generic/PieChart/PieChart";

function RentalsOccupancy() {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Occupancy{" "}
        </Typography>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <PieChart />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
}

export default RentalsOccupancy;
