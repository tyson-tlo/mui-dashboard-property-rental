import { Button, Typography } from "@mui/material";
import { useState } from "react";
import generateTasksData from "../../../test/data/generateTasksData";
import { GenericCard, GenericTable } from "../generic";

export default function Tasks() {
  const [tasks, setTasks] = useState(generateTasksData() || []);

  return (
    <GenericCard title="Tasks" headerAction={<Button>Add Task</Button>}>
      <GenericTable
        headers={["Name", "Description", "Address", "Status"]}
        rows={tasks.map((task) => ({
          key: task.id,
          content: [
            task.name,
            task.description,
            task.property.address,
            task.status,
          ],
        }))}
      />
    </GenericCard>
  );
}
