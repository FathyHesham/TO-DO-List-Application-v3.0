export default function ModelTask() {
	return (
		<div className="modal-overlay">
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
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label">
							تاريخ المهمة <span className="required">*</span>
						</label>
						<input type="date" className="form-input" required />
					</div>

					<div className="form-group">
						<label className="form-label">
							مدى الأهمية <span className="required">*</span>
						</label>
						<select className="form-select">
							<option value="">أختار الأولوية</option>
							<option value="low">منخفضة</option>
							<option value="medium">متوسطة</option>
							<option value="high">عالية</option>
						</select>
					</div>
				</div>

				<div className="modal-actions">
					<button className="btn-submit">✅ إضافة المهمة</button>
					<button className="btn-cancel">إلغاء</button>
				</div>
			</div>
		</div>
	);
}
