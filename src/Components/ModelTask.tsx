// Import Libraries
import { useEffect, useState } from "react";
import { ModelTaskProps, NewTask, Priority } from "../Types/TypesTask";
import { useTasksContext } from "../Hooks/useTasks";

export default function ModelTask({ onClose, editingTask }: ModelTaskProps) {
	// Calling useTask Context
	const { addTask, updateTask } = useTasksContext();

	// Create State To Manage Input Field
	const [stateInput, setStateInput] = useState<NewTask>({
		taskTitle: "",
		taskDescription: "",
		taskDueDate: "",
		taskPriority: "" as Priority,
	});

	// Fill Form With Editing Task Data If Available
	useEffect(() => {
		if (editingTask) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setStateInput({
				taskTitle: editingTask.taskTitle,
				taskDescription: editingTask.taskDescription,
				taskDueDate: editingTask.taskDueDate,
				taskPriority: editingTask.taskPriority,
			});
		} else {
			setStateInput({
				taskTitle: "",
				taskDescription: "",
				taskDueDate: "",
				taskPriority: "" as Priority,
			});
		}
	}, [editingTask]);

	// Create New Functions To Manage State In Input Field
	function handleTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
		setStateInput({ ...stateInput, taskTitle: event.target.value });
	}

	function handleTaskDescription(event: React.ChangeEvent<HTMLInputElement>) {
		setStateInput({ ...stateInput, taskDescription: event.target.value });
	}

	function handleTaskDueDate(event: React.ChangeEvent<HTMLInputElement>) {
		setStateInput({ ...stateInput, taskDueDate: event.target.value });
	}

	function handleTaskPriority(event: React.ChangeEvent<HTMLSelectElement>) {
		setStateInput({
			...stateInput,
			taskPriority: event.target.value as Priority,
		});
	}

	function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
		event.preventDefault();
		if (editingTask) {
			// Update Existing Task
			updateTask(editingTask.taskId, stateInput);
		} else {
			// Add Task In Object And Save In Local Storage
			addTask(stateInput);
		}
		// After Submit "Clear The Form"
		setStateInput({
			taskTitle: "",
			taskDescription: "",
			taskDueDate: "",
			taskPriority: "" as Priority,
		});
		onClose();
	}

	const isEditing = !!editingTask;

	return (
		<form className="modal-overlay" onSubmit={handleSubmit}>
			<div className="modal-box">
				<div className="modal-title">
					<span>📝</span>
					{isEditing ? "تعديل المهمة" : "إضافة مهمة جديدة"}
					<span>📝</span>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label">
							عنوان المهمة <span className="required">*</span>
						</label>
						<input
							className="form-input"
							placeholder="اكتب عنوان المهمة"
							required
							value={stateInput.taskTitle}
							onChange={handleTaskTitle}
						/>
					</div>
					<div className="form-group">
						<label className="form-label">
							تفاصيل المهمة <span className="required">*</span>
						</label>
						<input
							className="form-input"
							placeholder="أكتب تفاصيل المهمة"
							required
							value={stateInput.taskDescription}
							onChange={handleTaskDescription}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label">
							تاريخ المهمة <span className="required">*</span>
						</label>
						<input
							type="date"
							className="form-input"
							required
							value={stateInput.taskDueDate}
							onChange={handleTaskDueDate}
						/>
					</div>

					<div className="form-group">
						<label className="form-label">
							مدى الأهمية <span className="required">*</span>
						</label>
						<select
							className="form-select"
							value={stateInput.taskPriority}
							onChange={handleTaskPriority}
						>
							<option value="">أختار الأولوية</option>
							<option value="low">منخفضة</option>
							<option value="medium">متوسطة</option>
							<option value="high">عالية</option>
						</select>
					</div>
				</div>

				<div className="modal-actions">
					<button className="btn-submit">
						{isEditing ? "✅ تحديث المهمة" : "✅ إضافة المهمة"}
					</button>
					<button className="btn-cancel" onClick={onClose}>
						إلغاء
					</button>
				</div>
			</div>
		</form>
	);
}
