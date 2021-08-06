import "./Square.css";

function Square({ value, onClick }) {
	const style = value ? `square ${value}` : `squares`;

	return (
		<button className={`${style}`} onClick={onClick}>
			{value && (
				<div className="side-icons-box">
					<p className={value === "X" ? "cross" : "circle"}>{value}</p>
				</div>
			)}
		</button>
	);
}

export default Square;
