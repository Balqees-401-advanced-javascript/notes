'use strict'

class Notes {
    constructor(){
       this.id = 0;
    }
    execute(noteCheck={}){

        if (noteCheck.payload && noteCheck.action){
            this.add(noteCheck);
        }
    else {
        
         return;
    }
    }
    add(noteCheck){
        let object = {};
        // object.text = noteCheck.payload;
        object[this.id] = noteCheck.payload;
        console.log(`Adding Note: ${object[this.id]} with id : ${this.id}`);
        this.id++ ;
    }

};


module.exports= Notes;