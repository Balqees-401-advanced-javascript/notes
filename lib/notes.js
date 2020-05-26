'use strict'

const Notes = {
    id : 0
};

Notes.execute= function(noteCheck={}){
    //console.log('khhgll',noteCheck)
    if ((noteCheck.payload !== undefined && noteCheck.payload !== true) && noteCheck.action !== 'wrong input'){
        //console.log('hiiii')
        this.add(noteCheck); 
    }   
    // else {
    //     console.log('error')
    // }
}

Notes.add= function(noteCheck){

    let object = {};
    object[this.id]= noteCheck.payload;
    console.log(`Adding Note: ${object[this.id]}`);
    this.id++; 
}

module.exports= Notes;


