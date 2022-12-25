import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { fullDeck } from "./utils/Deck";
import { getCard, userCards, computerCards } from "./utils/Functions";

export const Blackjack = () => {
	// const [deck, setDeck] = useState(fullDeck);
	// console.log(deck);

	const [playerScore, setPlayerScore] = useState(0);
	const [dealerScore, setDealerScore] = useState(0);

	const [playerCards, setPlayerCards] = useState(userCards);
	const [dealerCards, setDealerCards] = useState(computerCards);

	console.log(playerCards);
	console.log(dealerCards);

	// FUNCTION: Player clicks "Hit" to draw new card
	const buttonHit = () => {
		const newCard = getCard();
		const newCards = [...playerCards, newCard];
		setPlayerCards(newCards);
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
