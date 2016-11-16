let data = require('./data');

let functions = {
    sort:function (property) {
        data = data.sort((a, b) => {
            return a[property].localeCompare(b[property]);
        });
        return data;
    },
   filter:function (property, value) {
        return data.filter(e => e[property] === value)
    }
}

module.exports = functions

