'use strict';
const NoteSchema = require('./notes-schema');

class AllMethodes{
  constructor(){

  }
  async create(noteCheck){
    let schema = new NoteSchema({text:noteCheck.payload,category:noteCheck.category});
    let addedNote = await schema.save();
    console.log(addedNote);
    return addedNote;
  }

  async get(noteCheck){
    if(noteCheck.list !== true){
      let listCreat = await NoteSchema.find({category:noteCheck.list});
      console.log(listCreat);
      return listCreat;
    }
    else{
      let listCreat = await NoteSchema.find();
      console.log(listCreat);
      return listCreat;
    }
  }


  async delete(noteCheck){
    let deleteNote = await NoteSchema.findByIdAndDelete(noteCheck.id);
    console.log('deleted');
    return deleteNote;
  }
  async update(noteCheck){
    let UpdateNote = await NoteSchema.findByIdAndUpdate({_id:noteCheck.id} , {text:noteCheck.update});
    console.log('updated');
    return UpdateNote;
  }

}

module.exports= new AllMethodes();