'use strict'

const minimist = require('minimist');

function Input(){
const args = minimist(process.argv.slice(2)); // give me all the argument (obj of command line) (take user command)
// console.log('hiiiiiiii',args); 
this.action= this.validation(process.argv[2]); // name of argument i use
// console.log(process.argv[2]);
this.payload = args.a;
}



Input.prototype.validation = function(action =''){
 let validMethod =/--add|-a/;
 return validMethod.test(action) ? action : '-a'
}

// Input.prototype.newNote = function(note){
//     let validNote = note;
//     return (validation) ? new Note : console.log('invalid input');
//    }
module.exports= Input;