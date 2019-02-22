
var bowieWord = ["ALADDIN SAIN", "THIN WHITE DUKE", "ZIGGY STARDUST", "MOONAGE DAYDREAM", "TIME", "WATCH THAT MAN", "QUEEN BITCH", "THE JEAN GENIE", "GOLDEN YEARS", "SWEET THING", "DIAMOND DOGS", "SUFFRAGETTE CITY", "FIVE YEARS", "MODERN LOVE", "REBEL REBEL", "SPACE ODDITY", "STARMAN", "LADY STARDUST", "SOUL LOVE", "THE SPIDERS FROM MARS", "PANIC IN DETROIT"]
var randomBowieWord;
var randomBowieWordArray = [];
let userChoice;
let lettersGuessed = [];
let guessesRemaining = 12;
let wins = 0;
let isInWord = false;
let checkLettersGuessed = false;
// variables that hold place in html
    var startGameText = document.getElementById("start-game");
    var wordText = document.getElementById("word");
    var guessesRemainingText = document.getElementById("guesses-remaining");
    var lettersGuessedText = document.getElementById("letters-guessed");
    var winsText = document.getElementById("wins");


// hit any key to start game/initalize functions
document.onkeyup = function(event) {
    alert("game is starting")

    // when press key to start game random bowie word is chosen
    var randomBowieWord = bowieWord[Math.floor(Math.random() * bowieWord.length)];
    alert("word is " + randomBowieWord) 

    // turn selected word into an array
     var randomBowieWordArray = Array.from(randomBowieWord);
     alert("array is " + randomBowieWordArray)

    // create underscores and spaces
    for (var i = 0; i < randomBowieWordArray.length; i++) {
      if ((randomBowieWordArray[i] === "A") || (randomBowieWordArray[i] === "B") || (randomBowieWordArray[i] === "C") || (randomBowieWordArray[i] === "D") || (randomBowieWordArray[i] === "E") || (randomBowieWordArray[i] === "F") || (randomBowieWordArray[i] === "G") || (randomBowieWordArray[i] === "H") || (randomBowieWordArray[i] === "I")  ||(randomBowieWordArray[i] === "J") || (randomBowieWordArray[i] === "K") || (randomBowieWordArray[i] === "L") || (randomBowieWordArray[i] === "M") || (randomBowieWordArray[i] === "N") || (randomBowieWordArray[i] === "O") || (randomBowieWordArray[i] === "P") || (randomBowieWordArray[i] === "Q") || (randomBowieWordArray[i] === "R") || (randomBowieWordArray[i] === "S") || (randomBowieWordArray[i] === "T") || (randomBowieWordArray[i] === "U") || (randomBowieWordArray[i] === "V") || (randomBowieWordArray[i] === "W") || (randomBowieWordArray[i] === "X") || (randomBowieWordArray[i] === "Y") || (randomBowieWordArray[i] === "Z")) {
        wordText.innerHTML += "_\&nbsp";
        // document.write('_ ')
        
      } else if (randomBowieWordArray[i] === " ") {
        
        wordText.innerHTML += "\xa0\xa0";
        // document.write("&nbsp&nbsp")
    } 
  }
   

  function checkLetters(userChoice) {
     isInWord = false;
     checkLettersGuessed = false;
  }
    function checkIfInWordMultiple(userChoice) {
        var hasMultipleLetter = false;
    }

    

    document.onkeyup = function(event) {
        // put selected letter in variable
        userChoice = event.key.toLocaleUpperCase();
        checkLetters(userChoice);

    // check if is letter
    if ((userChoice !== "A") && (userChoice !== "B") && (userChoice !== "C") && (userChoice !== "D") && (userChoice !== "E") && (userChoice !== "F") && (userChoice !== "G") && (userChoice !== "H") && (userChoice !== "I")  && (userChoice !== "J") && (userChoice !== "K") && (userChoice !== "L") && (userChoice !== "M") && (userChoice !== "N") && (userChoice !== "O") && (userChoice !== "P") && (userChoice !== "Q") && (userChoice !== "R") && (userChoice !== "S") && (userChoice !== "T") && (userChoice !== "U") && (userChoice !== "V") && (userChoice !== "W") && (userChoice !== "X") && (userChoice !== "Y") && (userChoice !== "Z")) {
        alert("please choose a letter")

        // if is letter check if is in word
    } else {
        isInWord(userChoice);
        function isInWord(userChoice) {

       
        for (var j = 0; j < randomBowieWordArray.length; j++) {
            // if in word:
            if (userChoice === randomBowieWordArray[j]){
                isInWord = true;
                wordText.innerHTML += (userChoice);  
                   var a = randomBowieWordArray.indexOf(userChoice); 
                   
                   
                   alert(a);
            // have done with and without else statement-no change-

            
            } else if (userChoice === false) {
                alert(userChoice)
            
                lettersGuessed += userChoice[j];
                alert(lettersGuessed);
                lettersGuessedText.innerHTML += (userChoice[j]);
                
                //    return
                // } else if (isInWord === true) {
                    // checkLettersGuessed(userChoice[j])
            
                } 
        } 
    }     
//if is not in word code -not working

           
        }         
    
  }
}



    // if ((userChoice !== "A") && (userChoice !== "B") && (userChoice !== "C") && (userChoice !== "D") && (userChoice !== "E") && (userChoice !== "F") && (userChoice !== "G") && (userChoice !== "H") && (userChoice !== "I")  && (userChoice !== "J") && (userChoice !== "K") && (userChoice !== "L") && (userChoice !== "M") && (userChoice !== "N") && (userChoice !== "O") && (userChoice !== "P") && (userChoice !== "Q") && (userChoice !== "R") && (userChoice !== "S") && (userChoice !== "T") && (userChoice !== "U") && (userChoice !== "V") && (userChoice !== "W") && (userChoice !== "X") && (userChoice !== "Y") && (userChoice !== "Z")) {
        // alert("please choose a letter")
    // } else {
   
    // for (var j = 0; j < randomBowieWordArray.length; j++) {
    //   guess correct
        // if (userChoice === randomBowieWordArray[j]) {
            // wordText.innerHTML += (randomBowieWordArray[j]);
            // break;
            // alert(randomBowieWordArray[j])
        // } 
        //  else if (userChoice !== randomBowieWordArray[j]) {
            // lettersGuessed += userChoice;
            // lettersGuessedText.innerHTML += userChoice;
            // break;
        //    guessesRemainingText
           
        //  } else if (userChoice === lettersGuessed) {
            //  break;
        // } 
       
    // }
    
    // alert("this is key " + userChoice)
    
//   }
// }

// }
// // function checkLettersGuessed(lettersGuessed) {
//     for (var k = 0; k < lettersGuessed.length; k++) {
//         if (userChoice === lettersGuessed) {
//             checkLettersGuessed = true;
//             alert(checkLettersGuessed)
//             if (checkLettersGuessed === true) {
//                 return
//             } else {
//               lettersGuessedText.innerHTML += userChoice[j];
//             }
//         } 
//     } 
// }