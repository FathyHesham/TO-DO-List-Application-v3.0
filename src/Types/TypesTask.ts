// Create Priority Type Of Tasks
export type Priority = "low" | "medium" | "high";

// Create Status Type Of Tasks
export type Status = "active" | "completed";

// Create Interface Of New Task
export interface NewTask {
	taskTitle: string;
	taskDescription: string;
	taskDueDate: string;
	taskPriority: Priority;
}

// Create Interface Of Full Task And Expends Of New Task
export interface FullDetailsTask extends NewTask {
	taskId: number;
	taskStatus: Status;
	createdAt: string;
}

// Create Type To Manage The Open & Close Model Task
export type ModelTaskProps = {
	onClose: () => void;
	editingTask?: FullDetailsTask | null;
};

// Define The Type Of Context
export interface TaskContextType {
	tasks: FullDetailsTask[];
	addTask: (newTask: NewTask) => void;
	deleteTask: (taskId: number) => void;
	completeTask: (taskId: number) => void;
	updateTask: (taskId: number, updateData: NewTask) => void;
}

// Create Interface To Handle Task In Card
export interface CardTaskProps {
	tasks: FullDetailsTask;
	onEditTask: (task: FullDetailsTask) => void;
}

// Create Interface To Handle Editing Task In List
export interface ListTasksProps {
	onEditTask: (task: FullDetailsTask) => void;
}
