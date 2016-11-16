let isOddOrEven = require('../pr01_EvenOrOdd').isOddOrEven;
let expect = require("chai").expect;

describe("isOddOrEven(str)", function(){


    it('should return odd after \"horse\"', function(){
        expect(isOddOrEven("horse")).to.be.equal("odd");
    });
    it('should return even after \"horses\"', function(){
        expect(isOddOrEven("horses")).to.be.equal("even");
    });
    it('should return undefined after 1', function(){
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
});