export const Card = ({ card }) => {
	return (
		<div
			style={{
				margin: "10px",
				background: "#F1F1F1",
				width: "100px",
				height: "150px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "20px",
			}}
		>
			<h3>{card}</h3>
			{/* <h3>{card.value}</h3> */}

			{/* {card.suit === "Heart" ? (
				<p>&#9825;</p>
			) : card.suit === "Diamond" ? (
				<p>&#9826;</p>
			) : card.suit === "Spade" ? (
				<p>&#9828;</p>
			) : (
				<p>&#9831;</p>
			)} */}
		</div>
	);
};
