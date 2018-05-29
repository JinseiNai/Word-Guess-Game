// When browser loads, have word ready
$(document).ready(function () {

    // Array of words to guess.
    let words = ['basketball', 'sports', 'playoffs', 'baseball', 'badminton', 'fitness', 'kitchen', 'computer', 'television', 'family', 'aquarium', 'annoying', 'relationship', 'music', 'something', 'grocery', 'avenger', 'developer', 'kingdom', 'designer', 'business', 'marketplace', 'explore', 'portfolio', 'awesome', 'fairy', 'difficult', 'random', 'phone', 'monitor', 'tablet', 'extension', 'contributions', 'customize', 'repositories', 'series', 'championship', 'major', 'league', 'minors', 'youtube', 'twitch', 'dauntless', 'anime'];

    // Alphabet letters that the user can use.
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Set counters
    let winCount = 0;
    let lossesCount = 0;
    let guessesLeft = 5;
    let wrongGuesses = [];
    let correctGuesses = [];
    let answerArr = [];
    let userGuess;
    let randomWord = [];

    // Set word on window load
    settingWord();

    // Display underscore for letters
    displayWord();

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
            // Check if same guess has been made
            if (wrongGuesses.indexOf(userGuess) <= -1 && correctGuesses.indexOf(userGuess) <= -1) {
                // Check if letter guessed is in the word
                if ((randomWord[0].indexOf(userGuess)) >= 0) {
                    correctGuesses += userGuess;
                    displayCorrect();
                    displayWord();
                    if (answerArr.join("") == randomWord[0]) {
                        alert("Very nice! You guessed the word '" + randomWord[0] + "' correctly!");
                        winCount++;
                        resetGame();
                        settingWord();
                        displayWord();
                    }
                } else {
                    guessesLeft--;
                    wrongGuesses += userGuess;
                    if (guessesLeft === 0) {
                        lossesCount++;
                        alert('You Lost!');
                        resetGame();
                        settingWord();
                        displayWord();
                    }
                }
            }

        }

        // Display correct guess
        function displayCorrect() {
            for (let i = 0; i < randomWord[0].length; i++) {
                if (randomWord[0][i] === userGuess) {
                    answerArr[i] = userGuess;
                    console.log(answerArr + ' answer');
                }
            }
            return answerArr;
        };

        // Update status for html
        let status =
            "<p>Wins: " + winCount + "</p>" +
            "<p>Losses: " + lossesCount + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Wrong guesses so far: " + "<span class='spacing'>" + wrongGuesses + "</span>" + "</p>" +
            "<p>Correct guesses so far: " + correctGuesses + "</p>";

        document.querySelector(".status").innerHTML = status;
    };

    // Randomly chooses a word from the array of words
    function generateWord() {
        let generate = words[Math.floor(Math.random() * words.length)];
        return generate;
    };

    // Show letter blanks
    function displayWord() {
        document.querySelector(".word").innerHTML = answerArr.join(" ");
    };

    // Logs random word and set underscores
    function settingWord() {
        randomWord = [];
        randomWord.push(generateWord());
        console.log(randomWord[0] + ' is random.');
        // Set up the answer blanks
        for (let i = 0; i < randomWord[0].length; i++) {
            answerArr[i] = " __ ";
        }
        console.log(answerArr);
    };

    // Reset status
    function resetGame() {
        randomWord = [];
        answerArr = [];
        guessesLeft = 5;
        wrongGuesses = [];
        correctGuesses = [];
        displayWord();
    };
});