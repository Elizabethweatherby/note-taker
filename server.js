const express = require('express');
const PORT = 3000;
const app = express();
const apiroute = require('./routes/apiroute.js');
const htmlroute = require('./routes/htmlroute.js');

app.listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}`);
})