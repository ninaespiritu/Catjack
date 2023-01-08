import "../styles/FooterModal.css";
import { BsGithub } from "react-icons/bs";
import { FaTimes, FaPlayCircle, FaPauseCircle } from "react-icons/fa";

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
	return (
		<div>
			{menuVisible ? (
				<footer>
					<div className="modal-container">
						<div className="modal-toggle close" onClick={toggleMenu}>
							<FaTimes />
							<p>close</p>
						</div>

						<div className="modal-menu">
							<div className="modal-group">
								<div className="modal-icon">
									<button
										className="modal-button-color card-green"
										onClick={() => {
											setColorCard(cardGreen);
										}}
									></button>
									<button
										className="modal-button-color card-pink"
										onClick={() => setColorCard(cardPink)}
									></button>
									<button
										className="modal-button-color card-purple"
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
							</div>

							<div
								className="modal-group"
								onClick={() => musicToggle()}
							>
								<div className="modal-icon react">
									{musicPlaying ? (
										<FaPlayCircle />
									) : (
										<FaPauseCircle />
									)}
								</div>
								<p>music: {musicPlaying ? "on" : "off"}</p>
							</div>

							<div className="modal-group">
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
							</div>
						</div>
					</div>
				</footer>
			) : null}
		</div>
	);
};

export default FooterModal;
