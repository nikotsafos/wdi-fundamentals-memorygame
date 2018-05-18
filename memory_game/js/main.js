//console.log("Up and running!");

//console.log("User flipped " + cardOne);

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
]

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}


//var cardOne = cards [0];

//cardsInPlay.push(cardOne);

//console.log("User flipped " + cardsInPlay [0]);

//var cardTwo = cards [2];

//cardsInPlay.push(cardTwo);

//console.log("User flipped " + cardsInPlay [1]);


var flipCard = function(cardId) {


 console.log("User flipped " + cards[cardId].rank);
 console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}

flipCard(0);
flipCard(3);
console.log(cardsInPlay);


/*if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay [1])

	alert("You found a match!");
	
else 
	alert("Sorry, try again.");*/