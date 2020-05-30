'use strict';

const allMethode= require('./model/notes-collection');

class Notes {
  constructor(){}

  execute(noteCheck={}){

    if (noteCheck.action === 'add'){
      return allMethode.create(noteCheck);
    }

    else if(noteCheck.action === 'delete'){
      return allMethode.delete(noteCheck);
    }

    else if(noteCheck.action === 'list'){     
      return allMethode.get(noteCheck);
    }

    else if (noteCheck.action === 'update'){
      return allMethode.update(noteCheck);
    }
  } 
  
}

module.exports= Notes;



// const DB_URI = 'mongodb://localhost:27017/save';// this will be in .env file in future and call it py process.env.DB_URI
// let schema = new NoteSchema();// bring Scheme

// mongoose.connect(DB_URI,{
//   useNewUrlParser: true, useUnifiedTopology: true,
// })
//   .catch(err => console.log( err ));
// const mongoose = require('mongoose');