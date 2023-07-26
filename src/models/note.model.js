const mongoose = require('mongoose');
import { number } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const  noteSchema = new Schema(
    {
  title :{
  type : String
},
   description : {
   type : String
  },
  createdBy : {
   type : String
  },
  isArchive: {
    type: Boolean,
    default: false,
  },
  isTrash: {
    type: Boolean,
    default: false,
  },
 
 color: {
  type: String, 
  default: '',
}, 
},
{
   timestamps: true
}
);
        
 export default model('notes', noteSchema);