let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
        </div>`;


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('sharedObject', function(){
   it('name property should start as null', function(){
       expect(sharedObject.name).to.equal(null, 'Name did not start with value null');
   });
    it('income property, should start as null', function(){
       expect(sharedObject.income).to.equal(null, "Name did not start with value null");
    });

    describe('changeName', function(){
       it('with invalid parameters should not change name property', function(){
           sharedObject.changeName("");
           expect(sharedObject.name).to.equal(null, "Name changed incorrectly");
       });
        it('with invalid parameters and preexisting value should not change name property', function(){
            sharedObject.name = "Pesho";
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal("Pesho", "Name changed incorrectly");
        });
        it('with invalid parameters and preexisting value should not change name property', function(){
            let nameTextbox = $('#name');
            nameTextbox.val('Ivan');
            sharedObject.changeName("");
            expect(nameTextbox.val()).to.equal("Ivan", "Name changed incorrectly");
        });
        it('with valid name should change name property', function(){
            sharedObject.name = 'Joro';
            expect(sharedObject.name).to.equal("Joro", "Name changed");
        });

        it('with valid name should change name property', function(){
            sharedObject.name = 'Stamat';
            let nameTextbox = $('#name');
            expect(sharedObject.name).to.equal("Stamat", "Name changed");
        });
    });

});