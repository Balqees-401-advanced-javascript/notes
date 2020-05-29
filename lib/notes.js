'use strict';
const mongoose = require('mongoose');
const NoteSchema = require('../lib/model/notes-schema');
const DB_URI = 'mongodb://localhost:27017/save';// this will be in .env file in future and call it py process.env.DB_URI
// let schema = new NoteSchema();// bring Scheme

mongoose.connect(DB_URI,{
  useNewUrlParser: true, useUnifiedTopology: true,
})
  .catch(err => console.log( err ));

class Notes {
  constructor(){
    
  }
  execute(noteCheck={}){
    console.log(noteCheck.action);
    if ((noteCheck.payload !== undefined && noteCheck.payload !== true) && noteCheck.action !== 'wrong input' && noteCheck.action === 'add'){
      this.add(noteCheck);
    }
    else if((noteCheck.payload !== undefined && noteCheck.payload !== true) && noteCheck.action !== 'wrong input' && noteCheck.action === 'delete'){
      this.delete(noteCheck);
    
    }
    else if((noteCheck.payload !== undefined && noteCheck.payload !== true) && noteCheck.action !== 'wrong input' && noteCheck.action === 'list'){
        
      this.list(noteCheck);
    }

  } 
  async add(noteCheck){
    let schema = new NoteSchema();
    let addedNote = await schema.save(noteCheck);
    console.log('khbf',addedNote);
  }


  // async delete(noteCheck){
  //   let addedNote = await schema.delete(noteCheck);
  //   console.log(addedNote);
  // }


  // async list(noteCheck){
  //   let addedNote = await schema.delete(noteCheck);
  //   console.log(addedNote);
  // }


}

module.exports= Notes;



