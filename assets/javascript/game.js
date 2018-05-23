
// Array of words to guess.
let words = ['basketball', 'sports', 'playoffs', 'baseball', 'badminton', 'fitness', 'kitchen', 'computer', 'television', 'family', 'aquarium', 'annoying', 'relationship', 'music', 'something', 'grocery', 'avenger', 'developer', 'kingdom', 'designer', 'business', 'marketplace', 'explore', 'portfolio', 'awesome', 'fairy', 'difficult', 'random', 'phone', 'monitor', 'tablet', 'extension', 'contributions', 'customize', 'repositories'];

// Alphabet letters that the user can use.
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Set counters
let winCount = 0;
let lossesCount = 0;
let guessesLeft = 5;
let wrongGuesses = [];
let correctGuesses = [];
let answerArr = [];

// Randomly chooses a word from the array of words
function generateWord() {
    let generate = words[Math.floor(Math.random() * words.length)];
    return generate;
}
// Gets word from generateWord
function grabWord() {
    let getWord = generateWord();
    return getWord;
}

// When browser loads, have word ready
$(document).ready(function () {
    let randomWord = grabWord();
    console.log(randomWord + ' is random.');
    // Set up the answer blanks
    for (let i = 0; i < randomWord.length; i++) {
        answerArr[i] = "__";
    }
    console.log(answerArr);

    // Show letter blanks
    document.querySelector(".word").innerHTML = answerArr.join(" ");

    // Function runs whenever a user pressed key
    document.onkeyup = function (event) {
        let userGuess = event.key;
        // Check if key pressed is an alphabet
        for (let i = 0; i < alphabet.length; i++) {
            if (userGuess === alphabet[i]) {
                console.log(userGuess + ' is the guess');
                guessChecker();
            }
        }

        // Checks user guess against random word
        function guessChecker() {
            // If there are guesses remaining
            if (guessesLeft > 0) {
                // Check if letter guessed is in the word
                if ((randomWord.indexOf(userGuess)) >= 0) {
                    correctGuesses += userGuess;
                    console.log('Correct guess');
                } else {
                    guessesLeft--;
                    wrongGuesses += userGuess;
                    console.log('Wrong guess');
                    if (guessesLeft === 0) {
                        lossesCount++;
                        alert('You Lost!');
                        guessesLeft = 5;
                        wrongGuesses = [];
                        correctGuesses = [];
                    }
                }
            }
        }
        let status =
            "<p>Wins: " + winCount + "</p>" +
            "<p>Losses: " + lossesCount + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Wrong guesses so far: " + "<span class='spacing'>" + wrongGuesses + "</span>" + "</p>" +
            "<p>Correct guesses so far: " + correctGuesses + "</p>";

        document.querySelector(".status").innerHTML = status;
    };

});

