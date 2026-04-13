import { useTasksContext } from "../Hooks/useTasks";
import { CardTaskProps } from "../Types/TypesTask";

export default function CardTask({ tasks, onEditTask }: CardTaskProps) {
	const { deleteTask, completeTask } = useTasksContext();
	const priorityLabel =
		tasks.taskPriority === "low"
			? "مش مهمة اوي اعملها في اي وقت"
			: tasks.taskPriority === "medium"
				? "يعني في جزء من الاهمية خاليها من ضمن الاولويات"
				: "لا خالي بالك ده مهمة اوي ابدأ بيها الاول";

	return (
		<div
			className={`card-task priority-${tasks.taskPriority} ${tasks.taskStatus === "completed" ? "completed-card " : ""}`}
		>
			<div className="header-task">
				<span className="title-task">{tasks.taskTitle}</span>
				<div className="meta-task">
					<span className={`badge badge-priority-${tasks.taskPriority}`}>
						{priorityLabel}
					</span>
					<span className="date-task">{tasks.taskDueDate}</span>
				</div>
			</div>
			<p className="details-task">{tasks.taskDescription}</p>
			<div className="actions-buttons">
				<button
					type="button"
					className={`btn-action ${tasks.taskStatus === "completed" ? "btn-undo" : "btn-completed"}`}
					onClick={() => completeTask(tasks.taskId)}
				>
					{tasks.taskStatus === "completed" ? "↩ إلغاء الإكمال" : "✅ خلصت"}
				</button>
				<button
					type="button"
					className="btn-action btn-update"
					onClick={() => onEditTask(tasks)}
				>
					✏️ تعديل
				</button>
				<button
					type="button"
					className="btn-action btn-delete"
					onClick={() => deleteTask(tasks.taskId)}
				>
					🗑️ حذف
				</button>
			</div>
		</div>
	);
}
