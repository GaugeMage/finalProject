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
  alert("Here are the rules of Blackjac:");
  gameStart = prompt("If you don't wanna play now type \'exit\'. If you wanna play Blackjack, type in your name.");
  if (gameStart == "exit"){
    //Startgame
    break;
  } else {
    //Start game
    console.log("hi");
  }
}

//Function for inititializing when the game starts
function initialize(){
}
