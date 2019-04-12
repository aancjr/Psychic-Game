    //Array for listing available game key-stroke options. In this case, all letters.
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var letterIndex = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    //Variabls defined and where they start.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessedLetters = [];
    
    //The computers choice.        
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];     
        console.log(computerGuess);
    
    function resetGame () { 
         computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         guesses = 9;
         guessedLetters = [];
     }
        console.log(resetGame);

    //Function for when users presses key.
     document.onkeyup = function(event) {

        //Which key is pressed.        
        var playerGuess = event.key;
        guessedLetters.push(playerGuess);
            console.log(playerGuess);
        
       
        //Determining the outcome of the game.

            if (playerGuess === computerGuess) {
                wins++;
                guesses = 9;
                resetGame ();
            }
    
            else {
                guesses--;
            }
    
            if (guesses === 0) {
                losses++;
                guesses = 9;
                resetGame ();
        }
            
        //Display user guesses, wins, losses and ties.
        document.getElementById("userChoiceText").textContent += " " + playerGuess ;
        document.getElementById("winsText").textContent = "Wins: " + wins;
        document.getElementById("lossesText").textContent = "Losses: " + losses;
        document.getElementById("guessesLeftText").textContent = "Guesses Left: " + guesses;
        
    }
    

    console.log(guesses);
    console.log(guessedLetters);
    console.log(wins);
    console.log(losses);
    

















