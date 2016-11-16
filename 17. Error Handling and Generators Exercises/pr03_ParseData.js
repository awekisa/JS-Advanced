function makeRecipes(recipes) {
    let arr = [];

    class Candy {
        constructor(topping, filling, spice) {
            let toppings = ['milk chocolate', 'white chocolate', 'dark chocolate'];
            let fillings = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge'];
            let spices = ['poison', 'asbestos'];
            if (filling.length === 0) filling = null;
            if (spice.length === 0) spice = null;
            if (!toppings.includes(topping)) throw new TypeError('invalid topping');
            if (filling != null){
                let fillArray = filling.split(',');
                for (let fill of fillArray){
                    if (!fillings.includes(fill) || fillArray.length > 3){
                        throw new TypeError('invalid fillings');
                    }
                }
            }
            if (spices.includes(spice)) throw new TypeError('invalid filling');

            this.topping = topping;
            this.filling = filling;
            this.spice = spice;
        }
    }

    for (let recipe of recipes){
        let regex = /^([^:]+):([^:]*):([^:]*)$/g;
        let match = regex.exec(recipe);
        if (match !== null){
            let topping = match[1];
            let filling = match[2];
            let spice = match[3];
            try {
                arr.push(new Candy(topping, filling, spice))
            }
            catch(ex){}
        }
    }
    return arr;
}


let arr = [
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals'
];
console.log(makeRecipes(arr));
