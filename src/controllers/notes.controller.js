const notesController = {};

// New note
notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesController.createNewNote = (req, res) => {
    console.log(req.body);
    res.send('New note created');
};

// Get All notes
notesController.renderNotes = (req, res) => {
    res.send('All Notes');
};

// Edit note
notesController.renderEditForm = (req, res) => {
    res.send('Form Note that is going to be edited');
};

notesController.updateNote = (req, res) => {
    res.send('Note Updated or Note not founded');
};

// Delete note
notesController.deleteNote = (req, res) => {
    res.send('Note Deleted');
};



module.exports = notesController; 



