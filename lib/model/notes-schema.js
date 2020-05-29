'use strict';
const mongoose = require('mongoose'); // npm package(node module)
// const fs = require('fs')// inside of node 

// blueprint for our data and the type of data for each prop.
const notesSchema = mongoose.Schema({
// method: {type: String ,uppercase: true,enum: ['GET' ,'POST' , 'PUT' ,'DELETE']}
  text : {type: String  , require: true}, 
  category:{type: String  , require: true},
//enum : ['frout' , 'Vegetable'] allow to have these value only 
// name :{type: String , uppercase:true}
// email: {type : String , uppercase: true , }
});



module.exports = mongoose.model('notes' , notesSchema);