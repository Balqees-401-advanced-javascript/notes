'use strict'
const Notes = require('../lib/notes.js');
jest.spyOn(console , 'log'); // check the console move 
describe('Notes Module', ()=> {

    it('execute() when there is no Note ', ()=> {
        let validNote= new Notes();
        validNote.execute();
        expect(console.log).not.toHaveBeenCalled();

    });

    it('execute() there is note ', ()=> {
        let validNote= new Notes();
        validNote.execute({action:'add',payload:'yournote'});
        expect(console.log).toHaveBeenCalled();
       
    });

});