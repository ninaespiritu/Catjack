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
import { calculateScore } from "./utils/CalculateScore";

export const Blackjack = () => {
	const [turnOver, setTurnOver] = useState(false);
	const [result, setResult] = useState("");

	const [playerCards, setPlayerCards] = useState(userCards);
	const [dealerCards, setDealerCards] = useState(computerCards);

	const [playerScore, setPlayerScore] = useState(userScore);
	const [dealerScore, setDealerScore] = useState(computerScore);
	const dealerTempScore = getPoints(dealerCards[0]);

	const [catLives, setCatLives] = useState(9);
	// console.log(playerCards);
	// console.log(dealerCards);

	useEffect(() => {
		if (dealerScore === 21 && dealerCards.length === 2) {
			setResult("Dealer has Blackjack. You lose.");
			setTurnOver(true);
		} else if (playerScore === 21 && playerCards.length === 2) {
			setResult("You have Blackjack! You win!");
			setTurnOver(true);
		} else if (playerScore === 21 && dealerScore < 21) {
			setResult("You win!");
			setTurnOver(true);
		} else if (playerScore > 21) {
			setResult("You went over 21. You lose.");
			setTurnOver(true);
		}
	}, [playerScore, dealerScore, playerCards.length, dealerCards.length]);

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
			dealerHit()
				? dealerHit()
				: setResult("You have the higher score. You win!");
		} else if (playerScore < dealerScore && dealerScore > 21) {
			setResult("Dealer went over 21. You win!");
		} else if (playerScore < dealerScore) {
			setResult("Dealer has the higher score. You lose.");
		}
	};

	const dealerHit = () => {
		if (dealerScore < 17 || dealerScore < playerScore) {
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

			{[...Array(catLives)].map((e, i) => (
				<span key={i}>&#9825;</span>
			))}

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
