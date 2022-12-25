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
			let points = parseInt(values[x]);
			if (values[x] === "J" || values[x] === "Q" || values[x] === "K") {
				points = 10;
			}
			if (values[x] === "A") {
				points = 1;
			}
			const card = {
				suit: suits[y],
				value: values[x],
				points: points,
			};
			fullDeck.push(card);
		}
	}
};

newDeck();

export { fullDeck };
