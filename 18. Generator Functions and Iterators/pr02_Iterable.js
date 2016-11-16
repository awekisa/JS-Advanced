function reverseArrayIterable(arr){
    let index = arr.length-1;
    return {
        [Symbol.iterator]: function(){ return this;},
        ['next']: function(){
            if (index >= 0){
                return {value:arr[index--], done: false};
            }
            else{
                return {done: true};
            }
        }
    }
}

for (let i of reverseArrayIterable([1, 3, 4])){
    console.log(i)
}