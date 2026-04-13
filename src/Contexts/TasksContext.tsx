//! This Line Solve This Problem "Fast refresh only works when a file only exports components.
//!								  Use a new file to share constants or functions between components."
/* eslint-disable react-refresh/only-export-components */

import { createContext, ReactNode, useEffect, useState } from "react";
import { FullDetailsTask, NewTask, TaskContextType } from "../Types/TypesTask";
import { loadTasks, saveTasks } from "../Utils/LocalStorage";

// Create Contect Of Tasks
export const TasksContext = createContext<TaskContextType | undefined>(
	undefined,
);

// Create New Function To Manage The Provider Of Context
export function TasksProvider({ children }: { children: ReactNode }) {
	// Create State To Manage The Tasks
	const [tasks, setTasks] = useState<FullDetailsTask[]>(() => loadTasks());

	// Using useEffect To Send The Data To LocalStorage After Update
	useEffect(() => saveTasks(tasks), [tasks]);

	// Create Function To Add The Task
	const addTask = (newTask: NewTask) => {
		const fullInfoTask: FullDetailsTask = {
			...newTask,
			taskId: Date.now(),
			taskStatus: "active",
			createdAt: new Date().toISOString(),
		};

		setTasks((prevTask) => [fullInfoTask, ...prevTask]);
	};

	// Create New Function To Delete The Task
	const deleteTask = (taskId: number) => {
		setTasks((prevTask) => prevTask.filter((task) => task.taskId !== taskId));
	};

	// Create New Function To Make Task Is Complete
	const completeTask = (taskId: number) => {
		setTasks((prevTask) =>
			prevTask.map((task) =>
				task.taskId === taskId
					? {
							...task,
							taskStatus: task.taskStatus === "active" ? "completed" : "active",
						}
					: task,
			),
		);
	};

	// Create New Function To Update The Task
	const updateTask = (taskId: number, updateData: NewTask) => {
		setTasks((prevTask) =>
			prevTask.map((task) =>
				task.taskId === taskId ? { ...task, ...updateData } : task,
			),
		);
	};

	return (
		<TasksContext.Provider
			value={{
				tasks,
				addTask,
				deleteTask,
				completeTask,
				updateTask,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
}
