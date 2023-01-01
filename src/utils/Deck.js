let fullDeck = [];
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

// FUNCTION: CREATE FULL DECK
const newDeck = (i, x) => {
	for (i = 0; i < 4; i++) {
		for (x = 0; x < values.length; x++) {
			fullDeck.push(values[x]);
		}
	}
};

newDeck();

export { fullDeck };
