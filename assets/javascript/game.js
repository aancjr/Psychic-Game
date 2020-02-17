//Array for listing available game key-stroke options. In this case, all letters.
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Variabls defined and where they start.
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];

//The computers choice.
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

function resetGame() {
  computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guesses = 9;
  guessedLetters.length = 0;
  document.getElementById("userChoiceText").textContent = "";
}

//Function for when users presses key.
document.onkeyup = function(event) {
  var playerGuess = event.key;
  guessedLetters.push(playerGuess);
  console.log(playerGuess);

  if (playerGuess === computerGuess) {
    wins++;
    guesses = 9;
    resetGame();
  } else if (guesses === 1) {
    losses++;
    guesses = 9;
    resetGame();
  } else {
    guesses--;
  }

  //Display user guesses, wins, losses and ties.
  document.getElementById("userChoiceText").textContent = guessedLetters.join(
    ", "
  );
  document.getElementById("winsText").textContent = "Wins: " + wins;
  document.getElementById("lossesText").textContent = "Losses: " + losses;
  document.getElementById("guessesLeftText").textContent =
    "Guesses Left: " + guesses;
};

console.log(guesses);
console.log(guessedLetters);
