// Import Components
import CardTask from "./CardTask";
// Import CSS Files
import "../Styles/CardTask.css";

export default function ListTasks() {
	return (
		<div className="list-tasks">
			<div className="title">
				<h2>📋 مهامي 📋</h2>
			</div>
			<CardTask />
		</div>
	);
}
