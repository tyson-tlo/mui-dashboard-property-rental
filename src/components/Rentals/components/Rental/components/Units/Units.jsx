import { Container } from "@mui/material";
import { useContext } from "react";
import { GenericCard, GenericTable } from "../../../../../generic";
import { RentalDetailsContext } from "../../Rental";

function Units() {
  const { rental } = useContext(RentalDetailsContext);

  const basicSummary = `${rental.units.length} units | ${
    rental.units.filter((unit) => unit.status === "Occupied").length
  } Occupied | ${
    rental.units.filter((unit) => unit.status === "Vacant").length
  } Vacant`;

  return (
    <GenericCard title="Units" meta={basicSummary}>
      <Container style={{ maxHeight: "350px", overflowY: "scroll" }}>
        <GenericTable
          headers={["Name", "Rent", "Status"]}
          rows={rental.units.map(({ id, name, rent, status }) => {
            return { key: id, content: [name, rent, status] };
          })}
        />
      </Container>
    </GenericCard>
  );
}

export default Units;
