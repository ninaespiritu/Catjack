import "../styles/Footer.css";
import { BsGithub } from "react-icons/bs";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = ({
	musicToggle,
	musicPlaying,
	colorCard,
	setColorCard,
	cardGreen,
	cardPink,
	cardPurple,
}) => {
	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				delay: 1,
				staggerChildren: 0.15,
				delayChildren: 1,
			},
		},
	};

	const item = {
		hidden: {
			opacity: 0,
			y: -25,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.footer variants={container} initial="hidden" animate="show">
			<div className="footer-menu">
				<motion.div className="footer-group" variants={item}>
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
						cards:{" "}
						{colorCard === cardGreen
							? "green"
							: colorCard === cardPink
							? "pink"
							: "purple"}
					</p>
				</motion.div>

				<motion.div
					className="footer-group music"
					onClick={() => musicToggle()}
					variants={item}
				>
					<div className="footer-icon react">
						{musicPlaying ? <FaPlayCircle /> : <FaPauseCircle />}
					</div>
					<p>music: {musicPlaying ? "on" : "off"}</p>
				</motion.div>

				<motion.div className="footer-group" variants={item}>
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
				</motion.div>
			</div>
		</motion.footer>
	);
};

export default Footer;
