import { PieChart as PC } from "react-minimal-pie-chart";

function PieChart() {
  return (
    <PC
      totalValue={100}
      data={[
        { title: "Occupied", value: 65, color: "#1C9368" },
        { title: "Unoccupied", value: 35, color: "#C13C37" },
      ]}
    />
  );
}

export default PieChart;
