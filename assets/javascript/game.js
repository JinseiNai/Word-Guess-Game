// When browser loads, have word ready
$(document).ready(function () {

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
    let userGuess;

    let randomWord = generateWord();
    console.log(randomWord + ' is random.');
    // Set up the answer blanks
    for (let i = 0; i < randomWord.length; i++) {
        answerArr[i] = " __ ";
    }
    console.log(answerArr);

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
                if ((randomWord.indexOf(userGuess)) >= 0) {
                    console.log(randomWord + ' is being checked')
                    correctGuesses += userGuess;
                    console.log('Correct guess');
                    displayCorrect();
                    displayWord();
                } else {
                    guessesLeft--;
                    wrongGuesses += userGuess;
                    console.log('Wrong guess');
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
        // Suppose to be a function
        // if (guessesLeft === 0) {
        //     lossesCount++;
        //     alert('You Lost!');
        //     resetGame();
        //     let randomWord = generateWord();
        //     console.log(randomWord + ' is random.');
        //     // Set up the answer blanks
        //     for (let i = 0; i < randomWord.length; i++) {
        //         answerArr[i] = " __ ";
        //     }
        //     console.log(answerArr);
        //     console.log(randomWord + ' new random');
        //     displayWord();
        // };

        // Display correct guess
        function displayCorrect() {
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === userGuess) {
                    answerArr[i] = userGuess;
                    console.log(answerArr + ' answer');
                }
            }
            return answerArr;
        };



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

    // // Gets word from generateWord
    // function grabWord() {
    //     let getWord = generateWord();
    //     return getWord;
    // };

    function displayWord() {
        // Show letter blanks
        document.querySelector(".word").innerHTML = answerArr.join(" ");
    };

    function settingWord() {
        let randomWord = generateWord();
        console.log(randomWord + ' is random.');
        // Set up the answer blanks
        for (let i = 0; i < randomWord.length; i++) {
            answerArr[i] = " __ ";
        }
        console.log(answerArr);
    };

    function resetGame() {
        answerArr = [];
        guessesLeft = 5;
        wrongGuesses = [];
        correctGuesses = [];
        displayWord();
    };
});