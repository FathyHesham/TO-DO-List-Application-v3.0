export default function FilterButton({
	setFilter,
	filter,
}: {
	setFilter: (filter: string) => void;
	filter: string;
}) {
	return (
		<div className="btn-filter">
			<button
				type="button"
				className={`btn ${filter === "all" ? "active" : ""}`}
				aria-pressed={filter === "all"}
				onClick={() => setFilter("all")}
			>
				الكل 😊
			</button>

			<button
				type="button"
				className={`btn ${filter === "completed" ? "active" : ""}`}
				aria-pressed={filter === "completed"}
				onClick={() => setFilter("completed")}
			>
				المنتهية 🏆
			</button>

			<button
				type="button"
				className={`btn ${filter === "active" ? "active" : ""}`}
				aria-pressed={filter === "active"}
				onClick={() => setFilter("active")}
			>
				الغير منتهية 🚀
			</button>
		</div>
	);
}
