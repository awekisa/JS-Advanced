class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

let a = new Point(5, 0);
let b = new Point(10, 0);
console.log(Point.distance(a, b))