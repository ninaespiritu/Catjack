import "../styles/FooterModal.css";
import { BsGithub } from "react-icons/bs";
import { FaTimes, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FooterModal = ({
	musicToggle,
	musicPlaying,
	colorCard,
	setColorCard,
	cardGreen,
	cardPink,
	cardPurple,
	menuVisible,
	toggleMenu,
}) => {
	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.075,
				delayChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
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
		},
		exit: {
			opacity: 0,
			y: 50,
		},
	};

	return (
		<div>
			<AnimatePresence>
				{menuVisible && (
					<motion.footer
						variants={container}
						initial="hidden"
						animate="show"
						exit="exit"
					>
						<div className="modal-container">
							<div
								className="modal-toggle close"
								onClick={toggleMenu}
							>
								<FaTimes />
								<p>close</p>
							</div>

							<div className="modal-menu">
								<motion.div
									className="modal-group"
									variants={item}
								>
									<div className="modal-icon">
										<button
											className="modal-button-color card-green"
											onClick={() => {
												setColorCard(cardGreen);
											}}
										></button>
										<button
											className="modal-button-color card-pink"
											onClick={() =>
												setColorCard(cardPink)
											}
										></button>
										<button
											className="modal-button-color card-purple"
											onClick={() =>
												setColorCard(cardPurple)
											}
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
									className="modal-group"
									onClick={() => musicToggle()}
									variants={item}
								>
									<div className="modal-icon react">
										{musicPlaying ? (
											<FaPlayCircle />
										) : (
											<FaPauseCircle />
										)}
									</div>
									<p>music: {musicPlaying ? "on" : "off"}</p>
								</motion.div>

								<motion.div
									className="modal-group"
									variants={item}
								>
									<div className="modal-icon react">
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
						</div>
					</motion.footer>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FooterModal;
