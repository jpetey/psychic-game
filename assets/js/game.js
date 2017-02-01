// Declare and assign variables for User & Computer
var compChoices = "abcdefghijklmnopqrstuvwxyz";
var userChoice = [];
var userChoiceDisplay = [];
// Declare and assign variables for wins, losses, and guess counter
var wins = 0;
var losses = 0;
var userGuessCount = 9;

// Define what happens when the user presses a key
document.onkeyup = function (event) {
	// Record key stroke pressed by user & convert to lower case
	var userGuess = event.key.toLowerCase();
	console.log(userGuess);
	console.log(event);

	// Process key stroke from user to affect certain actions 
	//if key pressed = a-z/A-Z && if key hasn't been pressed yet....
	if (((event.keyCode > 64 && event.keyCode < 90) || (event.keyCode > 96 && event.keyCode < 123)) && userChoice.indexOf(userGuess) === -1) {	
		// show each key pressed (as letter) as userChoice in #game element
		userChoice.push(userGuess);
		console.log(userChoice);

		userChoiceDisplay.push(" " + userGuess);
		console.log(userChoiceDisplay);
		
		// Record Computer Guess: randomly assign letter from compChoices as compGuess
		var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
		console.log(compGuess);
		// if userGuess and compGuess match: 1) Increase wins by 1; 2) Reset Guess Count to 9; 3) Reset Letters Guessed to (blank)
		if (userGuess === compGuess) {
			wins++;
			userChoice = [];
			userChoiceDisplay = [];
			userGuessCount = 9;
			console.log(wins);
		// if userGuess and compGuess don't match: Decrease Guess Count by 1
		} else if (userGuess !== compGuess) {
			userGuessCount--;
			console.log(userGuessCount);
		}
		// When then Guess Counter reaches 0: 1) Increase losses by 1; 2) Reset Guess Count to 9; 3) Reset Letters Guessed to (blank)
		if (userGuessCount === 0) {
			losses++;
			userGuessCount = 9
			userChoice = [];
			userChoiceDisplay = [];
		}
	
		
		var html = "<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" + 
		"<p>Guesses left: " + userGuessCount + "</p>" +
		"<p>Your guesses so far: " + userChoiceDisplay + "</p>";

		document.querySelector("#game").innerHTML = html;
	
	}
}
