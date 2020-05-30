/* eslint-disable indent */
'use strict';
const Notes = require('../lib/notes.js');
jest.spyOn(console , 'log'); // check the console move 

describe('Notes Module', ()=> {

    it('execute() when there is no Note ', ()=> {
        let validNote= new Notes();
        validNote.execute();
        expect(console.log).not.toHaveBeenCalled();

    });

    it('allMethode.create() Action ADD', ()=> {
        let validNote= new Notes();
        // console.log('hiiiiiiiiiii',validNote.execute());
        validNote.execute({action:'add'});
        expect(validNote.execute({action:'add'})).toBeTruthy(); 
    });


    it('allMethode.create() Action delete', ()=> {
        let validNote= new Notes();
        validNote.execute({action:'delete'});
        expect(validNote.execute({action:'delete'})).toBeTruthy(); 
    });

    it('allMethode.create() Action list', ()=> {
        let validNote= new Notes();
        validNote.execute({action:'list'});
        expect(validNote.execute({action:'list'})).toBeTruthy(); 
    });

    it('allMethode.create() Action update', ()=> {
        let validNote= new Notes();
        validNote.execute({action:'update'});
        expect(validNote.execute({action:'update'})).toBeTruthy(); 
    });

});