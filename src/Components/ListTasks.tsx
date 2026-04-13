import { useTasksContext } from "../Hooks/useTasks";
import CardTask from "./CardTask";
import "../Styles/CardTask.css";
import { ListTasksProps } from "../Types/TypesTask";

export default function ListTasks({ onEditTask }: ListTasksProps) {
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
				tasks.map((task) => (
					<CardTask key={task.taskId} tasks={task} onEditTask={onEditTask} />
				))
			)}
		</div>
	);
}
