/*
Programmers: Rohan Kakkilaya, & James Pinto
Date Created: 5-21-18
finalProject
*/

//Variables
var gameStart;
var cardSource;
var cardNumber;
var cardValue = 0;
var cardType;
var nextCard = 2; //Attaches to html card number to show the next card if hti is pressed//
var cardPicker;
var playerScore = 0;
var cpuScore;
var playerCardShown;
var playerCardHidden;
var compCardShown;
var compCardHidden;

//Picks a random card
function cardPicker(){
    cardNumber = Math.floor(Math.random() * 11) + 2;
    switch (cardNumber){
        case 2:
          cardNumber = 2;
          cardValue = 2;
          break;
        case 3:
          cardNumber = 3;
            cardValue = 3;
          break;
        case 4:
          cardNumber = 4;
            cardValue = 4;
          break;
        case 5:
          cardNumber = 5;
            cardValue = 5;
          break;
        case 6:
          cardNumber = 6;
            cardValue = 6;
          break;
        case 7:
          cardNumber = 7;
            cardValue = 7;
          break;
        case 8:
          cardNumber = 8;
            cardValue = 8;
          break;
        case 9:
          cardNumber = 9;
            cardValue = 9;
          break;
        case 10:
          cardNumber = 10;
            cardValue = 10;
          break;
        case 11:
          cardNumber = "A";
            cardValue = 11;
          break;
        case 12:
          cardNumber = "J";
            cardValue = 10;
          break;
        case 13:
          cardNumber = "K";
            cardValue = 10;
          break;
        case 14:
          cardNumber = "Q";
            cardValue = 10;
          break;
    }

    //Checks for card type. (1: Club 2: Diamond 3: Heart S: Spade)
    cardType = Math.floor(Math.random() * 4) + 1;
    switch (cardType){
      case 1:
        cardType = "C";
        break;
      case 2:
        cardType = "D";
        break;
      case 3:
        cardType = "H";
        break;
      case 4:
        cardType = "S";
        break;
    }

    //Card
    cardSource = "playingCards/"+ cardNumber+cardType + ".png";
}

//When the player presses the button to start the game
function startGame(){
  rules();
  gameStart = prompt("If you don't wanna play now type \'exit\'. If you wanna play Blackjack, type in your name.");
  if (gameStart == "exit"){
      //Nothing happens
  } else {
    //Start game
    initialize();
    document.getElementById("rules").style.visibility = "visible";
    document.getElementById("startGame").style.visibility = "hidden";
    document.getElementById("hit").style.visibility = "visible";
    document.getElementById("stand").style.visibility = "visible";
    document.getElementById("restart").style.visibility = "visible";
  }
}

//When the player clicks the rules button
function rules(){
  alert("Here are the rules of Blackjack: \n-Ace & Jack, King, Queen is blackjack and an automatic win \n-Try to get as close to 21 by hitting without going over or you bust \n-Stand when you are satisfied with your hand \n-The computers hand is played after the player stands \n-1 point is given per round for the player closest to 21 \n-Press restart to restart the game \n-Press rules to show rules \n-Computer stands on 17 and hits on 16");
}

//When the player clicks the hit button
function hit(){

    if (playerScore < 22){
        cardPicker();
        nextCard++;
        playerScore += cardValue;
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("card" + nextCard).style.visibility = "visible";
        document.getElementById("card" + nextCard).src = cardSource;
            //Statements that update the player cards total right after a hit//
            if (playerScore == 21){
                stand();
            }
            else if (playerScore > 21){
                document.getElementById("roundWinner").style.visibility = "visible";
                document.getElementById("roundWinner").textContent = "Bust";
                document.getElementById("computer-winsNum").textContent - -1;
                //Time delay for bust to show in anonymous function//
                setTimeout(function() {newRound();}, 2000);
            }
        }  
}

