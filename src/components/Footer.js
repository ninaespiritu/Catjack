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
			<p>
				colour:{" "}
				{colorCard === cardGreen
					? "green"
					: colorCard === cardPink
					? "pink"
					: "purple"}
			</p>

			<p onClick={() => musicToggle()}>
				music: {musicPlaying ? "on" : "off"}
			</p>
			<a href="https://github.com/ninaespiritu/Catjack" target="_blank">
				<p>github</p>
			</a>
		</footer>
	);
};

export default Footer;
