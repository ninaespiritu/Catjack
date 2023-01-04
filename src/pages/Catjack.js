import "../styles/Catjack.css";
import Card from "../components/Card";

const Catjack = ({
	setPlaying,
	colorCard,
	colorCardDealer,
	colorCardHide,
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
	return (
		<div className="play">
			<div>
				{[...Array(catLives)].map((e, i) => (
					<span key={i}>&#9825;</span>
				))}
				<p>Lives Left: {catLives}</p>
			</div>

			{gameOver ? (
				<div>
					<h2>Game Over</h2>
					<button
						onClick={() => {
							setPlaying(false);
							setGameOver(false);
							setCatLives(3);
							buttonPlayAgain();
						}}
					>
						Back to Home
					</button>
				</div>
			) : (
				<div>
					<h2>
						Dealer Score: {turnOver ? dealerScore : dealerTempScore}
					</h2>
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

					<p>{result}</p>
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

					<h2>Player Score: {playerScore}</h2>
					<div style={{ display: "flex" }}>
						{playerCards.map((card, i) => (
							<Card card={card} key={i} colorCard={colorCard} />
						))}
					</div>

					{result === "" ? (
						<div>
							<button
								className="button-play"
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
								className="button-play"
								disabled={turnOver}
								onClick={() => buttonStand()}
							>
								<div>Stand</div>
							</button>
						</div>
					) : (
						<div>
							{" "}
							<button
								className="button-play"
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
