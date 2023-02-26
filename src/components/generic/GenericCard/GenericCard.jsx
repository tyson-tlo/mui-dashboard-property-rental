import { Button, Card, CardContent, Typography } from "@mui/material";

function GenericCard({ title, headerAction = undefined, meta, children }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: "40px" }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div">
          {title}
          <span style={{ color: "gray", fontSize: "1rem", marginLeft: "10px" }}>
            {meta}
          </span>
        </Typography>
        {headerAction ? headerAction : null}
      </CardContent>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default GenericCard;
