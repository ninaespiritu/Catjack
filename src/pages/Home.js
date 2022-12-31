import "../styles/Home.css";
import { Link } from "react-router-dom";
import logoCatjack from "../assets/logoCatjack.png";
import buttonPlayNow from "../assets/buttonPlayNow.png";
import textPlayNow from "../assets/textPlayNow.png";

const Home = () => {
	return (
		<div className="home">
			<div className="home-logo">
				<img src={logoCatjack} />
			</div>
			<h2>a cat-themed Blackjack game</h2>
			<Link to="/play">
				<button>
					<div>
						<img src={textPlayNow} />
					</div>
				</button>
			</Link>
		</div>
	);
};

export default Home;
