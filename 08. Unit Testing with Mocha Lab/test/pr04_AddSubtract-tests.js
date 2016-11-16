let createCalculator = require('../pr04_AddSubtract.js').createCalculator;
let expect = require("chai").expect;

describe("createCalculator()", function(){
    let calc;
    beforeEach(function(){
        calc = createCalculator();
    });

    // valid input
    it('should return 5 after {add 3; add2}', function(){
        calc.add(3); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it('should return 5.7 after {add 3.3; add 2.4}', function(){
        calc.add(3.3); calc.add(2.4); let value = calc.get();
        expect(value).to.be.equal(3.3 + 2.4);
    });
    it('should return -5 after {subtract 3; subtract 2}', function(){
        calc.subtract(3); calc.subtract(2); let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it('should return -5.7 after {subtract 3; subtract 2}', function(){
        calc.subtract(3.3); calc.subtract(2.4); let value = calc.get();
        expect(value).to.be.equal(-3.3 -2.4);
    });

    // Invalid input
    it('should return \'03\' after {add \'3\'}', function(){
        calc.add('3'); let value = calc.get();
        console.log(value)
        expect(value).to.be.equal(3);
    });
    it('should return -3 after {subtract \'3\'}', function(){
        calc.subtract('3'); let value = calc.get();
        expect(value).to.be.equal(-3);
    });
    it('should return NaN after {subtract \'s3\'}', function(){
        calc.subtract('s3'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it('should return NaN after {add \'s3\'}', function(){
        calc.add('s3'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it('should return NaN after {add \'s3\'}', function(){
        calc.add('s3'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    // check for properties
    it('should have add property', function(){

        expect(calc.hasOwnProperty('add')).to.be.equal(true);
    });
    it('should have subtract property', function(){

        expect(calc.hasOwnProperty('subtract')).to.be.equal(true);
    });
    it('should have get property', function(){

        expect(calc.hasOwnProperty('get')).to.be.equal(true);
    });
    it('don\'t have defined value', function(){

        expect(!calc.hasOwnProperty('value')).to.be.equal(true);
    });

});