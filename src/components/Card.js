import "../styles/Card.css";

export const Card = ({ card, colorCard }) => {
	// Value of colorCard is set as backgroundImage
	const colorCardStyle = {
		margin: "0 3px",
		width: "100px",
		height: "150px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "20px",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundSize: "contain",
		backgroundImage: `url(${colorCard})`,
	};

	return (
		<div className="card" style={colorCardStyle}>
			<h3>{card}</h3>
		</div>
	);
};
