import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as noteController from  '../controllers/note.controller';
import { noteValidator } from '../validators/note.validator';


const router = express.Router();

//create new notes
router.post('', noteValidator,userAuth,noteController.createNewNote);
// get  All Notes
router.get('',userAuth,noteController.getAllNotes);
// get note  by id 
router.get('/:id',userAuth, noteController.getNoteById);
// updaye note by id 
router.put('/:id',noteController.noteUpdateById);
// delete note
router.delete('/:id', noteController.deleteNote);


export default router;