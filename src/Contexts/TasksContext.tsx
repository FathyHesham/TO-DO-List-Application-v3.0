import { createContext, ReactNode, useEffect, useState } from "react";
import { FullDetailsTask, NewTask } from "../Types/TypesTask";
import { loadTasks, saveTasks } from "../Utils/LocalStorage";

// Define The Type Of Context
interface TaskContextType {
	tasks: FullDetailsTask[];
	addTask: (newTask: NewTask) => void;
}

// Create Contect Of Tasks
export const TasksContext = createContext<TaskContextType | undefined>(
	undefined
);

// Create New Function To Manage The Provider Of Context
export function TasksProvider({ children }: { children: ReactNode }) {
	// Create State To Manage The Tasks
	const [tasks, setTasks] = useState(() => loadTasks());

	// Using useEffect To Send The Data To LocalStorage After Update
	useEffect(() => saveTasks(tasks), [tasks]);

	// Create Function To Add Task
	const addTask = (newTask: NewTask) => {
		const fullInfoTask: FullDetailsTask = {
			...newTask,
			taskId: Date.now(),
			taskStatus: "active",
			createdAt: new Date().toISOString().split("T")[0],
		};

		setTasks([...tasks, fullInfoTask]);
	};

	return (
		<TasksContext.Provider value={{ tasks, addTask }}>
			{children}
		</TasksContext.Provider>
	);
}
