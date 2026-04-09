// Import Components
import FilterButton from "./Components/FilterButtons";
import ListTasks from "./Components/ListTasks";
// Import CSS File
import "./Styles/FilterButton.css";
import "./Styles/ListTask.css";

export default function App() {
	return (
		<div className="main-container">
			<header className="header-section" id="header-section">
				<h1>
					مدير <span>المهام</span> 🗂️
				</h1>
				<p>نظّم يومك — سجّل مهامك وتابعها بسهولة</p>
			</header>
			<main className="main-section" id="main-section">
				<button type="button" className="btn-add-task" id="btn-add-task">
					إضافة مهمة جديدة ➕
				</button>
				<FilterButton />
				<ListTasks />
			</main>
			<footer className="footer-section" id="footer-section"></footer>
		</div>
	);
}