//When the player clicks the stand button
function stand(){
    document.getElementById("hit").style.visibility = "hidden";
    document.getElementById("stand").style.visibility = "hidden";
    setTimeout(function() {cpuTurn();}, 1000);
}

//cpu turn called after stand
function cpuTurn(){
    nextCard = 2;
    cardPicker();
    document.getElementById("cpuCard2").style.visibility = 'visible';
    document.getElementById("cpuCard2").src = cardSource;
    cpuScore += cardValue;
    document.getElementById("computer-score").textContent = cpuScore;
    setTimeout(function() {
        
    if (cpuScore == 21){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "BLACKJACK! CPU WINS";
        document.getElementById("computer-winsNum").textContent - -1;
        setTimeout(function() {newRound();}, 3000);
        }
    else if(cpuScore >= 17 && cpuScore <= 21){
        document.getElementById("computer-score").textContent = cpuScore;
        compareScores();
        }
    else if (cpuScore > 21){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "BUST";
        document.getElementById("player-winsNum").textContent - -1;
        setTimeout(function() {newRound();}, 3000);
        }
    else if (cpuScore < 17){
        //Loops function cpuTurn so computer plays automatically//
        var i = true;
        while (i == true){
            ++nextCard;
            cardPicker();
            document.getElementById("cpuCard" + nextCard).style.visibility = "visible";
            document.getElementById("cpuCard" + nextCard).src = cardSource;
            cpuScore += cardValue;
            document.getElementById("computer-score").textContent = cpuScore;
            //Statements that update the cpu cards total right after a hit//
            if (cpuScore == 21){
                i = false;
                }
            else if(cpuScore >= 17 && cpuScore <= 21){
                i = false;
                }
            else if (cpuScore > 21){
                i = false;
                }
            }
        //Final check on cards after loop//
        if (cpuScore == 21){
            compareScores();
            }
        else if(cpuScore >= 17 && cpuScore <= 21){
            document.getElementById("computer-score").textContent = cpuScore;
            compareScores();
            }
        else if (cpuScore > 21){
            document.getElementById("roundWinner").style.visibility = "visible";
            document.getElementById("roundWinner").textContent = "BUST";
            document.getElementById("player-winsNum").textContent - -1;
            setTimeout(function() {newRound();}, 3000);
            } 
        }
        
    }, 2000);
}

//When the player clicks the restart button
function restart(){
  userRestart = prompt("Are you sure you want to restart your game?");
  if (userRestart == "Yes" || userRestart == "yes"){
      newRound();
      document.getElementById("player-winsNum").textContent = 0;
      document.getElementById("computer-winsNum").textContent = 0;
  } else if (userRestart == "No" || userRestart == "no"){
      //Does nothing
  } else {
    //If they don't answer yes or no it will keep asking question
    restart();
  }
}

//If neither player busts//
function compareScores(){

    if (playerScore > cpuScore){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "comparing...";
        setTimeout(function() {console.log("PLAYER WINS");}, 2000);
        document.getElementById("roundWinner").textContent = "PLAYER WINS";
        document.getElementById("player-winsNum").textContent - -1;
        setTimeout(function() {newRound();}, 2000);
    }
    else if (playerScore < cpuScore){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "comparing...";
        setTimeout(function() {console.log("CPU WINS");}, 2000);
        document.getElementById("roundWinner").textContent = ("COMPUTER WINS");
        document.getElementById("computer-winsNum").textContent - -1;
        setTimeout(function() {newRound();}, 2000);
    }
    else if (playerScore == cpuScore){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "comparing...";
        setTimeout(function() {console.log("Push");}, 2000);
        document.getElementById("roundWinner").textContent = ("PUSH");
        setTimeout(function() {newRound();}, 2000);
    }
}

