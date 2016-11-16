let lookupChar = require('../pr02_CharLookup.js').lookupChar;
let expect = require('chai').expect;

describe('lookupChar(string, index)', function(){
    it('should return undefined after (1, 0)', function(){
        expect(lookupChar(13, 0)).to.be.equal(undefined);
    });
    it('should return undefined after (string, pesho)', function(){
        expect(lookupChar('string', 'pesho')).to.be.equal(undefined);
    });
    it('should return undefined after (string, 1.23)', function(){
        expect(lookupChar('string', 1.23)).to.be.equal(undefined);
    });
    it('should return Incorrect index! after (string, 13)', function(){
        expect(lookupChar('string', 13)).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index! after (string, -1)', function(){
        expect(lookupChar('string', -1)).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index after (string, 6)', function(){
        expect(lookupChar('string', 6)).to.be.equal('Incorrect index');
    });
    it('should return s after (string, 0)', function(){
        expect(lookupChar('string', 0)).to.be.equal("s");
    });
    it('should return i after (string, 3)', function(){
        expect(lookupChar('string', 3)).to.be.equal("i");
    });


    it('should return i after (string, 3)', function(){
        expect(lookupChar('', 0)).to.be.equal("Incorrect index");
    });
});

