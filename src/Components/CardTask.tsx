export default function CardTask() {
	return (
		<div className="card-task priority-medium">
			<div className="header-task">
				<span className="title-task">المهمة الاولي</span>
				<div className="meta-task">
					<span className="badge badge-priority-medium">متوسطة</span>
					<span className="date-task">2-5-2026</span>
				</div>
			</div>
			<p className="details-task">تفاصيل المهمة الاولي</p>
			<div className="actions-buttons">
				<button type="button" className="btn-action btn-completed">
					✅ خلصت
				</button>
				<button type="button" className="btn-action btn-update">
					✏️ تعديل
				</button>
				<button type="button" className="btn-action btn-delete">
					🗑️ حذف
				</button>
			</div>
		</div>
	);
}
