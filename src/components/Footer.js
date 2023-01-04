import "../styles/Footer.css";
import { BsVolumeUpFill, BsVolumeMuteFill, BsGithub } from "react-icons/bs";

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
				<div className="footer-icon react">
					{musicPlaying ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
				</div>
				<p>music: {musicPlaying ? "on" : "off"}</p>
			</div>

			<div className="footer-group">
				<div className="footer-icon react">
					<BsGithub />
				</div>
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
