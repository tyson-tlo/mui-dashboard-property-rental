import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";

function GenericTable({ headers, rows, style }) {
  return (
    <Table sx={{ minWidth: 650, ...style }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.key}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {row.content.map((content) => (
              <TableCell>{content}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

GenericTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  style: PropTypes.object,
};

GenericTable.defaultProps = {
  style: {},
};

export default GenericTable;
