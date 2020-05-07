const notesController = {};

const Note = require('../models/Note');

// New note
notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesController.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title: title, description: description});
    await newNote.save();

    res.redirect('/notes');
};

// Get All notes
notesController.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', {notes});
};

// Edit note
notesController.renderEditForm = (req, res) => {
    res.send('Form Note that is going to be edited');
};

notesController.updateNote = (req, res) => {
    res.send('Note Updated or Note not founded');
};

// Delete note
notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
};



module.exports = notesController; 



