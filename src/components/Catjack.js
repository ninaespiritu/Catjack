import "../styles/Catjack.css";
import Card from "./Card";
import logoCatjackSmall from "../assets/logoCatjackSmall.png";
import lifeGreen from "../assets/lifeGreen.png";
import lifePink from "../assets/lifePink.png";
import lifePurple from "../assets/lifePurple.png";
import scoreGreen from "../assets/scoreGreen.png";
import scorePink from "../assets/scorePink.png";
import scorePurple from "../assets/scorePurple.png";

const Catjack = ({
	setPlaying,
	colorCard,
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
}) => {
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
		<div className="catjack">
			<header>
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
							<h1>Game Over</h1>
							<h3>You have no more cat lives...</h3>
							<button
								className="button button-big"
								onClick={() => {
									setPlaying(false);
									setGameOver(false);
									setCatLives(9);
									buttonPlayAgain();
								}}
							>
								<div>Back to Home</div>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="game">
					<div className="game-scores">
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
					</div>

					<div className="game-cards">
						<div className="game-cards-dealer">
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
						</div>

						{result === "" ? (
							<div className="game-cards-results">
								<hr />
							</div>
						) : (
							<div className="game-cards-results">
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
							</div>
						)}

						<div className="game-cards-player">
							<div style={{ display: "flex" }}>
								{playerCards.map((card, i) => (
									<Card
										card={card}
										key={i}
										colorCard={colorCard}
									/>
								))}
							</div>
						</div>
					</div>

					{result === "" ? (
						<div className="game-buttons">
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
						</div>
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
		</div>
	);
};

export default Catjack;
