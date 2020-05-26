'use strict'

const Notes = {
    id : 0
};

Notes.execute= function(noteCheck={}){
    if (noteCheck.payload && noteCheck.action){
        this.add(noteCheck);
       
    }
    
}

Notes.add= function(noteCheck){
    let object = {};
    object[this.id]= noteCheck.payload;
    console.log(`Adding Note: ${object[this.id]}`);
    this.id++; 
}

module.exports= Notes;


