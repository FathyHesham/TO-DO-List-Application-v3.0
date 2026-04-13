// Import Components
import CardTask from "./CardTask";
// Import CSS Files
import "../Styles/CardTask.css";
import { useTasksContext } from "../Hooks/useTasks";

export default function ListTasks() {
	const { tasks } = useTasksContext();
	return (
		<div className="list-tasks">
			<div className="title">
				<h2>📋 مهامي 📋</h2>
			</div>
			{tasks.length === 0 ? (
				<div className="empty-state">
					<div className="empty-icon">📭</div>
					<p>مفيش مهام هنا دلوقتي!</p>
				</div>
			) : (
				tasks.map((task) => <CardTask key={task.taskId} tasks={task} />)
			)}
		</div>
	);
}
