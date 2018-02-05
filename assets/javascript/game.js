    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
     var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];

    // Grab a reference to the game <div>.
    var userText = document.getElementById("game");

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var guessedLetters = [];
    var reset = function() {
      guesses = 10;
      guessedLetters = [];

    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      // var computerGuess = "a";

      guessedLetters = userGuess + ", " + guessedLetters;

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if (userGuess===computerGuess) { 
        wins++;
        alert("You're psychic!");
        reset();
      }

      if (userGuess!==computerGuess) {
        guesses--;
      }

      if (guesses===0) {
        losses++;
        alert("You are not psychic!");
        reset();
      }
      console.log(userGuess);

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Remaining: " + guesses + "</p>" +
          "<p>Letters Guessed: " + guessedLetters + "</p>";
        
        userText.innerHTML = html;

      };