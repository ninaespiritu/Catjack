import { fullDeck } from "./Deck";

// FUNCTION: GET 1 CARD
export const getCard = () => {
	const index = Math.floor(Math.random() * fullDeck.length);
	const card = fullDeck[index];
	fullDeck.splice(index, 1);
	return card;
};

const userCards = [];
const computerCards = [];

// LOOP: DRAW 2 CARDS FOR PLAYERS
for (let i = 0; i < 2; i++) {
	userCards.push(getCard());
	computerCards.push(getCard());
}

export { userCards, computerCards };
