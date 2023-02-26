import { Container } from "@mui/material";
import { useState } from "react";
import generateRentalsSummaryData from "../../../test/data/generateRentalsSummaryData";
import { GenericCard, GenericTable } from "../generic";

function Requests() {
  const [requests, setRequests] = useState(
    generateRentalsSummaryData().reduce((acc, rental) => {
      return [
        ...acc,
        ...rental.units.reduce((ac, unit) => {
          return [
            ...ac,
            ...unit.requests.map((request) => ({
              ...request,
              unitName: unit.name,
            })),
          ];
        }, []),
      ];
    }, [])
  );

  console.log(requests);

  return (
    <GenericCard title="Requests">
      <GenericTable
        headers={["Description", "Unit", "Status"]}
        rows={requests.map(({ key: id, description, unitName, status }) => ({
          key: id,
          content: [description, unitName, status],
        }))}
      />
    </GenericCard>
  );
}

export default Requests;
