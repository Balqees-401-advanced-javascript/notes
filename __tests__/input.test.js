/* eslint-disable indent */
'use strict';
require('@code-fellows/supergoose');//make virtual DB and delete it after test to not effect the real database
const Input = require('../lib/input.js');
const minimist = require('minimist');
jest.spyOn(console , 'log');
jest.mock('minimist');

minimist.mockImplementationOnce(() => ({ 
  }));

describe('Input Module', ()=> {
  it ('validation()  there is no method or invalid', ()=> {
        let validMethod = new Input();
        expect(console.log).toHaveBeenCalled();
  });

  minimist.mockImplementationOnce(() => ({ 
    add: 'this is my first test',
  }));

  it ('add method ' , ()=> {
    expect(new Input()).toMatchObject({action:'add' , payload:'this is my first test' , category:'general'});
  });

  minimist.mockImplementationOnce(() => ({
      delete:'5ed185e8988aa9057074f7c4',
  }));

  it('delete method', () =>{
      expect(new Input()).toMatchObject({action:'delete' , id:'5ed185e8988aa9057074f7c4' });
  });

  minimist.mockImplementationOnce(() => ({
    update:'5ed185e8988aa9057074f7c4',
    _:['new'],
}));

it('update method', () =>{
    expect(new Input()).toMatchObject({action:'update' , id:'5ed185e8988aa9057074f7c4'});
});

minimist.mockImplementationOnce(() => ({
  list:'words',
}));

it('list method', () =>{
    expect(new Input()).toMatchObject({action:'list' , list:'words'});
});

    });