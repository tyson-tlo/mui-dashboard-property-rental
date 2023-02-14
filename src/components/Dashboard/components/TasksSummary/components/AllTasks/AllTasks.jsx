import { List } from "@mui/material";
import { useTasksSummaryProvider } from "../../../../providers/TasksSummaryProvider";
import { TaskSummaryItem } from "../../components";
import "../TasksList.css";

function AllTasks() {
  const { tasks } = useTasksSummaryProvider();
  return (
    <div className="TasksList">
      <List>
        {tasks.map((task) => (
          <TaskSummaryItem key={task.id} task={task} />
        ))}
      </List>
    </div>
  );
}

export default AllTasks;
