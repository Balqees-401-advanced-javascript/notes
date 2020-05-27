'use strict';

const minimist = require('minimist');

function Input(){
  const args = minimist(process.argv.slice(2)); // give me all the argument (obj of command line) (take user command)
  //console.log('hiiiii ', args )
  this.action= this.validation(process.argv[2]); // name of argument i use
  //console.log('ACTION',this.action)
  this.payload = args.a || args.add;

  if (this.action ==='wrong input'){
    console.log('error key');
    return false; /// to stop and not continue the rest code 
  }

  else if (this.payload === '' || this.payload === true){
    console.log('error write input please');
    return false;
  }

  
  // console.log('hiiiiiiiiiiiiii')
  return {
    action: this.action,
    payload : this.payload,
    
  };

}

Input.prototype.validation = function(action = ''){
  let validMethod = /^--add$|^-a$/;
  //console.log( validMethod);
  // return validMethod ? 'add' : 'wrong input'
  return validMethod.test(action) ? 'add' : 'wrong input';
};

module.exports= Input;