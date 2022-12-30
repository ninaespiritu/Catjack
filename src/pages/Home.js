import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<h1>Catjack</h1>
			<Link to="/play">
				<button>Play Game</button>
			</Link>
		</div>
	);
};
