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
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	
	if (cardsInPlay[cardId].rank === cardsInPlay[cardId].rank) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}


//var cardOne = cards [0];

//cardsInPlay.push(cardOne);

//console.log("User flipped " + cardsInPlay [0]);

//var cardTwo = cards [2];

//cardsInPlay.push(cardTwo);

//console.log("User flipped " + cardsInPlay [1]);


var flipCard = function() {
	cardId = this.getAttribute('data-id');
	console.log(cardId);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
	checkForMatch();
	cardsInPlay = [];
}


};



var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {

var cardElement = document.createElement('img');


cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);
}

}





createBoard();
/*if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay [1])

	alert("You found a match!");
	
else 
	alert("Sorry, try again.");*/