import "./App.css";
import { Home } from "./pages/Home";
import { Catjack } from "./pages/Catjack";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/play" element={<Catjack />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
