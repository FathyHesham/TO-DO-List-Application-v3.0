// Import Libraries
import { useMemo, useState } from "react";
// Import Components
import FilterButton from "./Components/FilterButtons";
import ListTasks from "./Components/ListTasks";
import ModelTask from "./Components/ModelTask";
// Import CSS File
import "./Styles/FilterButton.css";
import "./Styles/ListTask.css";
import "./Styles/ModelTask.css";
import { FullDetailsTask } from "./Types/TypesTask";
import { useTasksContext } from "./Hooks/useTasks";

export default function App() {
	// Create State To Manage Open & Close Model Task
	const [isModelOpen, setInModelOpen] = useState(false);
	// Create State To Manage The Task Being Edited
	const [editingTask, setEditingTask] = useState<FullDetailsTask | null>(null);
	// Get The Task Form useTaskContext
	const { tasks } = useTasksContext();
	// Create State To Manage The Filter Tasks
	const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
	const filterTasks = useMemo(() => {
		if (filter === "completed") {
			return tasks.filter((task) => task.taskStatus === "completed");
		} else if (filter === "active") {
			return tasks.filter((task) => task.taskStatus === "active");
		} else {
			return tasks;
		}
	}, [filter, tasks]);

	// Create Function To Manage State
	function handleOpenModel() {
		setEditingTask(null);
		setInModelOpen(true);
	}

	// Create New Function To Manage The State For Editing Task
	function handleEditTask(task: FullDetailsTask) {
		setEditingTask(task);
		setInModelOpen(true);
	}

	// Create Function To Manage State
	function handleCloseModel() {
		setInModelOpen(false);
		setEditingTask(null);
	}

	return (
		<div className="main-container">
			<header className="header-section" id="header-section">
				<h1>
					مدير <span>المهام</span> 🗂️
				</h1>
				<p>نظّم يومك — سجّل مهامك وتابعها بسهولة</p>
			</header>
			<main className="main-section" id="main-section">
				<button
					type="button"
					className="btn-add-task"
					id="btn-add-task"
					onClick={handleOpenModel}
				>
					إضافة مهمة جديدة ➕
				</button>
				{isModelOpen && (
					<ModelTask onClose={handleCloseModel} editingTask={editingTask} />
				)}
				<FilterButton setFilter={ (filter: string) => setFilter(filter as "all" | "completed" | "active") } filter={ filter } />
				<ListTasks onEditTask={handleEditTask} filterTasks={filterTasks}/>
			</main>
			<footer className="footer-section" id="footer-section"></footer>
		</div>
	);
}
