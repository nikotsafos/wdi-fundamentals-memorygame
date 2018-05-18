//console.log("Up and running!");

//console.log("User flipped " + cardOne);

var cards = ["queen", "queen", "king", "king"];

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


 console.log("User flipped " + cards[cardId]);
 
cardsInPlay.push(cards[cardId]);
checkForMatch();
}

flipCard(0);
flipCard(3);
console.log(cardsInPlay);

/*if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay [1])

	alert("You found a match!");
	
else 
	alert("Sorry, try again.");*/