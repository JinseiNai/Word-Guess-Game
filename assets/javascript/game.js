// Array of words to guess.
let words = ['basketball', 'sports', 'playoffs', 'baseball', 'badminton', 'fitness', 'kitchen', 'computer', 'television', 'family', 'aquarium', 'annoying', 'relationship', 'music', 'something','grocery', 'avenger', 'developer', 'kingdom', 'designer', 'business', 'marketplace', 'explore', 'portfolio', 'awesome', 'fairy', 'difficult', 'random', 'phone', 'monitor', 'tablet', 'extension', 'contributions', 'customize', 'repositories'];

// Alphabet letters that the user can use.
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Set counters
let winCount = 0;
let lossesCount = 0;
let guessesLeft = 5;
let guessesMade = [];
let correctGuesses = [];

// Randomly chooses a word from the array of words
// window.onload = function chooseWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
// };

// Function to check correctGuesses and randomWord

// Function run whenever user presses a key.
document.onkeyup = function (event) {
    let userGuess = event.key;

    // Check is key pressed is an alphabet
    for (let i = 0; i < alphabet.length; i++) {
        if (userGuess === alphabet[i]) {
            console.log(userGuess + ' is a letter.');
        }
    };

    // call guessChecker function
    guessChecker(userGuess);
    
    // Checks the userGuess against the word
    function guessChecker(userGuess) {
        // Make sure the userGuess hasn't already been guessed
        for (let i = 0; i < guessesMade.length; i++) {
            if ((userGuess !== guessesMade[i]) && (guessesLeft > 0)) {
                for (let i = 0; i < randomWord.length; i++) {
                    if (userGuess === randomWord[i]) {
                        correctGuesses += userGuess;
                        console.log(correctGuesses + ' correct guesses.');
                        guessesMade += userGuess;
                        console.log(guessesMade + ' have been guessed.');
                    } else {
                        guessesLeft--;
                        guessesMade += userGuess;
                    }
                }
            } 
            // When guessesLeft is 0, user loses. Generate new word.
            if (guessesLeft === 0) {
                lossesCount++;
                guessesLeft = 5;
                guessesMade = [];
            }
        }; // Tell user they have already made this guess
    }
}