//After player of comp win//
function newRound(){
    nextCard = 2;
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("rules").style.visibility = "visible";
    document.getElementById("startGame").style.visibility = "hidden";
    document.getElementById("hit").style.visibility = "visible";
    document.getElementById("stand").style.visibility = "visible";
    document.getElementById("restart").style.visibility = "visible";
    document.getElementById("cpuCard1").style.visibility = "visible";
    document.getElementById("cpuCard2").src = "playingCards/cardBack.png";
    document.getElementById("cpuCard2").style.visibility = "visible";
    document.getElementById("card1").style.visibility = "visible";
    document.getElementById("card2").style.visibility = "visible";
    document.getElementById("cpuCard3").style.visibility = "hidden";
    document.getElementById("cpuCard4").style.visibility = "hidden";
    document.getElementById("cpuCard5").style.visibility = "hidden";
    document.getElementById("cpuCard6").style.visibility = "hidden";
    document.getElementById("card3").style.visibility = "hidden";
    document.getElementById("card4").style.visibility = "hidden";
    document.getElementById("card5").style.visibility = "hidden";
    document.getElementById("card6").style.visibility = "hidden";
    document.getElementById("roundWinner").style.visibility = "hidden";

    cardPicker();
    document.getElementById("card1").src = cardSource;
    playerScore += cardValue;
    document.getElementById("player-score").textContent = playerScore;

    cardPicker();
    document.getElementById("card2").src = cardSource;
    playerScore += cardValue;
    document.getElementById("player-score").textContent = playerScore;

    cardPicker();
    document.getElementById("cpuCard1").src = cardSource;
    cpuScore += cardValue;
    document.getElementById("computer-score").textContent = cpuScore;

    //Checks initial cards//
    if (playerScore == 21){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "BLACKJACK! Player wins";
        document.getElementById("player-winsNum").textContent = +1;
        setTimeout(function() {newRound();}, 3000);
    }
    else if (playerScore > 21){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "Bust";
        document.getElementById("computer-winsNum").textContent + 1;
        setTimeout(function() {newRound();}, 3000);
    } 
}

//Function for inititializing when the game starts
function initialize(){
    nextCard = 2;
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("rules").style.visibility = "hidden";
    document.getElementById("startGame").style.visibility = "visible";
    document.getElementById("hit").style.visibility = "hidden";
    document.getElementById("stand").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("cpuCard1").style.visibility = "visible";
    document.getElementById("cpuCard2").src = "playingCards/cardBack.png";
    document.getElementById("cpuCard2").style.visibility = "visible";
    document.getElementById("card1").style.visibility = "visible";
    document.getElementById("card2").style.visibility = "visible";
    document.getElementById("cpuCard3").style.visibility = "hidden";
    document.getElementById("cpuCard4").style.visibility = "hidden";
    document.getElementById("cpuCard5").style.visibility = "hidden";
    document.getElementById("cpuCard6").style.visibility = "hidden";
    document.getElementById("card3").style.visibility = "hidden";
    document.getElementById("card4").style.visibility = "hidden";
    document.getElementById("card5").style.visibility = "hidden";
    document.getElementById("card6").style.visibility = "hidden";
    document.getElementById("roundWinner").style.visibility = "hidden";

    cardPicker();
    document.getElementById("card1").src = cardSource;
    playerScore += cardValue;
    document.getElementById("player-score").textContent = playerScore;

    cardPicker();
    document.getElementById("card2").src = cardSource;
    playerScore += cardValue;
    document.getElementById("player-score").textContent = playerScore;

    cardPicker();
    document.getElementById("cpuCard1").src = cardSource;
    cpuScore += cardValue;
    document.getElementById("computer-score").textContent = cpuScore;

    //Checks initial cards//
    if (playerScore == 21){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "BLACKJACK! Player wins";
        document.getElementById("player-winsNum").textContent = +1;
        setTimeout(function() {newRound();}, 3000);
    }
    else if (playerScore > 21){
        document.getElementById("roundWinner").style.visibility = "visible";
        document.getElementById("roundWinner").textContent = "Bust";
        document.getElementById("computer-winsNum").textContent + 1;
        setTimeout(function() {newRound();}, 3000);
    }
    
}
