let mathEnforcer = require('../pr03_MathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe('mathEnforcer', function() {
    describe('addFive(num)', function() {
        it('should return 10 after 5', function () {
            let result = 0;
            expect(result = mathEnforcer.addFive(5.3)).to.be.equal(5.3 + 5);
        });
        it('should return undefined after gsd', function () {
            let result = 0;
            expect(result = mathEnforcer.addFive("gsd")).to.be.equal(undefined);
        });
        it('should return 2 after -5', function () {
            let result = 0;
            expect(result = mathEnforcer.addFive(-3)).to.be.equal(5 - 3);
        });
        it('should return 2 after -5', function () {
            let result = 0;
            expect(result = mathEnforcer.addFive(-3.3)).to.be.equal(5 - 3.3);
        });
    });
    describe('subtractTen', function(){
        it('should return 90 after 100', function () {
            let result = 0;
            expect(result = mathEnforcer.subtractTen(100.53)).to.be.equal(100.53 - 10);
        });
        it('should return -110 after -100', function () {
            let result = 0;
            expect(result = mathEnforcer.subtractTen(-100.1)).to.be.equal(-100.1 - 10);
        });
        it('should return undefined after (sds)', function () {
            let result = 0;
            expect(result = mathEnforcer.subtractTen('sds')).to.be.equal(undefined);
        });
    });
    describe('sum', function(){
        it('should return undefined after (sds, 1)', function () {
            let result = 0;
            expect(result = mathEnforcer.sum('sds', 1)).to.be.equal(undefined);
        });
        it('should return undefined after (1, sds)', function () {
            let result = 0;
            expect(result = mathEnforcer.sum(1, 'sds')).to.be.equal(undefined);
        });
        it('should return 124 after (1, 123)', function () {
            let result = 0;
            expect(result = mathEnforcer.sum(1, 123)).to.be.equal(123 + 1);
        });
        it('should return 2.23 after (1, 1.23)', function () {
            let result = 0;
            expect(result = mathEnforcer.sum(2.3, 2.4)).to.be.equal(2.3 + 2.4);
        });
    });
});