import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import useNavigationRoutes from "../../../navigation/hooks/useNavigationRoutes";
import { useContext } from "react";
import { RentalsContext } from "../../Rentals";

function RentalsList() {
  const { rentals } = useContext(RentalsContext);
  const navigateTo = useNavigationRoutes();
  return (
    <Container>
      <Typography variant="h4">Rentals</Typography>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Property Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Applications</TableCell>
              <TableCell>Requests</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rentals.map((rental) => (
              <TableRow
                key={rental.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span onClick={navigateTo.rental(rental.id)}>
                    {rental.name}
                  </span>
                </TableCell>
                <TableCell>{rental.location}</TableCell>
                <TableCell>{rental.applications.length}</TableCell>
                <TableCell>{rental.requests}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default RentalsList;
