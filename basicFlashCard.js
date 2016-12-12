var fs = require("fs");

var cardFront = process.argv[2];
var cardBack = process.argv[3];

var card = new BasicFlashCard(cardFront, cardBack);
card.displayCardInfo();
card.writeCardInfo();

function BasicFlashCard(cardFront, cardBack) {
    this.cardFront = cardFront;
    this.cardBack = cardBack;

    this.displayCardInfo = function() {
        console.log("Front: " + this.cardFront + " " + "Back: " + this.cardBack);
    }

    this.writeCardInfo = function() {
        var writeCard = "Front: " + this.cardFront + " Back: " + this.cardBack + "\r\n";

        fs.appendFile("basic.txt", writeCard); 
    }
};