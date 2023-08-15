const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v1');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Storage {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
}