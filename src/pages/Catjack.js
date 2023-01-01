import "../styles/Catjack.css";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { getCard, getPoints, startGame } from "../utils/Functions";
import { calculateScore } from "../utils/CalculateScore";
import cardGreen from "../assets/cardGreen.png";
import cardPink from "../assets/cardPink.png";
import cardPurple from "../assets/cardPurple.png";
import cardDealer from "../assets/cardDealer.png";
import cardHide from "../assets/cardHide.png";

const Catjack = ({ musicToggle, musicPlaying }) => {
	// VARIABLES: Game
	const [turnOver, setTurnOver] = useState(false);
	const [result, setResult] = useState("");
	const [catLives, setCatLives] = useState(3);
	const [playerCards, setPlayerCards] = useState([]);
	const [dealerCards, setDealerCards] = useState([]);
	const [playerScore, setPlayerScore] = useState(0);
	const [dealerScore, setDealerScore] = useState(0);
	const dealerTempScore = getPoints(dealerCards[0]);

	// VARIABLE: Design
	const [colorCard, setColorCard] = useState(cardGreen);
	const colorCardDealer = cardDealer;
	const colorCardHide = cardHide;

	// One page loads, call startGame() to get player's and dealer's cards
	useEffect(() => {
		if (playerScore === 0 && dealerScore === 0) {
			startGame({
				playerCards,
				setPlayerCards,
				playerScore,
				setPlayerScore,
				dealerCards,
				setDealerCards,
				dealerScore,
				setDealerScore,
			});
		}
	}, [
		playerCards,
		setPlayerCards,
		playerScore,
		setPlayerScore,
		dealerCards,
		setDealerCards,
		dealerScore,
		setDealerScore,
	]);

	// Constantly checks for automatic wins/loses
	useEffect(() => {
		if (dealerScore === 21 && dealerCards.length === 2) {
			setResult("Dealer has Blackjack. You lose.");
		} else if (playerScore === 21 && playerCards.length === 2) {
			setResult("You have Blackjack! You win!");
		} else if (playerScore === 21 && dealerScore < 21) {
			setResult("You win!");
		} else if (playerScore > 21) {
			setResult("You went over 21. You lose.");
		}
	}, [
		playerScore,
		dealerScore,
		playerCards.length,
		dealerCards.length,
		catLives,
		setCatLives,
	]);

	// Calculates lives left after an automatic win/lose
	const calculateResultLives = () => {
		if (dealerScore === 21 && dealerCards.length === 2) {
			setTurnOver(true);
			const loseCatLives = catLives - 1;
			setCatLives(loseCatLives);
		} else if (playerScore === 21 && playerCards.length === 2) {
			setTurnOver(true);
			const addCatLives = catLives + 1;
			setCatLives(addCatLives);
		} else if (playerScore > 21) {
			setTurnOver(true);
			const loseCatLives = catLives - 1;
			setCatLives(loseCatLives);
		}
	};

	// If there is an automatic win/lose, run above function
	if (!turnOver && result !== "") {
		calculateResultLives();
	}

	// Calculates winner and lives left after player clicks "Stand"
	const calculateResult = () => {
		if (
			(playerScore === 21 && dealerScore === 21) ||
			playerScore === dealerScore
		) {
			dealerHit() ? dealerHit() : setResult("It's a tie!");
		} else if (dealerScore < playerScore) {
			dealerHit()
				? dealerHit()
				: setResult("You have the higher score. You win!");
		} else if (playerScore < dealerScore && dealerScore > 21) {
			setResult("Dealer went over 21. You win!");
		} else if (playerScore < dealerScore) {
			setResult("Dealer has the higher score. You lose.");
			const loseCatLives = catLives - 1;
			setCatLives(loseCatLives);
		}
	};

	// If player's turn ends by clicking "Stand", run above function
	if (turnOver && result === "") {
		setTimeout(() => {
			calculateResult();
		}, 1000);
	}

	// Player clicks "Hit" to draw new card
	const buttonHit = (cards, setCards, score, setScore) => {
		const newCard = getCard();
		const newCards = [...cards, newCard];
		setCards(newCards);
		const newScore = score + getPoints(newCard);
		const finalScore = calculateScore(newCards, newScore);
		setScore(finalScore);
	};

	// Player clicks "Stand" to end turn
	const buttonStand = () => {
		setTurnOver(true);
	};

	// Player clicks "Play Again" to start new game
	const buttonPlayAgain = () => {
		setPlayerCards([]);
		setDealerCards([]);
		setPlayerScore(0);
		setDealerScore(0);
		setTurnOver(false);
		setResult("");
	};

	// Dealer repeatedly calls buttonHit() during its turn
	const dealerHit = () => {
		if (dealerScore < 17 || dealerScore < playerScore) {
			buttonHit(dealerCards, setDealerCards, dealerScore, setDealerScore);
			return true;
		} else {
			return false;
		}
	};

	// ===============================================
	return (
		<div className="play">
			<div>
				{[...Array(catLives)].map((e, i) => (
					<span key={i}>&#9825;</span>
				))}
				<p>Lives Left: {catLives}</p>
			</div>

			{catLives === 0 ? (
				<div>
					<h2>Game Over</h2>
					<button
						onClick={() => {
							window.location.reload();
						}}
					>
						Restart Game
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

			<br />

			<section className="footer">
				<button
					className="button-color card-green"
					onClick={() => setColorCard(cardGreen)}
				></button>
				<button
					className="button-color card-pink"
					onClick={() => setColorCard(cardPink)}
				></button>
				<button
					className="button-color card-purple"
					onClick={() => setColorCard(cardPurple)}
				></button>
				<p>
					colour:{" "}
					{colorCard === cardGreen
						? "green"
						: colorCard === cardPink
						? "pink"
						: "purple"}
				</p>

				<p onClick={() => musicToggle()}>
					music: {musicPlaying ? "on" : "off"}
				</p>
			</section>
		</div>
	);
};

export default Catjack;
