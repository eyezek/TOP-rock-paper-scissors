let availableChoices = ["Rock", "Paper", "Scissors"];

let computerSelection;

let playerSelection;

document.getElementById("endRoundMessage");

document.getElementById("endGameMessage");

function getComputerChoice() {
  computerSelection =
    availableChoices[Math.floor(Math.random() * availableChoices.length)];
  console.log(computerSelection);
  return computerSelection;
}

function checkGameOver() {
  if (playerWinCount == 5) {
    document.getElementById("endGameMessage").innerHTML =
      "You won the game! You won 5 rounds! Refresh to play again!";
  } else if (computerWinCount == 5) {
    document.getElementById("endGameMessage").innerHTML =
      "You lost the game... Computer won 5 rounds! Refresh to play again!";
  }
}

document.getElementById("rock").onclick = function playRound() {
  checkGameOver();
  getComputerChoice();
  playerSelection = this.id;
  if (playerSelection == "rock" && computerSelection == "Scissors") {
    document.getElementById("endRoundMessage").innerHTML =
      "You won! Computer chose Scissors, and Rock beats Scissors!";

    playerWinCount++;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    document.getElementById("endRoundMessage").innerHTML =
      "You lost... Computer chose Paper, and Paper beats rock!";

    computerWinCount++;
  } else if (playerSelection == "rock" && computerSelection == "Rock") {
    document.getElementById("endRoundMessage").innerHTML =
      "Tie! You and the computer both chose Rock!";
  }
};

document.getElementById("paper").onclick = function playRound() {
  checkGameOver();
  getComputerChoice();
  playerSelection = this.id;
  if (playerSelection == "paper" && computerSelection == "Scissors") {
    document.getElementById("endRoundMessage").innerHTML =
      "You lost... Computer chose Scissors, and Scissors beats Paper!";

    computerWinCount++;
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    document.getElementById("endRoundMessage").innerHTML =
      "You won! Computer chose Rock, and Paper beats Rock!";

    playerWinCount++;
  } else if (playerSelection == "paper" && computerSelection == "Paper") {
    document.getElementById("endRoundMessage").innerHTML =
      "Tie! You both chose Paper!";
  }
};

document.getElementById("scissors").onclick = function playRound() {
  checkGameOver();
  getComputerChoice();
  playerSelection = this.id;
  if (playerSelection == "scissors" && computerSelection == "Paper") {
    document.getElementById("endRoundMessage").innerHTML =
      "You won!, Computer chose Paper, and Scissors beats Paper!";

    playerWinCount++;
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    document.getElementById("endRoundMessage").innerHTML =
      "You lost... Computer chose Rock, and Rock beats Scissors!";

    computerWinCount++;
  } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
    document.getElementById("endRoundMessage").innerHTML =
      "Tie! You both chose Scissors!";
  }
};

// function getPlayerChoice() {
//   playerSelection = this.id;
//  console.log(playerSelection);
// }

let endRoundMessage;

function playRound() {
  if (playerSelection == "rock" && computerSelection == "Scissors") {
    document.getElementById("endRoundMessage").innerHTML =
      "You won! Computer chose Scissors, and Rock beats Scissors!";

    playerWinCount++;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    document.getElementById("endRoundMessage").innerHTML =
      "You lost... Computer chose Paper, and Paper beats rock!";

    computerWinCount++;
  } else if (playerSelection == "rock" && computerSelection == "Rock") {
    document.getElementById("endRoundMessage").innerHTML =
      "Tie! You and the computer both chose Rock!";
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    document.getElementById("endRoundMessage").innerHTML =
      "You lost... Computer chose Scissors, and Scissors beats Paper!";

    computerWinCount++;
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    document.getElementById("endRoundMessage").innerHTML =
      "You won! Computer chose Rock, and Paper beats Rock!";

    playerWinCount++;
  } else if (playerSelection == "paper" && computerSelection == "Paper") {
    document.getElementById("endRoundMessage").innerHTML =
      "Tie! You both chose Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    document.getElementById("endRoundMessage").innerHTML =
      "You won!, Computer chose Paper, and Scissors beats Paper!";

    playerWinCount++;
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    document.getElementById("endRoundMessage").innerHTML =
      "You lost... Computer chose Rock, and Rock beats Scissors!";

    computerWinCount++;
  } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
    document.getElementById("endRoundMessage").innerHTML =
      "Tie! You both chose Scissors!";
  }
}

playerWinCount = parseInt(0);
computerWinCount = parseInt(0);

function game() {
  for (let i = 0; i < 5; i++) {
    getComputerChoice();
    getPlayerChoice();
    playRound();
    console.log("Player score = " + playerWinCount);
    console.log("Computer score = " + computerWinCount);
  }
}

// game();
