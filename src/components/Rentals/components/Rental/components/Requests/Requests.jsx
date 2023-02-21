import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { GenericCard } from "../../../../../generic";
import { RentalDetailsContext } from "../../Rental";

function Requests() {
  const { rental } = useContext(RentalDetailsContext);

  const requests = rental.units
    .map((unit) => {
      return unit.requests.map((request) => {
        return {
          ...request,
          unitName: unit.name,
        };
      });
    })
    .flat()
    .sort((a, b) => {
      if (a.unitName === b.unitName) {
        return a.status > b.status ? 1 : -1;
      } else {
        return a.unitName > b.unitName ? 1 : -1;
      }
    });

  return (
    <GenericCard title="Requests" meta={`${requests.length} total requests`}>
      <Container style={{ maxHeight: "350px", overflowY: "scroll" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow
                key={request.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {request.description}
                </TableCell>
                <TableCell align="right">{request.unitName}</TableCell>
                <TableCell align="right">{request.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </GenericCard>
  );
}

export default Requests;
