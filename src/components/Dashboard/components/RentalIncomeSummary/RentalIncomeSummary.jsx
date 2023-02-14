import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useRentalIncomeSummaryProvider } from "../../providers/RentalIncomeSummaryProvider";
import { RecentPaymentItem } from "./components";

function RentalIncomeSummary() {
  const {
    summary: { totalIncome, recentPayments },
  } = useRentalIncomeSummaryProvider();
  const usDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card sx={{ minWidth: 275, marginBottom: "40px" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: "31.5px" }}
        >
          Rental Income{" "}
          <span style={{ color: "gray", fontSize: "1rem" }}>
            {totalIncome} Last 4 weeks
          </span>
        </Typography>
        <List sx={{ height: "250px", overflowY: "scroll" }}>
          {recentPayments.map((payment) => (
            <RecentPaymentItem
              key={payment.id}
              payment={payment}
              amount={usDollar.format(payment.amount)}
            />
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
}

export default RentalIncomeSummary;
