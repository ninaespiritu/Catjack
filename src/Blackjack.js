import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { fullDeck } from "./utils/Deck";
import {
	getCard,
	userCards,
	computerCards,
	userScore,
	computerScore,
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
		const newScore = playerScore + newCard.points;
		setPlayerCards(newCards);
		setPlayerScore(newScore);
	};

	// ===============================================
	return (
		<div>
			<h2>Dealer Cards: {dealerScore}</h2>
			<div style={{ display: "flex" }}>
				{dealerCards.map((card, i) => (
					<Card card={card} key={i} />
				))}
			</div>

			<h2>Player Cards: {playerScore}</h2>
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
