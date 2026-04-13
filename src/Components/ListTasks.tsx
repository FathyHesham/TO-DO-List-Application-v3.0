import CardTask from "./CardTask";
import "../Styles/CardTask.css";
import { ListTasksProps } from "../Types/TypesTask";

export default function ListTasks({ onEditTask, filterTasks }: ListTasksProps) {
	return (
		<div className="list-tasks">
			<div className="title">
				<h2>📋 مهامي 📋</h2>
			</div>
			{filterTasks.length === 0 ? (
				<div className="empty-state">
					<div className="empty-icon">📭</div>
					<p>مفيش مهام هنا دلوقتي!</p>
				</div>
			) : (
				filterTasks.map((task) => (
					<CardTask key={task.taskId} tasks={task} onEditTask={onEditTask} />
				))
			)}
		</div>
	);
}
