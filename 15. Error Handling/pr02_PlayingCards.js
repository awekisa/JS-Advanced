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

// let card = new Card(2, 'S')
// card.toString()
let card = new Card('J', 'D');
let result = card.toString();
console.log(result)
