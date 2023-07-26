import Note from '../models/note.model';

export const createNewNote = async (body) => {
  try {
    const data = await Note.create(body);
    return data;
  } catch (error) {
    throw new Error(`Failed to create the note: ${error.message}`);
  }
};



// export const getAllNotes = async () => {
//   try {
//     const data = await Note.find();
//     return data;
//   } catch (error) {
//     throw new Error(`Failed to fetch notes: ${error.message}`);
//   }
// };
// noteService.js


export const getAllNotes = async (userId) => {
  try {
    const data = await Note.find({ createdBy: userId });
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch notes: ${error.message}`);
  }
};


export const getNoteById = async (id, createdBy) => {
  try {
    const data = await Note.findOne({ _id:id, createdBy: createdBy });
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch note: ${error.message}`);
  }
};


// export const noteUpdateById = async (_id, body) => {
//   const updatedData = await Note.findByIdAndUpdate(_id, body);
//   if (!updatedData) {
//     throw new Error('Note does not exist');
//   }
//   return updatedData;
// };

export const noteUpdateById = async (id, body, createdBy) => {
  const updatedData = await Note.findOneAndUpdate({ _id: id, createdBy: createdBy }, body ,{new: true});
  console.log(updatedData);
  if (!updatedData) {
    throw new Error('Note does not exist');
  }
  return updatedData;
};





export const deleteNote = async (id, createdBy) => {
  const data = await Note.deleteOne({ _id: id, createdBy: createdBy });
  if (!data) {
    //if note is already deleted
    throw new Error('This Note does not exist ');
  }
  return 'note deleted succesfully';
};

