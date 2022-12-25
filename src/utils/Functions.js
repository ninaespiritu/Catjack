import { fullDeck } from "./Deck";

// FUNCTION: Draw 1 new card
export const getCard = () => {
	const index = Math.floor(Math.random() * fullDeck.length);
	const card = fullDeck[index];
	fullDeck.splice(index, 1);
	return card;
};

const userCards = [];
const computerCards = [];
let userScore = 0;
let computerScore = 0;

// LOOP: Draw 2 cards for player/dealer when game starts
for (let i = 0; i < 2; i++) {
	userCards.push(getCard());
	computerCards.push(getCard());
	userScore += userCards[i].points;
	computerScore += computerCards[i].points;
}

export { userCards, computerCards, userScore, computerScore };
