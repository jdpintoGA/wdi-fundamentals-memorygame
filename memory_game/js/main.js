let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];
let cardsInPlay = [];


function checkForMatch () {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("you found a match!");
		} else {
			alert("try again :(");
		}
};

function flipCard(cardId) {
console.log("user flipped "+ cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		if (cardsInPlay.length === 2) {
			checkForMatch()
		}
};



function createBoard(){
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img").setAttribute("src", "images/back.png");
		cardElement = this.
	}
};


flipCard(0);
console.log(cards[0].cardImage);
console.log(cards[0].suit);

flipCard(2);
console.log(cards[2].cardImage);
console.log(cards[2].suit);

