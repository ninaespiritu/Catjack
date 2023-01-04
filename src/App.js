import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Catjack from "./components/Catjack";
import Footer from "./components/Footer";
import musicBackground from "./assets/musicBackground.mp3";
import cardGreen from "./assets/cardGreen.png";
import cardPink from "./assets/cardPink.png";
import cardPurple from "./assets/cardPurple.png";
import cardDealer from "./assets/cardDealer.png";
import cardHide from "./assets/cardHide.png";
import { fullDeck } from "./utils/Deck";
import { getCard, getPoints, startGame } from "./utils/Functions";
import { calculateScore } from "./utils/CalculateScore";

const App = () => {
	// Click "Play Now" to set value to true, then render Catjack
	const [playing, setPlaying] = useState(false);

	// VARIABLES: Game
	const [gameDeck, setGameDeck] = useState([...fullDeck]);
	const [gameOver, setGameOver] = useState(false);
	const [turnOver, setTurnOver] = useState(false);
	const [result, setResult] = useState("");
	const [catLives, setCatLives] = useState(9);
	const [playerCards, setPlayerCards] = useState([]);
	const [dealerCards, setDealerCards] = useState([]);
	const [playerScore, setPlayerScore] = useState(0);
	const [dealerScore, setDealerScore] = useState(0);
	const dealerTempScore = getPoints(dealerCards[0]);

	// VARIABLEs: Design
	const [colorCard, setColorCard] = useState(cardGreen);
	const colorCardDealer = cardDealer;
	const colorCardHide = cardHide;

	// VARIABLES: Music
	const [musicAutoplay, setMusicAutoplay] = useState(false);
	const [musicPlaying, setMusicPlaying] = useState(false);
	const musicRef = useRef(new Audio(musicBackground));

	// Toggle music on/off
	const musicToggle = () => {
		if (!musicPlaying) {
			setMusicPlaying(true);
			musicRef.current.play();
			musicRef.current.loop = true;
		} else if (musicPlaying) {
			setMusicPlaying(false);
			musicRef.current.pause();
		}
	};

	// Click "Play now" to autoplay background music
	const musicPlay = () => {
		if (!musicAutoplay) {
			setMusicAutoplay(true);
			setMusicPlaying(true);
			console.log(musicAutoplay);
			musicRef.current.play();
			musicRef.current.loop = true;
		}
	};

	// Once page loads, call startGame() to get player's and dealer's cards
	useEffect(() => {
		if (playerScore === 0 && dealerScore === 0) {
			startGame({
				gameDeck,
				setGameDeck,
				playerCards,
				setPlayerCards,
				playerScore,
				setPlayerScore,
				dealerCards,
				setDealerCards,
				dealerScore,
				setDealerScore,
			});
		}
	}, [
		gameDeck,
		setGameDeck,
		playerCards,
		setPlayerCards,
		playerScore,
		setPlayerScore,
		dealerCards,
		setDealerCards,
		dealerScore,
		setDealerScore,
	]);

	// Constantly checks for automatic wins/loses
	useEffect(() => {
		if (dealerScore === 21 && dealerCards.length === 2) {
			setResult("Dealer has Catjack.");
		} else if (playerScore === 21 && playerCards.length === 2) {
			setResult("Player has Catjack.");
		} else if (playerScore === 21 && dealerScore < 21) {
			setResult("Player scores 21.");
		} else if (playerScore > 21) {
			setResult("Player went over 21.");
		}
	}, [
		playerScore,
		dealerScore,
		playerCards.length,
		dealerCards.length,
		catLives,
		setCatLives,
	]);

	// Calculates lives left after an automatic win/lose
	const calculateResultLives = () => {
		if (dealerScore === 21 && dealerCards.length === 2) {
			setTurnOver(true);
			const loseCatLives = catLives - 1;
			setCatLives(loseCatLives);
		} else if (playerScore === 21 && playerCards.length === 2) {
			setTurnOver(true);
			const addCatLives = catLives + 1;
			setCatLives(addCatLives);
		} else if (playerScore > 21) {
			setTurnOver(true);
			const loseCatLives = catLives - 1;
			setCatLives(loseCatLives);
		}
	};

	// If there is an automatic win/lose, run above function
	if (!turnOver && result !== "") {
		calculateResultLives();
	}

	// Calculates winner and lives left after player clicks "Stand"
	const calculateResult = () => {
		if (
			(playerScore === 21 && dealerScore === 21) ||
			playerScore === dealerScore
		) {
			dealerHit() ? dealerHit() : setResult("Both hands are equal.");
		} else if (dealerScore < playerScore) {
			dealerHit() ? dealerHit() : setResult("Player scores higher.");
		} else if (playerScore < dealerScore && dealerScore > 21) {
			setResult("Dealer went over 21.");
		} else if (playerScore < dealerScore) {
			setResult("Dealer scores higher.");
			const loseCatLives = catLives - 1;
			setCatLives(loseCatLives);
		}
	};

	// If player's turn ends by clicking "Stand", run above function
	if (turnOver && result === "") {
		setTimeout(() => {
			calculateResult();
		}, 1000);
	}

	// Player clicks "Hit" to draw new card
	const buttonHit = (cards, setCards, score, setScore) => {
		const newCard = getCard({ gameDeck, setGameDeck });
		const newCards = [...cards, newCard];
		setCards(newCards);
		const newScore = score + getPoints(newCard);
		const finalScore = calculateScore(newCards, newScore);
		setScore(finalScore);
	};

	// Player clicks "Stand" to end turn
	const buttonStand = () => {
		setTurnOver(true);
	};

	// Player clicks "Play Again" to start new game
	const buttonPlayAgain = () => {
		const refreshDeck = fullDeck;
		console.log(refreshDeck);
		setGameDeck([...refreshDeck]);
		setPlayerCards([]);
		setDealerCards([]);
		setPlayerScore(0);
		setDealerScore(0);
		setTurnOver(false);
		setResult("");
	};

	// Dealer repeatedly calls buttonHit() during its turn
	const dealerHit = () => {
		if (dealerScore < 17) {
			buttonHit(dealerCards, setDealerCards, dealerScore, setDealerScore);
			return true;
		} else {
			return false;
		}
	};

	useEffect(() => {
		if (catLives === 0) {
			setTimeout(() => {
				setGameOver(true);
			}, 1500);
		}
	}, [catLives]);

	return (
		<div className="app">
			{playing ? (
				<Catjack
					setPlaying={setPlaying}
					colorCard={colorCard}
					colorCardDealer={colorCardDealer}
					colorCardHide={colorCardHide}
					cardGreen={cardGreen}
					cardPink={cardPink}
					cardPurple={cardPurple}
					gameOver={gameOver}
					setGameOver={setGameOver}
					turnOver={turnOver}
					result={result}
					catLives={catLives}
					setCatLives={setCatLives}
					playerCards={playerCards}
					dealerCards={dealerCards}
					playerScore={playerScore}
					dealerScore={dealerScore}
					dealerTempScore={dealerTempScore}
					setPlayerCards={setPlayerCards}
					setPlayerScore={setPlayerScore}
					buttonHit={buttonHit}
					buttonStand={buttonStand}
					buttonPlayAgain={buttonPlayAgain}
				/>
			) : (
				<Home setPlaying={setPlaying} musicPlay={musicPlay} />
			)}

			<Footer
				musicToggle={musicToggle}
				musicPlaying={musicPlaying}
				colorCard={colorCard}
				setColorCard={setColorCard}
				cardGreen={cardGreen}
				cardPink={cardPink}
				cardPurple={cardPurple}
			/>
		</div>
	);
};

export default App;
