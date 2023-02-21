import { createContext, useState } from "react";
import generateRentalsSummaryData from "../../../test/data/generateRentalsSummaryData";
import { Rental, RentalsList } from "./components";
import { Route, Routes } from "react-router-dom";

export const RentalsContext = createContext();

function Rentals() {
  const [rentals, setRentals] = useState(generateRentalsSummaryData(30));

  return (
    <RentalsContext.Provider value={{ rentals }}>
      <Routes>
        <Route index element={<RentalsList />} />
        <Route path=":rentalId/*" element={<Rental />} />
      </Routes>
    </RentalsContext.Provider>
  );
}

export default Rentals;
