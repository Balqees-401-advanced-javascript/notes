'use strict';
const mongoose = require('mongoose');

// bring Scheme
const NoteSchema = require('../lib/model/notes-schema');



class Notes {
  constructor(){
    
  }
  execute(noteCheck={}){

    if ((noteCheck.payload !== undefined && noteCheck.payload !== true) && noteCheck.action !== 'wrong input'){
      this.add(noteCheck);
    }
    else {
        
      return;
    }
  } 
  async add(noteCheck){
    let schema = new NoteSchema();
    let addedNote = await schema.save(noteCheck);
    console.log(addedNote);
   
  }

}

module.exports= Notes;



// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }


 // let object = {};
    // // object.text = noteCheck.payload;
    // object[this.id] = noteCheck.payload;
    // console.log(`Adding Note: ${object[this.id]} with id : ${this.id}`);
    // this.id++ ;


