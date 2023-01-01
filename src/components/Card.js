import "../styles/Card.css";

const Card = ({ card, colorCard }) => {
	// Value of colorCard is set as backgroundImage
	const colorCardStyle = {
		backgroundImage: `url(${colorCard})`,
	};

	return (
		<div className="card" style={colorCardStyle}>
			<h3>{card}</h3>
		</div>
	);
};

export default Card;
