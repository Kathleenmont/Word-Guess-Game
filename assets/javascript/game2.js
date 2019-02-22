// variable list
var bowieWord = ['STARDUST', 'SUFFRAGETTE', 'TIME', 'GOLDEN', 'ZIGGY', 'MARS', 'SPIDERS', 'MOONAGE', 'STARMAN', 'DUKE', 'ALADDIN', 'REBEL', 'HEROS', 'CHANGES', 'LAZARUS', 'BLACKSTAR', 'FAME', 'STAR', 'QUICKSAND'];
var randomBowieWord;
var randomBowieWordArray = [];
var randomBowieWordArrayBlank;
let userChoice;
let lettersGuessed = [];
let guessesRemaining = 12;
let wins = 0;
let isInWord = false;
var isGuessed = false;
var guessesInWord = [];
var alreadyInWord = false;

// variables that hold place in html
var startGameText = document.getElementById("start-game");
var wordText = document.getElementById("word");
var guessesRemainingText = document.getElementById("guesses-remaining");
var lettersGuessedText = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins");

// hit any key to start game/initalize functions
document.onkeyup = function (event) {
    alert("game is starting")
    startGame();
       
        // when press key to start game random bowie word is chosen
        function startGame() {
        var randomBowieWord = bowieWord[Math.floor(Math.random() * bowieWord.length)];
        alert("word is " + randomBowieWord)

        // turn selected word into an array
         var randomBowieWordArray = Array.from(randomBowieWord);
        alert("array is " + randomBowieWordArray)

        // turn into blanks
        for (var i = 0; i < randomBowieWordArray.length; i++) {
            
            wordText.innerHTML += "_\&nbsp";
        }
    

    // start when letter is selected
    document.onkeyup = function (event) {

        // put selected letter in variable
        userChoice = event.key.toLocaleUpperCase();


        // function to see if is already guessed in letters guessed
        checkIfGuessedLettersGuessed();
        function checkIfGuessedLettersGuessed() {

            for (var k = 0; k < lettersGuessed.length; k++) {
                if (userChoice === lettersGuessed[k]) {
                    alreadyInWord = true;
                    break
                } else {
                    alreadyInWord = false;
                }
            }
        }

        // function to check if already guessed in word
        checkIfGuessedAlreadyInWord();
        function checkIfGuessedAlreadyInWord() {

            for (var l = 0; l < guessesInWord.length; l++) {
                if (userChoice === guessesInWord[l]) {
                    isGuessed = true;
                    break
                } else {
                    isGuessed = false;
                }
            }
        }

        // check if is a letter and is not guessed 
         if ((event.keyCode >= 65 && event.keyCode <= 90) && (isGuessed === false) && (alreadyInWord === false)) {

            // function that checks to see if letter selected is in word
            isInWord();
            function isInWord() {
                for (var j = 0; j < randomBowieWordArray.length; j++) {

                    // if in word: run
                    if (userChoice === randomBowieWordArray[j]) {
                        isInWord = true;
                        wordText.innerHTML += (userChoice);
                        guessesInWord += userChoice;
                        var a = randomBowieWordArray.indexOf(userChoice);
                        alert(a);
                        randomBowieWordArray.splice( a, userChoice)
                        break
                        // if not in word isInWord is false
                    } else {
                        isInWord = false;
                    }
                }

            }
        }
        
        // if not in word (isInWord is false) run:
        if (isInWord === false) {
            lettersGuessed += userChoice;
            lettersGuessedText.innerHTML += (userChoice);
            guessesRemaining--;
            guessesRemainingText.innerHTML = (guessesRemaining);
        }

        // reset game 
        if (guessesRemaining === 0) {
            wordText.innerHTML = ("");
            startGame();
            guessesInWord = [];
            
            lettersGuessed = [];
            lettersGuessedText.innerHTML = (lettersGuessed);
            guessesRemaining = 12;
            guessesRemainingText.innerHTML = guessesRemaining;
        }
    }

    // write variabes to page 
    // lettersGuessedText.innerHTML = ("Incorrect Letters Guessed: " + lettersGuessed);
    // winsText.innerHTML = ("Wins: /n" + wins);
    // guessesRemainingText.innerHTML = ("Guesses Remaining: " + guessesRemaining);
    
}

}
