import { CreditCard, LocalAtm } from "@mui/icons-material";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function PaymentType({ paymentType }) {
  const types = {
    card: <CreditCard />,
    cash: <LocalAtm />,
  };
  return <React.Fragment>{types[paymentType]}</React.Fragment>;
}

function RecentPaymentItem({ amount, payment }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <PaymentType paymentType={payment.payment_method} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={amount} secondary={payment.tenantName} />
    </ListItem>
  );
}

export default RecentPaymentItem;
