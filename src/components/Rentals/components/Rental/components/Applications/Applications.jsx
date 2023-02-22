import { Container } from "@mui/material";
import { useContext } from "react";
import { GenericCard, GenericTable } from "../../../../../generic";
import { RentalDetailsContext } from "../../Rental";

function Applications() {
  const { rental } = useContext(RentalDetailsContext);

  return (
    <GenericCard
      title="Applications"
      meta={`${rental.applications.length} total applications`}
    >
      <Container style={{ maxHeight: "350px", overflowY: "scroll" }}>
        <GenericTable
          headers={["Name", "Email", "Phone", "Status"]}
          rows={rental.applications.map(
            ({ id, name, email, phone, status }) => {
              return {
                key: id,
                content: [name, email, phone, status],
              };
            }
          )}
        />
      </Container>
    </GenericCard>
  );
}

export default Applications;
