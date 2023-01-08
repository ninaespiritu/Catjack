import "../styles/Catjack.css";
import Card from "./Card";
import FooterModal from "./FooterModal";
import logoCatjackSmall from "../assets/logoCatjackSmall.png";
import lifeGreen from "../assets/lifeGreen.png";
import lifePink from "../assets/lifePink.png";
import lifePurple from "../assets/lifePurple.png";
import scoreGreen from "../assets/scoreGreen.png";
import scorePink from "../assets/scorePink.png";
import scorePurple from "../assets/scorePurple.png";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Catjack = ({
	setPlaying,
	colorCard,
	setColorCard,
	colorCardDealer,
	colorCardHide,
	cardGreen,
	cardPink,
	cardPurple,
	gameOver,
	setGameOver,
	turnOver,
	result,
	catLives,
	setCatLives,
	playerCards,
	dealerCards,
	playerScore,
	dealerScore,
	dealerTempScore,
	setPlayerCards,
	setPlayerScore,
	buttonHit,
	buttonStand,
	buttonPlayAgain,
	musicToggle,
	musicPlaying,
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
				staggerChildren: 0.05,
				delayChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: {
			opacity: 0,
			scale: 0.75,
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.75,
				ease: "easeOut",
				type: "spring",
				bounce: 0.25,
			},
		},
	};

	const colorScoreStyle = [
		{
			backgroundImage: `url(${scoreGreen})`,
		},
		{
			backgroundImage: `url(${scorePink})`,
		},
		{
			backgroundImage: `url(${scorePurple})`,
		},
	];

	return (
		<motion.div
			className="catjack"
			variants={container}
			initial="hidden"
			animate="show"
		>
			<header>
				<div className="footer-display-catjack">
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

				<div className="catjack-logo">
					<img src={logoCatjackSmall} alt="" />
				</div>
				<div className="cat-lives">
					{[...Array(catLives)].map((e, i) => (
						<div key={i} className="cat-life">
							<img
								src={
									colorCard === cardGreen
										? lifeGreen
										: colorCard === cardPink
										? lifePink
										: lifePurple
								}
								alt=""
							/>
						</div>
					))}
					<h3>lives left: {catLives}</h3>
				</div>
			</header>

			{gameOver ? (
				<div className="game">
					<div className="game-over-container">
						<div className="game-over">
							<motion.h1 variants={item}>Game Over</motion.h1>
							<motion.h3 variants={item}>
								You have no more cat lives...
							</motion.h3>
							<motion.button
								className="button button-big"
								onClick={() => {
									setPlaying(false);
									setGameOver(false);
									setCatLives(9);
									buttonPlayAgain();
								}}
								variants={item}
							>
								<div>Back to Home</div>
							</motion.button>
						</div>
					</div>
				</div>
			) : (
				<div className="game">
					<motion.div className="game-scores" variants={item}>
						<div className="game-scores-dealer">
							<h3>dealer</h3>
							<div className="game-scores-num">
								<h2>
									{turnOver ? dealerScore : dealerTempScore}
								</h2>
							</div>
						</div>

						<div className="game-scores-player">
							<h3>player</h3>
							<div
								className="game-scores-num"
								style={
									colorCard === cardGreen
										? colorScoreStyle[0]
										: colorCard === cardPink
										? colorScoreStyle[1]
										: colorScoreStyle[2]
								}
							>
								<h2>{playerScore}</h2>
							</div>
						</div>
					</motion.div>

					<div className="game-cards">
						<motion.div
							className="game-cards-dealer"
							variants={item}
						>
							{turnOver ? (
								<div style={{ display: "flex" }}>
									{dealerCards.map((card, i) => (
										<Card
											card={card}
											key={i}
											colorCard={colorCardDealer}
										/>
									))}
								</div>
							) : (
								<div style={{ display: "flex" }}>
									<Card
										card={dealerCards[0]}
										colorCard={colorCardDealer}
									/>
									<Card colorCard={colorCardHide} />
								</div>
							)}
						</motion.div>

						{result === "" ? (
							<div className="game-cards-results">
								<hr />
							</div>
						) : (
							<motion.div
								className="game-cards-results"
								variants={item}
							>
								<h3>{result}</h3>
								<h1>
									{result === "Player has Catjack." ||
									result === "Player scores 21." ||
									result === "Player scores higher." ||
									result === "Dealer went over 21."
										? "You win!"
										: result === "Dealer has Catjack." ||
										  result === "Player went over 21." ||
										  result === "Dealer scores higher."
										? "You lose."
										: result === "Both hands are equal."
										? "Tie!"
										: ""}
								</h1>
							</motion.div>
						)}

						<motion.div
							className="game-cards-player"
							variants={item}
						>
							<div style={{ display: "flex" }}>
								{playerCards.map((card, i) => (
									<Card
										card={card}
										key={i}
										colorCard={colorCard}
									/>
								))}
							</div>
						</motion.div>
					</div>

					{result === "" ? (
						<motion.div className="game-buttons" variants={item}>
							<button
								className="button button-small"
								disabled={turnOver}
								onClick={() =>
									buttonHit(
										playerCards,
										setPlayerCards,
										playerScore,
										setPlayerScore
									)
								}
							>
								<div>Hit</div>
							</button>
							<button
								className="button button-small"
								disabled={turnOver}
								onClick={() => buttonStand()}
							>
								<div>Stand</div>
							</button>
						</motion.div>
					) : (
						<div className="game-buttons play-again">
							<button
								className="button button-small"
								disabled={catLives === 0}
								onClick={() => {
									buttonPlayAgain();
								}}
							>
								<div>Play Again</div>
							</button>
						</div>
					)}
				</div>
			)}
		</motion.div>
	);
};

export default Catjack;
