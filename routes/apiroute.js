const router = require('express').Router();
const Storage = require('../db/storage');

const storage = new Storage('db/db.json');

router.get('/notes', (req, res) => {
    storage.getNotes().then((notes) => {
        return res.json(notes);
    })
})

router.post('/notes', (req, res) => {
    const newNote = req.body;
    console.log("NEW NOTE", newNote);
    storage.addNote(newNote)
        .then(() => {
            res.status(201).json({ message: 'Note created successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Failed to create note' });
        });
});

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    storage.deleteNote(noteId)
        .then(() => {
            res.json({ message: 'Note deleted successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Failed to delete note' });
        });
});

module.exports = router;