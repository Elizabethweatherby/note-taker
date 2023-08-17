const fs = require('fs');
const util = require('util');
const { v1: uuidv1 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Storage {
    constructor(filePath) {
        this.filePath = filePath;
    }

    read() {
        return readFileAsync(this.filePath, 'utf8');
    }

    write(data) {
        return writeFileAsync(this.filePath, JSON.stringify(data));
    }

    getNotes() {
        return this.read().then((notesData) => {
            try {
                return JSON.parse(notesData) || [];
            } catch (error) {
                return [];
            }
        });
    }

    addNote({ title, text }) {
        console.log("TITLE", title);
        console.log("TEXT", text);
        return this.getNotes().then((notes) => {
            const newNote = {
                id: uuidv1(),
                title,
                text,
            };
            notes.push(newNote);
            return this.write(notes).then(() => newNote);
        });
    }
}




module.exports = Storage;