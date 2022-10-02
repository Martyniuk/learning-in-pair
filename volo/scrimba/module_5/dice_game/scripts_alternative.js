// CONSTANTS
const PLAYERS = Object.freeze({
  PLAYER_1: "Player 1",
  PLAYER_2: "Player 2",
});

// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let currentPlayerTurn = PLAYERS.PLAYER_1;
let randomNumber = 0;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  startGame();
});
resetBtn.addEventListener("click", function () {
  resetGame();
});

// PLAYERS STATE
function switchPlayerTurn(player) {
  // can be separated into 2 different fnctions
  player1Dice.classList.toggle("active");
  player2Dice.classList.toggle("active");
  message.textContent = `${player} Turn`;
}
function checkWinner() {
  const isPlayer1Winner = player1Score >= 20;
  if (isPlayer1Winner) {
    // consts can be used below
    message.textContent = "Player 1 is Winner";
    setGameStateToEnd();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 is Winner";
    setGameStateToEnd();
  }
}
function changePlayerAfterTurnEnd() {
  currentPlayerTurn =
    currentPlayerTurn === PLAYERS.PLAYER_1
      ? PLAYERS.PLAYER_2
      : PLAYERS.PLAYER_1;
}
function addScoresToPlayer1() {
  randomNumber = generateRandomNumberFrom1to6();
  player1Score += randomNumber;
  player1Scoreboard.textContent = player1Score;
  player1Dice.textContent = randomNumber;
}
function addScoresToPlayer2() {
  randomNumber = generateRandomNumberFrom1to6();
  player2Score += randomNumber;
  player2Scoreboard.textContent = player2Score;
  player2Dice.textContent = randomNumber;
}

// GAME STATE
function setGameStateToEnd() {
  hideRollBtn();
  setViewResetBtn();
}
function setGameStateToStart() {
  setViewRollBtn();
  hideResetBtn();
}
function resetGame() {
  player1Score = 0;
  player2Score = 0;
  currentPlayerTurn = PLAYERS.PLAYER_1;

  player1Dice.textContent = "-";
  player2Dice.textContent = "-";

  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;

  message.textContent = `${PLAYERS.PLAYER_1} Turn`;

  setGameStateToStart();
}
function startGame() {
  if (currentPlayerTurn === PLAYERS.PLAYER_1) {
    addScoresToPlayer1();
    switchPlayerTurn(PLAYERS.PLAYER_2);
  } else {
    addScoresToPlayer2();
    switchPlayerTurn(PLAYERS.PLAYER_1);
  }

  checkWinner();
  changePlayerAfterTurnEnd();
}

// COMPONENTS(Button) STATE
function hideRollBtn() {
  rollBtn.style.display = "none";
}
function setViewRollBtn() {
  rollBtn.style.display = "block";
}
function hideResetBtn() {
  resetBtn.style.display = "none";
}
function setViewResetBtn() {
  resetBtn.style.display = "block";
}

// Utils
function generateRandomNumberFrom1to6() {
  return Math.floor(Math.random() * 6) + 1;
}

/*
  what is better - apbout approaches?
    - it depends!!:
        -- 2 players - not ok - over engineering
        -- 8 players - +- ok 
    - extensibility, readility, tests, maintenance
*/
