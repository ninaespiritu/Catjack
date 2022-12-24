// FUNCTION: CREATE FULL DECK

let fullDeck = [];
const suits = ["Heart", "Diamond", "Spade", "Club"];
const values = [
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
	"A",
];

const newDeck = (x, y) => {
	for (x = 0; x < values.length; x++) {
		for (y = 0; y < suits.length; y++) {
			let weight = parseInt(values[x]);
			if (values[x] === "J" || values[x] === "Q" || values[x] === "K") {
				weight = 10;
			}
			if (values[x] === "A") {
				weight = 1;
			}
			const card = {
				suit: suits[y],
				value: values[x],
				weight: weight,
			};
			fullDeck.push(card);
		}
	}
};

newDeck();

export { fullDeck };
