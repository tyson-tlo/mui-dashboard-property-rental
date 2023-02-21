import { Button, Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { RentalDetailsContext } from "../../Rental";
import { UnitDetailsRow } from "./components";

function RentalUnits() {
  const { rental } = useContext(RentalDetailsContext);

  return (
    <Card>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div">
          Rental Units
        </Typography>
        <Button>Add a Unit</Button>
      </CardContent>
      <CardContent>
        {rental.units.map((unit) => {
          return <UnitDetailsRow key={unit.id} unit={unit} />;
        })}
      </CardContent>
    </Card>
  );
}

export default RentalUnits;
