import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';



export const createNewNote = async (req, res, next) => {
    try {
      const data = await noteService.createNewNote(req.body);
      console.log("It Is Request :", req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note Created successfully'
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Error creating the note: ${error.message}`,
      });
    }
  };


  export const getAllNotes = async (req, res, next) => {
    try {
     const userId = req.body.createdBy;
      //req.body.createdBy = user.id;
    const data = await noteService.getAllNotes(userId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Error Fetching Notes: ${error.message}`
      });
    }
  }; 


  export const getNoteById = async (req, res, next) => {
    try {
      const createdBy = req.body.createdBy;
      const data = await noteService.getNoteById(req.params.id ,createdBy);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `Note Not Found: ${error.message}`
      });
    }
  };

  export const noteUpdateById = async (req, res, next) => {
    try {
      const createdBy = req.body.createdBy;
      const updateddata = await noteService.noteUpdateById(req.params.id, req.body, createdBy,{new: true});
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: updateddata,
        message: 'Note updated successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `Update Failed: ${error.message}`
      });
    }
  };
  

  export const deleteNote = async (req, res) => {
    try {
      const createdBy = req.body.createdBy;
      await noteService.deleteNote(req.params.id,createdBy); 
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'Note deleted successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `Failed to delete the note: ${error.message}`
      });
    }
  };

  export const  isArchiveNote = async (req, res, next) => {
    try {
      const createdBy = req.body.createdBy;
      const data = await noteService.isArchiveNote(req.params.id,createdBy); 
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note Archived successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`Failed to Archive the note: ${error.message}`
      });
    }
  };



  

  export const isUnarchiveNote = async (req, res, next) => {
    try {
      const createdBy = req.body.createdBy;
      const data = await noteService.isUnarchiveNote(req.params.id, createdBy); 
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note unarchived successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `Failed to unarchive the note: ${error.message}`
      });
    }
  };
  

  


  export const isTrashNote = async (req, res, next) => {
    try {
      const createdBy = req.body.createdBy;
      const data = await noteService.isTrashNote(req.params.id, createdBy);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note trashed successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `Failed to trash the note: ${error.message}`
      });
    }
  };
  


  export const isUntrashNote = async (req, res, next) => {
    try {
      const createdBy = req.body.createdBy;
      const data = await noteService.isUntrashNote(req.params.id, createdBy); 
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note restored from trash successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `Failed to restore the note from trash: ${error.message}`
      });
    }
  };
  

