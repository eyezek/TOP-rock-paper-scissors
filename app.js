let availableChoices = ["Rock", "Paper", "Scissors"];

let computerSelection;

function getComputerChoice() {
  computerSelection =
    availableChoices[Math.floor(Math.random() * availableChoices.length)];
  console.log(computerSelection);
  return computerSelection;
}

let playerSelection;

function getPlayerChoice() {
  playerSelection = prompt();
  return playerSelection;
}

let endRoundMessage;

function playRound(getPlayerChoice, getComputerChoice) {
  if (playerSelection == "rock" && computerSelection == "Scissors") {
    endRoundMessage = "You won! Rock beats Scissors!";
    console.log(endRoundMessage);
    playerWinCount++;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    endRoundMessage = "You lost... Paper beats rock!";
    console.log(endRoundMessage);
    computerWinCount++;
  } else if (playerSelection == "rock" && computerSelection == "Rock") {
    endRoundMessage = "Tie!";
    console.log(endRoundMessage);
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    endRoundMessage = "You lost... Scissors beats Paper!";
    console.log(endRoundMessage);
    computerWinCount++;
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    endRoundMessage = "You won! Paper beats Rock!";
    console.log(endRoundMessage);
    playerWinCount++;
  } else if (playerSelection == "paper" && computerSelection == "Paper") {
    endRoundMessage = "Tie!";
    console.log(endRoundMessage);
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    endRoundMessage = "You won!, Scissors beats Paper!";
    console.log(endRoundMessage);
    playerWinCount++;
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    endRoundMessage = "You lost... Rock beats Scissors!";
    console.log(endRoundMessage);
    computerWinCount++;
  } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
    endRoundMessage = "Tie!";
    console.log(endRoundMessage);
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

game();
