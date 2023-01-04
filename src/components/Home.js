import "../styles/Home.css";
import logoCatjack from "../assets/logoCatjack.png";

const Home = ({ setPlaying, musicPlay }) => {
	return (
		<div className="home">
			<div className="home-logo">
				<img src={logoCatjack} alt="" />
			</div>
			<h3>a cat-themed Blackjack game</h3>
			<button
				className="button button-big"
				onClick={() => {
					setPlaying(true);
					musicPlay();
				}}
			>
				<div>Play Now</div>
			</button>
		</div>
	);
};

export default Home;
