'use strict';
const mongoose = require('mongoose'); // npm package(node module)


const notesSchema = mongoose.Schema({ // blueprint for our data and the type of data for each prop.

  text : {type: String  , require: true}, 
  category:{type: String  , require: true},

});


module.exports = mongoose.model('notes' , notesSchema);








// const fs = require('fs')// inside of node 
// method: {type: String ,uppercase: true,enum: ['GET' ,'POST' , 'PUT' ,'DELETE']}
//enum : ['frout' , 'Vegetable'] allow to have these value only 
// name :{type: String , uppercase:true}
// email: {type : String , uppercase: true , }
