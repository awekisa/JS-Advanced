function solve() {
    let result = (function () {

        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let Suits = {
            SPADES: '\u2660',
            HEARTS: '\u2665',
            DIAMONDS: '\u2666',
            CLUBS: '\u2663'
        }

        class Card {
            constructor(face, suit){
                this.face = face;
                this.suit = suit;
            }
            get face(){return this._face};
            set face(face){
                if (!faces.includes(face)){
                    throw new Error('Invalid card face: ' + face);
                }
                this._face = face;
            }
            get suit() {return this._suit};
            set suit(suit){
                let arr = Object.keys(Suits).map(k => Suits[k]);
                if(!Object.keys(Suits).map(k => Suits[k]).includes(suit)){
                    throw new Error('Invalid card suit: ' + suit);
                }
                this._suit = suit;
            }
            toString(){
                return `${this.face}${this.suit}`;
            }
        }


        return {
            Suits: Suits,
            Card: Card
        }
    }());

    // let Card = result.Card;
    // let Suits = result.Suits;

    // let card = new Card('Q', Suits.CLUBS);
    // card.face = 'A';
    // card.suit = Suits.DIAMONDS;
    // let card2 = new Card('1', Suits.DIAMONDS); // should throw error


    // let card = new Card("2",Suits.SPADES);
    //

}

solve()

