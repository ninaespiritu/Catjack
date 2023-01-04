import { useEffect, useState } from "react";
import "../styles/Catjack.css";
import Card from "../components/Card";
import { fullDeck } from "../utils/Deck";
import { getCard, getPoints, startGame } from "../utils/Functions";
import { calculateScore } from "../utils/CalculateScore";

const Catjack = ({ colorCard, colorCardDealer, colorCardHide }) => {
	// VARIABLES: Game
	const [gameDeck, setGameDeck] = useState([...fullDeck]);
	const [gameOver, setGameOver] = useState(false);
	const [turnOver, setTurnOver] = useState(false);
	const [result, setResult] = useState("");
	const [catLives, setCatLives] = useState(9);
	const [playerCards, setPlayerCards] = useState([]);
	const [dealerCards, setDealerCards] = useState([]);
	const [playerScore, setPlayerScore] = useState(0);
	const [dealerScore, setDealerScore] = useState(0);
	const dealerTempScore = getPoints(dealerCards[0]);

	// One page loads, call startGame() to get player's and dealer's cards
	useEffect(() => {
		if (playerScore === 0 && dealerScore === 0) {
			startGame({
				gameDeck,
				setGameDeck,
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
		gameDeck,
		setGameDeck,
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
		const newCard = getCard({ gameDeck, setGameDeck });
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
		const refreshDeck = fullDeck;
		console.log(refreshDeck);
		setGameDeck([...refreshDeck]);
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

	useEffect(() => {
		if (catLives === 0) {
			setTimeout(() => {
				setGameOver(true);
			}, 2000);
		}
	}, [catLives]);

	// ===============================================
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
					{/* <Link to="/"> */}
					<button onClick={() => window.location.reload()}>
						Back to Home
					</button>
					{/* </Link> */}
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
