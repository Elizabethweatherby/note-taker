const router = require('express').Router();

router.get('/notes', (req, res) => {
    storage.getNotes().then((notes) => {
        return res.json(notes);
    })
})