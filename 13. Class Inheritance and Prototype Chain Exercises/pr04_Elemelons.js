function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        }
        morph(){
            let element = this.elements.shift();
            this.elements.push(element);
            console.log(this)
            return this;
        }
        toString() {
            return `Element: ${this.elements[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}


let melons = solve()
// let waterm = new melons.Watermelon(2,'dfss');
// console.log(waterm.toString())
// waterm.elementIndex = 10
// console.log(waterm.hasOwnProperty('elementIndex'))
// console.log(waterm.elementIndex)
// let watermelon = new melons.Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());
let mel = new melons.Melolemonmelon(3, '123');
mel.morph()