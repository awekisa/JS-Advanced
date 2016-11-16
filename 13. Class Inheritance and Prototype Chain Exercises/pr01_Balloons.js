function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, RibbonColor, RibbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: RibbonColor,
                length: RibbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, RibbonColor, RibbonLength, text){
            super(color, gasWeight, RibbonColor, RibbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
    }

    return {
        Balloon, PartyBalloon, BirthdayBalloon
    }
}

let balloons = solve()
let Balloon = balloons.Balloon;
let PartyBalloon = balloons.PartyBalloon;
let BirthdayBalloon = balloons.BirthdayBalloon;

let b = new Balloon('blue', 4);
let pb = new PartyBalloon('red', 5, 'green', 3);
let BR = new BirthdayBalloon('blue', 4, 'green', 3, "Happy bdgfg")
console.log(BR.text)