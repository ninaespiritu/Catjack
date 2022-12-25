import { useState } from "react";
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
	const [playerScore, setPlayerScore] = useState(userScore);
	const [dealerScore, setDealerScore] = useState(computerScore);

	const [playerCards, setPlayerCards] = useState(userCards);
	const [dealerCards, setDealerCards] = useState(computerCards);

	// console.log(playerCards);
	// console.log(dealerCards);

	// FUNCTION: Player clicks "Hit" to draw new card
	const buttonHit = () => {
		const newCard = getCard();
		const newCards = [...playerCards, newCard];
		const newScore = playerScore + getPoints(newCard);
		setPlayerCards(newCards);
		setPlayerScore(newScore);
	};

	// ===============================================
	return (
		<div>
			<h2>Dealer Score: {dealerScore}</h2>
			<div style={{ display: "flex" }}>
				{dealerCards.map((card, i) => (
					<Card card={card} key={i} />
				))}
			</div>

			<h2>Player Score: {playerScore}</h2>
			<div style={{ display: "flex" }}>
				{playerCards.map((card, i) => (
					<Card card={card} key={i} />
				))}
			</div>

			<button onClick={() => buttonHit()}>Hit</button>
			<button>Stand</button>
		</div>
	);
};
