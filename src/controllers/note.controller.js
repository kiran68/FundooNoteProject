import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';



export const createNewNote = async (req, res, next) => {
    try {
      const data = await noteService.newNoteData(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note Created successfully'
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'EError creating the note: ' + error.message,
      });
    }
  };


  export const getAllNotes = async (req, res, next) => {
    try {
      const data = await noteService.getAllNotes();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching notes: ' + error.message,
      });
    }
  };


  export const getNoteById = async (req, res, next) => {
    try {
      const data = await noteService.getNoteById (req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: 'Note Not Found: ' + error.message
      });
    }
  };

  export const noteUpdateById = async (req,res,next) => {
    try{
      const updateddata = await noteService.noteUpdateById(req.params.id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: updateddata,
        message: 'Note updated successfully'
      });
     
    }catch(error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: 'Update Filed: ' + error.message
      });
    }
  };

  export const deleteNote = async (req, res) => {
    try {
      await noteService.deleteNote(req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'Note deleted successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: 'Note Is Note Delete: ' + error.message
      });
    }
  };

