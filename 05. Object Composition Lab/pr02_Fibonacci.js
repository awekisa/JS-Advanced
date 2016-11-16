function fibonachi(input){
    let result = (() => {
        let f0 = 0, f1 = 1;
        return () => {
            let oldF0 = f0;
            let oldF1 = f1;
            f0 = oldF1;
            f1 = oldF0 + oldF1;
            return oldF1;
        }
    })();
    let fibNums = [];
    for (let i = 0; i < Number(input); i++){
        fibNums[i] = result();
    }
    return fibNums;
}

console.log(fibonachi([5]));