// Import Libraries
import { useState } from "react";
import { ModelTaskProps, NewTask, Priority } from "../Types/TypesTask";
import { useTasksContext } from "../Hooks/useTasks";

export default function ModelTask({ onClose }: ModelTaskProps) {
	// Calling useTask Context
	const { addTask } = useTasksContext();
	// Create State To Manage Input Field
	const [stateInput, setStateInput] = useState<NewTask>({
		taskTitle: "",
		taskDescription: "",
		taskDueDate: "",
		taskPriority: "" as Priority,
	});

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
		// Add Task In Object And Save In Local Storage
		addTask(stateInput);
		// After Submit "Clear The Form"
		setStateInput({
			taskTitle: "",
			taskDescription: "",
			taskDueDate: "",
			taskPriority: "" as Priority,
		});
		onClose();
	}

	return (
		<form className="modal-overlay" onSubmit={handleSubmit}>
			<div className="modal-box">
				<div className="modal-title">
					<span>📝</span>
					إضافة مهمة جديدة
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
					<button className="btn-submit">✅ إضافة المهمة</button>
					<button className="btn-cancel" onClick={onClose}>
						إلغاء
					</button>
				</div>
			</div>
		</form>
	);
}
