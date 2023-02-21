import { Card, CardContent, Typography } from "@mui/material";

function GenericCard({ title, meta, children }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: "40px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
          <span style={{ color: "gray", fontSize: "1rem", marginLeft: "10px" }}>
            {meta}
          </span>
        </Typography>
      </CardContent>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default GenericCard;
