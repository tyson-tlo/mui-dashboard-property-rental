import { List } from "@mui/material";
import { useTasksSummaryProvider } from "../../../../providers/TasksSummaryProvider";
import { TaskSummaryItem } from "../../components";
import "../TasksList.css";

function MyTasks() {
  const { myTasks } = useTasksSummaryProvider();
  return (
    <div className="TasksList">
      <List>
        {myTasks.map((task) => (
          <TaskSummaryItem key={task.id} task={task} />
        ))}
      </List>
    </div>
  );
}

export default MyTasks;
