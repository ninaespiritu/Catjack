import "../styles/Footer.css";
import { BsGithub } from "react-icons/bs";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { useState } from "react";

const Footer = ({
	musicToggle,
	musicPlaying,
	colorCard,
	setColorCard,
	cardGreen,
	cardPink,
	cardPurple,
}) => {
	const [open, setOpen] = useState(false);

	// FUNCTION: Toggle open/close footer menu on smaller devices
	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<footer>
			<div className={open ? "footer-menu active" : "footer-menu"}>
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

				<div
					className="footer-group music"
					onClick={() => musicToggle()}
				>
					<div className="footer-icon react">
						{musicPlaying ? <FaPlayCircle /> : <FaPauseCircle />}
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
			</div>

			<div className="hamburger" onClick={handleOpen}>
				<button>{open ? "Close Menu" : "Open Menu"}</button>
			</div>
		</footer>
	);
};

export default Footer;
