
// function getPlayerSelection() {
//   let playerSelectionPrompt = prompt(
//     "Make your choice: ROCK, 
//   ).toLowerCase();
//   return playerSelectionPrompt;
// }
//Game Logic
// //Add to DOM
// let playerScore = 0;
// function decideRoundWinner(roundResult) {
//   if (roundResult === USER_ROUND_WON_MSSG) {
//     playerScore += 1;
//   }
//   if (roundResult === USER_ROUND_LOST_MSSG) {
//     computerScore += 1;
//   }
// }

// function decideGameWinner() {
//   if (playerScore > computerScore) {
//     alert(GAME_WON_MSSG);
//   }
//   if (playerScore < computerScore) {
//     alert(GAME_LOST_MSSG);
//   }
//   alert("IT'S A DRAW");
// }

// game();
// decideGameWinner();
// let computerScore = 0;



//---GAME LOGIC
const GAME_LOST_MSSG = "Too Bad! Computer won this game!";
const GAME_WON_MSSG = "Congratulations! You won this game!";

const USER_ROUND_WON_MSSG = "You won a round of Rock,Paper & Scissors...now fuck off!";
const USER_ROUND_LOST_MSSG = "You lost this round...You lost to a fucking computer!";
const USER_ROUND_TIE_MSSG = "It\'s a fucking draw!";

//Generates random choice as an oponnent
function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
//Gets players selection 
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


//---CREATING ELEMENTS

const container = document.querySelector("#container");
const roundScoreDisplay = document.querySelector("#round-score-display");
const playerStats = document.querySelector('#player-stats');
const computerStats = document.querySelector('#computer-stats');
let buttons = document.querySelectorAll(".btn");
let playerRoundResult = 0;
let computerRoundResult = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.textContent;
    const computerScoreElement = document.getElementById('computer-score');
    const playerScoreElement = document.getElementById('player-score');
    const roundScore = playRound(playerSelection);

    //Display the round score
    const newRoundScoreElement = document.createElement("p");
    newRoundScoreElement.textContent = roundScore;
    roundScoreDisplay.append(newRoundScoreElement);

    //Update user score after each round
      
    if (roundScore === "You won a round of Rock,Paper & Scissors...now fuck off!") {
      playerRoundResult++;
      playerScoreElement.textContent = playerRoundResult;
      playerStats.append(playerScoreElement);
    }
    else if(roundScore === "You lost this round...You lost to a fucking computer!") {
      computerRoundResult++;
      computerScoreElement.textContent = computerRoundResult;
      computerStats.append(computerScoreElement);
    }

   });
});
















































































console.log("dise pakna")