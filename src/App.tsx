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
				<button type="button" className="btn-add-task" id="btn-add-task">إضافة مهمة جديدة ➕</button>
				<div className="btn-filter">
					<button type="button" className="btn btn-all" id="btn-all">الكل 😊</button>
					<button type="button" className="btn btn-completed" id="btn-completed">المنتهية 🏆</button>
					<button type="button" className="btn btn-active" id="btn-active">الغير منتهية 🚀</button>
				</div>
				
			</main>
			<footer className="footer-section" id="footer-section"></footer>
		</div>
	);
}
