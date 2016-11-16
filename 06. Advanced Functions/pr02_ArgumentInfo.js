function argInfo() {
    let map = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        let type = typeof(arg);
        if (map.get(type) === undefined) {
            map.set(type, 0);
        }
        let count = map.get(type);
        map.set(type, ++count);
        console.log(`${type}: ${arg}`);
    }
    // sorting
    let values = Array.from(map).sort((a, b) => {
        let aV = a[1];
        let bV = b[1];
        return bV - aV;
    });
    let sortedMap = new Map();
    for (let i = 0; i < values.length; i++) {
        sortedMap.set(values[i][0], values[i][1]);
    }
    // printing
    for (let item of sortedMap) {
        console.log(item[0] + ' = ' + item[1]);
    }
}

argInfo('cat', 'sdsd', 42, function () {
    console.log('Hello world!');
})