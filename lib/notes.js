'use strict'

const Notes = {};

Notes.execute= function(noteCheck){
    if (noteCheck){
        this.add(noteCheck);
    }
    
}



Notes.add= function(noteCheck){
    let object = {};
    let id = 0;
    object.text = noteCheck.payload;
    object.id = id;
  
    console.log(`Adding Note: ${object.text}`);
    // console.log(object.id);

}

module.exports= Notes;