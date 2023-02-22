import { Container, Typography } from "@mui/material";
import { useState } from "react";
import generateRentalsSummaryData from "../../../test/data/generateRentalsSummaryData";
import { GenericCard, GenericTable } from "../generic";

function Applications() {
  const [rentals, setRentals] = useState(generateRentalsSummaryData());

  const applications = rentals.reduce((acc, rental) => {
    return [...acc, ...rental.applications];
  }, []);

  console.log("applications: ", applications);

  return (
    <Container>
      <GenericCard title="Applications">
        <GenericTable
          headers={["Name", "Email", "Phone", "Status"]}
          rows={applications.map(({ id, name, email, phone, status }) => {
            return {
              key: id,
              content: [name, email, phone, status],
            };
          })}
        />
      </GenericCard>
    </Container>
  );
}

export default Applications;
