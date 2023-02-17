import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { generateRentalData } from "../../../../../test/data/generateRentalsSummaryData";

function Rental() {
  const { id } = useParams();
  const [rental, setRental] = useState(generateRentalData() || {});

  console.log("Router param:", id);

  return (
    <Container>
      <Typography variant="h1">{rental.name}</Typography>
    </Container>
  );
}

export default Rental;
