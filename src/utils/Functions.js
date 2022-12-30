import { calculateScore } from "./CalculateScore";
import { fullDeck } from "./Deck";

// const userCards = [];
// const computerCards = [];
// let userScore = 0;
// let computerScore = 0;

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
// for (let i = 0; i < 2; i++) {
// 	const newUserCard = getCard();
// 	userCards.push(newUserCard);
// 	const newUserScore = userScore + getPoints(newUserCard);
// 	const finalUserScore = calculateScore(userCards, newUserScore);
// 	userScore = finalUserScore;

// 	const newComputerCard = getCard();
// 	computerCards.push(newComputerCard);
// 	const newComputerScore = computerScore + getPoints(newComputerCard);
// 	const finalComputerScore = calculateScore(userCards, newComputerScore);
// 	computerScore = finalComputerScore;
// }

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

// export { userCards, computerCards, userScore, computerScore };
