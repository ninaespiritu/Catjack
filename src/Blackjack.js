import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import {
	getCard,
	userCards,
	computerCards,
	userScore,
	computerScore,
	getPoints,
} from "./utils/Functions";

export const Blackjack = () => {
	const [turnOver, setTurnOver] = useState(false);
	const [result, setResult] = useState("");

	const [playerCards, setPlayerCards] = useState(userCards);
	const [dealerCards, setDealerCards] = useState(computerCards);

	const [playerScore, setPlayerScore] = useState(userScore);
	const [dealerScore, setDealerScore] = useState(computerScore);
	const dealerTempScore = getPoints(dealerCards[0]);

	// console.log(playerCards);
	// console.log(dealerCards);

	// FUNCTION: Calculate score
	const calculateScore = (cards, score) => {
		if (score === 21 && cards.length === 2) {
			return 21;
		} else if (cards[-1] === "A" && score > 21) {
			return score - 10;
		} else {
			return score;
		}
	};

	useEffect(() => {
		// if (playerScore === 21 || dealerScore === 21 || playerScore > 21) {
		// 	console.log("Turn over");
		// }
		if (dealerScore === 21 && dealerCards.length === 2) {
			setResult("Dealer has Blackjack. You lose.");
			setTurnOver(true);
		} else if (playerScore === 21 && playerCards.length === 2) {
			setResult("You have Blackjack! You win!");
			setTurnOver(true);
		} else if (dealerScore === 21 && playerScore < 21) {
			setResult("You lose.");
			setTurnOver(true);
		} else if (playerScore === 21 && dealerScore < 21) {
			setResult("You win!");
			setTurnOver(true);
		} else if (playerScore > 21) {
			setResult("You went over 21. You lose.");
			setTurnOver(true);
		}
	}, [playerScore, dealerScore]);

	if (turnOver && result === "") {
		setTimeout(() => {
			calculateResult();
		}, 1000);
	}

	const calculateResult = () => {
		if (
			(playerScore === 21 && dealerScore === 21) ||
			playerScore === dealerScore
		) {
			dealerHit() ? dealerHit() : setResult("It's a tie!");
		} else if (dealerScore < playerScore) {
			dealerHit() ? dealerHit() : setResult("You have the higher score. You win!");
		} else if (playerScore < dealerScore && dealerScore > 21) {
			setResult("Dealer went over 21. You win!");
		} else if (playerScore < dealerScore) {
			setResult("Dealer has the higher score. You lose.");
		}
	};

	const dealerHit = () => {
		if (dealerScore < 17) {
			buttonHit(dealerCards, setDealerCards, dealerScore, setDealerScore);
			return true;
		} else {
			return false;
		}
	};

	// BUTTON: Player clicks "Hit" to draw new card
	const buttonHit = (cards, setCards, score, setScore) => {
		const newCard = getCard();
		const newCards = [...cards, newCard];
		setCards(newCards);
		const newScore = score + getPoints(newCard);
		const finalScore = calculateScore(newCards, newScore);
		setScore(finalScore);
	};

	// BUTTON: Player clicks "Stand" to end turn
	const buttonStand = () => {
		setTurnOver(true);
	};

	// BUTTON: Player clicks "Play Again" to start new game
	const buttonPlayAgain = () => {
		window.location.reload();
	};

	// ===============================================
	return (
		<div>
			<h2>Dealer Score: {turnOver ? dealerScore : dealerTempScore}</h2>
			{turnOver ? (
				<div style={{ display: "flex" }}>
					{dealerCards.map((card, i) => (
						<Card card={card} key={i} />
					))}
				</div>
			) : (
				<div style={{ display: "flex" }}>
					<Card card={dealerCards[0]} />
					<Card />
				</div>
			)}

			<p>{result}</p>

			<h2>Player Score: {playerScore}</h2>
			<div style={{ display: "flex" }}>
				{playerCards.map((card, i) => (
					<Card card={card} key={i} />
				))}
			</div>

			{result === "" ? (
				<div>
					<button
						onClick={() =>
							buttonHit(
								playerCards,
								setPlayerCards,
								playerScore,
								setPlayerScore
							)
						}
					>
						Hit
					</button>
					<button onClick={() => buttonStand()}>Stand</button>
				</div>
			) : (
				<div>
					{" "}
					<button onClick={() => buttonPlayAgain()}>
						Play Again
					</button>
				</div>
			)}
		</div>
	);
};
