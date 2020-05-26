'use strict'
const mongoose = require('mongoose'); // npm package

const notesSchema = mongoose.Schema({
    // method: {type: String ,uppercase: true,enum: ['GET' ,'POST' , 'PUT' ,'DELETE']}
    text : {type: String  , require: true}, 
    category:{type: String  , require: true}
     // name :{type: String , uppercase:true}
    // email: {type : String , uppercase: true , }
});



module.exports = mongoose.model('notes' , notesSchema);