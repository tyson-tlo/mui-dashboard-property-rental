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
      <Container>
        <GenericTable
          headers={["Name", "Email", "Phone", "Status"]}
          rows={rental.applications.map((application) => {
            return {
              key: application.id,
              content: [
                application.name,
                application.email,
                application.phone,
                application.status,
              ],
            };
          })}
        />
      </Container>
    </GenericCard>
  );
}

export default Applications;
