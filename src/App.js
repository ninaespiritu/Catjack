import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Catjack from "./pages/Catjack";
import musicBackground from "./assets/musicBackground.mp3";
import { useRef, useState } from "react";

const App = () => {
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

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								musicToggle={musicToggle}
								musicPlaying={musicPlaying}
							/>
						}
					/>
					<Route
						path="/play"
						element={
							<Catjack
								musicToggle={musicToggle}
								musicPlaying={musicPlaying}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
