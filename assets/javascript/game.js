// Array of words to guess.
let words = ['basketball', 'sports', 'playoffs', 'baseball', 'badminton', 'fitness', 'kitchen', 'computer', 'television', 'family', 'aquarium', 'annoying', 'relationship', 'music', 'something','grocery', 'avenger', 'developer', 'kingdom', 'designer', 'business', 'marketplace', 'explore', 'portfolio', 'awesome', 'fairy', 'difficult', 'random', 'phone', 'monitor', 'tablet', 'extension', 'contributions', 'customize', 'repositories'];

// Alphabet letters that the user can use.
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Set counters
let winCount = 0;
let lossesCount = 0;
let guessesLeft = 5;
let guessesMade = [];

// Randomly chooses a word from the array of words
window.onload = function chooseWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
}

// Function run whenever user presses a key.
document.onkeyup = function (event) {
    let keyPressed = event.key;

    // Check is key pressed is an alphabet
    for (let i = 0; i < alphabet.length; i++) {
        if (keyPressed === alphabet[i]) {
            // Assigns key the user pressed.
            let userGuess = keyPressed;
            console.log(userGuess + ' is a letter');
        }
    }

    // call guessChecker function
    guessChecker(userGuess);
    
    // Checks the userGuess against the word
    function guessChecker(userGuess) {
        for (let i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord[i]) {

            }
        }
    }
}