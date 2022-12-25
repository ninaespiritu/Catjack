// FUNCTION: Calculate score
const calculateScore = (cards, score) => {
	if (score === 21 && cards.length === 2) {
		return 21;
	} else if (cards.at(-1) === "A" && score > 21) {
		return score - 10;
	} else {
		return score;
	}
};

module.exports = {
	calculateScore,
};
