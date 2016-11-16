class sortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    add(element){
        this.list.push(element);
        this.list.sort((a, b) => (a - b));
        this.size += 1;
    }
    remove(index){
        if (index >= 0 && index < this.list.length){
            let updateList = [];
            this.list[index] = null;
            this.list.forEach(e => {
                if (e !== null){
                    updateList.push(e);
                }
            });
            this.list = updateList.slice();
            this.size -= 1;
        }
    }
    get(index){
        if (index >= 0 && index < this.list.length){
            return this.list[index];
        }
    }
}

let c = new sortedList();
console.log(c);
c.add('elem')
c.add(1)
c.add(11)
c.add(2)
c.remove(22)
console.log(c)
console.log('get: ' + c.get(1));
c.size = 6
console.log(c.size)
