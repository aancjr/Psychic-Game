var wins = 0;
var losses = 0;
var guesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {
    console.log(event.key);

    var computerChoices = [];

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var playerGuess = event.key;

    if (playerGuess === computerGuess) {
        wins++;
        guesses = 9;
        guessChoices = [];

        console.log(playerGuess)
    }
}