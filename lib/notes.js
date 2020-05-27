'use strict';


class Notes {
  constructor(){
    this.id = getRandomInt(100) ;
  }
  execute(noteCheck={}){

    if ((noteCheck.payload !== undefined && noteCheck.payload !== true) && noteCheck.action !== 'wrong input'){
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

}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


module.exports= Notes;


