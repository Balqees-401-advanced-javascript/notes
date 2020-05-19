'use strict'
const mongoose = require('mongoose'); // npm package

const notsToSave = mongoose.Schema({
    method: { 
        type: String ,uppercase: true,
         enum: ['GET' ,'POST' , 'PUT' ,'DELETE']
        }
});



module.exports = mongoose.model('notsToSave' , notsToSave);