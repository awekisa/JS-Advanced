function mapSort(map, sortFn) {
    let sortedMap = new Map();
    let sortingArray = [];
    if (sortFn !== undefined) {
        sortingArray = [...map.entries()];
        sortingArray.sort(function (a, b) {
            let f = sortFn;
            return f(a, b);
        });
        sortingArray.forEach(entry => {
            sortedMap.set(entry[0], entry[1]);
        });
        return sortedMap;
    }
    else {
        sortingArray = [...map.keys()];
        sortingArray.sort();
        sortingArray.forEach(e => {
            sortedMap.set(e, map.get(e));
        });
        return sortedMap;
    }

}

module.exports = mapSort;


// let map = new Map();
// map.set(3, {age: 13, hoby: "Skiing"});
// map.set(1, {name: "Stamat", age: 29, color: "blue"});
// map.set(7, {name: "Yordan", age: 3});
// let sortedMap = mapSort(map, (a, b)=>a[1].age - b[1].age);
//
// console.log(sortedMap)
//
// let expectations = '[[7,{"name":"Yordan","age":3}],[3,{"age":13,"hoby":"Skiing"}],[1,{"name":"Stamat","age":29,"color":"blue"}]]'

