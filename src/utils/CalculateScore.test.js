const app = require("./CalculateScore");

// SCENARIO:
// Given I have a king and an ace
// When my score is evaluated
// Then my score is 21
describe("Given I have a king and an ace", () => {
	it("should equal to 21", () => {
		const cards = ["K", "A"];
		const score = 21;
		const answer = app.calculateScore(cards, score);
		expect(answer).toEqual(21);
	});
});

// SCENARIO:
// Given I have a king, a queen, and an ace
// When my score is evaluated
// Then my score is 21
describe("Given I have a king, a queen, and an ace", () => {
	it("should equal to 21", () => {
		const cards = ["A", "Q", "K"];
		const score = 31;
		const answer = app.calculateScore(cards, score);
		expect(answer).toEqual(21);
	});
});

// SCNEARIO:
// Given that I have a nine, an ace, and another ace
// When my score is evaluated
// Then my score is 21
describe("Given I have a nine, an ace, and another ace", () => {
	it("should equal to 21", () => {
		const cards = ["9", "A", "A"];
		const score = 31;
		const answer = app.calculateScore(cards, score);
		expect(answer).toEqual(21);
	});
});

// SCENARIO (EXTRA):
// Given that I have two aces
// When my score is evaluated
// Then my score is 12
describe("Scenario: [ A - A ]", () => {
	it("Should equal to 12", () => {
		const cards = ["A", "A"];
		const score = 22;
		const answer = app.calculateScore(cards, score);
		expect(answer).toEqual(12);
	});
});
