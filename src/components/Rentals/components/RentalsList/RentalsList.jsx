import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import useNavigationRoutes from "../../../navigation/hooks/useNavigationRoutes";
import React, { useContext } from "react";
import { RentalsContext } from "../../Rentals";
import { GenericCard, GenericTable } from "../../../generic";

function RentalsList() {
  const { rentals } = useContext(RentalsContext);
  const navigateTo = useNavigationRoutes();
  return (
    <React.Fragment>
      <GenericCard title="Rentals">
        <GenericTable
          headers={["Property Name", "Location", "Applications", "Requests"]}
          rows={rentals.map(
            ({ id, name, location, applications, requests }) => {
              return {
                key: id,
                content: [
                  <span onClick={navigateTo.rental(id)}>{name}</span>,
                  location,
                  applications.length,
                  requests,
                ],
              };
            }
          )}
        />
      </GenericCard>
    </React.Fragment>
  );
}

export default RentalsList;
