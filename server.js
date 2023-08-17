const express = require('express');
const PORT = 3000;
const app = express();
const apiroute = require('./routes/apiroute');
const htmlroute = require('./routes/htmlroute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use('/api', apiroute);
app.use('/', htmlroute);

app.listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}`);
})