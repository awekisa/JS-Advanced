function reverseIterator(arr){
    let arrIndex = arr.length-1;
    return{
        next: function(){
            if (arrIndex >= 0){
                return {value: arr[arrIndex--], done: false};
            }
            else{
                return {done: true};
            }
        }
    }
}