class Branch {
    constructor(id, branchName, companyName) {
        this._id = id;
        this._branchName = branchName;
        this._companyName = companyName;
        this._employees = [];
    }
    get id(){
        return this._id;
    }
    get branchName(){
        return this._branchName;
    }
    get companyName(){
        return this._companyName;
    }

    get employees() {
        return this._employees;
    }

    hire(employee) {
        this.employees.push(employee);
    }

    toString() {
        let result = `@ ${this.companyName}, ${this.branchName}, ${this.id}\nEmployed:`;
        if (this.employees.length > 0) {
            for(let employee of this.employees){
                result += `\n** ${employee}`;
            }

        }
        else {
            result += "\nNone...";
        }

        return result;
    }
}

module.exports = Branch;

