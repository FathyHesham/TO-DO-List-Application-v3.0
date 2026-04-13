//! This Line Solve This Problem "Fast refresh only works when a file only exports components.
//!								  Use a new file to share constants or functions between components."
/* eslint-disable react-refresh/only-export-components */

import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import {
	FullDetailsTask,
	NewTask,
	TaskContextType,
	TaskFilter,
} from "../Types/TypesTask";
import { loadTasks, saveTasks } from "../Utils/LocalStorage";

// Create Contect Of Tasks
export const TasksContext = createContext<TaskContextType | undefined>(
	undefined,
);

// Create New Function To Manage The Provider Of Context
export function TasksProvider({ children }: { children: ReactNode }) {
	// Create State To Manage The Tasks
	const [tasks, setTasks] = useState<FullDetailsTask[]>(() => loadTasks());
	// Create State To Manage Filter
	const [filter, setFilter] = useState<TaskFilter>("all");

	// Using useEffect To Send The Data To LocalStorage After Update
	useEffect(() => saveTasks(tasks), [tasks]);

	// Create Function To Add The Task
	const addTask = (newTask: NewTask) => {
		const fullInfoTask: FullDetailsTask = {
			...newTask,
			taskId: Date.now(),
			taskStatus: "active",
			createdAt: new Date().toISOString().split("T")[0],
		};

		setTasks([...tasks, fullInfoTask]);
	};

	// Create New Function To Delete The Task
	const deleteTask = (taskId: number) => {
		setTasks(tasks.filter((task) => task.taskId !== taskId));
	};

	// Create New Function To Make Task Is Complete
	const completeTask = (taskId: number) => {
		setTasks(
			tasks.map((task) =>
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

	const filteredTasks = useMemo(() => {
		if (filter === "completed") {
			return tasks.filter((task) => task.taskStatus === "completed");
		}
		if (filter === "active") {
			return tasks.filter((task) => task.taskStatus === "active");
		}
		return tasks;
	}, [filter, tasks]);

	return (
		<TasksContext.Provider
			value={{
				tasks,
				filter,
				setFilter,
				filteredTasks,
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
