let isSymmetric = require('../pr02_CheckForSymmetry').isSymmetric;
let expect = require("chai").expect;

describe("isSymmetric(arr)", function() {
    it("should return equal for [1, 2, 1]", function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it("should return equal for [1]", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.be.equal(true);
    });
    it("should return false for [1, 2, 3, 4] ", function () {
        expect(isSymmetric([1, 2, 3, 4])).to.be.equal(false);
    });
    it("should return true for [1, NaN, 1] ", function () {
        expect(isSymmetric([1, NaN, 1] )).to.be.equal(true);
    });
    it("should return false for 'pesho' ", function () {
        expect(isSymmetric('pesho')).to.be.equal(false);
    });
});

