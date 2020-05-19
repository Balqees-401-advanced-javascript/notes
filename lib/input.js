'use strict'

const minimist = require('minimist');


class Input{
    constructor(){
        const args = minimist(process.argv.slice(2)); // give me all the argument (obj of command line) (take user command)
        // console.log('hiiiiiiii',args); 
        this.action= this.validation(process.argv[2]); // name of argument i use
        //console.log('hiiii',this.action);
        if (this.action ==='wrong input'){
            console.log('error key');
            return false; /// to stop and not continue the rest code 
        }
       
        // console.log(process.argv[2]);
        this.payload = args.a || args.add;
           // 
        if ( this.payload === true){
            console.log('error write input please');
            return false;
        }

        return {
            action: this.action,
            payload : this.payload
        }
    }

    validation(action){
        let validMethod =/--add|-a/;
        return validMethod.test(action) ? 'add' : 'wrong input'
    }
}

module.exports= Input;