'use strict'

const Input = require('../lib/input.js');

describe('Input Module', ()=> {

    it('validation() defaults to -a when there is no method or invalid', ()=> {
        let validMethod = new Input();
        expect(validMethod.validation('wrongMethod')).toEqual('wrong input');

    });

    it('validation() validating and using the proper methods', ()=> {
        let validMethod = new Input();
        expect(validMethod.validation('--add')).toEqual('add');
        expect(validMethod.validation('-a')).toEqual('add');
        // expect(validMethod.validation('-l')).toEqual('add');
       
    });

});
