import { useContext } from "react";
import { TasksContext } from "../Contexts/TasksContext";

// Create Custom Context Hooks
export const useTasksContext = () => {
	const context = useContext(TasksContext);
	if (!context) {
		throw new Error(`useTasks Must Be Used Within A Task Provider`);
	} else {
		return context;
	}
};
