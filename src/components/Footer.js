import "../styles/Footer.css";

const Footer = ({
	musicToggle,
	musicPlaying,
	colorCard,
	setColorCard,
	cardGreen,
	cardPink,
	cardPurple,
}) => {
	return (
		<footer className="footer">
			<div className="footer-group">
				<div className="footer-icon">
					<button
						className="button-color card-green"
						onClick={() => setColorCard(cardGreen)}
					></button>
					<button
						className="button-color card-pink"
						onClick={() => setColorCard(cardPink)}
					></button>
					<button
						className="button-color card-purple"
						onClick={() => setColorCard(cardPurple)}
					></button>
				</div>
				<p>
					colour:{" "}
					{colorCard === cardGreen
						? "green"
						: colorCard === cardPink
						? "pink"
						: "purple"}
				</p>
			</div>

			<div className="footer-group" onClick={() => musicToggle()}>
				<div className="footer-icon">
					{musicPlaying ? "[#]" : "[ ]"}
				</div>
				<p>music: {musicPlaying ? "on" : "off"}</p>
			</div>

			<div className="footer-group">
				<div className="footer-icon">#</div>
				<a
					href="https://github.com/ninaespiritu/Catjack"
					target="_blank"
					rel="noreferrer"
				>
					<p>github</p>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
