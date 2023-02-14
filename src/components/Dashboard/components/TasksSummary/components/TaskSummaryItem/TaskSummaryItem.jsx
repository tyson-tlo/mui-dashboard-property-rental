import { Image as ImageIcon } from "@mui/icons-material";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

function TaskSummaryItem({ task }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{task.icon || <ImageIcon />}</Avatar>
      </ListItemAvatar>
      <div>
        <ListItemText primary={task.name} secondary={task.assignedTo} />
        <ListItemText secondary={task.description} />
      </div>
    </ListItem>
  );
}

export default TaskSummaryItem;
