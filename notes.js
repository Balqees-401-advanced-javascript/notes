'use strict'

const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

//connecting the mongoose
const DB_URI = 'mongodb://localhost:27017/save';

// for error things
mongoose.connect(DB_URI,{
    useNewUrlParser: true, useUnifiedTopology: true
});


const validInputNotev= new Input(); 
const note = new Notes();

note.execute(validInputNotev);

