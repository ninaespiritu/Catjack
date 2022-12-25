const app = require("./CalculateScore");

// TEST SCNEARIO:
// Given that I have a nine, an ace, and another ace
// When my score is evaluated
// Then my score is 21

describe("Scenario: [ 9 - A - A ]", () => {
	it("Should equal to 21", () => {
		const cards = ["9", "A", "A"];
		const score = 31;
		const answer = app.calculateScore(cards, score)
		expect(answer).toEqual(21);
	});
});

describe("Scenario: [ A - A ]", () => {
	it("Should equal to 12", () => {
		const cards = ["A", "A"];
		const score = 22;
		const answer = app.calculateScore(cards, score)
		expect(answer).toEqual(12);
	});
});

// TEST SCENARIO:
// Two Ace cards = 12, not 22
