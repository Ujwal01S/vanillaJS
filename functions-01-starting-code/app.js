const startGameBtn = document.getElementById("start-game-btn");

// start();

// function start() {
//   console.log("Game is starting...");
// }

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSOR}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = function (cChoice, pChoice = DEFAULT_USER_CHOICE) {
  // gameIsRunning = false;
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === PAPER && pChoice === SCISSOR) ||
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === SCISSOR && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", function start() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting..");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  console.log(winner);

  let message = `You picked ${playerSelection}, computer picked ${computerSelection}, therefore you`;
  if (winner === "DRAW") {
    message = message + "had a draw.";
  } else if (winner === "PLAYER_WIN") {
    message = message + "won";
  } else {
    message = message + "lost.";
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }

  resultHandler(sum);
};

const showResult = (message, result) => {
  alert(message + " " + result);
};

combine(
  showResult.bind(this, "The result after adding all numbers is"),
  "ADD",
  1,
  2,
  3,
  4
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is"),
  "SUBTRACT",
  1,
  2,
  -3,
  -4
);
