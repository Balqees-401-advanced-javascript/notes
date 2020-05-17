'use strict'

const minimist = require('minimist');

function Input(){
const args = minimist(process.args.slice(2)); // give me all the argument (obj of command line)
this.method= this.validation(args.m); // name of argument i use
}

function Note(action,payload){
    this.action = action;
    this.payload = payload;
}

Input.prototype.validation = function(method =''){
 let validMethod =/--add|-a/;
 return validMethod.test(method) ? method : '-a'
}
Input.prototype.newNote = function(note){
    let validNote = note;
    return (validation) ? new Note : console.log('invalid input');
   }
module.exports= Input;