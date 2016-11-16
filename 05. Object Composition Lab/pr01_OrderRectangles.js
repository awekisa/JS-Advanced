function compareRects(input) {
    let result = [];
    for (let el of input) {
        result.push(createRect(el[0], el[1]));
    }

    function createRect(w, h) {
        let rect = {
            width: w,
            height: h,
            area: () => rect.width * rect.height,
            compareTo: function (otherRect) {
                let result = otherRect.area() - rect.area();
                return result || (otherRect.width - rect.width);
            }
        };
        return rect;
    }
    return result.sort((a, b) => a.compareTo(b));
}

console.log(compareRects([[1,20],[20,1],[5,3],[5,3]]))