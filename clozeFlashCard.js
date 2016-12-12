var fs = require("fs");

var cardCloze = process.argv[2];
var cardText = process.argv[3];

var card = new ClozeFlashCard(cardCloze, cardText);
card.displayCardInfo();
card.writeCardInfo();
console.log(card.displayClozeDeleted());

function ClozeFlashCard(cardCloze, cardText) {
    this.cardCloze = cardCloze;
    this.cardText = cardText;
    this.cardWhole = cardCloze + " " + cardText;
    
    this.displayCardInfo = function() {
        console.log("Cloze " + this.cardCloze + " " + "Text: " + this.cardText);
    }

    this.writeCardInfo = function() {
        var writeCard = this.cardWhole + "\r\n";

        fs.appendFile("cloze.txt", writeCard); 
    }

    this.displayClozeDeleted = function() {
    	var cloze = this.cardWhole.replace(this.cardCloze,"...");
    	return cloze;
    }
};