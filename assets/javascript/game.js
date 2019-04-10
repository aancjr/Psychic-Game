    //Array for listing available game key-stroke options. In this case, all letters.
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var letterIndex = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    //Variabls defined and where they start.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessedLetters = [];
    var guessesLeft = guesses - 1;
    
    /*Variabls holding references for HTML use. Had this going before i used the document.getElementById below

    var instructionsText = document.getElementById("instructionsText");
    var computerChoiceText = document.getElementById("computerChoiceText");
    var winsText = document.getElementById("winsText");
    var lossesText = document.getElementById("lossesText");
    var guessesLeftText = document.getElementById("guessesLeftText");*/



    //Function for when users presses key.
     document.onkeyup = function(event) {

        //Which key is pressed.        
        var playerGuess = event.key;
        guessedLetters.push(playerGuess);
        
        console.log(playerGuess);
        
        //The computers choice.        
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        console.log(computerGuess);
       
        //Determining the outcome of the game.

        //If player guesses the correct letter, wins increase. Guesses restart with 9.
        if (playerGuess === letterIndex) {
        
            if (playerGuess === computerGuess) {
                wins++;
                guesses = 9;
            }
        
            //If player guess does not match the computer guess, subtract decrementally with each incorrect guess.
            else if ((playerGuess != computerGuess) && (guesses >1)) {
                guessesleft;
            }

            //If player guesses are less than 1, game over and players losses increase. Guesses restart to 9.   
            else { 
                losses++;
                guesses = 9;
                guessedLetters = [];
            }
        }
            
        //Display user guesses, wins, losses and ties.
        document.getElementById("userChoiceText").textContent = "Letter's Guessed: " + playerGuess;
        document.getElementById("computerChoiceText").textContent = "Computer's Choice: " + computerGuess;
        document.getElementById("winsText").textContent = "Wins: " + wins;
        document.getElementById("lossesText").textContent = "Losses: " + losses;
        document.getElementById("guessesLeftText").textContent = "Guesses Left: " + guessesLeft;
        
        /*winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left:" + guessedLetters;
        computerChoiceText.textContent = "Computer's Choice" + computerGuess;*/
        
        }

    console.log(guesses);
    console.log(guessedLetters);
    console.log(wins);
    console.log(losses);
    

















