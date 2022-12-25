import { fullDeck } from "./Deck";

const userCards = [];
const computerCards = [];
let userScore = 0;
let computerScore = 0;

// FUNCTION: Draw card and convert points
export const getCard = () => {
	const index = Math.floor(Math.random() * fullDeck.length);
	const card = fullDeck[index];
	fullDeck.splice(index, 1);
	return card;
};

// FUNCTION: Convert card to points
export const getPoints = (card) => {
	if (
		card === "2" ||
		card === "3" ||
		card === "4" ||
		card === "5" ||
		card === "6" ||
		card === "7" ||
		card === "8" ||
		card === "9" ||
		card === "10"
	) {
		return parseInt(card);
	} else if (card === "J" || card === "Q" || card === "K") {
		return 10;
	} else if (card === "A") {
		return 11;
	}
};

// LOOP: Draw 2 cards for player/dealer when game starts
for (let i = 0; i < 2; i++) {
	const newUserCard = getCard();
	userScore += getPoints(newUserCard);
	userCards.push(newUserCard);

	const newComputerCard = getCard();
	computerScore += getPoints(newComputerCard);
	computerCards.push(newComputerCard);

	// userScore += userCards[i].points;
	// computerScore += computerCards[i].points;
}

export { userCards, computerCards, userScore, computerScore };
