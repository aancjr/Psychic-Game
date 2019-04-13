    //Array for listing available game key-stroke options. In this case, all letters.
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //Variabls defined and where they start.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessedLetters = [];
    
    //The computers choice.        
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];     
        console.log(computerGuess);
    
    /*Reset function to bring the game stats to the beginning. Couldn't get the array of guessed letters to refresh. 
      tried using guessedLetters.length = 0; and that didn't work. Tried taking the documentGetElementByID and 
        referencing it to a blank guessed letters and that did not work.
        The only thing that did somewhat work was creating a "guessedLettersReset" variable = [] in the reset function
         but then the last letter guessed would populate in the next game.
        */

    function resetGame () { 
         computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         guesses = 9;

         console.log(guessedLetters.length)
         console.log(guessedLetters)
         console.log(resetGame);
        }
        
        //Function for when users presses key.
        document.onkeyup = function(event) {
            
            //Which key is pressed and pushing the playerGuess key strokes to the guessedLetters array.        
            var playerGuess = event.key;
            guessedLetters.push(playerGuess);
            console.log(playerGuess);
            
            
            //Determining the outcome of the game.
            
            //if playerGuess is equal to the computerGuess, wins increase, guesses reset, reset game.
            if (playerGuess === computerGuess) {
                wins++;
                guesses = 9;
                resetGame ();
            }
              //else decrease guesses.
            else {
                guesses--;
            }
              //if guesses equal 0, losses increase, guesses reset and reset game.
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
    

















