//Game Logic

let playerScore = 0;
let computerScore = 0;

const GAME_LOST_MSSG= "Too Bad! Computer won this game!";
const GAME_WON_MSSG = "Congratulations! You won this game!";

const USER_ROUND_WON_MSSG = 'You won this round';
const USER_ROUND_LOST_MSSG = 'You lost this round';
const USER_ROUND_TIE_MSSG = 'It\s a tie';

function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

// function getPlayerSelection() {
//   let playerSelectionPrompt = prompt(
//     "Make your choice: ROCK, PAPER or SCISSORS!"  // Delete this function
//   ).toLowerCase();
//   return playerSelectionPrompt;
// }

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return USER_ROUND_TIE_MSSG;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return USER_ROUND_WON_MSSG;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return USER_ROUND_WON_MSSG;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return USER_ROUND_WON_MSSG;
  }
  return USER_ROUND_LOST_MSSG;
}

function decideRoundWinner(roundResult) {
  if(roundResult === USER_ROUND_WON_MSSG) {
     playerScore += 1;
  }
  if (roundResult === USER_ROUND_LOST_MSSG) {
     computerScore += 1;
  }
}

function decideGameWinner() {
    if (playerScore > computerScore) {
        alert(GAME_WON_MSSG);
    }
    if (playerScore < computerScore) {
        alert(GAME_LOST_MSSG);
    }
    alert('IT\'S A DRAW');
}

// game();
// decideGameWinner();



//Creating Elements


const container = document.querySelector('#container');


let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.textContent;
    console.log(playRound(playerSelection));    
    document.getElementById('round-score').textContent = playRound(playerSelection);
  });
});
















































































console.log("dise pakna")