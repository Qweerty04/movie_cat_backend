const express = require('express');

const app = express();

// listen for requests
app.listen(3001, () => {
    console.log('Listening on port 3001');
})