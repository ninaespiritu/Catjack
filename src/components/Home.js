import "../styles/Home.css";
import FooterModal from "./FooterModal";
import logoCatjack from "../assets/logoCatjack.png";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

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
	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const item = {
		hidden: {
			scale: 0,
			y: -50,
		},
		show: {
			scale: 1,
			y: 0,
			transition: {
				duration: 1.5,
				ease: "easeOut",
				type: "spring",
				bounce: 0.5,
			},
		},
	};

	const button = {
		hidden: {
			scale: 0,
			y: 50,
		},
		show: {
			scale: 1,
			y: 0,
			transition: {
				delay: 1.25,
				duration: 1,
				ease: "easeIn",
				type: "spring",
				bounce: 0.25,
			},
		},
	};

	return (
		<motion.div
			className="home"
			variants={container}
			initial="hidden"
			animate="show"
		>
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
				<motion.div className="home-logo" variants={item}>
					<img src={logoCatjack} alt="" />
				</motion.div>
				<motion.h3 variants={item}>
					a cat-themed Blackjack game
				</motion.h3>
				<motion.button
					className="button button-big"
					onClick={() => {
						setPlaying(true);
						musicPlay();
					}}
					variants={button}
				>
					<div>Play Now</div>
				</motion.button>
			</div>
		</motion.div>
	);
};

export default Home;
