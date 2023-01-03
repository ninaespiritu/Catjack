import "../styles/Home.css";
import logoCatjack from "../assets/logoCatjack.png";

const Home = ({ setPlaying, musicPlay }) => {
	return (
		<div className="home">
			<div className="home-logo">
				<img src={logoCatjack} alt="" />
			</div>
			<h2>a cat-themed Blackjack game</h2>
			<button
				className="button-play"
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
