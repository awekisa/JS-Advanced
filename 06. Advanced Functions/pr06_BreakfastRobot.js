let a = (function solve(){
    let recipes = {
        apple: {'carbohydrate': 1, 'flavour': 2},
        coke: {'carbohydrate': 10, 'flavour': 20},
        burger: {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        omelet: {'protein': 5, 'fat': 1, 'flavour': 1},
        cheverme: {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10}
    };

    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let result = function(input){
        let [command, arg, quantity] = input.split(' ').filter(e => e != '');

        let implement = (function(){
            return {
                restock: (element, quantity) => {
                    element = element.toLowerCase();
                    elements[element] += Number(quantity);
                    return 'Success';
                },
                prepare: (recipe, quantity) => {
                    recipe = recipe.toLowerCase();
                    let mealQuantity = quantity;
                    let insufficient = '';
                    for (let prop of Object.keys(recipes[recipe])){
                        let quantity = recipes[recipe][prop]*Number(mealQuantity);
                        if (quantity > elements[prop]){
                            return `Error: not enough ${prop} in stock`;
                        }
                    }
                    Object.keys(recipes[recipe]).forEach(key => {
                        let quantity = recipes[recipe][key]*Number(mealQuantity);
                        elements[key] -= quantity;
                    });
                    return 'Success';
                },
                report: () => `protein=${elements.protein} carbohydrate=${elements.carbohydrate} fat=${elements.fat} flavour=${elements.flavour}`
            }
        })();

        return implement [command](arg, quantity);
    };
    return result;

})()

console.log(a([
'restock flavour 50',
'prepare coke 4	Success',
'Error: not enough carbohydrate in stock',
'Sample Input Sample Output',
'restock carbohydrate 10',
'restock flavour 10',
'prepare apple 1',
'restock fat 10',
'prepare burger 1',
'report	Success',
'Success',
'Success',
'Success',
'Success',
'protein=0 carbohydrate=4 fat=3 flavour=5'

]))