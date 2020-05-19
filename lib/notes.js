'use strict'
const NotsToSave = require('../lib/model/notes-schema')
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
     async add(noteCheck){
        let object = {};
        // object.text = noteCheck.payload;
        object[this.id] = noteCheck.payload;
        console.log(`Adding Note: ${object[this.id]} with id : ${this.id}`);
        this.id++ ;
        let noteToAdd = new NotsToSave(noteCheck);
        let saved = await noteToAdd.add();
      
    }

};


module.exports= Notes;