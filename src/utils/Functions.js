import { calculateScore } from "./CalculateScore";
import { fullDeck } from "./Deck";

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

// FUNCTION: Draw 2 cards each for player and dealer + convert their points
export const startGame = ({
	playerCards,
	setPlayerCards,
	playerScore,
	setPlayerScore,
	dealerCards,
	setDealerCards,
	dealerScore,
	setDealerScore,
}) => {
	const newPlayerCard_1 = getCard();
	const newPlayerCard_2 = getCard();
	const newPlayerCards = [...playerCards, newPlayerCard_1, newPlayerCard_2];
	setPlayerCards(newPlayerCards);
	const pointsPlayerCard_1 = getPoints(newPlayerCard_1);
	const pointsPlayerCard_2 = getPoints(newPlayerCard_2);
	const newPlayerScore =
		playerScore + pointsPlayerCard_1 + pointsPlayerCard_2;
	const finalPlayerScore = calculateScore(newPlayerCards, newPlayerScore);
	setPlayerScore(finalPlayerScore);

	const newDealerCard_1 = getCard();
	const newDealerCard_2 = getCard();
	const newDealerCards = [...dealerCards, newDealerCard_1, newDealerCard_2];
	setDealerCards(newDealerCards);
	const pointsDealerCard_1 = getPoints(newDealerCard_1);
	const pointsDealerCard_2 = getPoints(newDealerCard_2);
	const newDealerScore =
		dealerScore + pointsDealerCard_1 + pointsDealerCard_2;
	const finalDealerScore = calculateScore(newDealerCards, newDealerScore);
	setDealerScore(finalDealerScore);
};
