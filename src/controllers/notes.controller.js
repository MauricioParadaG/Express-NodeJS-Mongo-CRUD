const notesController = {};

const Note = require('../models/Note');

// New note
notesController.renderNoteForm = (req, res) => {
    console.log(req.user);
    res.render('notes/new-note');
};

notesController.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title: title, description: description});
  // Adding the user to the new note before save
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Sucessfully');
    res.redirect('/notes');
};

// Get All notes
notesController.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).sort({createdAt:'desc'}).lean();
    res.render('notes/all-notes', {notes});
};

// Edit note
notesController.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if(note.user != req.user.id){
        req.flash('error_msg', 'This page does not exist')
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', {note});
};

notesController.updateNote = async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title: title, description: description})
    req.flash('success_msg', 'Note Edited Sucessfully');

    res.redirect('/notes');
};

// Delete note
notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Sucessfully');

    res.redirect('/notes');
};



module.exports = notesController; 



