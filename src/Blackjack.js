import { useEffect, useState } from "react";
import { fullDeck } from "./utils/Deck";
import { getCard, userCards, computerCards } from "./utils/Functions";

export const Blackjack = () => {
	const [deck, setDeck] = useState(fullDeck);
	// console.log(deck);

	// FUNCTION: GET 1 CARD

	const [playerCards, setPlayerCards] = useState(userCards);
	const [dealerCards, setDealerCards] = useState(computerCards);

	const [playerScore, setPlayerScore] = useState(0);
	const [dealerScore, setDealerScore] = useState(0);

  console.log(playerCards)
  console.log(dealerCards)

	return (
		<div>
			<h1>Blackjack</h1>

			{deck.map((card, i) => (
				<p key={i}>{card.value}</p>
			))}
		</div>
	);
};
