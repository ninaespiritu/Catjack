import "../styles/Card.css";
import { motion } from "framer-motion";

const Card = ({ card, colorCard }) => {
	// Value of colorCard is set as backgroundImage
	const colorCardStyle = {
		backgroundImage: `url(${colorCard})`,
	};

	return (
		<motion.div layout className="card" style={colorCardStyle}>
			<h2>{card}</h2>
		</motion.div>
	);
};

export default Card;
