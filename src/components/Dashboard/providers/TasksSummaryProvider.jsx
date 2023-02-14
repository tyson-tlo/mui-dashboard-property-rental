import { merge, shuffle } from "lodash";
import { createContext, useContext, useReducer } from "react";
import generateTasksData from "../../../../test/data/generateTasksData";

const tasks = generateTasksData(30);
const myTasks = generateTasksData(10).map((task) => {
  return { ...task, assignedTo: "Me" };
});

const TasksSummaryContext = createContext();

const tasksSummaryReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_SUMMARY":
      return {
        ...state,
        tasksSummary: action.payload,
      };
    default:
      return state;
  }
};

function TasksSummaryProvider({ children }) {
  const [state, dispatch] = useReducer(tasksSummaryReducer, {
    tasks: shuffle(merge(tasks, myTasks)),
    myTasks: myTasks,
  });

  const value = {
    tasksCount: state.tasks.length,
    tasks: state.tasks,
    myTasks: state.myTasks,
    reloadTasksSummary: (summary) =>
      dispatch({ type: "SET_TASKS_SUMMARY", payload: summary }),
  };

  return (
    <TasksSummaryContext.Provider value={value}>
      {children}
    </TasksSummaryContext.Provider>
  );
}

export function useTasksSummaryProvider() {
  const context = useContext(TasksSummaryContext);
  if (context === undefined) {
    throw new Error(
      "useTasksSummaryProvider must be used within a TasksSummaryProvider"
    );
  }
  return context;
}

export default TasksSummaryProvider;
