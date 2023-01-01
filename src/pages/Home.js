import "../styles/Home.css";
import { Link } from "react-router-dom";
import logoCatjack from "../assets/logoCatjack.png";

const Home = ({ musicPlay }) => {
	return (
		<div className="home">
			<div className="home-logo">
				<img src={logoCatjack} />
			</div>
			<h2>a cat-themed Blackjack game</h2>
			<Link to="/play">
				<button className="button-play" onClick={() => musicPlay()}>
					<div>Play Now</div>
				</button>
			</Link>
		</div>
	);
};

export default Home;
