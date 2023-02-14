import {
  Button,
  Card,
  CardActions,
  CardContent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTasksSummaryProvider } from "../../providers/TasksSummaryProvider";
import { AllTasks, MyTasks } from "./components";

function TasksSummary() {
  const { tasksCount } = useTasksSummaryProvider();
  const [tab, setTab] = useState(0);

  return (
    <Card sx={{ minWidth: 275, marginBottom: "40px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Tasks{" "}
          <span style={{ color: "gray", fontSize: "1rem" }}>
            {tasksCount} Tasks
          </span>
        </Typography>
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          aria-label="Tabs Tasks"
        >
          <Tab label="All Tasks" />
          <Tab label="My Tasks" />
        </Tabs>
        {tab === 0 && <AllTasks />}
        {tab === 1 && <MyTasks />}
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
}

export default TasksSummary;
