
//---GAME LOGIC
const GAME_LOST_MSSG = "Too Bad! Computer won this game!";
const GAME_WON_MSSG = "Congratulations! You won this game!";

const USER_ROUND_WON_MSSG = 'You won this round';
const USER_ROUND_LOST_MSSG = 'You lost this round';
const USER_ROUND_TIE_MSSG = 'It\'s a tie';

function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
//Gets players selection and plays ONE round of the game
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
};

//---CREATING ELEMENTS
// document.addEventListener("click", (e) => console.log(e.target));
const container = document.querySelector("#container");
const roundScoreDisplay = document.querySelector("#round-score-display");
const playerStats = document.querySelector('.player-stats');
const computerStats = document.querySelector('.computer-stats');
const computerScoreElement = document.querySelector('.computer-score');
const playerScoreElement = document.querySelector('.player-score');
const popup = document.querySelector("#popup");
popup.classList.add("hidden");
const resetButton = document.querySelector("#popup button");
const gameWinnerMessage = document.querySelector("#game-winner");
let buttons = document.querySelectorAll(".btn");
let playerRoundResult = 0;
let computerRoundResult = 0;
let playedRounds = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.textContent;
    const roundScore = playRound(playerSelection);
    //Display the round score
    const newRoundScoreElement = document.createElement("p");
    newRoundScoreElement.textContent = roundScore;
    roundScoreDisplay.append(newRoundScoreElement);
    
    //Update user score after each round      
    if (roundScore === "You won this round") {
      playerRoundResult++;
      playerScoreElement.textContent = playerRoundResult;
    }
    else if(roundScore === "You lost this round") {
      computerRoundResult++;      
      computerScoreElement.textContent = computerRoundResult;
    }
    else if(roundScore === "It\'s a tie") {
      

      // playerRoundResult++;
      // computerRoundResult++;
      
      // playerScoreElement.textContent = playerRoundResult;
      // computerScoreElement.textContent = computerRoundResult;
    }

    playedRounds++;

    showPopup();
  });
});





function showPopup(){
  if (playedRounds === 5) {
    if (playerRoundResult > computerRoundResult) {
      gameWinnerMessage.textContent = "Congratulations! You won the game!";
    } else if (playerRoundResult < computerRoundResult) {
      gameWinnerMessage.textContent = "Sorry, you lost the game.";
    } else {
      gameWinnerMessage.textContent = "It's a tie!";
    }
    popup.classList.remove("hidden");
  }
}


function resetGame() {
  // Reset the scores
  playerRoundResult = 0;
  computerRoundResult = 0;
  playedRounds = 0;

  playerScoreElement.textContent = playerRoundResult;
  computerScoreElement.textContent = computerRoundResult;
  roundScoreDisplay.textContent = "";

  // Hide the popup
  popup.classList.add("hidden");
}








































































// console.log("dise pakna")