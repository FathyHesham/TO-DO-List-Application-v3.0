// Create Priority Type Of Tasks
export type Priority = "low" | "medium" | "hard";

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
}