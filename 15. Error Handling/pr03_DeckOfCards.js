function printDeckOfCards(cards) {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            let allowedFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            if (!allowedFaces.includes(face)) {
                throw new Error("Invalid card face: " + face);
            }
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            let suits = ['S', 'H', 'D', 'C'];
            if (!suits.includes(suit)) {
                throw new Error("Invalid card suit: " + suit);
            }
            this._suit = suit;
        }

        toString() {
            let suitValue = {
                'S': '\u2660',
                'H': '\u2665',
                'D': '\u2666',
                'C': '\u2663'
            }
            return this.face + suitValue[this.suit];
        }
    }

    let result = [];
    for (let card of cards){
        let cardFace = card.slice(0, card.length-1)
        let cardSuit = card.slice(-1);
        let newCard;
        try {
            newCard = new Card(cardFace, cardSuit);
            result.push(newCard);
        }catch(err){
            result = ['Invalid card: ' + card];
            break;
        }
    }
    console.log(result.join(' '));
}

// console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']))
printDeckOfCards(['5S', '3D', 'QD', '1C'])
