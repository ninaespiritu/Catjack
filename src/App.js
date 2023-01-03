import { useRef, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Catjack from "./pages/Catjack";
import Footer from "./components/Footer";
import musicBackground from "./assets/musicBackground.mp3";
import cardGreen from "./assets/cardGreen.png";
import cardPink from "./assets/cardPink.png";
import cardPurple from "./assets/cardPurple.png";
import cardDealer from "./assets/cardDealer.png";
import cardHide from "./assets/cardHide.png";

const App = () => {
	// VARIABLE: Click "Play Now" to set value to true, then render Catjack
	const [playing, setPlaying] = useState(false);

	// VARIABLEs: Design
	const [colorCard, setColorCard] = useState(cardGreen);
	const colorCardDealer = cardDealer;
	const colorCardHide = cardHide;

	// VARIABLES: Music
	const [musicAutoplay, setMusicAutoplay] = useState(false);
	const [musicPlaying, setMusicPlaying] = useState(false);
	const musicRef = useRef(new Audio(musicBackground));

	const musicToggle = () => {
		if (!musicPlaying) {
			setMusicPlaying(true);
			musicRef.current.play();
		} else if (musicPlaying) {
			setMusicPlaying(false);
			musicRef.current.pause();
		}
	};

	const musicPlay = () => {
		if (!musicAutoplay) {
			setMusicAutoplay(true);
			setMusicPlaying(true);
			console.log(musicAutoplay);
			musicRef.current.play();
		}
	};

	return (
		<div className="app">
			{playing ? (
				<Catjack
					colorCard={colorCard}
					colorCardDealer={colorCardDealer}
					colorCardHide={colorCardHide}
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
