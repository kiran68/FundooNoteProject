import Note from '../models/note.model';

export const newNoteData = async (body) => {
  const data = await Note.create(body);
  return data;
};

export const getAllNotes = async () => {
  const data = await Note.find();
  return data;
};

export const getNoteById = async (id) => {
  const data = await Note.findOne({ _id: id });
  if (!data) {
    throw new Error('Note does not exist');
  }
  return data;
};

export const noteUpdateById = async (id, body) => {
  const updatedData = await Note.findByIdAndUpdate(id, body, { new: true });
  if (!updatedData) {
    throw new Error('Note does not exist');
  }
  return updatedData;
};

export const deleteNote = async (id) => {
  const data = await Note.deleteOne({ id: id  });
  if (!data) {
    //if note is already deleted
    throw new Error('This Note does not exist ');
  }
  return 'note deleted succesfully';
};