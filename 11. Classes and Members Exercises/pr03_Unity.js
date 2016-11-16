function solve() {
    class Rat {
        constructor(name) {
            this.name = name;
            this.ratFriends = [];
        }

        unite(otherRat) {
            if (otherRat.constructor.name === 'Rat') {
                this.ratFriends.push(otherRat);
            }
        }
        getRats(){
            return this.ratFriends;
        }
        toString(){
            console.log(this.name);
            for (let rat of r.getRats())
            console.log(rat.name)
        }
    }

    let r = new Rat('g')
    let r1 = new Rat('sdsd')
    let r2 = new Rat('zzz')
    r.unite(r1)
    r.unite(r2)
    r.toString()

}



solve()