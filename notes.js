'use strict';

const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
// bring Scheme

//connecting the mongoose "connect to DB" //define URL
const DB_URI = 'mongodb://localhost:27017/save';// this will be in .env file in future and call it py process.env.DB_URI
// const DB_URI = 'mongodb+srv://balqeesqasem:0000@cluster0-5fmxj.mongodb.net/test?retryWrites=true&w=majority';
// (/save) is the DB name if it's not exiest it wil creat it for me 


// for error things

mongoose.connect(DB_URI,{
  useNewUrlParser: true, useUnifiedTopology: true,
})
  .catch(err => console.log( err ));


const validInputNotev= new Input(); 
const note = new Notes();

note.execute(validInputNotev)
  .then(mongoose.disconnect);

//async await : callbacks to wait 
//await schema.save(); // save to DB




