window.addEventListener("DOMContentLoaded", function () {
	if (this.localStorage.getItem("user-score") != null) {
		this.document.getElementById("user-score").innerText =
			this.localStorage.getItem("user-score");
	}
	if (this.localStorage.getItem("computer-score") !== null) {
		this.document.getElementById("computer-score").innerText =
			this.localStorage.getItem("computer-score");
	}

	document
		.getElementById("rules-button")
		.addEventListener("click", function () {
			let noticeBox = document.getElementById("notice-board");
			noticeBox.style.display = "block";
			document.getElementById("rules-button").style.display = "none";
		});

	document.getElementById("cross").addEventListener("click", function () {
		let noticeBox = document.getElementById("notice-board");
		noticeBox.style.display = "none";
		document.getElementById("rules-button").style.display = "block";
	});
});

const pickUserHand = (hand) => {
	let hands = document.querySelector(".hands");
	hands.style.display = "none";

	let contest = document.querySelector(".contest");
	contest.style.display = "flex";

	let computerHand = pickComputerHand();

	modifyUserHTML(hand);
	modifyComputerHTML(computerHand);

	let winner = decideWinner(hand, computerHand);

	updateScores(winner);
	modifyMessage(winner);

	decideNextDisplay(winner);
};

const pickComputerHand = () => {
	const options = ["rock", "paper", "scissor"];
	const index = Math.floor(Math.random() * 2);
	return options[index];
};

const decideWinner = (userHand, computerHand) => {
	if (userHand === computerHand) {
		return "tie";
	} else if (
		(userHand === "rock" && computerHand === "scissor") ||
		(userHand === "scissor" && computerHand === "paper") ||
		(userHand === "paper" && computerHand === "rock")
	) {
		return "user";
	} else {
		return "pc";
	}
};

const modifyMessage = (winner) => {
	if (winner === "pc") {
		document.getElementById("message1").innerText = "You lost";
		document.getElementById("message2").innerText = "Against PC";
		document.getElementById("game-button").innerText = "PLAY AGAIN";
	} else if (winner === "user") {
		document.getElementById("message1").innerText = "You win";
		document.getElementById("message2").innerText = "Against PC";
		document.getElementById("game-button").innerText = "PLAY AGAIN";
	} else {
		document.getElementById("message1").innerText = "Tie up";
		document.getElementById("message2").innerText = "";
		document.getElementById("game-button").innerText = "REPLAY";
	}
};

const modifyUserHTML = (hand) => {
	if (hand === "rock") {
		document.getElementById("user-pick").innerHTML = `
			<div
						style="
							width: 160px;
							height: 160px;
							border: 20px solid #0074b6;
							padding-top: 10%;
							padding-left: 7%;
							background-color: white;
							border-radius: 100%;
						"
						>
						<img src="icons8-fist-67 1.svg" alt="rock" />
					</div>
		`;
	} else if (hand === "paper") {
		document.getElementById("user-pick").innerHTML = `<div
						style="
							width: 160px;
							height: 160px;
							border: 20px solid #ffa943;
							padding-top: 8%;
							padding-left: 8%;
							background-color: white;
							border-radius: 100%;
						">
						<img src="icons8-hand-64 1.svg" alt="paper" />
					</div>`;
	} else if (hand === "scissor") {
		document.getElementById("user-pick").innerHTML = `<div
						style="
							width: 160px;
							height: 160px;
							border: 20px solid #bd00ff;
							padding-top: 10%;
							padding-left: 14%;
							background-color: white;
							border-radius: 100%;
						">
						<img src="17911 1.svg" alt="scissor" />
					</div>`;
	}
};

const modifyComputerHTML = (hand) => {
	if (hand === "rock") {
		document.getElementById("computer-pick").innerHTML = `<div
						style="
							width: 160px;
							height: 160px;
							border: 20px solid #0074b6;
							padding-top: 10%;
							padding-left: 7%;
							background-color: white;
							border-radius: 100%;
						">
						<img src="icons8-fist-67 1.svg" alt="rock" />
					</div>`;
	} else if (hand === "paper") {
		document.getElementById("computer-pick").innerHTML = `<div
						style="
							width: 160px;
							height: 160px;
							border: 20px solid #ffa943;
							padding-top: 8%;
							padding-left: 8%;
							background-color: white;
							border-radius: 100%;
						">
						<img src="icons8-hand-64 1.svg" alt="paper" />
					</div>`;
	} else if (hand === "scissor") {
		document.getElementById("computer-pick").innerHTML = `<div
						style="
							width: 160px;
							height: 160px;
							border: 20px solid #bd00ff;
							padding-top: 10%;
							padding-left: 14%;
							background-color: white;
							border-radius: 100%;
						">
						<img src="17911 1.svg" alt="scissor" />
					</div>`;
	}
};

const playAgain = () => {
	let contest = document.querySelector(".contest");
	contest.style.display = "none";

	let hands = document.querySelector(".hands");
	hands.style.display = "flex";

	document.getElementById("next-button").style.display = "none";
};

const updateScores = (winner) => {
	if (winner === "user") {
		let userScore = localStorage.getItem("user-score")
			? parseInt(localStorage.getItem("user-score"))
			: 0;
		localStorage.setItem("user-score", userScore + 1);
		document.getElementById("user-score").innerText =
			localStorage.getItem("user-score");
	} else if (winner === "pc") {
		let computerScore = localStorage.getItem("computer-score")
			? parseInt(localStorage.getItem("computer-score"))
			: 0;
		localStorage.setItem("computer-score", computerScore + 1);
		document.getElementById("computer-score").innerText =
			localStorage.getItem("computer-score");
	}
};

const decideNextDisplay = (winner) => {
	let nextButton = document.getElementById("next-button");
	if (winner === "user") {
		nextButton.style.display = "flex";
	} else nextButton.style.display = "none";
};
