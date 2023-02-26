import { Container, Typography } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateRentalData } from "../../../../../test/data/generateRentalsSummaryData";
import { Applications, RentalUnits, Requests, Units } from "./components";

export const RentalDetailsContext = createContext();

function Rental() {
  const { rentalId } = useParams();
  const [rental, setRental] = useState(generateRentalData());

  return (
    <RentalDetailsContext.Provider value={{ rental }}>
      <Typography variant="h4" mb={3}>
        {rental.name}
      </Typography>
      {/* <RentalUnits /> */}
      <Requests />
      <Applications />
      <Units />
    </RentalDetailsContext.Provider>
  );
}

export default Rental;
