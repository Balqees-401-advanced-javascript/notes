'use strict';
require('@code-fellows/supergoose');
let noteClection = require('../lib/model/notes-collection.js');
let id ;
let id1 ;

describe('test',()=>{
  it('check create',() =>{
    return noteClection.create({payload:'hi from creat' , category:'creat'})
      .then(data => {
        return expect(data).toMatchObject({text:'hi from creat' , category:'creat'});
      });
  });

  it('check create',() =>{
    return noteClection.create({payload:'hi from creat' , category:'general'})
      .then(data => {
        return expect(data).toMatchObject({text:'hi from creat' , category:'general'});
      });
  });

  it('check create',() =>{
    return noteClection.create({payload:'hi from creat' , category:'general'})
      .then(data => {

        return expect(data).toMatchObject({text:'hi from creat' , category:'general'});
      });
  });

  it('check list',() =>{
    return noteClection.get({list:'creat'})
      .then(data => {
        id1=data[0]._id;
        return expect(data[0]).toMatchObject({text:'hi from creat' , category:'creat'});
      });
  });

  it('check list',() =>{
    return noteClection.get({list:'general'})
      .then(data => {
        id = data[0]._id;
        expect(data[1]).toMatchObject({text:'hi from creat' , category:'general'});
        return expect(data[0]).toMatchObject({text:'hi from creat' , category:'general'});
      });
  }); 

  it('check delete', () =>{

    return noteClection.delete({id:id})
      .then(()=> {
        noteClection.get({list:'general'})
          .then(data =>{
            expect(data.length).toEqual(1);
          });
        
      });
    
  });

  it('check Update', () =>{

    return noteClection.update({id:id1 , update:'hiii'})
      .then(()=> {
        return noteClection.get({list:'creat'})
          .then(data =>{
            console.log('dataa',data);
            return expect(data[0].text).toEqual('hiii');
          });
          
      });
    
  });
});

