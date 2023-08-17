const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v1');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Storage {
    read() {
        return readFileAsync('db/db.json', 'utf8');
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
    addNote(title, text) {
        return this.getNotes().then((notes) => {
            const newNote = {
                id: uuid(),
                title,
                text,
            };
            notes.push(newNote);
            return this.write(notes).then(() => newNote);
        });
    }
}

module.exports = Storage;