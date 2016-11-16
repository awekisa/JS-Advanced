let Cns = require('../pr05_C#Console');
let expect = require('chai').expect;

describe('Console', function(){
   it('should return simple string when a string is passed with no placeholders', function(){
       console.log(Cns)
       let console1 = new Cns();
       expect (console1.writeLine('dog').to.be.equal('dog'))
   });
});