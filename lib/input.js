'use strict'

const minimist = require('minimist');

function Input(){
const args = minimist(process.argv.slice(2)); // give me all the argument (obj of command line) (take user command)
// console.log('hiiiiiiii',args); 
this.action= this.validation(process.argv[2]); // name of argument i use
// console.log(process.argv[2]);
this.payload = args.a;

if (this.action ==='wrong input'){
    console.log('error key');
    return false; /// to stop and not continue the rest code 
}

// console.log(process.argv[2]);
this.payload = args.a || args.add;
   // 
if (this.payload === true){
    console.log('error write input please');
    return false;
}

return {
    action: this.action,
    payload : this.payload
}
}

Input.prototype.validation = function(action =''){
    let validMethod =/--add|-a/;
    return validMethod.test(action) ? 'add' : 'wrong input'
    }


// Input.prototype.newNote = function(note){
//     let validNote = note;
//     return (validation) ? new Note : console.log('invalid input');
//    }
module.exports= Input;