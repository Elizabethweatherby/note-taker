const express = require('express');
const PORT = 3000;
const app = express();
const apiroute = require('./develop/routes/apiroute.js');
const htmlroute = require('./develop/routes/htmlroute.js');

app.use('/', htmlroute);
app.use('/api', apiroute);

app.listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}`);
})