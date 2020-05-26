'use strict'

const minimist = require('minimist');

function Input(){
const args = minimist(process.argv.slice(2)); // give me all the argument (obj of command line) (take user command)
this.action= this.validation(process.argv[2]); // name of argument i use
this.payload = args.a || args.add;

if (this.action ==='wrong input'){
    console.log('error key');
    return false; /// to stop and not continue the rest code 
}

else if (this.payload === ''){
    console.log('error write input please');
    return false;
}
else{
    return {
        action: this.action,
        payload : this.payload
    }
}

}

Input.prototype.validation = function(action =''){
    let validMethod =/--add || -a/;
    return validMethod.test(action) ? 'add' : 'wrong input'
    }


module.exports= Input;