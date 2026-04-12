import { FullDetailsTask } from "../Types/TypesTask";

// Create New Variable "STORAGE_KEY"
const STORAGE_KEY: string = "tasks";

// Create New Function To Load The Data From Local Storage
export function loadTasks(): FullDetailsTask[] | undefined {
	try {
		// Get The Data From Local Storage
		const jsonData: string | null = localStorage.getItem(STORAGE_KEY);
		if (!jsonData) {
			return [];
		} else {
			// Convert Json Data To Object Data
			const data: FullDetailsTask[] = JSON.parse(jsonData);
			return data;
		}
	} catch (error) {
		console.log(`Error Loading Tasks : ${error}`);
	}
}

// Create New Function To Save The Data In Local Storage
export function saveTasks(tasks: FullDetailsTask[]) {
	try {
		// Convert Object Data To Json Data
		const jsonData: string = JSON.stringify(tasks);
		// Saving The Tasks In Local Storage
		localStorage.setItem(STORAGE_KEY, jsonData);
	} catch (error) {
		console.log(`Error Saving Tasks : ${error}`);
	}
}
