let lookupChar = function(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
};

console.log(lookupChar('string', 1.233))
module.exports = {lookupChar}