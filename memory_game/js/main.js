let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = "queen";
let cardTwo = "king";
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) { 
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("try again :(");
	}

};








console.log("user flipped "+ cardOne);
console.log("user flipped "+ cardTwo);

 