
// variable list
var bowieWord = ['STARDUST', 'SUFFRAGETTE', 'TIME', 'GOLDEN', 'ZIGGY', 'MARS', 'SPIDERS', 'MOONAGE', 'STARMAN', 'DUKE', 'ALADDIN', 'REBEL', 'HEROS', 'CHANGES', 'LAZARUS', 'BLACKSTAR', 'FAME', 'STAR', 'QUICKSAND'];
// var randomBowieWord;
var randomBowieWordArray = []; 
var randomBowieWordArrayBlank = [];
let userChoice;
let lettersGuessed = [];
let guessesRemaining = 12;
let wins = 0;
let losses = 0;
let isInWord = false;
var isGuessed = false;
var guessesInWord = [];
var alreadyInWord = false;
var randomBowieWordArrayNew = [];
// var didWin = false;



// variables that hold place in html
var startGameText = document.getElementById("start-game");
var wordText = document.getElementById("word");
var guessesRemainingText = document.getElementById("guesses-remaining");
var lettersGuessedText = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");



// hit any key to start game/initalize functions
document.onkeyup = function (event) {

}

// alert("game is starting")
startGame();

// when press key to start game random bowie word is chosen
function startGame() {

    var randomBowieWord = bowieWord[Math.floor(Math.random() * bowieWord.length)];
    // alert("word is " + randomBowieWord)

    // turn selected word into an array
    randomBowieWordArray = Array.from(randomBowieWord);

    // new array that makes blanks the length of the word
    for (var i = 0; i < randomBowieWordArray.length; i++) {
        randomBowieWordArrayBlank += "_";
        // make an array
        randomBowieWordArrayNew = Array.from(randomBowieWordArrayBlank);

    }
    // print blank array
    wordText.innerHTML = randomBowieWordArrayNew.join("");

    // print guesses remaining
    guessesRemainingText.innerHTML = (guessesRemaining);

    // print winns and losses
    winsText.innerHTML = (wins);
    lossesText.innerHTML = (losses);


}
// start when letter is selected
document.onkeyup = function (event) {

    // put selected letter in variable
    userChoice = event.key.toLocaleUpperCase();

    // change text bubble
    startGameText.innerHTML = ("Guess that word!");



    // function to check if already guessed in word

    checkIfGuessedAlreadyInWord();
    function checkIfGuessedAlreadyInWord() {

         // alt code for this function
        // isGuessed = guessesInWord.indexOf(userChoice) !== -1;
        
        for (var l = 0; l < guessesInWord.length; l++) {
            if (userChoice === guessesInWord[l]) {
                isGuessed = true;
                break
            } else {
                isGuessed = false;
            }
        } 
    }


    // function to see if is already guessed in letters guessed
    checkIfGuessedLettersGuessed();
    function checkIfGuessedLettersGuessed() {

        // alt code for this function
        // alreadyInWord = lettersGuessed.indexOf(userChoice) !== -1;
        
        for (var k = 0; k < lettersGuessed.length; k++) {
            if (userChoice === lettersGuessed[k]) {
                alreadyInWord = true;
                break
            } else {
                alreadyInWord = false;
            }
        }   
    }

    // two part function - 1st part to get array of indexes incase letter is a multiple 
    // and then to print array mixing and blanks
    function multipleIndex() {
        value = userChoice,
            i = -1,
            indexes = [];

        while ((i = randomBowieWordArray.indexOf(value, i + 1)) !== -1) {
            indexes.push(i);
        }

        // replace letter in array at index(es)
        randomBowieWordArrayNew[indexes[0]] = userChoice;
        randomBowieWordArrayNew[indexes[1]] = userChoice;
        randomBowieWordArrayNew[indexes[2]] = userChoice;

        // print updated array
        wordText.innerHTML = (randomBowieWordArrayNew.join(""));

    }



    // function to see if user won round
    function didUserWinRound() {
        var didWin = false;
        for (var m = 0; m < randomBowieWordArrayNew.length; m++) {
            if (randomBowieWordArrayNew[m] === "_") {
                didWin = false;
                break
            } else {
                didWin = true;
            }
        }

        // if user won reset game
        if (didWin === true) {
            // alert("won game!")
            wordText.innerHTML = ("");
            randomBowieWordArrayBlank = [];
            startGame();
            wins++;
            winsText.innerHTML = (wins);
            guessesInWord = [];
            lettersGuessed = [];
            lettersGuessedText.innerHTML = (lettersGuessed);
            guessesRemaining = 12;
            guessesRemainingText.innerHTML = guessesRemaining;
            startGameText.innerHTML = ("You did it!")

        }

    }



    // check if is a letter and is not guessed 
    if ((event.keyCode >= 65 && event.keyCode <= 90) && (isGuessed === false) && (alreadyInWord === false)) {

        // function that checks to see if letter selected is in word
        isInWordCheck();

        function isInWordCheck() {

            for (var j = 0; j < randomBowieWordArray.length; j++) {

                // if in word: run
                if (userChoice === randomBowieWordArray[j]) {
                    isInWord = true;
                    multipleIndex();
                    guessesInWord += userChoice;
                    didUserWinRound();
                    break
                    // if not in word isInWord is false
                } else {
                    isInWord = false;
                }
            }

            // if not in word (isInWord is false) run:
            if (isInWord === false) {
                lettersGuessed += userChoice;
                lettersGuessedText.innerHTML += (userChoice);
                guessesRemaining--;
                guessesRemainingText.innerHTML = (guessesRemaining);
            }

        }
    }



    // reset game if loses
    if (guessesRemaining === 0) {
        losses++;
        lossesText.innerHTML = (losses);
        wordText.innerHTML = ("");
        randomBowieWordArrayBlank = [];
        startGame();
        guessesInWord = [];
        lettersGuessed = [];
        lettersGuessedText.innerHTML = (lettersGuessed);
        guessesRemaining = 12;
        guessesRemainingText.innerHTML = guessesRemaining;
        startGameText.innerHTML = ("Opps.. Not Quite!")
    }
}




