/*
Programmers: Rohan Kakkilaya, & James Pinto
Date Created: 5-21-18
finalProject
*/

//Variables
var gameStart;
var card;
var cardNumber;
var cardType;
var cardPicker;
var playerCardShown;
var playerCardHidden;
var compCardShown;
var compCardHidden;
var cardCount = [4,4,4,4,4,4,4,4,4,4,4,4,4]; //Card Value: Ace,2,3,4,5,6,7,8,9,10,Jack,Queen,King

initialize();

//Picks a random card
cardNumber = Math.floor(Math.random() * 11) + 2;
switch (cardNumber){
    case 2:
      cardNumber = 2;
      break;
    case 3:
      cardNumber = 3;
      break;
    case 4:
      cardNumber = 4;
      break;
    case 5:
      cardNumber = 5;
      break;
    case 6:
      cardNumber = 6;
      break;
    case 7:
      cardNumber = 7;
      break;
    case 8:
      cardNumber = 8;
      break;
    case 9:
      cardNumber = 9;
      break;
    case 10:
      cardNumber = 10;
      break;
    case 11:
      cardNumber = "A";
      break;
    case 12:
      cardNumber = "J";
      break;
    case 13:
      cardNumber = "K";
      break;
    case 14:
      cardNumber = "Q";
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
card = cardNumber+cardType + ".png";
console.log(card);

//When the player presses the button to start the game
function startGame(){
  alert(rules());
  //gameStart = prompt("If you don't wanna play now type \'exit\'. If you wanna play Blackjack, type in your name.");
  if (gameStart == "exit"){
    throw new Error('This is not an error. This is just to abort game');
  } else {
    //Start game
    document.getElementById("rules").style.visibility = "visible";
    document.getElementById("startGame").style.visibility = "hidden";
    document.getElementById("hit").style.visibility = "visible";
    document.getElementById("stand").style.visibility = "visible";
    document.getElementById("restart").style.visibility = "visible";
  }
}

//When the player clicks the rules button
function rules(){
  alert("Here are the rules of Blackjack: \n-Ace & Jack, King, Queen is blackjack and an automatic win \n-Try to get as close to 21 by hitting without going over or you bust \n-Stand when you are satisfied with your hand \n-The computers hand is played after the player stands \n-1 point is given per round for the player closest to 21 \n-Press restart to restart the game \n-Press rules to show rules");   
}

//When the player clicks the hit button
function hit(){

}

//When the player clicks the stand button
function stand(){
    document.getElementById("hit").style.visibility = "hidden";
    document.getElementById("stand").style.visibility = "hidden";
}

function cpuTurn{
    stand();
}

//When the player clicks the restart button
function restart(){
  userRestart = prompt("Are you sure you want to restart your game?");
  if (userRestart == "Yes" || userRestart == "yes"){
      initialize();
  } else if (userRestart == "No" || userRestart == "no"){

  }
}

//Function for inititializing when the game starts
function initialize(){
    document.getElementById("rules").style.visibility = "hidden";
    document.getElementById("startGame").style.visibility = "visible";
    document.getElementById("hit").style.visibility = "hidden";
    document.getElementById("stand").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    var cardCount = [4,4,4,4,4,4,4,4,4,4,4,4,4];
}


