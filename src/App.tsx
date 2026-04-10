// Import Libraries
import { useState } from "react";
// Import Components
import FilterButton from "./Components/FilterButtons";
import ListTasks from "./Components/ListTasks";
import ModelTask from "./Components/ModelTask";
// Import CSS File
import "./Styles/FilterButton.css";
import "./Styles/ListTask.css";
import "./Styles/ModelTask.css";

export default function App() {
	// Create State To Manage Open & Close Model Task
	const [isModelOpen, setInModelOpen] = useState(false);

	// Create Function To Manage State
	function handleOpenModel() {
		setInModelOpen(true);
	}

	// Create Function To Manage State
	function handleCloseModel() {
		setInModelOpen(false);
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
				{isModelOpen && <ModelTask onClose={handleCloseModel} />}
				<FilterButton />
				<ListTasks />
			</main>
			<footer className="footer-section" id="footer-section"></footer>
		</div>
	);
}
