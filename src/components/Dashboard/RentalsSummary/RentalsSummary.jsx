import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRentalsSummaryProvider } from "../providers/RentalsSummaryProvider";
import { RentalPropertyRow } from "./components";

function RentalsSummary() {
  const { rentals } = useRentalsSummaryProvider();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Rentals{" "}
          <span style={{ color: "gray", fontSize: "1rem" }}>
            {rentals.length} Properties
          </span>
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          maxHeight: 350,
          overflowY: "auto",
          boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <Stack spacing={2}>
          {rentals.map((rental) => {
            return <RentalPropertyRow key={rental.id} rental={rental} />;
          })}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
}

export default RentalsSummary;
