const express = require('express');
require('dotenv').config();

const app = express();

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

// get request with simple response on root
app.get('/', (req, res) => {
    res.send('Hello World');
})