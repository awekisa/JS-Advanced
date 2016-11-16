function sortArray(arr, method) {
    let strategy = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }
    return arr.sort(strategy[method]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'))