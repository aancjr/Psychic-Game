
    //Array for listing available game key-stroke options. In this case, all letters.
    var computerChoices = [];

    //Variabls defined and where they start.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessChoices = [];
    
    //Variabls holding references for HTML use. 

    var instructionsText = document.getElementById("instructionsText");
    var computerChoiceText = document.getElementById("computerChoiceText");
    var winsText = document.getElementById("winsText");
    var lossesText = document.getElementById("lossesText");
    var guessesLeftText = document.getElementById("guessesLeftText");

    //Function for when users presses key.

    document.onkeyup = function(event) {

        //Which key is pressed.        
        var playerGuess = event.key;

        //The computers choice.        
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        //Determining the outcome of the game.
        if (playerGuess === computerGuess) {
            wins++;
            guesses = 9;
            guessChoices = [];
    
            console.log(playerGuess);
        }
    
        if (playerGuess != computerGuess) {
            guesses--;
        }
    
        if (playerGuess = 0) {
            losses++;
            guesses = 9;
            guessChoices = [];
        }

        //Display user guesses, wins, losses and ties.
        userChoiceText.textContent = "Letters guessed: " + playerGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;


    }

















