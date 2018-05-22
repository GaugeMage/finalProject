/*
Programmers: Rohan Kakkilaya, & James Pinto
Date Created: 5-21-18
finalProject
*/

//Variables
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

//Function for inititializing when the game starts
function initialize(){
}
