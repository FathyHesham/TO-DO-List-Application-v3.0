// Create Array Of Object
const filters = [
	{ key: "all", label: "الكل 😊" },
	{ key: "active", label: "	المنتهية 🏆" },
	{ key: "completed", label: "الغير منتهية 🚀" },
];

export default function FilterButton() {
	return (
		<div className="btn-filter">
			{filters.map((filter) => (
                <button type="button" key={ filter.key } className="btn">{ filter.label}</button>
			))}
		</div>
	);
}