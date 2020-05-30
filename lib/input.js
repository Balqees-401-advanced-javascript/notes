/* eslint-disable indent */

'use strict' ;

const minimist = require('minimist');

class Input{
  constructor(){
     this.args = minimist(process.argv.slice(2)); // give me all the argument (obj of command line) (take user command) //trans the array to obj
    return this.validation();
    }
  validation(){
    if ((this.args.a || this.args.add) && (this.args.a !== true|| this.args.add !== true)){

      return {action:'add' , payload:this.args.a || this.args.add , category: (this.args.category && this.args.category !== true) ? this.args.category: 'general'};
    }
    else if (this.args.list|| this.args.l){
      return { action:'list' , list:this.args.list  || this.args.l};
    }

    else if (this.args.d|| this.args.delete){
      return { action : 'delete' , id : this.args.delete || this.args.d};
    }

    else if (this.args.u || this.args.update){
      return {action : 'update', id : this.args.u || this.args.update , update:this.args._[0]};
    }
    else {
      console.log('you type error key');
    }
  }
}

module.exports= Input;

//if (args.category && args.category !== true){
       
// }
// else{
//   console.log('error');
// }

//node notes.js --add jggjgj --category jghjhh
//console.log('hiiiiiiii',args); 
// this.action= this.validation(process.argv[2]); // name of argument i use
// // this.category=this.validation(process.argv[4]);   
// if (this.action ==='wrong input'){
//   console.log('error key');
//   return false; /// to stop and not continue the rest code 
// }
// this.payload = args.a || args.add;
// if ( this.payload === '' || this.payload === true){
//   console.log('error write input please');
//   return false;
// }

     
// return {
//   action: this.action,
//   payload : this.payload,
// category: this.category,
// };
//node notes.js --add jggjgj --category jghjhh
// validation(action){
//   let validMethod =/^--add$|^-a$|^--list$|^-l$|^--delete$/;
//   // console.log(process.argv[2].replace(/^-+/, ''));
//   return validMethod.test(action) ? process.argv[2].replace(/^-+/, ''): 'wrong input';

// }