let f = (function (){
    let result;
    return{
        add: function(vec1, vec2){
            result = [vec1[0] + vec2[0], vec1[1] + vec2[1]];
            return result;
        },
        multiply: function(vec, multiplier){
            result = [vec[0] * multiplier, vec[1] * multiplier];
            return result;
        },
        length: function(vec){
            result = Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
            return result;
        },
        dot: function(vec1, vec2){
            result = vec1[0] * vec2[0] + vec1[1] * vec2[1];
            return result;
        },
        cross: function(vec1, vec2){
            result = vec1[0] * vec2[1] - vec1[1] * vec2[0];
            return result;
        }
    }
})();

// console.log(f.add([1, 1], [1, 0]))
// console.log(f.multiply([3.5, -2], 2))
//console.log(f.length([3, -4]))

//console.log(f.dot([1,0], [0,-1]))
//console.log(f.cross([3, 7], [1, 0]))


// solution.add([1, 1], [1, 0]);	[2, 1]	[1 + 1, 1 + 0] = [2, 1]
// solution.multiply([3.5, -2], 2);	[7, -4]	[3.5 * 2, (-2) * 2] = [7, -4]
// solution.length([3, -4]);	5	sqrt(3 * 3 + (-4) * (-4)) = 5
// solution.dot([1, 0], [0, -1]);	0	1 * 0 + 0 * (-1) = 0
// solution.cross([3, 7], [1, 0]);	-7	3 * 0 – 7 * 1 = -7


