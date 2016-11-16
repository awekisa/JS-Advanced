function solve() {
    class Stringer {
        constructor(string, length) {
            this.innerString = string;
            this.innerLength = length;
        }

        increase(num) {
            this.innerLength += num
        }

        decrease(num) {
            this.innerLength = (this.innerLength - num > 2) ? this.innerLength - num : 0;
        }

        toString(){
            let lengthDiff = this.innerString.length - this.innerLength;
            let str = this.innerString;
            if (lengthDiff > 0){

                str = str.substring(0, str.length-lengthDiff) + '.'.repeat(3);
                this.innerString = str;
            }
            else if (this.innerLength === 0){
                str = '...'
            }
            return this.innerString;
        }
    }

let a = new Stringer('Victor', 6);
    console.log(a.toString())

}

solve()