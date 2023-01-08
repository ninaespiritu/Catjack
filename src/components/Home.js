import "../styles/Home.css";
import FooterModal from "./FooterModal";
import logoCatjack from "../assets/logoCatjack.png";
import { FaBars } from "react-icons/fa";

const Home = ({
	setPlaying,
	musicPlay,
	musicToggle,
	musicPlaying,
	colorCard,
	setColorCard,
	cardGreen,
	cardPink,
	cardPurple,
	menuVisible,
	toggleMenu,
}) => {
	return (
		<div className="home">
			<div className="footer-display-home">
				<div className="modal-toggle" onClick={toggleMenu}>
					<FaBars />
					<p>menu</p>
				</div>

				<FooterModal
					musicToggle={musicToggle}
					musicPlaying={musicPlaying}
					colorCard={colorCard}
					setColorCard={setColorCard}
					cardGreen={cardGreen}
					cardPink={cardPink}
					cardPurple={cardPurple}
					menuVisible={menuVisible}
					toggleMenu={toggleMenu}
				/>
			</div>

			<div className="home-main">
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
		</div>
	);
};

export default Home;
